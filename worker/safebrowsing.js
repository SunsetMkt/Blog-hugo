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
            ],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [
                {
                    url: targetUrl,
                },
            ],
        },
    };

    const resp = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
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

export default async function handleRequest(request, env) {
    // Expect GET request, get URL from query parameters
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const apiKey = env.GOOGLE_SAFEBROWSING_API_KEY;
    const queryUrl = queryParams.get("url");

    // If no URL provided, return error
    if (!queryUrl) {
        return new Response("No URL provided", {
            status: 400,
        });
    }

    // If URL is not valid, return error
    if (!validateUrl(queryUrl)) {
        return new Response("Invalid URL", {
            status: 400,
        });
    }

    const result = await checkUrlSafety(apiKey, queryUrl);
    console.info("[safeBrowsing] Result", result);

    // Get cache time from result["matches"][0]["cacheDuration"] = 300s
    const match = result?.matches?.[0]?.cacheDuration?.match(/^(\d+)(?:s)?$/);
    const cacheTime = match ? Number(match[1]) : 300;

    return new Response(JSON.stringify(result), {
        headers: {
            "Cache-Control": `private, max-age=${cacheTime}`,
            "Content-Type": "application/json",
        },
    });
}
