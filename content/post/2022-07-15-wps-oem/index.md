---
categories: Original
date: 2022-07-15T00:00:00Z
tags:
  - WPS
  - 信息技术
  - 软件
  - 逆向工程
slug: wps-oem
title: WPS Office Pro（金山 WPS 企业版）和金山 PDF 专业版的 OEM 配置方法
---

## 引子

曾经，互联网上流传着多个“WPS 政府版”，例如：`http://【移除具体链接】/WPS Office 2019 珠海市政府专业版(11.8.2.8506).exe`（目前已 404）。

这些版本均属于金山 WPS 企业版，并且使用 OEM 配置实现各种定制化功能（例如选择部门列表、加载界面 Logo、部分功能定制）。

## 调查

```plain
名称: WPS Office 2019 珠海市政府专业版(11.8.2.8506).exe
大小: 204752016 字节 (195 MiB)
CRC32: C8542180
CRC64: 0BA5F54C38AF0252
SHA256: 07b87db783e2b5e0fa18ecc5b30afd1ac0dda729d293fe8c5ce3533f4adac02c
SHA1: 55468ca9bc8704a36c4e59e009e3d181a994026b
BLAKE2sp: 317f75c43da8c156f386099c6f50687d8e88aadf4c5226dfdbd06e01befcdffa
```

通过使用`7-Zip`提取样本`WPS Office 2019 珠海市政府专业版(11.8.2.8506).exe`内文件，可以看到以下文件夹：

```plain
├─$PLUGINSDIR
└─$_11_
```

其中，`$PLUGINSDIR`目录下的文件未见明显作用，`$_11_`目录下的文件是安装程序及 OEM 配置文件。

对于`$_11_`目录下的文件，可以猜测其作用：

```plain
│  $EXEFILE # 安装程序，可以直接运行，或添加exe后缀名双击运行
│  oem.ini # OEM配置文件
│  oem_enterprise.txt # 未知，可能记录具体企业编号
│  oem_static.exe # 未知，似乎不会在这里用到
│
├─OemFile
│  ├─cfgs
│  │  └─oeminfo
│  │          locateList.txt # 邮编部门列表，按格式可修改
│  │
│  └─oem
│          companylogo.png # 企业Logo，可修改
│
└─oeminfo
        oem.exe # 根据oem.ini配置，猜测为处理OEM配置的程序
        settings.reg # 根据oem.ini配置，猜测为oem.exe会使用的安装时注册表文件
        uninstall.reg # 根据oem.ini配置，猜测为oem.exe会使用的卸载时注册表文件
```

### `oem_enterprise.txt`

```plain
XXXX_XXXX

```

其中，X 代表一位数字，内容已脱敏。

### `oem.ini`

```ini
;/DWPS_SETUP /DSETUP_ICON=setup_2019_ep

[feature]
【移除非必要内容】


[Support]
Support2016SN=true

[Setup]
Sn=【移除序列号】
UpdateSvrCustomAddress=http://updatepro.wps.cn/updateserver/update
LocateUser=【移除具体OEM名称】
FinishActionFile=oeminfo\oem.exe
FinishActionParameter=/copydir=OemFile\oem /ShellVarContext=current /RelativeDir=INSTDIR /todir='oem'
FinishActionWait=1
FinishActionFile2=oeminfo\oem.exe
FinishActionParameter2=/copydir=OemFile\cfgs\oeminfo /ShellVarContext=current /RelativeDir=INSTDIR /todir='office6\cfgs\oeminfo'
FinishActionWait2=1
PlacedDir3=
FinishActionFile3=oeminfo\oem.exe
FinishActionParameter3=/exefile='office6\cfgs\oeminfo\Install.exe' /ShellVarContext=current /RelativeDir=INSTDIR
FinishActionWait3=1
FinishActionFile4=oeminfo\oem.exe
FinishActionParameter4=/regfile=settings.reg
FinishActionWait4=1
UninstActionFile=office6\cfgs\oeminfo\oem.exe
UninstActionParameter=/regfile=uninstall.reg
UninstActionWait=1
UninstActionFile2=office6\cfgs\oeminfo\oem.exe
UninstActionParameter2=/ShellVarContext=current /RelativeDir=INSTDIR /rmdir='oem'
UninstActionWait2=1
UninstActionFile3=office6\cfgs\oeminfo\oem.exe
UninstActionParameter3=/ShellVarContext=current /RelativeDir=INSTDIR /rmdir='office6\cfgs\oeminfo'
UninstActionWait3=1
InstExeCount=4
UninstExeCount=3

```

其中，`[feature]`疑似配置功能信息，取决于 OEM 需求；

