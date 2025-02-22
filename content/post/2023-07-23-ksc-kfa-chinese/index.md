---
categories: Original
date: "2023-07-23T00:00:00Z"
tags:
    - Windows
    - 杀毒软件
    - Kaspersky
slug: ksc-kfa-chinese
title: 安装 Kaspersky Security Cloud Free 简体中文版或卡巴斯基免费版
---

> 这里提到的部分信息已经过时了，建议阅读：
>
> 适用于高级用户的补充材料：[卡巴斯基免费版的 Windows 安装包下载 URL 获取]({{< ref "2024-02-17-kfa" >}})

## 卡巴斯基免费版（推荐）

~~如果 Kaspersky 彻底移除了 Kaspersky Security Cloud 产品，~~您可以尝试下载卡巴斯基标准版（[在线安装链接](https://dm.s.kaspersky-labs.com/zh-Hans-CN/Kaspersky4Win/21.15.8.493/startup.exe) [备用链接](zh_std_setup/startup.exe)）并使用激活码：

> 简体中文版在线安装包 URL 格式是：
>
> https://dm.s.kaspersky-labs.com/zh-Hans-CN/Kaspersky4Win/XX.XX.X.XXX/startup.exe
>
> 您可手动替换 XX.XX.X.XXX 为最新的版本号。

<div>
    <div class="keys">
        <ul>
            <li><code>3SXCM-M9RJM-6985N-PWKP7</code></li>
            <li><code>A23B5-44EXM-85MVF-KM2GQ</code></li>
            <li><code>ZM4YW-FUTDY-W9B62-GSK26</code></li>
        </ul>
    </div>
    <style>
        .keys {
            user-select: none;
            filter: blur(3px);
        }
    </style>
</div>

来激活免费版。（或者直接使用[英文版 KFA](https://www.kaspersky.com/downloads/free-antivirus) [备用链接](en_free_setup/kaspersky4win202121.16.6.467en_39971.exe)）

> 卡巴斯基免费版和 Kaspersky Security Cloud Free 相比，缺少“文件粉碎机”（Free 版功能限制）、“无用数据清理”（半废弃）、“浏览器配置”（已废弃）功能，其余特性几乎一致。

## KFA 下载 URL 的获取请求

在 Kaspersky 的 `/downloads/free-antivirus` Web 页面上，通过下面的请求动态获取安装包下载链接：

```plain
https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=5003617&businesspurposes=Update&licensetiers=Free&sites=https%3A%2F%2Fwww.kaspersky.com&sites=https%3A%2F%2Fwww.kaspersky.com%2Fcarribean&sites=https%3A%2F%2Fwww.kaspersky.com%2Fisrael&sites=https%3A%2F%2Fwww.kaspersky.com%2Fsouth-east-asia&sites=https%3A%2F%2Fwww.kaspersky.com%2Findonesia&sites=https%3A%2F%2Fwww.kaspersky.com%2Fthe-european-union&sites=https%3A%2F%2Fwww.kaspersky.com%2Flatvia&sites=https%3A%2F%2Fwww.kaspersky.com%2Flithuania&sites=https%3A%2F%2Fwww.kaspersky.com%2Festonia&sites=https%3A%2F%2Fwww.kaspersky.com%2Funited-kingdom&sites=https%3A%2F%2Fwww.kaspersky.com%2Fcalifornia&sites=https%3A%2F%2Fwww.kaspersky.com%2Fbrazil
```

可以构建一个这样的请求，使其搜索简体中文版的免费安装包：

```plain
https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=5003617&businesspurposes=Update&licensetiers=Free&sites=https%3A%2F%2Fwww.kaspersky.com.cn
```

可以获取到[链接](https://products.s.kaspersky-labs.com/homeuser/Kaspersky4Win2021/21.16.6.467/chinese_simplified-0.340.0/3831343838327c44454c7c31_41114/startup.exe)/[备份](zh_free_setup/startup.exe)。

<!--
不一定有效:

您可以参考[此资料](https://forum.kaspersky.com/topic/latest-offline-installer-for-kis-2572/#comment-13319)和[此资料](https://forum.kaspersky.com/topic/install-kaspersky-in-command-prompt-31603/)来构建Kaspersky拒绝提供的离线安装包。
-->

---

~~Kaspersky Security Cloud Free 是个人认为卡巴斯基系列免费版的最优（设置项、其他非杀毒工具/功能）产品~~（截至 2023 年初，目前推荐卡巴斯基免费版），但是官方提供的下载渠道不包括简体中文版，本文描述如何安装 Kaspersky Security Cloud 简体中文版。

## KSC Free 下载

从[卡巴斯基中国大陆](https://www.kaspersky.com.cn/)的[试用页面](https://www.kaspersky.com.cn/downloads)选择卡巴斯基安全软件的[30 天试用下载](https://www.kaspersky.com.cn/downloads/internet-security-free-trial#download)。

## 安装

添加`/pPRODUCTTYPE=saas`参数启动安装程序，为了达到这个目的，可以在安装程序的快捷方式上添加参数，或者在安装程序的安装目录下创建一个`install.cmd`文件，内容如下：

我们假设下载的安装程序文件名为`kis21.3.10.391abzh-Hans_26153.exe`，则`install.cmd`文件内容为：

```powershell
kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

运行`install.cmd`文件，即可安装 Kaspersky Security Cloud 中文版。

或者，在安装程序所在文件夹按下 Shift+鼠标右键，选择“在此处打开 PowerShell 窗口”，输入以下命令：

```powershell
.\kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

注意：使用 Kaspersky Security Cloud Free 需要注册 Kaspersky 账号。

## 备注

在联机时，采用此方法安装的 Kaspersky Security Cloud 中文版和通过官方渠道安装的英文版，版本号相同。

Kaspersky 可能正在变更产品策略，若上述页面不可用，可尝试[此链接](https://trial.s.kaspersky-labs.com/registered/xapi5wqwgf32q6omgp38/3436353739367c44454c7c32_26153/kis21.3.10.391abzh-Hans_26153.exe)直接下载安装程序（通过 Kaspersky 的服务器）。（[备用在线安装链接，请也使用命令行参数调用](https://dm.s.kaspersky-labs.com/zh-Hans-CN/KIS/21.3.10.391/startup.exe)）

若您正在使用中国大陆的网络且登录 Kaspersky 账号有问题，请尝试使用全局代理。
