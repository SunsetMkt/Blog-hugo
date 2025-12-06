/**
 * DNS over HTTPS (DoH) module
 * Handles UDP DNS queries via DNS over HTTPS
 */

/**
 * Creates a DNS handler that processes DNS queries via DoH
 * @param {WebSocket} webSocket - WebSocket connection to send responses through
 * @param {Uint8Array} responseHeader - Response header to prepend
 * @returns {Object} Object with readable and writable streams, and a writer
 */
export function createDNSHandler(webSocket, responseHeader) {
    console.info("[DNS] Creating DNS handler for DoH queries");
    let isFirstMessageSent = false;

    // Transform stream to parse DNS messages
    const { readable, writable } = new TransformStream({
        transform(chunk, controller) {
            console.debug("[DNS] Parsing DNS message chunk", {
                byteLength: chunk.byteLength,
            });

            // DNS messages are length-prefixed (2 bytes)
            for (let currentOffset = 0; currentOffset < chunk.byteLength; ) {
                // Ensure we have at least 2 bytes for the length prefix
                if (currentOffset + 2 > chunk.byteLength) {
                    console.debug(
                        "[DNS] Incomplete length prefix, waiting for more data",
                    );
                    break;
                }
                const messageLength = new DataView(
                    chunk.slice(currentOffset, currentOffset + 2),
                ).getUint16(0);

                console.debug("[DNS] DNS message length parsed", {
                    messageLength,
                });

                // Ensure we have the complete message
                if (currentOffset + 2 + messageLength > chunk.byteLength) {
                    console.debug(
                        "[DNS] Incomplete message, waiting for more data",
                    );
                    break;
                }
                controller.enqueue(
                    chunk.slice(
                        currentOffset + 2,
                        currentOffset + 2 + messageLength,
                    ),
                );
                currentOffset += 2 + messageLength;
            }
        },
    });

    // Pipe DNS queries to DoH service
    readable.pipeTo(
        new WritableStream({
            async write(query) {
                console.debug("[DNS] Processing DNS query", {
                    queryLength: query.byteLength,
                });

                try {
                    // Send DNS query to Cloudflare's DNS over HTTPS service
                    console.debug(
                        "[DNS] Sending query to DoH service (1.1.1.1)",
                    );
                    const response = await fetch("https://1.1.1.1/dns-query", {
                        method: "POST",
                        headers: {
                            "content-type": "application/dns-message",
                        },
                        body: query,
                    });

                    console.debug("[DNS] DoH response received", {
                        status: response.status,
                    });

                    // Send response back through WebSocket
                    if (webSocket.readyState === 1) {
                        const dnsResponseData = new Uint8Array(
                            await response.arrayBuffer(),
                        );
                        console.debug(
                            "[DNS] Sending DNS response back to client",
                            {
                                responseLength: dnsResponseData.length,
                                isFirstMessage: !isFirstMessageSent,
                            },
                        );
                        webSocket.send(
                            new Uint8Array([
                                ...(isFirstMessageSent ? [] : responseHeader), // Include header only on first message
                                dnsResponseData.length >> 8, // Length high byte
                                dnsResponseData.length & 0xff, // Length low byte
                                ...dnsResponseData, // DNS response data
                            ]),
                        );
                        isFirstMessageSent = true;
                        console.info("[DNS] DNS query processed successfully");
                    } else {
                        console.warn("[DNS] WebSocket not in ready state", {
                            readyState: webSocket.readyState,
                        });
                    }
                } catch (error) {
                    console.warn("[DNS] Error processing DNS query:", error);
                    // Silently ignore DNS errors to avoid disrupting the connection
                }
            },
        }),
    );

    return {
        readable,
        writable,
        writer: writable.getWriter(),
    };
}
