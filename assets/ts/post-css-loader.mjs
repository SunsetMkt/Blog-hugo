export async function loadCSSPreload(href) {
    console.info("[loadCSSPreload]", href);
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    link.onload = function () {
        link.rel = "stylesheet";
    };
    document.head.appendChild(link);
}

export default function () {
    var urls = [];
    for (var i = 0; i < urls.length; i++) {
        loadCSSPreload(urls[i]);
    }
}
