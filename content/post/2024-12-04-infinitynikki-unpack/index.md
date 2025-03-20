---
categories: Original
date: 2024-12-04T00:00:00Z
tags:
  - Unreal
  - 信息技术
  - 无限暖暖
  - 游戏
  - 逆向工程
slug: infinitynikki-unpack
title: 《无限暖暖》的资源文件解包（和其他逆向工程）
---

## 有用的链接

- ~~[特定版本的 umodel](https://www.gildor.org/smf/index.php/topic,8930.msg47594.html#msg47594) by [spiritovod](https://www.gildor.org/smf/index.php?action=profile;u=5330)~~
- [特定版本的 Fmodel](https://github.com/LukeFZ/FModel)（推荐）by [LukeFZ](https://github.com/LukeFZ)
- [有关 AES Key 的讨论](https://cs.rin.ru/forum/viewtopic.php?p=3082204#p3082204) 和[主要 Key](https://cs.rin.ru/forum/viewtopic.php?t=100672)
- [配置文件序列化实现](https://github.com/NikkiTools/perfect) by [LukeFZ](https://github.com/LukeFZ)
- [已提取资源](https://www.xivmodarchive.com/modid/123983) by [Crow](https://www.xivmodarchive.com/user/158572) [CrowMods on X](https://x.com/CrowMods)
- 基于已提取资源的[暖暖默认服装 Blender 模型](https://www.patreon.com/posts/nikki-2-0-for-4-119702068) by [thorru](https://www.patreon.com/c/thorru/posts) [thorru\_ on X](https://x.com/thorru_)

> 下面有关 AES Key 的部分仅在[Infinity Nikki](https://store.epicgames.com/en-US/p/infinity-nikki-71fc64)（国际版）上测试过。
>
> 在中国大陆发布的版本目前也有效。

## 配置 Fmodel（推荐）

请确保使用[特定版本的 Fmodel](https://github.com/LukeFZ/FModel)，忽略弹出的任何更新提示。

Archive Directory: 包含 `InfinityNikki.exe` 的目录

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

## 提取游戏音频

《无限暖暖》的所有游戏内音频使用 Wwise 的特定格式保存和播放。

使用 Fmodel 提取完整的`X6Game/Content/Audio`并使用[wwiser](https://github.com/bnnm/wwiser)生成音频事件`.txtp`。

`.txtp`描述了当一个游戏事件发生时，对应音频的播放逻辑，内容为纯文本。使用[vgmstream](https://github.com/vgmstream/vgmstream)根据`.txtp`生成相应的`.wav`音频。

## 手动获取 AES Key（TODO）

可以使用[Reqable](https://reqable.com/en-US/)调试游戏客户端的 HTTP 网络活动。

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

感谢[LukeFZ](https://github.com/LukeFZ)提供了解密后二进制的反序列化方案：

```python
def read_u32(io: BytesIO):
    return u32(io.read(4))


def read_u64(io: BytesIO):
    return u64(io.read(8))


def read_fstring(io: BytesIO):
    length = read_u32(io)
    return io.read(length).decode().rstrip("\x00")


def read_guid(io: BytesIO):
    # return uuid.UUID(bytes=io.read(16)).hex
    a = u32(io.read(4), "little")
    b = u32(io.read(4), "little")
    c = u32(io.read(4), "little")
    d = u32(io.read(4), "little")
    return (
        int.to_bytes(a, 4, "big").hex()
        + int.to_bytes(b, 4, "big").hex()
        + int.to_bytes(c, 4, "big").hex()
        + int.to_bytes(d, 4, "big").hex()
    )


count = read_u32(f)
entries = [None] * count
for j in range(count):
    guid = read_guid(f)
    name = read_fstring(f)
    key_length = read_u32(f)
    assert key_length == 32
    aes_key = f.read(key_length).hex()

    entries[j] = {
        "enc_guid": guid,
        "name": name,
        "key": aes_key,
    }  # (guid, name, aes_key)
```

其他或许有用的项目：[uasset-parser-py](https://github.com/ay27/uasset-parser-py)

## 手动获取 Mapping

请注意：由于游戏（不必要地）使用内核级反作弊，有必要使用针对反作弊的注入/转储工具。

- [Dumper-7](https://github.com/Encryqed/Dumper-7)
- [RE-UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)
- [KsDumper-11](https://github.com/mastercodeon314/KsDumper-11)

## ~~获取用于 umodel 的 AES Key 列表~~

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

## 极低可能有用的通用工具

- [AESDumpster](https://github.com/GHFear/AESDumpster)
- [UnrealPak](https://github.com/EpicGames/UnrealEngine)
- [UnrealPakViewer](https://github.com/jashking/UnrealPakViewer)
