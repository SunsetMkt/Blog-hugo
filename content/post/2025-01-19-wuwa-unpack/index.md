---
categories: Original
date: 2025-01-19T00:00:00Z
tags:
    - Unreal
    - 信息技术
    - 游戏
    - 逆向工程
    - 鸣潮
slug: wuwa-unpack
title: 《鸣潮》的资源文件解包（和其他逆向工程）
---

使用[FModel](https://github.com/4sval/FModel)工具（或[xavo95/repak](https://github.com/xavo95/repak.git)）和[wuwa-aes-archive](https://github.com/ClostroOffi/wuwa-aes-archive)的 AES Key 打开 Pak 文件。

也阅读：[《鸣潮》的 xeondev 私服简要运行教程]({{< ref "2025-04-03-wuwa-ps" >}})。

## 可能会有帮助的其他工具

- Wwise 音频事件提取 <https://github.com/bnnm/wwiser>
- Unreal 模型提取 <https://www.gildor.org/en/projects/umodel>
- Wwise 音频转码 <https://github.com/vgmstream/vgmstream>
- 自`2.1`版本，视频文件已被加密，暂无解决方案。
- 自`2.4`版本，`ConfigDB`似乎已被加密。参考[wicked-waifus-data](https://git.xeondev.com/wickedwaifus/wicked-waifus-data)，FModel 已实现解密。

## 其他值得注意的项目

- 抽卡数据收集网站（仅开源本地化文本） <https://github.com/wuwatracker/wuwatracker>
- 作弊 <https://github.com/chadlrnsn/wuwa-moonlight>
- 图像配置优化 <https://github.com/AlteriaX/WuWa-Configs>
- 自动化 <https://github.com/ok-oldking/ok-wuthering-waves>
- FPS 调节和在官方不支持的设备上启用光线追踪 <https://github.com/WakuWakuPadoru/WuWa_Simple_FPSUnlocker>
- ~~私服 <https://github.com/thexeondev/WutheringWaves>~~
- Mod 加载 <https://github.com/SpectrumQT/WWMI-Package>
- 解包数据 <https://github.com/Arikatsu/WutheringWaves_Data>
- 抽卡数据收集等 <https://github.com/leck995/WutheringWavesTool>
- ~~私服 <https://github.com/thexeondev/Shorekeeper>~~
- 解包数据 <https://github.com/Dimbreath/WutheringData>
- 自动化 <https://github.com/babalae/better-wuthering-waves>
- 自动化 <https://github.com/EMCJava/WuWaOpt>
- 自动化 <https://github.com/Hashiao/wuwaBackendTool>
- 私服 <https://git.xeondev.com/wickedwaifus/wicked-waifus-rs> [教程](https://www.youtube.com/watch?v=rOWBm-oJYT8)
- 客户端资源下载（包含测试服） <https://github.com/yuhkix/wuwa-downloader>
- `1.4`及以前的历史版本 <https://github.com/ClostroOffi/wuwa-dl-library>
