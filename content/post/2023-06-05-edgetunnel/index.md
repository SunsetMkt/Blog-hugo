---
categories: Original
date: 2023-06-05T00:00:00Z
tags:
    - Cloudflare
    - 信息技术
slug: edgetunnel
title: "edgetunnel: Cloudflare 禁止使用服务提供虚拟专用网络或其他类似的代理服务"
---

**[Cloudflare Self-Serve Subscription Agreement](https://www.cloudflare.com/zh-cn/terms/)已于 December 3, 2024 更新并添加了禁止“使用服务提供虚拟专用网络或其他类似的代理服务”的条款。**

Cloudflare 会标记通过项目名和源代码检测到的 Workers 和`workers.dev`子域，并使其对任何请求返回 Error 1101。删除所有相关项目并修改子域似乎可以消除影响。

<!--https://github.com/zhu327/workers-tunnel-->
