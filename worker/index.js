// https://github.com/i40west/netlify-cms-cloudflare-pages
import authHandler from "./ghauth/auth.js";
import callbackHandler from "./ghauth/callback.js";

export default {
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
        }
        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        return env.ASSETS.fetch(request);
    },
};
