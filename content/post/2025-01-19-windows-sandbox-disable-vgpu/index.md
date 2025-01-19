---
categories: Original
date: "2025-01-19T00:00:00Z"
tags:
    - Windows
slug: windows-sandbox-disable-vgpu
title: Windows Sandbox 在默认启用 vGPU 的状态下无法启动，报错 0x80072746
---

有[报告](https://answers.microsoft.com/en-us/windows/forum/all/windows-sandbox-no-longer-working-after-kb5046740/70cc9a3c-03e8-4cc0-82b1-5c95fa551f66)称，安装 KB5046740 更新后，Windows Sandbox 报错 0x80072746。

[SławomirSajna](https://answers.microsoft.com/en-us/profile/165a4408-fc22-4874-893d-8e2069a74f6b)提供了有效的解决方案：

新建`No_vGPU.wsb`文件，内容为：

```xml
<Configuration>
  <vGPU>Disable</vGPU>
  <Networking>Enable</Networking>
</Configuration>
```

并使用此配置启动 Windows Sandbox。

这显然是一个 Windows Bug，等待来自 Microsoft 的修复。
