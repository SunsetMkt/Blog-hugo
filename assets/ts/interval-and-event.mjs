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
        if (featureFlags.isFlagSet("waline-statistic")) {
            document
                .getElementById("waline-statistic")
                .style.removeProperty("display");
        }
    });
    console.info(loggingPrefix, "interval-and-event loaded");
}
