---
categories: Original
date: 2025-04-03T00:00:00Z
tags:
    - 游戏
    - 鸣潮
    - 逆向工程
slug: wuwa-ps
title: 《鸣潮》的 xeondev 私服简要运行教程（2.3 版本）
---

> 当前，`CN 2.3.0`测试服已发布。此文档及上游项目已支持此版本。感谢 [xavo95](https://github.com/xavo95) 和 xeondev。

此文档针对`CN 2.3.0`测试服，不保证在未来正确无误。

**目前，私服仅支持基本移动（“散步模拟器”）和抽卡，不支持怪物自然生成和任务。请确认您真的需要私服，时间和精力同样昂贵。**

**私服只适用于新版本爆料、游戏开发分析、地图研究等用途，不适用于一般玩家。**

**为了高效而无误地部署它，请确保您有基本的软件开发经验。**

加入[私服作者的 Discord 服务器](https://discord.com/invite/reversedrooms)免费获取全部所需文件。

[xeondev](https://github.com/thexeondev) 的私服是免费的，任何通过付费购买的软件都是诈骗。

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

### [Visual Studio](https://visualstudio.microsoft.com/zh-hans/)（使用 C++ 的桌面开发） Rust/C++ 编译环境需求

[Microsoft C++ 生成工具](https://visualstudio.microsoft.com/visual-cpp-build-tools/)或许也有用。

> When installing build tools, these two components should be selected:
>
> - MSVC - VS C++ x64/x86 build tools
> - Windows SDK

## 步骤

所有涉及的 URL 都可以在[私服作者的 Discord 服务器](https://discord.com/channels/1154412462372818945/1283475673788452978)中的已标注消息找到。

我们将使用 Windows 11 下的 [Windows Terminal（终端）](ms-windows-store://pdp?productid=9n0dx20hk701&mode=mini)和 PowerShell，而非命令提示符。假定您的游戏安装和开发目录都位于`D:`下。

### 下载测试版游戏客户端

下载[CN 测试版启动器](https://pcdownload-aliyun.aki-game.com/pcstarter/prod/starter/10008_Pa0Q0EMFxukjEqX33pF9Uyvdc8MaGPSz/G152/2.0.0.0/vgu4E1bmg2r5GMCydmVPcIvKpVwqdqDl/installer.exe)（若提示更新，请勿更新），使用 Discord 中的文件（`filechecklist.json`、`krfeapp.dat`和`KRApp.conf`）修补启动器，即可免登录下载客户端：

```plain
To work it new 2.0.0.0 place filechecklist.json and krfeapp.dat under <launcher_folder/2.0.0.0> and KRApp.conf under <launcher_folder/2.0.0.0/Assets>
```

假定启动器安装在`D:\Program Files\Wuthering Waves(Beta)`。

### 准备环境

打开 [Windows 终端](ms-windows-store://pdp?productid=9n0dx20hk701&mode=mini)（不需要管理员权限），执行：

```pwsh
scoop install main/git
scoop install main/rustup
scoop install main/postgresql
scoop bucket add extras
scoop install extras/protobuf

rustup update
pg_ctl start
```

在执行`pg_ctl start`后，保持此窗口开启，数据库在此处运行。

这里安装的数据库超级用户为`postgres`，密码为空。

无需修改服务器配置文件中的数据库设置，因为此处的默认值与配置默认值相同。

### 克隆源码并构建补丁 DLL

> 这里克隆的源码可能没有全部实际使用（因为可能下载了已构建的可执行文件），但为了研究方便，推荐克隆所有相关代码库。
>
> 此教程不包括维护这些代码库和保持更新的方法。

在`D:`下新建文件夹`WuWaPS`，在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”。

执行：

```pwsh
git clone --recursive https://git.xeondev.com/wickedwaifus/wicked-waifus-rs.git
git clone https://git.xeondev.com/wickedwaifus/wicked-waifus-win-patch.git
git clone https://git.xeondev.com/xavo95/launcher.git

cd wicked-waifus-win-patch
.\build.bat
```

构建补丁 DLL 完成后，将`D:\WuWaPS\wicked-waifus-win-patch\build\regular\wicked-waifus-win-cn_beta_2_3_0-regular.dll`复制到`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64`下。

或者：

<https://git.xeondev.com/wickedwaifus/wicked-waifus-win-patch/releases>或许有已构建的 DLL，可直接使用。

### 下载补丁 Pak

在<https://git.xeondev.com/wickedwaifus/wicked-waifus-pak/releases/tag/2.3.0>下载补丁 Pak，将下载的`rr_fixes_100_p.pak`复制到`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Content\Paks`。

### 构建服务器并试运行

> 这里只是试运行，确保构建成功即可。服务器程序运行后异常退出此时是正常的，因为尚未建立数据库。
>
> 使用`cargo build`可以一次性构建所有必要的部件，但试运行也有好处。

在`D:\WuWaPS\wicked-waifus-rs`下打开终端（在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”）。

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

> 可以通过命令行创建数据库，但是为了用户友好，此处使用图形化界面。

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
dll_list = ['D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64\wicked-waifus-win-cn_beta_2_3_0-regular.dll']

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

> 一些教程会建议您在此关闭所有的代理软件，您可以这样操作。
>
> 实际上，如果您的代理软件可以正确处理`127.0.0.1`，那么或许可以不关闭它们。

在`D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64`右键`launcher.exe`，选择“以管理员身份运行”。

或者：

右键开始菜单按钮，选择“终端管理员”，执行：

```pwsh
cd "D:\Program Files\Wuthering Waves(Beta)\Wuthering Waves (Beta) Game\Client\Binaries\Win64"
.\launcher.exe
```

如果没有发生任何错误，应该可以使用任意 ID 进入游戏。

### 配置游戏服务器

第一次运行后，`D:\WuWaPS\wicked-waifus-rs`下会自动生成服务器配置文件。其中，`gameserver.toml`用于配置实际的游戏体验。

```toml
service_id = 2

[database]
host = "localhost:5432"
user_name = "postgres"
password = ""
db_name = "shorekeeper"

[service_end_point]
addr = "tcp://127.0.0.1:10004"

[gateway_end_point]
addr = "tcp://127.0.0.1:10003"

[game_server_config]
resources_path = "data/assets/game-data"
load_textmaps = true
# Do not change yet, issues to be solved
quadrant_size = 1000000

[asset_config]
asset_url = "https://git.xeondev.com/wickedwaifus/wicked-waifus-data/releases/download/pioneer_2.3.1/bundle.zip"
buffer_size = 268435456

[default_unlocks]
unlock_all_roles = true
unlock_all_roles_max_level = false
unlock_all_roles_all_sequences = false
unlock_all_mc_elements = true
unlock_all_weapons = false
unlock_all_adventures = false
unlock_all_functions = true
unlock_all_guides = false
unlock_all_tutorials = false
unlock_all_teleporter = false
```

`[default_unlocks]`下的配置可以修改为`true`以实现对应的功能。修改后请停止并重新启动对应的服务器程序（这里是`wicked-waifus-game-server`）。每次修改配置后，请新建玩家账号以应用新的配置。

### 再次启动服务器

部署成功并关闭服务器后，要再次启动服务器，在`D:\WuWaPS\wicked-waifus-rs`打开六个终端（在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”），分别执行：

```pwsh
pg_ctl start
cargo run --bin wicked-waifus-config-server
cargo run --bin wicked-waifus-hotpatch-server
cargo run --bin wicked-waifus-login-server
cargo run --bin wicked-waifus-gateway-server
cargo run --bin wicked-waifus-game-server
```

## 技术细节

### 技术栈

- Rust
- PostgreSQL

### 部件功能

- CN 测试版启动器和补丁：用于免登录下载测试版游戏客户端
- 补丁 DLL（`wicked-waifus-win-patch`）：需要注入的 DLL，绕过 Pak 校验，修改服务器 URL，禁用 Kuro SDK
- 补丁 Pak（`wicked-waifus-pak`）：需要绕过 Pak 校验，禁用 TpSafe，禁用 Kuro SDK，修改 VisionRecommendController，修改登录界面 BGM
- `launcher`（`xavo95/launcher`）：DLL 注入工具
- 服务器主项目（`wicked-waifus-rs`）：基于逆向工程的游戏服务器实现

### 默认角色配队

根据[WuWa Character IDs](https://github.com/donutman07/Wuthering-Waves-WuWa-Character-IDs/blob/main/WuWaCharacterIDs.md)和`data\assets\game-data\BinData\RoleInfo.json`修改`wicked-waifus-game-server\src\logic\role\formation.rs`：

```rust
// Will be updated every version
const DEFAULT_FORMATION: &[i32] = &[5101, 1407, 1507];
```

任何对服务器端的修改都推荐清空数据库，至少新建玩家账户。

### 默认角色效果

参考`data\assets\game-data\BinData\Buff.json`修改`wicked-waifus-game-server\src\logic\ecs\buf.rs`：

```rust
impl BufManager {
    const PERMANENT_ROLE_BUFFS: &'static [i64] = &[
        3003,      // Remove wall run prohibition
        3004,      // Remove gliding prohibition
        1213,      // Reduce stamina while flying
        1214,      // Reduce stamina while flying in sprint
        1215,      // Reduce stamina while flying up in sprint
        1216,      // Reduce stamina while flying down in sprint
        640012051, // Allow flying -> tag: 1151923109
    ];
```

## 扩充资料

也有一个其他人制作的[视频教程](https://www.youtube.com/watch?v=rOWBm-oJYT8)，但以本文优先。
