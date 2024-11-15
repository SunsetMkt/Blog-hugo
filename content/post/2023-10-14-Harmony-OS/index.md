---
categories: Original
date: "2023-10-14T00:00:00Z"
tags:
    - Android
    - 华为
slug: Harmony-OS
title: 有关HarmonyOS的误区
---

不是所有名字里有“Harmony”的都是“自主开发”。

-   [HarmonyOS](https://consumer.huawei.com/cn/harmonyos-4/)（华为的 to C 移动端操作系统）是基于 [AOSP](https://source.android.com/?hl=zh-cn) 修改的操作系统，包括华为的私有软件。（非自研）
-   [OpenHarmony](https://gitee.com/openharmony)（开源项目）是为 IoT 设备设计的操作系统。（自研）
-   HarmonyOS Next（目前仅面向合作的企业开发者发布）（华为未发布的 to C 移动端操作系统），根据公开信息，不是基于 AOSP 修改的操作系统，但不排除使用 Linux 内核。（半自研）

华为有意不澄清“HarmonyOS（华为的 to C 移动端操作系统）不是基于 AOSP 修改的操作系统”这一谣言，是作为企业的失信。使用开源项目并注明来源是道德要求。

HarmonyOS（华为的 to C 移动端操作系统）的虚拟机镜像可以从[DevEco Studio](https://developer.harmonyos.com/cn/develop/deveco-studio)中获取。通过处理 Android Studio 虚拟机镜像的方法，可以获取 HarmonyOS（Android） 的各分区内容。

无论如何，“AOSP 被禁用”都是伪命题。中国大陆境内的各大高校和企业分别维护了多份 AOSP 源代码镜像，不存在无法访问源代码的可能性。Google 无法禁止 AOSP 的使用，亦无法阻止在[许可协议](https://source.android.com/docs/setup/about/licenses?hl=zh-cn)内的二次开发（事实上，违反开源软件协议的诉讼在中国大陆很罕见）。Google 可以禁止 GMS（Google Play 服务）的使用，但仍可通过 root 等方式绕过限制，且非运行 Android 所必须。

事实上，AOSP 运行在中国大陆境内大量的公交站点牌、广告牌、电影票机、博物馆的交互式展台、电视机顶盒、电视上，这都不需要 Google 的许可，Google 也无法阻止。

原生 HarmonyOS 应用（包括 OpenHarmony 和 HarmonyOS Next）使用 Web 技术（JavaScript/类 TypeScript）开发，其效果类似[快应用](http://www.so-quick.cn/)。从用户的角度考虑，更推荐 PWA 这种公开规范的替代品。

在现代 IT 行业，妄想仅使用来自某一国家的代码/技术，纯属扯淡。

**到目前为止，所有交付到个人消费者的设备都在使用基于 AOSP 修改的操作系统（HarmonyOS）（非自研）。**
