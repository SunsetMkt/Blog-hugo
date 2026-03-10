---
categories: Original
date: 2025-11-21T00:00:00Z
tags:
    - Firefox
    - Android
slug: firefox-android-ftp
title: Firefox Android APK 的下载链接
---

<https://ftp.mozilla.org/pub/fenix/releases/>

<div>
    <div id="fenix-ftp-links"></div>
    <script>
        function deepcopy(obj) {
            return JSON.parse(JSON.stringify(obj));
        }
        const version_json =
            "https://product-details.mozilla.org/1.0/mobile_versions.json";
        const universal_template =
            "https://ftp.mozilla.org/pub/fenix/releases/{version}/android/fenix-{version}-android/fenix-{version}.multi.android-universal.apk";
        const arm64_template =
            "https://ftp.mozilla.org/pub/fenix/releases/{version}/android/fenix-{version}-android-arm64-v8a/fenix-{version}.multi.android-arm64-v8a.apk";
        fetch(version_json)
            .then((response) => response.json())
            .then((data) => {
                const version = data.version;
                const universal = deepcopy(universal_template).replaceAll(
                    "{version}",
                    version,
                );
                const arm64 = deepcopy(arm64_template).replaceAll("{version}", version);
                const links_div = document.getElementById("fenix-ftp-links");
                const universal_link = document.createElement("a");
                universal_link.textContent = universal;
                universal_link.href = universal;
                links_div.appendChild(universal_link);
                const br = document.createElement("br");
                links_div.appendChild(br);
                const arm64_link = document.createElement("a");
                arm64_link.textContent = arm64;
                arm64_link.href = arm64;
                links_div.appendChild(arm64_link);
            });
    </script>
</div>
