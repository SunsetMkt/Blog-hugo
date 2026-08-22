---
categories: Original
date: 2026-08-22T00:00:00Z
tags:
    - Windows
    - 信息技术
slug: quick-install-windows-fod
title: 快速安装 Windows 可选功能（Features On Demand）
---

适用 Windows 版本：Windows 10/11 所有 SKU 和它们的 Server 变种

可选功能：设置 App-系统-可选功能 展示的所有可选功能、.NET Framework (.NetFx3)和所有语言功能（不包括 Microsoft Store 分发的本地化体验包和神经网络语音）

[文档 Features On Demand](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/features-on-demand-v2--capabilities?view=windows-11)

[文档 Available Features on Demand](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/features-on-demand-non-language-fod?view=windows-11)

解决的问题：设置 App-系统-可选功能 GUI 不稳定或无法在无人值守和单次尝试内完成可选功能安装、网络不稳定或完全离线。

## 下载可选功能离线安装媒体

在<https://my.visualstudio.com/Downloads>（无需 Visual Studio 付费订阅）搜索关键词`Features on Demand`或`Languages and Optional Features`寻找适用于当前 Windows 版本和架构的 ISO，下载并挂载它（文件资源管理器内打开，假设挂载到`X:\`，应该存在文件夹`X:\LanguagesAndOptionalFeatures`）。

## 检查当前系统可选功能安装情况

管理员终端执行：

```pwsh
Get-WindowsCapability -Online
```

## 安装特定可选功能

管理员终端执行：

```pwsh
Add-WindowsCapability -Online -Name "可选功能Name" -Source "X:\LanguagesAndOptionalFeatures" -LimitAccess
```

## 安装所有可选功能

管理员终端执行：

```pwsh
$sourcePath = "X:\LanguagesAndOptionalFeatures"

Get-WindowsCapability -Online |
    Where-Object { $_.State -eq 'NotPresent' } |
    ForEach-Object {
        Write-Host "Installing: $($_.Name)..." -ForegroundColor Cyan
        Add-WindowsCapability -Online -Name $_.Name -Source $sourcePath -LimitAccess
    }
```
