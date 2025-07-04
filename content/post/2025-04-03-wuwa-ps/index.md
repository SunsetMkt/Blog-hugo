---
categories: Original
date: 2025-04-03T00:00:00Z
tags:
    - 游戏
    - 鸣潮
    - 逆向工程
slug: wuwa-ps
title: 《鸣潮》的 xavo95/xeondev/Reversed Rooms 私服简要运行教程（2.5 版本）
---

> 当前，`CN 2.5.1`测试服已发布。此文档及上游项目已支持此版本。
>
> 此版本客户端可通过[wuwa-downloader](https://github.com/yuhkix/wuwa-downloader)下载。

此文档针对`CN 2.5.1`测试服，不保证在未来正确无误。

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

### [Visual Studio](https://visualstudio.microsoft.com/zh-hans/)（使用 C++ 的桌面开发） Rust/C++ 编译环境需求

[Microsoft C++ 生成工具](https://visualstudio.microsoft.com/visual-cpp-build-tools/)或许也有用。

阅读[Rust 文档关于此步骤的说明](https://rust-lang.github.io/rustup/installation/windows-msvc.html)。

> When installing build tools, these two components should be selected:
>
> - MSVC - VS C++ x64/x86 build tools
> - Windows SDK

## 步骤

所有涉及的 URL 都可以在[私服作者的 Discord 服务器](https://discord.com/channels/1154412462372818945/1283475673788452978)中的已标注消息找到。

我们将使用 Windows 11 下的 [Windows Terminal（终端）](ms-windows-store://pdp?productid=9n0dx20hk701&mode=mini)和 PowerShell，而非命令提示符。假定您的游戏安装和开发目录都位于`D:`下。

### 下载测试版游戏客户端

#### `2.5`版本

测试版已启用新的 CDN 并全域验证`kr-token`（登录测试账号时由服务器返回给启动器），因此无法在没有合法测试服账号的情况下直接获取客户端。

**请自行在 Discord 群组内搜索第三方上传的客户端。**

在`D:`下新建文件夹`WuWaPS`，在`WuWaPS`内新建`client`文件夹。将下载的客户端解压到`client`文件夹，确保`Wuthering Waves.exe`在文件夹内。

#### `2.4`版本（已失效）

~~下载[wuwa-downloader](https://github.com/yuhkix/wuwa-downloader/releases)，在`D:`下新建文件夹`WuWaPS`，在`WuWaPS`内新建`client`文件夹。将`wuwa-downloader.exe`放入`client`文件夹，运行它。~~

> `wuwa-downloader.exe`在一些有互联网审查的地区可能需要开启全局代理（TUN/虚拟网卡）才可以连接 GitHub 获取最新的下载地址。

跟随下面的示例操作：

```plain
[*] Available versions:
1. Live - OS (2.3.1)
2. Live - CN (2.3.1)
3. Beta - OS (2.4.0)
4. Beta - CN (2.4.0)
[?] Select version: 4（输入 4，并按下 Enter）

[*] Fetching download configuration...
[*] Using default.config
[?] Please specify the directory where the game should be downloaded (press Enter to use the current directory):

（开始下载；不要担心它的下载速度，它是全速下载的；输出可能会卡顿，实际仍在下载）
[*] Download folder: D:\WuWaPS\client

[*] Fetching index file...
[+] Index file downloaded successfully
[*] Found 642 files to download

（下载完成）
 DOWNLOAD COMPLETE

[+] Successfully downloaded: 642
[-] Failed downloads: 0
[*] Files saved to: D:\WuWaPS\client

[!] Press Enter to exit...
```

#### `2.3`及之前的版本（已失效）

> ~~若启动器强制更新，请根据更新版本动态调整补丁文件中`filechecklist.json`的内容。~~
>
> 启动器似乎可以在删除`filechecklist.json`的情况下运行，此文件或许不是必需的。

~~下载[CN 测试版启动器](https://pcdownload-aliyun.aki-game.com/pcstarter/prod/starter/10008_Pa0Q0EMFxukjEqX33pF9Uyvdc8MaGPSz/G152/2.0.0.0/vgu4E1bmg2r5GMCydmVPcIvKpVwqdqDl/installer.exe)，使用 Discord 中的文件（`filechecklist.json`、`krfeapp.dat`和`KRApp.conf`）修补启动器，即可免登录下载客户端：~~

```plain
To work it new 2.0.0.0 place filechecklist.json and krfeapp.dat under <launcher_folder/2.0.0.0> and KRApp.conf under <launcher_folder/2.0.0.0/Assets>
```

~~假定启动器安装在`D:\Program Files\Wuthering Waves(Beta)`。~~

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

在`D:`下新建文件夹`WuWaPS`（在下载客户端步骤已完成），在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”。

执行：

```pwsh
git clone --recursive https://git.xeondev.com/wickedwaifus/wicked-waifus-rs.git
git clone https://git.xeondev.com/wickedwaifus/wicked-waifus-win-patch.git
git clone https://git.xeondev.com/xavo95/launcher.git
```

然后构建补丁 DLL：

```pwsh
cd wicked-waifus-win-patch
.\build.bat
```

构建补丁 DLL 完成后，将`D:\WuWaPS\wicked-waifus-win-patch\build\regular\wicked-waifus-win-cn_beta_2_5_1-regular.dll`复制到`D:\WuWaPS\client\Client\Binaries\Win64`下。

或者不手动构建：

<https://git.xeondev.com/wickedwaifus/wicked-waifus-win-patch/releases>或许有已构建的 DLL，可直接使用。请使用文件名类似`wicked-waifus-win-cn_beta_2_5_1-regular.dll`的 DLL。

### 下载补丁 Pak

在<https://git.xeondev.com/wickedwaifus/wicked-waifus-pak/releases/tag/2.5.0>下载补丁 Pak，将下载的`rr_fixes_100_p.pak`复制到`D:\WuWaPS\client\Client\Content\Paks`。

### 构建服务器并试运行

> 这里只是试运行，确保构建成功即可。服务器程序运行后异常退出此时是正常的，因为尚未建立数据库。
>
> 使用`cargo update`并`cargo build`可以一次性构建所有必要的部件，但试运行也有好处。

在`D:\WuWaPS\wicked-waifus-rs`下打开终端（在资源管理器中进入此文件夹，右键空白处，选择“在终端中打开”）。

逐个执行，并在服务器构建完成并运行时按下 Ctrl + C 终止运行服务器：

```pwsh
cargo update
cargo run --bin wicked-waifus-config-server
cargo run --bin wicked-waifus-hotpatch-server
cargo run --bin wicked-waifus-login-server
cargo run --bin wicked-waifus-gateway-server
cargo run --bin wicked-waifus-game-server
```

此时，由于尚未建立对应的数据库，服务器程序可能会异常退出，暂时忽略。

### 新建数据库`shorekeeper`

> 可以通过命令行创建数据库，但是为了用户友好，此处使用图形化界面。
>
> 每次私服版本更新推荐删除并重新建立数据库。

在开始菜单打开`pgAdmin 4`，选择`Add New Server`，`General-Name`和`Connection-Host name/address`均填入`127.0.0.1`，点击`Save`即可连接。

在左侧服务器列表中，右键`127.0.0.1`，选择`Create-Database`，`Database`填入`shorekeeper`，点击`Save`。

### 下载并安置`launcher`

下载<https://git.xeondev.com/xavo95/launcher/src/branch/master/samples/ww.toml>和<https://git.xeondev.com/xavo95/launcher/releases>的最新版本`launcher.exe`。

将它们复制到`D:\WuWaPS\client\Client\Binaries\Win64`下，并将`ww.toml`重命名为`config.toml`。

编辑`config.toml`并保存：

```toml
[launcher]
executable_file = 'Client-Win64-Shipping.exe'
cmd_line_args = '-fileopenlog'
current_dir = 'D:\WuWaPS\client\Client\Binaries\Win64'
dll_list = ['D:\WuWaPS\client\Client\Binaries\Win64\wicked-waifus-win-cn_beta_2_5_1-regular.dll']

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

在`D:\WuWaPS\client\Client\Binaries\Win64`右键`launcher.exe`，选择“以管理员身份运行”。

或者：

右键开始菜单按钮，选择“终端管理员”，执行：

```pwsh
cd "D:\WuWaPS\client\Client\Binaries\Win64"
.\launcher.exe
```

如果没有发生任何错误，应该可以使用任意 ID 进入游戏（不要使用快速新建/登录）。

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
asset_url = "https://git.xeondev.com/wickedwaifus/wicked-waifus-data/releases/download/pioneer_2.5.2/bundle.zip"
buffer_size = 268435456

[default_unlocks]
unlock_all_roles = true
unlock_all_roles_max_level = false
unlock_all_roles_all_sequences = false
unlock_all_mc_elements = true
unlock_all_weapons = false
unlock_all_weapons_max_level = false
unlock_all_weapons_all_reson = false
unlock_all_adventures = false
unlock_all_functions = true
unlock_all_guides = false
unlock_all_tutorials = false
unlock_all_teleporter = false
unlock_all_role_skins = false
# TODO: Set this to the same value as unlock_all_role_skins, without it, it fails(maybe jinshi weapon skin problem??)
unlock_all_weapon_skins = false
unlock_all_fly_skins = false
unlock_all_wing_skins = false
unlock_all_echo_skins = false
unlock_all_echo = false
# TODO: Add max level here too??
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

## 技术细节和专业资料

### 技术栈

- Rust
- PostgreSQL

### 部件功能

- ~~CN 测试版启动器和补丁：用于免登录下载测试版游戏客户端~~
- 下载器（`wuwa-downloader`）：下载测试版游戏客户端
- 补丁 DLL（`wicked-waifus-win-patch`）：需要注入的 DLL，绕过 Pak 校验，修改服务器 URL，禁用 Kuro SDK
- 补丁 Pak（`wicked-waifus-pak`）：需要绕过 Pak 校验，禁用 TpSafe，禁用 Kuro SDK，修改 VisionRecommendController，修改登录界面 BGM
- `launcher`（`xavo95/launcher`）：DLL 注入工具
- 服务器主项目（`wicked-waifus-rs`）：基于逆向工程的游戏服务器实现

### 默认角色配队

根据[Characters IDs](https://github.com/yuhkix/wuwa-ids/blob/main/characters.md)和`data\assets\game-data\BinData\RoleInfo.json`修改`wicked-waifus-game-server\src\logic\role\formation.rs`：

```rust
// Will be updated every version
const DEFAULT_FORMATION: &[i32] = &[5101, 1407, 1507];
```

任何对服务器端的修改都推荐清空数据库，至少新建玩家账户。

修改默认角色可能会导致“网络问题”提示，此时，关闭`unlock_all_roles`或许有帮助。

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

### 角色技能充能

修改`data\assets\game-data\BinData\BaseProperty.json`的每个`CdReduse`、`EnergyMax`和`Energy`为`0`、`0`、`1`。（感谢[jiang0681](https://github.com/jiang0681/wwbeta/)）

```python
import json

with open("BaseProperty.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for i in data:
    i["CdReduse"] = 0
    i["EnergyMax"] = 0
    i["Energy"] = 1

with open("output.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)
```

### 维护脚本

#### 快速在 Windows Terminal 的多选项卡启动每个服务器组件

```pwsh
# 获取当前脚本所在目录，作为 cargo 项目的根目录
$projectDir = Get-Location

# 定义服务器列表
$servers = @(
    "wicked-waifus-config-server",
    "wicked-waifus-hotpatch-server",
    "wicked-waifus-login-server",
    "wicked-waifus-gateway-server",
    "wicked-waifus-game-server"
)

# 构建 wt 命令行参数
$wtArgs = ""

foreach ($i in 0..($servers.Count - 1)) {
    $server = $servers[$i]
    $title = $server
    $command = "powershell -NoExit -Command `"cargo run --bin $server`""
    $startDir = $projectDir.Path

    if ($i -eq 0) {
        $wtArgs += "new-tab --title `"$title`" --startingDirectory `"$startDir`" $command"
    } else {
        $wtArgs += " ; new-tab --title `"$title`" --startingDirectory `"$startDir`" $command"
    }
}

# 启动 wt 并运行所有标签页
Start-Process wt -ArgumentList $wtArgs
```

#### 快速重建数据库

```pwsh
# 启动数据库
pg_ctl start

# 等待数据库启动
Start-Sleep -Seconds 3

# 删除数据库
psql -U postgres -d postgres -c "DROP DATABASE IF EXISTS shorekeeper;"

# 新建数据库
psql -U postgres -d postgres -c "CREATE DATABASE shorekeeper;"

# 维持运行
while ($true) {
    Start-Sleep -Seconds 3600
}
```

#### 以管理员权限运行`launcher.exe`

```pwsh
# 获取当前脚本完整路径
$scriptPath = $MyInvocation.MyCommand.Path

# 检查是否以管理员身份运行
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    # 不是管理员，尝试以管理员权限重新运行脚本自身
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = "powershell.exe"
    $psi.Arguments = "-ExecutionPolicy Bypass -File `"$scriptPath`""
    $psi.Verb = "runas"  # 请求管理员权限
    try {
        [System.Diagnostics.Process]::Start($psi) | Out-Null
    }
    catch {
        Write-Host "Cannot run the script as an administrator."
    }
    exit
}

Write-Host "Running the target program as an administrator..."

# 设置目标可执行文件路径
$exePath = "D:\WuWaPS\client\Client\Binaries\Win64\launcher.exe"

# 获取可执行文件所在目录并切换到该目录
$exeDir = Split-Path -Path $exePath -Parent
Set-Location -Path $exeDir

# 启动目标程序
Start-Process $exePath
```

## 扩充资料

**请勿混用不同教程。**

也有一个[Sociophobia 的视频教程](https://www.youtube.com/watch?v=AUeqUA60lwI)（也是 Reversed Rooms 的推荐教程），但以本文优先。

也有一个[jiang0681 的文本教程](https://github.com/jiang0681/wwbeta/)，但以本文优先。
