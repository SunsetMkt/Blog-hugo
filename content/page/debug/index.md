---
title: "开发人员工具"
date: 2024-11-18
slug: debug
aliases:
    - /dev/
    - /developer/
menu:
    main:
        weight: 5
        params:
            icon: tool
---

## 快捷链接

[主题源码](https://github.com/CaiJimmy/hugo-theme-stack) [主题文档](https://stack.jimmycai.com/config/) [Hugo 文档](https://gohugo.io/documentation/)

## 调试功能

### 清空 localStorage

<a class="link" href="javascript:void(0)" onclick="localStorage.clear();location.reload();">清空 localStorage</a>

### Eruda

URL 参数`eruda=true`。

<div class="eruda-btns">
    <a class="link" onclick="localStorage.setItem('active-eruda','true');location.reload();">启动Eruda</a>&nbsp;
    <a class="link" onclick="localStorage.removeItem('active-eruda');location.reload();">关闭Eruda</a>
</div>

### Cloudflare Zaraz 管理的网站统计

<div class="zaraz-btns">
    <script>
      function setCookie(cname, cvalue, exdays, domain) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cookieString = cname + "=" + cvalue + ";" + expires + ";path=/";
        if (domain) {
          cookieString += ";domain=" + domain;
        }
        document.cookie = cookieString;
      }
      function getMainHost() {
        // https://developer.aliyun.com/article/195912
        let key = `mh_${Math.random()}`;
        let keyR = new RegExp(`(^|;)\\s*${key}=12345`);
        let expiredTime = new Date(0);
        let domain = document.domain;
        let domainList = domain.split(".");
        let urlItems = [];
        // 主域名一定会有两部分组成
        urlItems.unshift(domainList.pop());
        // 慢慢从后往前测试
        while (domainList.length) {
          urlItems.unshift(domainList.pop());
          let mainHost = urlItems.join(".");
          let cookie = `${key}=${12345};domain=.${mainHost}`;
          document.cookie = cookie;
          //如果cookie存在，则说明域名合法
          if (keyR.test(document.cookie)) {
            document.cookie = `${cookie};expires=${expiredTime}`;
            return mainHost;
          }
        }
      }
      function DisableAnalysis() {
        setCookie("DisableAnalysis", "true", 400, "." + getMainHost());
      }
      function RmDisableAnalysis() {
        setCookie("DisableAnalysis", "true", 0, "." + getMainHost());
      }
    </script>
    <a class="link" href="javascript:void(0)" onclick="DisableAnalysis();location.reload();">添加禁用标记</a>&nbsp;
    <a class="link" href="javascript:void(0)" onclick="RmDisableAnalysis();location.reload();">删除禁用标记</a>
</div>

## 字体功能

### 使用霞鹜文楷字体

使用[LXGW WenKai Screen / 霞鹜文楷屏幕阅读版](https://github.com/CMBill/lxgw-wenkai-screen-web)。

<div class="LXGW-WenKai-btns">
    <a class="link" onclick="localStorage.setItem('LXGW-WenKai','true');location.reload();">打开</a>&nbsp;
    <a class="link" onclick="localStorage.removeItem('LXGW-WenKai');location.reload();">关闭</a>
</div>

## Firefox H.265/MPEG-H HEVC 视频播放

For Windows：确保安装[来自设备制造商的 HEVC 视频扩展](ms-windows-store://pdp/?ProductId=9n4wgh0z6vhq)，在`about:config`将`media.wmf.hevc.enabled`设为`1`（在最新版本已默认）。

For Linux/Others：使用[zhaohappy/libmedia 提供的 Web 媒体播放器](/tools/libmedia/product/player/player.html)作为临时替代方案。

Shame on [MPEG LA](https://en.wikipedia.org/wiki/MPEG_LA#Criticism).

## 默认图片作者

-   [Pawel Czerwinski](https://unsplash.com/@pawel_czerwinski)
-   [mymind](https://unsplash.com/@mymind)
-   [Luke Chesser](https://unsplash.com/@lukechesser)
-   [Codioful (Formerly Gradienta)](https://unsplash.com/@codioful)

## 调试信息

Git 提交和构建信息请参考页脚。

其他 Hugo 调试信息请参考 JavaScript 控制台。

{{< console-debug >}}
