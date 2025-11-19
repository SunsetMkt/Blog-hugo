---
categories: Original
date: 2025-11-19T00:00:00Z
tags:
    - Cloudflare
    - Demo
    - 信息技术
    - 前端
slug: cloudflare-turnstile-demo
title: Cloudflare Turnstile Demo
---

<link rel="preconnect" href="https://challenges.cloudflare.com">
<script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  async
  defer
></script>
<div class="cf-turnstile"
    data-sitekey="3x00000000000000000000FF"
    data-theme="auto"
    data-size="flexible"
    data-callback="onTurnstileSuccess"
    data-error-callback="onTurnstileError"
    data-expired-callback="onTurnstileExpired"
></div>
<p id="turnstile-status">No response yet</p>
<script>
    var turnstileStatus = document.getElementById("turnstile-status");
    function onTurnstileSuccess(token) {
        console.log("Turnstile success:", token);
        turnstileStatus.innerHTML = `Turnstile success: ${token}`;
    }
    function onTurnstileError(errorCode) {
        console.error("Turnstile error:", errorCode);
        turnstileStatus.innerHTML = `Turnstile error: ${errorCode}`;
    }
    function onTurnstileExpired() {
        console.warn("Turnstile token expired");
        turnstileStatus.innerHTML = "Turnstile token expired";
    }
</script>
