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
import hello from "./hello.js";
import rotate_emoji from "./rotate-emoji.js";
import footer_debug from "./footer-debug.js";
import cf_trace from "./cf-trace.js";
import post_css_loader from "./post-css-loader.js";
import SunsetBlog from "./SunsetBlog.js";
import Lenis from "./lenis-loader.js";
import grayscale from "./grayscale.js";
import * as featureFlags from "./feature-flag.js";
import interval_and_event from "./interval-and-event.js";

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
