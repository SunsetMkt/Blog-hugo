---
categories: Original
date: "2023-02-06T00:00:00Z"
tags:
    - Python
    - Shell
    - 纸备份
slug: paper-backup
title: 二进制文件纸备份项目推荐
---

## alisinabh/paperify

https://github.com/alisinabh/paperify

Bash 脚本，跨平台难度稍大（部分依赖无官方 Windows 可执行发布），有 Docker 版本，简单地将文件分片并转换为二维码，生成有文字版 Hash 的图片。

**最简单和用纸最少的方案。**

## schroeding/paperstorage

https://github.com/schroeding/paperstorage

Python，跨平台。每张纸有二维码和人类可读（手动输入）的替代方案，任一可用于恢复。

有 Bug，似乎只接受`png`格式的恢复输入。

**健壮性较强，但需要更多的纸。**

## cyphar/paperback

https://github.com/cyphar/paperback

似乎是该领域 Star 数最多的仓库，但似乎不支持“大”文件（10KB？），应用场合比较复杂（多继承人/见证人的遗产继承等）。

没有使用过。
