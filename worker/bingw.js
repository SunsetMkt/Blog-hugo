// Cloudflare Worker version of bingw
// Converted from Python by Google Gemini
// It just works.

export default async function handleRequest(request) {
    const url = new URL(request.url);
    var day = url.searchParams.get("day") || -1;
    var resolution = url.searchParams.get("resolution") || "UHD";
    var market = url.searchParams.get("market") || "zh-CN";

    const resolutions = [
        "UHD",
        "1920x1200",
        "1920x1080",
        "1366x768",
        "1280x768",
        "1024x768",
        "800x600",
        "800x480",
        "768x1280",
        "720x1280",
        "640x480",
        "480x800",
        "400x240",
        "320x240",
        "240x320",
    ];

    const markets = [
        "en-US",
        "zh-CN",
        "ja-JP",
        "en-AU",
        "en-GB",
        "de-DE",
        "en-NZ",
        "en-CA",
        "en-IN",
        "fr-FR",
        "fr-CA",
    ];

    if (day === "random") {
        day = Math.floor(Math.random() * 8);
    }

    if (market === "random") {
        market = markets[Math.floor(Math.random() * markets.length)];
    }

    if (
        !(parseInt(day) >= -1 && parseInt(day) <= 7) ||
        !resolutions.includes(resolution) ||
        !markets.includes(market)
    ) {
        return new Response("Bad arguments for Bing Wallpaper.", {
            status: 400,
        });
    }

    const urlbase = await getUrlbase(day, market);
    const wurl = getWallpaperURL(urlbase, resolution);

    return Response.redirect(wurl, 302);
}

async function getUrlbase(day, market) {
    var endpoint =
        "https://www.bing.com/HPImageArchive.aspx?format=js&idx={day}&n=1&mkt={market}";
    const url = endpoint.replace("{day}", day).replace("{market}", market);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch Bing Wallpaper data: ${response.status}`,
        );
    }
    const data = await response.json();
    return data.images[0].urlbase;
}

function getWallpaperURL(urlbase, resolution) {
    var wallpaperURL = "https://www.bing.com{urlbase}_{resolution}.jpg";
    return wallpaperURL
        .replace("{urlbase}", urlbase)
        .replace("{resolution}", resolution);
}