`[Support]`中的`Support2016SN=true`必须存在，下文`[Setup]`的`Sn`才能正常使用；

`LocateUser`一旦存在，安装程序就会在安装前提示用户选择`locateList.txt`中的部门名称，若此文件不存在则会因无法选择导致无法进行下一步安装。

### `settings.reg`

【移除无分析意义的内容】

修改注册表中 WPS 的默认保存格式，推测为本样本安装包 OEM 的需求。

### `uninstall.reg`

【移除无分析意义的内容】

一些卸载注册表的操作。

### `locateList.txt`

```plain
【移除具体机构名称】


1.【移除六位数邮编】#【移除部门名称】
2.【移除六位数邮编】#【移除部门名称】
【移除不必要的重复举例】


```

第一行为机构名称，空两行，此后格式为：`编号.邮编#部门名称`，每行一个部门，邮编和部门名称可以为空。文件最后的两个空行似乎不是必要的。

因此，如下的示例是可行的：

```plain
我是机构名称


1.000000#我是部门名称
2.#


```

### 关于 Sn

`oem.ini`中提供的 Sn 不能从 WPS Office 中手动输入注册，其仅可在安装时通过`oem.ini`提供。

## 安装程序和最简 OEM 安装配置

WPS Office Pro 的任意版本安装程序（包括官网提供的试用版）似乎都会尝试获取同目录下的`oem.ini`文件，若存在则会自动使用。

