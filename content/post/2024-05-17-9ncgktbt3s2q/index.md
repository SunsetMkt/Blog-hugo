---
categories: Original
date: "2024-05-17T00:00:00Z"
tags:
  - VisibleBody
  - 医学
slug: 9ncgktbt3s2q
title: 软件推荐：Human Anatomy Atlas
---

[MS Store](https://apps.microsoft.com/detail/9ncgktbt3s2q?hl=en-us&gl=US) [Google Play](https://play.google.com/store/apps/details?id=com.visiblebody.atlas) [App Store](https://apps.apple.com/hk/app/human-anatomy-atlas-2024/id1117998129) [Developer Website](https://www.visiblebody.com/)

每年的 10-12 月可能会有特价，价格为 1USD。

也参见[绕过 Microsoft Store 应用的运行前正版验证]({{< ref "2023-02-20-bypassing-microsoft-store-licensing" >}})的部分内容以实现自动化部署。

## Patch 内购

[Il2CppDumper](https://github.com/Perfare/Il2CppDumper)

```cpp
// Type: StoreManager
// Assembly location: C:\PathTo\DummyDll\scripts.dll
```

```asm
; bool __stdcall StoreManager__IsPurchased(StoreManager_o *this, System_String_o *id, const MethodInfo *method)
StoreManager$$IsPurchased proc near

arg_0= qword ptr  8

mov     al, 1
nop
nop
nop
retn
```

```hex
Address	Length	Original bytes	Patched bytes
000000018168FB80	0x6	48 89 5C 24 08 57 	B0 01 90 90 90 C3
```

```asm
; bool __stdcall StoreManager__IsContentLockedByIAP(StoreManager_o *this, ContentfulEntryJSON_o *contentEntry, const MethodInfo *method)
StoreManager$$IsContentLockedByIAP proc near

arg_0= qword ptr  8

mov     al, 0
nop
nop
nop
retn
```

```hex
Address	Length	Original bytes	Patched bytes
000000018168F540	0x6	48 89 5C 24 08 57 	B0 00 90 90 90 C3 
```
