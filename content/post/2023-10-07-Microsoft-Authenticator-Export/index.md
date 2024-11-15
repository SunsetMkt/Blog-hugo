---
categories: Original
date: "2023-10-07T00:00:00Z"
tags:
  - Microsoft
  - Android
slug: Microsoft-Authenticator-Export
title: 在Root设备中导出Microsoft Authenticator中的TOTP密钥
---

> 由于 Microsoft Authenticator 不提供手工导出功能，不建议将其用于除 Microsoft 账号外的 2FA 验证软件。

Microsoft Authenticator 的密钥保存在 SQLite 数据库中，路径为`/data/data/com.azure.authenticator/databases/PhoneFactor`。

注意，访问`/data/data/`目录需要 root 权限。

将`PhoneFactor`、`PhoneFactor-shm`、`PhoneFactor-wal`（若存在后两个）复制到 PC 上，使用 SQLite 数据库的图形化浏览程序即可获得密钥。
