---
categories: Original
date: 2025-03-30T00:00:00Z
tags:
    - 信息技术
    - Windows
slug: desktopinfo-configuration
title: 我的 Desktop Info 配置
---

[Desktop Info](https://www.glenn.delahoy.com/desktopinfo/)（免费闭源）是[BgInfo](https://learn.microsoft.com/zh-cn/sysinternals/downloads/bginfo)的实时显示替代。

```ini
[options]
# size and position
top=0
right=0
width=400
auto-scale=1
transparency=50
# font
font-face=Segoe UI Bold
font-size=9
font-quality=6
# logging
log=%appdata%\DesktopInfo\desktopinfo.log
log-level=debugonerror

[text]
noresults=<n/a>
error=[error]
null-result=<null>
unknown=Unknown
executing=<executing>
menu-ini=选择配置
menu-export=导出
menu-reload=重载
menu-configuration=编辑配置
menu-log=打开日志文件
menu-manual=阅读手册
menu-wmode=启动窗口模式
menu-about=关于 Desktop Info
menu-quit=退出
nav-previous=上一页
nav-home=主页
nav-next=下一页

[items]
# colors
set White   = #ffffff
set Grey    = #909090
set Cyan    = #00ffff
set Magenta = #ff00ff
set Green   = #00ff00
set Orange  = #ffd000
set Yellow  = #ffff00
set Silver  = #d0d0d0
set Blue    = #0000f0
set Red     = #ff0000

# battery status lookup table
set battery1      = Disconnected
set battery2      = Connected
set battery3      = Fully Charged
set battery<null> = Not In Use

# items

# Host Info
USER=active:1,set:username,hidden:1
HOST=active:1,display:%1/%username%,text:Host
BOOTTIME=active:1,display:%short_date% %long_time%
UPTIME=active:1,interval:60,display:%1 days %2 hrs %3 mins,text:Uptime
WMI=interval:60,namespace:root\cimv2,query:Win32_Battery,display:%EstimatedChargeRemaining%% (%battery%BatteryStatus%%),no-result:AC Power,text:Battery
WMI=text:Model,namespace:root\cimv2,query:Win32_ComputerSystemProduct,display:%Vendor% %Name%
COMMENT=font-size:50%

# OS Info
OSBUILD2=active:1,display:%operating_system% %architecture% %version%,text:OS
REG=active:1,value:HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\LCUVer,display:%1,text:LCUVer
REG=active:1,value:HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\BuildLabEx,display:%1,text:BuildLabEx
COMMENT=font-size:50%

# CPU
CPUTYPE=active:1,text:CPU
CPU=interval:10,display:Tot: %1[2.0f]%\, Krnl: %2[2.0f]%\, Q: %3,text:CPU Usage
TOPPROCESSCPU=interval:10,text:Top CPU,display:%1 (pid:%2) %3[1.1f]%
COMMENT=font-size:50%

# RAM
PHYSICALRAM=interval:20,display:%1[3.1b]B / %2[3.1b]B,text:Physical RAM
TOPPROCESSMEM=interval:20,text:Top RAM,display:%1 (pid:%2) %3[1.1b]B
PAGEFAULTS=interval:20,display:Tot: %1\, Hrd: %2\, Hit: %5%
COMMENT=font-size:50%

# Display
WMI=text:Display,namespace:root\cimv2,query:Win32_VideoController,display:%Caption%,interval:30
COMMENT=font-size:50%

# Network
ALLIPADDRESS=active:1,interval:30,activeonly:1,display:%ip%,filter:-virtual
HTTPGET=source:https://detectportal.firefox.com/,display:%1,interval:30,text:Internet
COMMENT=font-size:50%

# Remote Desktop
RDS=interval:30,row-text:RDP Status,display:sid:%3 %7/%6 %8
COMMENT=font-size:50%

# Security Notice
COMMENT=text:Lock workstation before leaving. Note remote/local environment.
COMMENT=text:Keep antivirus and firewall enabled. Double check UAC prompts.
COMMENT=font-size:50%

COMMENT=text:█ Powered by Desktop Info by Glenn Delahoy
```
