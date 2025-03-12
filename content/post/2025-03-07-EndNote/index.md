---
categories: Original
date: "2025-03-07T00:00:00Z"
tags:
    - EndNote
    - 软件
slug: EndNote
title: 获取（几乎是免费的）EndNote
---

## 引子

EndNote 是著名的文献管理软件。

众所周知，很多中国大陆的教学机构似乎不太重视信息安全，很多大学图书馆提供的正版都可以被搜索引擎检索并通过外部网络下载。

### 快速的最简步骤

- 假设要在 Windows 上安装 EndNote 21。
- 下载[EndNote 21 msi 安装包](https://download.endnote.com/downloads/21/EN21Inst.msi)
- 下载[EndNote21SiteInstaller.dmg](https://download.endnote.com/site/17f114bef8b911ed8a38b0dce7da8761/EndNote21SiteInstaller.dmg)
- 用压缩文件查看器打开`EndNote21SiteInstaller.dmg`，获取`EndNote 21.4 Installer/Install EndNote 21.app/Contents/Resources/.license.dat`。以文本格式打开`.license.dat`，复制里面的内容。
- 新建一个名为`License.dat`、`UTF-16 LE`编码、`CRLF`换行的纯文本文件，写入下面的内容：

```ini
[GOLDENTK]
PIDKEY=从.license.dat复制的内容
```

- 保存这个文件，和 msi 安装包放在同一目录下。
- 执行 msi 安装包。

## 搜索

搜索关键词：`EndNote 大学图书馆`。

或者[利用互联网档案馆](https://web.archive.org/web/*/https://download.endnote.com/site/*)。

查找可以通过校外网络下载的版本（例如[此 Mac 版本](https://lib.shu.edu.cn/info/1023/4894.htm)，甚至[此直接提供激活码的版本](https://lib.chd.edu.cn/en/jlm/xzzx/wxglrj/EndNote.htm)），无论最终使用哪个操作系统。

此步骤的目的是获取密钥文件，它是通用的。

## 密钥文件

无论这些机构提供的是 Windows 还是 Mac 版本，只要能复制提供的密钥文件，就可以用于激活软件。

请注意：不同版本的密钥文件通常不能混用。

在 Windows 版本中，密钥文件为`License.dat`，它通常随`msi`包在同一目录下提供。

在 Mac 版本中，密钥文件为`.license.dat`，它位于`dmg`包中的`EndNote 21.4 Installer/Install EndNote 21.app/Contents/Resources/`目录下。

可以根据下面提供的文件格式手动转换两种密钥文件：

### `.license.dat`

`UTF-8`编码，`CRLF`换行，纯文本。

内容为 263 个大写字母和数字，单行。

### `License.dat`

`UTF-16 LE`编码，`CRLF`换行，纯文本。

```ini

[GOLDENTK]
NAME=机构名，如果和PIDKEY不一致，会显示PIDKEY的实际机构
PIDKEY=内容为263个大写字母和数字
[VERSION]
INFO="Contact your EndNote License administrator for more information."

```

最简可接受版本：

```ini
[GOLDENTK]
PIDKEY=内容为263个大写字母和数字
```

请注意：无论最终程序生成的`C:\Program Files (x86)\EndNote 21\License.dat`是何种格式，安装程序只接受此格式。

## 安装程序

~~`exe`安装程序可以通过[官方链接](https://support.clarivate.com/Endnote/s/article/Download-EndNote?language=en_US)下载。~~

`msi`安装程序可以通过[官方链接](https://support.clarivate.com/Endnote/s/article/EndNote-Volume-License-Install-Steps?language=en_US)下载。

在 Windows 版本中，`exe`安装程序会在执行时将`msi`包提取到`C:\Program Files (x86)\Common Files\Wise Installation Wizard`，复制`msi`包并将其与`License.dat`放置在同一目录，运行`msi`以进行安装。

请注意：只有`msi`包支持读取同一目录下的`License.dat`，直接执行的`exe`安装程序不支持。

直接将`License.dat`复制到`C:\Program Files (x86)\EndNote 21\`下应该也可以激活。

在 Mac 版本中，密钥文件位于`dmg`包中的`EndNote 21.4 Installer/Install EndNote 21.app/Contents/Resources/`目录下。

## 合规

请向您的机构索取正版软件或使用开源替代[Zotero](https://github.com/zotero/zotero)。

## 附录：`License.dat`是如何生成的

根据[指南](https://support.clarivate.com/Endnote/s/article/EndNote-Volume-License-Install-Steps?language=en_US)，下面的批处理可以启动密钥文件生成引导 GUI。

```batch
@ECHO off
CD /d "%~dp0"
ECHO ===========================================================
ECHO  LICENSE.DAT CREATION BAT FILE. Clarivate Anaylytics 8/01/2018
ECHO ===========================================================

SET MSI=

REM ADD THE MSI FILES IN ORDER OF OLDEST TO NEWEST
FOR %%a IN (EndNote.msi ENX1Inst.msi ENX101Inst.msi ENX102Inst.msi ENX2Inst.msi EN201Inst.msi EN202Inst.msi EN203Inst.msi EN204Inst.msi ENX3Inst.msi ENX301Inst.msi ENX4Inst.msi ENX402Inst.msi ENX5Inst.msi ENX501Inst.msi ENX6Inst.msi ENX601Inst.msi ENX7Inst.msi ENX701Inst.msi ENX8Inst.msi ENX9Inst.msi EN20Inst.msi EN21Inst.msi) DO (IF EXIST "%%a" SET MSI=%%a)

REM MSI WILL == "" IF THERE ARE NONE OF THOSE MSI FILES IN THE FOLDER
IF "%MSI%" NEQ "" GOTO EXECINSTALL

ECHO ERROR: UNABLE TO LOCATE AN ENDNOTE MSI INSTALLER FILE IN THIS FOLDER
PAUSE
GOTO END

:EXECINSTALL
ECHO USING THE FOLLOWING MSI: %MSI%
ECHO EXECUTING THE COMMAND  : msiexec /a "%MSI%"
msiexec /a "%MSI%"

:END

```
