---
categories: Original
date: 2024-05-17T00:00:00Z
tags:
  - Windows
  - 信息技术
  - 前端
slug: edge-enable-copilot
title: 在 MS Edge 上显示 Copilot 按钮
---

启发：[如何解决 Edge 浏览器 Copilot 入口消失的问题](https://zhuanlan.zhihu.com/p/676955257)

```powershell
# 设置 Edge 用户数据文件夹路径
$edgeUserData = "$env:LocalAppData\Microsoft\Edge\User Data"
$localStateFile = Join-Path $edgeUserData "Local State"
$backupFile = Join-Path $edgeUserData "Local State.backup"

# 备份 Local State 文件
Copy-Item -Path $localStateFile -Destination $backupFile

# 读取 Local State 文件内容
$jsonContent = Get-Content $localStateFile | ConvertFrom-Json

# 修改 variations_country 字段为 "US"
$jsonContent.variations_country = "US"

# 将修改后的内容保存回 Local State 文件
$jsonContent | ConvertTo-Json -Depth 20 -Compress | Set-Content -Path $localStateFile
```

```powershell
# 设置 Edge 用户数据文件夹路径
$edgeUserData = "$env:LocalAppData\Microsoft\Edge\User Data\Default"
$PreferencesFile = Join-Path $edgeUserData "Preferences"
$backupFile = Join-Path $edgeUserData "Preferences.backup"

# 备份 Preferences 文件
Copy-Item -Path $PreferencesFile -Destination $backupFile

# 读取 Preferences 文件内容
$jsonContent = Get-Content $PreferencesFile | ConvertFrom-Json

# 修改 chat_ip_eligibility_status 字段为 true
$jsonContent.browser.chat_ip_eligibility_status = true

# 将修改后的内容保存回 Preferences 文件
$jsonContent | ConvertTo-Json -Depth 20 -Compress | Set-Content -Path $PreferencesFile
```
