---
categories: Original
date: "2023-11-17T00:00:00Z"
tags:
    - Android
slug: xiaomi-rom-cdn-speedlimit
title: 小米ROM下载限速解决方案
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
