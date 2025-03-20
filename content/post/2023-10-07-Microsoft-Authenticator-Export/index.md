---
categories: Original
date: 2023-10-07T00:00:00Z
tags:
  - Android
  - Microsoft
  - 信息技术
slug: Microsoft-Authenticator-Export
title: 在 Root 设备中导出 Microsoft Authenticator 中的 TOTP 密钥
---

> 由于 Microsoft Authenticator 不提供手工导出功能，不建议将其用于除 Microsoft 账号外的 2FA 验证软件。

Microsoft Authenticator 的密钥保存在 SQLite 数据库中，路径为`/data/data/com.azure.authenticator/databases/PhoneFactor`。

注意，访问`/data/data/`目录需要 root 权限。

将`PhoneFactor`、`PhoneFactor-shm`、`PhoneFactor-wal`（若存在后两个）复制到 PC 上，使用 SQLite 数据库的图形化浏览程序即可获得密钥。
