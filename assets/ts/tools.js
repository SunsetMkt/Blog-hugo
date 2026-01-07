import confetti from "canvas-confetti";

/**
 * 通过尝试为逐级上升的域名设置 cookie 来推断“可写的根域名”。
 * 返回字符串（根域名），失败时返回 null。
 */
export function detectRootDomainByCookieTest() {
    const host = window.location.hostname;
    // 简单快速判断：IP 地址或 localhost，直接返回
    if (host === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(host)) return host;

    const parts = host.split(".");
    if (parts.length === 1) return host; // 单段域名（奇怪情况）

    const testName = "__cookie_root_test__";
    const testValue = "1";
    let lastSuccessful = null;

    // 从最具体（完整主机）向上移除左侧标签：
    for (let i = 0; i < parts.length; i++) {
        const candidate = parts.slice(i).join("."); // e.g. sub.example.co.uk -> tried: sub.example.co.uk, example.co.uk, co.uk, uk
        const domainAttr = "." + candidate; // 使用点前缀以覆盖子域
        // 设置测试 cookie（短期，便于检查），注意 path=/ 保证可见
        try {
            document.cookie = `${encodeURIComponent(testName)}=${encodeURIComponent(testValue)};domain=${domainAttr};path=/;max-age=60`;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            // 少见：设置 cookie 抛异常（例如非法 domain 格式），当成失败
            // 返回上一次成功的 candidate（如果有），否则 null
            return lastSuccessful;
        }

        // 立即读取，检查是否可见
        const cookies = document.cookie || "";
        const found = cookies
            .split(";")
            .some((c) => c.trim().startsWith(`${testName}=`));

        if (found) {
            // 清理该域上设置的测试 cookie（删除）
            try {
                document.cookie = `${encodeURIComponent(testName)}=;domain=${domainAttr};path=/;max-age=0`;
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_) {
                /* ignore */
            }
            lastSuccessful = candidate;
            // 继续循环去尝试更高一级的域名
        } else {
            // 该 candidate 不可写 —— 上一个成功的就是可用根域名
            return lastSuccessful;
        }
    }

    // 如果循环结束仍都成功（极少见），返回最上层成功的
    return lastSuccessful;
}

// 添加脚本标签
export function addScriptTag(src, async, onload) {
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

// 加载样式
export async function loadCSSPreload(href) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    link.onload = function () {
        link.rel = "stylesheet";
    };
    document.head.appendChild(link);
}

// animate.css
export function animateCSS(element, animation, prefix = "animate__") {
    // We create a Promise and return it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve("Animation ended");
        }

        node.addEventListener("animationend", handleAnimationEnd, {
            once: true,
        });
    });
}

export function base64UrlEncode(str) {
    const u = new TextEncoder().encode(str); // UTF-8 bytes
    const bin = Array.from(u)
        .map((b) => String.fromCharCode(b))
        .join("");
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function base64UrlDecode(b64url) {
    try {
        b64url = b64url.replace(/-/g, "+").replace(/_/g, "/");
        while (b64url.length % 4) b64url += "=";
        const bin = atob(b64url);
        const bytes = Uint8Array.from([...bin].map((ch) => ch.charCodeAt(0)));
        return new TextDecoder().decode(bytes);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        return null;
    }
}

/**
 * const x = event.clientX / window.innerWidth;
 * const y = event.clientY / window.innerHeight;
 */
export function fireConfetti(x, y) {
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
