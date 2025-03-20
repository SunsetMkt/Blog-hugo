---
categories: Original
date: 2023-05-08T00:00:00Z
tags:
  - Flash
  - InternetExplorer
  - Windows
  - 前端
slug: ie-and-flash
title: 在 Windows 10/11 上使用 Internet Explorer 和 Flash
---

> 本文描述了使用已弃用软件的方法，这在一些情况下会导致安全问题。如果您正在使用的服务强制要求您使用这些软件，您应首先质疑服务的安全性。

## Internet Explorer

虽然 Microsoft 声称，已从 Windows 中移除 Internet Explorer，但由于兼容性要求，这在 Windows 上几乎不可能实现。您仍可使用第三方软件打开 Internet Explorer。

您可使用[AigioL/OpenInternetExplorer](https://github.com/AigioL/OpenInternetExplorer)。

您的 UserAgent 信息如下:

<div>
    <p id="useragent"></p>
    <script>
        document.getElementById("useragent").innerHTML = navigator.userAgent;
    </script>
</div>

## Flash

最初的 Flash Player 已于 2021 年 1 月 12 日停用，但 Adobe 在中国授权**重庆重橙网络科技有限公司**代理 Flash Player 并提供官方更新。

**重庆重橙网络科技有限公司**发布的 Flash Player 中国版中附带行为恶劣的广告软件。

[CleanFlash](https://gitlab.com/cleanflash/installer)是基于 Flash Player 中国版、去除了广告软件的 Flash Player 安装工具。

即使您成功安装了 Flash Player，大多数现代浏览器也禁止使用它。

您亦可使用[CefFlashBrowser](https://github.com/Mzying2001/CefFlashBrowser)，它是一个集成 Flash 的开箱即用的简易浏览器。

<div>
    <p id="hasflash"></p>
    <script>
        // https://stackoverflow.com/a/20095467/20675299
        var hasFlash = false;
        try {
            var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if (fo) {
                hasFlash = true;
            }
        } catch (e) {
            if (navigator.mimeTypes
                && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
                && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                hasFlash = true;
            }
        }
        document.getElementById('hasflash').innerHTML = hasFlash ? 'Flash已安装（或正在使用Flash的替代方案）' : 'Flash未安装';
    </script>
</div>
