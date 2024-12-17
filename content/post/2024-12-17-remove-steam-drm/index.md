---
categories: Original
date: "2024-12-17T00:00:00Z"
tags:
    - Steam
    - 逆向工程
    - 游戏
slug: remove-steam-drm
title: 移除游戏的Steam验证
---

只考虑不使用第三方 DRM 和非完全联机的游戏。[了解更多](https://rentry.org/pgames)

## [goldberg_emulator](https://gitlab.com/Mr_Goldberg/goldberg_emulator)

绕过`Steamworks`验证。

替换`steam_api(64).dll`并期待它能工作。

## 配置 goldberg_emulator

添加`steam_appid.txt`文件并期待它能工作。

## [Steamless](https://github.com/atom0s/Steamless)

移除`SteamStub` DRM（若存在）。
