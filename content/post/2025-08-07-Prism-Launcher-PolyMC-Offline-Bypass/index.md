---
categories: Original
date: 2025-08-07T00:00:00Z
tags:
    - Minecraft
slug: Prism-Launcher-PolyMC-Offline-Bypass
title: Prism Launcher 无有效在线账号的离线模式支持
---

[Prism Launcher](https://github.com/PrismLauncher/PrismLauncher)

[Prism-Launcher-PolyMC-Offline-Bypass](https://github.com/antunnitraj/Prism-Launcher-PolyMC-Offline-Bypass)

将下述内容写入`accounts.json`：

<!-- prettier-ignore -->
```json
{"accounts": [{"entitlement": {"canPlayMinecraft": true,"ownsMinecraft": true},"type": "MSA"}],"formatVersion": 3}
```
