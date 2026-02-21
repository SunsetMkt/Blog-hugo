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

[网站源码](https://github.com/SunsetMkt/Blog-hugo) | [主题源码](https://github.com/CaiJimmy/hugo-theme-stack) | [主题文档](https://stack.jimmycai.com/config/) | [Hugo 文档](https://gohugo.io/documentation/) | [Sitemap](/sitemap/) | [Pagefind Playground](/pagefind/playground/)

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

### Feature Flags

Feature Flags 用于开启或关闭此站点的非核心功能。

<div class="featureFlags">
    <a class="link" onclick="window.SunsetBlog.featureFlags.restoreDefaults();location.reload();">恢复默认 Flags</a>
    <a class="link" id="featureFlagsInit">显示 Flags 列表</a>
    <div id="featureFlagsContainer"></div>
    <script>
        document
            .getElementById("featureFlagsInit")
            .addEventListener("click", () => {
                document.getElementById("featureFlagsInit").remove();
                const api = window.SunsetBlog.featureFlags;
                const expected = api.getExpectedFlags();
                const enabled = new Set(api.getFlags());
                const container = document.getElementById(
                    "featureFlagsContainer"
                );
                container.innerHTML = "";
                expected.forEach((flag) => {
                    const label = document.createElement("label");
                    const chk = document.createElement("input");
                    chk.type = "checkbox";
                    chk.value = flag;
                    chk.checked = enabled.has(flag);
                    chk.addEventListener("change", () => {
                        if (chk.checked) api.setFlag(flag);
                        else api.unsetFlag(flag);
                    });
                    label.appendChild(chk);
                    label.appendChild(document.createTextNode(" " + flag));
                    container.appendChild(label);
                    container.appendChild(document.createElement("br"));
                });
            });
    </script>
</div>

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

### Git、构建和环境

Git 提交和构建信息请参考页脚。

### Hugo

为了输出美观，Hugo 调试信息请参考 JavaScript 控制台。

{{< console-debug >}}

### SunsetUUID

<div>
    <p><code id="SunsetUUID-display">undefined</code></p>
    <script>
        if (localStorage.SunsetUUID) {
            document.getElementById("SunsetUUID-display").innerText =
                localStorage.SunsetUUID;
        }
    </script>
</div>
