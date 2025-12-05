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

    // Legacy proxy mode maps to direct + proxy
    if (connectionMode === "proxy") {
        return ["direct", "proxy"];
    }

    // Single mode specified
    if (connectionMode !== "auto") {
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
    return connectionOrder.length > 0 ? connectionOrder : ["direct"];
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
    switch (connectionMethod) {
        case "direct":
            // Direct connection to target
            return await connectDirect(targetHost, targetPort);

        case "s5":
            // SOCKS5 proxy connection
            if (!socks5Config) {
                throw new Error("SOCKS5 config not available");
            }
            return await connectViaSocks5(socks5Config, targetHost, targetPort);

        case "proxy":
            // ProxyIP connection
            if (!proxyIP) {
                throw new Error("Proxy IP not available");
            }
            return await connectViaProxy(proxyIP, targetHost, targetPort);

        default:
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
    const socket = connect({ hostname: targetHost, port: targetPort });
    await socket.opened;
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
    const [proxyHost, proxyPort = targetPort] = proxyIP.split(":");
    const socket = connect({
        hostname: proxyHost,
        port: +proxyPort || targetPort,
    });
    await socket.opened;
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
    for (const connectionMethod of connectionMethods) {
        try {
            return await connectWithMethod(
                connectionMethod,
                targetHost,
                targetPort,
                socks5Config,
                proxyIP,
            );
        } catch (error) {
            // Try next method
            continue;
        }
    }
    return null;
}
