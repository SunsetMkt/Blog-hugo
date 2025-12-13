import * as featureFlags from "./feature-flag.mjs";
import * as tools from "./tools.mjs";
import * as grayscale from "./grayscale.mjs";
import * as outlinkAlert from "./outlink-alert.mjs";
import addBackToTop from "./vanilla-back-to-top.mjs";

var loggingPrefix = "[interval-and-event]";

function safeRun(func) {
    try {
        func();
        return true;
    } catch (error) {
        console.error(loggingPrefix, error);
        return false;
    }
}

function executeImmediately() {
    // The whole script is put at bottom, so no need
    // to worry about missing elements

    // waline-statistic flag
    safeRun(function () {
        var w = document.getElementById("waline-statistic");
        if (featureFlags.isFlagSet("waline-statistic") && w) {
            w.style.removeProperty("display");
        }
    });

    // enforce-grayscale flag
    safeRun(function () {
        if (featureFlags.isFlagSet("enforce-grayscale")) {
            grayscale.addGrayscale(document.body);
        }
    });

    // outlink-alert flag
    safeRun(function () {
        if (featureFlags.isFlagSet("outlink-alert")) {
            outlinkAlert.addEventListeners();
        }
    });
}

async function onLoadExecute() {
    // Put blocking or time consuming code here

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

    // back-to-top flag
    safeRun(function () {
        if (featureFlags.isFlagSet("back-to-top")) {
            addBackToTop({
                backgroundColor: "#000",
                scrollDuration: 100, // ms
            });
        }
    });

    // Auto fill in WALINE_USER_META
    safeRun(function () {
        function isValidMeta(meta) {
            try {
                var o = JSON.parse(meta);
                // If has at least one non-empty value
                return o && Object.values(o).some((v) => v);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
                return false;
            }
        }

        // If WALINE_USER_META not valid
        if (
            !isValidMeta(localStorage.WALINE_USER_META) &&
            localStorage.SunsetUUID
        ) {
            var meta = { nick: localStorage.SunsetUUID, mail: "", link: "" };
            localStorage.WALINE_USER_META = JSON.stringify(meta);
            var nickEl = document.getElementById("wl-nick");
            if (nickEl) {
                nickEl.value = localStorage.SunsetUUID;
            }
        }
    });
}

export default function () {
    executeImmediately();
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", onLoadExecute);
    } else onLoadExecute();
    console.info(loggingPrefix, "interval-and-event loaded");
}
