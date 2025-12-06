import bingwHandler from "./bingw.js";
import handleCorsRequest from "./cors.js";
import echo from "./echo.js";
import authHandler from "./ghauth/auth.js";
import callbackHandler from "./ghauth/callback.js";
import { handleGrpcPost, handleWebSocket } from "./workers-lite/src/index.js";

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const pathname = url.pathname;
        if (pathname.startsWith("/api/")) {
            // TODO: Add your custom /api/* logic here.
            // return new Response("Ok");

            // Handle /api/auth
            if (pathname === "/api/ghauth") {
                return authHandler({
                    request,
                    env,
                });
            }

            // Handle /api/callback
            if (pathname === "/api/ghauthcallback") {
                return callbackHandler({
                    request,
                    env,
                });
            }

            // Handle /api/time
            if (pathname === "/api/time") {
                return new Response(Date.now().toString());
            }

            // Handle /api/echo
            if (pathname === "/api/echo") {
                return echo(request, request.url);
            }

            // Handle /api/cors
            if (pathname === "/api/cors") {
                return handleCorsRequest(request, env, ctx);
            }

            // Handle /api/bingw
            if (pathname.startsWith("/api/bingw")) {
                return bingwHandler(request);
            }

            // Handle /api/{env.UUID}
            if (env.UUID) {
                if (pathname.startsWith(`/api/${env.UUID}`)) {
                    // Check if this is a WebSocket upgrade request
                    if (
                        request.headers.get("Upgrade")?.toLowerCase() ===
                        "websocket"
                    ) {
                        return await handleWebSocket(request, env.UUID);
                    }
                    // Handle gRPC transport for POST requests when grpc query parameter is present
                    if (
                        request.method === "POST" &&
                        url.searchParams.has("grpc")
                    ) {
                        const response = await handleGrpcPost(
                            request,
                            env.UUID,
                        );
                        if (response) {
                            return response;
                        }
                    }
                }
            }

            // API path not found
            return new Response(
                JSON.stringify({
                    status: "Not Found",
                    message:
                        "/api/* is a special API path handled by Cloudflare Workers. The path requested does not exist.",
                }),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request);
    },
};
