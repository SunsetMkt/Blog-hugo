---
categories: Original
date: 2026-04-08T00:00:00Z
tags:
    - 游戏
    - 鸣潮
    - 逆向工程
slug: wuwa-ps-zigrika
title: "《鸣潮》的 xavo95/xeondev/Reversed Rooms 私服简要运行教程（3.3 版本）"
---

此文档针对`OS 3.3`测试服，不保证在未来正确无误。

本文在未来不一定实时更新，但每个版本的操作步骤基本相同，有开发经验的读者可轻松了解。

**目前，私服仅支持基本移动（“散步模拟器”）和抽卡，不支持怪物自然生成和任务。请确认您真的需要私服，时间和精力同样昂贵。**

**私服只适用于新版本爆料、游戏开发分析、地图研究等用途，不适用于一般玩家。**

**为了高效而无误地部署它，请确保您有基本的软件开发经验。**

**请勿混用不同教程。**

加入[私服作者的 Discord 服务器](https://discord.com/invite/reversedrooms)免费获取全部所需文件。

此私服是免费的，任何通过付费购买的软件都是诈骗。

## 需求

- 基本的英语阅读能力
- 能操作 Windows 下的命令行
- 理解 Windows 下路径、Git、命令行的基本概念
- 访问国际互联网（如果使用代理软件，使用 TUN/虚拟网卡 模式）
- 基本的软件开发经验

为了确保万无一失，请确保用户文件夹名只包含 ASCII 字符。

## 必要的工具

请提前安装这些工具，不提供详细教程。

### Windows 终端

Windows 11 预装，但以防万一：[Microsoft Store](https://apps.microsoft.com/detail/9n0dx20hk701)

### [Scoop](https://scoop.sh/) 命令行应用管理器

终端（PowerShell）执行：

```pwsh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

### [VSCode](https://code.visualstudio.com/) 文本编辑器

从[主页](https://code.visualstudio.com/)下载。

## 步骤

所有涉及的 URL 都可以在[私服作者的 Discord 服务器](https://discord.com/channels/1154412462372818945/1491036962923216896)（[或者这里](https://discord.com/channels/1154412462372818945/1154838061293772910/1491043779631910952)）中的（已标注）消息找到。

我们将使用 Windows 11 下的 [Windows Terminal（终端）](ms-windows-store://pdp?productid=9n0dx20hk701&mode=mini)和 PowerShell，而非命令提示符。假定您的游戏安装和开发目录都位于`D:`下。

### 下载测试版游戏客户端

**请自行在 Discord 群组内搜索[第三方上传的客户端](https://discord.com/channels/1154412462372818945/1170994564107079751/1490697466608353330)。**

在`D:`下新建文件夹`WuWaPS`，在`WuWaPS`内新建`client`文件夹。将下载的客户端解压到`client`文件夹，确保`Wuthering Waves.exe`在文件夹内。

### 准备环境

打开 [Windows 终端](ms-windows-store://pdp?productid=9n0dx20hk701&mode=mini)（不需要管理员权限），执行：

```pwsh
scoop install main/git
# 下面的暂时不需要执行，项目使用的 Zig 语言指定特定 Beta 版本
# scoop bucket add versions
# coop install versions/zig-dev
```

### 克隆源码

> 这里克隆的源码可能没有全部实际使用（因为可能下载了已构建的可执行文件），但为了研究方便，推荐克隆所有相关代码库。
>
> 此教程不包括维护这些代码库和保持更新的方法。

在`D:`下新建文件夹`WuWaPS`（在下载客户端步骤已完成），在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”。

执行：

```pwsh
git clone https://git.xeondev.com/WavyRooms/zigrika.git
git clone https://git.xeondev.com/WavyRooms/helios.git
```

### 构建补丁

```pwsh
cd .\helios\
.\setup-env.ps1
zig build
```

构建完成后，将`D:\WuWaPS\helios\zig-out\bin\`下的`helios.dll`和`helios_launcher.exe`复制到`D:\WuWaPS\client\Client\Binaries\Win64`下。

或者不手动构建：[Releases](https://git.xeondev.com/WavyRooms/helios/releases) 或许有已构建的可执行。

### 下载补丁 Pak

在<https://git.xeondev.com/RabbyDevs/zigrika-pakfile/releases>下载补丁 Pak，将下载的`rr_fixes_100_p.pak`复制到`D:\WuWaPS\client\Client\Content\Paks`。

### 构建服务器并运行

在`D:\WuWaPS\zigrika`下打开终端（在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”）。

```pwsh
./start-zigrika.cmd
```

服务器在下面的每一个输出出现后完整启动：

```plain
info(init): config server is listening at 127.0.0.1:5500
info(init): login server is listening at 127.0.0.1:10001
info(init): game server is listening at 127.0.0.1:13100
```

### 通过`launcher`运行游戏客户端

> 一些教程会建议您在此关闭所有的代理软件，您可以这样操作。
>
> 实际上，如果您的代理软件可以正确处理`127.0.0.1`，那么或许可以不关闭它们。

在`D:\WuWaPS\client\Client\Binaries\Win64`右键`helios_launcher.exe`，选择“以管理员身份运行”。

或者：

右键开始菜单按钮，选择“终端管理员”，执行：

```pwsh
cd "D:\WuWaPS\client\Client\Binaries\Win64"
.\helios_launcher.exe
```

确保左上角的登录服务器为`http://127.0.0.1:10001`。

如果没有发生任何错误，应该可以使用任意 ID 进入游戏（不要使用快速新建/登录）。

### 也参考

- [MrEg](https://www.youtube.com/watch?v=5ob6tmorDZY)
