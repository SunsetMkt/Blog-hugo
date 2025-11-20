---
categories: Original
date: 2025-11-20T00:00:00Z
tags:
    - Unreal
    - 信息技术
    - 游戏
    - 逆向工程
slug: unreal-unpack
title: Unreal 游戏的通用解包和逆向工程工具
---

## Unreal Pak 文件

使用对应的 AES Key 来打开 Pak 文件。

- [FModel](https://github.com/4sval/FModel)
- [UnrealPak](https://github.com/EpicGames/UnrealEngine)
- [UnrealPakViewer](https://github.com/jashking/UnrealPakViewer)
- [UEViewer](https://github.com/gildor2/UEViewer)

## Unreal Pak 文件的 AES Key

对可执行文件/运行时 Dump 使用下面的扫描工具：

- [AESDumpster](https://github.com/GHFear/AESDumpster)
- [aesdumpster-rs](https://github.com/yuhkix/aesdumpster-rs)

从网络论坛搜索：

- [cs.rin.ru](https://cs.rin.ru/forum/viewtopic.php?t=100672)

## 获取运行时 Dump（和引擎无关）

仅在可执行被混淆或静态文件扫描无结果时使用。

注意：一些游戏的 AES Key 是从网络动态获取的，这些工具无法有效地处理这种情况。

- 任务管理器
- [KsDumper-11](https://github.com/mastercodeon314/KsDumper-11)

## 生成 SDK/Mapping

对 UE5 的 Pak 浏览可能是必需的。

- [RE-UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)
- [Dumper-7](https://github.com/Encryqed/Dumper-7)

## Modding

- [RE-UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)
- [UE-Modding-Tools](https://github.com/Buckminsterfullerene02/UE-Modding-Tools)
- [UE_Modding](https://github.com/Dmgvol/UE_Modding)

## Wwise（和引擎无关）

- [wwiser](https://github.com/bnnm/wwiser)
- [vgmstream](https://github.com/vgmstream/vgmstream)
- [bnkextr](https://github.com/eXpl0it3r/bnkextr)

## Spine（和引擎无关）

- [SpineViewer](https://github.com/ww-rm/SpineViewer)

## Live2D（和引擎无关）

- [Cubism Viewer](https://docs.live2d.com/zh-CHS/cubism-editor-manual/selection-of-viewer/)

## 引擎源代码

- [UnrealEngine](https://github.com/EpicGames/UnrealEngine) [获取访问权限](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/downloading-source-code-in-unreal-engine)
