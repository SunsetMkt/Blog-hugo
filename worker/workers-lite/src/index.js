/**
 * Workers LITE - Main Entry Point
 *
 * A lightweight LITE proxy implementation for Cloudflare Workers.
 *
 * @module workers-lite
 *
 * For complete API documentation, usage examples, and configuration details,
 * please refer to API.md in the project root.
 *
 * Quick links:
 * - API Documentation: API.md
 * - Development Guide: DEVELOPMENT.md
 * - Usage Examples: example-usage.js
 * - Quick Start: README.md
 */

import { handleWebSocket } from "./handler.js";
import { handleGrpcPost } from "./grpc-handler.js";

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
export {
    parseLiteHeaderStream,
    AddressType as GrpcAddressType,
} from "./grpc.js";
export { handleGrpcPost } from "./grpc-handler.js";

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
        // Get UUID from environment or use default
        const UUID = env.UUID || "b02e0d4b-caaf-4ce3-bf03-d116265bbb0a";

        const url = new URL(request.url);

        // Check if this is a WebSocket upgrade request
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(request, UUID);
        }

        // Handle gRPC transport for POST requests when grpc query parameter is present
        if (request.method === "POST" && url.searchParams.has("grpc")) {
            const response = await handleGrpcPost(request, UUID);
            if (response) {
                return response;
            }
        }

        // For other non-WebSocket requests, proxy to example.com
        url.hostname = "example.com";
        return fetch(new Request(url, request));
    },
};
