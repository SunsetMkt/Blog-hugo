import bingwHandler from "./bingw.js";
import echo from "./echo.js";
import authHandler from "./ghauth/auth.js";
import callbackHandler from "./ghauth/callback.js";
import handleSbRequest from "./safebrowsing.js";
import handleBombRequest from "./bomb.js";
import getSunsetUUID from "./SunsetUUID.js";

export default {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async fetch(request, env, ctx) {
        console.info("[Request] Incoming request received");
        console.info(`[getSunsetUUID] ${getSunsetUUID(request)}`);
        const url = new URL(request.url);
        const pathname = url.pathname;
        const searchParams = url.searchParams;
        // console.debug(`[Request] ${request.method} ${pathname} ${searchParams.toString()}`);
        if (pathname.startsWith("/api/")) {
            // TODO: Add your custom /api/* logic here.
            // return new Response("Ok");

            console.info(
                `[Request] ${request.method} ${pathname} ${searchParams.toString()}`,
            );

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

            // Handle /api/bingw
            if (pathname === "/api/bingw") {
                return bingwHandler(request);
            }

            // Handle /api/safebrowsing
            if (pathname === "/api/safebrowsing") {
                return handleSbRequest(request, env);
            }

            // Handle /api/bomb
            if (pathname === "/api/bomb") {
                return handleBombRequest(request);
            }

            // API path not found
            console.info(
                `[Request] ${request.method} ${pathname} ${searchParams.toString()} not found`,
            );
            return new Response(
                JSON.stringify({
                    status: "Not Found",
                    message:
                        "/api/* is a special API path handled by Cloudflare Workers. The path requested does not exist.",
                }),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                    pathname: pathname,
                    searchParams: searchParams,
                },
            );
        }

        // Otherwise, serve the static assets.
        // Without this, the Worker will error and no assets will be served.
        console.warn(
            `[Request] ASSETS ${request.method} ${pathname} ${searchParams.toString()}`,
        );
        return env.ASSETS.fetch(request);
    },
};
