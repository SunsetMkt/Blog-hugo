---
categories: Original
date: 2024-12-05T00:00:00Z
tags:
    - VMware
    - 信息技术
    - 软件
    - 逆向工程
slug: get-vmware-workstation
title: 获取 VMware Workstation Pro 的下载链接
---

> 更新：自[Mar 25, 2025](https://community.broadcom.com/vmware-cloud-foundation/question/certificate-error-is-occured-during-connecting-update-server)（[其他报告](https://community.broadcom.com/vmware-cloud-foundation/discussion/the-update-server-could-not-be-resolved)），Broadcom 已关闭`softwareupdate.vmware.com`，~~此方法不可用~~。
>
> 更新：域名现在是`softwareupdate-prod.broadcom.com`，但它没有启用 index 生成，可使用[moonheart/vmware-index](https://github.com/moonheart/vmware-index)。
>
> 快速跳转到 Broadcom 下载页面（需要账号）：
>
> <https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware%20Workstation%20Pro&freeDownloads=true>

自从 VMware 被 Broadcom 收购并允许个人免费使用[VMware Workstation Pro](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion)后，用户必须注册 Broadcom 账号才能下载安装程序，这引发了我的隐私担忧。

## TL;DR

使用[moonheart/vmware-index](https://github.com/moonheart/vmware-index)。通过此方法下载的 Workstation 不包含 VMware Tools，它在邻近位置的另一个目录下。

示例：

```plain
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.3/24583834/windows/core/
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.3/24583834/windows/core/VMware-workstation-17.6.3-24583834.exe.tar
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.3/24583834/windows/packages/
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.3/24583834/windows/packages/tools-windows-x86.tar
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.3/24583834/windows/packages/tools-windows.tar
（Linux 版本的 Tools 已弃用并被 open-vm-tools 代替）
```

## 快速开始

打开[ws-windows.xml](https://softwareupdate.vmware.com/cds/vmw-desktop/ws-windows.xml)并手动找到最新的版本号对应的 metadata，例如：

```xml
  <metadata>
    <productId>ws-windows</productId>
    <version>17.0.0</version>
    <url>ws/17.6.1/24319023/windows/core/metadata.xml.gz</url>
    <locale></locale>
  </metadata>
```

注意：URL 中应包含`core`。

将 URL 拼接到`https://softwareupdate.vmware.com/cds/vmw-desktop/`并解压[获取的 metadata.xml.gz](https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.1/24319023/windows/core/metadata.xml.gz)，获取`metadata.xml`。

找到`relativePath`：

```xml
<relativePath secureDownload="true">VMware-workstation-17.6.1-24319023.exe.tar</relativePath>
```

在`metadata.xml.gz`同级目录请求`VMware-workstation-17.6.1-24319023.exe.tar`，[获取安装程序](https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.1/24319023/windows/core/VMware-workstation-17.6.1-24319023.exe.tar)。

认为这样做很笨拙？VMware Workstation Pro 的实现比这更笨拙：

## 附录：VMware Workstation Pro for Windows 获取更新时的请求

```plaintext
https://softwareupdate.vmware.com/cds/index.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/vmrc-windows.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/ws-linux.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/fusion.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/vmrc-macos.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/vmrc-linux.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/fusion-universal.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/player-linux.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/ws-windows.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/fusion-arm64.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/player-windows.xml
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.8/7098237/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.0/14665864/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.2/19200509/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.3/5115892/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.6/5528349/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.1.2/17966106/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.5/5234757/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.9/7535481/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.0/10134415/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.4/20089737/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.0.1/21139696/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.5.0/22583795/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.0.0/6661328/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.0.1/3160714/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.5/10950780/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.0.0/2985596/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.1.1/3770994/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.0/10134415/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.1/15018445/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.7/5813279/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.5.2/23775571/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.0.0/20800274/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.1/10737736/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.2/8497320/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.5/5234757/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.9/7535481/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.3/19376536/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.0.2/21581411/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.8/7098237/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.7/12989993/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.3/19376536/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.1.2/17966106/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.1.0/13591040/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.7/5813279/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.5.2/23775571/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.1.0/3272444/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.6/16341506/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.1/7528167/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.2/4638234/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.1.0/17198959/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.2/4638234/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.3/9474260/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.1/15018445/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/info-only/ws-windows/8.0.0/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.3/12422535/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.7/17171714/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.1.1/17801498/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.6/16341506/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.0.0/16894299/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.0.2/21581411/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.0.0/16894299/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.1/18811642/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.5/16285975/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.2/15785246/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.8/14921873/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.4/12990004/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.0/4352439/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.0.0/2985596/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.1/10737736/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.1/4542065/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.6/12368378/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.1.1/3770994/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.0/24238078/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.1/24319023/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.4/10722678/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.1/4542065/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.1/7528167/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.0/24238078/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.6.1/24319023/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.1.0/17198959/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.1.0/13591040/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.0/18760230/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.1/18811642/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.5/10950780/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.3/5115892/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.0.0/6661328/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.4/10722678/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.7/17171714/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.2/8497320/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.4/12990004/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.3/12422535/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.2/10952284/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.0/14665864/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.5/16285975/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.6/12368378/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.6/5528349/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.3/9474260/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.0/18760230/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.0/7370693/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.5.1/23298084/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.0.2/10952284/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/15.5.2/15785246/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.4/20089737/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.1.0/3272444/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.4/5192485/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.5/20904516/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.7/12989993/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.5.1/23298084/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.4/5192485/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.0.1/21139696/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.0.1/3160714/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.2/19200509/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.0/7370693/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.5.0/22583795/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.5.0/4352439/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.2.5/20904516/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/16.1.1/17801498/windows/core/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/17.0.0/20800274/windows/packages/metadata.xml.gz
https://softwareupdate.vmware.com/cds/vmw-desktop/ws/14.1.8/14921873/windows/packages/metadata.xml.gz
```
