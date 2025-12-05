/**
 * Example: How to use workers-lite as a module in other Cloudflare Workers
 *
 * This file demonstrates various ways to import and use the modular components
 * of workers-lite in your own worker projects.
 */

// ============================================================
// Example 1: Using the complete handler
// ============================================================

import { handleWebSocket } from "./src/index.js";

export default {
    async fetch(request, env) {
        // Handle LITE WebSocket connections
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            return await handleWebSocket(
                request,
                env.UUID || "your-default-uuid",
            );
        }

        // Your other route handling
        return new Response("Hello World!");
    },
};

// ============================================================
// Example 2: Using individual modules for custom logic
// ============================================================

import {
    validateUUID,
    parseSocks5Config,
    parseLiteHeader,
    ConnectionMode,
} from "./src/index.js";

export const customWorker = {
    async fetch(request, env) {
        if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
            // Custom WebSocket handling with access to lower-level functions
            const [client, ws] = Object.values(new WebSocketPair());
            ws.accept();

            ws.addEventListener("message", async (event) => {
                const data = event.data;

                // Use UUID validation
                if (!validateUUID(data, env.UUID)) {
                    ws.close(1008, "Invalid UUID");
                    return;
                }

                // Parse LITE header
                const header = parseLiteHeader(data);
                if (header) {
                    console.log(
                        `Connection to ${header.address}:${header.port}`,
                    );
                    // ... your custom connection logic
                }
            });

            return new Response(null, { status: 101, webSocket: client });
        }

        return new Response("Custom Worker");
    },
};

// ============================================================
// Example 3: Multi-route worker with LITE as one route
// ============================================================

import { handleWebSocket as handleLite } from "./src/index.js";

export const multiRouteWorker = {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Route 1: LITE proxy on /lite path
        if (url.pathname.startsWith("/lite")) {
            if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
                return await handleLite(request, env.UUID);
            }
        }

        // Route 2: API endpoints
        if (url.pathname.startsWith("/api")) {
            return new Response(JSON.stringify({ status: "ok" }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        // Route 3: Static content
        return new Response("Welcome to multi-route worker!");
    },
};

// ============================================================
// Example 4: Using SOCKS5 module independently
// ============================================================

import { parseSocks5Config, connectViaSocks5 } from "./src/index.js";

export async function connectThroughSocks5(
    targetHost,
    targetPort,
    socks5String,
) {
    // Parse SOCKS5 configuration
    const config = parseSocks5Config(socks5String);

    if (!config) {
        throw new Error("Invalid SOCKS5 configuration");
    }

    // Establish connection through SOCKS5
    const socket = await connectViaSocks5(config, targetHost, targetPort);

    return socket;
}

// Usage example:
// const socket = await connectThroughSocks5('example.com', 443, 'user:pass@proxy.example.com:1080');
