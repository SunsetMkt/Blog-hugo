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
        // outlink-alert flag
        safeRun(function () {
            if (featureFlags.isFlagSet("outlink-alert")) {
                document.addEventListener("click", function (e) {
                    let link = e.target;

                    // 向上找到最近的 <a>
                    if (link.tagName !== "A") {
                        link = link.closest("a");
                    }
                    if (!link || !link.getAttribute("href")) return;

                    const rawHref = link.getAttribute("href").trim();

                    /*                     if (rawHref.startsWith("#")) return;
                    if (rawHref.toLowerCase().startsWith("javascript:")) return;
                    if (
                        rawHref.startsWith("mailto:") ||
                        rawHref.startsWith("tel:")
                    )
                        return; */

                    if (!rawHref.startsWith("http")) return;

                    let url;
                    try {
                        url = new URL(link.href, location.href);
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    } catch (err) {
                        return; // 非法 URL，跳过
                    }

                    const whitelist = [];
                    if (whitelist.includes(url.hostname)) return;

                    if (url.hostname !== location.hostname) {
                        const ok = confirm(`Redirect to ${url.href} ?`);
                        if (!ok) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                });
            }
        });
    });
    console.info(loggingPrefix, "interval-and-event loaded");
}
