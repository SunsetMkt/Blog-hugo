---
categories: Original
date: 2025-05-26T00:00:00Z
tags:
    - 信息技术
    - 站务
    - Hugo
slug: why-the-blog-took-10-mins-to-build
title: 为什么本博客在过去的几个月需要 10 分钟的构建时间
---

## 按照逻辑顺序的故障原因

- Hugo 的 Minify 功能会影响每个文件，包括 RSS Feed XML
- Hugo 的 RSS 在默认情况下会包含所有文章
- 博客有两篇文章复制了 HarmonyOS NEXT 的完整开源许可证，Markdown 重达 2MB+，Code Block 渲染后会更大
- RSS 完整地包含了巨型 HTML，削减功能在此时不起作用
- Minify 尝试处理巨型 RSS Feed XML
- 超长构建时间

## 故障状态

已修复。

- RSS 现在只包含最近的 10 篇文章
- RSS 只包含文章摘要
- 移除了巨型 Markdown，使用单独的文件提供大文本
- 使 Minify 可被精细控制

## 启发

不要随意使用大于 500KB 的 Markdown。
