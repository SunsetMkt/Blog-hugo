---
categories: Original
date: 2025-04-06T00:00:00Z
tags:
    - Cloudflare
    - 信息技术
    - 前端
slug: cf-zaraz-consent-snippet
title: Cloudflare Zaraz 同意管理脚本
---

## 文档

[Cloudflare Zaraz](https://developers.cloudflare.com/zaraz/)

## 控制同意提示的 Custom HTML 工具

开启“启用同意管理”，关闭“显示同意模式”。

工具: Custom HTML

触发器: Pageview

```html
<script>
    // This script is copied from
    // https://developers.cloudflare.com/zaraz/consent-management/api/
    // With a lot of modifications
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        return value?.split(`; ${name}=`)[1]?.split(";")[0];
    }

    function handleZarazConsentAPIReady() {
        const logPrefix = "[handleZarazConsentAPIReady]";
        const cookieName = "cf_consent";
        // Consent Cookie
        const consentCookie = getCookie(cookieName);
        // Get the current country, the variable will be injected by Zaraz
        const isEUCountry = "{{ system.device.location.isEUCountry }}" === "1";
        const isUKCountry = "{{ system.device.location.country }}" === "GB";
        const isCalfornia =
            "{{ system.device.location.region }}" === "California";
        const isSwitzerland = "{{ system.device.location.country }}" === "CH";
        const shouldConsent =
            isEUCountry || isUKCountry || isCalfornia || isSwitzerland;
        // Get current consents
        let currentConsents = {};
        if (consentCookie) {
            try {
                currentConsents = JSON.parse(consentCookie);
            } catch (error) {
                // Broken JSON
                console.log(logPrefix, error);
                currentConsents = false;
            }
        }
        // Get all available consents
        const allConsents = zaraz.consent.getAll();
        // Check for should update
        // Every key name in allConsents should be in currentConsents, else we need to update
        let shouldUpdate = false;
        if (consentCookie) {
            for (const key in allConsents) {
                if (currentConsents[key] == undefined) {
                    shouldUpdate = true;
                    break;
                }
            }
        }
        // Or JSON is broken
        if (currentConsents === false) {
            shouldUpdate = true;
        }
        // Build config
        const configDict = {
            logPrefix: logPrefix,
            cookieName: cookieName,
            consentCookie: consentCookie,
            isEUCountry: isEUCountry,
            isUKCountry: isUKCountry,
            isCalfornia: isCalfornia,
            isSwitzerland: isSwitzerland,
            shouldConsent: shouldConsent,
            currentConsents: currentConsents,
            allConsents: allConsents,
            shouldUpdate: shouldUpdate,
        };

        console.log(logPrefix, configDict);

        // Pop up consent modal
        function popUpConsent() {
            console.log(logPrefix, "Consent needed");
            zaraz.consent.modal = true;
            zaraz.consent.setAllCheckboxes(true);
        }

        // Allow all and go
        function silentlyAllowAllAndGo() {
            console.log(logPrefix, "Consent not needed");
            zaraz.consent.setAll(true);
            zaraz.consent.sendQueuedEvents();
        }

        if (!consentCookie) {
            // If consent cookie is not set
            if (shouldConsent) {
                popUpConsent();
            } else {
                silentlyAllowAllAndGo();
            }
        } else {
            // If consent cookie is set
            if (shouldUpdate) {
                console.log(logPrefix, "Upstream consent config changed");
                if (shouldConsent) {
                    popUpConsent();
                } else {
                    silentlyAllowAllAndGo();
                }
            }
        }
    }

    if (zaraz.consent?.APIReady) {
        handleZarazConsentAPIReady();
    } else {
        document.addEventListener(
            "zarazConsentAPIReady",
            handleZarazConsentAPIReady,
        );
    }
</script>
```

## 同意模式文本

```html
<div>
    <p>
        Cookies created by Cloudflare and its tag manager are necessary for the
        website to work and cannot be switched off.
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank">
            Learn more about Cloudflare privacy policies.
        </a>
    </p>
    <br />
    <p>
        This website does not target any specific audience, especially not EU,
        UK, Switzerland or Californian audiences.
    </p>
</div>
```

```html
<div>
    <p>
        由 Cloudflare 及其标签管理器创建的 Cookie
        是网站正常运行所必需的，无法关闭。
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank">
            了解更多关于 Cloudflare 隐私政策的信息。
        </a>
    </p>
    <br />
    <p>本网站不针对任何特定受众，特别是不面向欧盟、英国、瑞士或加州的受众。</p>
</div>
```
