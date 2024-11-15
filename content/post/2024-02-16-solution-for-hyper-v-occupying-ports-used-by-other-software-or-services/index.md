---
categories: Repost
date: "2024-02-16T00:00:00Z"
tags:
    - Windows
slug: solution-for-hyper-v-occupying-ports-used-by-other-software-or-services
title: Hyper-V 占用其他软件或服务端口解决方案
---

[来源](https://blog.csdn.net/ning521513/article/details/123524763)

---

这个问题的背景分为两部分：

1. `Windows`  中有一个「TCP 动态端口范围」，处在这个范围内的端口，有时候会被一些服务占用。在  `Windows Vista`（或  `Windows Server 2008`）之前，动态端口范围是  `1025`  到  `5000`；在  `Windows Vista`（或  `Windows Server 2008`）之后，新的默认起始端口为  `49152`，新的默认结束端口为  `65535`。
2. 如果安装了  `Hyper-V`，那么  `Hyper-V`  会为容器宿主网络服务（Windows Container Host Networking Service）随机保留一些端口号使用。

正常情况下，`Hyper-V`  虽然会在「TCP 动态端口范围」中随机挑一些端口号保留（占用），不过保留的端口号普遍比较大，就算保留几百、几千个也影响不大。但是，Windows 自动更新有时会出错，导致这个范围的起始端口被重置为  `1024`……这可就麻烦了，一些常用端口动不动就因为被保留而无法使用了。

使用命令  `netsh int ipv4 show dynamicport tcp`  可以查看目前「TCP 动态端口」的范围。

这只是一个「待选择」范围，并不代表其中的所有端口都会被保留，只是有一部分会被  `Hyper-V`  征用。使用  `netsh int ipv4 show excludedportrange protocol=tcp`  命令可以查看当前所有已经被征用了的端口。

如果这些被征用的端口范围随机挑选到  `8088`、`8000`、`3000`  等 Web 开发常用端口，那开发就会受到影响；如果挑选到其他应用软件要调用的端口，那这些应用软件就会受到影响，可以说非常坑爹了……

在说正确的解决方法前，我们先说一个在 Stack Overflow 上看到的错误解决方法，这个方法还在好几个地方被提到过。

## 2. 错误的解决方法

错误的解决方法是，运行  `net stop winnat`  停止 winnat 服务，然后再运行  `net start winnat`  启动 winnat 服务。

这个方法本质上就是重启电脑的简化版……让  `Hyper-V`  再随机初始化一些端口保留，如果正好没随机到要用的端口，那一次成功。如果还是随机到了要用的端口，那就只能多来几次。

在那个问题的回答下，我看到有一些网友说「对我有用」，也有一些网友说「对我没用」，原因就是这个方法解决问题的概率完全是随机的……

## [](https://example.com)[](https://example.com)3. 正确的解决方法

正确的解决方法很简单，就是重新设置一下「TCP 动态端口范围」，让  `Hyper-V`  只在我们设定的范围内保留端口即可。可以以管理员权限运行下面的命令，将「TCP 动态端口范围」重新设定为  `49152-65535`。如果你觉得这个范围太大，还可以改小一点。

```cmd
netsh int ipv4 set dynamic tcp start=49152 num=16384
netsh int ipv6 set dynamic tcp start=49152 num=16384
```

然后重启电脑即可。

重启电脑后，再运行命令  `netsh int ipv4 show dynamicport tcp`  查看动态端口范围，发现确实已经修改为了  `49152-65535`。现在只有这个范围内的端口可能会被保留了，基本不会影响日常使用。
