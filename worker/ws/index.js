/**
 * Workers LITE - Main Entry Point
 *
 * A lightweight LITE proxy implementation for Cloudflare Workers that provides
 * WebSocket-based proxy functionality with support for multiple connection modes
 * including direct connections, SOCKS5 proxies, and proxy IP forwarding.
 *
 * @module workers-lite
 */

import { handleWebSocket } from "./handler.js";

// Export all modules for use by other workers
export { validateUUID, processEarlyData } from "./auth.js";
export { parseSocks5Config, connectViaSocks5 } from "./socks5.js";
export {
    getConnectionOrder,
    connectWithFallback,
    ConnectionMode,
} from "./connection.js";
export { createDNSHandler } from "./dns.js";
export { parseLiteHeader, LiteCommand, AddressType } from "./protocol.js";
export { handleWebSocket } from "./handler.js";

/**
 * Default Cloudflare Worker export
 */
export default {
    /**
     * Handles incoming HTTP requests
     * @param {Request} request - The incoming request
     * @param {Object} env - Environment variables and bindings
     * @returns {Promise<Response>} The response
     */
    async fetch(request, env) {
        // Get UUID from environment
        const UUID = env.UUID;

        // Check if this is a WebSocket upgrade request
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(request, UUID);
        }

        // For non-WebSocket requests, proxy to example.com
        const url = new URL(request.url);
        url.hostname = "example.com";
        return fetch(new Request(url, request));
    },
};
