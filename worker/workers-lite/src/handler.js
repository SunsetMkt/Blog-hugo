/**
 * WebSocket handler module
 * Main logic for handling LITE WebSocket connections
 */

import { validateUUID, processEarlyData } from "./auth.js";
import { parseSocks5Config } from "./socks5.js";
import { getConnectionOrder, connectWithFallback } from "./connection.js";
import { createDNSHandler } from "./dns.js";
import { parseLiteHeader, LiteCommand } from "./protocol.js";

/**
 * Handles incoming WebSocket connections for LITE protocol
 * @param {Request} request - The incoming request
 * @param {string} expectedUUID - The expected UUID for authentication
 * @returns {Response} WebSocket response
 */
export async function handleWebSocket(request, expectedUUID) {
    console.info("[Handler] WebSocket connection initiated");

    // Establish WebSocket pair
    const [clientWebSocket, serverWebSocket] = Object.values(
        // eslint-disable-next-line no-undef
        new WebSocketPair(),
    );
    serverWebSocket.accept();
    console.debug("[Handler] WebSocket pair created and accepted");

    const requestURL = new URL(request.url);
    console.debug("[Handler] Request URL parsed", {
        pathname: requestURL.pathname,
        searchParams: requestURL.search,
    });

    // Fix for URL-encoded query parameters in pathname
    if (requestURL.pathname.includes("%3F")) {
        const decodedPathname = decodeURIComponent(requestURL.pathname);
        const queryStartIndex = decodedPathname.indexOf("?");
        if (queryStartIndex !== -1) {
            requestURL.search = decodedPathname.substring(queryStartIndex);
            requestURL.pathname = decodedPathname.substring(0, queryStartIndex);
        }
    }

    // Parse connection configuration from URL
    const socks5QueryParam = requestURL.searchParams.get("s5");
    const proxyQueryParam = requestURL.searchParams.get("proxyip");
    const pathParameter = requestURL.pathname.slice(1);

    console.debug("[Handler] Parsing connection configuration", {
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

    // Connection state
    let remoteSocket = null;
    let dnsStreamWriter = null;
    let isDNSMode = false;

    // Create readable stream from WebSocket messages
    const incomingDataStream = new ReadableStream({
        start(controller) {
            // Handle incoming WebSocket messages
            serverWebSocket.addEventListener("message", (event) => {
                controller.enqueue(event.data);
            });

            // Handle WebSocket close
            serverWebSocket.addEventListener("close", () => {
                console.info("[Handler] WebSocket closed");
                remoteSocket?.close();
                controller.close();
            });

            // Handle WebSocket errors
            serverWebSocket.addEventListener("error", () => {
                console.error("[Handler] WebSocket error occurred");
                remoteSocket?.close();
                controller.error();
            });

            // Process early data from handshake if available
            const earlyDataHeader = request.headers.get(
                "sec-websocket-protocol",
            );
            if (earlyDataHeader) {
                console.debug("[Handler] Processing early data from handshake");
                const earlyData = processEarlyData(earlyDataHeader);
                if (earlyData) {
                    console.debug("[Handler] Early data enqueued");
                    controller.enqueue(earlyData);
                }
            }
        },
    });

    // Process outgoing messages
    incomingDataStream
        .pipeTo(
            new WritableStream({
                async write(incomingData) {
                    // If in DNS mode, route to DNS handler
                    if (isDNSMode) {
                        return dnsStreamWriter?.write(incomingData);
                    }

                    // If already connected, forward data to remote socket
                    if (remoteSocket) {
                        const remoteWriter = remoteSocket.writable.getWriter();
                        await remoteWriter.write(incomingData);
                        remoteWriter.releaseLock();
                        return;
                    }

                    // First message: validate and parse LITE header
                    console.debug("[Handler] Processing first message");
                    if (!validateUUID(incomingData, expectedUUID)) {
                        console.error(
                            "[Handler] UUID validation failed, ignoring message",
                        );
                        return; // Invalid UUID, ignore
                    }

                    // Parse LITE protocol header
                    const parsedHeader = parseLiteHeader(incomingData);
                    if (!parsedHeader) {
                        console.error("[Handler] Failed to parse LITE header");
                        return; // Invalid header
                    }

                    const initialPayload = incomingData.slice(
                        parsedHeader.headerLength,
                    );

                    // Handle UDP DNS queries
                    if (parsedHeader.command === LiteCommand.UDP) {
                        if (parsedHeader.port !== 53) {
                            console.warn(
                                "[Handler] UDP request for non-DNS port rejected",
                                {
                                    port: parsedHeader.port,
                                },
                            );
                            return; // Only DNS (port 53) is supported for UDP
                        }

                        console.info("[Handler] Switching to DNS mode");
                        isDNSMode = true;
                        const dnsHandler = createDNSHandler(
                            serverWebSocket,
                            parsedHeader.responseHeader,
                        );
                        dnsStreamWriter = dnsHandler.writer;
                        return dnsStreamWriter.write(initialPayload);
                    }

                    // Handle TCP connections
                    console.info("[Handler] Establishing TCP connection");
                    const connectedSocket = await connectWithFallback(
                        connectionOrder,
                        parsedHeader.address,
                        parsedHeader.port,
                        socks5Config,
                        proxyIP,
                    );

                    if (!connectedSocket) {
                        console.error(
                            "[Handler] Failed to establish connection - all methods failed",
                        );
                        return; // All connection methods failed
                    }

                    console.info(
                        "[Handler] TCP connection established successfully",
                    );

                    remoteSocket = connectedSocket;

                    // Send initial payload
                    console.debug("[Handler] Sending initial payload", {
                        payloadLength: initialPayload.byteLength,
                    });
                    const remoteWriter = connectedSocket.writable.getWriter();
                    await remoteWriter.write(initialPayload);
                    remoteWriter.releaseLock();

                    // Pipe remote socket data back to WebSocket
                    console.debug(
                        "[Handler] Setting up bidirectional data pipe",
                    );
                    let isFirstResponse = true;
                    connectedSocket.readable
                        .pipeTo(
                            new WritableStream({
                                write(responseChunk) {
                                    if (serverWebSocket.readyState === 1) {
                                        console.debug(
                                            "[Handler] Forwarding response to client",
                                            {
                                                chunkLength:
                                                    responseChunk.byteLength,
                                                isFirstResponse,
                                            },
                                        );
                                        // Prepend header to first message only
                                        if (isFirstResponse) {
                                            serverWebSocket.send(
                                                new Uint8Array([
                                                    ...parsedHeader.responseHeader,
                                                    ...new Uint8Array(
                                                        responseChunk,
                                                    ),
                                                ]),
                                            );
                                            isFirstResponse = false;
                                        } else {
                                            serverWebSocket.send(responseChunk);
                                        }
                                    }
                                },
                                close() {
                                    console.info(
                                        "[Handler] Remote connection closed",
                                    );
                                    if (serverWebSocket.readyState === 1) {
                                        serverWebSocket.close();
                                    }
                                },
                                abort() {
                                    console.warn(
                                        "[Handler] Remote connection aborted",
                                    );
                                    if (serverWebSocket.readyState === 1) {
                                        serverWebSocket.close();
                                    }
                                },
                            }),
                        )
                        .catch((error) => {
                            console.warn("[Handler] Pipe error:", error);
                            // Silently handle pipe errors
                        });
                },
            }),
        )
        .catch((error) => {
            console.warn("[Handler] Stream error:", error);
            // Silently handle stream errors
        });

    // Return WebSocket response
    console.info("[Handler] WebSocket response created successfully");
    return new Response(null, {
        status: 101,
        webSocket: clientWebSocket,
    });
}
