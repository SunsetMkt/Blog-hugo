import * as featureFlags from "./feature-flag.mjs";
import * as tools from "./tools.mjs";
import * as grayscale from "./grayscale.mjs";

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
        // save-ukraine flag
        safeRun(function () {
            if (featureFlags.isFlagSet("save-ukraine")) {
                tools.addScriptTag(
                    "https://unpkg.com/save-ukraine@0.18.140/dist/umd/main.js",
                    true,
                    function () {
                        // eslint-disable-next-line no-undef
                        Ukraine.save({
                            ribbon: "TOP_LEFT",
                            countries: [],
                            hasShadow: true,
                            isCancelable: true,
                            isBloodIncluded: false,
                            isGraphicIncluded: false,
                            isInConsole: false,
                            moreInfoUrl: "https://war.ukraine.ua/",
                        });
                    },
                );
            }
        });
        // enforce-grayscale flag
        safeRun(function () {
            if (featureFlags.isFlagSet("enforce-grayscale")) {
                grayscale.addGrayscale(document.body);
            }
        });
    });
    console.info(loggingPrefix, "interval-and-event loaded");
}
