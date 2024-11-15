---
categories: Original
date: "2023-04-19T00:00:00Z"
tags:
  - Android
slug: miui-global-tips
title: 关于MIUI国际版的备忘
---

- 中国大陆版的备份功能在国际版 MIUI 中**不一定可用**。[Android-DataBackup](https://github.com/XayahSuSuSu/Android-DataBackup)（需要[root](https://github.com/topjohnwu/Magisk)）是个不错的替代品。
- 大多数国际版的拨号键盘、日历和通讯录使用 Google 原版应用，除了部分**印尼版**MIUI（也有通话录音功能）。
- [EU](https://xiaomi.eu/community/)版不是官方维护的版本，使用中国大陆的 MIUI 修改而来。

其他的 Tips：

- 对于部分小米设备，如果跟随[Magisk 的官方安装教程](https://topjohnwu.github.io/Magisk/install.html)，在执行`fastboot flash vbmeta --disable-verity --disable-verification vbmeta.img`后发生了 bootloop，这可能说明这一步根本不需要。执行`fastboot flash vbmeta vbmeta.img`可能会修复 bootloop。
- 在一些设备上，Google Play 系统更新不会正常运行，可能会导致重复重启/长开机时间/Magisk 工作异常，无法解决。

一些可能有用的链接：

https://cdn.alsgp0.fds.api.mi-img.com/micomm/MiFlash2020-3-14-0.rar

https://miuirom.xiaomi.com/rom/u1106245679/7.3.706.21/miflash_pro-7.3.706.21.zip

https://miuirom.xiaomi.com/rom/u1106245679/7.3.224.9/miflash_pro-7.3.224.9.zip
