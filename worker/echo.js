// https://gist.github.com/fyears/80737a0d869f3c8bea7d28623cfb3183
// modified from
// https://developers.cloudflare.com/workers/examples/read-post/
// https://developers.cloudflare.com/workers/examples/cors-header-proxy/

async function readRequestBody(request, url) {
    const { headers, method } = request;
    const contentType = headers.get("content-type") || "";

    const headersObj = Object.fromEntries(headers);

    const rspHeaders = {
        "Access-Control-Allow-Origin": "*",
    };
    if (
        method.toUpperCase() === "OPTIONS" &&
        headers.get("Origin") !== null &&
        headers.get("Access-Control-Request-Method") !== null &&
        headers.get("Access-Control-Request-Headers") !== null
    ) {
        // preflight
        rspHeaders["Access-Control-Allow-Methods"] = headers.get(
            "Access-Control-Request-Method",
        );
        rspHeaders["Access-Control-Allow-Headers"] = headers.get(
            "Access-Control-Request-Headers",
        );
    } else {
        // other normal requests
        rspHeaders["Access-Control-Allow-Methods"] = "*";
        rspHeaders["Access-Control-Allow-Headers"] = "*";
        rspHeaders["Content-Type"] = "application/json;charset=UTF-8";
    }

    const rsp = {
        method: method,
        headers: headersObj,
        url: url,
    };

    if (contentType.includes("application/json")) {
        rsp["json"] = await request.json();
    } else if (contentType.includes("application/text")) {
        rsp["data"] = request.text();
    } else if (contentType.includes("text/html")) {
        rsp["data"] = request.text();
    } else if (contentType.includes("form")) {
        const formData = await request.formData();
        const body = {};
        for (const entry of formData.entries()) {
            body[entry[0]] = entry[1];
        }
        rsp["form"] = body;
    } else {
        // Perhaps some other type of data was submitted in the form
        // like an image, or some other binary data.
        try {
            rsp["data"] = new TextDecoder().decode(await request.arrayBuffer());
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            rsp["data"] = "";
            rsp["dataError"] = "not decodable";
        }
    }

    return {
        rsp: rsp,
        rspHeaders: rspHeaders,
    };
}

export default async function handleRequest(request, url) {
    const { rsp, rspHeaders } = await readRequestBody(request, url);
    return new Response(JSON.stringify(rsp, null, 2), {
        headers: rspHeaders,
    });
}
/* 
addEventListener("fetch", (event) => {
    const { request } = event;
    const { url } = request;
    return event.respondWith(handleRequest(request, url));
});
 */
