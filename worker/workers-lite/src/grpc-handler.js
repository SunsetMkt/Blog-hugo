/**
 * gRPC transport handler module
 * Handles HTTP POST requests for gRPC transport protocol using LITE protocol
 */

import { parseLiteHeaderStream } from "./grpc.js";
import { getConnectionOrder, connectWithFallback } from "./connection.js";
import { parseSocks5Config } from "./socks5.js";

/**
 * Counter for tracking bytes transferred
 */
class Counter {
    constructor() {
        this.count = 0;
    }

    add(n) {
        this.count += n;
    }

    get() {
        return this.count;
    }
}

/**
 * Format bytes as human-readable size
 * @param {number} bytes - Number of bytes
 * @returns {string} Formatted size string
 */
// eslint-disable-next-line no-unused-vars
function toSize(bytes) {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

/**
 * Upload data from request to remote connection
 * @param {Counter} counter - Byte counter
 * @param {WritableStreamDefaultWriter} writer - Writer to remote connection
 * @param {Object} lite - Parsed LITE header with data and reader
 * @returns {Promise<void>}
 */
async function uploadToRemote(counter, writer, lite) {
    console.debug("[gRPC] Starting upload to remote");

    async function innerUpload(d, src) {
        if (!d || d.length === 0) {
            return;
        }
        counter.add(d.length);
        console.debug("[gRPC] Uploading chunk", {
            source: src,
            length: d.length,
            totalBytes: counter.get(),
        });
        await writer.write(d);
    }

    // Write initial data
    await innerUpload(lite.data, "first packet");

    // Continue reading from stream
    while (!lite.done) {
        const r = await lite.reader.read();
        if (r.done) {
            lite.done = true;
            break;
        }
        await innerUpload(r.value, "remain packets");
    }

    console.info("[gRPC] Upload to remote completed", {
        totalBytes: counter.get(),
    });
}

/**
 * Create uploader for request body to remote
 * @param {Object} lite - Parsed LITE header
 * @param {WritableStream} writable - Remote connection writable stream
 * @returns {Object} Object with counter and done promise
 */
function createUploader(lite, writable) {
    const counter = new Counter();
    const done = new Promise((resolve, reject) => {
        const writer = writable.getWriter();
        uploadToRemote(counter, writer, lite)
            .then(resolve)
            .catch(reject)
            .finally(() => {
                writer.close().catch(() => {
                    // Ignore close errors
                });
            });
    });

    return {
        counter,
        done,
    };
}

/**
 * Create downloader for remote responses
 * @param {Uint8Array} resp - LITE response header
 * @param {ReadableStream} remoteReadable - Remote connection readable stream
 * @returns {Object} Object with readable stream, counter, and done promise
 */
function createDownloader(resp, remoteReadable) {
    console.debug("[gRPC] Creating downloader for remote responses");
    const counter = new Counter();
    let stream;

    const done = new Promise((resolve, reject) => {
        stream = new TransformStream(
            {
                start(controller) {
                    // Send LITE response header first
                    counter.add(resp.length);
                    console.debug("[gRPC] Sending LITE response header", {
                        length: resp.length,
                    });
                    controller.enqueue(resp);
                },
                transform(chunk, controller) {
                    counter.add(chunk.length);
                    console.debug("[gRPC] Downloading chunk from remote", {
                        length: chunk.length,
                        totalBytes: counter.get(),
                    });
                    controller.enqueue(chunk);
                },
                cancel(reason) {
                    console.warn("[gRPC] Download cancelled", { reason });
                    reject(`download cancelled: ${reason}`);
                },
            },
            null,
            new ByteLengthQueuingStrategy({ highWaterMark: 65536 }),
        );
        remoteReadable
            .pipeTo(stream.writable)
            .catch((err) => {
                console.warn("[gRPC] Download pipe error:", err);
                reject(err);
            })
            .finally(() => {
                console.info("[gRPC] Download completed", {
                    totalBytes: counter.get(),
                });
                resolve();
            });
    });

    return {
        readable: stream.readable,
        counter,
        done,
    };
}

/**
 * Connect to remote host with fallback support
 * @param {Object} lite - Parsed LITE header
 * @param {Array<string>} methods - Connection methods to try
 * @param {Object|null} socks5Config - SOCKS5 configuration
 * @param {string|null} proxyIP - Proxy IP configuration
 * @returns {Promise<Object|null>} Object with uploader and downloader, or null on failure
 */
async function connectToRemote(lite, methods, socks5Config, proxyIP) {
    console.debug("[gRPC] Connecting to remote", {
        hostname: lite.hostname,
        port: lite.port,
        methods,
    });

    const remote = await connectWithFallback(
        methods,
        lite.hostname,
        lite.port,
        socks5Config,
        proxyIP,
    );

    if (!remote) {
        console.error("[gRPC] Remote connection failed");
        return null;
    }

    console.debug("[gRPC] Creating uploader and downloader");
    const uploader = createUploader(lite, remote.writable);
    const downloader = createDownloader(lite.resp, remote.readable);

    console.info(
        "[gRPC] Remote connection established with uploader and downloader",
    );
    return {
        downloader,
        uploader,
    };
}

/**
 * Handle gRPC transport client connection
 * @param {ReadableStream} body - Request body stream
 * @param {string} uuid - Expected UUID
 * @param {Array<string>} methods - Connection methods
 * @param {Object|null} socks5Config - SOCKS5 configuration
 * @param {string|null} proxyIP - Proxy IP configuration
 * @returns {Promise<Object|null>} Object with readable stream and closed promise
 */
async function handleGrpcClient(body, uuid, methods, socks5Config, proxyIP) {
    console.debug("[gRPC] Handling gRPC client connection");

    const lite = await parseLiteHeaderStream(body, uuid);
    if (typeof lite !== "object" || !lite) {
        console.error("[gRPC] Failed to parse LITE header from stream");
        return null;
    }

    console.info("[gRPC] LITE header parsed from stream", {
        hostname: lite.hostname,
        port: lite.port,
    });

    const r = await connectToRemote(lite, methods, socks5Config, proxyIP);
    if (r === null) {
        console.error("[gRPC] Failed to connect to remote");
        return null;
    }

    console.debug("[gRPC] Setting up connection lifecycle tracking");
    const connectionClosed = new Promise((resolve) => {
        r.downloader.done
            .catch((err) => {
                console.warn("[gRPC] Downloader error:", err);
            })
            .finally(() => r.uploader.done)
            .catch((err) => {
                console.warn("[gRPC] Uploader error:", err);
            })
            .finally(() => {
                console.info("[gRPC] gRPC connection closed");
                resolve();
            });
    });

    return {
        readable: r.downloader.readable,
        closed: connectionClosed,
    };
}

/**
 * Handle POST request for gRPC transport
 * @param {Request} request - HTTP request
 * @param {string} uuid - Expected UUID
 * @returns {Promise<Response|null>} Response or null on error
 */
export async function handleGrpcPost(request, uuid) {
    console.info("[gRPC] Handling gRPC POST request");

    if (request.method !== "POST") {
        console.debug("[gRPC] Request method is not POST");
        return null;
    }

    const requestURL = new URL(request.url);
    console.debug("[gRPC] Request URL parsed", {
        pathname: requestURL.pathname,
        searchParams: requestURL.search,
    });

    // Parse connection configuration from URL
    const socks5QueryParam = requestURL.searchParams.get("s5");
    const proxyQueryParam = requestURL.searchParams.get("proxyip");
    const pathParameter = requestURL.pathname.slice(1);

    console.debug("[gRPC] Parsing connection configuration", {
        hasSocks5Param: !!socks5QueryParam,
        hasProxyParam: !!proxyQueryParam,
        pathParameter,
    });

    // Determine SOCKS5 configuration source (query param or path)
    const socks5ConfigString = socks5QueryParam || pathParameter;
    const socks5Config = parseSocks5Config(socks5ConfigString);
    const proxyIP = proxyQueryParam ? String(proxyQueryParam) : null;

    // Get connection order based on mode
    const connectionOrder = getConnectionOrder(requestURL);

    try {
        const result = await handleGrpcClient(
            request.body,
            uuid,
            connectionOrder,
            socks5Config,
            proxyIP,
        );

        if (!result) {
            console.warn("[gRPC] handleGrpcClient returned null");
            return null;
        }

        console.info("[gRPC] gRPC request handled successfully");
        return new Response(result.readable, {
            headers: {
                "X-Accel-Buffering": "no",
                "Cache-Control": "no-store",
                Connection: "Keep-Alive",
                "User-Agent": "Go-http-client/2.0",
                "Content-Type": "application/grpc",
            },
        });
    } catch (err) {
        console.error("[gRPC] Error handling gRPC request:", err);
        return null;
    }
}
