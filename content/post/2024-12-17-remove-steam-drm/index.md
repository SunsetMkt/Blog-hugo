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

## Patch 游戏本身

### [Steam-auto-crack](https://gitlab.com/steamautocracks/Steam-auto-crack)

自动化应用破解。

### [goldberg_emulator](https://gitlab.com/Mr_Goldberg/goldberg_emulator) [Fork](https://github.com/Detanup01/gbe_fork)

绕过`Steamworks API`验证。

### [Steamless](https://github.com/atom0s/Steamless)

移除`SteamStub` DRM（若存在）。

## Steam 客户端 Patch

不修改游戏文件，而是注入 Steam 客户端本身。

- [OpenSteamTool](https://github.com/OpenSteam001/OpenSteamTool)（开源软件）
- [CN_GreenLumaGUI](https://github.com/clinlx/CN_GreenLumaGUI)（闭源软件的开源 GUI）
- [GreenLuma](https://cs.rin.ru/forum/viewtopic.php?f=10&t=103709)（闭源软件）
- [SteamTools](https://steamtools.net/)（闭源软件）

## 其他

- [DepotDownloader](https://github.com/SteamRE/DepotDownloader) Depot 下载
