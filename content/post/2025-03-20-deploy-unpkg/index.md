---
categories: Original
date: "2025-03-20T00:00:00Z"
tags:
    - 前端
    - 信息技术
slug: deploy-unpkg
title: 在 Cloudflare Workers 上部署 UNPKG
---

在 2025-03-15，[UNPKG 经历了 17 小时以上的崩溃](https://github.com/unpkg/unpkg/issues/412)，作者[mjackson](https://github.com/mjackson)随后宣布了新的纯 Workers 版本。

项目地址：<https://github.com/unpkg/unpkg.git>

项目使用两个域名：

- `app.unpkg.com` 用于在浏览器展示包内容列表 -> `unpkg-app.example.com`
- `unpkg.com` 用于实际提供 CDN 服务 -> `unpkg.example.com`

使用 IDE 依次将`app.unpkg.com`和`unpkg.com`批量替换为自己的域名。

确保在 Linux 下使用 Node v23 版本。

```shell
$ nvm install node

$ nvm use node
Now using node v23.10.0 (npm v10.9.2)

$ npm install -g pnpm

$ pnpm install

$ cd workers/www && pnpm run deploy

$ cd ../..

$ cd workers/app && pnpm run deploy
```
