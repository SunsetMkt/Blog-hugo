/**
 * 使用 Google Safe Browsing v4 检测 URL 是否安全
 * @param {string} apiKey - Google Safe Browsing API Key
 * @param {string} targetUrl - 要检测的 URL
 * @returns {Promise<object>} - 返回检测结果
 */
export async function checkUrlSafety(apiKey, targetUrl) {
    const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

    const requestBody = {
        client: {
            clientId: "navclient-auto-ffox", // Sorry Mozilla
            clientVersion: "145.0.2",
        },
        threatInfo: {
            threatTypes: [
                "MALWARE",
                "SOCIAL_ENGINEERING",
                "UNWANTED_SOFTWARE",
                "POTENTIALLY_HARMFUL_APPLICATION",
                "THREAT_TYPE_UNSPECIFIED",
            ],
            platformTypes: ["ANY_PLATFORM", "PLATFORM_TYPE_UNSPECIFIED"],
            threatEntryTypes: ["URL", "THREAT_ENTRY_TYPE_UNSPECIFIED"],
            threatEntries: [{ url: targetUrl }],
        },
    };

    const resp = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
    });

    if (!resp.ok) {
        throw new Error(`Safe Browsing API Error: ${resp.status}`);
    }

    return resp.json();
}

function validateUrl(url) {
    try {
        new URL(url);
        return true;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return false;
    }
}

/**
 * 尝试在 20 次以内跟随 HTTP 重定向
 * @param {string} url
 * @returns {Promise<string>} 最终 URL（若无重定向就是原 URL）
 */
async function resolveFinalUrl(url) {
    let current = url;
    const maxRedirects = 20;

    for (let i = 0; i < maxRedirects; i++) {
        const resp = await fetch(current, {
            method: "HEAD",
            redirect: "manual",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:145.0) Gecko/20100101 Firefox/145.0",
            },
        });

        // 检查是否为标准重定向响应
        if ([301, 302, 303, 307, 308].includes(resp.status)) {
            const location = resp.headers.get("Location");
            if (!location) break;

            // 构造绝对 URL
            current = new URL(location, current).toString();
            continue;
        }

        break; // 非重定向
    }

    return current;
}

export default async function handleRequest(request, env) {
    const url = new URL(request.url);
    const queryParams = url.searchParams;

    const apiKey = env.GOOGLE_SAFEBROWSING_API_KEY;
    const queryUrl = queryParams.get("url");
    const followRedirect = queryParams.get("follow_redirect") === "true";

    if (!queryUrl) {
        return new Response("No URL provided", { status: 400 });
    }

    if (!validateUrl(queryUrl)) {
        return new Response("Invalid URL", { status: 400 });
    }

    let finalUrl = queryUrl;

    // 若启用 follow_redirect，解析最终 URL
    if (followRedirect) {
        try {
            finalUrl = await resolveFinalUrl(queryUrl);
        } catch (err) {
            console.error("[safeBrowsing] Redirect resolve error", err);
        }
    }

    const result = await checkUrlSafety(apiKey, finalUrl);

    console.info("[safeBrowsing] Input URL:", queryUrl);
    console.info("[safeBrowsing] Final URL:", finalUrl);
    console.info("[safeBrowsing] Result:", result);

    // 从 cacheDuration 提取秒数
    const match = result?.matches?.[0]?.cacheDuration?.match(/^(\d+)(?:s)?$/);
    const cacheTime = match ? Number(match[1]) : 0;

    const responseBodyDetails = {
        inputUrl: queryUrl,
        finalUrl,
        ...result,
    };

    return new Response(JSON.stringify(responseBodyDetails), {
        headers: {
            "Cache-Control": `private, max-age=${cacheTime}`,
            "Content-Type": "application/json",
        },
    });
}
