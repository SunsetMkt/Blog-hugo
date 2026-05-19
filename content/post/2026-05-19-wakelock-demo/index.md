---
categories: Original
date: 2026-05-19T00:00:00Z
tags:
    - 信息技术
    - 前端
slug: wakelock-demo
title: 屏幕常亮 Demo
---

<button id="toggleBtn">开启屏幕常亮</button>

<p>状态：<span id="status">未激活</span></p>

<script>
    let wakeLock = null;
    const toggleBtn = document.getElementById('toggleBtn');
    const statusText = document.getElementById('status');

    // 核心函数：请求锁
    async function requestWakeLock() {
        try {
            // 'screen' 表示保持屏幕常亮
            wakeLock = await navigator.wakeLock.request('screen');
            statusText.innerText = '已激活（屏幕将保持常亮）';
            toggleBtn.innerText = '关闭屏幕常亮';

            // 监听系统自动释放锁（例如：用户切后台、最小化浏览器）
            wakeLock.addEventListener('release', () => {
                statusText.innerText = '已释放（已恢复默认休眠设置）';
                toggleBtn.innerText = '开启屏幕常亮';
                wakeLock = null;
            });

        } catch (err) {
            statusText.innerText = `激活失败: ${err.message}`;
        }
    }

    // 核心函数：手动释放锁
    function releaseWakeLock() {
        if (wakeLock !== null) {
            wakeLock.release();
            wakeLock = null;
        }
    }

    // 按钮点击事件
    toggleBtn.addEventListener('click', () => {
        if (wakeLock === null) {
            requestWakeLock();
        } else {
            releaseWakeLock();
        }
    });

    // 核心细节：处理页面可见性切换
    // 当用户最小化标签页后再次返回时，需要重新请求锁，否则锁会失效
    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            await requestWakeLock();
        }
    });
</script>
