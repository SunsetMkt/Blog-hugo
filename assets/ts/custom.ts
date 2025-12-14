// custom.ts
// The entrance of all custom scripts
// This script is loaded in HUGO_SITE_FOLDER/layouts/partials/components/script.html
// By using custom.ts, all scripts are bundled into a single file

const loggingPrefix = "[Custom]";

console.info(loggingPrefix, "Custom scripts loading");

// Run a function safely
export function safeRun(func: () => void) {
    try {
        func();
        return true;
    } catch (error) {
        console.error(loggingPrefix, error);
        return false;
    }
}

// Run an async function safely and await
export async function safeRunAwait(func: () => Promise<void>) {
    try {
        await func();
        return true;
    } catch (error) {
        console.error(loggingPrefix, error);
        return false;
    }
}

// Import and run scripts
import hello from "./hello.mjs";
import rotate_emoji from "./rotate-emoji.mjs";
import footer_debug from "./footer-debug.mjs";
import cf_trace from "./cf-trace.mjs";
import post_css_loader from "./post-css-loader.mjs";
import SunsetBlog from "./SunsetBlog.mjs";
import Lenis from "./lenis-loader.mjs";
import grayscale from "./grayscale.mjs";
import * as featureFlags from "./feature-flag.mjs";
import interval_and_event from "./interval-and-event.mjs";

// Hello world
safeRun(hello);
// Register SunsetBlog to window for tool usage
safeRun(SunsetBlog);
// Handle avatar emoji onclick rotation
safeRun(rotate_emoji);
// Handle footer spam click to debug
safeRun(footer_debug);
// Handle lenis scroll
safeRun(function () {
    if (featureFlags.isFlagSet("lenis-basic")) {
        Lenis();
    }
});

// Handle grayscale
safeRun(grayscale);
// Handle interval and event
safeRun(interval_and_event);

// Require extra Internet requests
// Handle Cloudflare Trace information display
safeRun(cf_trace);
// Load CSS after the page is loaded
safeRun(post_css_loader);

// Dispatch event
const event = new CustomEvent("sunsetCustomScriptsLoaded");
window.dispatchEvent(event);

console.info(loggingPrefix, "Custom scripts loaded");
