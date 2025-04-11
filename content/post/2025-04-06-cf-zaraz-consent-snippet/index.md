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

```html
<script>
    // This script is copied from
    // https://developers.cloudflare.com/zaraz/consent-management/api/
    // With some modifications
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        return value?.split(`; ${name}=`)[1]?.split(";")[0];
    }

    function handleZarazConsentAPIReady() {
        const consent_cookie = getCookie("cf_consent");
        const isEUCountry = "{{system.device.location.isEUCountry}}" === "1";
        const isUKCountry = "{{ system.device.location.country }}" === "GB";
        const isCalfornia =
            "{{ system.device.location.region }}" === "California";
        const shouldConsent = isEUCountry || isUKCountry || isCalfornia;

        console.log(
            `isEUCountry: ${isEUCountry}, isUKCountry: ${isUKCountry}, isCalfornia: ${isCalfornia}, consent_cookie: ${consent_cookie}`,
        );

        if (!consent_cookie) {
            if (shouldConsent) {
                console.log("consent needed");
                zaraz.consent.modal = true;
                zaraz.consent.setAllCheckboxes(true);
            } else {
                console.log("consent not needed");
                zaraz.consent.setAll(true);
                zaraz.consent.sendQueuedEvents();
            }
        } else {
            // Check for updates
            const currentConsents = JSON.parse(consent_cookie);
            const allConsents = zaraz.consent.getAll();
            // Every key name in allConsents should be in currentConsents,
            // else we need to update
            var updateFlag = false;
            for (const key in allConsents) {
                if (currentConsents[key] == undefined) {
                    updateFlag = true;
                    break;
                }
            }
            // If updateFlag is true, we need to update
            // Consent again
            if (updateFlag) {
                console.log("consent updated");
                if (shouldConsent) {
                    console.log("consent needed");
                    zaraz.consent.modal = true;
                    zaraz.consent.setAllCheckboxes(true);
                } else {
                    console.log("consent not needed");
                    zaraz.consent.setAll(true);
                    zaraz.consent.sendQueuedEvents();
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
    <p>
        This website does not target any specific audience, especially not EU,
        UK or Californian audiences.
    </p>
</div>
```
