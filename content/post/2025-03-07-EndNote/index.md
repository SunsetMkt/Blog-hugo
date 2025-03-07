---
categories: Original
date: "2025-03-07T00:00:00Z"
tags:
    - EndNote
slug: EndNote
title: （几乎是免费的）EndNote
---

## 引子

EndNote 是著名的文献管理软件。

众所周知，很多中国大陆的教学机构似乎不太重视信息安全，很多大学图书馆提供的正版都可以被搜索引擎检索并通过外部网络下载。

## 搜索

搜索关键词：`EndNote 大学图书馆`。

查找可以通过校外网络下载的版本（例如[此 Mac 版本](https://lib.shu.edu.cn/info/1023/4894.htm)），无论最终使用哪个操作系统。

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

```plain

[GOLDENTK]
NAME=机构名，如果和PIDKEY不一致，会显示PIDKEY的实际机构
PIDKEY=内容为263个大写字母和数字
[VERSION]
INFO="Contact your EndNote License administrator for more information."

```

## 安装程序

安装程序可以通过[官方链接](https://support.clarivate.com/Endnote/s/article/Download-EndNote?language=en_US)下载，

在 Windows 版本中，`exe`安装程序会在执行时将`msi`包提取到`C:\Program Files (x86)\Common Files\Wise Installation Wizard`，复制`msi`包并将其与`License.dat`放置在同一目录，运行`msi`以进行安装。

请注意：只有`msi`包支持读取同一目录下的`License.dat`，直接执行的`exe`安装程序不支持。

直接将`License.dat`复制到`C:\Program Files (x86)\EndNote 21\`下应该也可以激活。

在 Mac 版本中，密钥文件位于`dmg`包中的`EndNote 21.4 Installer/Install EndNote 21.app/Contents/Resources/`目录下。

## 合规

请向您的机构索取正版软件或使用开源替代[Zotero](https://github.com/zotero/zotero)。
