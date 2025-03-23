---
categories: Original
date: 2023-04-07T00:00:00Z
tags:
    - Office
    - Windows
    - 信息技术
    - 软件
slug: windows-installation-cheat-table
title: 标准 Windows 安装速查表
---

## 推荐的方案

对于任何可运行 Windows 11 的现代设备，推荐使用 Windows 11 专业工作站版（易于下载 ISO）或企业版（最多的特性，减少广告和遥测，不易下载 ISO，不支持在 OOBE 登录个人 Microsoft 账号）。

不再建议安装 Windows 10，除非有必须这样做的原因。

若设备无法运行面向个人消费者的 Windows 10 版本，可使用 Windows 10 IoT Enterprise LTSC 2021（使用简体中文版 Enterprise LTSC 2021 安装，Microsoft-Activation-Scripts 会自动将其转换为 IoT 版本）。

Office 版本一律推荐 O365ProPlus，并使用 Microsoft-Activation-Scripts 激活。

## 系统镜像

建议：[Windows 11 官方媒体制作工具/ISO 下载](https://www.microsoft.com/zh-cn/software-download/windows11) [ARM64](https://www.microsoft.com/zh-cn/software-download/windows11arm64)

不建议：~~[Windows 10（October 14, 2025 停止支持）](https://www.microsoft.com/zh-cn/software-download/windows10)~~

如果一定要使用 Windows 10：[Windows LTSC Download](https://massgrave.dev/windows_ltsc_links)

如果您在俄罗斯，可以尝试由[massgravel](https://github.com/massgravel)提供的[msdl](https://msdl.gravesoft.dev/)。

### ISO 写入 USB 存储设备

[Rufus](https://rufus.ie/zh/)

### Windows 11 OOBE 跳过在线账号

按下`Shift + F10`，在弹出的 CMD 中执行`oobe\bypassnro`

## 安装 Office

推荐：[官方 O365ProPlusRetail 简体中文在线安装程序](https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=O365ProPlusRetail&platform=x64&language=zh-cn&version=O16GA)

<!--
https://massgrave.dev/office_c2r_links.html#Chinese_[zh-cn] 认为，此链接为
https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=O365ProPlusRetail&platform=x64&language=zh-cn&version=O16GA
-->

需要安装特定版本：[Office Tool Plus](https://otp.landian.vip/zh-cn/)

## 激活

> 虽然最好是支持正版的说...

> ~~微软官方客服使用的（[来源](https://twitter.com/TCNOco/status/1634620446002774018)，[网页存档](https://archive.is/kThLf)，[新闻报道](https://www.bleepingcomputer.com/news/security/microsoft-support-cracks-windows-for-customer-after-activation-fails/)）~~激活脚本：

推荐：[Microsoft-Activation-Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts)

或者直接在 Powershell 中执行（感谢 [massgravel](https://massgrave.dev/)）：

```pwsh
irm https://get.activated.win | iex
```

支持永久数字激活 Windows 10/11，Ohook 激活 Office（包括 365），KMS 激活 Windows 和 Office（包括 365），并且可以切换 Windows 授权版本。

或者，

[CMWTAT_Digital_Edition](https://github.com/TGSAN/CMWTAT_Digital_Edition)

有漂亮的 GUI，并且可以切换 Windows 授权版本。

## 其他的

可以通过[创建一个恢复驱动器](https://support.microsoft.com/zh-cn/windows/%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%81%A2%E5%A4%8D%E9%A9%B1%E5%8A%A8%E5%99%A8-abb4691b-5324-6d4a-8766-73fab304c246)来备份 OEM 提供的操作系统镜像（若存在），建议在收到产品后就这样做，此备份可能有不可替代的应用场景。

你可以在[这里](https://massgrave.dev/)获得更多关于下载和安装 Windows 和 Office 的参考资料。此第三方提供的[Windows 和 Office 下载资源](https://massgrave.dev/genuine-installation-media)被认为是可靠的。

不建议使用[UUPDump](https://uupdump.net/)获取镜像，除非有必须这样做的需求（例如获取 [ARM64](https://massgrave.dev/windows_arm_links) 版本或获取特定的 Insider 版本）。不推荐为 ARM64 设备安装 Insider 版本。在保留应用和数据的原地安装的情况下，UUPDump 的 ARM64 镜像有时会造成 UWP 工作故障（全部 UWP 无法启动或无法更新依赖）。

有关下载 Windows 10/11 LTSC 的说明,请参考[这里](https://massgrave.dev/windows_ltsc_links)。对于可以安装消费者版本的设备，未见安装 LTSC 版本的明显必要性，不建议安装。

LTSC 安装 Microsoft Store：管理员执行`wsreset -i`。

特别感谢[massgravel](https://github.com/massgravel)。

### 下载企业版 ISO

命令行启动媒体制作工具：

```shell
.\MediaCreationTool_Win11_23H2.exe /Eula Accept /Retail /MediaArch x64 /MediaLangCode zh-CN /MediaEdition Enterprise
```

当工具询问激活码时，使用此通用激活码（不会激活）：`XGVPP-NMH47-7TTHJ-W3FW7-8HV2C`。

[这里](https://github.com/AveYo/MediaCreationTool.bat)有一个第三方工具，尚未确定有效性。
