// custom.ts
// The entrance of all custom scripts
// This script is loaded in HUGO_SITE_FOLDER/layouts/partials/components/script.html
// By using custom.ts, all scripts are bundled into a single file

var loggingPrefix = "[Custom]";

console.log(loggingPrefix, "Custom scripts loaded");

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
import hello from "./hello.js";
import rotate_emoji from "./rotate-emoji.js";
import footer_debug from "./footer-debug.js";
import cf_trace from "./cf-trace.js";
import post_css_loader from "./post-css-loader.js";
import SunsetBlog from "./SunsetBlog.js";

// Hello world
safeRun(hello);
// Handle avatar emoji onclick rotation
safeRun(rotate_emoji);
// Handle footer spam click to debug
safeRun(footer_debug);
// Handle Cloudflare Trace information display
safeRun(cf_trace);
// Load CSS after the page is loaded
safeRun(post_css_loader);
// Register SunsetBlog to window for tool usage
safeRun(SunsetBlog);
