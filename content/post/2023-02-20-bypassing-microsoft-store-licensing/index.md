---
categories: Repost
date: 2023-02-20T00:00:00Z
tags:
  - Windows
  - 信息技术
  - 逆向工程
slug: bypassing-microsoft-store-licensing
title: 【部分翻译】绕过 Microsoft Store 应用的运行前正版验证
---

> 不鼓励盗版行为，但微软声称这是预期设计，不打算修复。
>
> 这不是一个高技术的正版验证破解。
>
> **此方法不适用于加密的 eappx/eappxbundle 安装包。**

[参考资料](https://titleos.dev/bypassing-microsoft-store-licensing/)

<!-- https://4sysops.com/wiki/list-of-ms-settings-uri-commands-to-open-specific-settings-in-windows-10/ -->

一些开源项目（如[StoreLib](https://github.com/StoreDev/StoreLib)）和在线服务（如[Microsoft Store - Generation Project](https://store.rg-adguard.net/)）允许用户直接下载应用的 appx/appxbundle 安装包，而不需要实际购买它们。

下载的安装包可以被直接安装，但若启动应用，将会被提示应用在当前微软账号中不可用（未购买），错误代码`0x803F8001`。（我没有找到这个行为的文档，在这里称为“Microsoft Store 应用的运行前正版验证”）

通过 7-Zip（有时不可靠，无法正确处理文件名中的空格或 URL 编码）或 Windows 10 SDK（可通过 Visual Studio Installer 安装）中的`MakeAppx.exe`工具（[文档](https://learn.microsoft.com/en-us/windows/win32/appxpkg/make-appx-package--makeappx-exe-)）（推荐），可以提取 appx/appxbundle 安装包内的文件。

通常，我们处理的是 appx 安装包的提取文件。若是 appxbundle，请确定并提取 bundle 中主要的 appx。

删除提取文件中的`AppxSignature.p7x`。

在设置中打开 _[开发人员模式](ms-settings:developers) 从任意源（包括松散文件）安装应用。_

在提取文件的根目录，打开 PowerShell，执行`Add-AppxPackage -Register .\AppxManifest.xml`。应用应该会成功安装并出现在开始菜单中，可以正常运行（若没有设计其他的防盗版功能）。如需卸载，可在开始菜单中右键应用选择卸载，或在设置应用中卸载。
