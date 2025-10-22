---
title: 开发人员工具
date: 2024-11-18
slug: debug
aliases:
    - /dev/
    - /developer/
menu:
    main:
        weight: 7
        params:
            icon: tool
tags:
    - 信息技术
    - 前端
---

## 快捷链接

[网站源码](https://github.com/SunsetMkt/Blog-hugo) | [主题源码](https://github.com/CaiJimmy/hugo-theme-stack) | [主题文档](https://stack.jimmycai.com/config/) | [Hugo 文档](https://gohugo.io/documentation/) | [Sitemap](/sitemap/)

## 调试功能

### 清空 Cookies

<script>
  function deleteAllCookies() {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i];
          let eqPos = cookie.indexOf("=");
          let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      }
  }
</script>

<a class="link" onclick="deleteAllCookies();">清空 Cookies</a>

### 清空 localStorage

<a class="link" onclick="localStorage.clear();">清空 localStorage</a>

### Eruda

URL 参数`eruda=true`。

<div class="eruda-btns">
    <a class="link" onclick="localStorage.setItem('active-eruda','true');location.reload();">启动Eruda</a>&nbsp;
    <a class="link" onclick="localStorage.removeItem('active-eruda');location.reload();">关闭Eruda</a>
</div>

或点击 Footer 五次临时启动。

### 全域生效的 Cloudflare Zaraz 标签管理器

<div class="zaraz-btns">
    <a class="link" onclick="zaraz.consent.modal = true;">调整同意设置</a>&nbsp;
    <a class="link" onclick="zaraz.debug(true);">开启调试模式</a>
</div>

### 全域生效的 URL 参数

- `force_waf_challenge_please` 强制触发 WAF 质询
- `force_waf_block_please` 强制触发 WAF 阻止
- `no_polish_please` 禁用 Cloudflare Polish（自动图像压缩）

### 全域生效的危险参数

不予提供。

## 调试信息

Git 提交和构建信息请参考页脚。

其他 Hugo 调试信息请参考 JavaScript 控制台。

{{< console-debug >}}
