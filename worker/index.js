// https://github.com/i40west/netlify-cms-cloudflare-pages
import authHandler from "./ghauth/auth.js";
import callbackHandler from "./ghauth/callback.js";

import echo from "./cloudflare-worker-echo-back.js";

import { handleWebSocket } from "./ws/index.js";
import handleCorsRequest from "./cors.js"; // Added this import

export default {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        if (url.pathname.startsWith("/api/")) {
            // TODO: Add your custom /api/* logic here.
            // return new Response("Ok");

            // Handle /api/auth
            if (url.pathname === "/api/auth") {
                return authHandler({
                    request,
                    env,
                });
            }

            // Handle /api/callback
            if (url.pathname === "/api/callback") {
                return callbackHandler({
                    request,
                    env,
                });
            }

            // Handle /api/time
            if (url.pathname === "/api/time") {
                return new Response(Date.now().toString());
            }

            // Handle /api/echo
            if (url.pathname === "/api/echo") {
                return echo(request, request.url);
            }

            // Handle /api/cors
            if (url.pathname === "/api/cors") {
                return handleCorsRequest(request, env, ctx);
            }

            // Handle /api/{env.UUID}
            if (env.UUID) {
                if (url.pathname === `/api/${env.UUID}`) {
                    if (
                        request.headers.get("Upgrade")?.toLowerCase() ===
                        "websocket"
                    ) {
                        return await handleWebSocket(request, env.UUID);
                    }
                }
            }
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request);
    },
};
