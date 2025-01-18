---
categories: Original
date: "2025-01-18T00:00:00Z"
tags:
    - 前端
    - 游戏
slug: physplay
title: 把罐子扔到垃圾桶里
---

这部分代码来自[Half-Life 2 Anniversary Update](https://www.half-life.com/en/halflife2/20th)。

<div>
    <!-- https://www.half-life.com/en/halflife2/20th -->
    <link href="physplay/css/physplay.css" rel="stylesheet" type="text/css" />
    <script
        type="text/javascript"
        src="physplay/javascript/fastdom.js"
    ></script>
    <script
        type="text/javascript"
        src="physplay/javascript/physplay-sfx.js"
    ></script>
    <script type="text/javascript" src="physplay/javascript/matter.js"></script>
    <script
        type="text/javascript"
        src="physplay/javascript/matter-wrap.min.js"
    ></script>
    <script
        type="text/javascript"
        src="physplay/javascript/physplay.js"
    ></script>
    <div id="gravgun">
        <div id="gravgunimage" class="gravgunimage"></div>
        <div id="mobilemessage">
            <span class="use-mouse">用鼠标试试？</span>
            <span class="use-desktop">用电脑试试？</span>
        </div>
        <img class="can" id="can" src="physplay/image/can.png" />
        <img class="can intrash intrash1" src="physplay/image/can.png" />
        <img class="can intrash intrash2" src="physplay/image/can.png" />
        <div id="trashcan" class="trashcan" data-phys></div>
        <div class="gravgun-ground"></div>
        <fieldset id="sounddebug" class="debugUI">
            <legend>[DEV] Sound Effect Debug</legend>
            <ul>
                Loading...
            </ul>
        </fieldset>
        <fieldset id="physdebug" class="debugUI">
            <legend>[DEV] Physics Debug Config</legend>
            <ul></ul>
            <button onclick="phys.config.reset()">Reset Config</button>
        </fieldset>
        <div id="physContainer">
            <canvas id="physCanvas"> </canvas>
        </div>
        <div id="preloadImages"></div>
    </div>
</div>
