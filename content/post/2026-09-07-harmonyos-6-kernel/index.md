---
categories: Original
date: 2026-09-07T00:00:00Z
tags:
    - 信息技术
    - 华为
    - 操作系统
slug: harmonyos-6-kernel
title: HarmonyOS 6 的操作系统内核分析尝试（以 HUAWEI Mate 60 Pro 为例）
---

## TL;DR

任何人都应该看看[Huawei Open Source Release Center](https://consumer.huawei.com/en/opensource/)的 HarmonyOS 6 机型 GPL 源码包。

> 猜想：HongMeng Kernel is a hybrid operating system kernel developed by Huawei, consisting of a proprietary microkernel and an embedded Linux 5.10 (referred to as liblinux) that handles drivers, file systems, and networking.

## 引子

> HarmonyOS NEXT 从操作系统内核、文件系统，到编程语言、编译器/运行时、编程框架，再到设计系统、集成开发环境，以及 AI 框架和大模型等，全面焕新。[HarmonyOS NEXT Beta 重磅发布：有史以来最大一次升级 - 华为](https://www.huawei.com/cn/news/2024/6/hdc2024)
>
> 在发布会过程中，余承东再次明确了鸿蒙 Next 的定位——这是首个剔除了 Linux 内核和 AOSP（Android 开放源代码项目）的代码的鸿蒙系统。他表示，华为是从上到下构建根技术操作系统底座，从系统内核、文件系统，到编程语言、编译器/运行时、编程框架，再到设计系统、集成开发环境以及 AI 框架、AI 大模型等核心技术，均实现全栈自研和全面突破。[一文读懂华为鸿蒙 Next 发布会：纯血鸿蒙，闯过第一关\_腾讯新闻](https://news.qq.com/rain/a/20241023A0379D00)
>
> 4 个月前，华为在开发者大会 2024（HDC）上 HarmonyOS NEXT Beta 发布。原生鸿蒙操作系统完全摆脱了传统 Linux 内核和安卓开源项目 AOSP 的依赖，不再兼容 Android 应用，并于 10 月 8 日开启了公测。[华为原生鸿蒙，杀出重围 \_ 东方财富网](https://finance.eastmoney.com/a/202410233214490645.html)
>
> 《科创板日报》21 日讯，华为常务董事、终端 BG 董事长余承东称：纯血鸿蒙从内到外实现全栈自研。“鸿蒙是基于 OpenHarmony 打造的全场景智能操作系统，这是一个源自中国、自主可控的操作系统。” 原生鸿蒙打破了移动操作系统两极格局，实现操作系统核心技术的自主可控、安全可靠，为世界提供更优选择。[余承东：纯血鸿蒙从内到外实现全栈自研](https://www.cls.cn/detail/1710948)
>
> 毫无疑问，这是 HarmonyOS 自诞生以来的最大一次升级换代。HarmonyOS NEXT 不依赖传统的 Unix 内核和 Linux 内核，而是依靠自主的鸿蒙内核。这就意味着，鸿蒙操作系统最终将去掉 Linux 内核以及安卓的 AOSP 代码，不兼容安卓，成为“纯血”鸿蒙。[21 深度｜鸿蒙 1778 天“纯血”之路 - 21 经济网](https://www.21jingji.com/article/20240621/herald/634aed09df22bb58ce43252b93156804.html)
>
> 内核子系统 Linux Kernel LiteOS Kernel …… [2021HDC](https://www.harmonyos.com/resource/ppt/activity/sub-forum2/2021HDC-HarmonyOS-2-5.pdf)

## 注意

在下文中，**事实**以正文形式出现。

> 在下文中，**猜想**以引用形式出现。

## 启发

这是华为荣耀的《荣耀》音乐提取尝试的副产物，在研究过程中获得了 HarmonyOS 6 OTA 包的提取方式 [SimomYung/unpack_huawei_package](https://github.com/SimomYung/unpack_huawei_package)。

## 目标设备

本文以[ALN-AL00,ALN-AL80,ALN-AL10,ALN-AL10P_HarmonyOS6.0.0](https://consumer.huawei.com/en/opensource/)（`HUAWEI Mate 60 Pro,Allen,HarmonyOS6.0.0`）为例，因其易于寻找来自华为 CDN 的固件包 URL。

## 固件包的研究

在任意现代 GNU/Linux 操作系统（包含 WSL）中执行操作。

### update_full_base.zip

通过[SimomYung/unpack_huawei_package](https://github.com/SimomYung/unpack_huawei_package)提供的示例[Mate 60 Pro HarmonyOS 6.0.0.108 SP6C00E107R5P7 固件包](http://update.dbankcdn.com/download/data/pub_13/HWHOTA_hota_900_9/b2/v3/LQOlUJB8RjivKL2kfHFtQg/full/update_full_base.zip)和提取程序，可以发现它（`update_full_base.zip`）包含以下内容：

```sh
BOARDID_LIST.mbn:     ASCII text, with CRLF line terminators
VERSION.mbn:          ASCII text, with no line terminators
board_list:           ASCII text, with CRLF line terminators
build_tools.zip:      Zip archive data, made by v2.0 UNIX, extract using at least v2.0, last modified Oct 16 2025 18:50:08, uncompressed size 31, method=deflate
firmware.zip:         Zip archive data, made by v2.0 UNIX, extract using at least v2.0, last modified Jun 06 2024 08:00:00, uncompressed size 141, method=deflate
package_info:         ASCII text
packageinfo.mbn:      ASCII text
permission_hash.bin:  data
permission_hash.json: JSON text data
ptable.img:           DOS/MBR boot sector; partition 1 : ID=0xee, start-CHS (0x3ff,255,63), end-CHS (0x3ff,255,63), startsector 1, 0 sectors, extended partition table (last)
sec_thee_header:      Certificate, Version=3 Certificate, Version=01
sec_xloader_header:   Certificate, Version=3 Certificate, Version=01
update.bin:           data
update.tag:           ASCII text
updater_firmware:     ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-musl-aarch64.so.1, BuildID[md5/uuid]=8241cdba4b56549ee551d4e144a91544, stripped
```

其中，`update.bin`可被`unpack_huawei_package`提取。

> `firmware.zip`可能是含有 U-Boot 的基带固件。
>
> `updater_firmware`和`build_tools.zip`可能参与执行刷机过程。

### update.bin

```sh
bl2.img:                 Certificate, Version=3 Certificate, Version=01
board_list.img:          ASCII text, with CRLF line terminators
boot.img:                Certificate, Version=3 Certificate, Version=01
chip_prod.img:           EROFS filesystem, compat: SB_CHKSUM MTIME, blocksize=12, exslots=0, uuid=776B5DD7-4FCC-A844-99ED-AA1C72324F4C, incompat: LZ4_0PADDING
cust.img:                EROFS filesystem, compat: SB_CHKSUM MTIME, blocksize=12, exslots=0, uuid=D5B36168-F0E9-554C-829F-EF49EA05F61A, incompat: LZ4_0PADDING
dacc.img:                Certificate, Version=3 Certificate, Version=01
dtbo.img:                Certificate, Version=3 Certificate, Version=01
eng_chipset.img:         data
eng_system.img:          data
ext_rvt.img:             data
fastboot.img:            Certificate, Version=3 Certificate, Version=01
fw_cpu_lpctrl.img:       Certificate, Version=3 Certificate, Version=01
fw_ddr_lpctrl.img:       Certificate, Version=3 Certificate, Version=01
fw_dtb.img:              Certificate, Version=3 Certificate, Version=01
fw_gpu_lpctrl.img:       Certificate, Version=3 Certificate, Version=01
fw_hifi.img:             Certificate, Version=3 Certificate, Version=01
fw_lpm3.img:             Certificate, Version=3 Certificate, Version=01
fw_ufsdev.img:           Certificate, Version=3 Certificate, Version=01
hhee.img:                Certificate, Version=3 Certificate, Version=01
isp_firmware.img:        Certificate, Version=3 Certificate, Version=01
kpatch.img:              data
lowpower_para.img:       Certificate, Version=3 Certificate, Version=01
modem_driver.img:        Linux rev 1.0 ext2 filesystem data, UUID=772e7403-2448-41df-85f4-e1b2cb191f75 (extents) (64bit) (large files) (huge files)
modem_fw.img:            Linux rev 1.0 ext4 filesystem data, UUID=e19ee0be-2e4f-4f49-b7bb-2b0fd92d7044 (extents) (64bit) (large files) (huge files)
modem_patch_nv.img:      data
modem_vendor.img:        Linux rev 1.0 ext2 filesystem data, UUID=27234a16-54cb-4033-b2df-27b97d6b7ce4 (extents) (64bit) (large files) (huge files)
modemnvm_cust.img:       Linux rev 1.0 ext4 filesystem data, UUID=6e792294-9711-4ee1-b73c-3dc51195330e (extents) (64bit) (large files) (huge files)
modemnvm_update.img:     Linux rev 1.0 ext4 filesystem data, UUID=1a02c55c-6bed-4478-999e-14ddbcb72813 (extents) (64bit) (large files) (huge files)
npu.img:                 Certificate, Version=3 Certificate, Version=01
package_info.img:        ASCII text
patch.img:               EROFS filesystem, compat: SB_CHKSUM MTIME, blocksize=12, exslots=0, uuid=E1A4DCDB-06C2-AC4B-815C-E084F8C92693, incompat: LZ4_0PADDING
permission_hash_bin.img: data
ptable.img:              DOS/MBR boot sector; partition 1 : ID=0xee, start-CHS (0x3ff,255,63), end-CHS (0x3ff,255,63), startsector 1, 0 sectors, extended partition table (last)
ramdisk.img:             data
rvt.img:                 data
sensorhub.img:           Certificate, Version=3 Certificate, Version=01
sensorhub_log_dic.img:   data
sys_prod.img:            EROFS filesystem, compat: SB_CHKSUM MTIME, blocksize=12, exslots=0, uuid=9D30CD83-F035-E047-A541-8FFBE6D4DDBC, incompat: LZ4_0PADDING
system.img:              EROFS filesystem, compat: SB_CHKSUM MTIME, blocksize=12, exslots=0, uuid=6A42BAC0-5CF5-2F4F-B8BF-5A5854ED0D3A, incompat: LZ4_0PADDING
teeos.img:               Certificate, Version=3 Certificate, Version=01
thee.img:                Certificate, Version=3 Certificate, Version=01
trustfirmware.img:       Certificate, Version=3 Certificate, Version=01
tzsp.img:                Certificate, Version=3 Certificate, Version=01
update_bak_rvt.img:      data
update_rvt.img:          data
updater_boot.img:        Certificate, Version=3 Certificate, Version=01
updater_boot_bak.img:    Certificate, Version=3 Certificate, Version=01
updater_ramdisk.img:     data
updater_ramdisk_bak.img: data
updater_vendor.img:      data
updater_vendor_bak.img:  data
vendor.img:              EROFS filesystem, compat: SB_CHKSUM MTIME, blocksize=12, exslots=0, uuid=EE0206B2-FFE6-164E-AF70-A05A7975EF5A, incompat: LZ4_0PADDING
xloader.img:             Certificate, Version=3 Certificate, Version=01
```

> 标记为 Certificate, Version=3 Certificate, Version=01 的文件极有可能是被特定证书签名容器包裹的镜像载荷。
>
> 这使得离线解密内核镜像（`boot.img`）几乎不可能，推测对于同一型号的设备，有同一固定密钥保存在 TEE 中，用于处理每次刷入/运行时的内核镜像解密。

尽管如此，仍然有一些未加密的镜像可以被检查。下面是有价值的发现：

### system.img

```sh
$ sudo find . -iname "*selinux*"
./system/bin/selinux_check_access
./system/bin/selinuxexeccon
./system/etc/selinux
./system/lib64/chipset-pub-sdk/libselinux.z.so
./system/lib64/chipset-sdk-sp/libselinux.z.so
./system/lib64/init/libselinuxadp.z.so
./system/lib64/platformsdk/libselinux.z.so
```

### modem_driver.img

```sh
$ modinfo ./modem_driver.ko
filename:       /mnt/modem_driver/./modem_driver.ko
description:    FIPC Driver
license:        GPL
alias:          network hardware accelerator driver
license:        GPL
description:    smart packet engine(pfa) driver
author:         bsp4 network
license:        GPL
description:    smart packet engine(pfa) driver
license:        GPL
license:        GPL
license:        GPL
license:        GPL
alias:          network hardware accelerator driver
license:        GPL
description:    smart packet engine(pfa) driver
license:        GPL
description:    IPCMSG Driver
license:        GPL
description:    Specific DRA Driver
license:        GPL v2
description:    Sim HW Service driver
license:        GPL v2
license:        GPL v2
vermagic:       5.10.97-oh SMP mod_unload modversions aarch64
name:           modem_driver
intree:         Y
depends:
alias:          of:N*T*Cpfa
alias:          of:N*T*CpfaC*
alias:          of:N*T*Csim-hotplug0
alias:          of:N*T*Csim-hotplug0C*
alias:          of:N*T*Csim-hotplug1
alias:          of:N*T*Csim-hotplug1C*
parm:           pcs_log_level:pcs log level (uint)
parm:           rnic_log_level:rnic log level (uint)
```

注意：`vermagic: 5.10.97-oh SMP mod_unload modversions aarch64`。

### vendor.img

```sh
$ cat ./etc/fstab.kirin9000s
# fstab file.
# <src>                                                  <mnt_point> <type>   <mnt_flags and options>  <fs_mgr_flags>
/dev/block/platform/fa500000.ufs/by-name/system         /usr        erofs    ro  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/system         /usr        ext4     ro,barrier=1  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/vendor         /vendor     erofs    ro  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/vendor         /vendor     ext4     ro,barrier=1  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/sys_prod       /sys_prod   erofs    ro  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/sys_prod       /sys_prod   ext4     ro,barrier=1  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/chip_prod      /chip_prod  erofs    ro  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/chip_prod      /chip_prod  ext4     ro,barrier=1  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/cust           /cust       erofs    ro  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/cust           /cust       ext4     ro,barrier=1  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/version        /version    erofs    ro  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/version        /version    ext4     ro,barrier=1  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/preload        /preload    erofs    ro  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/preload        /preload    ext4     ro,barrier=1  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/patch          /patch_hw   erofs    ro  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/patch          /patch_hw   ext4     ro,barrier=1  wait,required,hvb
/dev/block/platform/fa500000.ufs/by-name/log            /log        ext4     rw,nosuid,nodev,noatime,barrier=1  wait,required
/dev/block/platform/fa500000.ufs/by-name/userdata       /data       hmfs     noatime,nosuid,nodev,usrquota,grpquota,prjquota,reserve_root=32768,resgid=1065,fscrypt=1:aes-256-cts:aes-256-xts  wait,fscompression,fsdedup,fscasefold
/dev/block/platform/fa500000.ufs/by-name/misc           /misc       none     none  wait,required
/dev/block/platform/fa500000.ufs/by-name/modem_vendor   /vendor/modem/modem_vendor   ext4     ro,barrier=1  wait,required,hvb,nofail
/dev/block/platform/fa500000.ufs/by-name/modem_driver   /vendor/modem/modem_driver   ext4     ro,barrier=1  wait,required,hvb,nofail
```

```sh
$ cat ./etc/init.kirin9000s.cfg
{
    "jobs" : [{
            "name" : "pre-init",
            "cmds" : [
                "export PATH /usr/local/bin:/bin:/usr/bin:/system/bin:/vendor/bin"
            ]
        }, {
            "name" : "init",
            "cmds" : [
                "chown root system /sys/class/devfreq/ddrfreq/max_freq",
                "chmod 644 /sys/class/devfreq/ddrfreq/max_freq",
                "chown root system /sys/class/devfreq/ddrfreq/min_freq",
                "chmod 644 /sys/class/devfreq/ddrfreq/min_freq",
                "chown root system /sys/class/devfreq/ddrfreq/ddr_bandwidth",
                "chmod 644 /sys/class/devfreq/ddrfreq/ddr_bandwidth",
                "chown root system /sys/class/devfreq/ddrfreq/cur_freq",
                "chmod 644 /sys/class/devfreq/ddrfreq/cur_freq",
                "chown root system /sys/class/devfreq/ddrfreq/available_frequencies",
                "chmod 644 /sys/class/devfreq/ddrfreq/available_frequencies",
                "chown system system /sys/class/devfreq/ddrfreq_latency/perf_scen_select",
                "chmod 0660 /sys/class/devfreq/ddrfreq_latency/perf_scen_select",
                "chown system system /sys/class/devfreq/ddrfreq_latency/perf_scen_notify",
                "chmod 0660 /sys/class/devfreq/ddrfreq_latency/perf_scen_notify",
                "chown system system /dev/acpuddr_link_governor_level",
                "chmod 660 /dev/acpuddr_link_governor_level",
                "write /sys/class/devfreq/ddrfreq/min_freq 5000000000",
                "write /sys/class/devfreq/ddrfreq/max_freq 5000000000",
                "write /sys/class/devfreq/ddrfreq_latency/min_freq 5000000000",
                "write /sys/class/devfreq/ddrfreq_latency/max_freq 5000000000",
                "write /sys/class/devfreq/l1busfreq_latency/min_freq 1067000000",
                "write /sys/class/devfreq/l1busfreq_latency/max_freq 1067000000",
                "write /sys/class/devfreq/ddrfreq_up_threshold/max_freq 5000000000",
                "write /sys/class/devfreq/ddrfreq_up_threshold/min_freq 5000000000",
                "chown system system /sys/kernel/eas/mips_enabled",
                "chmod 660 /sys/kernel/eas/mips_enabled",
                "chown system system /sys/kernel/eas/mips_task_enable",
                "chmod 660 /sys/kernel/eas/mips_task_enable",
                "chown system system /sys/kernel/eas/mips_cpu_report_policy",
                "chmod 660 /sys/kernel/eas/mips_cpu_report_policy",
                "chown system system /sys/kernel/eas/mips_task_report_policy",
                "chmod 660 /sys/kernel/eas/mips_task_report_policy",
                "chown system system /sys/kernel/eas/mips_pid_control_target_load",
                "chmod 660 /sys/kernel/eas/mips_pid_control_target_load",
                "chown system system /sys/kernel/eas/mips_freq_pid",
                "chmod 660 /sys/kernel/eas/mips_freq_pid",
                "chown system system /sys/kernel/eas/futex_opt_spin_enable",
                "chmod 660 /sys/kernel/eas/futex_opt_spin_enable",
                "chown system system /sys/kernel/eas/specific_threads_vip_prio",
                "chmod 660 /sys/kernel/eas/specific_threads_vip_prio",
                "chown system system /sys/devices/system/cpu/cpufreq/policy0/scaling_max_freq",
                "chmod 660 /sys/devices/system/cpu/cpufreq/policy0/scaling_max_freq",
                "chown system system /sys/devices/system/cpu/cpufreq/policy0/scaling_min_freq",
                "chmod 660 /sys/devices/system/cpu/cpufreq/policy0/scaling_min_freq",
                "chown system system /sys/devices/system/cpu/cpufreq/policy1/scaling_max_freq",
                "chmod 660 /sys/devices/system/cpu/cpufreq/policy1/scaling_max_freq",
                "chown system system /sys/devices/system/cpu/cpufreq/policy1/scaling_min_freq",
                "chmod 660 /sys/devices/system/cpu/cpufreq/policy1/scaling_min_freq",
                "chown system system /sys/devices/system/cpu/cpufreq/policy2/scaling_max_freq",
                "chmod 660 /sys/devices/system/cpu/cpufreq/policy2/scaling_max_freq",
                "chown system system /sys/devices/system/cpu/cpufreq/policy2/scaling_min_freq",
                "chmod 660 /sys/devices/system/cpu/cpufreq/policy2/scaling_min_freq",
                "chown system system /sys/devices/system/cpu/cpu0/online",
                "chmod 660 /sys/devices/system/cpu/cpu0/online",
                "chown system system /sys/devices/system/cpu/cpu1/online",
                "chmod 660 /sys/devices/system/cpu/cpu1/online",
                "chown system system /sys/devices/system/cpu/cpu2/online",
                "chmod 660 /sys/devices/system/cpu/cpu2/online",
                "chown system system /sys/devices/system/cpu/cpu3/online",
                "chmod 660 /sys/devices/system/cpu/cpu3/online",
                "chown system system /sys/devices/system/cpu/cpu4/online",
                "chmod 660 /sys/devices/system/cpu/cpu4/online",
                "chown system system /sys/devices/system/cpu/cpu5/online",
                "chmod 660 /sys/devices/system/cpu/cpu5/online",
                "chown system system /sys/devices/system/cpu/cpu6/online",
                "chmod 660 /sys/devices/system/cpu/cpu6/online",
                "chown system system /sys/devices/system/cpu/cpu7/online",
                "chmod 660 /sys/devices/system/cpu/cpu7/online",
                "chown system system /sys/devices/system/cpu/cpu8/online",
                "chmod 660 /sys/devices/system/cpu/cpu8/online",
                "chown system system /sys/devices/system/cpu/cpu9/online",
                "chmod 660 /sys/devices/system/cpu/cpu9/online",
                "chown system system /sys/devices/system/cpu/cpu10/online",
                "chmod 660 /sys/devices/system/cpu/cpu10/online",
                "chown system system /sys/devices/system/cpu/cpu11/online",
                "chmod 660 /sys/devices/system/cpu/cpu11/online",
                "chown system system /sys/devices/virtual/thermal/thermal_zone0/boost",
                "chmod 660 /sys/devices/virtual/thermal/thermal_zone0/boost",
                "chown system system /sys/devices/virtual/thermal/thermal_zone0/boost_timeout",
                "chmod 660 /sys/devices/virtual/thermal/thermal_zone0/boost_timeout",
                "chown system system /sys/kernel/eas/predl_enable",
                "chmod 660 /sys/kernel/eas/predl_enable",
                "chown system system /sys/kernel/eas/predl_window_size",
                "chmod 660 /sys/kernel/eas/predl_window_size",
                "chown system system /sys/class/hw_thermal/temp/shell_back/temp",
                "chmod 0664 /sys/class/hw_thermal/temp/shell_back/temp",
                "chown system system /sys/class/hw_thermal/temp/shell_frame/temp",
                "chmod 0664 /sys/class/hw_thermal/temp/shell_frame/temp",
                "chown system system /sys/class/hw_thermal/temp/shell_front/temp",
                "chmod 0664 /sys/class/hw_thermal/temp/shell_front/temp",
                "chown system system /sys/class/hw_thermal/temp/ambient",
                "chmod 660 /sys/class/hw_thermal/temp/ambient",
                "chown system system /sys/bus/platform/drivers/huawei,camcfgdev/guard_thermal",
                "chmod 660 /sys/bus/platform/drivers/huawei,camcfgdev/guard_thermal",
                "chown system system /sys/class/its/its/its_mode",
                "chmod 0660 /sys/class/its/its/its_mode",
                "chown system system /sys/class/devfreq/gpufreq/max_freq",
                "chmod 664 /sys/class/devfreq/gpufreq/max_freq",
                "chown system system /sys/class/devfreq/gpufreq/min_freq",
                "chmod 664 /sys/class/devfreq/gpufreq/min_freq",
                "chown system system /sys/class/devfreq/gpufreq/cur_freq",
                "chmod 664 /sys/class/devfreq/gpufreq/cur_freq",
                "chown system system /sys/class/devfreq/gpufreq/available_frequencies",
                "chmod 660 /sys/class/devfreq/gpufreq/available_frequencies",
                "chown system system /sys/devices/platform/fed40000.mali/core_mask",
                "chmod 660 /sys/devices/platform/fed40000.mali/core_mask",
                "chown system system /sys/devices/platform/gputop/perf_freq",
                "chmod 660 /sys/devices/platform/gputop/perf_freq",
                "chown system system /sys/devices/platform/gputop/cur_freq",
                "chmod 660 /sys/devices/platform/gputop/cur_freq",
                "chown system system /sys/devices/platform/gputop/available_frequencies",
                "chmod 660 /sys/devices/platform/gputop/available_frequencies",
                "chown system system /sys/kernel/eas/boost",
                "chmod 0660 /sys/kernel/eas/boost",
                "chown system system /sys/kernel/eas/capacity_margin",
                "chmod 0660 /sys/kernel/eas/capacity_margin",
                "chown system system /sys/kernel/eas/task_boost_limit",
                "chmod 0660 /sys/kernel/eas/task_boost_limit",
                "chown system system /sys/class/thermal/thermal_zone0/mode",
                "chmod 0660 /sys/class/thermal/thermal_zone0/mode",
                "chown system system /sys/class/thermal/thermal_zone0/trip_point_0_temp",
                "chmod 0660 /sys/class/thermal/thermal_zone0/trip_point_0_temp",
                "chown system system /sys/class/thermal/thermal_zone0/trip_point_1_temp",
                "chmod 0660 /sys/class/thermal/thermal_zone0/trip_point_1_temp",
                "chown system system /sys/class/thermal/thermal_zone0/trip_point_2_temp",
                "chmod 0660 /sys/class/thermal/thermal_zone0/trip_point_2_temp",
                "chown system system /sys/class/thermal/thermal_zone0/sustainable_power",
                "chmod 0660 /sys/class/thermal/thermal_zone0/sustainable_power",
                "chown system system /sys/class/thermal/thermal_zone1/mode",
                "chmod 0660 /sys/class/thermal/thermal_zone1/mode",
                "chown system system /sys/class/thermal/thermal_zone1/type",
                "chmod 0440 /sys/class/thermal/thermal_zone1/type",
                "chown system system /sys/class/thermal/thermal_zone1/trip_point_0_temp",
                "chmod 0660 /sys/class/thermal/thermal_zone1/trip_point_0_temp",
                "chown system system /sys/class/thermal/thermal_zone1/sustainable_power",
                "chmod 0660 /sys/class/thermal/thermal_zone1/sustainable_power",
                "chown system system sys/class/thermal/thermal_zone0/optimal_ipa/optimal_ipa_state",
                "chmod 660 sys/class/thermal/thermal_zone0/optimal_ipa/optimal_ipa_state",
                "chown system system /sys/kernel/perfhub/cpuaffinity",
                "chmod 0660 /sys/kernel/perfhub/cpuaffinity",
                "chown system system /sys/devices/platform/e9fc0000.hvgr/power_policy",
                "chmod 0660 /sys/devices/platform/e9fc0000.hvgr/power_policy",
                "chown system system /sys/devices/virtual/venc_class/vcodec_venc/venc_freq",
                "chown system system /sys/devices/platform/mm,ion/sys_pool_watermark",
                "chmod 0660 /sys/devices/platform/mm,ion/sys_pool_watermark",
                "chown system system /sys/devices/platform/mm,ion/smem_pool_watermark",
                "chmod 0660 /sys/devices/platform/mm,ion/smem_pool_watermark",
                "chown system system /sys/class/devfreq/ddrfreq_latency/perf_scen_select",
                "chmod 0660 /sys/class/devfreq/ddrfreq_latency/perf_scen_select",
                "chown system system /sys/class/devfreq/ddrfreq_latency/perf_scen_notify",
                "chmod 0660 /sys/class/devfreq/ddrfreq_latency/perf_scen_notify",
                "chown system system /sys/devices/virtual/venc_class/vcodec_venc/venc_frame_power_off",
                "chown system system /dev/hisi_perf_ctrl",
                "chmod 660 /dev/hisi_perf_ctrl",
                "chown system system /sys/class/devfreq/gpufreq/gpu_scene_aware/user_set_freq",
                "chmod 0660 /sys/class/devfreq/gpufreq/gpu_scene_aware/user_set_freq",
                "chown system system /sys/class/devfreq/gpufreq/gpu_scene_aware/user_set_util",
                "chmod 0660 /sys/class/devfreq/gpufreq/gpu_scene_aware/user_set_util",
                "chown system system /sys/class/devfreq/gpufreq/gpu_scene_aware/scene",
                "chmod 0660 /sys/class/devfreq/gpufreq/gpu_scene_aware/scene",
                "chown system system /sys/class/devfreq/gpufreq/gpu_scene_aware/vfreq_enable",
                "chmod 0660 /sys/class/devfreq/gpufreq/gpu_scene_aware/vfreq_enable",
                "chown system system /sys/devices/platform/fed40000.mali/runtime_pm_delay",
                "chmod 0660 /sys/devices/platform/fed40000.mali/runtime_pm_delay",
                "write /sys/module/nve_ap_kernel/parameters/nve /dev/block/by-name/nvme",
                "write /sys/module/reclaim_acct/parameters/reclaimacct_disable 0",
                "wait /dev/nve0",
                "chmod 0660 /dev/nve0",
                "chown system system /dev/sensorhub_lake",
                "chown root system /dev/nve0",
                "chmod 666 /dev/hvgr0",
                "chown system graphics /dev/hvgr0",
                "chown composer_host composer_host /sys/devices/virtual/graphics/dpu_res/ddr_freq",
                "chmod 640 /sys/devices/virtual/graphics/dpu_res/ddr_freq",
                "chown composer_host composer_host /sys/devices/virtual/graphics/fb0/dfr_target_frame_rate",
                "chmod 200 /sys/devices/virtual/graphics/fb0/dfr_target_frame_rate",
                "chown composer_host composer_host /sys/devices/virtual/gfx_builtin/gfx_builtin/dfr_target_frame_rate",
                "chmod 200 /sys/devices/virtual/gfx_builtin/gfx_builtin/dfr_target_frame_rate",
                "chown composer_host composer_host /sys/devices/virtual/graphics/fb0/comp_frame_index",
                "chmod 440 /sys/devices/virtual/graphics/fb0/comp_frame_index",
                "chown composer_host composer_host /sys/devices/virtual/gfx_dp/gfx_dp/comp_frame_index",
                "chmod 440 /sys/devices/virtual/gfx_dp/gfx_dp/comp_frame_index",
                "chown composer_host composer_host /sys/devices/virtual/gfx_builtin/gfx_builtin/comp_frame_index",
                "chmod 440 /sys/devices/virtual/gfx_builtin/gfx_builtin/comp_frame_index",
                "chown composer_host composer_host /sys/devices/virtual/graphics/fb0/brightness",
                "chmod 640 /sys/devices/virtual/graphics/fb0/brightness",
                "chown composer_host composer_host /sys/devices/virtual/graphics/fb0/max_brightness",
                "chmod 440 /sys/devices/virtual/graphics/fb0/max_brightness",
                "chown composer_host composer_host /sys/devices/virtual/gfx_builtin/gfx_builtin/brightness",
                "chmod 640 /sys/devices/virtual/gfx_builtin/gfx_builtin/brightness",
                "chown composer_host composer_host /sys/devices/virtual/gfx_builtin/gfx_builtin/max_brightness",
                "chmod 440 /sys/devices/virtual/gfx_builtin/gfx_builtin/max_brightness",
                "write /proc/sys/kernel/hung_task_panic 1",
                "write /proc/sys/kernel/hung_task_timeout_secs 90",
                "write /sys/kernel/hungtask/enable on",
                "write /sys/kernel/hungtask/monitorlist whitelist,init,appspawn,hdf_devmgr,power_host,samgr,accountmgr,render_service,foundation,media_service,camera_service,multimodalinput,audio_policy,softbus_server,wifi_manager_se,accesstoken_ser,screenlock_serv,ohos.sceneboard",
                "chown composer_host composer_host /sys/devices/virtual/graphics/fb0/vsync_enable",
                "chmod 200 /sys/devices/virtual/graphics/fb0/vsync_enable",
                "chown composer_host composer_host /sys/devices/virtual/gfx_builtin/gfx_builtin/vsync_enable",
                "chmod 200 /sys/devices/virtual/gfx_builtin/gfx_builtin/vsync_enable",
                "chown composer_host composer_host /sys/devices/virtual/graphics/fb0/vsync_event",
                "chmod 440 /sys/devices/virtual/graphics/fb0/vsync_event",
                "chown composer_host composer_host /sys/devices/virtual/gfx_builtin/gfx_builtin/vsync_event",
                "chmod 440 /sys/devices/virtual/gfx_builtin/gfx_builtin/vsync_event",

                "mkdir /dev/cpuctl/boost",
                "mkdir /dev/cpuctl/key-background",
                "mkdir /dev/cpuctl/foreground",
                "mkdir /dev/cpuctl/top-app",
                "mkdir /dev/cpuctl/background",
                "mkdir /dev/cpuctl/system-background",

                "chown system system /dev/cpuctl/boost",
                "chown system system /dev/cpuctl/key-background",
                "chown system system /dev/cpuctl/boost/tasks",
                "chown system system /dev/cpuctl/key-background/tasks",
                "chmod 0664 /dev/cpuctl/boost/tasks",
                "chmod 0664 /dev/cpuctl/key-background/tasks",

                "chown system system /dev/cpuctl/cpu.boost",
                "chown system system /dev/cpuctl/foreground/cpu.boost",
                "chown system system /dev/cpuctl/top-app/cpu.boost",
                "chown system system /dev/cpuctl/top-app/cpu.uclamp.latency_sensitive",
                "chown system system /dev/cpuctl/boost/cpu.boost",
                "chown system system /dev/cpuctl/background/cpu.boost",
                "chown system system /dev/cpuctl/system-background/cpu.boost",
                "chown system system /dev/cpuctl/key-background/cpu.boost",
                "chmod 0664 /dev/cpuctl/cpu.boost",
                "chmod 0664 /dev/cpuctl/foreground/cpu.boost",
                "chmod 0664 /dev/cpuctl/top-app/cpu.boost",
                "chmod 0660 /dev/cpuctl/top-app/cpu.uclamp.latency_sensitive",
                "chmod 0664 /dev/cpuctl/boost/cpu.boost",
                "chmod 0664 /dev/cpuctl/background/cpu.boost",
                "chmod 0664 /dev/cpuctl/system-background/cpu.boost",
                "chmod 0664 /dev/cpuctl/key-background/cpu.boost",

                "chown system system /dev/cpuctl/foreground/cpu.vip_prio",
                "chown system system /dev/cpuctl/top-app/cpu.vip_prio",
                "chown system system /dev/cpuctl/boost/cpu.vip_prio",
                "chown system system /dev/cpuctl/key-background/cpu.vip_prio",
                "chmod 0664 /dev/cpuctl/foreground/cpu.vip_prio",
                "chmod 0664 /dev/cpuctl/top-app/cpu.vip_prio",
                "chmod 0664 /dev/cpuctl/boost/cpu.vip_prio",
                "chmod 0664 /dev/cpuctl/key-background/cpu.vip_prio",

                "write /dev/cpuctl/foreground/cpu.top_task 1",
                "write /dev/cpuctl/top-app/cpu.top_task 1",
                "write /dev/cpuctl/top-app/cpu.uclamp.latency_sensitive 1",

                "mkdir /dev/cpuctl/vip",
                "chown system system /dev/cpuctl/vip",
                "chown system system /dev/cpuctl/vip/cpu.vip_prio",
                "chown system system /dev/cpuctl/vip/tasks",
                "chmod 0664 /dev/cpuctl/vip/cpu.vip_prio",
                "chmod 0664 /dev/cpuctl/vip/tasks",
                "chown system system /dev/cpuctl/vip/cpu.boost",
                "chmod 0664 /dev/cpuctl/vip/cpu.boost",
                "chown system system /dev/cpuctl/vip/cpu.uclamp.latency_sensitive",
                "chmod 0664 /dev/cpuctl/vip/cpu.uclamp.latency_sensitive",
                "write /dev/cpuctl/vip/cpu.uclamp.latency_sensitive 1",
                "write /dev/cpuctl/vip/cpu.top_task 1",

                "chown system system /sys/class/devfreq/l3c_devfreq/max_freq",
                "chmod 660 /sys/class/devfreq/l3c_devfreq/max_freq",
                "chown system system /sys/class/devfreq/l3c_devfreq/min_freq",
                "chmod 660 /sys/class/devfreq/l3c_devfreq/min_freq",
                "chmod 0660 /sys/devices/system/cpu/cpufreq/policy0/scaling_governor",
                "chown system system /sys/devices/system/cpu/cpufreq/policy0/scaling_governor",
                "chmod 0660 /sys/devices/system/cpu/cpufreq/policy1/scaling_governor",
                "chown system system /sys/devices/system/cpu/cpufreq/policy1/scaling_governor",
                "chmod 0660 /sys/devices/system/cpu/cpufreq/policy2/scaling_governor",
                "chown system system /sys/devices/system/cpu/cpufreq/policy2/scaling_governor",

                "chmod 0440 /proc/hifidsp/hifi",
                "chown root audio /proc/hifidsp/hifi",
                "chmod 0440 /proc/hifidsp/hifi_pcm_read",
                "chown root audio /proc/hifidsp/hifi_pcm_read",
                "chmod 0440 /proc/hifidsp/hifi_volume_meter",
                "chown root audio /proc/hifidsp/hifi_volume_meter",

                "chown system system /sys/devices/platform/drg/drg0/enable",
                "chmod 0660 /sys/devices/platform/drg/drg0/enable",

                "chown system system /sys/devices/platform/drg/drg1/enable",
                "chmod 0660 /sys/devices/platform/drg/drg1/enable",

                "chown system system /sys/devices/platform/drg/drg2/enable",
                "chmod 0660 /sys/devices/platform/drg/drg2/enable",

                "chown system system /sys/devices/platform/drg/drg3/enable",
                "chmod 0660 /sys/devices/platform/drg/drg3/enable",
                "write /sys/devices/platform/drg/drg3/enable 0",

                "chown system system /sys/devices/platform/drg/drg4/enable",
                "chmod 0660 /sys/devices/platform/drg/drg4/enable",
                "write /sys/devices/platform/drg/drg4/enable 0",

                "chown system system /sys/devices/platform/drg/drg5/enable",
                "chmod 0660 /sys/devices/platform/drg/drg5/enable",

                "mkdir /dev/cpuctl/cam2stage",
                "chmod 0755 /dev/cpuctl/cam2stage",
                "chown media system /dev/cpuctl/cam2stage",
                "chown media system /dev/cpuctl/cam2stage/cgroup.procs",
                "chown media system /dev/cpuctl/cam2stage/tasks",
                "chown media system /dev/cpuctl/cam2stage/cpu.shares",
                "chown media system /dev/cpuctl/cam2stage/load.min",
                "chown media system /dev/cpuctl/cam2stage/load.max",
                "mkdir /dev/cpuset/cam2stage",
                "chmod 0755 /dev/cpuset/cam2stage",
                "chown media system /dev/cpuset/cam2stage",
                "chown media system /dev/cpuset/cam2stage/cgroup.procs",
                "chown media system /dev/cpuset/cam2stage/tasks",
                "chown media system /dev/cpuset/cam2stage/cpus",
                "chown media system /dev/cpuset/cam2stage/mems",
                "write /dev/cpuset/cam2stage/mems 0",
                "write /dev/cpuset/cam2stage/cpus 0-7",
                "chown system system /sys/kernel/eas/hisi/thermal_intelligent_enable",
                "chmod 0660 /sys/kernel/eas/hisi/thermal_intelligent_enable",
                "chown system system /sys/kernel/eas/hisi/thermal_intelligent_whitelist",
                "chmod 0660 /sys/kernel/eas/hisi/thermal_intelligent_whitelist"

            ]
        }, {
            "name" : "post-init",
            "cmds" : []
        }, {
            "name" : "post-fs",
            "cmds" : [
                "chmod 0440 /proc/uid_cputime/show_uid_stat",
                "chown system system /proc/uid_cputime/show_uid_stat",
                "chown system system /proc/uid_cputime/remove_uid_range",
                "write /proc/sys/net/ipv4/tcp_rmem 524288 2097152 16777216"
            ]
        }, {
            "name" : "late-fs",
            "cmds" : [
                "mount debugfs debugfs /sys/kernel/debug",
                "chmod 0222 /sys/kernel/debug/tracing/trace_marker",
                "chmod 0222 /sys/kernel/tracing/trace_marker",
                "chmod 0775 /sys/kernel/debug"
            ]
        }, {
            "name" : "post-fs-data",
            "cmds" : [
                "mkdir /data/lost+found 0770 root root",
                "mkdir /data/hisi_logs 0770 root system",
                "write /proc/sys/kernel/hyperhold/remove 1",
                "rmdir /data/vendor/hyperhold",
                "mkdir /data/service/el1/0/hyperhold 0600 root root",
                "symlink /data/service/el1/0/hyperhold /data/vendor/hyperhold",
                "write /proc/data-ready 1"
            ]
        }, {
            "name" : "boot",
            "cmds" : [
                "seteswap ${const.resourceschedule.memmgr.eswapSize}",
                "swapoff /dev/block/zram0",
                "write /sys/block/zram0/reset 1",
                "write /sys/block/zram0/hyperhold_inline_crypto_reg 1",
                "write /proc/sys/kernel/hyperhold/space_size ${const.resourceschedule.memmgr.eswapSize}",
                "write /proc/sys/kernel/hyperhold/enable enable",
                "write /proc/sys/kernel/hyperhold_nc/space_size ${const.resourceschedule.memmgr.ncEswapSize}",
                "write /proc/sys/kernel/hyperhold_nc/enable enable",
                "write /proc/sys/kernel/hyperhold/zram_same enable",
                "write /sys/block/zram0/group readwrite\n",
                "write /sys/block/zram0/disksize ${const.resourceschedule.memmgr.zram.disksize}M",
                "write /sys/block/zram0/dedup_enable 0",
                "mkswap /dev/block/zram0",
                "swapon /dev/block/zram0",
                "write /proc/sys/vm/enable_stop_page_referencing 1",
                "write /dev/memcg/memory.zram_wm_ratio 30",
                "write /proc/sys/vm/kswapd_track_load_policy 1",
                "write /proc/sys/vm/shrinker_number_limit 2",
                "write /proc/sys/vm/shrinker_percent_limit 1024",
                "chown system system /dev/hwdps",
                "chown system system /proc/getslice",
                "chmod 0660 /dev/hwdps"
            ]
        }, {
            "name" : "param:bootevent.boot.completed=true",
            "condition" : "bootevent.boot.completed=true",
            "cmds" : [
                "write /sys/class/devfreq/memlat_c0/governor mips",
                "write /sys/class/devfreq/memlat_c1/governor mips",
                "write /sys/class/devfreq/memlat_c2/governor mips",
                "write /sys/class/devfreq/l3_memlat_c0/governor mips",
                "write /sys/class/devfreq/l3_memlat_c1/governor mips",
                "write /sys/class/devfreq/l3_memlat_c2/governor mips",

                "write /sys/kernel/eas/mips_enabled 1",
                "write /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/ipc_min_sample_time 3000000",
                "write /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/target_ratio 400,600",
                "write /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/mipsmem_enable 1",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/ipc_min_sample_time",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/ipc_min_sample_time",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/mipsmem_enable",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/mipsmem_enable",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/target_ratio",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/target_ratio",
                "chmod 0640 /sys/devices/system/cpu/mips_mem/cluster0/mips_ddr/freq_map",

                "write /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/ipc_min_sample_time 3000000",
                "write /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/target_ratio 1000",
                "write /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/mipsmem_enable 1",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/ipc_min_sample_time",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/ipc_min_sample_time",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/mipsmem_enable",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/mipsmem_enable",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/target_ratio",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/target_ratio",
                "chmod 0640 /sys/devices/system/cpu/mips_mem/cluster0/mips_l3/freq_map",

                "write /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/ipc_min_sample_time 3000000",
                "write /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/target_ratio 300,600",
                "write /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/mipsmem_enable 1",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/ipc_min_sample_time",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/ipc_min_sample_time",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/mipsmem_enable",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/mipsmem_enable",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/target_ratio",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/target_ratio",
                "chmod 0640 /sys/devices/system/cpu/mips_mem/cluster1/mips_ddr/freq_map",

                "write /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/ipc_min_sample_time 3000000",
                "write /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/target_ratio 400,600",
                "write /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/mipsmem_enable 1",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/ipc_min_sample_time",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/ipc_min_sample_time",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/mipsmem_enable",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/mipsmem_enable",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/target_ratio",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/target_ratio",
                "chmod 0640 /sys/devices/system/cpu/mips_mem/cluster1/mips_l3/freq_map",

                "write /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/ipc_min_sample_time 3000000",
                "write /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/target_ratio 250,500",
                "write /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/mipsmem_enable 1",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/ipc_min_sample_time",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/ipc_min_sample_time",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/mipsmem_enable",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/mipsmem_enable",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/target_ratio",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/target_ratio",
                "chmod 0640 /sys/devices/system/cpu/mips_mem/cluster2/mips_ddr/freq_map",

                "write /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/ipc_min_sample_time 3000000",
                "write /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/target_ratio 400,800",
                "write /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/mipsmem_enable 1",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/ipc_min_sample_time",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/ipc_min_sample_time",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/mipsmem_enable",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/mipsmem_enable",
                "chown system system /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/target_ratio",
                "chmod 0660 /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/target_ratio",
                "chmod 0640 /sys/devices/system/cpu/mips_mem/cluster2/mips_l3/freq_map",

                "write /sys/class/devfreq/ddrfreq/min_freq 0",
                "write /sys/class/devfreq/ddrfreq/max_freq 0",
                "write /sys/class/devfreq/ddrfreq_latency/min_freq 0",
                "write /sys/class/devfreq/ddrfreq_latency/max_freq 0",
                "write /sys/class/devfreq/ddrfreq_up_threshold/max_freq 5000000000",
                "write /sys/class/devfreq/ddrfreq_up_threshold/min_freq 5000000000",
                "write /sys/class/devfreq/l1busfreq_latency/min_freq 0",
                "write /sys/class/devfreq/l1busfreq_latency/max_freq 0",

                "write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor schedutil",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/go_hispeed_load 85",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/hispeed_freq 1287000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/target_loads 75:1018000:80:1430000:85",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/above_hispeed_delay 19000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/min_sample_time 59000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/boostpulse_duration 160000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/fast_ramp_down 1",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/fast_ramp_up 1",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/top_task_hist_size 3",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/top_task_stats_policy 2",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/top_task_stats_empty_window 0",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/ed_task_running_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/ed_new_task_running_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/ed_task_waiting_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy0/schedutil/io_is_busy 1",
                "chmod 0660 /sys/devices/system/cpu/cpufreq/policy0/scaling_governor",
                "chown system system /sys/devices/system/cpu/cpufreq/policy0/scaling_governor",

                "write /sys/devices/system/cpu/cpufreq/policy1/scaling_governor schedutil",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/go_hispeed_load 85",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/hispeed_freq 1570000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/target_loads 75:1570000:80",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/above_hispeed_delay 10000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/min_sample_time 10000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/timer_slack 30000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/fast_ramp_down 1",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/fast_ramp_up 1",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/top_task_hist_size 3",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/top_task_stats_policy 2",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/top_task_stats_empty_window 1",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/ed_task_running_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/ed_new_task_running_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/ed_task_waiting_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy1/schedutil/io_is_busy 1",
                "chmod 0660 /sys/devices/system/cpu/cpufreq/policy1/scaling_governor",
                "chown system system /sys/devices/system/cpu/cpufreq/policy1/scaling_governor",

                "write /sys/devices/system/cpu/cpufreq/policy2/scaling_governor schedutil",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/go_hispeed_load 85",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/hispeed_freq 1992000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/target_loads 80:1696000:85",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/above_hispeed_delay 10000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/min_sample_time 10000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/timer_slack 30000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/fast_ramp_down 1",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/fast_ramp_up 1",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/top_task_hist_size 3",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/top_task_stats_policy 2",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/top_task_stats_empty_window 1",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/ed_task_running_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/ed_new_task_running_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/ed_task_waiting_duration 1000000000",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/io_is_busy 1",
                "write /sys/devices/system/cpu/cpufreq/policy2/schedutil/iowait_upper_limit 2120000",
                "chmod 0660 /sys/devices/system/cpu/cpufreq/policy2/scaling_governor",
                "chown system system /sys/devices/system/cpu/cpufreq/policy2/scaling_governor",

                "write /sys/kernel/eas/boot_boost 0",
                "write /sys/kernel/eas/sd_capacity_margin 1280:1280:1280",
                "write /sys/kernel/eas/capacity_margin 1204:1280:1280",
                "write /sys/kernel/eas/task_boost_limit 460",
                "chown system system /sys/kernel/eas/walt_init_task_load_pct",
                "chmod 0660 /sys/kernel/eas/walt_init_task_load_pct",
                "write /sys/kernel/eas/smt_hide 1",
                "chown system system /sys/devices/system/cpu/core_ctl/cluster2/min_cpus",
                "chmod 660 /sys/devices/system/cpu/core_ctl/cluster2/min_cpus",
                "chown system system /sys/devices/system/cpu/core_ctl/cluster2/max_cpus",
                "chmod 660 /sys/devices/system/cpu/core_ctl/cluster2/max_cpus",
                "chown system system /sys/devices/system/cpu/core_ctl/cluster2/boost",
                "chmod 660 /sys/devices/system/cpu/core_ctl/cluster2/boost",
                "chown system system /sys/devices/system/cpu/core_ctl/cluster2/spread_affinity",
                "chmod 660 /sys/devices/system/cpu/core_ctl/cluster2/spread_affinity",
                "chown system system /sys/devices/system/cpu/cpuidle/lp_mode",
                "chmod 660 /sys/devices/system/cpu/cpuidle/lp_mode",
                "write /sys/devices/system/cpu/core_ctl/cluster2/busy_thres 75",
                "write /sys/devices/system/cpu/core_ctl/cluster2/idle_thres 40",
                "write /sys/devices/system/cpu/core_ctl/cluster2/offline_delay_ms 90",
                "write /sys/devices/system/cpu/core_ctl/cluster2/task_thres 3",
                "write /sys/devices/system/cpu/core_ctl/cluster2/open_thres 80",
                "write /sys/devices/system/cpu/core_ctl/cluster2/close_thres 30",
                "write /sys/devices/system/cpu/core_ctl/cluster2/min_cpus 0",
                "write /sys/devices/system/cpu/core_ctl/cluster2/update_interval_ms 19",
                "chown system system /sys/kernel/debug/freqdump/loadmonitor_enable",
                "chmod 660 /sys/kernel/debug/freqdump/loadmonitor_enable",
                "chown system system /sys/kernel/debug/freqdump/loadmonitor_disable",
                "chmod 660 /sys/kernel/debug/freqdump/loadmonitor_disable",
                "write /dev/cpuctl/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/background/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/boost/cpu.timer_slack_pct 10",
                "write /dev/cpuctl/cam2stage/cpu.timer_slack_pct 0",
                "write /dev/cpuctl/camera-daemon/cpu.timer_slack_pct 10",
                "write /dev/cpuctl/foreground/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/graphic/cpu.timer_slack_pct 0",
                "write /dev/cpuctl/key-background/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/limit/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/low-background/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/nnapi-hal/cpu.timer_slack_pct 10",
                "write /dev/cpuctl/rt/cpu.timer_slack_pct 0",
                "write /dev/cpuctl/system-background/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/system/cpu.timer_slack_pct 20",
                "write /dev/cpuctl/top-app/cpu.timer_slack_pct 0",
                "write /dev/cpuctl/vip/cpu.timer_slack_pct 0",
                "write /dev/cpuctl/vip/cpu.smt_expeller 2",

                "chown system system /sys/class/camerafs/node/flash_lightness",
                "chmod 664 /sys/class/camerafs/node/flash_lightness",
                "chown system system /sys/class/camerafs/node/flash_get_id_list",
                "chmod 664 /sys/class/camerafs/node/flash_get_id_list",
                "chown system system /sys/devices/platform/l3extension/control/mode",
                "chmod 660 /sys/devices/platform/l3extension/control/mode"
            ]
        }, {
            "name" : "param:bootevent.boot.completed=true",
            "condition" : "bootevent.boot.completed=true",
            "cmds" : [
                "write /proc/rdr/stats/boot_time 1"
            ]
        }, {
            "name" : "param:bootevent.boot.completed=true && param:const.runmode=factory",
            "condition" : "bootevent.boot.completed=true && const.runmode=factory",
            "cmds" : [
                "chmod 0622 /sys/module/alarmtimer/parameters/hw_alarm_stop"
            ]
        }
    ]
}
```

## GPL 源码的研究

尽管用户空间有明显的 Linux 痕迹，仍然无法严格判断实际的内核使用。

[Huawei Open Source Release Center](https://consumer.huawei.com/en/opensource/)提供了`ALN-AL00,ALN-AL80,ALN-AL10,ALN-AL10P_HarmonyOS6.0.0`的[开源声明](https://download-c1.huawei.com/download/downloadCenter?downloadId=13B26AC3D12D2864E72250C79A89322A&siteCode=worldwide&file=false)和[GPL 源码包](https://download-c1.huawei.com/download/downloadCenter?downloadId=07D5F9AB638A5DE99AE5598219E2CE88&version=BBC8A6C46D910C51B6C9724D8AD760CB&siteCode=worldwide)。

### 微内核存在吗？

存在：`kernel\kernel\hongmeng\hm-verif-kernel`，但是，`kernel\kernel\linux-5.10-lts`也被引用。

### `kernel\build.conf`

```conf
prepare=devhost hm-compatible-headers hw-securec hm-network-libs hm-filesystems-libs hm-security-libs hm-libvsync hm-ulibs hm-openeuler-kernel
modules=hw-securec hm-filesystems-libs hm-network-libs hm-ulibs hm-security-libs devhost hm-openeuler-kernel
hm-security.product=charlotteoh
liblinux.build=linux-5.10.0-charlotteoh
```

### `kernel\scripts\open_source\hm-openeuler-kernel\build.sh`

```sh
#!/bin/bash
# Copyright (c) Huawei Technologies Co., Ltd. 2024-2033. All rights reserved.
set -e
LOCAL_DIR=$(dirname $(readlink -f "$0"))
echo "LOCAL_DIR: ${LOCAL_DIR}"
if [ -e "$TOPDIR/set_env.sh" ]; then
	source $TOPDIR/set_env.sh
	export CLANG_PREBUILTS_PATH="${PROJ_PATH}"/prebuilts/clang/ohos/linux-x86_64/llvm/
else
	export PROJ_PATH=${TOPDIR}
	export CLANG_PREBUILTS_PATH="${TOPDIR}"/output/tools/

	export PRODUCT="$(grep CONFIG_VENDOR_CHIP_PREFIX -rn ${TOPDIR}/scripts/open_source/hm-openeuler-kernel/config)"
	HW_PRODUCT=${PRODUCT#*=}
	export HW_PRODUCT=${HW_PRODUCT//\"/}

	CONFIG_VENDOR_CHIP_SUFFIX="$(grep CONFIG_VENDOR_CHIP_SUFFIX -rn ${TOPDIR}/scripts/open_source/hm-openeuler-kernel/config)"
	CHIP_TYPE=${CONFIG_VENDOR_CHIP_SUFFIX#*=}
	export chip_type=${CHIP_TYPE//\"/}

	sed -i "s|CLANG_PREBUILTS_PATH ?=.*|CLANG_PREBUILTS_PATH ?= ${TOPDIR}/output/tools/|g" ${TOPDIR}/open_source/hm-openeuler-kernel/Makefile
fi
source $TOPDIR/scripts/common.sh
if [ -e "$TOPDIR/open_source/hm-openeuler-kernel/build" ];then
    rm -rf $TOPDIR/open_source/hm-openeuler-kernel/build
fi
mkdir -p $TOPDIR/open_source/hm-openeuler-kernel/build
cd $TOPDIR/open_source/hm-openeuler-kernel/build
export LD_LIBRARY_PATH="${CLANG_PREBUILTS_PATH}"/bin
PLAT=${HW_PRODUCT}
export PLAT=${PLAT}
export USE_HM_KERNEL=true

if [ ! -d "$TOPDIR/open_source/hm-openeuler-kernel/build/include" ]; then
    mkdir -p $TOPDIR/open_source/hm-openeuler-kernel/build/include/
fi
unset CFLAGS CPPFLAGS CXXFLAGS LDFLAGS MACHINE
cp "${TOPDIR}"/scripts/open_source/hm-openeuler-kernel/config "${TOPDIR}"/open_source/hm-openeuler-kernel/build/.config
make -C $TOPDIR/open_source/hm-openeuler-kernel  O=$TOPDIR/open_source/hm-openeuler-kernel/build ARCH=arm64 olddefconfig USE_HM_KERNEL=true
make -j 64  pac_path="${CLANG_PREBUILTS_PATH}"/plugins/PAC -C $TOPDIR/open_source/hm-openeuler-kernel O=$TOPDIR/open_source/hm-openeuler-kernel/build ARCH=arm64 \
        LLVM=1 LLVM_IAS=1 \
        V=1 CCACHE=ccache \
        TARGET_BOARD_PLATFORM=$PLAT \
        OBB_PRODUCT_NAME=$PLAT \
        KBUILD_LIBLINUX_FILTER_OBJS=1 \
        KBUILD_MODPOST_WARN=1 \
        CONFIG_KCOV_ENABLE= \
        CROSS_COMPILE=aarch64-linux-ohos- \
        HMSDKSYSROOTPATH=$TOPDIR/output/aarch64 LOCALVERSION="" \
        LIBLINUX_FILTER_OBJS=gen_liblinux_objs.txt \
        LIBLINUX_EXTRA_FILTER_OBJS= \
        chip_type=$chip_type \
        modem_build_with_log=false \
        TARGET_BUILD_VARIANT=user \
        cust_config=cust_modem_user \
	CC="ccache ${LD_LIBRARY_PATH}/clang  -mlittle-endian -Wa,-march=armv8.4-a  --target=aarch64-linux-ohos     -Wno-unused-command-line-argument     --ld-path=${LD_LIBRARY_PATH}/ld.lld           -L$TOPDIR/output/aarch64/lib     -Dhongmeng=1     -D__hongmeng=1     -D__hongmeng__=1     -Ulinux     -U__linux     -U__linux__     -U__gnu_linux__     -fno-emulated-tls     -fno-builtin-bcmp     -Wl,--apply-dynamic-relocs     -Wl,--dynamic-linker=/lib/hmld.so.elf          -mno-outline-atomics          -std=gnu99      --sysroot=$TOPDIR/output/aarch64" LD="${LD_LIBRARY_PATH}/ld.lld  --sysroot=$TOPDIR/output/aarch64 " NM="${LD_LIBRARY_PATH}/llvm-nm" HMSDKSYSROOTPATH="$TOPDIR/output/aarch64" \
        vmlinux modules dynlibs
unset CFLAGS CPPFLAGS CXXFLAGS LDFLAGS MACHINE
 # First install the modules
if (grep -q -i -e '^CONFIG_MODULES=y$' .config); then
    make -j 32 ARCH=arm64 DEPMOD=echo MODLIB=$TOPDIR/output/aarch64/lib/modules/linux-5.10.97-oh modules_install
    rm "$TOPDIR/output/aarch64/lib/modules/linux-5.10.97-oh/build"
    rm "$TOPDIR/output/aarch64/lib/modules/linux-5.10.97-oh/source"
    # If the kernel/ directory is empty remove it to prevent QA issues
    rmdir --ignore-fail-on-non-empty "$TOPDIR/output/aarch64/lib/modules/linux-5.10.97-oh/kernel"
else
    echo "no modules to install"
fi

# Then install liblinux.a
install -m 0755 -d $TOPDIR/output/aarch64/lib/modules/linux-5.10.97-oh
install -m 0755 -d $TOPDIR/output/aarch64/boot/linux
install -m 0644 .config $TOPDIR/output/aarch64/boot/linux/config-linux-5.10.97-oh
[ -e Module.symvers ] && install -m 0644 Module.symvers $TOPDIR/output/aarch64/boot/linux/Module.symvers-linux-5.10.97-oh

# install ldk backend library if exists
[ -e samples/ldk/libdh-linux.so.5.10.97-oh ] && install -m 0644 samples/ldk/libdh-linux.so.5.10.97-oh $TOPDIR/output/aarch64/lib
```

特别注意：`-Dhongmeng=1 -D__hongmeng=1 -D__hongmeng__=1 -Ulinux -U__linux -U__linux__ -U__gnu_linux__`。

### 微内核和 Linux 的关系是？

注意到：`kernel\kernel\linux-5.10-lts\arch\liblinux\include\liblinux\pal.h`

```c
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef __LIBLINUX_PAL_H__
#define __LIBLINUX_PAL_H__

#include <linux/types.h>

#ifdef CONFIG_LIBLINUX
#ifndef __ASSEMBLY__

/* liblinux exported symbols */
extern void liblinux_vendor_hook_init(void);
extern void liblinux_kernel_init(const char *cmdline);
extern void liblinux_do_initcalls(void);
extern void liblinux_smp_init(void);
extern int  liblinux_setup_fdt(void *dt_virt);
extern void liblinux_enter(int pid, ...);
extern void liblinux_enter_basic(void);
extern void liblinux_exit(void);
extern int  liblinux_thread_setup(void);
extern int liblinux_actv_ctx_setup(void);
extern void liblinux_start_kernel_ctx_setup(void);
struct task_struct;
extern struct task_struct *liblinux_kthread_task_create(void);
extern void liblinux_kthread_ctx_setup(void);
extern struct task_struct *liblinux_syscall_ctx_setup(void);
extern void *liblinux_mm_prepare_map(unsigned long long pa, unsigned long size);
extern void liblinux_mm_prepare_unmap(void *va, unsigned long size);
extern void liblinux_freeze_proc(void);
extern void liblinux_thaw_proc(void);

struct liblinux_suspend_core_ops {
	/* callbacks for suspend mem */
	int (*suspend)(void);
	void (*resume)(void);
	/* callbacks for suspend disk */
	int (*freeze)(void);
	void (*thaw)(void);
};

extern int liblinux_freeze_wqs(void);
extern void liblinux_thaw_wqs(void);
extern int liblinux_suspend(void);
extern int liblinux_suspend_prepare(int force);
extern void liblinux_resume(void);
extern void liblinux_resume_finish(void);
extern int liblinux_suspend_late(void);
extern void liblinux_resume_early(void);
extern int liblinux_add_cpu(unsigned int cpu);
extern int liblinux_remove_cpu(unsigned int cpu);
extern int liblinux_suspend_core_ops_register(struct liblinux_suspend_core_ops *ops);

#ifdef CONFIG_LIBLINUX_HAVE_ULSR
extern void liblinux_ulsr_enter(void);
extern void liblinux_ulsr_leave(void);
#endif

extern int liblinux_pal_process_dormancy_check(void);

extern void liblinux_time_sync(void);
extern void liblinux_time_sync_early(void);
extern void liblinux_current_thread_fill(void);
extern void liblinux_current_priority_get(void);
extern void liblinux_pal_thread_get_priority(int *rt_prio, int *nice);
extern void liblinux_preempt_bypass(bool bypass);
extern void liblinux_profile_task_exit(unsigned long pid, unsigned long uid);

extern int liblinux_ext_hvgr_mmu_cbit_config(void);
extern int liblinux_ext_hvgr_mmu_irq_mask(unsigned int mask);
extern int liblinux_ext_hvgr_mmu_irq_disable(void);
extern int liblinux_ext_hvgr_mmu_irq_enable(void);
extern int liblinux_ext_hvgr_mmu_clear_fault(unsigned int no, unsigned int fault_type);
extern int liblinux_ext_hvgr_mmu_unmask_fault(unsigned int no, unsigned int fault_type);
extern int liblinux_ext_hvgr_mmu_hal_unlock(unsigned int asid);
extern int liblinux_ext_hvgr_mmu_hal_enable(unsigned long long pgd, unsigned int asid, unsigned int ssid);
extern int liblinux_ext_hvgr_mmu_hal_disable(unsigned int asid, unsigned int ssid);
extern int liblinux_ext_hvgr_mmu_hal_flush_pt(unsigned int asid, unsigned long long gva,
	unsigned int pages, unsigned int level);
extern long liblinux_pal_ksys_symlink(const char *oldname, const char *newname);
extern int liblinux_ext_hvgr_mmu_hal_flush_l2_caches(void);
extern int liblinux_ext_hvgr_mmu_tbl_map(void *para);
extern int liblinux_ext_hvgr_mmu_tbl_unmap(void *para);
extern int liblinux_ext_hvgr_mmu_tbl_free_pgd(void *para);
extern int liblinux_ext_hvgr_mmu_fault_clear_as(uint32_t asid, uint64_t gva,
	uint32_t pages, uint32_t as_bits);
extern int liblinux_ext_hvgr_mmu_evtq_base_set(uint64_t base);
extern int liblinux_ext_hvgr_mmu_evtq_cons_done(uint32_t wrap, uint32_t idx);
extern int liblinux_ext_hvgr_mmu_fault_resume(uint32_t asid, uint64_t stag);
extern int liblinux_ext_hvgr_mmu_cd_fault(uint32_t ssid);
extern int liblinux_ext_hvgr_mmu_dfx_cmdq(void);
extern int liblinux_ext_hvgr_mmu_check_pa_refcnt(void *para);

extern int liblinux_smmu_map(void *para);
extern int liblinux_smmu_unmap(void *para);
extern int liblinux_smmu_map_sg(void *para);
extern int liblinux_smmu_iova_to_phys(void *para);
extern int liblinux_smmu_attach_device(void *para);
extern int liblinux_smmu_domain_attach_new_dev(void *para);
extern int liblinux_smmu_svm_detach_device(void *para);
extern int liblinux_smmu_device_remove(void *para);
extern int liblinux_smmu_domain_free(void *para);
extern int liblinux_smmu_tlb_inv_context(void *para);
extern int liblinux_smmu_tlb_inv_context_dev(void *para);
extern int liblinux_smmu_ttwc_inv_context(void *para);
extern int liblinux_smmu_flush_pgtbl_cache(void *para);
extern int liblinux_smmu_map_page_batch(void *para);
extern int liblinux_smmu_unmap_page_batch(void *para);
extern int liblinux_smmu_tcu_power_on(void *para);
extern int liblinux_smmu_tcu_power_off(void *para);
extern int liblinux_smmu_get_ttbr(void *para);
extern int liblinux_smmu_tcu_info(void *para);
extern int liblinux_smmu_pmu_tcu_config(void *para);

int liblinux_hibernate_prepare(void);
void liblinux_post_hibernate(void);
int liblinux_hibernate_restore_prepare(void);
void liblinux_hibernate_post_restore(void);
int liblinux_hibernate(int event);
void liblinux_hibernate_resume(int event);

#ifdef CONFIG_LIBLINUX_NO_HZ
extern int liblinux_nohz_idle_enter(void);
extern void liblinux_nohz_idle_exit(void);
#endif

struct liblinux_tcb_time {
	unsigned long long total;
	unsigned long long runtime;
	unsigned long long ready;
};

int liblinux_pal_get_task_sched_time(struct liblinux_tcb_time *time);
unsigned long liblinux_pal_get_time_us(void);
int liblinux_pal_suspend_cnt_read(int *cnt);
int liblinux_pal_set_pm_crypt_info(uint32_t key_index, bool clear);
bool liblinux_is_suspend_success(void);

unsigned int liblinux_pal_get_log_usertype(void);

int liblinux_pal_get_cpu_total_inst(uint64_t *cpu_inst, uint32_t cpu_nr);

int liblinux_pal_get_max_capacity_cpu(int event, unsigned int *cpuid);

int liblinux_pal_pm_class_init(void);
void liblinux_pal_pm_class_exit(void);
int liblinux_pal_cpu_total_load_read(void __user *cpu_energy, size_t cpu_energy_size);
#ifdef CONFIG_THERMAL_ISOLATE
extern int liblinux_pal_set_cpu_isolate(unsigned int cluster, unsigned int cpu, unsigned int isolated);
#endif
#ifdef CONFIG_HISI_PTR_FEATURE
int liblinux_pal_get_ptr_level(void *buf, size_t len);
#endif
bool liblinux_pal_get_freq_privileged_user(void);

/* devfs related */
extern  int liblinux_pal_register_chrdev_region(unsigned int major,
		unsigned int baseminor, int minorct,
		const char *name, unsigned int *major_out);

extern void liblinux_pal_unregister_chrdev_region(unsigned int major,
		unsigned int baseminor, int minorct);

/*
 * CAUTION:
 *   The `dma_alloc` PAL return non-coherent (a.k.a cacheable) dma memory.
 *   It will be removed or replaced by a non-coherent version PAL when all
 *   the dependencies have been removed.
 */
extern void *liblinux_pal_dma_alloc(unsigned int size, unsigned long long *paddr);
extern void *liblinux_pal_dma_alloc_coherent(unsigned int size,
					     unsigned long long *paddr);
extern int liblinux_pal_dma_free(const void *vaddr, unsigned int size);

#ifdef CONFIG_HM_HKIP_SEHARMONY_PROT
void *liblinux_pal_sel_seharmony_pool_init(void);
void *liblinux_pal_sel_seharmony_prot_pool_init(void);
#endif

#ifdef CONFIG_HM_HKIP_PRMEM
void *liblinux_pal_prmem_malloc(void *pool, size_t size, int flags);
void *liblinux_pal_prmem_calloc(void *pool, size_t n, size_t size, int flags);
char *liblinux_pal_prmem_strdup(void *pool, const char *s, int flags);
void liblinux_pal_prmem_protect_pool(void *pool);
void liblinux_pal_prmem_sec_region_protect(void);
#endif

extern uint64_t liblinux_pal_get_current_signals(void);
extern uint64_t liblinux_pal_get_pending_signals(void);

/* IRQ related */
int liblinux_pal_local_irq_setfast(unsigned int hw_irq, bool fastpath_flag);
int liblinux_pal_local_irq_save(void);
void liblinux_pal_local_irq_enable(void);
void liblinux_pal_local_irq_disable(void);
void liblinux_pal_local_irq_restore(int disabled);
int liblinux_pal_local_save_flags(void);
int liblinux_pal_irq_set_affinity_hint(unsigned long linux_irq, unsigned long mask);

int liblinux_register_ipi_handler(int irq, int (*handler)(int, void *), unsigned int cpu);
int liblinux_unregister_ipi(int irq, unsigned int cpu);
int liblinux_pal_smp_call_cpu(int irq, unsigned int cpu);

enum ipi_msg_type {
	IPI_RESCHEDULE,
	IPI_CALL_FUNC,
	IPI_CPU_STOP,
	IPI_TIMER,
	IPI_IRQ_WORK,
	IPI_SECURE_RPMB,
	IPI_MNTN_INFORM,
	IPI_CPU_CRASH_STOP,
	IPI_WAKEUP,
	IPI_HHEE_INFORM,
	/*
	* A custom SGI ipinr which is different from Linux
	* which should be the same as that defined by the microkernel.
	* For details, see IPI_TYPE_USER_CALL_FUNC in kernel/include/hmkernel/interrupt/ipi.h
	*/
	IPI_USER_CALL_FUNC = 10,
	NR_IPI
};

/* vmalloc */
extern void *liblinux_pal_vmalloc_range_ex(unsigned long size, unsigned long align,
					unsigned long start, unsigned long end,
					unsigned long prot, unsigned long pal_vm_flags, const void *caller);
extern void liblinux_pal_vfree(const void *addr);
extern unsigned long liblinux_pal_vmalloc_nr_pages(void);
int liblinux_va_to_pa(const void *vaddr, unsigned long long *pa);
extern int liblinux_pal_remap_vmalloc_range(unsigned long long vs_key, unsigned long uaddr, unsigned long kaddr,
	unsigned long size, unsigned long prot, unsigned int flags);
extern int liblinux_pal_check_vmalloc_size(void* kaddr, unsigned long end_index);

/* alloc/free for task struct to avoid recursive in thread_setup */
extern void *liblinux_pal_malloc(unsigned long size);
extern void *liblinux_pal_calloc(size_t nmemb, size_t size);
extern void liblinux_pal_free(void *addr);

/* page alloc */
struct liblinux_page_allocator {
	void (*destroy)(const struct liblinux_page_allocator *_allocator);
	int (*extend)(const struct liblinux_page_allocator *_allocator,
		      unsigned int order, unsigned long *rvaddr, int recaim);
	void *(*alloc)(const struct liblinux_page_allocator *_allocator,
		       unsigned int order, unsigned long long *phys);
	void (*free)(const struct liblinux_page_allocator *_allocator,
		     unsigned long vaddr, unsigned int order);
	int (*shrink)(const struct liblinux_page_allocator *_allocator,
		     unsigned long vaddr, unsigned long long paddr, unsigned long size);
	int (*extend_ex)(const struct liblinux_page_allocator *_allocator,
			 unsigned int order, unsigned long *rvaddr, int recaim);
	int (*extend_exact)(const struct liblinux_page_allocator *_allocator,
			    unsigned long size, unsigned long *rvaddr, int recaim);
	void *(*alloc_exact)(const struct liblinux_page_allocator *_allocator,
			     unsigned long size, unsigned long long *phys);
	void (*free_exact)(const struct liblinux_page_allocator *_allocator,
			   unsigned long vaddr, unsigned long size);
	int (*extend_alloc)(const struct liblinux_page_allocator *_allocator,
			    unsigned int extend_order, unsigned int alloc_order,
			    unsigned long *rvaddr, int flags);
	int (*extend_alloc_exact)(const struct liblinux_page_allocator *_allocator,
				  unsigned long extend_size, unsigned long alloc_size,
				  unsigned long *rvaddr, int flags);
	int (*should_reclaim)(void);
};

struct liblinux_pool_base {
	unsigned long kmap_virt_start;
	unsigned long kmap_virt_end;
	unsigned long long phys_offset;
	unsigned int page_sizeorder;
};

struct liblinux_ram_info {
	unsigned long long memstart;
	unsigned long long memend;
	unsigned long long total_ram;
};

/*
 * Liblinux pal page alloc initialization.
 *
 * @param pool_base		[I] base info of ldk kmap
 *
 * @param ram_info		[O] ram info if operation succeeds
 *
 * @return OK if operation succeeds.
 */
extern int liblinux_pal_page_alloc_init(struct liblinux_pool_base *pool_base,
					struct liblinux_ram_info *ram_info);

/*
 * Liblinux pal vmemmap initialization.
 */
struct liblinux_vmemmap_info {
	/* highmem info */
	unsigned long long page_addr;
	unsigned long long page_size;
	/* vmemmap region info */
	unsigned long long vmemmap_start;
	unsigned long long vmemmap_size;
	unsigned int flags;
};

enum liblinux_mmap_errortype {
	LIBLINUX_MMAP_NOERROR = 0,
	LIBLINUX_MMAP_ERROR_VS_DEAD,
	LIBLINUX_MMAP_ERROR_VR_UNMAPPING,
	LIBLINUX_MMAP_ERROR_NUM,
};

#define LIBLINUX_VMEMMAP_POPULATE_ALL		0x01U
#define LIBLINUX_VMEMAP_HIGHMEM			0x02U
#define LIBLINUX_VMEMMAP_POPULATE_IOFAST	0x04U

int liblinux_pal_vmemmap_init(struct liblinux_vmemmap_info *info);
int liblinux_pal_vmemmap_is_populated(const void *start, unsigned long size);
int liblinux_pal_vmemmap_dump(char *info, unsigned long size);

/*
 * Liblinux pal page allocator get.
 *
 * @param allocator_name	[I] name of allocator
 *
 * @return page allocator if operation succeeds.
 */
struct liblinux_page_allocator *liblinux_pal_page_allocator_get(char *allocator_name);

extern int liblinux_pal_reserve_range_name(void *start, unsigned long size,
					   int prot, const char *name);
extern void *liblinux_pal_reserve_size_name(unsigned long size, int prot, int flags, const char *name);
extern void liblinux_pal_populate_size_per_page(void *rvaddr);

extern int liblinux_pal_page_alloc_populate(const void *start, unsigned long size);
extern int liblinux_pal_page_alloc_unpopulate(const void *start, unsigned long size);
extern unsigned long long liblinux_pal_current_mm(void);

/* GFP related */
#define LIBLINUX_PAL_GFP_DMA			0x01U
#define LIBLINUX_PAL_GFP_DETACH			0x02U
#define LIBLINUX_PAL_GFP_ZERO			0x10U
#define LIBLINUX_PAL_GFP_PGTBL			0x20U
#define LIBLINUX_PAL_GFP_PGD			0x40U
#define LIBLINUX_PAL_GFP_NORETRY		0x10000U
#define LIBLINUX_PAL_GFP_NO_RESVMEM		0x20000U
#define LIBLINUX_PAL_GFP_NO_SLOW		0x40000U
#define LIBLINUX_PAL_GFP_NO_COMPACT		0x80000U
#define LIBLINUX_PAL_GFP_MAYSLOW		0x100000U
#define LIBLINUX_PAL_GFP_NOEXTRA		0x8000000U

/* for dma-buf */
#define LIBLINUX_PAL_GFP_NODOWNGRADE		0x4000000U

#ifdef CONFIG_LOCKDEP
#define LIBLINUX_PAL_GFP_RESERVE		0x2000000u
#else
#define LIBLINUX_PAL_GFP_RESERVE		0x1000000u
#endif
#define LIBLINUX_PAL_GFP_CPA			0x400000U

/* cache related */
#define LIBLINUX_PAL_CACHE_FLUSH_RANGE     0U
#define LIBLINUX_PAL_DCACHE_FLUSH_RANGE    1U
#define LIBLINUX_PAL_ICACHE_FLUSH_RANGE    2U
#define LIBLINUX_PAL_DCACHE_CLEAN_RANGE    3U
#define LIBLINUX_PAL_DCACHE_INVAL_RANGE    4U
#define LIBLINUX_PAL_CACHE_FLUSH_ALL		5U
#define LIBLINUX_PAL_DCACHE_FLUSH_ALL		6U
#define LIBLINUX_PAL_ICACHE_FLUSH_ALL		7U
#define LIBLINUX_PAL_DCACHE_CLEAN_ALL		8U

/* flush flag */
#define LIBLINUX_PAL_FLUSH_USER_ADDR		0x40000000U
extern void liblinux_pal_flush_cache_range(unsigned int cmd,
					   unsigned long start, unsigned long end);
extern void liblinux_pal_flush_pgtbl_cache(unsigned int pid, unsigned long vstart, unsigned long vend);

/* mm related */
extern void *liblinux_pal_ioremap(unsigned long phys_addr,
				  unsigned long size, unsigned long prot, const void *caller);
extern void *liblinux_pal_ioremap_ex(unsigned long phys_addr, unsigned long size,
				     unsigned long prot, unsigned int flags, const void *caller);
extern
int liblinux_pal_remap_pfn_range(unsigned long addr, unsigned long pfn, unsigned long size,
				 unsigned long prot, unsigned int flags);
struct pfn_range {
	unsigned long long start;
	unsigned long long end;
};
int liblinux_pal_remap_pa_range_batch(unsigned long addr, const struct pfn_range *pfn_range_array,
				      unsigned int cnt, unsigned long prot, unsigned int flags);
int liblinux_pal_remap_pa_range_batch_sp(unsigned long addr, const struct pfn_range *pfn_range_array,
					 unsigned int cnt, unsigned long prot, unsigned int flags, int pid, unsigned long long vr_key);
int liblinux_pal_remap_pa_range_batch_mm(unsigned long addr, const void *pa_array,
					 unsigned int pa_array_size, unsigned long prot,
					 unsigned int flags, unsigned long long vs_key, int *vm_state);
int liblinux_pal_mm_vendor_ddr_intr(unsigned int flow_type, unsigned int ch);

#define LIBLINUX_PAL_REMAP_NONE			0
#define LIBLINUX_PAL_REMAP_CACHE		0x1
#define LIBLINUX_PAL_REMAP_NORMAL_NC		0x2
#define LIBLINUX_PAL_REMAP_DEVICE		0x4
#define LIBLINUX_PAL_REMAP_DMA_BUF		0x8
#define LIBLINUX_PAL_VM_USERMAP			0x10U
#define LIBLINUX_PAL_REMAP_PBHA_SHIFT	5
#define LIBLINUX_PAL_REMAP_PBHA			(0xFU << LIBLINUX_PAL_REMAP_PBHA_SHIFT) // bit[8:5]
#define LIBLINUX_PAL_REMAP_SH_SHIFT		9
#define LIBLINUX_PAL_REMAP_SH			(0x3U << LIBLINUX_PAL_REMAP_SH_SHIFT) // bit[10:9]

extern int liblinux_pal_iofast_page_info_init(unsigned long pg_struct_va_start, size_t pg_struct_size,
					      unsigned int pg_slab_shift);
extern int liblinux_pal_iofast_page_info_init_puafsan(unsigned long pg_struct_va_start, size_t pg_struct_size,
                                                      unsigned int pg_puafsan_shift);
extern void *liblinux_pal_vm_prepare(unsigned long vaddr, unsigned long size,
				     unsigned long prot, unsigned int flags);
extern int liblinux_pal_vm_mmap(unsigned long paddr, unsigned long vaddr,
				unsigned long size, unsigned long prot,
				unsigned int flags);
extern int liblinux_pal_vm_unpopulate(void *addr, unsigned long size);
extern int liblinux_pal_vm_mmap_batch(void *pa_array,
				      unsigned int pa_array_size,
				      unsigned long vaddr,
				      unsigned long prot,
				      unsigned int flags);
extern int liblinux_pal_vm_unmap(const void *addr);

/* same with `struct vm_unmapped_area_info` */
struct pal_vm_info {
	unsigned long flags;
	unsigned long length;
	unsigned long low_limit;
	unsigned long high_limit;
	unsigned long align_mask;
	unsigned long align_offset;
};
#define VM_UNMAPPED_AREA_TOPDOWN 1
#define VM_UNMAPPED_AREA_XPM 2
/* extended flag: same with sysmgr */
#define VM_PERSISTED_MAP	0x80000000
extern unsigned long liblinux_pal_usermap_alloc_va(const struct pal_vm_info *info);
extern unsigned long liblinux_pal_usermap_prepare(unsigned long addr, unsigned long len,
                                                  unsigned long prot, unsigned long flags,
                                                  void **priv);
extern void liblinux_pal_usermap_finish(const void *priv, int success);
extern int liblinux_pal_usermap_munmap(unsigned long addr, unsigned long len);
extern void *liblinux_pal_find_vma_by_mm(unsigned long addr, unsigned long long vspace_key);

extern int liblinux_pal_vm_zap(unsigned long addr, unsigned long len, unsigned int flags);
extern int liblinux_pal_vm_zap_ptes(unsigned long addr, unsigned long len, unsigned long long mm, bool *is_dead);
extern int liblinux_pal_copy_from_user(void *dst, const void *src, unsigned long n);
extern int liblinux_pal_copy_to_user(void *dst, const void *src, unsigned long n);
extern int liblinux_pal_copy_in_user(void *dst, const void *src, unsigned long n);
extern int liblinux_pal_copy_from_caller(void *dst, const void *src, unsigned long n);
extern int liblinux_pal_copy_to_caller(void *dst, const void *src, unsigned long n);
extern int liblinux_pal_strcpy_from_user(void *dst, const void *src, unsigned long n);

extern int liblinux_pal_set_pageattr(const void *addr, int numpages,
				     int set_prot, int clear_prot);
extern int liblinux_pal_set_pageattr_ex(const void *addr, int numpages,
					int set_prot, int clear_prot);

extern void liblinux_pal_change_secpage_range(unsigned long long phys_addr, unsigned long vaddr,
					      unsigned long size, unsigned int flags);

/* kernel module support */
int liblinux_pal_module_alloc_init(const void *base, unsigned long size);
int liblinux_pal_module_alloc_prepare(const void *addr, unsigned long size);
int liblinux_pal_module_alloc_release(const void *addr, unsigned long *psize_out);
int liblinux_pal_module_alloc_prepare_hkip(const void *addr, unsigned long size);

extern int liblinux_pal_request_module(const char *modname);

struct liblinux_syminfo {
	void *__start___ksymtab;
	void *__stop___ksymtab;
	void *__start___ksymtab_gpl;
	void *__stop___ksymtab_gpl;
	void *__start___ksymtab_gpl_future;
	void *__stop___ksymtab_gpl_future;
	void *__start___kcrctab;
	void *__start___kcrctab_gpl;
	void *__start___kcrctab_gpl_future;
};
extern int liblinux_init_symbol_module(const char *modname,
		const struct liblinux_syminfo *si);

struct liblinux_mod_syminfo {
	const void *symtab;
	unsigned int symtab_len;
	const char *strtab;
	unsigned int strtab_len;
	const void *module_core;
	unsigned int core_size;
};
extern int liblinux_pal_fill_mod_symbol(const char *name, const struct liblinux_mod_syminfo *si);
extern int liblinux_pal_drop_ko_symbol(const void *module_core);

struct liblinux_wchan_info {
	char *name;
	unsigned int name_len;
	unsigned long offset;
	unsigned long size;
};

/* thread related */
typedef struct {
	unsigned long long tcb_cref; /* place `tcb_cref` as the first variable to access it directly from task_struct header */
	int tid;
	unsigned long long handle;
} liblinux_pal_thread_handle_t;

unsigned long long liblinux_pal_thread_actv_cref(void);
unsigned long long liblinux_pal_thread_sched_cref(void);
#ifdef CONFIG_LIBLINUX_THREAD_BLOCK
int liblinux_pal_thread_block(volatile int *futex, int val,
				unsigned long long timeout, /* ns */
				unsigned long flags,
				const struct liblinux_wchan_info *wchan_info);
int liblinux_pal_thread_unblock(unsigned long long tcb_cref, volatile int *futex, int sync);
#endif

int liblinux_pal_thread_create(void *(*fun)(void *), void *arg,
			       liblinux_pal_thread_handle_t *handle);
int liblinux_pal_thread_create_ex(void *(*fun)(void *), void *arg,
				  liblinux_pal_thread_handle_t *handle);
struct task_struct;
int liblinux_pal_thread_create_task_init(void *(*func)(void *), void *arg, liblinux_pal_thread_handle_t *handle,
					 struct task_struct *task,
					 void (*task_init)(struct task_struct *task,
							   liblinux_pal_thread_handle_t *handle));

void liblinux_pal_thread_exit(void) ;
void liblinux_pal_thread_exit_ex(void *exitcode);
int liblinux_pal_thread_join_ex(const liblinux_pal_thread_handle_t *handle,
				void **exitcode);
unsigned long liblinux_pal_thread_stack_info(const liblinux_pal_thread_handle_t *handle, unsigned long *base);
void liblinux_pal_thread_stack_populate(const liblinux_pal_thread_handle_t *handle);
int liblinux_pal_thread_set_my_data(const void *data);
void *liblinux_pal_thread_get_my_data(void);
void liblinux_pal_thread_init(void);
int liblinux_pal_thread_init_ex(void (*dtor)(void *));
void liblinux_pal_thread_specific_init(unsigned int *offset, unsigned int *key);
void liblinux_pal_thread_yield(void);
int liblinux_pal_thread_setname(const liblinux_pal_thread_handle_t *handle,
				const char *thread_name);
extern int liblinux_pal_thread_getname(char* thread_name);
int liblinux_pal_get_thread_name(pid_t tid, char *comm, int len);
int liblinux_pal_get_current_exec_path(char *buf, size_t len);
int liblinux_pal_sched_getaffinity(int tid, unsigned long *mask);
int liblinux_pal_sched_setaffinity(int tid, unsigned long mask);
int liblinux_pal_thread_setaffinity(const liblinux_pal_thread_handle_t *handle,
				    unsigned long mask);
int liblinux_pal_thread_getaffinity(const liblinux_pal_thread_handle_t *handle,
				    unsigned long *mask);
int liblinux_pal_thread_setscheduler(const liblinux_pal_thread_handle_t *handle,
				     int prio, int policy);
int liblinux_pal_thread_set_vip_prio(const liblinux_pal_thread_handle_t *handle,
				     int prio);
int liblinux_pal_is_thread_ctx(void);
void liblinux_pal_thread_dump(pid_t tid);
int liblinux_pal_set_user_nice(int tid, int nice);
int liblinux_pal_getpriority_by_tid(int tid);
int liblinux_pal_query_main_thread(int tid, int *main_thread_tid, char *main_thread_name, unsigned int name_len);
void liblinux_pal_process_signal_with_pid(int pid, int sig);
#ifdef CONFIG_LIBLINUX_PERI_DMA
#define PERI_DMA_WRITE_ONCE_MAX 8
struct peri_dma_write_info {
    unsigned int index[PERI_DMA_WRITE_ONCE_MAX];
    unsigned int val[PERI_DMA_WRITE_ONCE_MAX];
    unsigned int count;
    unsigned int chan;
};
void liblinux_pal_peri_dma_write(struct peri_dma_write_info* info);
#endif
void liblinux_pal_thread_set_power_group(const liblinux_pal_thread_handle_t *handle);
int liblinux_pal_proc_lock_pid(int pid);
int liblinux_pal_proc_unlock_pid(int pid);
void liblinux_pal_thread_set_task_boost(const liblinux_pal_thread_handle_t *handle, int boost);
int liblinux_pal_thread_set_freezable(void);
int liblinux_pal_thread_try_to_freeze(void);
bool liblinux_pal_thread_freezing(void);
void liblinux_pal_thread_freezer_count(bool count, bool fwd);
int liblinux_pal_thread_sched_trans(unsigned long long src_cref,
				    unsigned long long dst_cref,
				    bool restore);
unsigned int liblinux_pal_thread_get_qos(void);
void liblinux_pal_thread_set_pin_preempted(void);
void liblinux_pal_thread_set_force_smt_expeller(void);
void liblinux_pal_thread_clr_force_smt_expeller(void);

void liblinux_pal_set_iowait(void);
void liblinux_pal_clr_iowait(void);
pid_t liblinux_pal_thread_vtid_to_root_tid(pid_t tid);

int liblinux_pal_tcb_task_struct_set(void *task_struct);
void *liblinux_pal_tcb_task_struct_get(void);
struct task_struct *liblinux_actv_task_struct_get(void);

/* cpuhp related */
int liblinux_cpu_up(unsigned int cpu);
int liblinux_cpu_down(unsigned int cpu);

unsigned int liblinux_pal_processor_id(void);
int liblinux_pal_cpu_config(unsigned long *online_mask,
			    unsigned long *cpu_map,
			    unsigned long cpu_nr,
			    int preempt_flag);
extern int liblinux_pal_cpu_config_ex(unsigned long *online_mask, unsigned long size,
				      int preempt_flag);
int liblinux_pal_cpu_topology(unsigned int *topo, unsigned int size);

/* sched-level for cpu hotplug */
#define THREAD_SCHED_LEVEL_MAX 2
#define PROCESS_SCHED_LEVEL_MAX 2
void liblinux_pal_process_set_slv(unsigned int cpu, unsigned int slv);
void liblinux_pal_thread_set_slv(const liblinux_pal_thread_handle_t *handle, unsigned int slv);

/* lock related */
#define LIBLINUX_PAL_FUTEX_UNINTERRUPTIBLE	1
#define LIBLINUX_PAL_FUTEX_TIMEDOUT_DETECT	2
#define LIBLINUX_PAL_FUTEX_LOCK_IN_LDK		4
#define LIBLINUX_PAL_FUTEX_IOWAIT		8
#define LIBLINUX_PAL_FUTEX_KILLABLE		16
#define LIBLINUX_PAL_FUTEX_MAX_TIMEOUT		~0ULL

int liblinux_pal_futex_timedwait(volatile int *futex, int val,
				 unsigned long long timeout, /* ns */
				 unsigned long flags);
int liblinux_pal_futex_timedwait_ex(volatile int *futex, int val,
				    unsigned long long timeout, /* ns */
				    unsigned long flags,
				    const struct liblinux_wchan_info *wchan_info);
int liblinux_pal_futex_wake(volatile int *futex);
int liblinux_pal_futex_wake_ex(volatile int *futex, int sync);

#ifdef CONFIG_BIG_MODEL_MONITOR
int liblinux_pal_mpam_event_ctrl(void *event, unsigned int size);
int liblinux_pal_mpam_event_bind(unsigned long long cref);
int liblinux_pal_mpam_event_unbind(unsigned long long cref);
int liblinux_pal_mpam_event_wait(void);
int liblinux_pal_mpam_event_read(void *buf, unsigned long buf_size);
#endif

/* This data structure and initializer should be aligned to
 * libhmsync/raw_mutex.h
 */
struct liblinux_pal_mutex_t {
	struct {
		union {
			unsigned long id;
			unsigned long long align_id; /* ensure align in 32 and 64 data model */
		};
		union {
			const void *pc;
			unsigned long long align_pc; /* ensure align in 32 and 64 data model */
		};
	} owner;
	unsigned int lock;
	unsigned int waiters;
	unsigned long __rsvd[4];        /* padding for pthread */
};

#define LIBLINUX_MUTEX_INITIALIZER {.owner = {{.align_id = 0ULL}, {.align_pc = 0ULL}}, .lock = 0U, .waiters = 0U}

void liblinux_pal_mutex_init(struct liblinux_pal_mutex_t *mutex);
void liblinux_pal_mutex_destroy(struct liblinux_pal_mutex_t *mutex);
void liblinux_pal_mutex_lock(struct liblinux_pal_mutex_t *mutex);
int  liblinux_pal_mutex_trylock(struct liblinux_pal_mutex_t *mutex);
void liblinux_pal_mutex_unlock(struct liblinux_pal_mutex_t *mutex);
int liblinux_pal_mutex_is_locked(struct liblinux_pal_mutex_t *mutex);

/* This data structure should be aligned to
 * libhmsync/raw_thread_cond.h
 */
struct liblinux_pal_cond_t {
	int seq;
	int waiters;
	int lock;

	void *head;
	void *tail;

	unsigned int attr;
	unsigned long __rsvd[4];        /* padding for pthread */
};

struct liblinux_pal_cond_attr_t {
	unsigned int attr;
};

int liblinux_pal_cond_init(struct liblinux_pal_cond_t *cond,
			   const struct liblinux_pal_cond_attr_t *attr);
int liblinux_pal_cond_destroy(struct liblinux_pal_cond_t *cond);
int liblinux_pal_cond_wait(struct liblinux_pal_cond_t *cond, struct liblinux_pal_mutex_t *mutex);
int liblinux_pal_cond_signal(struct liblinux_pal_cond_t *cond);
int liblinux_pal_cond_broadcast(struct liblinux_pal_cond_t *cond);

/* This data structure should be aligned to
 * libhmsync/raw_sem.h
 */
struct liblinux_pal_sem_t {
	volatile int value;
	volatile unsigned int waiters;
	unsigned long __rsvd[4];        /* padding for pthread */
};
struct liblinux_pal_timespec_t {
	long ts_sec;
	long ts_nsec;
};

#define LIBLINUX_SEM_INITIALIZER(n) {.value = n, .waiters = 0}

int liblinux_pal_sem_init(struct liblinux_pal_sem_t *sem, unsigned int value);
int liblinux_pal_sem_trywait(struct liblinux_pal_sem_t *sem);
int liblinux_pal_sem_wait(struct liblinux_pal_sem_t *sem);
int liblinux_pal_sem_timedwait(struct liblinux_pal_sem_t *sem,
			       const struct liblinux_pal_timespec_t *ts);
int liblinux_pal_sem_post(struct liblinux_pal_sem_t *sem);
int liblinux_pal_sem_getvalue(struct liblinux_pal_sem_t *sem);

enum linux_log_level {
	LIBLINUX_LOGLEVEL_EMERG,
	LIBLINUX_LOGLEVEL_ALERT,
	LIBLINUX_LOGLEVEL_CRIT,
	LIBLINUX_LOGLEVEL_ERR,
	LIBLINUX_LOGLEVEL_WARNING,
	LIBLINUX_LOGLEVEL_NOTICE,
	LIBLINUX_LOGLEVEL_INFO,
	LIBLINUX_LOGLEVEL_DEBUG,
	LIBLINUX_LOGLEVEL_CONT = -3, /* KERN_CONT */
};
void liblinux_pal_log_store(int level, const char *txt, int txt_len);
extern int liblinux_pal_kptr_restrict(void);

/*
 * used to adapt fget for anon fd, should be removed when all files use
 * hm fd in LDK
 */
enum liblinux_fd_type {
	DEFAULT_FD = 0,
	ANON_FD,
	TRANSFS_FD,
	NET_FD,
	MAX_FD, /* always be the last one */
};
void *liblinux_pal_fget_ex(enum liblinux_fd_type fd_type, int fd, void (*fget)(void*));
void liblinux_pal_fput_ex(enum liblinux_fd_type fd_type, void *file);
void *liblinux_pal_gdentry(const char *pathname);
void liblinux_pal_pdentry(void *sb, void *dentry);
void *liblinux_pal_pidfd_anon_fget(int pid, int fd, void (*fget)(void *));
int liblinux_pal_ipermission(const char *pathname, int mask);

/* preempt related */
void *liblinux_pal_preempt_init(void);
void liblinux_pal_preempt_resched(void);
void liblinux_pal_preempt_enable(void);
void liblinux_pal_preempt_disable(void);
int liblinux_pal_preempt_key_offset_init(unsigned int *key, unsigned int *offset);
struct tty_info {
	int tty_sid;
	unsigned int tty_dev_no;
	char *tty_name;
	unsigned int f_mode;
};
int liblinux_pal_set_control_terminal(struct tty_info *info, int preempt);
int liblinux_pal_get_control_terminal_devno(unsigned int *devno);
int liblinux_pal_get_sid(void);
int liblinux_pal_get_sid_pgid(int *sid, int *pgid);
int liblinux_pal_get_pgid(void);
int liblinux_pal_set_pgrp(int tty_sid, int pgrp);
int liblinux_pal_get_pgrp(int tty_sid);
void liblinux_pal_process_signal(int sid, int sig);
void liblinux_pal_process_signal_with_pid(int pid, int sig);
int liblinux_pal_signal_isignored(int pid, int sig);
int liblinux_pal_current_pgrp_isorphaned(void);
void liblinux_pal_sys_shutdown(void);
void liblinux_pal_sys_snapshot(void);

/* mem stat dfx api */
typedef void (*liblinux_mem_hook_t)(int ev, void *addr, unsigned long size,
				    const char *slab_cache_name);

int liblinux_dfx_vmalloc_hook(liblinux_mem_hook_t hook);
int liblinux_pal_mincore(const void *addr, unsigned long size, unsigned char *vec);

/* capabilities */
#define LIBLINUX_CAP_OPT_NONE 0
#define LIBLINUX_CAP_OPT_NOAUDIT 1
#define LIBLINUX_CAP_OPT_INSETID 2
int liblinux_pal_capable(int cap, unsigned int opts);

int liblinux_pal_get_unused_fd_flags(unsigned flags);
void liblinux_pal_fd_install(unsigned int fd, void *file);
struct dh_fd_install_context {
	const char *file_name;
	unsigned int buffer_len;
	unsigned int f_flags;
};
void liblinux_pal_fd_install_ex(unsigned int fd, void *file, struct dh_fd_install_context *ctx);
int liblinux_pal_alloc_unused_fd(unsigned int flags, void *file, struct dh_fd_install_context *ctx);
void liblinux_pal_put_unused_fd(unsigned int fd);

struct stat;
struct statfs;
struct iovec;

int liblinux_pal_vfs_fstat(int fd, struct stat *stat);
long liblinux_pal_vfs_read(int fd, void *buf, unsigned int nbyte);
int liblinux_pal_ksys_access(const char *pathname, int mode);
int liblinux_pal_vfs_open(const char *filename, unsigned int flag, unsigned int mode);
int liblinux_pal_ksys_open(const char *filename, unsigned int flag, unsigned int mode);
int liblinux_pal_ksys_openat(int dfd, const char *filename, unsigned int flag, unsigned int mode);
int liblinux_pal_ksys_lseek(int fd, long long offset, int whence, long long *pos);
long liblinux_pal_ksys_write(int fd, const void *buf, unsigned int nbyte);
long liblinux_pal_ksys_pwrite(int fd, long long pos, const void *buf, unsigned int nbyte);
long liblinux_pal_ksys_pwritev(int fd, const struct iovec *iov, int iovcnt, long offset);
long liblinux_pal_ksys_read(int fd, void *buf, unsigned int nbyte);
long liblinux_pal_ksys_pread(int fd, long long pos, void *buf, unsigned int nbyte);
long liblinux_pal_ksys_preadv(int fd, const struct iovec *iov, int iovcnt, long offset);
int liblinux_pal_ksys_fsync(int fd);
int liblinux_pal_ksys_sync(void);
int liblinux_pal_vfs_close(int fd);
int liblinux_pal_ksys_close(int fd);
int liblinux_pal_vfs_ioctl(int fd, unsigned int cmd, unsigned long arg, int arg_sz);
int liblinux_pal_ksys_ioctl(int fd, unsigned int cmd, unsigned long arg, int arg_sz);
int liblinux_pal_ksys_fstat(int fd, struct stat *stat);
int liblinux_pal_ksys_fstat_nocheck(int fd, struct stat *stat);
int liblinux_pal_ksys_fstatat(int dfd, const char *filename, struct stat *stat, unsigned int flags);
int liblinux_pal_ksys_rename(const char *oldpath, const char *newpath);
int liblinux_pal_ksys_readlink(const char *path, char *buf, unsigned int bufsize);
int liblinux_pal_ksys_readlinkat(int dfd, const char *path, char *buf, unsigned int bufsize);
int liblinux_pal_ksys_readdir(unsigned int fd, char *buf, unsigned int bufsize);
int liblinux_pal_ksys_mkdir(const char *pathname, unsigned int mode);
int liblinux_pal_ksys_rmdir(const char *pathname);
int liblinux_pal_ksys_fchown(int fd, unsigned int uid, unsigned int gid);
int liblinux_pal_ksys_unlink(const char *filename);
int liblinux_pal_ksys_statfs(const char *pathname, struct statfs *statfs);
int liblinux_vfs_open(const char *filename, unsigned int flag, unsigned int mode);
int liblinux_vfs_fstat(int fd, struct stat *stat);
long liblinux_vfs_read(int fd, void *buf, unsigned int nbyte);
int liblinux_vfs_ioctl(int fd, unsigned int cmd, unsigned long arg, int arg_sz);
int liblinux_vfs_close(int fd);
int liblinux_ksys_fstat_nocheck(int fd, struct stat *stat);
int liblinux_ksys_fstatat(int dfd, const char *filename, struct stat *stat, unsigned int flags);


extern int  liblinux_pal_register_blkdev_region(unsigned int major,
					        const char *name, unsigned int *major_out);
extern void liblinux_pal_unregister_blkdev_region(unsigned int major, const char *name);

/* only for skb data */
void *liblinux_pal_alloc_dma_pool_ex(unsigned int *offset, unsigned long long *paddr, unsigned int size);
int liblinux_pal_free_dma_pool(unsigned int offset);
int liblinux_pal_native_net_rx(unsigned int pool_offset, int shm_len,
			       int rx_len, int offset, int ifindex);
typedef int(*nl_transmit_handler_t)(const void *msg,
				   unsigned int len, int proto, unsigned int dst);
/* obsolete */
typedef int(*nl_genl_reg_handler_t)(const char *name, const void *fam_info, unsigned long info_len,
				    unsigned int *fam_id_inout, unsigned int *mcgroup_offset_out);
/* obsolete */
typedef int(*nl_genl_unreg_handler_t)(unsigned int fam_id);

#define GEN_NETLINK 1
#define RT_NETLINK 2
#define CUST_NETLINK 3
struct liblinux_nl_info {
	int type;
	union {
		struct {
			const char *name;
			const void *fam_info;
			unsigned long info_len;
			unsigned int fam_id;		/* out */
			unsigned int mcgroup_offset;	/* out */
		} genl;
		struct {
			const char *name;
		}rtnl;
		struct {
			unsigned int unit;
			unsigned int nr_grp;
		} cust_nl;
	};
};
typedef int(*nl_reg_handler_t)(struct liblinux_nl_info *nl_info);
typedef int(*nl_unreg_handler_t)(struct liblinux_nl_info *nl_info);
struct netlink_pal_handler {
	nl_transmit_handler_t unicast_hdr;
	nl_transmit_handler_t multicast_hdr;
	/* obsolete */
	nl_genl_reg_handler_t genl_reg_hdr;
	/* obsolete */
	nl_genl_unreg_handler_t genl_unreg_hdr;
	nl_reg_handler_t nl_reg_hdr;
	nl_unreg_handler_t nl_unreg_hdr;
};
extern int liblinux_pal_netlink_init(struct netlink_pal_handler *hdr);
/* request firmware related */
int liblinux_pal_fw_acquire_contents(const char *filename, void *data,
				     unsigned int size, unsigned int *rsize /* out */);

/* liblinux shrinker */
struct liblinux_pal_sub_shrinker {
	/* return `nr_pages` that can be reclaimed */
	unsigned long (*query)(void* priv);
	/* return `nr_pages` that actual reclaimed */
	unsigned long (*shrink)(void* priv, int free_nr);
	void *priv;
};

void liblinux_pal_sub_shrinker_register(const struct liblinux_page_allocator *_allocator,
					struct liblinux_pal_sub_shrinker shrinker);
void liblinux_pal_sub_shrinker_unregister(const struct liblinux_page_allocator *_allocator,
					  struct liblinux_pal_sub_shrinker shrinker);

unsigned long liblinux_pal_query_pgd(unsigned int pid);

/* liblinux kprobe */
struct kprobe;
int liblinux_set_current_kprobe(struct kprobe *p);
void liblinux_reset_current_kprobe(void);
struct kprobe *liblinux_kprobe_running(void);
struct kprobe_ctlblk *liblinux_get_kprobe_ctlblk(void);

/* file_guard */
int liblinux_pal_sec_fileguard_cfg(void *ctx, size_t len, size_t *ret);

/* hkids */
int liblinux_pal_report_hkids_teardown_event(int event, const char *desc);

/* tzdriver */
int liblinux_pal_get_processname_by_tid(__u32 calling_pid, char *path, uint32_t path_len);
int liblinux_pal_thread_set_vip_prio_by_tid(int tid, int prio);

/* cma */
int liblinux_pal_cma_area_init(unsigned long paddr, unsigned long vaddr, unsigned long size,
			       unsigned int cma_id, const char *name);
int liblinux_pal_cma_alloc(unsigned int cma_id, unsigned long size, unsigned int align_order,
			   unsigned long *paddr);
int liblinux_pal_cma_release(unsigned int cma_id, unsigned long vaddr,
			     unsigned long paddr, unsigned long size);

/* memory swap */
int liblinux_pal_mem_swap_space_init(int swap_id, unsigned long total_size, unsigned int ext_size);
int liblinux_pal_mem_swap_alloc_extentid(int swap_id, int *ext_id);
int liblinux_pal_mem_swap_alloc_extentid_all(int swap_id, int *ext_ids, int num);
int liblinux_pal_mem_swap_in_range(int swap_id, unsigned long *pa_array, int *ext_ids, int num, bool async_io);
int liblinux_pal_mem_swap_out_range(int swap_id, unsigned long *pa_array, int *ext_ids, int num, bool async_io);
void liblinux_pal_mem_swap_free_extentid(int swap_id, int ext_id);
void liblinux_pal_mem_swap_free_extentid_all(int swap_id, int *ext_ids, int num);
int liblinux_pal_mem_zswap_alloc_extentid(int swap_id, int *ext_ids, int num);
void liblinux_pal_mem_zswap_free_extentid(int swap_id, int *ext_ids, int num);
int liblinux_pal_mem_zswap_sc_in_range(int swap_id, unsigned long *pa_array, int *ext_ids, int start, int num);
int liblinux_pal_mem_zswap_in_range(int swap_id, unsigned long *pa_array, int *ext_ids, int num);
int liblinux_pal_mem_zswap_out_range(int swap_id, unsigned long *pa_array, int *ext_ids, int num);

/* sd */
int liblinux_pal_sd_ida_alloc(void);
void liblinux_pal_sd_ida_free(int sd_index);

void liblinux_pal_fpu_save(void);
void liblinux_pal_fpu_restore(void);

extern void liblinux_pal_sync_wakeup_trad(void *filp_node, unsigned int revents);
extern void liblinux_pal_append_wakeup_trad(void *filp_node, unsigned int revents);
extern void liblinux_pal_sync_wakeup(void *kobj_ctx, unsigned int revents);
extern void *liblinux_pal_sync_open(void *kobj_ctx);
extern void liblinux_pal_sync_close(void *kobj_ctx);

int liblinux_pal_get_user_pages(unsigned long vaddr, size_t len, unsigned long long *ret_pa_array,
				size_t array_size);
int liblinux_pal_put_user_pages(unsigned long vaddr, size_t len, unsigned long long *ret_pa_array,
				size_t array_size);
int liblinux_pal_charge_mlock(unsigned long mlock_size);
int liblinux_pal_uncharge_mlock(unsigned long mlock_size);
void liblinux_pal_mem_enable_rsv_mem(unsigned long pfn_start, unsigned long pfn_end);

int liblinux_read_klog_config(unsigned long long *paddr, unsigned int *size);
int liblinux_read_el2_log_config(unsigned long long *paddr, unsigned int *size);
int liblinux_read_kbox_config(unsigned long long *paddr, unsigned long *size);
int liblinux_erase_kbox_region(const char *name);
int liblinux_iter_last_klog(unsigned long max_read_len,
		int (*dump_func)(const char *log, unsigned int len, uintptr_t arg), uintptr_t arg);
int liblinux_iter_current_klog(unsigned long max_read_len,
		int (*dump_func)(const char *log, unsigned int len, uintptr_t arg), uintptr_t arg);
int liblinux_iter_on_klog_data(const char *buffer, size_t buflen,
		int (*dump_func)(const char *log, unsigned int len, uintptr_t arg), uintptr_t arg);
int liblinux_iter_last_el2_log(unsigned long max_read_len,
		int (*dump_func)(const char *log, unsigned int len, uintptr_t arg), uintptr_t arg);
int liblinux_read_klog_data(char *buffer, size_t buflen, ssize_t offset, size_t *ret_read_len);
int liblinux_decompress_kbox_snapshot(const char *out_path);
int liblinux_dump_ekbox(void *ekbox_buf, unsigned int ekbox_size,
		int (*dump_func)(const char *log, unsigned int len, uintptr_t arg), uintptr_t arg);

int liblinux_pal_sysevent_write(const char *buf, size_t buf_len);
int liblinux_vmemmap_pg_populate(void *vaddr, unsigned long size);
int liblinux_vmemmap_pg_unpopulate(void *vaddr, unsigned long size);

#ifdef CONFIG_LIBLINUX_CDC
#define LIBLINUX_REBOOT_FLAG_TAKE_SNAPSHOT	(1U) /* bit[0] */
#define LIBLINUX_REBOOT_FLAG_EMERGENCY		(1U << 1) /* bit[1] */
void liblinux_reboot(unsigned int flag, const char *reason);
void liblinux_shutdown(void);
#else
int liblinux_reboot(const char *cmd, bool is_abnormal);
#endif /* def CONFIG_LIBLINUX_CDC */

void liblinux_stop_feed_harddog(unsigned int timeout_sec);
void liblinux_stop_feed_highdog(unsigned int timeout_sec);
void liblinux_save_hm_log(char *pbuf, unsigned int buf_size);
bool liblinux_get_hm_log_buffer(char *pbuf, unsigned int buf_size, size_t *retlen);
bool liblinux_is_lastklog_valid(const char *klog_buff, size_t len, unsigned int *ret_header_len);
#ifdef CONFIG_LOG_ENCRYPT
int liblinux_get_elog_metadata(int (*callback)(const char* buf, size_t buf_size));
#endif

/* sec */
int liblinux_vfs_lock_in(unsigned int user_id);
int liblinux_vfs_unlock_in(unsigned int user_id, unsigned int file,
	unsigned char *iv, unsigned int iv_len);

char *liblinux_pal_realpath(const char *path, char *buf, unsigned long len);
void liblinux_dump_hm_track_info(const char *dst_dir_str, const char *bin_file_name, bool dump_active);
void liblinux_dump_hm_kstack(const char *dst_dir_str, const char *bin_file_name);
int liblinux_hm_track_info_set(bool pause);

/* ldk_stat */
void liblinux_set_buddy_dma_free_pages(void);
void liblinux_mod_dmaheap_free_pages(long val);
void liblinux_set_gpu_free_pages(long val);
long liblinux_get_system_free_pages(void);
unsigned long liblinux_get_sys_avail_buf_wmark_min(void);
unsigned long liblinux_get_sys_avail_buf_wmark_mid(void);
unsigned long liblinux_get_sys_avail_buf_wmark_high(void);
unsigned long liblinux_get_sys_curr_avail_buf(void);

/* liblinux_pal_proxy */
#define PAL_PROXY_MAJOR_CMD_OF(x)		(((x) >> 16) & 0xFFFF)
#define PAL_PROXY_MINOR_CMD_OF(x)		(x & 0xFFFF)
#define PAL_PROXY_MAJOR(x)			((((x) & 0xFFFF) << 16))
#define PAL_PROXY_COMBINE_CMD(x, y)		((PAL_PROXY_MAJOR(x)) | ((y) & 0xFFFF))

/* for udk call ldk */
int liblinux_pal_proxy_register(unsigned int cmd, int (*func)(unsigned int cmd, void *rd,
						     size_t rd_size, void *wr,
						     size_t wr_size));
int liblinux_pal_proxy_handler(unsigned int cmd, void *rd, size_t rd_size,
			       void *wr, size_t wr_size);

/* for ldk call udk */
int liblinux_pal_rpc_invoke(uint64_t rpc_key, int cmd, void *rd, size_t rd_size,
			    void *wr, size_t wr_size, bool is_xact);
int liblinux_pal_proxy_udk_invoke(int cmd, void *rd, size_t rd_size,
				 void *wr, size_t wr_size);
int liblinux_proxy_udk_invoke_xact(int cmd, void *rd, size_t rd_size,
				   void *wr, size_t wr_size);

/* cpa heap */
#define LIBLINUX_PAL_CPA_PREPARE_CAN_DROP (1U << 0)
#define LIBLINUX_PAL_CPA_PREPARE_CAN_KILL (1U << 1)
#define LIBLINUX_PAL_CPA_PREPARE_CAN_RECLAIM (1U << 2)
#define LIBLINUX_PAL_CPA_PREPARE_CAN_COMPAT (1U << 3)

#define LIBLINUX_PAL_CPA_PREPARE_KILL_ZRAM (1U << 4)
#define LIBLINUX_PAL_CPA_PREPARE_KILL_FREEMEM 0

#define LIBLINUX_PAL_CPA_PREPARE_COMPAT_MODEL_0 0
#define LIBLINUX_PAL_CPA_PREPARE_COMPAT_MODEL_1 (1U << 5)

#define LIBLINUX_PAL_CPA_PREPARE_MODE_WORK 0
#define LIBLINUX_PAL_CPA_PREPARE_MODE_ALLOC (1U << 6)
#define LIBLINUX_PAL_CPA_PREPARE_MODE_REMAIN (1U << 7)
#define LIBLINUX_PAL_CPA_PREPARE_MODE_FULL (3U << 6)

/* hibernation */
int liblinux_set_pm_crypt_info(uint32_t key_index, bool clear);

struct liblinux_pal_cpa_prepare_memory_args {
	unsigned int flags;
	unsigned long water_mark_page;
	unsigned long heap_size;
	unsigned long allocated_size;

	unsigned long alloc_size;
	unsigned int order;
};
void liblinux_cpa_prepare_memory_for_work(struct liblinux_pal_cpa_prepare_memory_args *args);
void liblinux_cpa_prepare_memory_for_alloc(struct liblinux_pal_cpa_prepare_memory_args *args);
void liblinux_cpa_prepare_memory_for_remaining(struct liblinux_pal_cpa_prepare_memory_args *args);
void liblinux_cpa_prepare_memory_for_full(struct liblinux_pal_cpa_prepare_memory_args *args);
void liblinux_pal_cpa_prepare_memory(struct liblinux_pal_cpa_prepare_memory_args *args);

#ifdef CONFIG_NO_HZ_IDLE
void liblinux_inform_suspend(void);
void liblinux_inform_resume(void);
#else
static inline void liblinux_inform_suspend(void)
{
	return;
}

static inline void liblinux_inform_resume(void)
{
	return;
}
#endif
/* liblinux cpufreq */
enum constraint_reason {
	CONSTRAINT_SYSFS,
	CONSTRAINT_DRG,
	CONSTRAINT_DRIVER,
	CONSTRAINT_THERMAL,
	CONSTRAINT_REASON_NR,
};
unsigned int liblinux_pal_cpufreq_quick_get(unsigned int cpuid);
unsigned int liblinux_pal_cpufreq_quick_get_max(unsigned int cpuid);
unsigned int liblinux_pal_cpufreq_quick_get_hw_max(unsigned int cpuid);
unsigned long long liblinux_pal_get_cpu_idle_time(unsigned int cpuid, unsigned long long *wall, int io_busy);
int liblinux_pal_set_max_cpufreq(unsigned int cpuid, unsigned int target_freq, enum constraint_reason reason);
#ifdef CONFIG_LIBLINUX_HVC_CALL
void liblinux_pal_hvc_call(unsigned long *in_regs, unsigned long *out_regs);
#endif /* CONFIG_LIBLINUX_HVC_CALL */

enum liblinux_iofast_page_type {
	LIBLINUX_IOFAST_PAGE_BUDDY, /* ldk buddy pages */
	LIBLINUX_IOFAST_PAGE_DMA_BUF, /* dma_buf pages */
	LIBLINUX_IOFAST_PAGE_INIT, /* mem init used pages */
	LIBLINUX_IOFAST_PAGE_PGTBL, /* smmu level 2-3 page table */
	LIBLINUX_IOFAST_PAGE_PGD, /* smmu base level page table */
	LIBLINUX_IOFAST_PAGE_FW_CACHE, /* firmare cache pages */
#ifdef CONFIG_LIBLINUX_GPU_SYS_DIRECT_RECLAIM
	LIBLINUX_IOFAST_PAGE_GPU, /* gpu pages */
#endif
	LIBLINUX_IOFAST_PAGE_TYPE_MAX,
};

struct page;
int liblinux_move_page_iofast_zone(struct page *page, int order,
				   enum liblinux_iofast_page_type page_type);

/* iofast */
void liblinux_iofast_update_dev_reserve(unsigned long long size);
int liblinux_iofast_alloc_pfn_v(unsigned int order, unsigned long long *pa_array,
				unsigned long num, unsigned int flags,
				unsigned int *pa_num);
int liblinux_iofast_compact_pfn_v(unsigned int order, unsigned long long *pa_array,
				  unsigned long num, unsigned int flags,
				  unsigned int *pa_num);
int liblinux_iofast_free_pfn_v(unsigned long long *pa_array, unsigned int pa_num);
void *liblinux_iofast_alloc_pages(unsigned gfp_mask, unsigned int order,
				unsigned long length, void **page_array,
				unsigned int *page_num, enum liblinux_iofast_page_type page_type);
unsigned int liblinux_iofast_palloc_burst(unsigned int gfp_mask, unsigned int order,
				enum liblinux_iofast_page_type page_type,
				unsigned long length, void **page_array);
void *liblinux_iofast_alloc_page(unsigned gfp_mask, unsigned int order, enum liblinux_iofast_page_type page_type);
void liblinux_iofast_free_pages(void *page, unsigned int order, enum liblinux_iofast_page_type page_type);
void liblinux_iofast_stat_inc(enum liblinux_iofast_page_type page_type, unsigned long nr_pages);
void liblinux_iofast_stat_dec(enum liblinux_iofast_page_type page_type, unsigned long nr_pages);
long liblinux_iofast_stat_get(enum liblinux_iofast_page_type page_type);
void liblinux_iofast_stat_move(enum liblinux_iofast_page_type dst, enum liblinux_iofast_page_type src, unsigned long nr_pages);
void liblinux_iofast_mm_map_time_stat(unsigned long ktime_us);
void liblinux_iofast_mm_unmap_time_stat(unsigned long ktime_us);

/* mm shrinker optimization */
void liblinux_set_buddy_shrinker_status(bool val);
void liblinux_set_dmapage_pool_shrinker_status(bool val);

/* rtc */
struct liblinux_pal_rtc_ops {
	int (*read_time)(unsigned long *sec);
	int (*set_time)(unsigned long sec);
	int (*read_alarm)(unsigned long *sec, unsigned int *pending,
			  unsigned int *enable);
	int (*set_alarm)(unsigned long sec, unsigned int enable);
	int (*irq_enable)(unsigned int enable);
};
int liblinux_pal_rtc_ops_init(struct liblinux_pal_rtc_ops *ops);
typedef int (*set_power_on_alarm_t)(long, bool);
int liblinux_pal_register_rtc_ops(set_power_on_alarm_t set_power_on_alarm);

/* random */
int liblinux_pal_get_random_bytes(void *buf, int nbytes);
int liblinux_pal_get_random_u32(uint32_t *value);
int liblinux_pal_get_random_u64(uint64_t *value);

/* extfrag index */
int liblinux_pal_mm_extfrag_index_read(void *buf, size_t len);

struct device;
typedef struct file *(*devfs_open_handler_t)(struct device *dev, unsigned int flags);
#ifdef CONFIG_UNIX98_PTYS
#define liblinux_register_devfs_open_handler liblinux_register_devfs_open_handler
void liblinux_register_devfs_open_handler(devfs_open_handler_t fn);
#endif
#ifdef CONFIG_LDK_THERMAL_INTELLIGENT
int liblinux_pal_cooling_freq_limit(unsigned int freq_limit);
#endif

#ifdef CONFIG_THERMAL_GOV_MARGIN_CTRL
int liblinux_ext_thermal_get_shell_temp(void *buf, size_t len);
int liblinux_ext_thermal_get_power_quota(void *buf, size_t len);
#endif /* CONFIG_THERMAL_GOV_MARGIN_CTRL */

#define LIBLINUX_SYSFS_MAX 0x00FFFFFFU /* Maximum number of files supported by ldk */

int liblinux_read_lastklog_memory_config(uint64_t *addr, uint32_t *size);
int liblinux_read_ekbox_memory_config(uint64_t *addr, uint32_t *size);
int liblinux_read_kstack_memory_config(uint64_t *addr, uint32_t *size);

#ifdef CONFIG_LIBLINUX_DEBUGFS_HMV
int liblinux_pal_vfs_hmv_read_debugfs_info(uint64_t shm_key, size_t len, int pid, int type);
#endif
#endif	/* !__ASSEMBLY__ */
#endif	/* CONFIG_LIBLINUX */
#endif	/* __LIBLINUX_PAL_H__ */
```

> HarmonyOS 6 使用了自研的 HongMeng Kernel（`hm-verif-kernel`），同时嵌入了自定义为`liblinux`的用户态 Linux（`linux-5.10-lts`，似乎与微内核共享地址空间）。

## DevEco Studio 虚拟机镜像的研究

HarmonyOS 6.0.0 的 x86 虚拟机镜像：<https://update.dbankcdn.com/download/data/pub_13/HWHOTA_hota_900_9/a7/v3/j_DYt5c1R0-v3uxX9Vx9Pw/system-image-phone_all-x86.zip>

```sh
bzImage:         Linux kernel x86 boot executable, bzImage, version 5.10.210 (huawei@ceresf64116) #1 SMP Thu Sep 18 17:18:29 CST 2025, RO-rootFS, Normal VGA, setup size 512*29, syssize 0x9ba90, jump 0x26c 0x8cd88ec0fc8cd239 instruction, protocol 2.15, from protected-mode code at offset 0x411 0x9aa85e bytes gzip compressed, relocatable, handover offset 0x190, legacy 64-bit entry point, can be above 4G, 32-bit EFI handoff entry point, 64-bit EFI handoff entry point, EFI kexec boot support, xloadflags bit 5, max cmdline size 2047, init_size 0x2558000
features.ini:    ASCII text
image_signature: directory
info.json:       JSON text data
ramdisk.img:     gzip compressed data, was "ramdisk.img", last modified: Thu Sep 18 10:17:21 2025, from Unix, original size modulo 2^32 5843456
sdk-pkg.json:    JSON text data
sys_prod.img:    Linux rev 1.0 ext2 filesystem data, UUID=12dc6d56-c937-432d-b28b-1fbf7358abbf (extents) (64bit) (large files) (huge files)
system.img:      Linux rev 1.0 ext2 filesystem data, UUID=35dc30d0-9bd4-44cb-878f-21ffaec670b7 (extents) (64bit) (large files) (huge files)
userdata.img:    Linux rev 1.0 ext4 filesystem data, UUID=35b92a43-fd08-4aac-b74f-8c3323bac960 (extents) (64bit) (large files) (huge files)
vendor.img:      Linux rev 1.0 ext2 filesystem data, UUID=d94d9942-b4fa-46cc-a389-4c9a8ce0bfce (extents) (64bit) (large files) (huge files)
```

需要注意，虚拟机镜像提供了和消费者设备不同的内核。若确有性能调试的需要，请注意此差异可能会导致和实体机不同的行为。

## 结语

事实上，在现代系统软件工程中，没有任何体系能够脱离全球开源生态的滋养而凭空构建——从 Linux 内核、SELinux、OpenSSL 到基础 C 运行库，皆是人类软件文明数十年协作沉淀的公共基础设施。

更深层来看，所谓“去 Linux 化”与“去 AOSP 化”，本身就是一个由泛政治化叙事催生的工程伪命题。将属于全人类共享的开源数字基建预设为地缘政治的假想敌，以封闭落后的“血统纯洁论”作为评判技术先进性的标准，本质上是用政治挂帅绑架了客观的技术演进规律。

若在此之上，再利用大众的技术信息差构筑“零依赖、全自研”的宣发幻象，便不仅背离了科学常识，更触及了商业诚信与工程伦理的底线。

非技术的意识形态绝非合理的工程决策依据。如果脱耦确是既定的战略选择，坦白承认当下的依赖并给出透明务实的演进节奏，才是对开发者、开源社区乃至自身工程团队最起码的尊重。

## 附件：`SimomYung/unpack_huawei_package`主程序

```python
import os
import struct

# 输入的二进制文件路径
input_file_path = "update.bin"
# 分块大小，可根据实际情况调整
chunk_size = 1024 * 1024  # 1MB
components = []

try:
    # 获取输入文件的大小
    input_file_size = os.path.getsize(input_file_path)

    # 打开输入的二进制文件
    with open(input_file_path, 'rb') as input_file:
        COMPINFO_LEN_OFFSET = 178
        input_file.seek(COMPINFO_LEN_OFFSET)
        compinfo_len_buffer = input_file.read(2)     #读取分区信息大小
        compinfo_all_size = struct.unpack("H", compinfo_len_buffer)[0]

        input_file.seek(COMPINFO_LEN_OFFSET + 2 + compinfo_all_size + 16)    #读取签名大小
        compinfo_len_buffer = input_file.read(2)
        type2 = struct.unpack("H", compinfo_len_buffer)[0]
        if type2 == 0x08:
            hashdata_len_buffer = input_file.read(4)
            hashdata_size = struct.unpack("I", hashdata_len_buffer)[0]
            data_start_offset = COMPINFO_LEN_OFFSET + 2 + compinfo_all_size + 16 + 2 + 4 + hashdata_size
        elif type2 == 0x06:
            hashdata_len_buffer = input_file.read(16)
            hashdata_len_buffer = input_file.read(4)
            hashdata_size = struct.unpack("I", hashdata_len_buffer)[0]
            data_start_offset = COMPINFO_LEN_OFFSET + 2 + compinfo_all_size + 16 + 18 + 4 + hashdata_size

        component_count = compinfo_all_size / 87
        count = 1
        OFFSET = COMPINFO_LEN_OFFSET + 2
        while count <= component_count:
            if count >1:
                data_start_offset += component_size
            input_file.seek(OFFSET)
            component_info = input_file.read(87)
            component_name = component_info.split(b"\x00")[0].decode('utf-8')
            component_name += ".img"
            component_name = component_name.lstrip("/")
            OFFSET += 47
            input_file.seek(OFFSET)
            component_info = input_file.read(8)    #读取分区大小
            component_size = struct.unpack("Q", component_info)[0]
            OFFSET += 40
            count += 1
            dict={}
            dict["name"] = component_name
            dict["offset"] = data_start_offset
            dict["size"] = component_size
            components.append(dict)

        for component in components:
            name = component["name"]
            offset = component["offset"]
            size = component["size"]

            # 检查是否会读取超出文件范围
            if offset + size > input_file_size:
                print(f"错误: 尝试读取 {name} 时超出文件范围")
                continue

            # 移动文件指针到指定偏移量
            input_file.seek(offset)

            # 创建并写入切割后的文件
            with open(name, 'wb') as output_file:
                remaining_size = size
                while remaining_size > 0:
                    read_size = min(remaining_size, chunk_size)
                    data = input_file.read(read_size)
                    output_file.write(data)
                    remaining_size -= read_size

            print(f"成功切割 {name}")

except FileNotFoundError:
    print(f"错误: 未找到输入文件 {input_file_path}")
except Exception as e:
    print(f"发生未知错误: {e}")
```
