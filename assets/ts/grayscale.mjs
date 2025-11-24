export function addGrayscale(elem) {
    if (!elem || !elem.style) return;

    const current = elem.style.filter || "";

    // 如果已包含 grayscale，则不重复添加
    if (current.includes("grayscale(")) {
        return;
    }

    // 追加或设置
    elem.style.filter = current
        ? current + " grayscale(100%)"
        : "grayscale(100%)";
}

export function isGrayPage() {
    // Homepage only
    var pathname = window.location.pathname;
    if (pathname == "/") {
        return true;
    }
    if (pathname.includes("/article/")) {
        return false;
    }
    return false;
}

export function getMMDD() {
    // return MMDD format
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return month.toString().padStart(2, "0") + day.toString().padStart(2, "0");
}

var grayDays = ["0604"];

export default function () {
    if (isGrayPage() && grayDays.includes(getMMDD())) {
        console.info("[grayscale]", "Add grayscale");
        addGrayscale(document.body);
    }
}
