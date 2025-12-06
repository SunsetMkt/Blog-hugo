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
    console.debug("[SOCKS5] Parsing SOCKS5 configuration");

    if (!connectionString || !connectionString.includes("@")) {
        console.debug(
            "[SOCKS5] Invalid or missing SOCKS5 configuration string",
        );
        return null;
    }

    const [credentials, server] = connectionString.split("@");
    const [username, password] = credentials.split(":");
    const [host, port = 443] = server.split(":");

    const config = {
        user: username,
        pass: password,
        host,
        port: +port,
    };

    console.info("[SOCKS5] Configuration parsed successfully", {
        host: config.host,
        port: config.port,
        hasUsername: !!config.user,
        hasPassword: !!config.pass,
    });

    return config;
}

/**
 * Establishes a SOCKS5 connection to the target host
 * @param {Object} socks5Config - SOCKS5 configuration object
 * @param {string} targetHost - Target hostname to connect to
 * @param {number} targetPort - Target port to connect to
 * @returns {Promise<Socket>} Connected socket
 */
export async function connectViaSocks5(socks5Config, targetHost, targetPort) {
    console.info("[SOCKS5] Starting SOCKS5 connection", {
        proxyHost: socks5Config.host,
        proxyPort: socks5Config.port,
        targetHost,
        targetPort,
    });

    // Connect to SOCKS5 proxy server
    const socket = connect({
        hostname: socks5Config.host,
        port: socks5Config.port,
    });
    await socket.opened;
    console.debug("[SOCKS5] Connected to SOCKS5 proxy server");

    const writer = socket.writable.getWriter();
    const reader = socket.readable.getReader();

    // SOCKS5 handshake: Request authentication methods
    // 0x05 = SOCKS5, 0x02 = 2 methods, 0x00 = no auth, 0x02 = username/password
    console.debug("[SOCKS5] Sending authentication method request");
    await writer.write(new Uint8Array([5, 2, 0, 2]));

    // Read authentication method response
    const authResponse = (await reader.read()).value;
    console.debug("[SOCKS5] Received authentication method response", {
        method: authResponse ? authResponse[1] : null,
    });

    // If username/password authentication is required
    if (authResponse && authResponse[1] === 2 && socks5Config.user) {
        console.debug("[SOCKS5] Performing username/password authentication");
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
        const authResult = await reader.read();
        console.debug("[SOCKS5] Authentication response received", {
            success: authResult.value?.[1] === 0,
        });
    }

    // SOCKS5 CONNECT request
    console.debug("[SOCKS5] Sending CONNECT request");
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
    const connectResult = await reader.read();
    console.debug("[SOCKS5] CONNECT response received", {
        success: connectResult.value?.[1] === 0,
    });

    // Release locks so the socket can be used for data transfer
    writer.releaseLock();
    reader.releaseLock();

    console.info("[SOCKS5] SOCKS5 connection established successfully");
    return socket;
}
