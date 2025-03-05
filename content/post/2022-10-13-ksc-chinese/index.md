---
categories: Original
date: "2022-10-13T00:00:00Z"
tags:
    - 杀毒软件
    - Kaspersky
slug: ksc-chinese
title: 安装 Kaspersky Security Cloud Free 中文版
---

> [卡巴斯基中国大陆官方网站现已提供最新版卡巴斯基免费版应用程序下载，点击这里跳转到下载页面。](https://www.kaspersky.com.cn/downloads/free-antivirus)
>
> 这里提供的部分或全部信息已过时。

Kaspersky Security Cloud Free 是个人认为卡巴斯基系列免费版的最优产品，但是官方提供的下载渠道不包括中文版，本文介绍如何安装中文版。

## 下载

从[卡巴斯基中国](https://www.kaspersky.com.cn/)的[试用页面](https://www.kaspersky.com.cn/downloads)选择卡巴斯基安全软件的[30 天试用下载](https://www.kaspersky.com.cn/downloads/internet-security-free-trial#download)。

## 安装

添加`/pPRODUCTTYPE=saas`参数启动安装程序，为了达到这个目的，可以在安装程序的快捷方式上添加参数，或者在安装程序的安装目录下创建一个`install.cmd`文件，内容如下：

我们假设下载的安装程序文件名为`kis21.3.10.391abzh-Hans_26153.exe`，则`install.cmd`文件内容为：

```cmd
kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

运行`install.cmd`文件，即可安装 Kaspersky Security Cloud Free 中文版。

或者，在安装程序所在文件夹按下 Shift+鼠标右键，选择“在此处打开 PowerShell 窗口”，输入以下命令：

```powershell
.\kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

注意：使用 Kaspersky Security Cloud Free 需要注册账号。
