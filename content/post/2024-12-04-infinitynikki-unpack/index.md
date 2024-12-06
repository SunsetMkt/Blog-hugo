---
categories: Original
date: "2024-12-04T00:00:00Z"
tags:
    - 无限暖暖
    - Unreal
    - 逆向工程
    - 游戏
slug: infinitynikki-unpack
title: 《无限暖暖》的资源文件解包
---

-   [特定版本的 umodel](https://www.gildor.org/smf/index.php/topic,8930.msg47594.html#msg47594)（需要）
-   [有关 Keychain 的讨论](https://cs.rin.ru/forum/viewtopic.php?p=3082204#p3082204)
-   [在 GitHub 上的 Keychain](https://github.com/kanren3/InfinityNikki)
-   [序列化实现](https://github.com/NikkiTools/perfect) by [LukeFZ](https://github.com/LukeFZ)

## 获取用于 umodel 的 AES Key 列表（需要）

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
