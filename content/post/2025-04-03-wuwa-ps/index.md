---
categories: Original
date: 2025-04-03T00:00:00Z
tags:
    - 游戏
    - 鸣潮
    - 逆向工程
slug: wuwa-ps
title: 《鸣潮》的 xeondev 私服简要运行教程
---

> 当前，`CN 2.3.0`测试服已发布。此文档及上游项目尚未支持此版本，请等待适配。
>
> 此时，您仍可执行“下载测试版游戏客户端”步骤。

此文档针对`CN 2.2.0`测试服，不保证在未来正确无误。

目前，私服仅支持基本操作和抽卡，不支持怪物自然生成和任务。请确认您真的需要私服，时间和精力同样昂贵。

加入[私服作者的 Discord 服务器](https://discord.com/invite/reversedrooms)免费获取全部所需文件。

[xeondev](https://github.com/thexeondev) 的私服是免费的，任何通过付费购买的软件都是诈骗。

也有一个其他人制作的[视频教程](https://www.youtube.com/watch?v=rOWBm-oJYT8)，可以与此教程相互补充，但以本文优先。

## 需求

- 基本的英语阅读能力
- 能操作 Windows 下的命令行
- 理解 Windows 下路径、Git、命令行的基本概念
- 访问国际互联网
- 可选：有基本软件开发经验

为了确保万无一失，请确保用户文件夹名只包含 ASCII 字符。

## 必要的工具

请提前安装这些工具，不提供教程。

- [Scoop](https://scoop.sh/) 命令行应用管理器
- [VSCode](https://code.visualstudio.com/) 文本编辑器
- [Visual Studio](https://visualstudio.microsoft.com/zh-hans/)（使用 C++ 的桌面开发） Rust/C++ 编译环境需求

## 步骤

所有涉及的 URL 都可以在[私服作者的 Discord 服务器](https://discord.com/channels/1154412462372818945/1283475673788452978)中的已标注消息找到。

我们将使用 Windows 11 下的 Windows Terminal（终端）和 PowerShell，而非命令提示符。假定您的游戏安装和开发目录都位于`D:`下。

### 下载测试版游戏客户端

下载[CN 测试版启动器](https://pcdownload-aliyun.aki-game.com/pcstarter/prod/starter/10008_Pa0Q0EMFxukjEqX33pF9Uyvdc8MaGPSz/G152/2.0.0.0/vgu4E1bmg2r5GMCydmVPcIvKpVwqdqDl/installer.exe)，使用 Discord 中的文件（`filechecklist.json`、`krfeapp.dat`和`KRApp.conf`）修补启动器，即可免登录下载客户端：

```plain
To work it new 2.0.0.0 place filechecklist.json and krfeapp.dat under <launcher_folder/2.0.0.0> and KRApp.conf under <launcher_folder/2.0.0.0/Assets>
```

假定启动器安装在`D:\Program Files\Wuthering Waves(Beta)`。

### 准备环境

打开 Windows 终端（不需要管理员权限），执行：

```pwsh
scoop install main/git
scoop install main/rustup
scoop install main/postgresql
scoop install extras/protobuf

rustup update
pg_ctl start
```

在执行`pg_ctl start`后，保持此窗口开启，数据库在此处运行。

这里安装的数据库超级用户为`postgres`，密码为空。

### 克隆源码并构建 Patch

在`D:`下新建文件夹`WuWaPS`，在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”。

执行：

```pwsh
git clone --recursive https://git.xeondev.com/wickedwaifus/wicked-waifus-rs.git
git clone https://git.xeondev.com/wickedwaifus/wicked-waifus-win-patch.git
git clone https://git.xeondev.com/xavo95/launcher.git
cd wicked-waifus-win-patch
.\build.bat
```

构建 Patch 完成后，将`D:\WuWaPS\wicked-waifus-win-patch\build\regular\wicked-waifus-win-cn_beta_2_2_1-regular.dll`复制到`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64`下。

### 下载补丁 Pak

在<https://git.xeondev.com/wickedwaifus/wicked-waifus-pak/releases/tag/2.2.0>下载补丁 Pak，将下载的`rr_fixes_100_p.pak`复制到`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Content\Paks`。

### 构建服务器并尝试启动

在`D:\WuWaPS\wicked-waifus-rs`下打开终端。

逐个执行，并在服务器构建完成并运行时按下 Ctrl + C 终止运行服务器：

```pwsh
cargo run --bin wicked-waifus-config-server
cargo run --bin wicked-waifus-hotpatch-server
cargo run --bin wicked-waifus-login-server
cargo run --bin wicked-waifus-gateway-server
cargo run --bin wicked-waifus-game-server
```

此时，由于尚未建立对应的数据库，服务器程序可能会异常退出，暂时忽略。

### 新建数据库`shorekeeper`

在开始菜单打开`pgAdmin 4`，选择`Add New Server`，`General-Name`和`Connection-Host name/address`均填入`127.0.0.1`，点击`Save`即可连接。

在左侧服务器列表中，右键`127.0.0.1`，选择`Create-Database`，`Database`填入`shorekeeper`，点击`Save`。

### 下载并安置`launcher`

下载<https://git.xeondev.com/xavo95/launcher/src/branch/master/samples/ww.toml>和<https://git.xeondev.com/xavo95/launcher/releases>的最新版本`launcher.exe`。

将它们复制到`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64`下，并将`ww.toml`重命名为`config.toml`。

编辑`config.toml`并保存：

```toml
[launcher]
executable_file = 'Client-Win64-Shipping.exe'
cmd_line_args = '-fileopenlog'
current_dir = 'D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64'
dll_list = ['D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64\wicked-waifus-win-cn_beta_2_2_1-regular.dll']

[environment]
#environment = ['TESTVAR1=AAAAAA', 'TESTVAR2=AAAAAA']
#use_system_env = true
#environment_append = false
```

### 正式运行服务器程序

在`D:\WuWaPS\wicked-waifus-rs`打开五个终端（在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”），分别执行：

```pwsh
cargo run --bin wicked-waifus-config-server
cargo run --bin wicked-waifus-hotpatch-server
cargo run --bin wicked-waifus-login-server
cargo run --bin wicked-waifus-gateway-server
cargo run --bin wicked-waifus-game-server
```

确保它们没有异常退出。

### 通过`launcher`运行游戏客户端

在`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64`右键`launcher.exe`，选择“以管理员身份运行”。

或者：

右键开始菜单按钮，选择“终端管理员”，执行：

```pwsh
cd "D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64"
.\launcher.exe
```

如果没有发生任何错误，应该可以使用任意 ID 进入游戏。
