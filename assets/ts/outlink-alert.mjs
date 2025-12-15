import * as tools from "./tools.mjs";

export function linkHandler(e) {
    let link = e.target;

    // 向上找到最近的 <a>
    if (link.tagName !== "A") {
        link = link.closest("a");
    }
    if (!link || !link.getAttribute("href")) return;

    const rawHref = link.getAttribute("href").trim();

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
        console.info("[outlink]", rawHref);
        const base64Url = tools.base64UrlEncode(rawHref);
        var target = link.getAttribute("target") || "_self";
        if (e.button === 1) {
            // Middle Mouse Button
            target = "_blank";
        }
        window.open(`/safebrowsing/#${base64Url}`, target);
    }

    return;
}

export function addEventListeners() {
    document.addEventListener("click", linkHandler);
    document.addEventListener("auxclick", function (e) {
        if (e.button === 1) {
            // Middle Mouse Button
            linkHandler(e);
        }
        return;
    });
}
