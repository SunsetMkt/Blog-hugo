---
categories: Original
date: "2025-07-06T00:00:00Z"
tags:
    - 前端
    - 信息技术
    - Demo
    - MyLittlePony
slug: New-Browser-Ponies-Demo
title: New-Browser-Ponies Demo
---

[Source](https://github.com/Pony-House/New-Browser-Ponies) [Website](https://browser.pony.house/index.html)

<script
    type="text/javascript"
    src="https://unpkg.com/browser-ponies@1.1.7/dist/js/ponybase.js"
></script>
<script
    type="text/javascript"
    src="https://unpkg.com/browser-ponies@1.1.7/dist/js/browserponies.js"
    id="browser-ponies-script"
></script>
<script type="text/javascript">
    /* <![CDATA[ */ (function (cfg) {
        BrowserPonies.setBaseUrl(cfg.baseurl);
        BrowserPonies.loadConfig(BrowserPoniesBaseConfig);
        BrowserPonies.loadConfig(cfg);
        let isFirstTime = true;
        BrowserPonies.Util.onload(() => {
            if (isFirstTime) {
                isFirstTime = false;
                BrowserPonies.api.getDemoGamepad(0, true);
            }
        });
    })({
        baseurl: "https://unpkg.com/browser-ponies@1.1.7/dist/",
        allowDoubleClickControl: true,
        fadeDuration: 500,
        volume: 1,
        fps: 60,
        speed: 3,
        audioEnabled: true,
        showFps: true,
        showLoadProgress: true,
        speakProbability: 0.1,
        spawn: {
            // applejack: 1,
            // fluttershy: 1,
            // "pinkie pie": 1,
            "princess twilight sparkle": 1,
            // "rainbow dash": 1,
            // rarity: 1,
        },
        spawnRandom: 0,
        autostart: true,
    }); /* ]]> */
</script>

<button onclick="BrowserPonies.spawnRandom(1)">Spawn 1 Random Ponies</button>

<button onclick="BrowserPonies.spawnRandom(10)">Spawn 10 Random Ponies</button>

<button onclick="BrowserPonies.spawnRandom(100)">Spawn 100 Random Ponies</button>
