---
categories: Original
date: 2023-04-10T00:00:00Z
tags:
    - Android
    - Windows
    - 信息技术
slug: activate-vpn-in-wsa
title: 在适用于 Android™️ 的 Windows 子系统中启用 VPN 应用程序
---

虽然 WSA 似乎已提供`VpnDialogs`应用程序，但它似乎仍然不能正常显示 VPN 应用授权对话。

这是一个可行的跳过授权的方法：

启动 WSA 的开发人员模式后，使用`adb`连接 WSA。

执行`adb shell`。

```shell
adb shell
```

在连接到 Android Shell 之后，执行`appops set example.package.name ACTIVATE_VPN allow`。

```shell
windows_x86_64:/ $ appops set example.package.name ACTIVATE_VPN allow
```

（将`example.package.name`替换成需要授权的应用程序包名）
