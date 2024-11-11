---
categories: Original
date: "2023-06-14T00:00:00Z"
tags:
  - Web
  - JavaScript
  - Cloudflare
  - DNS
  - DoH
slug: serverless-dns
title: 'serverless-dns: 在Cloudflare Workers和其他Serverless平台上运行的RethinkDNS服务器'
---

[Source](https://github.com/serverless-dns/serverless-dns)

`serverless-dns`使用了很有趣的设计：虽然有禁止解析特定网站的功能，但目前只能使用预置的列表。指定预置列表的方式是在 URL 中附加信息，非常`Serverless`。
