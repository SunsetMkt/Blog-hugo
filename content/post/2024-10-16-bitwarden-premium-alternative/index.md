---
categories: Original
date: 2024-10-16T00:00:00Z
tags:
    - Bitwarden
    - 信息技术
    - 密码管理器
    - 软件
slug: bitwarden-premium-alternative
title: Bitwarden Premium 的免费替代方案
---

Bitwarden 提供了非常慷慨的[免费和付费方案](https://bitwarden.com/pricing/)，也有可私有部署的[第三方服务器实现](https://github.com/dani-garcia/vaultwarden)。

但是如果您一定要使用 Bitwarden 的官方服务器，且不想购买 Premium，但是又想在客户端启用 TOTP 生成器支持，下面的方案可能会有所帮助。

## 修补浏览器扩展

```patch
diff --git a/libs/common/src/billing/services/account/billing-account-profile-state.service.ts b/libs/common/src/billing/services/account/billing-account-profile-state.service.ts
index 7d256da971..bf8c6a3006 100644
--- a/libs/common/src/billing/services/account/billing-account-profile-state.service.ts
+++ b/libs/common/src/billing/services/account/billing-account-profile-state.service.ts
@@ -67,8 +67,8 @@ export class DefaultBillingAccountProfileStateService implements BillingAccountP
   ): Promise<void> {
     await this.stateProvider.getUser(userId, BILLING_ACCOUNT_PROFILE_KEY_DEFINITION).update((_) => {
       return {
-        hasPremiumPersonally: hasPremiumPersonally,
-        hasPremiumFromAnyOrganization: hasPremiumFromAnyOrganization,
+        hasPremiumPersonally: true,
+        hasPremiumFromAnyOrganization: true,
       };
     });
   }
```

开箱即用的修补和构建工作流可参考[Sunsetwarden](https://github.com/SunsetMkt/Sunsetwarden)。

## 第三方 Android 客户端

[Keyguard](https://github.com/AChep/keyguard-app)是 Bitwarden 的第三方 Android 客户端。它的免费版本即支持 TOTP 生成器，但不可修改密码库。

Keyguard 可以和 Bitwarden 的官方 Android 客户端同时安装，以便互相补充缺失的功能。
