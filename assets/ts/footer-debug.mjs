function addScriptTag(src, async, onload) {
    var scriptElement = document.createElement("script");
    scriptElement.async = async;
    scriptElement.src = src;
    if (onload) {
        scriptElement.onload = onload;
    }
    var firstScriptElement = document.getElementsByTagName("script")[0];
    firstScriptElement.parentNode.insertBefore(
        scriptElement,
        firstScriptElement,
    );
}

function launchEruda() {
    addScriptTag("//unpkg.com/eruda@latest/eruda.js", false, function () {
        eruda.init();
        console.info(
            "[launchEruda]",
            "Console output before launch is not recorded",
        );
    });
}

function goDebug() {
    window.location.href = "/debug/";
}

export default function () {
    var debugTriggerCount = 0;
    var debugTriggerBind = document.getElementsByClassName("site-footer")[0];
    debugTriggerBind.addEventListener("click", function () {
        debugTriggerCount++;
        if (debugTriggerCount == 5) {
            console.info("[debugTriggerBind]", "Launch Eruda");
            launchEruda();
            // localStorage.setItem("active-eruda", "true");
        }
    });
}
