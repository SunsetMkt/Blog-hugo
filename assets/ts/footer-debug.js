import confetti from "canvas-confetti";

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
        // eslint-disable-next-line no-undef
        eruda.init();
        console.info(
            "[launchEruda]",
            "Console output before launch is not recorded",
        );
    });
}

function fireConfetti(x, y) {
    var count = 200;
    var defaults = {
        origin: { x: x, y: y },
        disableForReducedMotion: true,
    };
    console.info("[fireConfetti]", defaults);

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

export function goDebug() {
    window.location.href = "/debug/";
}

export default function () {
    let debugTriggerCount = 0;
    let firstClickTime = 0;
    let hasTriggered = false;
    const MAX_CLICK = 5;
    const TIME_LIMIT = 1000; // 1 秒

    const debugTriggerBind = document.getElementsByClassName("site-footer")[0];

    debugTriggerBind.addEventListener("click", function (event) {
        if (hasTriggered) {
            return;
        }

        const now = Date.now();

        // 第一次点击，记录时间
        if (debugTriggerCount === 0) {
            firstClickTime = now;
        }

        // 超出时间窗口，重置
        if (now - firstClickTime > TIME_LIMIT) {
            debugTriggerCount = 0;
            firstClickTime = now;
        }

        debugTriggerCount++;

        if (debugTriggerCount === MAX_CLICK) {
            console.info("[debugTriggerBind]", "Launch Eruda");
            launchEruda();

            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;
            fireConfetti(x, y);

            // 重置，避免重复触发
            debugTriggerCount = 0;
            firstClickTime = 0;
            hasTriggered = true;
        }
    });
}
