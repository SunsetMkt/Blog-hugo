// custom.ts
// The entrance of all custom scripts
// This script is loaded in HUGO_SITE_FOLDER/layouts/partials/components/script.html
// By using custom.ts, all scripts are bundled into a single file

var loggingPrefix = "[Custom]";

console.log(loggingPrefix, "Custom scripts loaded");

function safeRun(func: () => void) {
    try {
        func();
        return true;
    } catch (error) {
        console.error(loggingPrefix, error);
        return false;
    }
}

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

safeRun(hello);
safeRun(rotate_emoji);
safeRun(footer_debug);
safeRun(cf_trace);
safeRun(post_css_loader);
