---
categories: Original
date: 2026-03-13T00:00:00Z
tags:
    - 信息技术
    - 操作系统
    - Android
slug: android-root-oss
title: 开源的 Android Root 方案和其他工具
---

本列表仅收录当前仍保持完全开源的 Android Root 方案与相关工具；曾经开源、后续转为闭源的项目不在收录范围内。此列表旨在整理开源现状，并非完整目录。

收录标准仅核实项目是否公开源代码，不对其实用性、代码质量、安全性、维护状态或最近更新时间作评价。

对于涉及系统最高权限的个人 Root 项目，开源本身并不自动意味着安全，但闭源意味着实现无法被独立审查，也就无法建立基本可信性。对于这类项目，任何拒绝公开代码的理由，都不能替代透明性本身。任何闭源辩解都不足以构成信任基础。

## 特别感谢

特别感谢这些开发者长期坚持以开源方式推动 Android Root 生态发展：

- [topjohnwu](https://github.com/topjohnwu) 率先开创并长期维护 Magisk 方案，为现代 Android Root 生态奠定基础
- [tiann](https://github.com/tiann) 开创了 KernelSU 方案，推动了内核级 Root 路线的发展
- [JingMatrix](https://github.com/JingMatrix) 持续维护并改进多个方向上的开源项目，为社区提供了大量可审计、可复现、可继续演进的实现
- 以及所有选择公开实现细节、接受社区审查、以透明方式发布成果的其他开发者

在安全敏感领域，坚持公开代码、接受审查、允许验证，本身就是对用户负责的体现。相反，只要拒绝开源，就意味着用户无法独立验证其实现，也无法建立基本信任；任何要求用户在不可验证前提下接受闭源方案的做法，都无助于社区建立真正可靠的生态。

## Root

- **[KernelSU](https://github.com/tiann/KernelSU)**
- [KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next)
- [APatch](https://github.com/bmax121/APatch)
- [Magisk](https://github.com/topjohnwu/Magisk)
- [sukisu-ultra](https://github.com/sukisu-ultra/sukisu-ultra)

## Zygisk

- **[NeoZygisk](https://github.com/JingMatrix/NeoZygisk)**
- [ReZygisk](https://github.com/PerformanC/ReZygisk)
- [Magisk](https://github.com/topjohnwu/Magisk)

## Root 隐藏

- **[Zygisk-Assistant](https://github.com/snake-4/Zygisk-Assistant)**
- [NoHello](https://github.com/MhmRdd/NoHello)

## Play Integrity 修补

- **[PlayIntegrityFork](https://github.com/osm0sis/PlayIntegrityFork)**
- [PlayIntegrityFix (inject)](https://github.com/KOWX712/PlayIntegrityFix)

## TEE 修补

- **[TEESimulator](https://github.com/JingMatrix/TEESimulator) & [Tricky-Addon-Update-Target-List](https://github.com/KOWX712/Tricky-Addon-Update-Target-List)**
- ~~[TrickyStoreOSS](https://github.com/beakthoven/TrickyStoreOSS)~~

## Xposed

- **[Vector (LSPosed Fork)](https://github.com/JingMatrix/Vector)**
- [LSPosed-Irena](https://github.com/re-zero001/LSPosed-Irena)
- ~~[LSPosed](https://github.com/LSPosed/LSPosed)~~
