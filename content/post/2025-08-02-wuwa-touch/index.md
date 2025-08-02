---
categories: Original
date: 2025-08-02T00:00:00Z
tags:
    - 信息技术
    - 鸣潮
    - 游戏
    - 逆向工程
slug: wuwa-touch
title: 在《鸣潮》PC 端使用移动端界面
---

Enabling touch input and UI for Wuthering Waves on PC (Windows).

TL;DR: `.\Client-Win64-Shipping.exe -CloudGame -SkipSplash -CloudGamePlatform=Android`

这是一个未公开的行为，不保证在未来可用。

使用启动参数：

```shell
"C:\path\to\Wuthering Waves\Wuthering Waves Game\Client\Binaries\Win64\Client-Win64-Shipping.exe" -CloudGame -SkipSplash -CloudGamePlatform=Android
```

必须通过`Client-Win64-Shipping.exe`启动，`-CloudGamePlatform=Android`用于指定 Android 端云游戏模式，`-SkipSplash`用于跳过启动画面。

`-CloudGame`实际上与`-CloudGamePlatform=`功能重合，只是为了确保指令可读性。

**需要真实的 Windows 触屏输入。** 在此状态下，它不支持鼠标键盘输入。在进入游戏后，光标会被持续隐藏。可以使用[Sunshine](https://github.com/LizardByte/Sunshine)和[Moonlight](https://github.com/moonlight-stream)从其他设备上模拟触屏输入。

其他可用的参数：`-Device=` `-Dpi=` `-DeviceScreenResolution=1920x1080` `-Res=1920x1080` `-IsWeb=1`
