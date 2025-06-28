---
categories: Original
date: "2025-06-28T00:00:00Z"
tags:
    - 前端
    - 信息技术
    - 腾讯
slug: debugtbs
title: 腾讯浏览服务相关调试 URL
---

请注意，这些 URL 必须使用`http://`协议，它们不是真实存在的网络服务，只用于启动对应的调试工具。

一般地，在相应的 IM 软件内发送并点击链接即可启动调试工具。

`inspect`相关的功能需要 USB 调试连接`chrome://inspect/`。

## 腾讯浏览服务

X5 网页引擎在 QQ 移动客户端（通常是 Android 端）中使用，也支持第三方使用。

[调试文档](https://x5.tencent.com/docs.html#debugx5)

- DebugTBS（腾讯浏览服务）: <http://debugtbs.qq.com/>
- DebugX5（X5 网页引擎）: <http://debugx5.qq.com/>（验证码为`debugx5`）
- DebugTMF（腾讯移动开发平台）: <http://debugtmf.qq.com/>
- 调试开启引导页: <https://res.imtt.qq.com/tbs_inspect/x5-debug.html>

## 微信 XWeb 引擎

XWeb 引擎在[微信 Android 客户端](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/env.html)中使用，它缺乏调试文档。

XWeb 的调试 URL 是<http://debugxweb.qq.com/>，但直接访问没有效果，需要添加参数（指令）。

一些示例：

- <http://debugxweb.qq.com/?show_webview_version>
- <http://debugxweb.qq.com/?check_xwalk_update>
- <http://debugxweb.qq.com/?inspector=true>
- <http://debugxweb.qq.com/?set_apkver=-1>
- <http://debugxweb.qq.com/?set_config_url=https://dldir1.qq.com/weixin/android/wxweb/updateconfig_wmpftest.xml&check_xwalk_update&>

可用的指令：

```java
static {
    d("cmd", false, new j1());
    c("enable_remote_debug", "inspector", false, new u1());
    d("show_webview_version", false, new f2());
    c("ignore_crash_watch", "ignore_crashwatch", true, new q2());
    d("reset_crash_count", true, new b3());
    d("clear_cache", false, new d3());
    d("clear_old_version", false, new e3());
    d("clear_all_version", false, new f3());
    c("check_update", "check_xwalk_update", false, new g3());
    d("check_plugin_update", false, new z0());
    c("set_gray_value", "set_grayvalue", false, new a1());
    d("set_config_url", false, new b1());
    d("set_plugin_config_url", false, new c1());
    c("clear_config_timestamp", "clear_config_time_stamp", false, new d1());
    d("clear_schedule", false, new e1());
    d("clear_test_setting", false, new f1());
    d("enable_check_storage", false, new g1());
    d("reset_webview_kind", false, new h1());
    d("reset_webview_kind_sys", false, new i1());
    d("reset_webview_kind_xweb", false, new k1());
    d("set_mm_config", false, new l1());
    c("set_tools_config", "set_web_config", false, new m1());
    d("set_appbrand_config", false, new n1());
    d("mm_webview_mode", false, new o1());
    d("check_files", false, new p1());
    d("multi_profile_mode", false, new q1());
    d("enable_new_debug_page", true, new r1());
    d("enable_show_version", true, new s1());
    d("enable_test_base_config", true, new t1());
    c("enable_show_fps", "show_fps", true, new v1());
    c("enable_show_save_page", "save_page", true, new w1());
    d("load_saved_page", true, new x1());
    d("clear_saved_page", true, new y1());
    d("clear_config_commands", true, new z1());
    d("recheck_config_commands", true, new a2());
    d("kill_gpu_process", true, new b2());
    d("kill_render_process", true, new c2());
    d("kill_child_process", true, new d2());
    d("kill_tools_process", true, new e2());
    d("kill_all_process", true, new g2());
    d("revert_to_apk", true, new h2());
    c("set_apk_version", "set_apkver", true, new i2());
    c("load_cache_package", "load_local_xwalk", true, new j2());
    d("load_sdcard_package", true, new k2());
    d("enable_forbid_download_code", true, new l2());
    d("enable_check_thread", true, new m2());
    d("delete_origin", true, new n2());
    d("gpu_native_crash", true, new o2());
    d("gpu_java_crash", true, new p2());
    d("render_native_crash", true, new r2());
    d("browser_native_crash", true, new s2());
    d("set_dark_mode", true, new t2());
    d("enable_debug_package", true, new u2());
    d("enable_auto_check_update", true, new v2());
    d("set_runtime_config", true, new w2());
    d("clear_all_plugin", true, new x2());
    d("install_embed_plugin", true, new y2());
    d("set_force_use_office_reader", true, new z2());
    d("disable_file_reader_cache", true, new a3());
    d("disable_file_reader_crash_detect", true, new c3());
}
```
