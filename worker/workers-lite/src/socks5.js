/**
 * SOCKS5 protocol implementation module
 * Handles SOCKS5 proxy connections with authentication support
 */

import { connect } from "cloudflare:sockets";

/**
 * Parses SOCKS5 configuration from a connection string
 * @param {string} connectionString - Format: "user:pass@host:port" or "@host:port"
 * @returns {Object|null} Parsed SOCKS5 configuration or null if invalid
 */
export function parseSocks5Config(connectionString) {
    if (!connectionString || !connectionString.includes("@")) {
        return null;
    }

    const [credentials, server] = connectionString.split("@");
    const [username, password] = credentials.split(":");
    const [host, port = 443] = server.split(":");

    return {
        user: username,
        pass: password,
        host,
        port: +port,
    };
}

/**
 * Establishes a SOCKS5 connection to the target host
 * @param {Object} socks5Config - SOCKS5 configuration object
 * @param {string} targetHost - Target hostname to connect to
 * @param {number} targetPort - Target port to connect to
 * @returns {Promise<Socket>} Connected socket
 */
export async function connectViaSocks5(socks5Config, targetHost, targetPort) {
    // Connect to SOCKS5 proxy server
    const socket = connect({
        hostname: socks5Config.host,
        port: socks5Config.port,
    });
    await socket.opened;

    const writer = socket.writable.getWriter();
    const reader = socket.readable.getReader();

    // SOCKS5 handshake: Request authentication methods
    // 0x05 = SOCKS5, 0x02 = 2 methods, 0x00 = no auth, 0x02 = username/password
    await writer.write(new Uint8Array([5, 2, 0, 2]));

    // Read authentication method response
    const authResponse = (await reader.read()).value;

    // If username/password authentication is required
    if (authResponse && authResponse[1] === 2 && socks5Config.user) {
        const userBytes = new TextEncoder().encode(socks5Config.user);
        const passBytes = new TextEncoder().encode(socks5Config.pass || "");

        // Send username/password
        await writer.write(
            new Uint8Array([
                1, // Auth version
                userBytes.length,
                ...userBytes,
                passBytes.length,
                ...passBytes,
            ]),
        );

        // Read authentication result
        await reader.read();
    }

    // SOCKS5 CONNECT request
    const domainBytes = new TextEncoder().encode(targetHost);
    await writer.write(
        new Uint8Array([
            5, // SOCKS5
            1, // CONNECT command
            0, // Reserved
            3, // Domain name address type
            domainBytes.length, // Domain length
            ...domainBytes, // Domain
            targetPort >> 8, // Port high byte
            targetPort & 0xff, // Port low byte
        ]),
    );

    // Read connection result
    await reader.read();

    // Release locks so the socket can be used for data transfer
    writer.releaseLock();
    reader.releaseLock();

    return socket;
}
