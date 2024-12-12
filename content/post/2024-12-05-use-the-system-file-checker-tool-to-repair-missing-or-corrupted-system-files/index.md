---
categories: Original
date: "2024-12-05T00:00:00Z"
tags:
    - Windows
slug: use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files
title: Windows：使用系统文件检查器工具修复丢失或损坏的系统文件
---

这是一个经常被忽视的解决方案，但在某些情况下非常有用。它值得一篇单独的文章。

[参考](https://support.microsoft.com/zh-cn/topic/%E4%BD%BF%E7%94%A8%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6%E6%A3%80%E6%9F%A5%E5%99%A8%E5%B7%A5%E5%85%B7%E4%BF%AE%E5%A4%8D%E4%B8%A2%E5%A4%B1%E6%88%96%E6%8D%9F%E5%9D%8F%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6-79aa86cb-ca52-166a-92a3-966e85d4094e)

## 快速开始

打开终端（管理员）。

```powershell
DISM.exe /Online /Cleanup-image /Restorehealth
```

```powershell
sfc /scannow
```

保险起见，重新启动。

## 如果没用

[使用 Windows 更新修复电脑问题](https://support.microsoft.com/zh-cn/windows/%E4%BD%BF%E7%94%A8-windows-%E6%9B%B4%E6%96%B0%E4%BF%AE%E5%A4%8D%E7%94%B5%E8%84%91%E9%97%AE%E9%A2%98-497ac6da-7cac-4641-82a5-f50398d879a0)

## 如果也没用

[下载 Windows](https://www.microsoft.com/zh-cn/software-download/windows11)，保留应用和文件（不适用于 Insider 降级），安装。
