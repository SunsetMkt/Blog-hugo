import * as featureFlags from "./feature-flag.js";
import * as tools from "./tools.js";
import * as grayscale from "./grayscale.js";
import * as outlinkAlert from "./outlink-alert.js";
import addBackToTop from "./vanilla-back-to-top.js";

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

    // <local-time> HTMLElement
    safeRun(function () {
        class LocalTime extends HTMLElement {
            connectedCallback() {
                const raw = this.textContent.trim();
                if (!raw || isNaN(raw)) return;

                this._raw = raw;
                this._isLocal = true;

                this._renderLocal();

                this.style.cursor = "pointer";
                this._updateTitle();

                this.addEventListener("click", () => {
                    this._isLocal = !this._isLocal;

                    if (this._isLocal) {
                        this._renderLocal();
                    } else {
                        this._renderRaw();
                    }
                    this._updateTitle();
                });
            }

            _normalize(ts) {
                let num = Number(ts);
                if (num > 1e15) return Math.floor(num / 1000); // 微秒
                if (num > 1e12) return num; // 毫秒
                return num * 1000; // 秒
            }

            _renderLocal() {
                const ms = this._normalize(this._raw);
                const date = new Date(ms);
                this.textContent = date.toLocaleString(undefined, {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                });
            }

            _renderRaw() {
                this.textContent = this._raw;
            }

            _updateTitle() {
                this.title = this._isLocal
                    ? "点击显示原始时间戳"
                    : "点击显示本地时间";
            }
        }

        customElements.define("local-time", LocalTime);
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

        function setWalineMeta() {
            var meta = { nick: localStorage.SunsetUUID, mail: "", link: "" };
            localStorage.WALINE_USER_META = JSON.stringify(meta);
            var nickEl = document.getElementById("wl-nick");
            if (nickEl) {
                nickEl.value = localStorage.SunsetUUID;
            }
        }

        // If WALINE_USER_META not valid
        if (!isValidMeta(localStorage.WALINE_USER_META)) {
            if (localStorage.SunsetUUID) {
                setWalineMeta();
            } else {
                window.addEventListener("SunsetUUIDReady", function () {
                    setWalineMeta();
                });
            }
        }
    });

    // always-confetti flag
    safeRun(function () {
        if (featureFlags.isFlagSet("always-confetti")) {
            window.addEventListener("click", function (event) {
                const x = event.clientX / window.innerWidth;
                const y = event.clientY / window.innerHeight;
                tools.fireConfetti(x, y);
            });
        }
    });

    // gtranslate-widget flag
    safeRun(function () {
        if (featureFlags.isFlagSet("gtranslate-widget")) {
            // Add class="gtranslate_wrapper" div to body
            var gtranslateWrapper = document.createElement("div");
            gtranslateWrapper.classList.add("gtranslate_wrapper");
            document.body.appendChild(gtranslateWrapper);
            // Config
            window.gtranslateSettings = {
                default_language: "zh-CN",
                native_language_names: true,
                detect_browser_language: true,
                wrapper_selector: ".gtranslate_wrapper",
                flags_location:
                    "https://unpkg.com/gtranslate-io-widget-unofficial@1.0.1/dist/flags/",
            };
            // Add script
            var scriptElement = document.createElement("script");
            scriptElement.defer = true;
            scriptElement.src =
                "https://unpkg.com/gtranslate-io-widget-unofficial@1.0.1/dist/js/float.js";
            document.body.appendChild(scriptElement);
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