在本文发布之时，官网提供的试用版下载链接为`https://wps-cn-ep.ks3-cn-beijing.ksyun.com/wps/download/ep/WPS2019/WPSPro_11.8.2.11542.exe` [Archive](https://web.archive.org/web/20230117072344/https://wps-cn-ep.ks3-cn-beijing.ksyun.com/wps/download/ep/WPS2019/WPSPro_11.8.2.11813.exe)

因此，最简的可激活 OEM 安装配置方法为：

- 下载官网提供的试用版安装程序
- 在安装程序所在目录下建立`oem.ini`文件，内容为：

```ini
[Support]
Support2016SN=true

[Setup]
Sn=【自行填入序列号】
```

- 运行安装程序

这样，安装程序会自动激活 WPS Office Pro。

## Sn

在研究中，我们使用了从`WPS Office 2019 珠海市政府专业版(11.8.2.8506).exe`中提取的序列号用于测试，请自行获取样本安装程序以便手动提取。

## 关于金山 PDF 专业版

金山 PDF 专业版似乎不使用`oem.ini`中的`SN`来获取序列号（但仍从中获取其他配置信息）。在本文发布之时，官网提供的试用版下载链接为`https://zt-pdf.wpscdn.cn/wps/download/ep/PDF/PDFPro_11.8.0.8857.exe`

一个样本是这样的：

```ini
;/DEP_PDF_SETUP /DUSER_LEVEL

[Support]
QingLoginOfflineMode=true
DocTabRoamingGuide=false
CloudFonts=false
CommandTriggerInfoCollect=false
GoogleAnalytics=false
DisableGlobalInfoCollect=true
[Server]
IntranetPluginsAuthServer = "【移除非必要内容】"
IntranetPluginsICServer = "【移除非必要内容】"
[Setup]
SN=【移除序列号，注意这里的没有用】
SnInvisiable=1
PlacedDir=
FinishActionFile=oeminfo\oem.exe
FinishActionParameter=/exefile='office6\ksomisc.exe' /fileparam='-addsn 【移除序列号，注意这里才有用】' /ShellVarContext=current /RelativeDir=INSTDIR
FinishActionWait=1
FinishActionFile2=oeminfo\oem.exe
FinishActionParameter2=/regfile=test.reg
FinishActionWait2=1
UninstActionFile=office6\cfgs\oeminfo\oem.exe
UninstActionParameter=/regfile=xiezai.reg
UninstActionWait=1
InstExeCount=2
UninstExeCount=1
```

另一个样本：

```ini
;/DEP_PDF_SETUP /DUSER_LEVEL

[feature]
【移除非必要内容】

[Support]
IntranetVersion=true
IntranetDrive=false
IntranetPluginsVersion=true
IntranetPluginsAuthType=2
QingLoginOfflineMode=true
DocTabRoamingGuide=false
CloudFonts=false
CommandTriggerInfoCollect=false
GoogleAnalytics=false
EnterpriseDocpermission=true

[Server]
DomainCfgLocalCustomPath = "cfgs/domain.cfg"
IntranetPluginsAuthServer = "【移除非必要内容】"
IntranetPluginsICServer = "【移除非必要内容】"

[Setup]
ProductVersion=【移除具体OEM名称】
StartMenuDir=【移除具体OEM名称】
SnInvisiable=1
UpdateSvrDefaultAddress=【移除非必要内容】
UpdateSvrCustomAddress=【移除非必要内容】
FinishActionFile=oeminfo\oem.exe
FinishActionParameter=/copydir=OemFile\office6 /ShellVarContext=current /RelativeDir=INSTDIR /todir='office6\cfgs'
FinishActionWait=1
PlacedDir2=
FinishActionFile2=oeminfo\oem.exe
FinishActionParameter2=/exefile='office6\ksomisc.exe' /fileparam='-addsn 【移除序列号，注意这里的没有用】' /ShellVarContext=current /RelativeDir=INSTDIR
FinishActionWait2=1
FinishActionFile3=oeminfo\oem.exe
FinishActionParameter3=/regfile=【移除非必要内容】
FinishActionWait3=1
UninstActionFile=office6\cfgs\oeminfo\oem.exe
UninstActionParameter=/regfile=test.reg
UninstActionWait=1
InstExeCount=3
UninstExeCount=1
```

根据`FinishActionParameter`行，我们很容易推断出，这个配置可以手动完成。即在 WPS PDF 安装目录`C:\Program Files (x86)\Kingsoft\Kingsoft PDF\版本号\`下执行`.\office6\ksomisc.exe -addsn 【移除序列号，注意这里才有用】`。

尽管如此，和金山 WPS 企业版不同的是，WPS PDF 的序列号仍然需要联网认证才能正常使用。

## WPS Pro 2023

参考：[WPS Office 的 OEM.INI 配置文件加密算法的逆向分析](https://youko.netlify.app/2024-08-25-wps-office-%E7%9A%84-oem.ini-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95%E7%9A%84%E9%80%86%E5%90%91%E5%88%86%E6%9E%90/)，[文中提到的加密算法](<https://gchq.github.io/CyberChef/#recipe=AES_Encrypt(%7B'option':'UTF8','string':'F9AF610AE6164C73B78B0A99D8B72890'%7D,%7B'option':'Hex','string':''%7D,'ECB','Raw','Raw',%7B'option':'Hex','string':''%7D)To_Base64('A-Za-z0-9%2B/%3D')Find_/_Replace(%7B'option':'Simple%20string','string':'%2B'%7D,'_',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'/'%7D,'-',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'%3D'%7D,'.',true,false,true,false)>)，[反过来解密](<https://gchq.github.io/CyberChef/#recipe=Find_/_Replace(%7B'option':'Simple%20string','string':'.'%7D,'%3D',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'-'%7D,'/',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'_'%7D,'%2B',true,false,true,false)From_Base64('A-Za-z0-9%2B/%3D',true,false)AES_Decrypt(%7B'option':'UTF8','string':'F9AF610AE6164C73B78B0A99D8B72890'%7D,%7B'option':'Hex','string':''%7D,'ECB','Raw','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)>)。

下载链接：`https://wps-cn-ep.wpscdn.cn/wps/download/ep/WPS2023/WPSPro_12.8.2.18205.exe` (需要 Referer 为`https://ep.wps.cn/downloads`) [Archive](https://web.archive.org/web/20240927061534/https://wps-cn-ep.wpscdn.cn/wps/download/ep/WPS2023/WPSPro_12.8.2.18205.exe)

无法在不 [Patch 安装程序](https://github.com/YukiIsait/WPSHashPatcher)的情况下使用自定义配置文件，但自行输入[序列号](<https://gchq.github.io/CyberChef/#recipe=AES_Encrypt(%7B'option':'UTF8','string':'F9AF610AE6164C73B78B0A99D8B72890'%7D,%7B'option':'Hex','string':''%7D,'ECB','Raw','Raw',%7B'option':'Hex','string':''%7D)To_Base64('A-Za-z0-9%2B/%3D')Find_/_Replace(%7B'option':'Simple%20string','string':'%2B'%7D,'_',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'/'%7D,'-',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'%3D'%7D,'.',true,false,true,false)&input=VEozR04tOU5UR1EtR0xGN0MtWUVOOFgtVEpXTUw>)或许是可能的。

这部分 Credits to [WPS Office 2023 雨糖科技特别版](https://raincandy.tech/wpsoffice_umrse_2023/)。

## 也参考

[2019 from 423down](https://www.423down.com/8890.html)

[WPS VBA 安装程序备份](VBA_Setup.exe)

[2023 from 423down](https://www.423down.com/15937.html)

[RainCandyTech/WPSOfficeConf](https://github.com/RainCandyTech/WPSOfficeConf)
