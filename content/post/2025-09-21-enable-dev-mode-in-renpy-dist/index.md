---
categories: Original
date: 2025-09-21T00:00:00Z
tags:
    - RenPy
    - 信息技术
    - 游戏
    - 逆向工程
slug: enable-dev-mode-in-renpy-dist
title: "在 Ren'Py 的已打包游戏中启用开发者模式"
---

在`game`文件夹中新建`enable_dev_mode.rpy`文件，内容如下：

```py
init 999 python:
    config.developer = True
    config.console = True
```

并删除同目录下的`script_version.txt`文件。

注意：开发者可能会覆写这个设置，或者使用自定义的 Ren'Py 版本。即使设置成功，已打包游戏可能也不包括开发者界面的代码。
