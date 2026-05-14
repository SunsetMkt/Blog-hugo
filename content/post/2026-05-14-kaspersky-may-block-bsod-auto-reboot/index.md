---
categories: Original
date: 2026-05-14T00:00:00Z
tags:
    - Kaspersky
    - Windows
    - 信息技术
    - 杀毒软件
    - 软件
slug: kaspersky-may-block-bsod-auto-reboot
title: 卡巴斯基可能会阻止特定环境下的 BSOD 时自动重启
---

在开启了内存完整性 (HVCI) 的 Windows 11 物理设备环境下，安装卡巴斯基（Kaspersky）系列产品后，一旦系统发生蓝屏（BSOD），“信息收集”进度会在卡在 100% 后彻底失去响应。此时，Windows 预设的故障时“自动重启”功能失效，必须手动按物理电源键强制重启。

通过在同一物理设备上的反复干净安装 Windows 和 OEM 驱动对照测试，可以注意到安装卡巴斯基和 BSOD 自动重启失效存在强烈的相关性。

无论是否安装卡巴斯基，当内核模式硬件强制堆栈保护也被开启时，`notmyfault`触发的 BSOD 可能无法生成 dump，观察到 Windows 不显示进度并在片刻后直接重启，且不留下 BugCheck 事件。

尽管无法排除问题可能和特定 OEM 设备、驱动或 Hyper-V 相关，仍然提示相关性。

卡巴斯基客服在接收反馈时坚持要求实际上难以生成（由于 Windows 安全措施和卡巴斯基本身问题）的完整内存 Dump，没有提供有效的回复。
