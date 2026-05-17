---
categories: Repost
date: "2026-05-08T00:00:00Z"
tags:
    - 游戏
    - 前端
slug: SpaceCadetPinball
title: Space Cadet Pinball
---

[alula/SpaceCadetPinball](https://github.com/alula/SpaceCadetPinball) based on [k4zmu2a/SpaceCadetPinball](https://github.com/k4zmu2a/SpaceCadetPinball).

3D Pinbal Table created for Microsoft by Maxis. Copyright (c) 1995 Maxis.

<div id="pinball-container">
    <div id="status">Downloading...</div>
    <progress id="progress" max="100" value="0" hidden></progress>
    <canvas id="canvas" oncontextmenu="event.preventDefault()" tabindex="-1" style="display:none; outline:none;"></canvas>
</div>

<style>
    #canvas {
        width: 100%;
        max-width: 640px;
    }
</style>

<script>
    var statusElement = document.getElementById("status"),
        progressElement = document.getElementById("progress");

    var Module = {
        preRun: [],
        postRun: [],
        print: (function() {
            return function(text) {
                if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(" ");
                console.log(text);
            };
        })(),
        printErr: function(text) {
            if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(" ");
                console.error(text);
        },
        canvas: (function() {
            var canvas = document.getElementById("canvas");
            canvas.addEventListener("webglcontextlost", function(e) {
                alert("WebGL context lost. You will need to reload the page.");
                e.preventDefault();
            }, false);
            return canvas;
        })(),
        setStatus: function(text) {
            if (!Module.setStatus.last) {
                Module.setStatus.last = { time: Date.now(), text: "" };
            }
            if (text !== Module.setStatus.last.text) {
                var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/),
                    now = Date.now();
                if (!(m && now - Module.setStatus.last.time < 30)) {
                    Module.setStatus.last.time = now;
                    Module.setStatus.last.text = text;
                    if (m) {
                        text = m[1];
                        progressElement.value = 100 * parseInt(m[2]);
                        progressElement.max = 100 * parseInt(m[4]);
                        progressElement.hidden = false;
                    } else {
                        progressElement.value = null;
                        progressElement.max = null;
                        progressElement.hidden = true;
                        document.getElementById("canvas").style.display = "block";
                    }
                    statusElement.innerHTML = text;
                    if (text === "") {
                        statusElement.style.display = "none";
                        progressElement.style.display = "none";
                    } else {
                        statusElement.style.display = "";
                        progressElement.style.display = "";
                    }
                }
            }
        },
        totalDependencies: 0,
        monitorRunDependencies: function(left) {
            this.totalDependencies = Math.max(this.totalDependencies, left);
            Module.setStatus(left ? "Preparing... (" + (this.totalDependencies - left) + "/" + this.totalDependencies + ")" : "All downloads complete.");
        }
    };

    Module.setStatus("Downloading...");
    window.onerror = function() {
        // Module.setStatus("Exception thrown, see JavaScript console");
        Module.setStatus = function(text) {
            if (text) Module.printErr("[post-exception status] " + text);
        };
    };
</script>

<script async src="SpaceCadetPinball.js"></script>
