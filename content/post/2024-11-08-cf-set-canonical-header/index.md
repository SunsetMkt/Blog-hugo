---
categories: Original
date: 2024-11-08T00:00:00Z
tags:
  - Cloudflare
  - Google
  - 信息技术
  - 前端
slug: cf-set-canonical-header
title: 通过 Cloudflare 为页面设置规范 Canonical 标头
---

总有一些时刻，您会想要从一个域名迁移到另一个域名。但是，您的域名上或许部署了不同的服务，而通过传统的 meta 标签设置 canonical 链接将会是个繁重的工作，甚至是不可能的。

幸运的是，Google 也支持读取 Header 中的 Canonical 头（[参考文档](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls#rel-canonical-header-method)
），因此您可使用 Cloudflare 的转换规则功能自动添加响应头，而不必手动修改每个 HTML 文件。同样，响应头对非 HTML 文件也有效。

## 标头格式

```text
HTTP/1.1 200 OK
Content-Length: 19
...
Link: <https://www.example.com/downloads/white-paper.pdf>; rel="canonical"
...
```

## 转换规则：修改响应头

如果传入请求匹配：`(http.response.code eq 200)`

则修改响应头：设置动态 `Link` = `concat("<", "https://", http.host, http.request.uri.path, ">; rel=\"canonical\"")`

保险起见，这个规则仅会在响应代码为 200 时生效，以免错误地标记 404 或其他错误。它也会移除查询参数，以免标记不必要的 URL。

有关此处使用的动态变量和拼接函数，[参考文档](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/)。
