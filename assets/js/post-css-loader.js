function loadCSSPreload(href) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    link.onload = function () {
        link.rel = "stylesheet";
    };
    document.head.appendChild(link);
}
