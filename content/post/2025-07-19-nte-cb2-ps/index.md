---
categories: Original
date: 2025-07-19T00:00:00Z
tags:
    - 游戏
    - 逆向工程
slug: nte-cb2-ps
title: Neverness To Everness Closed Beta II 的 xavo95/xeondev/Reversed Rooms 私服简要运行教程
---

加入[私服作者的 Discord 服务器](https://discord.com/invite/reversedrooms)免费获取全部所需文件。

此私服是免费的，任何通过付费购买的软件都是诈骗。

## 简略的步骤

也参考[官方文字教程](https://discord.com/channels/1154412462372818945/1311756146364776548/1395810785095057409)。

### 修补启动器并获取客户端

从官方 CDN [下载启动器](https://ntecdn1.wmupd.com/clientRes/Install/NTEGlobal_setup.exe)，运行它，并完成大约 600MB 的启动器完整下载。

使用十六进制编辑器修补`D:\Neverness To Everness\NTEGlobal\NTEGlobalGame.exe`，转到（绝对）位置`356760`（Hex），将`40 55 48 8B EC 48 83 EC`替换为`48 C7 C0 00 00 00 00 C3`。

保存更改，运行启动器并忽略任何更新提示（如果有）。现在，您不需要测试账号也可以点击“下载游戏”。

### 修补客户端

在<https://git.xeondev.com/fadia-rs/symphonic/releases>获取修补`HTGameBase.dll`，并将其覆盖于`D:\Neverness To Everness\Client\WindowsNoEditor\HT\Binaries\Win64`。

### 运行服务器

运行<https://git.xeondev.com/fadia-rs/fadia-rs>的三个组件（fadia-patchersdk-server, fadia-gamesdk-server, fadia-game-server），保持它们打开。

### 运行客户端

不要使用启动器，直接运行`D:\Neverness To Everness\Client\WindowsNoEditor\HT\Binaries\Win64\HTGame.exe`。
