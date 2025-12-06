/**
 * Connection management module
 * Handles different connection modes (direct, SOCKS5, proxy)
 */

import { connect } from "cloudflare:sockets";
import { connectViaSocks5 } from "./socks5.js";

/**
 * Connection modes supported by the worker
 */
export const ConnectionMode = {
    DIRECT: "direct",
    SOCKS5: "s5",
    PROXY: "proxy",
    AUTO: "auto",
};

/**
 * Parses URL parameters to determine connection order
 * @param {URL} url - The request URL
 * @returns {Array<string>} Ordered array of connection methods to try
 */
export function getConnectionOrder(url) {
    const connectionMode = url.searchParams.get("mode") || "auto";
    console.debug("[Connection] Determining connection order", {
        connectionMode,
    });

    // Legacy proxy mode maps to direct + proxy
    if (connectionMode === "proxy") {
        console.info(
            "[Connection] Legacy proxy mode detected, using direct + proxy",
        );
        return ["direct", "proxy"];
    }

    // Single mode specified
    if (connectionMode !== "auto") {
        console.info("[Connection] Single connection mode specified", {
            mode: connectionMode,
        });
        return [connectionMode];
    }

    // Auto mode: determine order from URL parameter sequence
    const connectionOrder = [];
    const queryString = url.search.slice(1);

    for (const parameterPair of queryString.split("&")) {
        const parameterKey = parameterPair.split("=")[0];
        if (parameterKey === "direct") {
            connectionOrder.push("direct");
        } else if (parameterKey === "s5") {
            connectionOrder.push("s5");
        } else if (parameterKey === "proxyip") {
            connectionOrder.push("proxy");
        }
    }

    // Default to direct connection if no parameters specified
    const finalOrder =
        connectionOrder.length > 0 ? connectionOrder : ["direct"];
    console.info("[Connection] Auto mode connection order determined", {
        order: finalOrder,
    });
    return finalOrder;
}

/**
 * Establishes a connection using the specified method
 * @param {string} connectionMethod - Connection method ('direct', 's5', or 'proxy')
 * @param {string} targetHost - Target hostname
 * @param {number} targetPort - Target port
 * @param {Object|null} socks5Config - SOCKS5 configuration (if method is 's5')
 * @param {string|null} proxyIP - Proxy IP configuration (if method is 'proxy')
 * @returns {Promise<Socket>} Connected socket
 * @throws {Error} If connection fails
 */
export async function connectWithMethod(
    connectionMethod,
    targetHost,
    targetPort,
    socks5Config,
    proxyIP,
) {
    console.debug("[Connection] Attempting connection", {
        method: connectionMethod,
        targetHost,
        targetPort,
    });

    switch (connectionMethod) {
        case "direct":
            // Direct connection to target
            return await connectDirect(targetHost, targetPort);

        case "s5":
            // SOCKS5 proxy connection
            if (!socks5Config) {
                console.error("[Connection] SOCKS5 config not available");
                throw new Error("SOCKS5 config not available");
            }
            return await connectViaSocks5(socks5Config, targetHost, targetPort);

        case "proxy":
            // ProxyIP connection
            if (!proxyIP) {
                console.error("[Connection] Proxy IP not available");
                throw new Error("Proxy IP not available");
            }
            return await connectViaProxy(proxyIP, targetHost, targetPort);

        default:
            console.error("[Connection] Unknown connection method", {
                connectionMethod,
            });
            throw new Error(`Unknown connection method: ${connectionMethod}`);
    }
}

/**
 * Establishes a direct connection to the target
 * @param {string} targetHost - Target hostname
 * @param {number} targetPort - Target port
 * @returns {Promise<Socket>} Connected socket
 */
async function connectDirect(targetHost, targetPort) {
    console.info("[Connection] Establishing direct connection", {
        targetHost,
        targetPort,
    });
    const socket = connect({ hostname: targetHost, port: targetPort });
    await socket.opened;
    console.info("[Connection] Direct connection established successfully");
    return socket;
}

/**
 * Establishes a connection via proxy IP
 * @param {string} proxyIP - Proxy IP in format "host:port" or just "host"
 * @param {string} targetHost - Target hostname (unused in current implementation)
 * @param {number} targetPort - Target port (used as default if not in proxyIP)
 * @returns {Promise<Socket>} Connected socket
 */
async function connectViaProxy(proxyIP, targetHost, targetPort) {
    const [proxyHost, proxyPortStr] = proxyIP.split(":");
    // Convert port string to number, fallback to targetPort if invalid or missing
    const parsedPort = proxyPortStr ? +proxyPortStr : NaN;
    const proxyPort = !isNaN(parsedPort) ? parsedPort : targetPort;

    console.info("[Connection] Establishing proxy connection", {
        proxyHost,
        proxyPort,
        targetHost,
        targetPort,
    });

    const socket = connect({
        hostname: proxyHost,
        port: proxyPort,
    });
    await socket.opened;
    console.info("[Connection] Proxy connection established successfully");
    return socket;
}

/**
 * Attempts to establish connection using multiple methods in order
 * @param {Array<string>} connectionMethods - Ordered array of methods to try
 * @param {string} targetHost - Target hostname
 * @param {number} targetPort - Target port
 * @param {Object|null} socks5Config - SOCKS5 configuration
 * @param {string|null} proxyIP - Proxy IP configuration
 * @returns {Promise<Socket|null>} Connected socket or null if all methods fail
 */
export async function connectWithFallback(
    connectionMethods,
    targetHost,
    targetPort,
    socks5Config,
    proxyIP,
) {
    console.info("[Connection] Starting connection with fallback", {
        methods: connectionMethods,
        targetHost,
        targetPort,
    });

    for (const connectionMethod of connectionMethods) {
        try {
            const socket = await connectWithMethod(
                connectionMethod,
                targetHost,
                targetPort,
                socks5Config,
                proxyIP,
            );
            console.info("[Connection] Connection successful", {
                method: connectionMethod,
            });
            return socket;
        } catch (error) {
            console.warn(
                "[Connection] Connection attempt failed, trying next method",
                {
                    method: connectionMethod,
                    error: error.message,
                },
            );
            // Try next method
            continue;
        }
    }

    console.error("[Connection] All connection methods failed", {
        methods: connectionMethods,
        targetHost,
        targetPort,
    });
    return null;
}
