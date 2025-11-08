// custom.ts
// The entrance of all custom scripts
// This script is loaded in HUGO_SITE_FOLDER/layouts/partials/components/script.html
// By using custom.ts, all scripts are bundled into a single file

var loggingPrefix = "[Custom]";

console.log(loggingPrefix, "Custom scripts loading...");

// Run a function safely
function safeRun(func: () => void) {
    try {
        func();
        return true;
    } catch (error) {
        console.error(loggingPrefix, error);
        return false;
    }
}

// Run an async function safely
async function safeRunAsync(func: () => Promise<void>) {
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

// Hello world
safeRun(hello);
// Register SunsetBlog to window for tool usage
safeRun(SunsetBlog);
// Handle avatar emoji onclick rotation
safeRun(rotate_emoji);
// Handle footer spam click to debug
safeRun(footer_debug);

// Require extra Internet requests
// Handle Cloudflare Trace information display
safeRun(cf_trace);
// Load CSS after the page is loaded
safeRun(post_css_loader);

console.log(loggingPrefix, "Custom scripts loaded");
