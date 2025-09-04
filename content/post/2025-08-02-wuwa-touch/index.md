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

确保在官方启动器保持客户端更新。第一次以 CloudGame 启动后，会自动下载全部语言的语音包。

**需要真实的 Windows 触屏（多点触控）输入。** 在此状态下，它不支持鼠标键盘输入。在进入游戏后，光标会被持续隐藏。可以使用[Sunshine](https://github.com/LizardByte/Sunshine)和[Moonlight](https://github.com/moonlight-stream)从其他设备上模拟触屏输入。需要注意，一些平台的 Sunshine 客户端[不默认支持](https://github.com/moonlight-stream/moonlight-android/issues/1271)此功能，已知[moonlight-qt](https://github.com/moonlight-stream/moonlight-qt)在有触摸屏的 Windows 设备上支持此功能。

其他可用的参数：`-Device=` `-Dpi=` `-DeviceScreenResolution=1920x1080` `-Res=1920x1080` `-IsWeb=1`

简单判断是否是 Windows 触屏输入：触碰时，屏幕上显示半透明圆形的触控指示器（[Touch indicator](https://support.microsoft.com/en-us/windows/make-windows-easier-to-see-c97c2b0d-cadb-93f0-5fd1-59ccfe19345d)）。

<div>
    <p>最近一次指针输入方式：<span id="pointerdown-status">未知</span></p>
    <script>
        const statusEl = document.getElementById("pointerdown-status");
        window.addEventListener("pointerdown", (e) => {
            var time = new Date().toLocaleTimeString();
            statusEl.textContent = e.pointerType + " (" + time + ")";
        });
    </script>
</div>
