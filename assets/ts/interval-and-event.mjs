import * as featureFlags from "./feature-flag.mjs";
import * as tools from "./tools.mjs";
import * as grayscale from "./grayscale.mjs";
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

async function onLoadExecute() {
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

                /*  
                    if (rawHref.startsWith("#")) return;
                    if (rawHref.toLowerCase().startsWith("javascript:")) return;
                    if (
                        rawHref.startsWith("mailto:") ||
                        rawHref.startsWith("tel:")
                    )
                        return; */

                if (!/^(https?):\/\//i.test(rawHref)) return;

                let url;
                try {
                    url = new URL(link.href, location.href);
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (err) {
                    return; // 非法 URL，跳过
                }

                const whitelist = [];
                if (whitelist.includes(url.hostname)) return;

                // 避免 safebrowsing 上检查自己
                const currentPath = location.pathname;
                if (currentPath.startsWith("/safebrowsing")) {
                    // If link in .main-article
                    const mainArticle = document.querySelector(".main-article");
                    if (mainArticle && mainArticle.contains(link)) return;
                }

                if (url.hostname !== location.hostname) {
                    e.preventDefault();
                    e.stopPropagation();
                    const base64Url = tools.base64UrlEncode(rawHref);
                    const target = link.getAttribute("target") || "_self";
                    window.open(`/safebrowsing/#${base64Url}`, target);
                }
            });
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
}

export default function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", onLoadExecute);
    } else onLoadExecute();
    console.info(loggingPrefix, "interval-and-event loaded");
}
