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

> 注意：VMware Workstation Pro 或许也会导致类似的结果。

## 摘要

在开启了内存完整性和内核模式硬件强制堆栈保护的 Windows 11 物理设备环境下，安装卡巴斯基（Kaspersky）系列产品后，一旦系统发生蓝屏（BSOD），“信息收集”进度可能会在卡在 100% 后彻底失去响应。此时，Windows 预设的 BSOD 时“自动重启”功能失效，必须手动按物理电源键强制重启。

通过在同一物理设备上的反复干净安装 Windows 和 OEM 驱动对照测试，可以注意到安装卡巴斯基和 BSOD 自动重启失效存在强烈的相关性。

## 步骤组 1

- 特定 OEM 设备，支持 TPM 和虚拟化
- diskpart clean 硬盘 0
- 安装 Windows 11 Workstation
- 安装 Windows 更新
- 安装 OEM 驱动
- 内存完整性、本地安全机构保护、易受攻击的驱动程序阻止列表默认开启
- `notmyfault`触发的 BSOD 正常重启
- 安装卡巴斯基
- `notmyfault`触发的 BSOD 无法正常重启
- 卸载卡巴斯基
- `notmyfault`触发的 BSOD 正常重启

注意到：

- 特定环境（据信是干净的） → 安装卡巴斯基（BSOD 重启失效）→ 卸载（BSOD 重启恢复）

## 步骤组 2

- 特定 OEM 设备，支持 TPM 和虚拟化
- diskpart clean 硬盘 0
- 安装 Windows 11 Workstation
- 安装 Windows 更新
- 安装 OEM 驱动
- 安装 NVIDIA App 和 Intel DSA 推荐的驱动
- 安装所有 Windows Update 提供的可选驱动更新
- 启用内存完整性、内核模式硬件强制堆栈保护、本地安全机构保护、易受攻击的驱动程序阻止列表
- `notmyfault`触发的 BSOD 正常重启且产生 Dump
- 启用容器、受保护的主机、虚拟机平台、虚拟机监控程序平台、沙盒、Hyper-V 服务
- `notmyfault`触发的 BSOD 正常重启但不产生 Dump
- 安装卡巴斯基
- `notmyfault`触发的 BSOD 正常重启但不产生 Dump

注意到：

- Hyper-V 相关的 Dump 失效是独立现象，尚未确定是否与卡巴斯基存在交互。
- 卡巴斯基在已开启虚拟化的环境下没有产生额外的可观测退化。

## 其他

无论是否安装卡巴斯基，当一系列虚拟化功能（容器、受保护的主机、虚拟机平台、虚拟机监控程序平台、沙盒、Hyper-V 服务）被开启时，`notmyfault`触发的 BSOD 可能无法生成 Dump，观察到 Windows 不显示进度并在片刻后直接重启，且不留下 BugCheck 事件。

尽管无法排除问题可能和特定 OEM 设备、驱动或 Hyper-V 相关，仍然提示相关性。

尽管本测试在纯净环境下表现出强烈的因果相关性，但由于缺乏双机调试、Dump 检查和取证，无法确认故障的实际原因。

## 客服回复

卡巴斯基客服在接收反馈时坚持要求实际上难以生成（由于 Windows 安全措施和卡巴斯基本身问题）的完整内存 Dump，没有提供有效的回复。

随后，我们发现，卡巴斯基客服似乎无法区分“由卡巴斯基造成的 BSOD”和“卡巴斯基影响 BSOD BugCheck 流程”的区别。
