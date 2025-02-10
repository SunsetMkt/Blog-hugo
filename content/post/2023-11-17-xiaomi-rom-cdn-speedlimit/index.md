---
categories: Original
date: "2023-11-17T00:00:00Z"
tags:
    - Android
    - 小米
slug: xiaomi-rom-cdn-speedlimit
title: 小米ROM下载限速解决方案
---

**本站呼吁抵制小米的任何搭载 Android 系统的产品，直到其允许任何用户在购买手机后的 7 天内简单地解锁 Bootloader。**

**截至 2023 年 12 月，小米禁止新发布的手机解锁 Bootloader 事实成立。**

我们认为，小米缺乏对其客户的尊重。

参阅：

- [目前基本可以认为小米已经禁止 BL 解锁了 - V2EX](https://www.v2ex.com/t/998253)
- [各 Android 手机厂商 Bootloader 解锁 / 内核开源 / 解锁后保修情况](https://github.com/KHwang9883/MobileModels/blob/master/misc/bootloader-kernel-source.md)
- [利用漏洞绕过小米 HyperOS 对 BootLoader 解锁账户绑定限制社区等级](https://github.com/MlgmXyysd/Xiaomi-HyperOS-BootLoader-Bypass)
- [小米 BootLoader《解锁资格答题测试》更新记录](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire)

---

## 替换域名

将 URL 中的域名替换为`bkt-sgp-miui-ota-update-alisgp.oss-ap-southeast-1.aliyuncs.com`。

例：

有限速 `https://bigota.d.miui.com/V14.0.0.0.AAAAAAA/what_global_images_V14.0.0.0.AAAAAAA_20991231.0000.00_14.0_aaaaaaaaaa.tgz`

-->

替换 `bigota.d.miui.com` -> `bkt-sgp-miui-ota-update-alisgp.oss-ap-southeast-1.aliyuncs.com`

-->

无限速 `https://bkt-sgp-miui-ota-update-alisgp.oss-ap-southeast-1.aliyuncs.com/V14.0.0.0.AAAAAAA/what_global_images_V14.0.0.0.AAAAAAA_20991231.0000.00_14.0_aaaaaaaaaa.tgz`

## 修改 hosts（失效）

当前，此方法已失效。~~将跳转后链接中的`bigota`或`hugeota`替换成`superota`或`ultimateota`或许有效。~~

> ~~我不知道这样做为什么会有用，但确实有用，所以记录在这里。~~

修改 hosts：

```plaintext
123.6.13.6 bigota.d.miui.com
123.6.13.6 hugeota.d.miui.com
# 下面的不是必须
123.6.13.6 superota.d.miui.com
123.6.13.6 ultimateota.d.miui.com
```
