---
categories: Original
date: "2020-05-18T00:00:00Z"
tags:
  - demo
  - 前端
slug: grey-page
title: 网页黑白滤镜
---

<style> 
    html { 
        -webkit-filter: grayscale(100%); 
        -moz-filter: grayscale(100%); 
        -ms-filter: grayscale(100%); 
        -o-filter: grayscale(100%); 
        filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);  
        _filter:none; 
    } 
</style>

```html
<style>
  html {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    _filter: none;
  }
</style>
```
