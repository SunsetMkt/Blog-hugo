import * as featureFlags from "./feature-flag.mjs";

var loggingPrefix = "[interval-and-event]";

export function safeRun(func) {
    try {
        func();
        return true;
    } catch (error) {
        console.error(loggingPrefix, error);
        return false;
    }
}

export default function () {
    document.addEventListener("DOMContentLoaded", function () {
        // waline-statistic flag
        safeRun(function () {
            var w = document.getElementById("waline-statistic");
            if (featureFlags.isFlagSet("waline-statistic") && w) {
                w.style.removeProperty("display");
            }
        });
    });
    console.info(loggingPrefix, "interval-and-event loaded");
}
