---
categories: Original
date: "2023-10-07T00:00:00Z"
tags:
    - Android
    - 小米
slug: xiaomi-eu-tips
title: 关于MIUI EU的备忘
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

[Unofficial Xiaomi European Community](https://xiaomi.eu/community/)是一个可信的 MIUI 修改版提供来源，我们将其修改发布的 MIUI 成为 MIUI EU/EU 版。

MIUI EU 大多修改自对应的 MIUI 中国版，但移除了只针对中国大陆服务的功能和广告，并提供更多语言支持和默认启动 Google 服务。

若需要在中国大陆使用，目前尚未发现比 MIUI EU 更本地化的 MIUI 版本（排除中国版）。台湾版或许可以选择。

`xiaomi.eu`不能从中国大陆直接访问（网站方主动屏蔽），需要代理。

**挑选设备**：不是所有设备都被 MIUI EU 支持，建议只选择**高通骁龙 ™**（Qualcomm Snapdragon）设备（参考[MIUI EU 发布列表](https://xiaomi.eu/community/forums/miui-rom-releases.103/)），并建议使用有**独立 Recovery 分区**的设备（见[Devices with Dedicated Recovery Partitions](https://xiaomi.eu/community/threads/installing-a-custom-recovery.67841/)）。

**解锁 Bootloader**：设备需要被[解锁](https://www.miui.com/unlock/index.html)才能刷入 MIUI EU，设备解锁只能在登录小米账号后的 168 小时（7 天）后操作（会清除用户数据）。

尽管网页有警告“解锁后指纹识别、查找手机等服务将变得不安全”，但实际上影响不大：

- 无论如何，长按电源键 10 秒都会强制关闭设备，查找手机将无法定位/响铃，Bootloader 锁只能保证此手机不会被刷入第三方系统从而绕过小米的防盗，但设备仍然可以被拆解售卖。
- 现代 Android 会默认启动存储加密，只要设置锁定密码，个人信息将无法被解密。
- 指纹识别硬件的安全性能理论上没有改变，除非第三方软件故意检测解锁从而拒绝使用指纹。

但也确实会创造可能被利用的通道，例如：攻击者可以通过**物理接触设备**的方式刷入被恶意修改的系统镜像，当用户没有察觉并输入锁屏密码后，利用镜像中预先植入的恶意软件窃取用户数据。

**~~这里建议，无论是否决定刷入系统/root，一律解锁 Bootloader，除非有上面描述的顾虑或个人需求。Xiaomi/Redmi 不会因为解锁而失去保修。~~ Xiaomi 已修改政策。**

存在[MIUI EU 本地化 Magisk 模块](https://blog.minamigo.moe/archives/184)，但在不同设备上的效果不同，很可能效果不佳。
