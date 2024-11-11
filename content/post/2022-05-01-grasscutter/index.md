---
categories: Original
date: "2022-05-01T00:00:00Z"
tags:
  - 原神
  - 私服
  - Java
  - Grasscutter
  - 逆向工程
slug: grasscutter
title: 原神私服Grasscutter部署备忘
---

<p class="notice--danger">
    这里记录的信息已经过时了，请直接参考[项目文档](https://github.com/Grasscutters/Grasscutter)。
</p>

项目地址：[Grasscutters/Grasscutter: A server software reimplementation for a certain anime game. (github.com)](https://github.com/Grasscutters/Grasscutter)

截至发稿日支持 2.6 版本客户端

## 建议

操作者需要了解计算机（网络）的基本运行原理（至少是抽象上的），了解以下词语/项目/编程语言/概念：环境变量、服务器、客户端、代理、UAC、Git、编译、Java 程序的运行、命令行、工作目录、Python、Python 的 pip、mitmproxy，并且有一定的阅读英语的能力。

## 编译和运行指引

假定操作系统为 Windows 10/11

- 安装 MongoDB Community 版本，默认设置（安装为服务）
- 安装[JDK17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- 安装 Git（可选，推荐）
- 安装 Python，勾选“将 Python 加入`PATH`”，执行`pip install mitmproxy`（可选，推荐）
- `git clone https://github.com/Grasscutters/Grasscutter.git`或者直接下载 zip 代码库（development 分支）
- 进入代码库
- `git checkout development`
- `.\gradlew.bat`
- `.\gradlew jar`
- 用上面提到的的方法，把[这个仓库里的](https://github.com/Koko-boya/Grasscutter_Resources)Resource 文件夹放进去
- `java -jar grasscutter-版本号-dev.jar`运行服务器
- 如果无法连接数据库，使用 任务管理器-服务-找到 MongoDB 项目，启动它

## 获取并配置客户端

私服目前仅支持到 2.6 版本

#### 2.6 版本客户端

国际服下载链接：

```
https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220318211020_aWEQCaw5ZERt54rm/GenshinImpact_2.6.0.zip
— Audio files —
https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220318211020_aWEQCaw5ZERt54rm/Audio_Chinese_2.6.0.zip
https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220318211020_aWEQCaw5ZERt54rm/Audio_English(US)_2.6.0.zip
https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220318211020_aWEQCaw5ZERt54rm/Audio_Japanese_2.6.0.zip
https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220318211020_aWEQCaw5ZERt54rm/Audio_Korean_2.6.0.zip
```

### 设置流量转发

#### 简单的方法：

一个启动器：

[Grasscutters/GrassClipper-X: A MiHoYo-like launcher for custom servers, better UI & insensible proxy (github.com)](https://github.com/Grasscutters/GrassClipper-X)

自动配置代理并且启动游戏

#### 复杂的方法：

安装 Python 和 mitmproxy，在代码库目录下执行一次`mitmdump -s proxy.py -k`

安装 mitmproxy 根证书`certutil -addstore root %USERPROFILE%\.mitmproxy\mitmproxy-ca-cert.cer`（管理员权限执行）

设置 IE 代理为`http://127.0.0.1:8080`或者根据设置的其他值

别忘了在不必要时删除添加的根证书（颁发者是 mitmproxy）
