---
categories: Original
date: 2025-06-02T00:00:00Z
tags:
    - 游戏
    - 鸣潮
    - 逆向工程
slug: wuwa-os-cn-switch
title: 《鸣潮》的国际服/国服切换可行性探究（不可行）
---

以`2.3.1`为例，[wuwa-downloader](https://github.com/yuhkix/wuwa-downloader)提供了 OS 和 CN 版本启动器的远程配置 URL：

OS: <https://prod-alicdn-gamestarter.kurogame.com/launcher/game/G153/50004_obOHXFrFanqsaIEOmuKroCcbZkQRBC7c/index.json>

CN: <https://prod-cn-alicdn-gamestarter.kurogame.com/launcher/game/G152/10003_Y8xXrXk65DqFHEDgApn3cpK5lfczpFx5/index.json>

可获得资源文件索引 URL：

OS: <https://hw-pcdownload-qcloud.aki-game.net/launcher/game/G153/2.3.1/axFplYInrILNAVwHsqPWvgirHzeKeBgS/resource.json>

CN: <https://pcdownload-huoshan.aki-game.com/launcher/game/G152/2.3.1/xAgwspCwdYJOMlAPyLUCRnoCkGlYgUkv/resource.json>

比对两份索引，可以注意到：

- 尽管最终游戏资源应该是大致一致的，但每个 Pak 的 Hash 值不同
- 通过[wuwa-aes-archive](https://github.com/ClostroOffi/wuwa-aes-archive)可知，造成此现象的原因是 OS 和 CN 的 Pak AES Key 不同

**因此，仅凭借官方配置，无法实现快捷的切换。**
