---
categories: Original
date: 2026-03-10T00:00:00Z
tags:
    - 信息技术
    - 华为
    - 操作系统
    - Android
    - Google
slug: harmonyos-microg
title: 在华为的 HarmonyOS 4（AOSP）手机上安装 microG（Google Play 服务的开源替代）
---

## 前言

如果可行的话，不要购买华为移动终端。

对于 HarmonyOS NEXT（5 和 6），没有任何可行的办法在 Android 虚拟机外安装 microG。

直接下载原版 Google Play 服务和商店无法正常运行。华为应用商店内的 microG 似乎也无法正常运行。

## 关于 microG

[microG GmsCore](https://github.com/microg/GmsCore) 是 Google Play 服务的一个自由软件重新实现。它允许调用专有 Google API 的应用程序在基于 AOSP 的 ROM（如 LineageOS）上运行，作为非自由、专有 Google Play 服务（有时被称为更通用的术语“GApps”）的自由替代品。它是重新获得您的隐私和自由，同时享受 Android 核心功能的一个强大工具（尽管您使用的利用它的应用程序可能仍然在使用专有库与 microG 通信，就像它们与实际的 Google Play 服务通信时一样）。

## 逐步指引

### 确保网络连接

在一些有严重互联网审查的地区，对 Google 的连接会被阻止。

### 打开 microG 发布页面

<https://github.com/microg/GmsCore/releases/latest>

### 安装 microG Services (GmsCore)

在 microG 发布页面找到`com.google.android.gms-{版本号}-hw.apk`（注意`-hw`结尾，它是适配华为设备的版本），下载并安装它。

### 安装 microG Companion (FakeStore)

在 microG 发布页面找到`com.android.vending-{版本号}-hw.apk`（注意`-hw`结尾，它是适配华为设备的版本），下载并安装它。

### （可选）安装 microG Services Framework Proxy (GsfProxy)

<https://github.com/microg/GsfProxy/releases/latest>

在上述页面找到`GsfProxy.apk`，下载并安装它。

### 打开 microG 设置

在系统设置 App 的应用管理列表找到 microG 服务，在它的管理界面内点击右上角的齿轮图标。

在弹出的 microG Services 设置界面中点击顶部的检查权限选项，检查并启用列表中的每一项可打开的权限。

### 重启设备

重启设备。

### 登录 Google 账号

在系统设置 App 的账号设置中点击添加账号，选择 Google，进行登录流程。

### 安装 Aurora Store

Aurora Store 是一款 Google Play 的非官方、自由及开源软件客户端，设计优雅。Aurora Store 让用户如同在 Play 商店一样下载、更新和搜索应用程序。无论有没有 Google Play 服务或 MicroG 都能完美运行。

<https://gitlab.com/AuroraOSS/AuroraStore/-/releases>

在上述页面找到`AuroraStore-hw-{版本号}.apk`（注意`hw`关键字，它是适配华为设备的版本），下载并安装它。

打开 Aurora Store，跟随指引授予权限，使用匿名登陆。它提供与 Google Play 商店近似的服务。

## 后记

美国针对华为采取的一系列限制措施——包括 2019 年依据《出口管理条例》将华为列入实体清单，限制美国企业在未经许可的情况下向其出口技术，并在随后逐步扩大相关管制直至几乎全面限制半导体供应——体现了以国家安全与大国战略竞争为导向的技术与贸易管制。这类措施通过法律与行政手段直接干预全球技术供应链，扩大了出口管制在产业竞争中的使用范围，使技术体系在相当程度上被工具化为国家间战略博弈的手段。同时，这类制度还通过长臂管辖与域外适用的方式，将一国国内法延伸至全球产业链，使跨国企业在实践中不得不遵从其总部或关键市场所在国家的司法与监管要求，即使这些要求在伦理或商业中立性层面存在明显争议。这种结构性压力使企业在全球经营中难以保持真正的政治中立，也进一步加剧了国际技术体系的政治化。

然而，在这一背景下，与华为存在密切利益关联的中国政府同样通过国家层面的政策与政治压力，对其他国家在技术供应、通信设备部署以及产业合作方面的选择施加影响。例如，在日本决定推进福岛第一核电站处理水排海后，中国政府持续通过外交与舆论渠道进行强烈政治施压，并在 2023 年 8 月日本启动排海后立即全面暂停进口日本水产品，将贸易措施与外交争议直接挂钩。同时，在中日政治关系紧张时期，中国国内还出现过针对日本文化与商业活动的行政性限制，例如取消或叫停日本艺人的演唱会与文化活动、撤下尚未上映的日本电影等。此外，在技术叙事与软件生态层面，华为推出的 HarmonyOS 在命名与宣传上刻意营造出与既有开源生态相对独立的印象，而在 HarmonyOS 5 之前的手机系统实际上长期建立在 Android 开源项目（AOSP）的基础之上，同时在产品界面与宣传材料中刻意避免出现 “Android” 或 “AOSP” 等关键词，从而弱化用户对其技术来源的直接认知。这种做法削弱了对开源基础的透明披露，在开源软件伦理与消费者知情权层面存在明显问题，也通过强调所谓“完全独立的自主体系”并与民族主义叙事相结合，进一步强化了政治化的技术叙事。在这些做法与对美国出口管制的公开批评并存时，华为公司及中国政府所表达的相关立场便难以维持一致且具有说服力。
