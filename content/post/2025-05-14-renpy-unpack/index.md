---
categories: Original
date: 2025-05-14T00:00:00Z
tags:
    - RenPy
    - 信息技术
    - 游戏
    - 逆向工程
slug: renpy-unpack
title: "Ren'Py 游戏的资源文件提取和反编译"
---

## 工具

- [unrpa](https://github.com/Lattyware/unrpa) 提取 RPA 包
- [unrpyc](https://github.com/CensoredUsername/unrpyc) 反编译`rpyc`为`rpy`代码

## 步骤

### 提取 RPA 包

针对一般的 Ren'Py 游戏，打包文件的后缀名是`rpa`。

完整的命令是：

```shell
unrpa --verbose 文件名.rpa
```

将全部的打包文件提取到`game`目录下，删除打包文件，只保留提取后的文件。

### 反编译`rpyc`为`rpy`代码

Clone `unrpyc`项目到本地，执行命令：

```shell
python unrpyc.py --clobber "到 game 文件夹的路径"
```

`rpy`文件会生成在与`rpyc`相同的位置。
