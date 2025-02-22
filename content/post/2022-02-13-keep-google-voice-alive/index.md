---
categories: Original
date: "2022-02-13T00:00:00Z"
tags:
    - Google
slug: keep-google-voice-alive
title: 保持 Google Voice 活性避免被回收的方法备忘
---

## 参考材料

[Google Voice 保号的重要性及保号方法-VPS 大玩家 (vpsdawanjia.com)](https://www.vpsdawanjia.com/801.html)

[使用 IFTTT 让 Google Voice 自动回复短信来保号-VPS 大玩家 (vpsdawanjia.com)](https://www.vpsdawanjia.com/1452.html)

[Let google voice reply SMS automatically | Study Notes (1983s.com)](https://www.1983s.com/1385.html)

## 收信

[Explore - IFTTT](https://ifttt.com/explore) 这是个自动化平台，可以设置自动发短信。

[Google Voice 保号 - IFTTT](https://ifttt.com/applets/SMGSYPzw-google-voice)

[Keep Google Voice Active - IFTTT](https://ifttt.com/applets/wtSmReHc-keep-google-voice-active)

## 回信

### Voice 设置转发信息到 Gmail

### Gmail 设置筛选器

将来自 `@txt.voice.google.com`的邮件打 voice 标签。

### Google Apps Scripts

Google Drive 添加 Google Apps Scripts（Drive 界面加号按钮，弹出菜单点击“更多”）

脚本源码：

```javascript
function autoReplier() {
    var labelObj = GmailApp.getUserLabelByName("voice");
    var gmailThreads;
    var messages;
    var sender;

    for (var gg = 0; gg < labelObj.getUnreadCount(); gg++) {
        gmailThreads = labelObj.getThreads()[gg];
        messages = gmailThreads.getMessages();
        for (var ii = 0; ii < messages.length; ii++) {
            if (messages[ii].isUnread()) {
                msg = messages[ii].getPlainBody();
                sender = messages[ii].getFrom();

                MailApp.sendEmail(
                    sender,
                    "Auto Reply",
                    "Hi, I went travelling for a few days, I'll call you later.",
                );
                messages[ii].markRead();
                messages[ii].moveToTrash();
            }
        }
    }
}
```

点击一次编辑器左上方区域的“运行”按钮，授权此 Script 使用 Gmail 的权限。

设置触发器（闹钟图标），每日一次，指定功能（Google 翻译错误，应为“函数”）为 autoReplier（应该是默认），其余默认，保存。
