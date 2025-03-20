---
categories: Original
date: 2020-05-16T00:00:00Z
tags:
  - Demo
  - JavaScript
  - 信息技术
  - 前端
slug: edit-them-all
title: 任意编辑网页文字 Demo
---

A simple JavaScript trick.

```javascript
document.body.contentEditable = true;
```

[任意编辑网页文字](javascript:document.body.contentEditable = true;)

(PC 用户可以尝试将上面的链接加入收藏夹)

在地址栏中输入：

```plain
javascript:document.body.contentEditable = true;
```

与老版本 IE 兼容：

```plain
javascript:document.body.contentEditable='true'; document.designMode='on';
```

[中止编辑网页文字](javascript:document.body.contentEditable = false;)

恢复：

```plain
javascript:document.body.contentEditable = false;
```
