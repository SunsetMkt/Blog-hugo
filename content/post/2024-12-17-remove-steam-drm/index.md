---
categories: Original
date: 2024-12-17T00:00:00Z
tags:
    - Steam
    - 信息技术
    - 游戏
    - 逆向工程
slug: remove-steam-drm
title: 移除游戏的 Steam 验证
---

只考虑不使用第三方 DRM 和非完全联机的游戏。[了解更多](https://rentry.org/pgames)

## [goldberg_emulator](https://gitlab.com/Mr_Goldberg/goldberg_emulator)

绕过`Steamworks API`验证。

替换`steam_api(64).dll`并期待它能工作。

## 配置 goldberg_emulator

添加`steam_appid.txt`文件并期待它能工作。

## [Steamless](https://github.com/atom0s/Steamless)

移除`SteamStub` DRM（若存在）。

## [Steam-auto-crack](https://github.com/SteamAutoCracks/Steam-auto-crack)

自动化应用破解。

## [SteamAutoCracker](https://github.com/BigBoiCJ/SteamAutoCracker)

自动化应用破解。

## GreenLuma 及类似 Steam 客户端注入方案

不修改游戏文件，而是干预 Steam 客户端本身。

[CN_GreenLumaGUI](https://github.com/clinlx/CN_GreenLumaGUI)（基于闭源软件）

[GreenLuma](https://cs.rin.ru/forum/viewtopic.php?f=10&t=103709)（闭源软件）

[SteamTools](https://steamtools.net/)（闭源软件）
