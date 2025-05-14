---
categories: Original
date: 2025-05-12T00:00:00Z
tags:
    - RenPy
    - 信息技术
    - 游戏
    - 逆向工程
slug: love-curse-find-your-soulmate-unpack
title: 《不恋爱就完蛋了》的资源文件提取和反编译
---

> ~~注意：为了保护创作者权益，此教程在自游戏发布的 6 个月内会隐藏操作的关键细节。~~
>
> 游戏在 [2025-05-13 的更新](https://steamdb.info/patchnotes/18453168/)~~似乎完全针对本文~~更改了关键细节，我理解开发者不愿自己的美术资源被提取，所以不会提供明确的解决方案。聪明的读者应当自行研究游戏中附带的引擎源码中对`RPAv3ArchiveHandler`的定义并修改`unrpa`的`deobfuscate_entry`。
>
> 我想引用 [Ren'Py 文档](https://doc.renpy.cn/zh-CN/build.html#archives)中对归档文件的描述：
>
> _关于游戏归档的问题，请三思。使用开放文件可能有助于后人在未来的平台上运行你的游戏——那些你离开这个世界之后才出现的平台。_
>
> _Please think twice about archiving your game. Keeping files open will help others run your game on future platforms – platforms that may not exist until after you're gone._

此文档也可作为其他 Ren'Py 游戏逆向工程的参考。

## 获取游戏

请支持正版：[Steam](https://store.steampowered.com/app/3069120/)

## 获取工具

- [unrpa](https://github.com/Lattyware/unrpa) 提取 RPA 包
- [unrpyc](https://github.com/CensoredUsername/unrpyc) 反编译`rpyc`为`rpy`代码

## 步骤

### 提取 RPA 包

《不恋爱就完蛋了》的 RPA 包使用自定义的后缀名和文件头，使用`--force`参数指定版本`[隐藏操作的关键细节]`即可提取。

针对一般的 Ren'Py 游戏，打包文件的后缀名是`rpa`。

> 需要修改工具源码来读取被修改的引擎打包格式，此指令不是开箱即用的。

完整的命令是：

```shell
unrpa --verbose --force "[隐藏操作的关键细节]" 文件名
```

将全部的打包文件提取到`game`目录下，删除打包文件，只保留提取后的文件。

### 反编译`rpyc`为`rpy`代码

Clone `unrpyc`项目到本地，修改源码：

> 此修改仅针对《不恋爱就完蛋了》的 Ren'Py 引擎版本，不确认其他游戏是否也需要同样的修改。

```patch
diff --git a/decompiler/util.py b/decompiler/util.py
index 87302ef..2bc1817 100644
--- a/decompiler/util.py
+++ b/decompiler/util.py
@@ -381,10 +381,10 @@ def reconstruct_arginfo(arginfo):
             if name is not None:
                 rv.append(f'{name}=')
             rv.append(val)
-        if arginfo.extrapos:
+        if hasattr(arginfo, "extrapos"):
             rv.append(sep())
             rv.append(f'*{arginfo.extrapos}')
-        if arginfo.extrakw:
+        if hasattr(arginfo, "extrakw"):
             rv.append(sep())
             rv.append(f'**{arginfo.extrakw}')

```

执行命令：

```shell
python unrpyc.py --clobber "到 game 文件夹的路径"
```

`rpy`文件会生成在与`rpyc`相同的位置。
