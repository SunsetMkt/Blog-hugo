---
categories: Original
date: "2024-01-24T00:00:00Z"
tags:
  - Minecraft
  - 游戏
slug: minecraft-bedrock-viewdistance-limit
title: Minecraft Bedrock 的区块渲染距离限制
---

Minecraft Bedrock 会根据设备硬件配置限制设置中“能见度”的最大值，然而，这种限制并不是始终准确的。

为了在这种情况下修改能见度设置，可以手动修改`options.txt`文件中的`gfx_viewdistance`选项。

`options.txt`的文件路径：

```
C:\Users\用户名\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftpe\options.txt
```

其中，`gfx_viewdistance:256`表示能见度最大值为 256（16 个区块）。

`gfx_viewdistance`数值 = 区块数 \* 16

<div>
  <p>
    需要设置的渲染距离（区块数）：<input
      type="number"
      id="viewdistance_chunks"
      placeholder="请输入渲染距离（区块数）"
      min="1"
    />
  </p>
  <p>
    对应的配置项：<code
      >gfx_viewdistance:<span id="viewdistance_config"
        >请在上面输入区块数</span
      ></code
    >
  </p>
  <script>
    const viewdistance_chunks = document.getElementById("viewdistance_chunks");
    const viewdistance_config = document.getElementById("viewdistance_config");
    viewdistance_chunks.addEventListener("input", () => {
      if (viewdistance_chunks.value > 65536) {
        viewdistance_chunks.value = 65536;
        alert("我们目前不认为存在可以达到此渲染距离的设备。");
      }
      viewdistance_config.innerHTML = Math.ceil(viewdistance_chunks.value * 16);
    });
  </script>
</div>
