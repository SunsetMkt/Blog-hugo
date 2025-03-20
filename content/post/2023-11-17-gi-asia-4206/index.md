---
categories: Original
date: 2023-11-17T00:00:00Z
tags:
  - 信息技术
  - 原神
  - 后端
  - 游戏
slug: gi-asia-4206
title: Genshin Impact Asia 服务器在从中国大陆连接时报4206错误
---

发给`ys-log-upload-os.hoyoverse.com`的错误报告提示，一个向`osasiadispatch.yuanshen.com`的请求超时。根据 Blocky 的[报告](https://blocky.greatfire.org/detail/658076/https%3A%2F%2Fosasiadispatch.yuanshen.com)，此时，`osasiadispatch.yuanshen.com`似乎被中国的网络审查系统屏蔽了（Connection was reset/Timed out）。

```json
[
  {
    "applicationId": 100001,
    "applicationName": "hk4e",
    "msgID": "<Redacted>",
    "eventTime": "<Redacted>",
    "eventId": 100003,
    "eventName": "WarningAlarm",
    "uploadContent": {
      "error_code": 4207,
      "message": "[RegionDispatch] Get Connect Error 'The request timed out' for:https://osasiadispatch.yuanshen.com/query_cur_region?version=OSRELWin4.2.0&lang=<Redacted>&platform=<Redacted>&binary=<Redacted>&time=<Redacted>&channel_id=<Redacted>&sub_channel_id=<Redacted>&account_type=<Redacted>&dispatchSeed=<Redacted>&key_id=<Redacted>&aid=<Redacted> statusCode:0 contentLength:0 contentType: dispatchConnectType:1",
      "user_id": 0,
      "auid": "<Redacted>",
      "time": <Redacted>,
      "stackTrace": "MoleMole.SuperDebug:LogToServerInternal(Boolean, String, LogType, Boolean, Int32, Int32, ErrorLevel, ErrorCategory, String, String)\nMoleMole.SuperDebug:LogToServer(LogType, String, Boolean, Int32, ErrorLevel, ErrorCategory, String, Boolean, Int32, String)\nMoleMole.SuperDebug:VeryImportantError(String, ErrorLevel, ErrorCategory, String, Boolean, Int32, Int32, String)\nNBANMAFJAKD:MoveNext()\nUnityEngine.SetupCoroutine:InvokeMoveNext(IEnumerator, IntPtr)\n",
      "exceptionSerialNum": 0,
      "frame": "",
      "deviceModel": "<Redacted>",
      "deviceName": "<Redacted>",
      "operatingSystem": "<Redacted>",
      "userName": "Test",
      "version": "4.2_rel OSRELWin4.2.0_<Redacted>",
      "guid": "uid:<Redacted>-time:<Redacted>-auid:<Redacted>-rtt:0[0,0,0]-scene:0-server:os_asia",
      "errorCode": "Default",
      "isRelease": true,
      "serverName": "os_asia",
      "projectNick": "test",
      "userNick": "Test",
      "logType": "Error",
      "subErrorCode": "0",
      "cpuInfo": "<Redacted>",
      "gpuInfo": "<Redacted>",
      "memoryInfo": "<Redacted>",
      "clientIp": "<Redacted>",
      "errorLevel": "Low",
      "errorCategory": "None",
      "notifyUser": ""
    }
  }
]
```
