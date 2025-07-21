---
categories: Original
date: 2025-07-21T00:00:00Z
tags:
    - Minecraft
slug: netease-minecraft-regex
title: 网易《我的世界》的敏感词过滤正则表达式
---

这里的正则表达式来自 Android 客户端。在任意网易游戏 Android 客户端上，处理敏感词的 Java 包为`com.netease.environment`（加固的客户端可能不易找到）。感谢[G79-Regex](https://github.com/azathoth2025/G79-Regex)和[jadx](https://github.com/skylot/jadx)。

{{< embed-monaco-iframe file="intercept.txt" >}}

{{< embed-monaco-iframe file="nickname.txt" >}}

{{< embed-monaco-iframe file="remind.txt" >}}

{{< embed-monaco-iframe file="replace.txt" >}}

{{< embed-monaco-iframe file="shield.txt" >}}
