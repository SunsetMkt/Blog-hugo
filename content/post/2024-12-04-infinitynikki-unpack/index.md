---
categories: Original
date: "2024-12-04T00:00:00Z"
tags:
    - 无限暖暖
    - Unreal
    - 逆向工程
    - 游戏
slug: infinitynikki-unpack
title: 《无限暖暖》的资源文件解包（和其他逆向工程）
---

## 有用的链接

-   [特定版本的 umodel](https://www.gildor.org/smf/index.php/topic,8930.msg47594.html#msg47594)（基础）by [spiritovod](https://www.gildor.org/smf/index.php?action=profile;u=5330)
-   [特定版本的 Fmodel](https://github.com/LukeFZ/FModel)（推荐）by [LukeFZ](https://github.com/LukeFZ)
-   [有关 AES Key 的讨论](https://cs.rin.ru/forum/viewtopic.php?p=3082204#p3082204) 和[主要 Key](https://cs.rin.ru/forum/viewtopic.php?t=100672)
-   [在 GitHub 上的 AES Key](https://github.com/kanren3/InfinityNikki)
-   [在 GitHub 上的 Mapping](https://github.com/CRiQSCLAN/Infinity-Nikki-SDK)
-   [配置文件序列化实现](https://github.com/NikkiTools/perfect) by [LukeFZ](https://github.com/LukeFZ)
-   [已提取资源](https://www.xivmodarchive.com/modid/123983) by [Crow](https://www.xivmodarchive.com/user/158572)
-   ~~[制作 Mod 存在的技术问题](#https://gamebanana.com/threads/226150)~~ 由于厌女评论和无价值讨论，已移除。
-   [AutoHotkey 脚本](https://github.com/Kramar1337/InfinityNikki-AHK-flex)

> 下面有关 AES Key 的部分仅在[Infinity Nikki](https://store.epicgames.com/en-US/p/infinity-nikki-71fc64)（国际版）上测试过。
>
> 在中国大陆发布的版本目前也有效。

## 获取用于 umodel 的 AES Key 列表（基础）

感谢[LukeFZ](https://github.com/LukeFZ)创建了这个 API。

```python
import requests

# From https://cs.rin.ru/forum/viewtopic.php?p=3082204#p3082204
keys = requests.get("https://gacha.lukefz.xyz/infinitynikki/keys").json()
keys_dict = []
keys_dict.append(keys["mainKey"])

for key in keys["dynamicKeys"]:
    keys_dict.append(key["key"])

with open("keys.txt", "w", encoding="utf-8") as f:
    for key in keys_dict:
        f.write("0x" + key + "\n")
```

## 配置 Fmodel（推荐）

Archive Directory: 包含 InfinityNikki.exe 的目录

UE Versions: `GAME_InfinityNikki`

### Endpoint Configuration (AES)

感谢[LukeFZ](https://github.com/LukeFZ)创建了这个 API。

Endpoint: `https://gacha.lukefz.xyz/infinitynikki/keys`

Expression: `$['mainKey','dynamicKeys']`

配置完成后，在`AES`界面点击`Refresh`。

### Endpoint Configuration (Mapping)

感谢[LukeFZ](https://github.com/LukeFZ)创建了这个 API。

Endpoint: `https://gacha.lukefz.xyz/infinitynikki/mappings`

Expression: `$['url','filename']`

## 手动获取 AES Key（TODO）

客户端获取 Key 的过程可能与对`https://api.infoldgames.com/v1/gameconfig/parameter`的请求有关，关键词包含`PACDKC`。

响应格式类似：

```json
{
  "gameConfigParameter": {
    "key": "Windows_PACDKC......",
    "value": "......"
  },
  "ret": 0,
  "request_id": "......",
  "msg": "OK",
  "time": ......
}
```

解密过程大概是[这样的](<https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',false,false)AES_Decrypt(%7B'option':'Hex','string':'0xF0F2BA714FE32FACC23CD332BF35E8A00F73937BA4BB6D26659276A31E714E84'%7D,%7B'option':'Hex','string':''%7D,'ECB','Raw','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)>)。

解密后的反序列化方案尚未找到。

## 通用工具

-   [KsDumper-11](https://github.com/mastercodeon314/KsDumper-11)
-   [AESDumpster](https://github.com/GHFear/AESDumpster)
-   [Reqable](https://reqable.com/en-US/)
-   [Dumper-7](https://github.com/Encryqed/Dumper-7)
-   [RE-UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)
-   [UnrealMappingsDumper](https://github.com/TheNaeem/UnrealMappingsDumper)
-   [UE Viewer](https://www.gildor.org/en/projects/umodel)
-   [FModel](https://github.com/4sval/FModel)
-   [UnrealPak](https://github.com/EpicGames/UnrealEngine)
-   [UnrealPakViewer](https://github.com/jashking/UnrealPakViewer)
-   [wwiser](https://github.com/bnnm/wwiser)
-   [vgmstream](https://github.com/vgmstream/vgmstream)
-   [FFmpeg](https://github.com/FFmpeg/FFmpeg)
-   [Sysinternals](https://learn.microsoft.com/en-us/sysinternals/)
