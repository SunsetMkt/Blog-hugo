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
