export default async function handleCompletions(request, env) {
    if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    let clientBody;
    try {
        clientBody = await request.json();
    } catch {
        return new Response("Invalid JSON", { status: 400 });
    }

    // 强制覆盖 model，其余字段完全透传
    const upstreamBody = {
        ...clientBody,
        model: env.OPENROUTER_MODEL || "openrouter/free",
    };

    console.info("[Completions] Upstream request body", upstreamBody);

    const upstreamResponse = await fetch(
        env.OPENROUTER_API || "https://openrouter.ai/api/v1/responses",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(upstreamBody),
        },
    );

    return new Response(upstreamResponse.body, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers: {
            "Content-Type":
                upstreamResponse.headers.get("Content-Type") ??
                "application/octet-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
        },
    });
}
