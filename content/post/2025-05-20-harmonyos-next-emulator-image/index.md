---
categories: Original
date: 2025-05-20T00:00:00Z
tags:
    - 信息技术
    - 华为
    - 操作系统
slug: harmonyos-next-emulator-image
title: HarmonyOS NEXT 的虚拟机镜像
---

## 获取镜像

HarmonyOS NEXT 的虚拟机镜像可以通过[DevEco Studio](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-software-download)，它也包含为 HarmonyOS NEXT 开发软件的 IDE 和虚拟机。

如果不想下载 DevEco Studio，这里有目前最新版本的[手机 x86 虚拟机镜像](https://update.dbankcdn.com/download/data/pub_13/HWHOTA_hota_900_9/4a/v3/SurZ60PYSryhwf0W4QEK1g/system-image-phone-x86.zip)和[二合一（电脑） x86 虚拟机镜像](https://update.dbankcdn.com/download/data/pub_13/HWHOTA_hota_900_9/4a/v3/SurZ60PYSryhwf0W4QEK1g/system-image-2in1-x86.zip)。

## 文件结构

下面是手机 x86 虚拟机镜像的文件结构（使用[treex](https://github.com/shiquda/treex)和[file](https://github.com/file/file)生成）：

```plain
./
├── bzImage # Linux kernel x86 boot executable, bzImage, version 5.10.210 (huawei@ceres605077) #1 SMP Sat May 10 11:18:22 CST 2025, RO-rootFS, Normal VGA, setup size 512*29, syssize 0x9a77e, jump 0x26c 0x8cd88ec0fc8cd239 instruction, protocol 2.15, from protected-mode code at offset 0x411 0x997731 bytes gzip compressed, relocatable, handover offset 0x190, legacy 64-bit entry point, can be above 4G, 32-bit EFI handoff entry point, 64-bit EFI handoff entry point, EFI kexec boot support, xloadflags bit 5, max cmdline size 2047, init_size 0x2347000
├── features.ini # ASCII text
├── image_signature/
│   ├── bzImage.hwp7s # DER Encoded PKCS#7 Signed Data
│   ├── ramdisk.img.hwp7s # DER Encoded PKCS#7 Signed Data
│   ├── sys_prod.img.hwp7s # DER Encoded PKCS#7 Signed Data
│   ├── system.img.hwp7s # DER Encoded PKCS#7 Signed Data
│   ├── userdata.img.hwp7s # DER Encoded PKCS#7 Signed Data
│   └── vendor.img.hwp7s # DER Encoded PKCS#7 Signed Data
├── info.json # JSON text data
├── ramdisk.img # ASCII cpio archive (SVR4 with no CRC) (gzip compressed data, was "ramdisk.img", last modified: Sat May 10 03:35:46 2025, from Unix)
├── sdk-pkg.json # JSON text data
├── sys_prod.img # Linux rev 1.0 ext2 filesystem data, UUID=991aa1a4-5721-4c3f-8a4b-004bf24c6db2 (extents) (64bit) (large files) (huge files)
├── system.img # block special
├── userdata.img # Linux rev 1.0 ext4 filesystem data, UUID=a828f121-b86f-4928-8320-d445e8311586 (extents) (64bit) (large files) (huge files)
└── vendor.img # Linux rev 1.0 ext2 filesystem data, UUID=48c8b409-bf54-44ba-bcbd-f57e5ecbf126 (extents) (64bit) (large files) (huge files)
```

### `features.ini`

```ini
navigation=on
hdc.mode.bridge=on
crashreport.type.kernel_panic=on
push.dir.download=on
bootanimation.feature.key=off
camera.feature=off

```

### `info.json`

```json
{
    "apiVersion": "17",
    "abi": "x86",
    "version": "5.0.1.120"
}
```

### `sdk-pkg.json`

```json
{
    "meta": {
        "version": "1.0.0"
    },
    "data": {
        "apiVersion": "17",
        "displayName": "System-image-phone",
        "path": "system-image,HarmonyOS-5.0.5,phone_x86",
        "platformVersion": "5.0.5",
        "releaseType": "Release",
        "version": "5.0.1.120",
        "guestVersion": "HarmonyOS 5.0.1.120(SP3)",
        "stage": "Release"
    }
}
```

### `ramdisk.img`

```plain
./
├── bin/
│   ├── base64
│   ├── basename
│   ├── blockdev
│   ├── cal
│   ├── cat
│   ├── chgrp
│   ├── chmod
│   ├── chown
│   ├── chroot
│   ├── chrt
│   ├── chvt
│   ├── cksum
│   ├── clear
│   ├── cmp
│   ├── comm
│   ├── count
│   ├── cp
│   ├── cpio
│   ├── crc32
│   ├── cut
│   ├── date
│   ├── dd
│   ├── devmem
│   ├── df
│   ├── diff
│   ├── dirname
│   ├── dmesg
│   ├── dnsdomainname
│   ├── dos2unix
│   ├── du
│   ├── echo
│   ├── egrep
│   ├── eject
│   ├── env
│   ├── expand
│   ├── expr
│   ├── factor
│   ├── fallocate
│   ├── false
│   ├── fgrep
│   ├── file
│   ├── find
│   ├── flock
│   ├── fmt
│   ├── free
│   ├── freeramdisk
│   ├── fsfreeze
│   ├── fstype
│   ├── fsync
│   ├── ftpget
│   ├── ftpput
│   ├── getconf
│   ├── grep
│   ├── groups
│   ├── gunzip
│   ├── gzip
│   ├── halt
│   ├── head
│   ├── help
│   ├── hexedit
│   ├── hostname
│   ├── hwclock
│   ├── i2cdetect
│   ├── i2cdump
│   ├── i2cget
│   ├── i2cset
│   ├── iconv
│   ├── id
│   ├── ifconfig
│   ├── init_early
│   ├── inotifyd
│   ├── insmod
│   ├── install
│   ├── ionice
│   ├── iorenice
│   ├── iotop
│   ├── kill
│   ├── killall
│   ├── killall5
│   ├── link
│   ├── ln
│   ├── logger
│   ├── login
│   ├── logname
│   ├── losetup
│   ├── ls
│   ├── lsattr
│   ├── lsmod
│   ├── lsof
│   ├── lspci
│   ├── lsusb
│   ├── makedevs
│   ├── mcookie
│   ├── md5sum
│   ├── mdev
│   ├── microcom
│   ├── mix
│   ├── mkdir
│   ├── mkfifo
│   ├── mknod
│   ├── mkpasswd
│   ├── mkswap
│   ├── mktemp
│   ├── modinfo
│   ├── more
│   ├── mount
│   ├── mountpoint
│   ├── mv
│   ├── nbd-client
│   ├── netcat
│   ├── netstat
│   ├── nice
│   ├── nl
│   ├── nohup
│   ├── nproc
│   ├── nsenter
│   ├── od
│   ├── oneit
│   ├── partprobe
│   ├── passwd
│   ├── paste
│   ├── patch
│   ├── pgrep
│   ├── pidof
│   ├── ping
│   ├── ping6
│   ├── pivot_root
│   ├── pkill
│   ├── pmap
│   ├── poweroff
│   ├── printenv
│   ├── printf
│   ├── prlimit
│   ├── ps
│   ├── pwd
│   ├── pwdx
│   ├── readahead
│   ├── readlink
│   ├── realpath
│   ├── renice
│   ├── reset
│   ├── rev
│   ├── rfkill
│   ├── rm
│   ├── rmdir
│   ├── rmmod
│   ├── runcon
│   ├── sed
│   ├── sendevent
│   ├── seq
│   ├── setfattr
│   ├── setsid
│   ├── sh
│   ├── sha1sum
│   ├── sha224sum
│   ├── sha256sum
│   ├── sha384sum
│   ├── sha512sum
│   ├── shalsum
│   ├── shred
│   ├── sleep
│   ├── sntp
│   ├── sort
│   ├── split
│   ├── stat
│   ├── strings
│   ├── swapoff
│   ├── swapon
│   ├── switch_root
│   ├── sync
│   ├── sysctl
│   ├── sysctrl
│   ├── tac
│   ├── tail
│   ├── tar
│   ├── taskset
│   ├── tee
│   ├── test
│   ├── time
│   ├── timeout
│   ├── top
│   ├── touch
│   ├── toybox
│   ├── tr
│   ├── traceroute
│   ├── true
│   ├── truncate
│   ├── tty
│   ├── tunctl
│   ├── ulimit
│   ├── umount
│   ├── uname
│   ├── uniq
│   ├── unix2dos
│   ├── unlink
│   ├── unshare
│   ├── uptime
│   ├── usleep
│   ├── uudecode
│   ├── uuencode
│   ├── uuidgen
│   ├── vconfig
│   ├── vmstat
│   ├── w
│   ├── watch
│   ├── wc
│   ├── which
│   ├── who
│   ├── whoami
│   ├── xargs
│   ├── xxd
│   ├── yes
│   └── zcat
├── chip_prod/
├── cust/
├── dev/
├── etc/
│   ├── ld-musl-aarch64.path
│   └── ld-musl-namespace-x86_64.ini
├── init
├── lib/
│   └── ld-musl-x86_64.so.1
├── lib64/
│   ├── chipset-pub-sdk/
│   │   ├── libpcre2.z.so
│   │   └── libselinux.z.so
│   ├── libc.so
│   ├── libclang_rt.asan.so
│   ├── libinit_module_engine.so
│   ├── libinit_stub_empty.so
│   ├── libload_policy.z.so
│   ├── libsepol.z.so
│   └── platformsdk/
│       └── librestorecon.z.so
├── log/
├── mnt/
├── patch_hw/
├── preload/
├── proc/
├── storage/
├── sys/
├── sys_prod/
├── system/
├── usr/
├── vendor/
└── version/
```

### `sys_prod.img`

```plain
./
├── app/
│   ├── HwAIEngine/
│   │   ├── asr-entry-default-signed.hap
│   │   ├── asrEn-entry-default-signed.hap
│   │   ├── entry-default-signed.hap
│   │   ├── hms-core-ml-aestheticsService-signed.hap
│   │   ├── hms-core-ml-aiSegmentService-signed.hap
│   │   ├── hms-core-ml-captionService-signed.hap
│   │   ├── hms-core-ml-ccrServiceHsp-signed.hsp
│   │   ├── hms-core-ml-clusterService-signed.hap
│   │   ├── hms-core-ml-coBackboneService-signed.hap
│   │   ├── hms-core-ml-doc-signed.hap
│   │   ├── hms-core-ml-extPhotoService-signed.hap
│   │   ├── hms-core-ml-faceService-signed.hap
│   │   ├── hms-core-ml-faceVerificationService-signed.hap
│   │   ├── hms-core-ml-labelService-signed.hap
│   │   ├── hms-core-ml-layoutService-signed.hap
│   │   ├── hms-core-ml-multiObjService-signed.hap
│   │   ├── hms-core-ml-privacyService-signed.hap
│   │   ├── hms-core-ml-semanticService-signed.hap
│   │   ├── hms-core-ml-sensitiveService-signed.hap
│   │   ├── hms-core-ml-skeletonService-signed.hap
│   │   ├── hms-core-ml-textService-signed.hap
│   │   ├── hms-core-ml-translateService-signed.hap
│   │   ├── hms-core-ml-visionBaseService-signed.hap
│   │   ├── nluengine-entry-default-signed.hap
│   │   ├── support-entry-default-signed.hap
│   │   └── tts-entry-default-signed.hap
│   └── SystemResourcesOverlay/
│       └── SystemResourcesOverlay.hap
├── etc/
│   ├── VideoProcessingEngine/
│   │   ├── AILIGHT_cls.omc
│   │   ├── AILIGHT_normal.omc
│   │   ├── AILIGHT_strong.omc
│   │   ├── Image_SR_Model_1104x1488_20240402.omc
│   │   ├── Image_SR_Model_1488x1104_20240402.omc
│   │   ├── Image_SR_Model_1872x1360_20240402.omc
│   │   ├── Image_SR_Model_576x576_20240402.omc
│   │   ├── Image_SR_Model_848x1104_20240402.omc
│   │   ├── VideoSR_quant_1024x576.omc
│   │   ├── VideoSR_quant_1280x768.omc
│   │   ├── VideoSR_quant_720x1280.omc
│   │   ├── VideoSR_quant_960x576.omc
│   │   ├── aihdr_pic.bin
│   │   ├── calcHistCompFullShader1.bin
│   │   ├── calcHistCompLimitShader1.bin
│   │   ├── calcHistCompRgbShader1.bin
│   │   ├── calcHistCompShader0.bin
│   │   ├── hdr2hdr_video_hlg2pq_r2r.bin
│   │   ├── hdr2hdr_video_hlg2pq_r2y.bin
│   │   ├── hdr2hdr_video_hlg2pq_y2r.bin
│   │   ├── hdr2hdr_video_hlg2pq_y2y.bin
│   │   ├── hdr2hdr_video_pq2hlg_r2r.bin
│   │   ├── hdr2hdr_video_pq2hlg_r2y.bin
│   │   ├── hdr2hdr_video_pq2hlg_y2r.bin
│   │   ├── hdr2hdr_video_pq2hlg_y2y.bin
│   │   ├── hdr2sdr_video_hlg_r2r.bin
│   │   ├── hdr2sdr_video_hlg_r2r_default.bin
│   │   ├── hdr2sdr_video_hlg_r2y.bin
│   │   ├── hdr2sdr_video_hlg_r2y_default.bin
│   │   ├── hdr2sdr_video_hlg_y2r.bin
│   │   ├── hdr2sdr_video_hlg_y2r_default.bin
│   │   ├── hdr2sdr_video_hlg_y2y.bin
│   │   ├── hdr2sdr_video_hlg_y2y_default.bin
│   │   ├── hdr2sdr_video_pq_r2r.bin
│   │   ├── hdr2sdr_video_pq_r2y.bin
│   │   ├── hdr2sdr_video_pq_y2r.bin
│   │   ├── hdr2sdr_video_pq_y2y.bin
│   │   ├── hdr_compose.bin
│   │   ├── hdr_decompose.bin
│   │   ├── image_aisr_algo_config.xml
│   │   ├── libaihdr_engine.so
│   │   ├── libdisplay_aipq_imagesr.so
│   │   ├── libdisplay_aipq_proxy.so
│   │   ├── libextream_vision_engine.so
│   │   ├── sdr2sdr_video_convert_ebu_r2r.bin
│   │   ├── sdr2sdr_video_convert_ebu_r2y.bin
│   │   ├── sdr2sdr_video_convert_ebu_y2r.bin
│   │   ├── sdr2sdr_video_convert_ebu_y2y.bin
│   │   ├── sdr2sdr_video_convert_smpte_r2r.bin
│   │   ├── sdr2sdr_video_convert_smpte_r2y.bin
│   │   ├── sdr2sdr_video_convert_smpte_y2r.bin
│   │   ├── sdr2sdr_video_convert_smpte_y2y.bin
│   │   ├── sdr_convert.bin
│   │   └── video_sr_algo_config.xml
│   ├── aod/
│   │   └── aod_config.json
│   ├── app/
│   │   ├── install_list.json
│   │   └── uninstall_list.json
│   ├── audio/
│   │   └── audio_volume_config.xml
│   ├── battery/
│   │   └── battery_config.json
│   ├── bootanimation/
│   │   ├── bootanimation_custom_config.json
│   │   └── cust_bootvideo.mp4
│   ├── cgroup_sched/
│   │   └── cgroup_action_config.json
│   ├── charger/
│   │   ├── bms_animation.json
│   │   ├── chargelogo.mbn
│   │   └── res0/
│   │       ├── battery_abnormality_empty_charge.png
│   │       ├── battery_abnormality_err_charge.png
│   │       ├── battery_abnormality_full_charge.png
│   │       ├── bg.png
│   │       ├── dcp_empty_charge.png
│   │       ├── dcp_empty_charge_wireless.png
│   │       ├── err_charge.png
│   │       ├── fcp_empty_charge.png
│   │       ├── fcp_empty_charge_wireless.png
│   │       ├── full_charge.png
│   │       ├── public/
│   │       │   ├── battery_01.png
│   │       │   ├── battery_02.png
│   │       │   ├── battery_03.png
│   │       │   ├── battery_04.png
│   │       │   ├── battery_05.png
│   │       │   ├── battery_06.png
│   │       │   ├── battery_07.png
│   │       │   ├── battery_08.png
│   │       │   ├── battery_09.png
│   │       │   ├── battery_abnormality_charging.png
│   │       │   ├── clric_00.png
│   │       │   ├── clric_01.png
│   │       │   ├── clric_02.png
│   │       │   ├── clric_03.png
│   │       │   ├── clric_04.png
│   │       │   ├── clric_05.png
│   │       │   ├── clric_06.png
│   │       │   ├── clric_07.png
│   │       │   ├── clric_08.png
│   │       │   ├── clric_09.png
│   │       │   ├── clric_10.png
│   │       │   ├── clric_11.png
│   │       │   ├── clric_12.png
│   │       │   ├── clric_13.png
│   │       │   ├── clric_14.png
│   │       │   ├── clric_15.png
│   │       │   ├── clric_16.png
│   │       │   ├── clric_17.png
│   │       │   ├── clric_18.png
│   │       │   ├── clric_19.png
│   │       │   ├── clric_20.png
│   │       │   ├── clric_21.png
│   │       │   ├── clric_22.png
│   │       │   ├── clric_23.png
│   │       │   ├── clric_24.png
│   │       │   ├── clric_25.png
│   │       │   ├── clric_26.png
│   │       │   ├── clric_27.png
│   │       │   ├── clric_28.png
│   │       │   ├── clric_29.png
│   │       │   ├── clric_30.png
│   │       │   ├── clric_31.png
│   │       │   ├── clric_32.png
│   │       │   ├── clric_33.png
│   │       │   ├── clric_34.png
│   │       │   ├── clric_35.png
│   │       │   ├── clric_36.png
│   │       │   ├── clric_37.png
│   │       │   ├── clric_38.png
│   │       │   ├── clric_39.png
│   │       │   ├── clric_40.png
│   │       │   ├── clric_41.png
│   │       │   ├── clric_42.png
│   │       │   ├── clric_43.png
│   │       │   ├── clric_44.png
│   │       │   ├── clric_45.png
│   │       │   ├── clric_46.png
│   │       │   ├── clric_47.png
│   │       │   ├── clric_48.png
│   │       │   ├── clric_49.png
│   │       │   ├── clric_50.png
│   │       │   ├── clric_51.png
│   │       │   ├── clric_52.png
│   │       │   ├── clric_53.png
│   │       │   ├── clric_54.png
│   │       │   ├── clric_55.png
│   │       │   ├── clric_56.png
│   │       │   ├── clric_57.png
│   │       │   ├── clric_58.png
│   │       │   ├── clric_59.png
│   │       │   ├── clric_60.png
│   │       │   ├── clric_61.png
│   │       │   ├── clric_62.png
│   │       │   ├── clric_63.png
│   │       │   ├── clric_64.png
│   │       │   ├── clric_65.png
│   │       │   ├── clric_66.png
│   │       │   ├── clric_67.png
│   │       │   ├── clric_68.png
│   │       │   ├── clric_69.png
│   │       │   ├── clric_70.png
│   │       │   ├── clric_71.png
│   │       │   ├── clric_72.png
│   │       │   ├── clric_73.png
│   │       │   ├── clric_74.png
│   │       │   ├── clric_75.png
│   │       │   ├── clric_76.png
│   │       │   ├── clric_77.png
│   │       │   ├── clric_78.png
│   │       │   ├── clric_79.png
│   │       │   ├── clric_80.png
│   │       │   ├── clric_81.png
│   │       │   ├── clric_82.png
│   │       │   ├── clric_83.png
│   │       │   ├── clric_84.png
│   │       │   ├── clric_85.png
│   │       │   ├── clric_86.png
│   │       │   ├── clric_87.png
│   │       │   ├── clric_88.png
│   │       │   ├── clric_89.png
│   │       │   ├── clric_90.png
│   │       │   ├── clric_91.png
│   │       │   ├── clric_92.png
│   │       │   ├── clric_93.png
│   │       │   ├── clric_94.png
│   │       │   ├── clric_95.png
│   │       │   ├── clric_96.png
│   │       │   ├── clric_97.png
│   │       │   ├── clric_98.png
│   │       │   ├── clric_99.png
│   │       │   ├── cur_surface.png
│   │       │   ├── dcp_charging_00.png
│   │       │   ├── dcp_charging_01.png
│   │       │   ├── dcp_charging_02.png
│   │       │   ├── dcp_charging_03.png
│   │       │   ├── dcp_charging_04.png
│   │       │   ├── dcp_charging_05.png
│   │       │   ├── dcp_charging_06.png
│   │       │   ├── dcp_charging_07.png
│   │       │   ├── dcp_charging_08.png
│   │       │   ├── dcp_charging_09.png
│   │       │   ├── dcp_charging_10.png
│   │       │   ├── dcp_charging_11.png
│   │       │   ├── dcp_charging_12.png
│   │       │   ├── dcp_charging_13.png
│   │       │   ├── dcp_charging_14.png
│   │       │   ├── dcp_charging_15.png
│   │       │   ├── dcp_charging_16.png
│   │       │   ├── dcp_charging_17.png
│   │       │   ├── dcp_charging_18.png
│   │       │   ├── dcp_charging_19.png
│   │       │   ├── dcp_charging_20.png
│   │       │   ├── dcp_charging_21.png
│   │       │   ├── dcp_charging_22.png
│   │       │   ├── dcp_charging_23.png
│   │       │   ├── dcp_charging_wireless_00.png
│   │       │   ├── dcp_charging_wireless_01.png
│   │       │   ├── dcp_charging_wireless_02.png
│   │       │   ├── dcp_charging_wireless_03.png
│   │       │   ├── dcp_charging_wireless_04.png
│   │       │   ├── dcp_charging_wireless_05.png
│   │       │   ├── dcp_charging_wireless_06.png
│   │       │   ├── dcp_charging_wireless_07.png
│   │       │   ├── dcp_charging_wireless_08.png
│   │       │   ├── dcp_charging_wireless_09.png
│   │       │   ├── dcp_charging_wireless_10.png
│   │       │   ├── dcp_charging_wireless_11.png
│   │       │   ├── dcp_charging_wireless_12.png
│   │       │   ├── dcp_charging_wireless_13.png
│   │       │   ├── dcp_charging_wireless_14.png
│   │       │   ├── dcp_charging_wireless_15.png
│   │       │   ├── dcp_charging_wireless_16.png
│   │       │   ├── dcp_charging_wireless_17.png
│   │       │   ├── dcp_charging_wireless_18.png
│   │       │   ├── dcp_charging_wireless_19.png
│   │       │   ├── dcp_charging_wireless_20.png
│   │       │   ├── dcp_charging_wireless_21.png
│   │       │   ├── dcp_charging_wireless_22.png
│   │       │   ├── dcp_charging_wireless_23.png
│   │       │   ├── fcp_charging_00.png
│   │       │   ├── fcp_charging_01.png
│   │       │   ├── fcp_charging_02.png
│   │       │   ├── fcp_charging_03.png
│   │       │   ├── fcp_charging_04.png
│   │       │   ├── fcp_charging_05.png
│   │       │   ├── fcp_charging_06.png
│   │       │   ├── fcp_charging_07.png
│   │       │   ├── fcp_charging_08.png
│   │       │   ├── fcp_charging_09.png
│   │       │   ├── fcp_charging_10.png
│   │       │   ├── fcp_charging_11.png
│   │       │   ├── fcp_charging_12.png
│   │       │   ├── fcp_charging_13.png
│   │       │   ├── fcp_charging_14.png
│   │       │   ├── fcp_charging_15.png
│   │       │   ├── fcp_charging_16.png
│   │       │   ├── fcp_charging_17.png
│   │       │   ├── fcp_charging_18.png
│   │       │   ├── fcp_charging_19.png
│   │       │   ├── fcp_charging_20.png
│   │       │   ├── fcp_charging_21.png
│   │       │   ├── fcp_charging_22.png
│   │       │   ├── fcp_charging_23.png
│   │       │   ├── fcp_charging_wireless_00.png
│   │       │   ├── fcp_charging_wireless_01.png
│   │       │   ├── fcp_charging_wireless_02.png
│   │       │   ├── fcp_charging_wireless_03.png
│   │       │   ├── fcp_charging_wireless_04.png
│   │       │   ├── fcp_charging_wireless_05.png
│   │       │   ├── fcp_charging_wireless_06.png
│   │       │   ├── fcp_charging_wireless_07.png
│   │       │   ├── fcp_charging_wireless_08.png
│   │       │   ├── fcp_charging_wireless_09.png
│   │       │   ├── fcp_charging_wireless_10.png
│   │       │   ├── fcp_charging_wireless_11.png
│   │       │   ├── fcp_charging_wireless_12.png
│   │       │   ├── fcp_charging_wireless_13.png
│   │       │   ├── fcp_charging_wireless_14.png
│   │       │   ├── fcp_charging_wireless_15.png
│   │       │   ├── fcp_charging_wireless_16.png
│   │       │   ├── fcp_charging_wireless_17.png
│   │       │   ├── fcp_charging_wireless_18.png
│   │       │   ├── fcp_charging_wireless_19.png
│   │       │   ├── fcp_charging_wireless_20.png
│   │       │   ├── fcp_charging_wireless_21.png
│   │       │   ├── fcp_charging_wireless_22.png
│   │       │   ├── fcp_charging_wireless_23.png
│   │       │   ├── number_0.png
│   │       │   ├── number_1.png
│   │       │   ├── number_2.png
│   │       │   ├── number_3.png
│   │       │   ├── number_4.png
│   │       │   ├── number_5.png
│   │       │   ├── number_6.png
│   │       │   ├── number_7.png
│   │       │   ├── number_8.png
│   │       │   ├── number_9.png
│   │       │   ├── percent_sign.png
│   │       │   ├── scp_charging_00.png
│   │       │   ├── scp_charging_01.png
│   │       │   ├── scp_charging_02.png
│   │       │   ├── scp_charging_03.png
│   │       │   ├── scp_charging_04.png
│   │       │   ├── scp_charging_05.png
│   │       │   ├── scp_charging_06.png
│   │       │   ├── scp_charging_07.png
│   │       │   ├── scp_charging_08.png
│   │       │   ├── scp_charging_09.png
│   │       │   ├── scp_charging_10.png
│   │       │   ├── scp_charging_11.png
│   │       │   ├── scp_charging_12.png
│   │       │   ├── scp_charging_13.png
│   │       │   ├── scp_charging_14.png
│   │       │   ├── scp_charging_15.png
│   │       │   ├── scp_charging_16.png
│   │       │   ├── scp_charging_17.png
│   │       │   ├── scp_charging_18.png
│   │       │   ├── scp_charging_19.png
│   │       │   ├── scp_charging_20.png
│   │       │   ├── scp_charging_21.png
│   │       │   ├── scp_charging_22.png
│   │       │   ├── scp_charging_23.png
│   │       │   ├── scp_charging_wireless_00.png
│   │       │   ├── scp_charging_wireless_01.png
│   │       │   ├── scp_charging_wireless_02.png
│   │       │   ├── scp_charging_wireless_03.png
│   │       │   ├── scp_charging_wireless_04.png
│   │       │   ├── scp_charging_wireless_05.png
│   │       │   ├── scp_charging_wireless_06.png
│   │       │   ├── scp_charging_wireless_07.png
│   │       │   ├── scp_charging_wireless_08.png
│   │       │   ├── scp_charging_wireless_09.png
│   │       │   ├── scp_charging_wireless_10.png
│   │       │   ├── scp_charging_wireless_11.png
│   │       │   ├── scp_charging_wireless_12.png
│   │       │   ├── scp_charging_wireless_13.png
│   │       │   ├── scp_charging_wireless_14.png
│   │       │   ├── scp_charging_wireless_15.png
│   │       │   ├── scp_charging_wireless_16.png
│   │       │   ├── scp_charging_wireless_17.png
│   │       │   ├── scp_charging_wireless_18.png
│   │       │   ├── scp_charging_wireless_19.png
│   │       │   ├── scp_charging_wireless_20.png
│   │       │   ├── scp_charging_wireless_21.png
│   │       │   ├── scp_charging_wireless_22.png
│   │       │   └── scp_charging_wireless_23.png
│   │       ├── scp_empty_charge.png
│   │       └── scp_empty_charge_wireless.png
│   ├── component_version.txt
│   ├── cust/
│   │   └── system_layer.cfg
│   ├── distributedhardware/
│   │   ├── dinput_business_event_whitelist.cfg
│   │   └── distributed_hardware_components_cfg.json
│   ├── efficiency_manager/
│   │   ├── component_sched_config.xml
│   │   └── socperf_power_config.xml
│   ├── graphic/
│   │   └── hgm_policy_config.xml
│   ├── groupcfg/
│   ├── hiview/
│   │   └── xpower/
│   │       └── hw_xpower_config.xml
│   ├── hw_launcher_default_workspace.json
│   ├── memmgr/
│   │   └── memmgr_config.xml
│   ├── noticeFile/
│   ├── oobe/
│   │   └── hwupgrade_extend_pages.json
│   ├── osfingersense/
│   │   └── BA.bin
│   ├── param/
│   │   └── hw_defaults.para
│   ├── publicity_all.xml
│   ├── ressched/
│   │   ├── res_sched_config.xml
│   │   └── res_sched_plugin_switch.xml
│   ├── soc_perf/
│   │   ├── socperf_boost_config.xml
│   │   └── socperf_resource_config.xml
│   ├── standby_service/
│   │   ├── device_standby_config.json
│   │   └── standby_strategy_config.json
│   ├── thermal_config/
│   │   ├── thermal_aware_config.xml
│   │   ├── thermal_hdi_config.xml
│   │   ├── thermal_service_config.xml
│   │   └── thermald.xml
│   ├── window/
│   │   └── resources/
│   │       ├── display_manager_config.xml
│   │       └── window_manager_config.xml
│   └── xml/
│       ├── SarRuleConfig.xml
│       ├── compose_package_content.xml
│       └── hw_defaults.xml
├── lib64/
│   ├── VideoProcessingEngine/
│   │   ├── AILIGHT_cls.omc
│   │   ├── AILIGHT_normal.omc
│   │   ├── AILIGHT_strong.omc
│   │   ├── Image_SR_Model_1104x1488_20240402.omc
│   │   ├── Image_SR_Model_1488x1104_20240402.omc
│   │   ├── Image_SR_Model_1872x1360_20240402.omc
│   │   ├── Image_SR_Model_576x576_20240402.omc
│   │   ├── Image_SR_Model_848x1104_20240402.omc
│   │   ├── VideoSR_quant_1024x576.omc
│   │   ├── VideoSR_quant_1280x768.omc
│   │   ├── VideoSR_quant_720x1280.omc
│   │   ├── VideoSR_quant_960x576.omc
│   │   ├── aihdr_pic.bin
│   │   ├── calcHistCompFullShader1.bin
│   │   ├── calcHistCompLimitShader1.bin
│   │   ├── calcHistCompRgbShader1.bin
│   │   ├── calcHistCompShader0.bin
│   │   ├── hdr2hdr_video_hlg2pq_r2r.bin
│   │   ├── hdr2hdr_video_hlg2pq_r2y.bin
│   │   ├── hdr2hdr_video_hlg2pq_y2r.bin
│   │   ├── hdr2hdr_video_hlg2pq_y2y.bin
│   │   ├── hdr2hdr_video_pq2hlg_r2r.bin
│   │   ├── hdr2hdr_video_pq2hlg_r2y.bin
│   │   ├── hdr2hdr_video_pq2hlg_y2r.bin
│   │   ├── hdr2hdr_video_pq2hlg_y2y.bin
│   │   ├── hdr2sdr_video_hlg_r2r.bin
│   │   ├── hdr2sdr_video_hlg_r2r_default.bin
│   │   ├── hdr2sdr_video_hlg_r2y.bin
│   │   ├── hdr2sdr_video_hlg_r2y_default.bin
│   │   ├── hdr2sdr_video_hlg_y2r.bin
│   │   ├── hdr2sdr_video_hlg_y2r_default.bin
│   │   ├── hdr2sdr_video_hlg_y2y.bin
│   │   ├── hdr2sdr_video_hlg_y2y_default.bin
│   │   ├── hdr2sdr_video_pq_r2r.bin
│   │   ├── hdr2sdr_video_pq_r2y.bin
│   │   ├── hdr2sdr_video_pq_y2r.bin
│   │   ├── hdr2sdr_video_pq_y2y.bin
│   │   ├── hdr_compose.bin
│   │   ├── hdr_decompose.bin
│   │   ├── image_aisr_algo_config.xml
│   │   ├── libaihdr_engine.so
│   │   ├── libdisplay_aipq_imagesr.so
│   │   ├── libdisplay_aipq_proxy.so
│   │   ├── libextream_vision_engine.so
│   │   ├── sdr2sdr_video_convert_ebu_r2r.bin
│   │   ├── sdr2sdr_video_convert_ebu_r2y.bin
│   │   ├── sdr2sdr_video_convert_ebu_y2r.bin
│   │   ├── sdr2sdr_video_convert_ebu_y2y.bin
│   │   ├── sdr2sdr_video_convert_smpte_r2r.bin
│   │   ├── sdr2sdr_video_convert_smpte_r2y.bin
│   │   ├── sdr2sdr_video_convert_smpte_y2r.bin
│   │   ├── sdr2sdr_video_convert_smpte_y2y.bin
│   │   ├── sdr_convert.bin
│   │   └── video_sr_algo_config.xml
│   └── libhwlibfingersense.so
├── lost+found/
├── media/
│   └── themes/
│       ├── Boundless.hwt
│       ├── SummerBlossom.hwt
│       ├── Tianchi.hwt
│       ├── wallpaperdefault.jpeg
│       └── wallpaperlockdefault.jpeg
├── resource/
│   └── media/
│       ├── audio/
│       │   ├── alarms/
│       │   │   ├── Aegean_Sea.json
│       │   │   ├── Aegean_Sea.ogg
│       │   │   ├── Amazing_Morning.json
│       │   │   ├── Amazing_Morning.ogg
│       │   │   ├── Awakening.json
│       │   │   ├── Awakening.ogg
│       │   │   ├── Creek.json
│       │   │   ├── Creek.ogg
│       │   │   ├── Dawn.json
│       │   │   ├── Dawn.ogg
│       │   │   ├── Flourish.json
│       │   │   ├── Flourish.ogg
│       │   │   ├── Flow.json
│       │   │   ├── Flow.ogg
│       │   │   ├── Forest_Melody.json
│       │   │   ├── Forest_Melody.ogg
│       │   │   ├── Hawaii.json
│       │   │   ├── Hawaii.ogg
│       │   │   ├── Moment.json
│       │   │   ├── Moment.ogg
│       │   │   ├── Morning_Light.json
│       │   │   ├── Morning_Light.ogg
│       │   │   ├── Morning_Mist.json
│       │   │   ├── Morning_Mist.ogg
│       │   │   ├── New_Day.json
│       │   │   ├── New_Day.ogg
│       │   │   ├── Ocean_Whisper.json
│       │   │   ├── Ocean_Whisper.ogg
│       │   │   ├── Overture.json
│       │   │   ├── Overture.ogg
│       │   │   ├── Rays.json
│       │   │   ├── Rays.ogg
│       │   │   ├── Ripple.json
│       │   │   ├── Ripple.ogg
│       │   │   ├── Shimmering.json
│       │   │   ├── Shimmering.ogg
│       │   │   ├── Sound_of_the_Sea.json
│       │   │   ├── Sound_of_the_Sea.ogg
│       │   │   ├── Star.json
│       │   │   ├── Star.ogg
│       │   │   ├── Tap.json
│       │   │   ├── Tap.ogg
│       │   │   ├── Timer_Beep.json
│       │   │   ├── Timer_Beep.ogg
│       │   │   ├── Wonderful_Beginning.json
│       │   │   ├── Wonderful_Beginning.ogg
│       │   │   └── Xiaoyi.ogg
│       │   ├── animationsounds/
│       │   │   └── bootSound.ogg
│       │   ├── common/
│       │   │   ├── Beat.json
│       │   │   └── Standard.json
│       │   ├── notifications/
│       │   │   ├── Autumn_Wind.json
│       │   │   ├── Autumn_Wind.ogg
│       │   │   ├── Bell.json
│       │   │   ├── Bell.ogg
│       │   │   ├── Birdsong.json
│       │   │   ├── Birdsong.ogg
│       │   │   ├── Bongo.json
│       │   │   ├── Bongo.ogg
│       │   │   ├── Breeze.json
│       │   │   ├── Breeze.ogg
│       │   │   ├── Cave.json
│       │   │   ├── Cave.ogg
│       │   │   ├── Chess.json
│       │   │   ├── Chess.ogg
│       │   │   ├── Crystal_Drop.json
│       │   │   ├── Crystal_Drop.ogg
│       │   │   ├── Dew.json
│       │   │   ├── Dew.ogg
│       │   │   ├── Dewdrop.json
│       │   │   ├── Dewdrop.ogg
│       │   │   ├── Doorbell.json
│       │   │   ├── Doorbell.ogg
│       │   │   ├── Drip.json
│       │   │   ├── Drip.ogg
│       │   │   ├── Echo.json
│       │   │   ├── Echo.ogg
│       │   │   ├── Emerging.json
│       │   │   ├── Emerging.ogg
│       │   │   ├── Fountain.json
│       │   │   ├── Fountain.ogg
│       │   │   ├── Freeze.json
│       │   │   ├── Freeze.ogg
│       │   │   ├── Gush.json
│       │   │   ├── Gush.ogg
│       │   │   ├── Huawei_Cascade.json
│       │   │   ├── Huawei_Cascade.ogg
│       │   │   ├── Joyful.json
│       │   │   ├── Joyful.ogg
│       │   │   ├── Jump.json
│       │   │   ├── Jump.ogg
│       │   │   ├── Leaf.json
│       │   │   ├── Leaf.ogg
│       │   │   ├── Leap.json
│       │   │   ├── Leap.ogg
│       │   │   ├── Letter.json
│       │   │   ├── Letter.ogg
│       │   │   ├── Light.json
│       │   │   ├── Light.ogg
│       │   │   ├── Lit.json
│       │   │   ├── Lit.ogg
│       │   │   ├── Little_Wish.json
│       │   │   ├── Little_Wish.ogg
│       │   │   ├── Look_Back.json
│       │   │   ├── Look_Back.ogg
│       │   │   ├── Meditation.json
│       │   │   ├── Meditation.ogg
│       │   │   ├── Nap.json
│       │   │   ├── Nap.ogg
│       │   │   ├── Peking_Opera_Drum.json
│       │   │   ├── Peking_Opera_Drum.ogg
│       │   │   ├── Pixies.json
│       │   │   ├── Pixies.ogg
│       │   │   ├── Play.json
│       │   │   ├── Play.ogg
│       │   │   ├── Pluck.json
│       │   │   ├── Pluck.ogg
│       │   │   ├── Pursue.json
│       │   │   ├── Pursue.ogg
│       │   │   ├── Rise.json
│       │   │   ├── Rise.ogg
│       │   │   ├── Shine.json
│       │   │   ├── Shine.ogg
│       │   │   ├── Shining.json
│       │   │   ├── Shining.ogg
│       │   │   ├── Soft.json
│       │   │   ├── Soft.ogg
│       │   │   ├── Spiral.json
│       │   │   ├── Spiral.ogg
│       │   │   ├── Step.json
│       │   │   ├── Step.ogg
│       │   │   ├── Time_Capsule.json
│       │   │   ├── Time_Capsule.ogg
│       │   │   ├── Warm_Sun.json
│       │   │   ├── Warm_Sun.ogg
│       │   │   ├── Whistle.json
│       │   │   ├── Whistle.ogg
│       │   │   ├── White_Swan.json
│       │   │   ├── White_Swan.ogg
│       │   │   ├── Wild_Flower.json
│       │   │   ├── Wild_Flower.ogg
│       │   │   ├── Zen.json
│       │   │   └── Zen.ogg
│       │   ├── ringtone_incall.json
│       │   ├── ringtone_sms-notification.json
│       │   ├── ringtones/
│       │   │   ├── Amusement_Park.json
│       │   │   ├── Amusement_Park.ogg
│       │   │   ├── Bamboo_Garden.json
│       │   │   ├── Bamboo_Garden.ogg
│       │   │   ├── Bounce.json
│       │   │   ├── Bounce.ogg
│       │   │   ├── Breathe_Freely.json
│       │   │   ├── Breathe_Freely.ogg
│       │   │   ├── Chilled.json
│       │   │   ├── Chilled.ogg
│       │   │   ├── Classic_Bell.json
│       │   │   ├── Classic_Bell.ogg
│       │   │   ├── Concentrate.json
│       │   │   ├── Concentrate.ogg
│       │   │   ├── Dance_of_Joy.json
│       │   │   ├── Dance_of_Joy.ogg
│       │   │   ├── Digital_Ringtone.json
│       │   │   ├── Digital_Ringtone.ogg
│       │   │   ├── Dream.json
│       │   │   ├── Dream.ogg
│       │   │   ├── Dream_It_Possible.json
│       │   │   ├── Dream_It_Possible.ogg
│       │   │   ├── Dynamo.json
│       │   │   ├── Dynamo.ogg
│       │   │   ├── Fantasy_World.json
│       │   │   ├── Fantasy_World.ogg
│       │   │   ├── Flipped.json
│       │   │   ├── Flipped.ogg
│       │   │   ├── Free.json
│       │   │   ├── Free.ogg
│       │   │   ├── Free_Rafting.json
│       │   │   ├── Free_Rafting.ogg
│       │   │   ├── Halo.json
│       │   │   ├── Halo.ogg
│       │   │   ├── Huawei_Tune_Clean.json
│       │   │   ├── Huawei_Tune_Clean.ogg
│       │   │   ├── Huawei_Tune_Harmony.json
│       │   │   ├── Huawei_Tune_Harmony.ogg
│       │   │   ├── Huawei_Tune_Living.json
│       │   │   ├── Huawei_Tune_Living.ogg
│       │   │   ├── Huawei_Tune_Orchestral.json
│       │   │   ├── Huawei_Tune_Orchestral.ogg
│       │   │   ├── Menuet.json
│       │   │   ├── Menuet.ogg
│       │   │   ├── Mural.json
│       │   │   ├── Mural.ogg
│       │   │   ├── Neon.json
│       │   │   ├── Neon.ogg
│       │   │   ├── Notes.json
│       │   │   ├── Notes.ogg
│       │   │   ├── Pulse.json
│       │   │   ├── Pulse.ogg
│       │   │   ├── Sail_Leaf.json
│       │   │   ├── Sail_Leaf.ogg
│       │   │   ├── Sax.json
│       │   │   ├── Sax.ogg
│       │   │   ├── Spin.json
│       │   │   ├── Spin.ogg
│       │   │   ├── Summer_Afternoon.json
│       │   │   ├── Summer_Afternoon.ogg
│       │   │   ├── Sunlit_Garden.json
│       │   │   ├── Sunlit_Garden.ogg
│       │   │   ├── Surging_Power.json
│       │   │   ├── Surging_Power.ogg
│       │   │   ├── Swaying_Boat.json
│       │   │   ├── Swaying_Boat.ogg
│       │   │   ├── Whistle.json
│       │   │   └── Whistle.ogg
│       │   └── ui/
│       │       ├── Effect_Tick.ogg
│       │       ├── Lock.ogg
│       │       ├── LowBattery.ogg
│       │       ├── PowerConnected.ogg
│       │       ├── Unlock.ogg
│       │       ├── WaterWarning.ogg
│       │       └── WirelessPowerConnected.ogg
│       └── logo/
│           └── oemlogo.mbn
└── variant/
    ├── hw_oem/
    │   └── factory/
    │       └── etc/
    │           ├── cust/
    │           │   └── system_layer.cfg
    │           └── param/
    │               └── hw_defaults.para
    └── region_comm/
        └── china/
            ├── etc/
            │   ├── intellvoice/
            │   │   └── wakeup/
            │   │       ├── ap/
            │   │       │   ├── condict/
            │   │       │   │   ├── kws2_domainDict_01.dat
            │   │       │   │   ├── kws2_domainDict_02.dat
            │   │       │   │   ├── kws2_domainDict_03.dat
            │   │       │   │   ├── kws2_domainDict_04.dat
            │   │       │   │   ├── kws2_domainDict_05.dat
            │   │       │   │   ├── kws2_domainDict_06.dat
            │   │       │   │   ├── kws2_domainDict_07.dat
            │   │       │   │   ├── kws2_domainDict_08.dat
            │   │       │   │   ├── kws2_domainDict_09.dat
            │   │       │   │   ├── kws2_domainDict_10.dat
            │   │       │   │   ├── kws2_domainDict_12.dat
            │   │       │   │   ├── kws2_domainDict_13.dat
            │   │       │   │   └── kws2_domainDict_14.dat
            │   │       │   ├── eval/
            │   │       │   │   └── kws2_domainDict_11.dat
            │   │       │   ├── kws2_acousticsModel.pb
            │   │       │   ├── kws2_acousticsModel2.pb
            │   │       │   ├── kws2_acousticsModel3.pb
            │   │       │   ├── kws2_acousticsModel4.pb
            │   │       │   ├── kws2_acousticsModel5.pb
            │   │       │   ├── wakeup_config.json
            │   │       │   └── wakeup_config_user.json
            │   │       ├── dsp/
            │   │       │   ├── condict/
            │   │       │   │   ├── kws1_domainDict_01.dat
            │   │       │   │   ├── kws1_domainDict_02.dat
            │   │       │   │   ├── kws1_domainDict_03.dat
            │   │       │   │   ├── kws1_domainDict_04.dat
            │   │       │   │   ├── kws1_domainDict_07.dat
            │   │       │   │   ├── kws1_domainDict_08.dat
            │   │       │   │   ├── kws1_domainDict_14.dat
            │   │       │   │   ├── kws1_domainDict_15.dat
            │   │       │   │   ├── kws1_domainDict_16.dat
            │   │       │   │   ├── kws1_domainDict_17.dat
            │   │       │   │   ├── kws1_domainDict_18.dat
            │   │       │   │   ├── kws1_domainDict_26.dat
            │   │       │   │   ├── kws1_domainDict_27.dat
            │   │       │   │   ├── kws2_domainDict_01.dat
            │   │       │   │   ├── kws2_domainDict_02.dat
            │   │       │   │   ├── kws2_domainDict_08.dat
            │   │       │   │   ├── kws2_domainDict_09.dat
            │   │       │   │   ├── kws2_domainDict_10.dat
            │   │       │   │   ├── version.txt
            │   │       │   │   └── whisper_version.txt
            │   │       │   ├── kws1_acousticsModel_01.pb
            │   │       │   ├── kws1_acousticsModel_02.pb
            │   │       │   ├── kws1_acousticsModel_03.pb
            │   │       │   ├── kws1_acousticsModel_05.pb
            │   │       │   ├── kws1_acousticsModel_06.pb
            │   │       │   └── whisper_wakeup_dsp_config
            │   │       └── vpr/
            │   │           ├── ivector/
            │   │           │   ├── Ivector.dm
            │   │           │   ├── Ivector2.dm
            │   │           │   ├── vpr_model_04.pb
            │   │           │   ├── vpr_model_05.pb
            │   │           │   ├── vpr_model_06.pb
            │   │           │   └── vpr_model_10.pb
            │   │           ├── vpr_domainDict_03.dat
            │   │           ├── vpr_model.pb
            │   │           ├── vpr_model_01.pb
            │   │           ├── vpr_model_02.pb
            │   │           ├── vpr_model_03.pb
            │   │           ├── vpr_model_08.pb
            │   │           └── vpr_model_09.pb
            │   └── param/
            │       └── hw_defaults.para
            └── resource/
                └── media/
                    └── audio/
                        ├── alarms/
                        │   ├── Aegean_Sea.json
                        │   ├── Aegean_Sea.ogg
                        │   ├── Amazing_Morning.json
                        │   ├── Amazing_Morning.ogg
                        │   ├── Awakening.json
                        │   ├── Awakening.ogg
                        │   ├── Creek.json
                        │   ├── Creek.ogg
                        │   ├── Dawn.json
                        │   ├── Dawn.ogg
                        │   ├── Flourish.json
                        │   ├── Flourish.ogg
                        │   ├── Flow.json
                        │   ├── Flow.ogg
                        │   ├── Forest_Melody.json
                        │   ├── Forest_Melody.ogg
                        │   ├── Hawaii.json
                        │   ├── Hawaii.ogg
                        │   ├── Moment.json
                        │   ├── Moment.ogg
                        │   ├── Morning_Light.json
                        │   ├── Morning_Light.ogg
                        │   ├── Morning_Mist.json
                        │   ├── Morning_Mist.ogg
                        │   ├── New_Day.json
                        │   ├── New_Day.ogg
                        │   ├── Ocean_Whisper.json
                        │   ├── Ocean_Whisper.ogg
                        │   ├── Overture.json
                        │   ├── Overture.ogg
                        │   ├── Rays.json
                        │   ├── Rays.ogg
                        │   ├── Ripple.json
                        │   ├── Ripple.ogg
                        │   ├── Shimmering.json
                        │   ├── Shimmering.ogg
                        │   ├── Sound_of_the_Sea.json
                        │   ├── Sound_of_the_Sea.ogg
                        │   ├── Star.json
                        │   ├── Star.ogg
                        │   ├── Tap.json
                        │   ├── Tap.ogg
                        │   ├── Timer_Beep.json
                        │   ├── Timer_Beep.ogg
                        │   ├── Wonderful_Beginning.json
                        │   ├── Wonderful_Beginning.ogg
                        │   └── Xiaoyi.ogg
                        ├── animationsounds/
                        │   └── bootSound.ogg
                        ├── common/
                        │   ├── Beat.json
                        │   └── Standard.json
                        ├── notifications/
                        │   ├── Autumn_Wind.json
                        │   ├── Autumn_Wind.ogg
                        │   ├── Bell.json
                        │   ├── Bell.ogg
                        │   ├── Birdsong.json
                        │   ├── Birdsong.ogg
                        │   ├── Bongo.json
                        │   ├── Bongo.ogg
                        │   ├── Breeze.json
                        │   ├── Breeze.ogg
                        │   ├── Cave.json
                        │   ├── Cave.ogg
                        │   ├── Chess.json
                        │   ├── Chess.ogg
                        │   ├── Crystal_Drop.json
                        │   ├── Crystal_Drop.ogg
                        │   ├── Dew.json
                        │   ├── Dew.ogg
                        │   ├── Dewdrop.json
                        │   ├── Dewdrop.ogg
                        │   ├── Doorbell.json
                        │   ├── Doorbell.ogg
                        │   ├── Drip.json
                        │   ├── Drip.ogg
                        │   ├── Echo.json
                        │   ├── Echo.ogg
                        │   ├── Emerging.json
                        │   ├── Emerging.ogg
                        │   ├── Fountain.json
                        │   ├── Fountain.ogg
                        │   ├── Freeze.json
                        │   ├── Freeze.ogg
                        │   ├── Gush.json
                        │   ├── Gush.ogg
                        │   ├── Huawei_Cascade.json
                        │   ├── Huawei_Cascade.ogg
                        │   ├── Joyful.json
                        │   ├── Joyful.ogg
                        │   ├── Jump.json
                        │   ├── Jump.ogg
                        │   ├── Leaf.json
                        │   ├── Leaf.ogg
                        │   ├── Leap.json
                        │   ├── Leap.ogg
                        │   ├── Letter.json
                        │   ├── Letter.ogg
                        │   ├── Light.json
                        │   ├── Light.ogg
                        │   ├── Lit.json
                        │   ├── Lit.ogg
                        │   ├── Little_Wish.json
                        │   ├── Little_Wish.ogg
                        │   ├── Look_Back.json
                        │   ├── Look_Back.ogg
                        │   ├── Meditation.json
                        │   ├── Meditation.ogg
                        │   ├── Nap.json
                        │   ├── Nap.ogg
                        │   ├── Peking_Opera_Drum.json
                        │   ├── Peking_Opera_Drum.ogg
                        │   ├── Pixies.json
                        │   ├── Pixies.ogg
                        │   ├── Play.json
                        │   ├── Play.ogg
                        │   ├── Pluck.json
                        │   ├── Pluck.ogg
                        │   ├── Pursue.json
                        │   ├── Pursue.ogg
                        │   ├── Rise.json
                        │   ├── Rise.ogg
                        │   ├── Shine.json
                        │   ├── Shine.ogg
                        │   ├── Shining.json
                        │   ├── Shining.ogg
                        │   ├── Soft.json
                        │   ├── Soft.ogg
                        │   ├── Spiral.json
                        │   ├── Spiral.ogg
                        │   ├── Step.json
                        │   ├── Step.ogg
                        │   ├── Time_Capsule.json
                        │   ├── Time_Capsule.ogg
                        │   ├── Warm_Sun.json
                        │   ├── Warm_Sun.ogg
                        │   ├── Whistle.json
                        │   ├── Whistle.ogg
                        │   ├── White_Swan.json
                        │   ├── White_Swan.ogg
                        │   ├── Wild_Flower.json
                        │   ├── Wild_Flower.ogg
                        │   ├── Zen.json
                        │   └── Zen.ogg
                        ├── ringtone_incall.json
                        ├── ringtone_sms-notification.json
                        ├── ringtones/
                        │   ├── Amusement_Park.json
                        │   ├── Amusement_Park.ogg
                        │   ├── Bamboo_Garden.json
                        │   ├── Bamboo_Garden.ogg
                        │   ├── Bounce.json
                        │   ├── Bounce.ogg
                        │   ├── Breathe_Freely.json
                        │   ├── Breathe_Freely.ogg
                        │   ├── Chilled.json
                        │   ├── Chilled.ogg
                        │   ├── Classic_Bell.json
                        │   ├── Classic_Bell.ogg
                        │   ├── Concentrate.json
                        │   ├── Concentrate.ogg
                        │   ├── Dance_of_Joy.json
                        │   ├── Dance_of_Joy.ogg
                        │   ├── Digital_Ringtone.json
                        │   ├── Digital_Ringtone.ogg
                        │   ├── Dream.json
                        │   ├── Dream.ogg
                        │   ├── Dream_It_Possible.json
                        │   ├── Dream_It_Possible.ogg
                        │   ├── Dynamo.json
                        │   ├── Dynamo.ogg
                        │   ├── Fantasy_World.json
                        │   ├── Fantasy_World.ogg
                        │   ├── Flipped.json
                        │   ├── Flipped.ogg
                        │   ├── Free.json
                        │   ├── Free.ogg
                        │   ├── Free_Rafting.json
                        │   ├── Free_Rafting.ogg
                        │   ├── Halo.json
                        │   ├── Halo.ogg
                        │   ├── Huawei_Tune_Clean.json
                        │   ├── Huawei_Tune_Clean.ogg
                        │   ├── Huawei_Tune_Harmony.json
                        │   ├── Huawei_Tune_Harmony.ogg
                        │   ├── Huawei_Tune_Living.json
                        │   ├── Huawei_Tune_Living.ogg
                        │   ├── Huawei_Tune_Orchestral.json
                        │   ├── Huawei_Tune_Orchestral.ogg
                        │   ├── Menuet.json
                        │   ├── Menuet.ogg
                        │   ├── Mural.json
                        │   ├── Mural.ogg
                        │   ├── Neon.json
                        │   ├── Neon.ogg
                        │   ├── Notes.json
                        │   ├── Notes.ogg
                        │   ├── Pulse.json
                        │   ├── Pulse.ogg
                        │   ├── Sail_Leaf.json
                        │   ├── Sail_Leaf.ogg
                        │   ├── Sax.json
                        │   ├── Sax.ogg
                        │   ├── Spin.json
                        │   ├── Spin.ogg
                        │   ├── Summer_Afternoon.json
                        │   ├── Summer_Afternoon.ogg
                        │   ├── Sunlit_Garden.json
                        │   ├── Sunlit_Garden.ogg
                        │   ├── Surging_Power.json
                        │   ├── Surging_Power.ogg
                        │   ├── Swaying_Boat.json
                        │   ├── Swaying_Boat.ogg
                        │   ├── Whistle.json
                        │   └── Whistle.ogg
                        └── ui/
                            ├── Effect_Tick.ogg
                            ├── Lock.ogg
                            ├── LowBattery.ogg
                            ├── PowerConnected.ogg
                            ├── Unlock.ogg
                            ├── WaterWarning.ogg
                            └── WirelessPowerConnected.ogg
```

### `system.img`

```plain
./
├── bin
├── chip_prod/
├── chipset
├── config/
├── cust/
├── data/
├── dev/
├── eng_chipset/
├── eng_system/
├── etc
├── init
├── lib
├── log/
├── lost+found/
├── mnt/
├── module_update/
├── patch_hw/
├── preload/
├── proc/
├── sec_storage/
├── storage/
├── sys/
├── sys_prod/
├── system/
│   ├── app/
│   │   ├── AIEngineHsp/
│   │   ├── AmsDialog/
│   │   │   └── ams_system_dialog.hap
│   │   ├── AtomicServiceDistributeEngine/
│   │   │   ├── BaseCommon-1.0.10.300-product-release.hsp
│   │   │   ├── Eca_module-1.0.10.300-product-release.hap
│   │   │   ├── Entry-1.0.10.300-product-release.hap
│   │   │   ├── Hag-1.0.10.300-product-release.hap
│   │   │   └── Panel-1.0.10.300-product-release.hap
│   │   ├── AuthWidget/
│   │   │   └── AuthWidget.hap
│   │   ├── BackgroundTaskResources/
│   │   │   └── BackgroundTaskResources.hap
│   │   ├── CalendarData/
│   │   │   └── CalendarData.hap
│   │   ├── CeliaKeyboard/
│   │   │   ├── CeliaKeyboard.hap
│   │   │   └── clipboardHap-default-release-signed.hap
│   │   ├── CertificateManager/
│   │   │   └── CertificateManager.hap
│   │   ├── CloudCommon/
│   │   ├── DataShelf/
│   │   │   └── DataShelf.hap
│   │   ├── DeviceManager_UI/
│   │   │   └── DeviceManager_UI.hap
│   │   ├── DlpManager/
│   │   │   └── dlp_manager.hap
│   │   ├── ExternalFileManager/
│   │   │   └── external_file_manager.hap
│   │   ├── FloatingNavigation/
│   │   │   └── FloatingNavigation.hap
│   │   ├── FormRenderService/
│   │   │   └── Form_Render_Service.hap
│   │   ├── HealthCore/
│   │   │   ├── HealthCore.hap
│   │   │   └── HwCooperationService.hap
│   │   ├── HiPreview/
│   │   │   └── HiPreview.hap
│   │   ├── HiViewX/
│   │   │   └── HiViewX.hap
│   │   ├── HmFileManager/
│   │   │   └── HmFileManager.hap
│   │   ├── HmFiles/
│   │   │   └── HmFiles.hap
│   │   ├── HuaweiCast/
│   │   │   └── HuaweiCast.hap
│   │   ├── HuaweiShare/
│   │   │   └── HuaweiShare.hap
│   │   ├── HwAntiMisoperation/
│   │   │   └── HwAntiMisoperation.hap
│   │   ├── HwMapKit/
│   │   │   └── MapService.hap
│   │   ├── HwMapKitHsp/
│   │   ├── HwProjectMenu/
│   │   │   └── HwProjectMenu.hap
│   │   ├── HwStylusFeature/
│   │   ├── IdmWidget/
│   │   │   └── IdmWidget.hap
│   │   ├── Intelligent/
│   │   │   ├── HmIntelligent.hap
│   │   │   ├── common-default-signed.hsp
│   │   │   └── service-default-signed.hap
│   │   ├── LocationEnhanceService/
│   │   │   └── LocationEnhanceService.hap
│   │   ├── MediaPlaybackController/
│   │   │   └── phone_deviceswitch-default-signed.hap
│   │   ├── NotificationDialog/
│   │   │   └── enable_notification_dialog.hap
│   │   ├── OUC/
│   │   │   └── OUC.hap
│   │   ├── PAFService/
│   │   │   └── PAFService.hap
│   │   ├── PermissionManager/
│   │   │   └── permission_manager.hap
│   │   ├── PhotosHm/
│   │   │   └── PhotosHm_Phone.hap
│   │   ├── PowerDialog/
│   │   │   └── power_dialog.hap
│   │   ├── Push/
│   │   │   └── PushService.hap
│   │   ├── Ringtone_Library_Ext/
│   │   │   └── Ringtone_Library_Ext.hap
│   │   ├── SceneBoard/
│   │   │   ├── SceneBoard.hap
│   │   │   ├── SceneBoard_CoverThemeComponent.hap
│   │   │   ├── SceneBoard_EngineService.hap
│   │   │   ├── SceneBoard_MetaBallsTurbo.hap
│   │   │   ├── SceneBoard_NotificationManagement.hap
│   │   │   ├── SceneBoard_Settings.hap
│   │   │   ├── SceneBoard_SystemDialog.hsp
│   │   │   ├── SceneBoard_ThemeComponent.hap
│   │   │   ├── SceneBoard_ThemeServiceCore.hap
│   │   │   ├── SceneBoard_onekeylock.hap
│   │   │   └── basecommon.hsp
│   │   ├── ScreenRecorder/
│   │   │   └── ScreenRecorder.hap
│   │   ├── Screenshot/
│   │   │   └── Screenshot.hap
│   │   ├── SecurityPrivacyCenter/
│   │   │   ├── SecurityPrivacyCenter.hap
│   │   │   ├── infrastructure-default-signed.hsp
│   │   │   ├── permissionmanager-default-signed.hap
│   │   │   └── superprivacy-default-signed.hap
│   │   ├── Settings/
│   │   │   └── Settings.hap
│   │   ├── SettingsData/
│   │   │   └── SettingsData.hap
│   │   ├── SystemResources/
│   │   │   ├── SystemResources.hap
│   │   │   └── SystemResourcesExt.hap
│   │   ├── ThemeDataService/
│   │   │   └── themedataservice-release-signed.hap
│   │   ├── UserFileManager/
│   │   │   └── Media_Library_Ext.hap
│   │   ├── appServiceFwk/
│   │   │   ├── AIEngineHsp/
│   │   │   │   ├── aiCaptionHsp.hsp
│   │   │   │   ├── interactivelivenessHsp.hsp
│   │   │   │   └── textReaderHsp.hsp
│   │   │   ├── HwMapKitHsp/
│   │   │   │   └── mapLibrary.hsp
│   │   │   └── HwStylusFeature/
│   │   │       └── HwStylusFeature.hsp
│   │   ├── input_method_choose_dialog/
│   │   │   └── input_method_choose_dialog.hap
│   │   ├── pasteboard_dialog/
│   │   │   └── pasteboard_dialog.hap
│   │   ├── shared_bundles/
│   │   │   ├── CloudCommon/
│   │   │   │   └── CloudCommon.hsp
│   │   │   ├── PhotoBrowser/
│   │   │   │   └── PhotoBrowser.hsp
│   │   │   └── PickerSheet/
│   │   │       └── PickerSheet.hsp
│   │   └── usb_right_dialog/
│   │       └── usb_right_dialog.hap
│   ├── bin/
│   │   ├── QemuParams
│   │   ├── SP_daemon
│   │   ├── aa
│   │   ├── ability_tool
│   │   ├── acm
│   │   ├── anm
│   │   ├── appspawn
│   │   ├── arkweb_crashpad_handler
│   │   ├── atm
│   │   ├── base64
│   │   ├── basename
│   │   ├── begetctl
│   │   ├── bftpd
│   │   ├── blkid
│   │   ├── blockdev
│   │   ├── bm
│   │   ├── bytrace
│   │   ├── cal
│   │   ├── cat
│   │   ├── cem
│   │   ├── charger
│   │   ├── check_module_update
│   │   ├── chgrp
│   │   ├── chkcon
│   │   ├── chmod
│   │   ├── chown
│   │   ├── chroot
│   │   ├── chrt
│   │   ├── chvt
│   │   ├── cjappspawn
│   │   ├── cksum
│   │   ├── clear
│   │   ├── cmp
│   │   ├── comm
│   │   ├── count
│   │   ├── cp
│   │   ├── cpio
│   │   ├── crc32
│   │   ├── cups/
│   │   │   ├── backend/
│   │   │   │   ├── ipp
│   │   │   │   └── usb
│   │   │   ├── daemon/
│   │   │   │   ├── cups-deviced
│   │   │   │   ├── cups-driverd
│   │   │   │   └── cups-exec
│   │   │   └── filter/
│   │   │       ├── imagetopdf
│   │   │       ├── imagetoraster
│   │   │       └── rastertopwg
│   │   ├── cupsd
│   │   ├── cupsfilter
│   │   ├── cut
│   │   ├── date
│   │   ├── dd
│   │   ├── deviceauth_service
│   │   ├── devicedebug
│   │   ├── devmem
│   │   ├── df
│   │   ├── diff
│   │   ├── dirname
│   │   ├── dmesg
│   │   ├── dnsdomainname
│   │   ├── dos2unix
│   │   ├── du
│   │   ├── dumpcatcher
│   │   ├── e2fsck
│   │   ├── e2fsdroid
│   │   ├── echo
│   │   ├── edm
│   │   ├── egrep
│   │   ├── eject
│   │   ├── env
│   │   ├── exfatlabel
│   │   ├── expand
│   │   ├── expr
│   │   ├── factor
│   │   ├── fallocate
│   │   ├── false
│   │   ├── faultloggerd
│   │   ├── fgrep
│   │   ├── file
│   │   ├── file_migrate_ability
│   │   ├── find
│   │   ├── flock
│   │   ├── fmt
│   │   ├── free
│   │   ├── freeramdisk
│   │   ├── fsck.exfat
│   │   ├── fsck.f2fs
│   │   ├── fsck.ntfs
│   │   ├── fsck_msdos
│   │   ├── fsfreeze
│   │   ├── fstype
│   │   ├── fsync
│   │   ├── ftpget
│   │   ├── ftpput
│   │   ├── getconf
│   │   ├── getenforce
│   │   ├── getfilecon
│   │   ├── getpidcon
│   │   ├── grep
│   │   ├── groups
│   │   ├── gunzip
│   │   ├── gzip
│   │   ├── halt
│   │   ├── hdcd
│   │   ├── hdcd_user_permit
│   │   ├── head
│   │   ├── help
│   │   ├── hexedit
│   │   ├── hidumper
│   │   ├── hilog
│   │   ├── hilogd
│   │   ├── hiperf
│   │   ├── hisysevent
│   │   ├── hitrace
│   │   ├── hiview
│   │   ├── hmos_cust_carrier_mount
│   │   ├── hmos_cust_libphonenumber_mount
│   │   ├── hmos_cust_timezone_mount
│   │   ├── hnp
│   │   ├── hostname
│   │   ├── hwclock
│   │   ├── i2cdetect
│   │   ├── i2cdump
│   │   ├── i2cget
│   │   ├── i2cset
│   │   ├── iconv
│   │   ├── id
│   │   ├── ifconfig
│   │   ├── init
│   │   ├── inotifyd
│   │   ├── insmod
│   │   ├── install
│   │   ├── ionice
│   │   ├── iorenice
│   │   ├── iotop
│   │   ├── ip
│   │   ├── ip6tables
│   │   ├── ip6tables-restore
│   │   ├── ip6tables-save
│   │   ├── iptables
│   │   ├── iptables-restore
│   │   ├── iptables-save
│   │   ├── kill
│   │   ├── killall
│   │   ├── killall5
│   │   ├── link
│   │   ├── ln
│   │   ├── load_policy
│   │   ├── logger
│   │   ├── login
│   │   ├── logname
│   │   ├── losetup
│   │   ├── ls
│   │   ├── lsattr
│   │   ├── lsmod
│   │   ├── lsof
│   │   ├── lspci
│   │   ├── lsusb
│   │   ├── makedevs
│   │   ├── mcookie
│   │   ├── md5sum
│   │   ├── mdev
│   │   ├── mediatool
│   │   ├── microcom
│   │   ├── mix
│   │   ├── mkdir
│   │   ├── mke2fs
│   │   ├── mkfifo
│   │   ├── mkfs.exfat
│   │   ├── mkfs.f2fs
│   │   ├── mknod
│   │   ├── mkpasswd
│   │   ├── mkswap
│   │   ├── mktemp
│   │   ├── modinfo
│   │   ├── more
│   │   ├── mount
│   │   ├── mount.ntfs
│   │   ├── mountpoint
│   │   ├── mv
│   │   ├── nativespawn
│   │   ├── nbd-client
│   │   ├── netcat
│   │   ├── netmask
│   │   ├── netstat
│   │   ├── newfs_msdos
│   │   ├── nice
│   │   ├── nl
│   │   ├── nohup
│   │   ├── nproc
│   │   ├── nsenter
│   │   ├── ntfslabel
│   │   ├── od
│   │   ├── oneit
│   │   ├── openssl
│   │   ├── param
│   │   ├── paramshell
│   │   ├── partprobe
│   │   ├── passwd
│   │   ├── paste
│   │   ├── patch
│   │   ├── pgrep
│   │   ├── pid_ns_init
│   │   ├── pidof
│   │   ├── ping
│   │   ├── ping6
│   │   ├── pivot_root
│   │   ├── pkill
│   │   ├── pmap
│   │   ├── power-shell
│   │   ├── poweroff
│   │   ├── printenv
│   │   ├── printf
│   │   ├── prlimit
│   │   ├── processdump
│   │   ├── prop_migrate
│   │   ├── ps
│   │   ├── pwd
│   │   ├── pwdx
│   │   ├── quickfix_engine_init_manager
│   │   ├── quickfix_engine_patch_hw_mount
│   │   ├── rawheap_translator
│   │   ├── readahead
│   │   ├── readlink
│   │   ├── realpath
│   │   ├── reboot
│   │   ├── remount
│   │   ├── render_service
│   │   ├── renice
│   │   ├── reset
│   │   ├── resize.f2fs
│   │   ├── resize2fs
│   │   ├── restorecon
│   │   ├── rev
│   │   ├── rfkill
│   │   ├── rm
│   │   ├── rmdir
│   │   ├── rmmod
│   │   ├── runcon
│   │   ├── sa_main
│   │   ├── samgr
│   │   ├── save_asi_info
│   │   ├── scanner
│   │   ├── sdc
│   │   ├── secilc
│   │   ├── sed
│   │   ├── selinux_check_access
│   │   ├── selinuxexeccon
│   │   ├── sendevent
│   │   ├── seq
│   │   ├── service_control
│   │   ├── setenforce
│   │   ├── setfattr
│   │   ├── setfilecon
│   │   ├── setsid
│   │   ├── sgdisk
│   │   ├── sh
│   │   ├── sha1sum
│   │   ├── sha224sum
│   │   ├── sha256sum
│   │   ├── sha384sum
│   │   ├── sha512sum
│   │   ├── shalsum
│   │   ├── shred
│   │   ├── sleep
│   │   ├── sload.f2fs
│   │   ├── snapshot_display
│   │   ├── sntp
│   │   ├── sort
│   │   ├── split
│   │   ├── stat
│   │   ├── storage_daemon
│   │   ├── strings
│   │   ├── swapoff
│   │   ├── swapon
│   │   ├── switch_root
│   │   ├── sync
│   │   ├── sysctl
│   │   ├── sysctrl
│   │   ├── tac
│   │   ├── tail
│   │   ├── tar
│   │   ├── taskset
│   │   ├── tc
│   │   ├── tee
│   │   ├── test
│   │   ├── time
│   │   ├── timeout
│   │   ├── timestamps
│   │   ├── top
│   │   ├── touch
│   │   ├── toybox
│   │   ├── tr
│   │   ├── traceroute
│   │   ├── true
│   │   ├── truncate
│   │   ├── tty
│   │   ├── tunctl
│   │   ├── ueventd
│   │   ├── uinput
│   │   ├── uinput_inject
│   │   ├── uitest
│   │   ├── ulimit
│   │   ├── umount
│   │   ├── uname
│   │   ├── uniq
│   │   ├── unix2dos
│   │   ├── unlink
│   │   ├── unshare
│   │   ├── updater_binary
│   │   ├── updater_firmware
│   │   ├── uptime
│   │   ├── usage_report
│   │   ├── usleep
│   │   ├── uudecode
│   │   ├── uuencode
│   │   ├── uuidgen
│   │   ├── vconfig
│   │   ├── vdevadm
│   │   ├── vmstat
│   │   ├── w
│   │   ├── watch
│   │   ├── watchdog_service
│   │   ├── wc
│   │   ├── which
│   │   ├── who
│   │   ├── whoami
│   │   ├── wifi_hal_service
│   │   ├── write_updater
│   │   ├── wukong
│   │   ├── xargs
│   │   ├── xlogcat
│   │   ├── xxd
│   │   ├── yes
│   │   └── zcat
│   ├── build.para
│   ├── etc/
│   │   ├── CollaborationFwk/
│   │   │   ├── ServiceModel.json
│   │   │   ├── config.json
│   │   │   ├── get_time.json
│   │   │   └── requestSaPre.json
│   │   ├── Communication_feature/
│   │   │   ├── filekey_telephony_cloudpush_v1.pem
│   │   │   └── version.txt
│   │   ├── HIVIEWPARA/
│   │   │   └── DEFAULT/
│   │   │       └── version.txt
│   │   ├── LIBPHONENUMBER/
│   │   │   ├── generic/
│   │   │   │   ├── hota_i18n_upgrade_v1.pem
│   │   │   │   └── version.txt
│   │   │   └── mount_dir/
│   │   │       └── prefabrication
│   │   ├── NOTICE.txt
│   │   ├── SystemCapability.json
│   │   ├── TIMEZONE/
│   │   │   └── generic/
│   │   │       └── current/
│   │   │           └── version.txt
│   │   ├── abc/
│   │   │   ├── ability/
│   │   │   │   ├── datauriutils.abc
│   │   │   │   └── delegator_mgmt.abc
│   │   │   ├── arkui/
│   │   │   │   ├── mock.abc
│   │   │   │   ├── modifier.abc
│   │   │   │   ├── node.abc
│   │   │   │   ├── placeholder.abc
│   │   │   │   ├── prefetcher.abc
│   │   │   │   ├── shape.abc
│   │   │   │   ├── statemanagement.abc
│   │   │   │   ├── theme.abc
│   │   │   │   └── uicontext.abc
│   │   │   └── framework/
│   │   │       └── stateMgmt.abc
│   │   ├── access_token/
│   │   │   └── permission_definitions.json
│   │   ├── account/
│   │   │   ├── constraints_list_collection.json
│   │   │   ├── os_account_config.json
│   │   │   └── osaccount_constraints.json
│   │   ├── activate_config.json
│   │   ├── advertising/
│   │   │   ├── ads_framework/
│   │   │   │   └── ad_service_config.json
│   │   │   └── oaid/
│   │   │       └── oaid_service_config.json
│   │   ├── ams_service_config.json
│   │   ├── app/
│   │   │   ├── app_service_fwk_install_list.json
│   │   │   ├── bms-extensions.json
│   │   │   ├── install_list.json
│   │   │   ├── module_update/
│   │   │   │   └── install_list.json
│   │   │   └── shared_bundles_install_list.json
│   │   ├── app_domain_verify/
│   │   │   ├── api_report.conf
│   │   │   ├── grs_pref
│   │   │   └── whitelist_pref
│   │   ├── app_file_service/
│   │   │   ├── backup_sandbox.json
│   │   │   └── file_share_sandbox.json
│   │   ├── appspawn/
│   │   │   └── appspawn_preload.json
│   │   ├── ark/
│   │   │   └── app_aot_jit_enable_list_default.conf
│   │   ├── arkui/
│   │   │   └── timepicker.ogg
│   │   ├── asan.options
│   │   ├── audio/
│   │   │   ├── alsa/
│   │   │   │   └── share/
│   │   │   │       ├── alsa.conf
│   │   │   │       ├── cards/
│   │   │   │       │   ├── AACI.conf
│   │   │   │       │   ├── ATIIXP-MODEM.conf
│   │   │   │       │   ├── ATIIXP-SPDMA.conf
│   │   │   │       │   ├── ATIIXP.conf
│   │   │   │       │   ├── AU8810.conf
│   │   │   │       │   ├── AU8820.conf
│   │   │   │       │   ├── AU8830.conf
│   │   │   │       │   ├── Audigy.conf
│   │   │   │       │   ├── Audigy2.conf
│   │   │   │       │   ├── Aureon51.conf
│   │   │   │       │   ├── Aureon71.conf
│   │   │   │       │   ├── CA0106.conf
│   │   │   │       │   ├── CMI8338-SWIEC.conf
│   │   │   │       │   ├── CMI8338.conf
│   │   │   │       │   ├── CMI8738-MC6.conf
│   │   │   │       │   ├── CMI8738-MC8.conf
│   │   │   │       │   ├── CMI8788.conf
│   │   │   │       │   ├── CS46xx.conf
│   │   │   │       │   ├── EMU10K1.conf
│   │   │   │       │   ├── EMU10K1X.conf
│   │   │   │       │   ├── ENS1370.conf
│   │   │   │       │   ├── ENS1371.conf
│   │   │   │       │   ├── ES1968.conf
│   │   │   │       │   ├── Echo_Echo3G.conf
│   │   │   │       │   ├── FM801.conf
│   │   │   │       │   ├── FWSpeakers.conf
│   │   │   │       │   ├── FireWave.conf
│   │   │   │       │   ├── GUS.conf
│   │   │   │       │   ├── HDA-Intel.conf
│   │   │   │       │   ├── HdmiLpeAudio.conf
│   │   │   │       │   ├── ICE1712.conf
│   │   │   │       │   ├── ICE1724.conf
│   │   │   │       │   ├── ICH-MODEM.conf
│   │   │   │       │   ├── ICH.conf
│   │   │   │       │   ├── ICH4.conf
│   │   │   │       │   ├── Loopback.conf
│   │   │   │       │   ├── Maestro3.conf
│   │   │   │       │   ├── NFORCE.conf
│   │   │   │       │   ├── PC-Speaker.conf
│   │   │   │       │   ├── PMac.conf
│   │   │   │       │   ├── PMacToonie.conf
│   │   │   │       │   ├── PS3.conf
│   │   │   │       │   ├── RME9636.conf
│   │   │   │       │   ├── RME9652.conf
│   │   │   │       │   ├── SB-XFi.conf
│   │   │   │       │   ├── SI7018.conf
│   │   │   │       │   ├── TRID4DWAVENX.conf
│   │   │   │       │   ├── USB-Audio.conf
│   │   │   │       │   ├── VIA686A.conf
│   │   │   │       │   ├── VIA8233.conf
│   │   │   │       │   ├── VIA8233A.conf
│   │   │   │       │   ├── VIA8237.conf
│   │   │   │       │   ├── VX222.conf
│   │   │   │       │   ├── VXPocket.conf
│   │   │   │       │   ├── VXPocket440.conf
│   │   │   │       │   ├── YMF744.conf
│   │   │   │       │   ├── aliases.conf
│   │   │   │       │   ├── pistachio-card.conf
│   │   │   │       │   └── vc4-hdmi.conf
│   │   │   │       ├── ctl/
│   │   │   │       │   └── default.conf
│   │   │   │       ├── pcm/
│   │   │   │       │   ├── center_lfe.conf
│   │   │   │       │   ├── default.conf
│   │   │   │       │   ├── dmix.conf
│   │   │   │       │   ├── dpl.conf
│   │   │   │       │   ├── dsnoop.conf
│   │   │   │       │   ├── front.conf
│   │   │   │       │   ├── hdmi.conf
│   │   │   │       │   ├── iec958.conf
│   │   │   │       │   ├── modem.conf
│   │   │   │       │   ├── rear.conf
│   │   │   │       │   ├── side.conf
│   │   │   │       │   ├── surround21.conf
│   │   │   │       │   ├── surround40.conf
│   │   │   │       │   ├── surround41.conf
│   │   │   │       │   ├── surround50.conf
│   │   │   │       │   ├── surround51.conf
│   │   │   │       │   └── surround71.conf
│   │   │   │       └── smixer.conf
│   │   │   ├── audio_converter_config.xml
│   │   │   ├── audio_device_privacy.xml
│   │   │   ├── audio_effect_config.xml
│   │   │   ├── audio_interrupt_policy_config.xml
│   │   │   ├── audio_strategy_router.xml
│   │   │   ├── audio_tone_dtmf_config.xml
│   │   │   ├── audio_usage_strategy.xml
│   │   │   └── audio_volume_config.xml
│   │   ├── battery/
│   │   │   ├── battery_config.json
│   │   │   └── battery_vibrator.json
│   │   ├── bftpd.conf
│   │   ├── bpf/
│   │   │   ├── netsys.o
│   │   │   └── ohos_ebpf.o
│   │   ├── camera/
│   │   │   ├── hwkey_param_upgrade_v1.pem
│   │   │   └── version.txt
│   │   ├── cellular_data/
│   │   │   └── cellular_data_param.json
│   │   ├── certificate/
│   │   │   ├── hotakey_v2.x509.pem
│   │   │   ├── hwkey_apqf_v1.pem
│   │   │   ├── trusted_root_cert.json
│   │   │   └── trusted_user_cert.json
│   │   ├── cgroup_sched/
│   │   │   └── cgroup_action_config.json
│   │   ├── charger/
│   │   │   ├── init.charger.cfg
│   │   │   └── resources/
│   │   │       ├── ChargerAnimation_Sans_SC_Regular_Small.ttf
│   │   │       ├── animation.json
│   │   │       ├── font.png
│   │   │       ├── icon_error.png
│   │   │       ├── loop00000.png
│   │   │       ├── loop00001.png
│   │   │       ├── loop00002.png
│   │   │       ├── loop00003.png
│   │   │       ├── loop00004.png
│   │   │       ├── loop00005.png
│   │   │       ├── loop00006.png
│   │   │       ├── loop00007.png
│   │   │       ├── loop00008.png
│   │   │       ├── loop00009.png
│   │   │       ├── loop00010.png
│   │   │       ├── loop00011.png
│   │   │       ├── loop00012.png
│   │   │       ├── loop00013.png
│   │   │       ├── loop00014.png
│   │   │       ├── loop00015.png
│   │   │       ├── loop00016.png
│   │   │       ├── loop00017.png
│   │   │       ├── loop00018.png
│   │   │       ├── loop00019.png
│   │   │       ├── loop00020.png
│   │   │       ├── loop00021.png
│   │   │       ├── loop00022.png
│   │   │       ├── loop00023.png
│   │   │       ├── loop00024.png
│   │   │       ├── loop00025.png
│   │   │       ├── loop00026.png
│   │   │       ├── loop00027.png
│   │   │       ├── loop00028.png
│   │   │       ├── loop00029.png
│   │   │       ├── loop00030.png
│   │   │       ├── loop00031.png
│   │   │       ├── loop00032.png
│   │   │       ├── loop00033.png
│   │   │       ├── loop00034.png
│   │   │       ├── loop00035.png
│   │   │       ├── loop00036.png
│   │   │       ├── loop00037.png
│   │   │       ├── loop00038.png
│   │   │       ├── loop00039.png
│   │   │       ├── loop00040.png
│   │   │       ├── loop00041.png
│   │   │       ├── loop00042.png
│   │   │       ├── loop00043.png
│   │   │       ├── loop00044.png
│   │   │       ├── loop00045.png
│   │   │       ├── loop00046.png
│   │   │       ├── loop00047.png
│   │   │       ├── loop00048.png
│   │   │       ├── loop00049.png
│   │   │       ├── loop00050.png
│   │   │       ├── loop00051.png
│   │   │       ├── loop00052.png
│   │   │       ├── loop00053.png
│   │   │       ├── loop00054.png
│   │   │       ├── loop00055.png
│   │   │       ├── loop00056.png
│   │   │       ├── loop00057.png
│   │   │       ├── loop00058.png
│   │   │       ├── loop00059.png
│   │   │       ├── loop00060.png
│   │   │       ├── loop00061.png
│   │   │       ├── progress_empty.png
│   │   │       └── progress_fill.png
│   │   ├── cloud/
│   │   │   ├── hianalytics/
│   │   │   │   ├── cat/
│   │   │   │   │   └── saconfig_c
│   │   │   │   ├── dog/
│   │   │   │   │   └── saconfig_d
│   │   │   │   ├── fish/
│   │   │   │   │   └── saconfig_f
│   │   │   │   ├── grs_sdk_global_route_config_hianalytics.json
│   │   │   │   └── ha_service_config.json
│   │   │   └── huaweiid/
│   │   │       ├── account/
│   │   │       │   └── config/
│   │   │       │       ├── local_config/
│   │   │       │       │   ├── global_local_configuration.json
│   │   │       │       │   └── httpdns.Config
│   │   │       │       └── root_tx.pem
│   │   │       └── cccs_grs/
│   │   │           ├── config/
│   │   │           │   └── grs_sdk_server_config.json
│   │   │           └── router/
│   │   │               └── grs_app_global_route_config.json
│   │   ├── cloud_push/
│   │   │   └── cloud_config_param.cfg
│   │   ├── cmap/
│   │   │   └── cmap_base_param.cfg
│   │   ├── codec/
│   │   │   └── codec_caps.xml
│   │   ├── communication/
│   │   │   ├── netmanager_ext/
│   │   │   │   ├── ethernet_interfaces.json
│   │   │   │   └── network_share_config.cfg
│   │   │   └── softbus/
│   │   │       └── softbus_trans_permission.json
│   │   ├── component_version.txt
│   │   ├── cups/
│   │   │   ├── cups-files.conf
│   │   │   ├── cupsd.conf
│   │   │   └── share/
│   │   │       └── mime/
│   │   │           ├── cupsfilters.convs
│   │   │           ├── cupsfilters.types
│   │   │           ├── mime.convs
│   │   │           └── mime.types
│   │   ├── cust/
│   │   │   └── baselayer.cfg
│   │   ├── dcm_server_url.conf
│   │   ├── deeplink_reserve_config.json
│   │   ├── detectionconfig.conf
│   │   ├── device.boot.group.cfg
│   │   ├── device.charge.group.cfg
│   │   ├── device_cloud_gateway/
│   │   │   ├── client_cloud_cache_service/
│   │   │   │   ├── cbg_root.pem
│   │   │   │   ├── grs_sdk_server_config.json
│   │   │   │   ├── ha_config.json
│   │   │   │   ├── httpdns.Config
│   │   │   │   └── httpdnsserver.pem
│   │   │   └── cloud_interface_auth/
│   │   │       └── config/
│   │   │           └── cccs_grs/
│   │   │               └── router/
│   │   │                   └── grs_sdk_global_route_config_cloudInterfaceAuth.json
│   │   ├── device_status/
│   │   │   └── drag_icon/
│   │   │       ├── Copy_Drag.svg
│   │   │       ├── Copy_One_Drag.svg
│   │   │       ├── Forbid_Drag.svg
│   │   │       ├── Forbid_One_Drag.svg
│   │   │       ├── Mouse_Drag_Cursor_Circle.png
│   │   │       ├── Mouse_Drag_Default.svg
│   │   │       ├── Mouse_Drag_Magic_Default.svg
│   │   │       └── Move_Drag.svg
│   │   ├── deviceprofile/
│   │   │   ├── authority.json
│   │   │   └── permission.json
│   │   ├── distributed_filesystem_ext/
│   │   │   └── path2bundle
│   │   ├── distributeddata/
│   │   │   └── conf/
│   │   │       └── config.json
│   │   ├── dlp_config.json
│   │   ├── dlp_permission/
│   │   │   └── clone_app_permission.json
│   │   ├── dlp_whitelist.json
│   │   ├── dms/
│   │   │   ├── hwkey_param_upgrade_v1.pem
│   │   │   └── version.txt
│   │   ├── drm/
│   │   │   ├── drm_api_operation.cfg
│   │   │   └── drm_plugin_lazyloding.cfg
│   │   ├── dslm_finger.cfg
│   │   ├── extension_blocklist_config.json
│   │   ├── faultlogger.conf
│   │   ├── features.json
│   │   ├── ffrt/
│   │   │   ├── log_ctr_whitelist.conf
│   │   │   └── worker_monitor.conf
│   │   ├── fontconfig.json
│   │   ├── form/
│   │   │   └── form_config.xml
│   │   ├── frame_aware_sched/
│   │   │   └── hwrme.xml
│   │   ├── game/
│   │   │   └── gameservice_server/
│   │   │       ├── cccs_grs/
│   │   │       │   ├── config/
│   │   │       │   │   └── grs_sdk_server_config.json
│   │   │       │   └── router/
│   │   │       │       └── grs_app_global_route_config.json
│   │   │       └── config.json
│   │   ├── group
│   │   ├── histreamer/
│   │   │   └── model.dat
│   │   ├── hiview/
│   │   │   ├── adft_plugin_config
│   │   │   ├── area_policy.json
│   │   │   ├── bdfr_plugin_config
│   │   │   ├── betaclub.json
│   │   │   ├── betaclub.tar
│   │   │   ├── bootdetector_plugin_config
│   │   │   ├── chr/
│   │   │   │   ├── app_white_list.json
│   │   │   │   ├── call_quality_audio_db_para.xml
│   │   │   │   ├── event_catch_config.json
│   │   │   │   ├── event_control_config.json
│   │   │   │   └── transmissible_unsolicited_event.cfg
│   │   │   ├── communicationchr_plugin_config
│   │   │   ├── compose_rule.json
│   │   │   ├── crashvalidator_plugin_config
│   │   │   ├── device_id_list.json
│   │   │   ├── dispatch_rule/
│   │   │   │   ├── BBoxDetectorPipeline
│   │   │   │   ├── EventloggerPipeline
│   │   │   │   ├── faultloggerPipeline
│   │   │   │   └── usageEventPipeline
│   │   │   ├── event_logger_config
│   │   │   ├── event_store_config.json
│   │   │   ├── event_threshold.json
│   │   │   ├── eventloggerso_plugin_config
│   │   │   ├── extract_rule.json
│   │   │   ├── fault.json
│   │   │   ├── fault.tar
│   │   │   ├── fd_leak_config.json
│   │   │   ├── fieldtest.json
│   │   │   ├── fieldtest.tar
│   │   │   ├── freeze_rules.xml
│   │   │   ├── hisysevent.zip
│   │   │   ├── hitrace_utils.json
│   │   │   ├── hiview_config_version
│   │   │   ├── hiview_platform_config
│   │   │   ├── hiviewengine_plugin_config
│   │   │   ├── hiviewx_client.json
│   │   │   ├── hiviewx_events.json
│   │   │   ├── hiviewx_service.json
│   │   │   ├── hw_dubai_config.xml
│   │   │   ├── hwkey_param_upgrade_hiviewdfx_v1.pem
│   │   │   ├── kernel_leak_config.json
│   │   │   ├── listener_rule/
│   │   │   │   ├── CommunicationChrPlugin
│   │   │   │   ├── HiViewEngine
│   │   │   │   ├── UnifiedCollector
│   │   │   │   ├── XPower
│   │   │   │   └── XperfPlugin
│   │   │   ├── log_type.json
│   │   │   ├── logsizecheck_config.json
│   │   │   ├── memory_leak_threshold
│   │   │   ├── monitor.cfg
│   │   │   ├── native_leak_config.json
│   │   │   ├── plugin_config
│   │   │   ├── pwrprof.xml
│   │   │   ├── remotelog/
│   │   │   │   └── capabilities
│   │   │   ├── remotelog.json
│   │   │   ├── remotelog.tar
│   │   │   ├── runtime_profiler_config.json
│   │   │   ├── storage_threshold.json
│   │   │   ├── sys_event_export/
│   │   │   │   └── hiviewx_event_export_config.json
│   │   │   ├── thread_leak_config.json
│   │   │   ├── xperf_plugin_config
│   │   │   ├── xperfbdcfg.json
│   │   │   ├── xperfcfg.json
│   │   │   ├── xperfcfg_commercial.json
│   │   │   └── xpowerservice_plugin_config
│   │   ├── icu_tzdata/
│   │   │   ├── metaZones.res
│   │   │   ├── timezoneTypes.res
│   │   │   ├── windowsZones.res
│   │   │   └── zoneinfo64.res
│   │   ├── init/
│   │   │   ├── CollaborationFwk.cfg
│   │   │   ├── access_token.cfg
│   │   │   ├── accessibility.cfg
│   │   │   ├── accountmgr.cfg
│   │   │   ├── app_domain_verify_agent.cfg
│   │   │   ├── app_fwk_update_service.cfg
│   │   │   ├── appgallery_service.cfg
│   │   │   ├── appspawn.cfg
│   │   │   ├── aps_manager.cfg
│   │   │   ├── asset_service.cfg
│   │   │   ├── audio_policy.cfg
│   │   │   ├── audio_server.cfg
│   │   │   ├── av_codec_service.cfg
│   │   │   ├── avsession_service.cfg
│   │   │   ├── backup.cfg
│   │   │   ├── bgtaskmgr_service.cfg
│   │   │   ├── camera_service.cfg
│   │   │   ├── cast_engine_service.cfg
│   │   │   ├── cert_manager_service.cfg
│   │   │   ├── check_module_update.cfg
│   │   │   ├── chrservice.cfg
│   │   │   ├── cjappspawn.cfg
│   │   │   ├── client_cloud_cache_service.cfg
│   │   │   ├── cloud_backup_service.cfg
│   │   │   ├── cloud_interface_auth.cfg
│   │   │   ├── compiler_service.cfg
│   │   │   ├── concurrent_task_service.cfg
│   │   │   ├── console.cfg
│   │   │   ├── cups_service.cfg
│   │   │   ├── daudio.cfg
│   │   │   ├── dcall.cfg
│   │   │   ├── dcamera.cfg
│   │   │   ├── dcm_service.cfg
│   │   │   ├── devattest_service.cfg
│   │   │   ├── device_activate_service.cfg
│   │   │   ├── device_manager.cfg
│   │   │   ├── device_usage_statistics_service.cfg
│   │   │   ├── deviceauth_service.cfg
│   │   │   ├── deviceinfoservice.cfg
│   │   │   ├── deviceprofile.cfg
│   │   │   ├── dhardware.cfg
│   │   │   ├── dinput.cfg
│   │   │   ├── distributed_data.cfg
│   │   │   ├── distributedbms.cfg
│   │   │   ├── distributedfile.cfg
│   │   │   ├── distributedsched.cfg
│   │   │   ├── dlp_credential_service.cfg
│   │   │   ├── dlp_permission_service.cfg
│   │   │   ├── dmsdpadapter.cfg
│   │   │   ├── downloadservice.cfg
│   │   │   ├── drm_service.cfg
│   │   │   ├── dscreen.cfg
│   │   │   ├── dslm_service.cfg
│   │   │   ├── edc.cfg
│   │   │   ├── edm.cfg
│   │   │   ├── el5_filekey_manager.cfg
│   │   │   ├── faultloggerd.cfg
│   │   │   ├── file_access_service.cfg
│   │   │   ├── file_migrate_ability.cfg
│   │   │   ├── foundation.cfg
│   │   │   ├── gameservice_server.cfg
│   │   │   ├── graphic.cfg
│   │   │   ├── hdcd.cfg
│   │   │   ├── hianalytics.cfg
│   │   │   ├── hidumper_service.cfg
│   │   │   ├── hilogd.cfg
│   │   │   ├── hiperf.cfg
│   │   │   ├── hitrace.cfg
│   │   │   ├── hiview.cfg
│   │   │   ├── hiview_engine.cfg
│   │   │   ├── hmos_cust_ext.cfg
│   │   │   ├── huawei_id_svc.cfg
│   │   │   ├── huks_service.cfg
│   │   │   ├── i18n_service.cfg
│   │   │   ├── init.reboot.cfg
│   │   │   ├── init.sched.cfg
│   │   │   ├── init_dec.cfg
│   │   │   ├── inputmethodservice.cfg
│   │   │   ├── installs.cfg
│   │   │   ├── kingkongd.cfg
│   │   │   ├── locationsa.cfg
│   │   │   ├── mdnsmanager.cfg
│   │   │   ├── media_monitor.cfg
│   │   │   ├── media_service.cfg
│   │   │   ├── memleak_tracker.cfg
│   │   │   ├── memmgrservice.cfg
│   │   │   ├── mmi_uinput.rc
│   │   │   ├── module_update_sa.cfg
│   │   │   ├── msdp_musl.cfg
│   │   │   ├── multimodalinput.cfg
│   │   │   ├── nativespawn.cfg
│   │   │   ├── nav_info_service.cfg
│   │   │   ├── netmanager_base.cfg
│   │   │   ├── netsysnative.cfg
│   │   │   ├── nfc_service.cfg
│   │   │   ├── oaidservice.cfg
│   │   │   ├── param_watcher.cfg
│   │   │   ├── pasteboardservice.cfg
│   │   │   ├── pinauth_sa_profile.cfg
│   │   │   ├── powermgr.cfg
│   │   │   ├── printservice.cfg
│   │   │   ├── privacy.cfg
│   │   │   ├── pulseaudio.cfg
│   │   │   ├── push_manager_service.cfg
│   │   │   ├── quick_fix.cfg
│   │   │   ├── quickfix.cfg
│   │   │   ├── resource_schedule_executor.cfg
│   │   │   ├── resource_schedule_service.cfg
│   │   │   ├── samgr_standard.cfg
│   │   │   ├── sandbox_manager_service.cfg
│   │   │   ├── saneservice.cfg
│   │   │   ├── saneservice.rc
│   │   │   ├── scanservice.cfg
│   │   │   ├── scanservice.rc
│   │   │   ├── screenlock.cfg
│   │   │   ├── security_collector.cfg
│   │   │   ├── security_component_service.cfg
│   │   │   ├── security_guard.cfg
│   │   │   ├── security_privacy_server.cfg
│   │   │   ├── sensors_musl.cfg
│   │   │   ├── sharing_service.cfg
│   │   │   ├── skytone_service.cfg
│   │   │   ├── softbus_server_musl.cfg
│   │   │   ├── srms.cfg
│   │   │   ├── stop_watchdog_service.cfg
│   │   │   ├── storage_daemon.cfg
│   │   │   ├── storage_manager.cfg
│   │   │   ├── super_privacy_server.cfg
│   │   │   ├── sys_installer_sa.cfg
│   │   │   ├── telephony.cfg
│   │   │   ├── testserver.cfg
│   │   │   ├── timeservice.cfg
│   │   │   ├── token_sync.cfg
│   │   │   ├── ubsan.cfg
│   │   │   ├── ueventd.cfg
│   │   │   ├── ui_service.cfg
│   │   │   ├── updater_normal.cfg
│   │   │   ├── updater_sa.cfg
│   │   │   ├── usb_service.cfg
│   │   │   ├── useriam.cfg
│   │   │   ├── voip_call_manager.cfg
│   │   │   ├── vpnmanager.cfg
│   │   │   ├── wallpaperservice.cfg
│   │   │   ├── watchdog.cfg
│   │   │   ├── wifi_hal_service.cfg
│   │   │   ├── wifi_standard.cfg
│   │   │   ├── xlogcat.cfg
│   │   │   ├── xperf.cfg
│   │   │   └── xpower.cfg
│   │   ├── init.cfg
│   │   ├── init.usb.cfg
│   │   ├── initHosts
│   │   ├── init_trace.cfg
│   │   ├── kingkong/
│   │   │   └── kingkongconfig.json
│   │   ├── ld-musl-aarch64.path
│   │   ├── ld-musl-namespace-x86_64-test.ini
│   │   ├── ld-musl-namespace-x86_64.ini
│   │   ├── memmgr/
│   │   │   └── memmgr_config.xml
│   │   ├── mmi_device_config.ini
│   │   ├── multimedia/
│   │   │   ├── angle.ms
│   │   │   ├── corner.ms
│   │   │   └── detect.ms
│   │   ├── multimediaplugin/
│   │   │   └── image/
│   │   │       ├── extplugin.pluginmeta
│   │   │       ├── imageformatagent.pluginmeta
│   │   │       ├── jaipplugin.pluginmeta
│   │   │       ├── jpegplugin.pluginmeta
│   │   │       ├── pngplugin.pluginmeta
│   │   │       ├── rawplugin.pluginmeta
│   │   │       └── svgplugin.pluginmeta
│   │   ├── multimodalinput/
│   │   │   ├── ability_launch_config.json
│   │   │   ├── exclude_keys_config.json
│   │   │   ├── mouse_icon/
│   │   │   │   ├── Colorsucker.svg
│   │   │   │   ├── Copy.svg
│   │   │   │   ├── Cross.svg
│   │   │   │   ├── Cursor_Circle.png
│   │   │   │   ├── Cursor_Cross.svg
│   │   │   │   ├── Default.svg
│   │   │   │   ├── East.svg
│   │   │   │   ├── Forbid.svg
│   │   │   │   ├── Hand_Grabbing.svg
│   │   │   │   ├── Hand_Open.svg
│   │   │   │   ├── Hand_Pointing.svg
│   │   │   │   ├── Help.svg
│   │   │   │   ├── Horizontal_Text_Cursor.svg
│   │   │   │   ├── Knuckle_Sprite_360.png
│   │   │   │   ├── Loading.svg
│   │   │   │   ├── Loading_Left.svg
│   │   │   │   ├── Loading_Right.svg
│   │   │   │   ├── MID_Btn_East.svg
│   │   │   │   ├── MID_Btn_North.svg
│   │   │   │   ├── MID_Btn_North_East.svg
│   │   │   │   ├── MID_Btn_North_South.svg
│   │   │   │   ├── MID_Btn_North_South_West_East.svg
│   │   │   │   ├── MID_Btn_North_West.svg
│   │   │   │   ├── MID_Btn_South.svg
│   │   │   │   ├── MID_Btn_South_East.svg
│   │   │   │   ├── MID_Btn_South_West.svg
│   │   │   │   ├── MID_Btn_West.svg
│   │   │   │   ├── Move.svg
│   │   │   │   ├── North.svg
│   │   │   │   ├── North_East.svg
│   │   │   │   ├── North_East_South_West.svg
│   │   │   │   ├── North_South.svg
│   │   │   │   ├── North_West.svg
│   │   │   │   ├── North_West_South_East.svg
│   │   │   │   ├── Resize_Left_Right.svg
│   │   │   │   ├── Resize_Up_Down.svg
│   │   │   │   ├── Screenshot_Cross.svg
│   │   │   │   ├── Screenshot_Cursor.png
│   │   │   │   ├── South.svg
│   │   │   │   ├── South_East.svg
│   │   │   │   ├── South_West.svg
│   │   │   │   ├── Text_Cursor.svg
│   │   │   │   ├── West.svg
│   │   │   │   ├── West_East.svg
│   │   │   │   ├── Zoom_In.svg
│   │   │   │   └── Zoom_Out.svg
│   │   │   └── white_list_config.json
│   │   ├── native_packages.xml
│   │   ├── netdetectionurl.conf
│   │   ├── netmanager_base/
│   │   │   └── resources/
│   │   │       ├── base/
│   │   │       │   └── element/
│   │   │       │       └── string.json
│   │   │       ├── bo_CN/
│   │   │       │   └── element/
│   │   │       │       └── string.json
│   │   │       ├── locale_to_resourcePath.json
│   │   │       ├── network_ic.png
│   │   │       ├── ug/
│   │   │       │   └── element/
│   │   │       │       └── string.json
│   │   │       ├── zh_CN/
│   │   │       │   └── element/
│   │   │       │       └── string.json
│   │   │       ├── zh_HK/
│   │   │       │   └── element/
│   │   │       │       └── string.json
│   │   │       ├── zh_TW/
│   │   │       │   └── element/
│   │   │       │       └── string.json
│   │   │       └── zz_ZX/
│   │   │           └── element/
│   │   │               └── string.json
│   │   ├── netvirt_config.json
│   │   ├── nfc/
│   │   │   ├── nfc_card_apdu.json
│   │   │   ├── nfc_icon.png
│   │   │   ├── string_en.json
│   │   │   └── string_zh.json
│   │   ├── noticeFile/
│   │   │   ├── AuthWidget_OpenSource.html
│   │   │   ├── DataShelf.html
│   │   │   ├── HuaweiShare.html
│   │   │   ├── IdmWidget_OpenSource.html
│   │   │   ├── NWeb_OpenSource.html
│   │   │   ├── PhotosHm_OpenSource.html
│   │   │   └── Settings_OpenSource.html
│   │   ├── notification_template/
│   │   │   ├── assets/
│   │   │   │   └── js/
│   │   │   │       ├── downloadTemplate.abc
│   │   │   │       └── downloadTemplate.js
│   │   │   └── external.json
│   │   ├── ohos_lang_config/
│   │   │   ├── bo.xml
│   │   │   ├── en-Latn.xml
│   │   │   ├── supported_locales.xml
│   │   │   ├── ug.xml
│   │   │   ├── zh-Hans.xml
│   │   │   ├── zh-Hant-HK.xml
│   │   │   └── zh-Hant.xml
│   │   ├── openssl.cnf
│   │   ├── param/
│   │   │   ├── access_token.para
│   │   │   ├── access_token.para.dac
│   │   │   ├── accessibility.para.dac
│   │   │   ├── account.para
│   │   │   ├── account.para.dac
│   │   │   ├── ace_engine.para.dac
│   │   │   ├── activate.para
│   │   │   ├── activate.para.dac
│   │   │   ├── ans.para
│   │   │   ├── ans.para.dac
│   │   │   ├── appfwk.para
│   │   │   ├── appfwk.para.dac
│   │   │   ├── arkcompiler.para
│   │   │   ├── arkcompiler.para.dac
│   │   │   ├── audio_config.para
│   │   │   ├── audio_config.para.dac
│   │   │   ├── avsession.para.dac
│   │   │   ├── backup.para
│   │   │   ├── backupservice.para
│   │   │   ├── backupservice.para.dac
│   │   │   ├── bms.para
│   │   │   ├── bms.para.dac
│   │   │   ├── build_info.para
│   │   │   ├── bundle_name_config.para
│   │   │   ├── bundle_name_config.para.dac
│   │   │   ├── ces.para
│   │   │   ├── ces.para.dac
│   │   │   ├── cloudsyncservice.para
│   │   │   ├── cloudsyncservice.para.dac
│   │   │   ├── customization.para.dac
│   │   │   ├── devicemanager.para.dac
│   │   │   ├── display.para
│   │   │   ├── display.para.dac
│   │   │   ├── distributed_file.para
│   │   │   ├── dlp_permission.para
│   │   │   ├── dlp_permission.para.dac
│   │   │   ├── edc.para
│   │   │   ├── edc.para.dac
│   │   │   ├── edm.para
│   │   │   ├── edm.para.dac
│   │   │   ├── faultloggerd.para
│   │   │   ├── faultloggerd.para.dac
│   │   │   ├── ffrt.para
│   │   │   ├── ffrt.para.dac
│   │   │   ├── graphic.para.dac
│   │   │   ├── hdc.para
│   │   │   ├── hdc.para.dac
│   │   │   ├── hichecker.para
│   │   │   ├── hichecker.para.dac
│   │   │   ├── hilog.para
│   │   │   ├── hilog.para.dac
│   │   │   ├── hiperf.para
│   │   │   ├── hiperf.para.dac
│   │   │   ├── hitrace.para
│   │   │   ├── hitrace.para.dac
│   │   │   ├── hiview.para.dac
│   │   │   ├── hmos.para
│   │   │   ├── hw_defaults.para
│   │   │   ├── i18n.para
│   │   │   ├── i18n.para.dac
│   │   │   ├── init_ext.para.dac
│   │   │   ├── inputmethod.para
│   │   │   ├── inputmethod.para.dac
│   │   │   ├── location.para
│   │   │   ├── location.para.dac
│   │   │   ├── log_service_plugin.para.dac
│   │   │   ├── media_library.para
│   │   │   ├── media_library.para.dac
│   │   │   ├── media_monitor.para
│   │   │   ├── media_monitor.para.dac
│   │   │   ├── memleak_tracker.para.dac
│   │   │   ├── memmgr.para
│   │   │   ├── memmgr.para.dac
│   │   │   ├── multimodalinput.para.dac
│   │   │   ├── musl.para
│   │   │   ├── musl.para.dac
│   │   │   ├── ohos.para
│   │   │   ├── ohos.para.dac
│   │   │   ├── ohos.para.size
│   │   │   ├── ohos.startup.para
│   │   │   ├── ohos_const/
│   │   │   │   └── ohos.para
│   │   │   ├── powermgr.para
│   │   │   ├── powermgr.para.dac
│   │   │   ├── print.para
│   │   │   ├── print.para.dac
│   │   │   ├── prop_to_param.cfg
│   │   │   ├── quickfix.para.dac
│   │   │   ├── ringtone_param.para.dac
│   │   │   ├── ringtone_scanner_param.para
│   │   │   ├── ringtone_setting_notifications.para
│   │   │   ├── ringtone_setting_ringtones.para
│   │   │   ├── ringtone_setting_shots.para
│   │   │   ├── samgr.para
│   │   │   ├── samgr.para.dac
│   │   │   ├── sasdk.para
│   │   │   ├── schedule.para.dac
│   │   │   ├── screencapture_config.para
│   │   │   ├── screencapture_config.para.dac
│   │   │   ├── storage_manager_config.para
│   │   │   ├── storage_manager_config.para.dac
│   │   │   ├── super_privacy.para
│   │   │   ├── super_privacy.para.dac
│   │   │   ├── sys_installer.para
│   │   │   ├── sys_installer.para.dac
│   │   │   ├── syscap.para
│   │   │   ├── telephony.para
│   │   │   ├── telephony.para.dac
│   │   │   ├── telephony_ext.para
│   │   │   ├── telephony_ext.para.dac
│   │   │   ├── thermal_aware.para
│   │   │   ├── thermal_aware.para.dac
│   │   │   ├── time.para
│   │   │   ├── time.para.dac
│   │   │   ├── ui_appearance.para
│   │   │   ├── ui_appearance.para.dac
│   │   │   ├── update.para
│   │   │   ├── update.para.dac
│   │   │   ├── usb_config.para
│   │   │   ├── usb_config.para.dac
│   │   │   ├── usb_service.para
│   │   │   ├── usb_service.para.dac
│   │   │   ├── useriam.para
│   │   │   ├── useriam.para.dac
│   │   │   ├── vsim_service.para
│   │   │   ├── vsim_service.para.dac
│   │   │   ├── web.para
│   │   │   ├── web.para.dac
│   │   │   ├── wifi.para
│   │   │   ├── wifi.para.dac
│   │   │   ├── wms.para
│   │   │   ├── wms.para.dac
│   │   │   ├── xperf.para.dac
│   │   │   ├── xpower.para
│   │   │   └── xpower.para.dac
│   │   ├── passwd
│   │   ├── pcid.sc
│   │   ├── power_config/
│   │   │   ├── power_mode_config.xml
│   │   │   ├── power_suspend.json
│   │   │   ├── power_vibrator.json
│   │   │   └── power_wakeup.json
│   │   ├── prefer_cellular_url_list.txt
│   │   ├── profile/
│   │   │   ├── geofence_stats.json
│   │   │   ├── power_average.json
│   │   │   └── timeline_stats.json
│   │   ├── ptable_data.json
│   │   ├── publicity_all.xml
│   │   ├── pulse/
│   │   │   ├── client.conf
│   │   │   ├── daemon.conf
│   │   │   └── default.pa
│   │   ├── push/
│   │   │   └── push_manager_service/
│   │   │       └── config/
│   │   │           ├── CBG_CA_G3.cer
│   │   │           ├── grs_app_global_route_config.json
│   │   │           ├── grs_sdk_server_config.json
│   │   │           ├── root_aegis.pem
│   │   │           └── wifi_root_aegis.pem
│   │   ├── real_time_upload_event.cfg
│   │   ├── recorder/
│   │   │   └── recorder_configs.xml
│   │   ├── request/
│   │   │   └── xmark.svg
│   │   ├── rescue/
│   │   │   ├── appspawn.cfg
│   │   │   ├── cjappspawn.cfg
│   │   │   ├── graphic.cfg
│   │   │   └── init.hw_rescue.cfg
│   │   ├── resolv.conf
│   │   ├── ressched/
│   │   │   ├── res_sched_config.xml
│   │   │   └── res_sched_plugin_switch.xml
│   │   ├── rss/
│   │   │   └── phone/
│   │   │       ├── hwkey_param_upgrade_v1.pem
│   │   │       └── version.txt
│   │   ├── sandbox/
│   │   │   ├── appdata-sandbox-isolated.json
│   │   │   ├── appdata-sandbox.json
│   │   │   ├── chipset-sandbox.json
│   │   │   └── system-sandbox.json
│   │   ├── screencapture/
│   │   │   ├── capsule.svg
│   │   │   ├── capsule_stop.svg
│   │   │   ├── mic.svg
│   │   │   ├── mic_off.svg
│   │   │   ├── notification.png
│   │   │   ├── stop.png
│   │   │   └── stop_dark.png
│   │   ├── security/
│   │   │   ├── certificates/
│   │   │   │   ├── 02265526.0
│   │   │   │   ├── 022b7604.0
│   │   │   │   ├── 062cdee6.0
│   │   │   │   ├── 064e0aa9.0
│   │   │   │   ├── 06dc52d5.0
│   │   │   │   ├── 0b1b94ef.0
│   │   │   │   ├── 0b9bc432.0
│   │   │   │   ├── 0f6fa695.0
│   │   │   │   ├── 106f3e4d.0
│   │   │   │   ├── 1d3472b9.0
│   │   │   │   ├── 1e09d511.0
│   │   │   │   ├── 244b5494.0
│   │   │   │   ├── 2923b3f9.0
│   │   │   │   ├── 2ae6433e.0
│   │   │   │   ├── 2b349938.0
│   │   │   │   ├── 32888f65.0
│   │   │   │   ├── 3513523f.0
│   │   │   │   ├── 3bde41ac.0
│   │   │   │   ├── 4042bcee.0
│   │   │   │   ├── 40547a79.0
│   │   │   │   ├── 48bec511.0
│   │   │   │   ├── 4bfab552.0
│   │   │   │   ├── 4f316efb.0
│   │   │   │   ├── 5443e9e3.0
│   │   │   │   ├── 54657681.0
│   │   │   │   ├── 5ad8a5d6.0
│   │   │   │   ├── 5cd81ad7.0
│   │   │   │   ├── 5f15c80c.0
│   │   │   │   ├── 5f618aec.0
│   │   │   │   ├── 607986c7.0
│   │   │   │   ├── 653b494a.0
│   │   │   │   ├── 68dd7389.0
│   │   │   │   ├── 6b99d060.0
│   │   │   │   ├── 6fa5da56.0
│   │   │   │   ├── 75d1b2ed.0
│   │   │   │   ├── 8160b96c.0
│   │   │   │   ├── 8d86cdd1.0
│   │   │   │   ├── 8f103249.0
│   │   │   │   ├── 930ac5d2.0
│   │   │   │   ├── 988a38cb.0
│   │   │   │   ├── 9d04f354.0
│   │   │   │   ├── aee5f10d.0
│   │   │   │   ├── b7a5b843.0
│   │   │   │   ├── c01eb047.0
│   │   │   │   ├── c28a8a30.0
│   │   │   │   ├── ca6e4ad9.0
│   │   │   │   ├── cbf06781.0
│   │   │   │   ├── cd58d51e.0
│   │   │   │   ├── ce5e74ef.0
│   │   │   │   ├── d4dae3dd.0
│   │   │   │   ├── d52c538d.0
│   │   │   │   ├── d6325660.0
│   │   │   │   ├── d7e8dc79.0
│   │   │   │   ├── dc4d6a89.0
│   │   │   │   ├── dd8e9d41.0
│   │   │   │   ├── e113c810.0
│   │   │   │   ├── e36a6752.0
│   │   │   │   ├── e73d606e.0
│   │   │   │   ├── e8de2f56.0
│   │   │   │   ├── ee64a828.0
│   │   │   │   ├── eed8c118.0
│   │   │   │   ├── ef954a4e.0
│   │   │   │   ├── f081611a.0
│   │   │   │   ├── f30dd6ad.0
│   │   │   │   ├── f387163d.0
│   │   │   │   ├── f39fc864.0
│   │   │   │   ├── f51bb24c.0
│   │   │   │   ├── fc5a8f99.0
│   │   │   │   └── ff34af3f.0
│   │   │   ├── trusted_apps_sources.json
│   │   │   ├── trusted_apps_sources_test.json
│   │   │   ├── trusted_root_ca.json
│   │   │   ├── trusted_root_ca_test.json
│   │   │   └── trusted_tickets_sources.json
│   │   ├── security_audit.cfg
│   │   ├── security_guard.cfg
│   │   ├── security_guard_event.cfg
│   │   ├── security_guard_model.cfg
│   │   ├── selinux/
│   │   │   ├── compatible/
│   │   │   │   └── 40.cil
│   │   │   ├── compatible_developer/
│   │   │   │   └── 40.cil
│   │   │   ├── config
│   │   │   ├── ignore_cfg
│   │   │   ├── system.cil
│   │   │   ├── system.cil.sha256
│   │   │   ├── system_common.cil
│   │   │   ├── system_developer.cil
│   │   │   ├── system_developer.cil.sha256
│   │   │   └── targeted/
│   │   │       └── contexts/
│   │   │           ├── file_contexts
│   │   │           ├── hdf_service_contexts
│   │   │           ├── parameter_contexts
│   │   │           ├── sehap_contexts
│   │   │           └── service_contexts
│   │   ├── shell_command_excutor_config.json
│   │   ├── soc_perf/
│   │   │   ├── socperf_boost_config.xml
│   │   │   └── socperf_resource_config.xml
│   │   ├── ssl/
│   │   │   └── certs/
│   │   │       └── cacert.pem
│   │   ├── standby_service/
│   │   │   ├── device_standby_config.json
│   │   │   ├── generic/
│   │   │   │   └── version.txt
│   │   │   ├── hwkey_param_upgrade_v1.pem
│   │   │   ├── standby_strategy_config.json
│   │   │   └── switch_policy.xml
│   │   ├── start_ability_without_caller_token.json
│   │   ├── storage_daemon/
│   │   │   └── disk_config
│   │   ├── strip.native.min.abc
│   │   ├── syscap.json
│   │   ├── ta_ctrl.ctrl
│   │   ├── taboo/
│   │   │   ├── taboo-config.xml
│   │   │   ├── version.txt
│   │   │   ├── xml/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-am/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ar/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-as/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-az/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-b+en+001/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-b+es+419/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-b+jv+Latn/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-b+my+Qaag/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-b+sr+Latn/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-b+zh+Hant/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-be/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-bg/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-bn/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-bo/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-bs/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ca/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-cs/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-da/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-de/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-el/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-es/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-et/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-eu/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-fa/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-fi/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-fil/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-fr/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-gl/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-gu/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-he/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-hi/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-hr/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-hu/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-id/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-in/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-it/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-iw/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ja/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ka/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-kk/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-km/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-kn/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ko/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-lo/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-lt/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-lv/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-mai/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-mi/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-mk/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ml/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-mn/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-mr/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ms/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-my/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-nb/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ne/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-nl/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-or/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-pa/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-pl/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-pt/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-pt-rPT/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ro/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ru/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-si/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-sk/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-sl/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-sv/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-sw/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ta/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-te/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-th/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-tl/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-tr/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ug/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-uk/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-ur/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-uz/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-vi/
│   │   │   │   └── taboo-data.xml
│   │   │   ├── xml-zh/
│   │   │   │   └── taboo-data.xml
│   │   │   └── xml-zh-rHK/
│   │   │       └── taboo-data.xml
│   │   ├── telephony/
│   │   │   ├── commpara/
│   │   │   │   ├── call/
│   │   │   │   │   ├── CallRecoveryConfig.json
│   │   │   │   │   ├── FusionCallConfig.json
│   │   │   │   │   └── fusioncall/
│   │   │   │   │       ├── conf/
│   │   │   │   │       │   ├── conf.json
│   │   │   │   │       │   └── rootcert.pem
│   │   │   │   │       └── fusion_call_param.cfg
│   │   │   │   ├── cellular_data/
│   │   │   │   │   └── data_retry_strategy.json
│   │   │   │   ├── power/
│   │   │   │   │   ├── TxPowerCtrl.json
│   │   │   │   │   ├── Uid2r4r.json
│   │   │   │   │   ├── apps_blklist.json
│   │   │   │   │   ├── apps_downloader.json
│   │   │   │   │   ├── apps_gameapp.json
│   │   │   │   │   ├── apps_speedtest.json
│   │   │   │   │   ├── apps_up_pkt_converge_whitelist.json
│   │   │   │   │   ├── close_nr.json
│   │   │   │   │   ├── dynamic_ue_ability_switch.json
│   │   │   │   │   ├── high_temperature.json
│   │   │   │   │   └── speed_sensitive_app.json
│   │   │   │   ├── rollie/
│   │   │   │   │   └── OperatorNameConfig.json
│   │   │   │   ├── satellite/
│   │   │   │   │   └── SatelliteConfig.json
│   │   │   │   └── version.json
│   │   │   ├── ecc_data.json
│   │   │   ├── number_identity_config.json
│   │   │   ├── number_match.json
│   │   │   ├── numberlocation.dat
│   │   │   ├── operator_config.json
│   │   │   ├── operator_name.json
│   │   │   └── yellowpage.data
│   │   ├── thermal_config/
│   │   │   └── thermal_service_config.xml
│   │   ├── tzdata_distro/
│   │   │   └── prefabrication
│   │   ├── ueventd.config
│   │   ├── uiextension_picker_config.json
│   │   ├── update/
│   │   │   ├── accessory.xml
│   │   │   ├── cacert.pem
│   │   │   └── dupdate_config.json
│   │   ├── userfilemanager/
│   │   │   └── userfilemanager_mimetypes.json
│   │   ├── vulkan/
│   │   │   └── swapchain/
│   │   │       └── vulkan/
│   │   │           └── implicit_layer.d/
│   │   │               └── VkLayer_swapchain.json
│   │   ├── wallpaperdefault.jpeg
│   │   ├── wallpaperlockdefault.jpeg
│   │   ├── web/
│   │   │   └── web_config.xml
│   │   ├── webview/
│   │   │   └── ohos_nweb/
│   │   │       ├── alias.svg
│   │   │       └── context-menu.svg
│   │   ├── wifi/
│   │   │   ├── hostapd.conf
│   │   │   ├── hostapd_coex.conf
│   │   │   ├── p2p_supplicant.conf
│   │   │   ├── portal_notification.png
│   │   │   ├── softap_channels_policy.xml
│   │   │   ├── wifi_monitor_apps.xml
│   │   │   ├── wifi_network_control_apps.xml
│   │   │   ├── wifi_package_filter.cfg
│   │   │   ├── wifi_variable.cfg
│   │   │   └── wpa_supplicant.conf
│   │   ├── window/
│   │   │   └── resources/
│   │   │       ├── bg_place_holder.png
│   │   │       └── pip_content.abc
│   │   ├── xlogcat_info_config.xml
│   │   ├── xml/
│   │   │   └── i18n_param_config.xml
│   │   ├── xtables.lock
│   │   └── zoneinfo/
│   │       ├── timezone_list.cfg
│   │       └── tzdata
│   ├── fonts/
│   │   ├── HMOSColorEmojiCompat.ttf
│   │   ├── HMOSColorEmojiFlags.ttf
│   │   ├── HMSymbolVF.ttf
│   │   ├── HarmonyOS_Sans.ttf
│   │   ├── HarmonyOS_Sans_Condensed.ttf
│   │   ├── HarmonyOS_Sans_Condensed_Italic.ttf
│   │   ├── HarmonyOS_Sans_Digit.ttf
│   │   ├── HarmonyOS_Sans_Digit_Medium.ttf
│   │   ├── HarmonyOS_Sans_Italic.ttf
│   │   ├── HarmonyOS_Sans_Naskh_Arabic.ttf
│   │   ├── HarmonyOS_Sans_Naskh_Arabic_UI.ttf
│   │   ├── HarmonyOS_Sans_SC.ttf
│   │   ├── HarmonyOS_Sans_TC.ttf
│   │   ├── NotoSansAdlam[wght].ttf
│   │   ├── NotoSansAnatolianHieroglyphs-Regular.ttf
│   │   ├── NotoSansArmenian[wdth,wght].ttf
│   │   ├── NotoSansAvestan-Regular.ttf
│   │   ├── NotoSansBalinese[wght].ttf
│   │   ├── NotoSansBamum[wght].ttf
│   │   ├── NotoSansBassaVah[wght].ttf
│   │   ├── NotoSansBatak-Regular.ttf
│   │   ├── NotoSansBengaliUI-Bold.ttf
│   │   ├── NotoSansBengaliUI-Medium.ttf
│   │   ├── NotoSansBengaliUI-Regular.ttf
│   │   ├── NotoSansBengaliUI-SemiBold.ttf
│   │   ├── NotoSansBengali[wdth,wght].ttf
│   │   ├── NotoSansBhaiksuki-Regular.ttf
│   │   ├── NotoSansBrahmi-Regular.ttf
│   │   ├── NotoSansBuginese-Regular.ttf
│   │   ├── NotoSansBuhid-Regular.ttf
│   │   ├── NotoSansCJK-Regular.ttc
│   │   ├── NotoSansCanadianAboriginal[wght].ttf
│   │   ├── NotoSansCarian-Regular.ttf
│   │   ├── NotoSansChakma-Regular.ttf
│   │   ├── NotoSansCham[wght].ttf
│   │   ├── NotoSansCherokee[wght].ttf
│   │   ├── NotoSansCoptic-Regular.ttf
│   │   ├── NotoSansCuneiform-Regular.ttf
│   │   ├── NotoSansCypriot-Regular.ttf
│   │   ├── NotoSansDeseret-Regular.ttf
│   │   ├── NotoSansDevanagariUI-Bold.ttf
│   │   ├── NotoSansDevanagariUI-Medium.ttf
│   │   ├── NotoSansDevanagariUI-Regular.ttf
│   │   ├── NotoSansDevanagariUI-SemiBold.ttf
│   │   ├── NotoSansDevanagari[wdth,wght].ttf
│   │   ├── NotoSansEgyptianHieroglyphs-Regular.ttf
│   │   ├── NotoSansElbasan-Regular.ttf
│   │   ├── NotoSansEthiopic[wdth,wght].ttf
│   │   ├── NotoSansGeorgian[wdth,wght].ttf
│   │   ├── NotoSansGlagolitic-Regular.ttf
│   │   ├── NotoSansGothic-Regular.ttf
│   │   ├── NotoSansGrantha-Regular.ttf
│   │   ├── NotoSansGujaratiUI-Bold.ttf
│   │   ├── NotoSansGujaratiUI-Regular.ttf
│   │   ├── NotoSansGujarati[wdth,wght].ttf
│   │   ├── NotoSansGunjalaGondi[wght].ttf
│   │   ├── NotoSansGurmukhiUI-Bold.ttf
│   │   ├── NotoSansGurmukhiUI-Medium.ttf
│   │   ├── NotoSansGurmukhiUI-Regular.ttf
│   │   ├── NotoSansGurmukhiUI-SemiBold.ttf
│   │   ├── NotoSansGurmukhi[wdth,wght].ttf
│   │   ├── NotoSansHanifiRohingya[wght].ttf
│   │   ├── NotoSansHanunoo-Regular.ttf
│   │   ├── NotoSansHatran-Regular.ttf
│   │   ├── NotoSansHebrew[wdth,wght].ttf
│   │   ├── NotoSansImperialAramaic-Regular.ttf
│   │   ├── NotoSansInscriptionalPahlavi-Regular.ttf
│   │   ├── NotoSansInscriptionalParthian-Regular.ttf
│   │   ├── NotoSansJavanese[wght].ttf
│   │   ├── NotoSansKaithi-Regular.ttf
│   │   ├── NotoSansKannadaUI-Bold.ttf
│   │   ├── NotoSansKannadaUI-Medium.ttf
│   │   ├── NotoSansKannadaUI-Regular.ttf
│   │   ├── NotoSansKannadaUI-SemiBold.ttf
│   │   ├── NotoSansKannada[wdth,wght].ttf
│   │   ├── NotoSansKayahLi[wght].ttf
│   │   ├── NotoSansKharoshthi-Regular.ttf
│   │   ├── NotoSansKhmer[wdth,wght].ttf
│   │   ├── NotoSansKhojki-Regular.ttf
│   │   ├── NotoSansLao[wdth,wght].ttf
│   │   ├── NotoSansLepcha-Regular.ttf
│   │   ├── NotoSansLimbu-Regular.ttf
│   │   ├── NotoSansLinearA-Regular.ttf
│   │   ├── NotoSansLinearB-Regular.ttf
│   │   ├── NotoSansLisu[wght].ttf
│   │   ├── NotoSansLycian-Regular.ttf
│   │   ├── NotoSansLydian-Regular.ttf
│   │   ├── NotoSansMalayalamUI-Bold.ttf
│   │   ├── NotoSansMalayalamUI-Medium.ttf
│   │   ├── NotoSansMalayalamUI-Regular.ttf
│   │   ├── NotoSansMalayalamUI-SemiBold.ttf
│   │   ├── NotoSansMalayalam[wdth,wght].ttf
│   │   ├── NotoSansMandaic-Regular.ttf
│   │   ├── NotoSansManichaean-Regular.ttf
│   │   ├── NotoSansMarchen-Regular.ttf
│   │   ├── NotoSansMasaramGondi-Regular.ttf
│   │   ├── NotoSansMath-Regular.ttf
│   │   ├── NotoSansMedefaidrin[wght].ttf
│   │   ├── NotoSansMeeteiMayek[wght].ttf
│   │   ├── NotoSansMeroitic-Regular.ttf
│   │   ├── NotoSansMiao-Regular.ttf
│   │   ├── NotoSansModi-Regular.ttf
│   │   ├── NotoSansMongolian-Regular.ttf
│   │   ├── NotoSansMono[wdth,wght].ttf
│   │   ├── NotoSansMro-Regular.ttf
│   │   ├── NotoSansMultani-Regular.ttf
│   │   ├── NotoSansMyanmar[wdth,wght].ttf
│   │   ├── NotoSansNKo-Regular.ttf
│   │   ├── NotoSansNabataean-Regular.ttf
│   │   ├── NotoSansNewTaiLue[wght].ttf
│   │   ├── NotoSansNewa-Regular.ttf
│   │   ├── NotoSansOgham-Regular.ttf
│   │   ├── NotoSansOlChiki[wght].ttf
│   │   ├── NotoSansOldItalic-Regular.ttf
│   │   ├── NotoSansOldNorthArabian-Regular.ttf
│   │   ├── NotoSansOldPermic-Regular.ttf
│   │   ├── NotoSansOldPersian-Regular.ttf
│   │   ├── NotoSansOldSouthArabian-Regular.ttf
│   │   ├── NotoSansOldTurkic-Regular.ttf
│   │   ├── NotoSansOriya[wdth,wght].ttf
│   │   ├── NotoSansOsage-Regular.ttf
│   │   ├── NotoSansOsmanya-Regular.ttf
│   │   ├── NotoSansPahawhHmong-Regular.ttf
│   │   ├── NotoSansPalmyrene-Regular.ttf
│   │   ├── NotoSansPauCinHau-Regular.ttf
│   │   ├── NotoSansPhags-Pa-Regular.ttf
│   │   ├── NotoSansPhoenician-Regular.ttf
│   │   ├── NotoSansRejang-Regular.ttf
│   │   ├── NotoSansRunic-Regular.ttf
│   │   ├── NotoSansSamaritan-Regular.ttf
│   │   ├── NotoSansSaurashtra-Regular.ttf
│   │   ├── NotoSansSharada-Regular.ttf
│   │   ├── NotoSansShavian-Regular.ttf
│   │   ├── NotoSansSinhalaUI-Bold.ttf
│   │   ├── NotoSansSinhalaUI-Medium.ttf
│   │   ├── NotoSansSinhalaUI-Regular.ttf
│   │   ├── NotoSansSinhalaUI-SemiBold.ttf
│   │   ├── NotoSansSinhala[wdth,wght].ttf
│   │   ├── NotoSansSoraSompeng[wght].ttf
│   │   ├── NotoSansSoyombo-Regular.ttf
│   │   ├── NotoSansSundanese[wght].ttf
│   │   ├── NotoSansSylotiNagri-Regular.ttf
│   │   ├── NotoSansSymbols-Regular.ttf
│   │   ├── NotoSansSymbols2-Regular.ttf
│   │   ├── NotoSansSyriacEastern[wght].ttf
│   │   ├── NotoSansSyriacWestern[wght].ttf
│   │   ├── NotoSansTagalog-Regular.ttf
│   │   ├── NotoSansTagbanwa-Regular.ttf
│   │   ├── NotoSansTaiLe-Regular.ttf
│   │   ├── NotoSansTaiTham[wght].ttf
│   │   ├── NotoSansTaiViet-Regular.ttf
│   │   ├── NotoSansTakri-Regular.ttf
│   │   ├── NotoSansTamilUI-Bold.ttf
│   │   ├── NotoSansTamilUI-Medium.ttf
│   │   ├── NotoSansTamilUI-Regular.ttf
│   │   ├── NotoSansTamilUI-SemiBold.ttf
│   │   ├── NotoSansTamil[wdth,wght].ttf
│   │   ├── NotoSansTeluguUI-Bold.ttf
│   │   ├── NotoSansTeluguUI-Medium.ttf
│   │   ├── NotoSansTeluguUI-Regular.ttf
│   │   ├── NotoSansTeluguUI-SemiBold.ttf
│   │   ├── NotoSansTelugu[wdth,wght].ttf
│   │   ├── NotoSansThaana[wght].ttf
│   │   ├── NotoSansThai[wdth,wght].ttf
│   │   ├── NotoSansTifinagh-Regular.ttf
│   │   ├── NotoSansUgaritic-Regular.ttf
│   │   ├── NotoSansVai-Regular.ttf
│   │   ├── NotoSansWancho-Regular.ttf
│   │   ├── NotoSansWarangCiti-Regular.ttf
│   │   ├── NotoSansYi-Regular.ttf
│   │   ├── NotoSans[wdth,wght].ttf
│   │   ├── NotoSerifAhom-Regular.ttf
│   │   ├── NotoSerifArmenian[wdth,wght].ttf
│   │   ├── NotoSerifBengali[wdth,wght].ttf
│   │   ├── NotoSerifCJK-Regular.ttc
│   │   ├── NotoSerifDevanagari[wdth,wght].ttf
│   │   ├── NotoSerifDogra-Regular.ttf
│   │   ├── NotoSerifEthiopic[wdth,wght].ttf
│   │   ├── NotoSerifGeorgian[wdth,wght].ttf
│   │   ├── NotoSerifGujarati[wght].ttf
│   │   ├── NotoSerifGurmukhi[wght].ttf
│   │   ├── NotoSerifHebrew[wdth,wght].ttf
│   │   ├── NotoSerifKannada[wght].ttf
│   │   ├── NotoSerifKhmer[wdth,wght].ttf
│   │   ├── NotoSerifLao[wdth,wght].ttf
│   │   ├── NotoSerifMalayalam[wght].ttf
│   │   ├── NotoSerifMyanmar[wdth,wght].ttf
│   │   ├── NotoSerifSinhala[wdth,wght].ttf
│   │   ├── NotoSerifTamil[wdth,wght].ttf
│   │   ├── NotoSerifTelugu[wght].ttf
│   │   ├── NotoSerifThai[wdth,wght].ttf
│   │   ├── NotoSerifTibetan[wght].ttf
│   │   ├── NotoSerifYezidi[wght].ttf
│   │   ├── NotoSerif[wdth,wght].ttf
│   │   ├── Roboto-Regular.ttf
│   │   ├── hm_symbol_config.json
│   │   └── hm_symbol_config_next.json
│   ├── lib/
│   │   ├── ld-musl-x86_64.so.1
│   │   ├── libhyper_graphic_manager_ext.z.so
│   │   ├── libsdf.z.so
│   │   └── module/
│   │       └── hms/
│   │           └── graphic/
│   │               ├── libastcCustomizedEncode.z.so
│   │               ├── libtextureSuperCompress.z.so
│   │               └── libtextureSuperDecompress.z.so
│   ├── lib64/
│   │   ├── appdetailability/
│   │   │   └── libapp_detail_ability.z.so
│   │   ├── appspawn/
│   │   │   ├── appspawn/
│   │   │   │   └── libappspawn_ace.z.so
│   │   │   ├── common/
│   │   │   │   ├── libappspawn_common.z.so
│   │   │   │   ├── libappspawn_sandbox.z.so
│   │   │   │   └── libevent_reporter.z.so
│   │   │   ├── libappspawn_asan.z.so
│   │   │   ├── nativespawn/
│   │   │   │   └── libnativespawn.z.so
│   │   │   └── nwebspawn/
│   │   │       └── libappspawn_nweb.z.so
│   │   ├── chipset-pub-sdk/
│   │   │   ├── libaccesstoken_common_cxx.z.so
│   │   │   ├── libaccesstoken_communication_adapter_cxx.z.so
│   │   │   ├── libaccesstoken_sdk.z.so
│   │   │   ├── libasync_stack.z.so
│   │   │   ├── libbacktrace_local.so
│   │   │   ├── libbeget_proxy.z.so
│   │   │   ├── libbegetutil.z.so
│   │   │   ├── libcert_manager_sdk.z.so
│   │   │   ├── libcjson.z.so
│   │   │   ├── libclang_rt.ubsan_minimal.so
│   │   │   ├── libclang_rt.ubsan_standalone.so
│   │   │   ├── libconfigpolicy_util.z.so
│   │   │   ├── libcrash_exception.z.so
│   │   │   ├── libcrypto_openssl.z.so
│   │   │   ├── libcurl_shared.z.so
│   │   │   ├── libdfx_dumpcatcher.z.so
│   │   │   ├── libdfx_procinfo.z.so
│   │   │   ├── libdisplay_buffer_hdi_impl.z.so
│   │   │   ├── libdisplay_buffer_hdi_impl_v1_1.z.so
│   │   │   ├── libdisplay_buffer_hdi_impl_v1_2.z.so
│   │   │   ├── libdisplay_buffer_proxy_1.0.z.so
│   │   │   ├── libdisplay_buffer_proxy_1.1.z.so
│   │   │   ├── libdisplay_buffer_proxy_1.2.z.so
│   │   │   ├── libdynamic_cache.z.so
│   │   │   ├── libeventhandler.z.so
│   │   │   ├── libextractortool.z.so
│   │   │   ├── libfaultlogger.z.so
│   │   │   ├── libfaultloggerd.z.so
│   │   │   ├── libhdf_ipc_adapter.z.so
│   │   │   ├── libhdi.z.so
│   │   │   ├── libhicollie.z.so
│   │   │   ├── libhilog.so
│   │   │   ├── libhisysevent.z.so
│   │   │   ├── libhitrace_meter.so
│   │   │   ├── libhitracechain.so
│   │   │   ├── libipc_common.z.so
│   │   │   ├── libipc_single.z.so
│   │   │   ├── libjsoncpp.z.so
│   │   │   ├── liblzma.z.so
│   │   │   ├── libmetadata.z.so
│   │   │   ├── libnative_buffer.so
│   │   │   ├── libnative_window.so
│   │   │   ├── libopencv_core.z.so
│   │   │   ├── libopencv_imgcodecs.z.so
│   │   │   ├── libopencv_imgproc.z.so
│   │   │   ├── libpcre2.z.so
│   │   │   ├── libpng.z.so
│   │   │   ├── libprotobuf_lite.z.so
│   │   │   ├── libpub_utils.z.so
│   │   │   ├── libpulsecommon.z.so
│   │   │   ├── libpulsecore.z.so
│   │   │   ├── libsamgr.dylib.so
│   │   │   ├── libsamgr_proxy.z.so
│   │   │   ├── libsec_shared.z.so
│   │   │   ├── libselinux.z.so
│   │   │   ├── libshared_libz.z.so
│   │   │   ├── libsocperf_client.z.so
│   │   │   ├── libspeexresampler.z.so
│   │   │   ├── libssl_openssl.z.so
│   │   │   ├── libstring_utils.z.so
│   │   │   ├── libsurface.z.so
│   │   │   ├── libsync_fence.z.so
│   │   │   ├── libsystem_ability_fwk.dylib.so
│   │   │   ├── libthread_sampler.z.so
│   │   │   ├── libucollection_client.z.so
│   │   │   ├── libunwind.z.so
│   │   │   ├── libunwinder.z.so
│   │   │   ├── libutils.z.so
│   │   │   ├── libxml2.z.so
│   │   │   ├── libyuv.z.so
│   │   │   └── libz.so
│   │   ├── chipset-sdk/
│   │   │   ├── libbrotli_shared.z.so
│   │   │   ├── libbtcommon.z.so
│   │   │   ├── libbuffer_handle_sequenceable_1.0.z.so
│   │   │   ├── libbuffer_producer_sequenceable_1.0.z.so
│   │   │   ├── libdistributed_camera_utils.z.so
│   │   │   ├── libdmabufheap.z.so
│   │   │   ├── libdrm.so
│   │   │   ├── libexif.z.so
│   │   │   ├── libfaceauth_framework.z.so
│   │   │   ├── libffrt_profiler.z.so
│   │   │   ├── libha_client_lite.z.so
│   │   │   ├── libhdf_utils.z.so
│   │   │   ├── libhdifd_parcelable.z.so
│   │   │   ├── libmap_data_sequenceable_1.0.z.so
│   │   │   ├── libnl_share.z.so
│   │   │   ├── libohosffmpeg.z.so
│   │   │   ├── libservice_checker.z.so
│   │   │   └── libstorage_manager_acl.z.so
│   │   ├── drag_drop_ext/
│   │   │   └── libdrag_drop_ext.z.so
│   │   ├── edm_plugin/
│   │   │   └── libedm_plugin_ext.z.so
│   │   ├── expanded_menu/
│   │   │   └── libexpanded_menu.z.so
│   │   ├── extensionability/
│   │   │   ├── libaccessibility_extension_module.z.so
│   │   │   ├── libaccount_logout_extension_module.z.so
│   │   │   ├── libaction_extension_module.z.so
│   │   │   ├── libadsservice_extension_module.z.so
│   │   │   ├── libauthorization_extension_module.z.so
│   │   │   ├── libauto_fill_extension_module.z.so
│   │   │   ├── libbackup_extension_ability_native.z.so
│   │   │   ├── libcaller_info_query_extension_module.z.so
│   │   │   ├── libdatashare_ext_ability_module.z.so
│   │   │   ├── libembedded_ui_extension_module.z.so
│   │   │   ├── libenterprise_admin_extension_module.z.so
│   │   │   ├── libfence_extension_ability.z.so
│   │   │   ├── libfile_access_extension_ability_module.z.so
│   │   │   ├── libform_extension_module.z.so
│   │   │   ├── libinputmethod_extension_module.z.so
│   │   │   ├── libliveview_lockscreen_extension.z.so
│   │   │   ├── libphoto_editor_extension_module.z.so
│   │   │   ├── libprint_extension_module.z.so
│   │   │   ├── libpush_extension.z.so
│   │   │   ├── libremote_location_extension.z.so
│   │   │   ├── libremote_notification_extension.z.so
│   │   │   ├── libservice_extension_module.z.so
│   │   │   ├── libshare_extension_module.z.so
│   │   │   ├── libstatic_subscriber_extension_module.z.so
│   │   │   ├── libui_extension_module.z.so
│   │   │   ├── libuser_auth_extension_module.z.so
│   │   │   ├── libvoip_extension.z.so
│   │   │   ├── libvpn_extension_module.z.so
│   │   │   ├── libwallpaper_extension_module.z.so
│   │   │   ├── libwindow_extension_module.z.so
│   │   │   └── libworkschedextension.z.so
│   │   ├── init/
│   │   │   ├── autorun/
│   │   │   │   ├── libfile_migrate_init.z.so
│   │   │   │   ├── libhmos_cust_init.z.so
│   │   │   │   ├── libinit_bootDetector.z.so
│   │   │   │   ├── libinit_dec.z.so
│   │   │   │   ├── libinit_manufacture.z.so
│   │   │   │   ├── libinit_quickfix.z.so
│   │   │   │   ├── libinit_security.z.so
│   │   │   │   ├── libinit_usbconfig.z.so
│   │   │   │   ├── libinithp.z.so
│   │   │   │   ├── libkdump_resize.z.so
│   │   │   │   ├── libkickdog.z.so
│   │   │   │   ├── libprocess_exit.z.so
│   │   │   │   ├── libprop_migrate.z.so
│   │   │   │   └── libtee_chmod.z.so
│   │   │   ├── libbootchart.z.so
│   │   │   ├── libeventmodule.z.so
│   │   │   ├── libinit_context.z.so
│   │   │   ├── libinit_eng.z.so
│   │   │   ├── libinittrace.z.so
│   │   │   ├── libselinuxadp.z.so
│   │   │   ├── libudidmodule.z.so
│   │   │   └── reboot/
│   │   │       ├── libhmos_update_reboot.z.so
│   │   │       └── librebootmodule.z.so
│   │   ├── lib2d_graphics.z.so
│   │   ├── libEGL.so
│   │   ├── libEGL_impl.so
│   │   ├── libFillpSo.z.so
│   │   ├── libGLESv1_impl.so
│   │   ├── libGLESv2_impl.so
│   │   ├── libGLESv3.so
│   │   ├── libGLESv3_impl.so
│   │   ├── libOpenSLES.so
│   │   ├── libaaid_client.z.so
│   │   ├── libabilitywantadapter.z.so
│   │   ├── libabsl_base.z.so
│   │   ├── libabsl_spinlock_wait.z.so
│   │   ├── libabxml_converter.z.so
│   │   ├── libaccessibleability.z.so
│   │   ├── libaccessibleabilityms.z.so
│   │   ├── libaccesstoken_ability_manager_adapter.z.so
│   │   ├── libaccesstoken_config_policy.z.so
│   │   ├── libaccesstoken_manager_service.z.so
│   │   ├── libaccesstoken_screenlock_manager.z.so
│   │   ├── libaccount_logout_extension.z.so
│   │   ├── libaccountmgr.z.so
│   │   ├── libace_engine_pa_ark.z.so
│   │   ├── libace_ndk.z.so
│   │   ├── libace_uicast_proxy.z.so
│   │   ├── libaction_extension.z.so
│   │   ├── libadft.z.so
│   │   ├── libadsservice_extension.z.so
│   │   ├── libans.z.so
│   │   ├── libans_distributed.z.so
│   │   ├── libans_ext.z.so
│   │   ├── libans_innerkits.z.so
│   │   ├── libapp_account_service_core.z.so
│   │   ├── libapp_domain_verify_agent_client.z.so
│   │   ├── libapp_domain_verify_agent_service.z.so
│   │   ├── libapp_domain_verify_agent_verifier.z.so
│   │   ├── libapp_domain_verify_app_details_rdb.z.so
│   │   ├── libapp_domain_verify_common.z.so
│   │   ├── libapp_domain_verify_extension.z.so
│   │   ├── libapp_domain_verify_extension_framework.z.so
│   │   ├── libapp_domain_verify_frameworks_common.z.so
│   │   ├── libapp_domain_verify_mgr_client.z.so
│   │   ├── libapp_domain_verify_mgr_service.z.so
│   │   ├── libapp_fwk_update_service.z.so
│   │   ├── libapp_preload_plugin.z.so
│   │   ├── libapp_type_mgr_common.z.so
│   │   ├── libapp_type_mgr_service.z.so
│   │   ├── libapp_util.z.so
│   │   ├── libappgallery_sa_service.z.so
│   │   ├── libappinfomanager_client.z.so
│   │   ├── libapplication_context_manager.z.so
│   │   ├── libappms.z.so
│   │   ├── libappspawn_client.z.so
│   │   ├── libappspawn_helper.z.so
│   │   ├── libappspawn_module_engine.so
│   │   ├── libappspawn_stub_empty.so
│   │   ├── libaps_client.z.so
│   │   ├── libapsmgr.z.so
│   │   ├── libark_connect_inspector.z.so
│   │   ├── libark_inspector.z.so
│   │   ├── libark_tooling.so
│   │   ├── libarkdata_db_core.z.so
│   │   ├── libarkverifier.so
│   │   ├── libarkweb_core_loader_glue.z.so
│   │   ├── libarkweb_glue_base.z.so
│   │   ├── libasset_sdk.dylib.so
│   │   ├── libasset_sdk.z.so
│   │   ├── libasset_sdk_ffi.z.so
│   │   ├── libasset_service.dylib.so
│   │   ├── libassociated_start_plugin.z.so
│   │   ├── libattributionmanager_client.z.so
│   │   ├── libattributiontestmanager_client.z.so
│   │   ├── libaudio_bluetooth_client.z.so
│   │   ├── libaudio_capturer_file_source.z.so
│   │   ├── libaudio_capturer_source.z.so
│   │   ├── libaudio_device_manager.z.so
│   │   ├── libaudio_effect.z.so
│   │   ├── libaudio_inner_call.z.so
│   │   ├── libaudio_policy_service.z.so
│   │   ├── libaudio_process_service.z.so
│   │   ├── libaudio_proxy_4.0.z.so
│   │   ├── libaudio_qosmanager.z.so
│   │   ├── libaudio_renderer_file_sink.z.so
│   │   ├── libaudio_renderer_sink.z.so
│   │   ├── libaudio_schedule.z.so
│   │   ├── libaudio_service.z.so
│   │   ├── libauthorization_extension.z.so
│   │   ├── libauto_fill_extension.z.so
│   │   ├── libav_codec_ext_base.z.so
│   │   ├── libav_codec_hevc_parser.z.so
│   │   ├── libav_codec_media_engine_filters.z.so
│   │   ├── libav_codec_media_engine_modules.z.so
│   │   ├── libav_codec_reference_parser.z.so
│   │   ├── libav_codec_service.z.so
│   │   ├── libav_codec_service_dfx.z.so
│   │   ├── libav_codec_service_utils.z.so
│   │   ├── libav_codec_vvc_parser.z.so
│   │   ├── libavatarpicker.z.so
│   │   ├── libavc_encoder.z.so
│   │   ├── libavplayer.so
│   │   ├── libavs3_codec.z.so
│   │   ├── libavsession_cast_item.z.so
│   │   ├── libavsession_dynamic_insight.z.so
│   │   ├── libavsession_item.z.so
│   │   ├── libavsession_router.z.so
│   │   ├── libavsession_service.z.so
│   │   ├── libbackend.z.so
│   │   ├── libbackup_sa.z.so
│   │   ├── libbattery_proxy_2.0.z.so
│   │   ├── libbatteryservice.z.so
│   │   ├── libbatterysrv_stub.z.so
│   │   ├── libbatterystats_client.z.so
│   │   ├── libbatterystats_service.z.so
│   │   ├── libbatterystats_stub.z.so
│   │   ├── libbdfr.z.so
│   │   ├── libbgtaskmgr_service.z.so
│   │   ├── libbluetooth_renderer_sink.z.so
│   │   ├── libbms.z.so
│   │   ├── libbootdetector.z.so
│   │   ├── libbpf.so
│   │   ├── libbridgingmanager_client.z.so
│   │   ├── libbundle_ndk.z.so
│   │   ├── libbundlemgr_extension.z.so
│   │   ├── libc++.so
│   │   ├── libc.so
│   │   ├── libcaller_info_query_extension.z.so
│   │   ├── libcamera_dynamic_medialibrary.z.so
│   │   ├── libcamera_proxy_1.0.z.so
│   │   ├── libcamera_proxy_1.1.z.so
│   │   ├── libcamera_proxy_1.2.z.so
│   │   ├── libcamera_proxy_1.3.z.so
│   │   ├── libcamera_service.z.so
│   │   ├── libcapturer_source_adapter.z.so
│   │   ├── libcardistributedengine_client.z.so
│   │   ├── libcast_engine_client.z.so
│   │   ├── libcast_engine_service.z.so
│   │   ├── libcccs_client.z.so
│   │   ├── libcccs_gns.z.so
│   │   ├── libcccs_grs.z.so
│   │   ├── libcccs_service.z.so
│   │   ├── libcert_manager_service.z.so
│   │   ├── libcesfwk_services.z.so
│   │   ├── libcfwk_allconnect_client.z.so
│   │   ├── libcfwk_allconnect_service.z.so
│   │   ├── libcfwk_camera_client.z.so
│   │   ├── libcfwk_camera_service.z.so
│   │   ├── libcfwk_collaboration_ability_capi.z.so
│   │   ├── libcfwk_collaboration_ability_service.z.so
│   │   ├── libcfwk_collaboration_center_service.z.so
│   │   ├── libcfwk_devicepicker_client.z.so
│   │   ├── libcfwk_service_connection_client.z.so
│   │   ├── libcgroup_sched.z.so
│   │   ├── libcgroup_sched_ext.z.so
│   │   ├── libchip_proxy_1.0.z.so
│   │   ├── libchipset_vsync.z.so
│   │   ├── libcj_ability_ffi.z.so
│   │   ├── libclang_rt.asan.so
│   │   ├── libcli.z.so
│   │   ├── libcloud_adapter.z.so
│   │   ├── libcloud_auth_client.z.so
│   │   ├── libcloud_auth_service.z.so
│   │   ├── libcloud_backup_client.z.so
│   │   ├── libcloud_backup_sa.z.so
│   │   ├── libcloud_daemon_kit_inner.z.so
│   │   ├── libclouddisk_database.z.so
│   │   ├── libcloudfile_ext.z.so
│   │   ├── libcloudfile_ext_core.z.so
│   │   ├── libcloudfiledaemon.z.so
│   │   ├── libcloudsync_kit_inner.z.so
│   │   ├── libcloudsync_sa.z.so
│   │   ├── libcodec_hdi_omx_client.z.so
│   │   ├── libcodec_proxy_3.0.z.so
│   │   ├── libcodesignature_analysis.z.so
│   │   ├── libcollabfwk_devicedetect_client.z.so
│   │   ├── libcollabfwk_devicedetect_service.z.so
│   │   ├── libcollabfwk_info_collect.z.so
│   │   ├── libcollaboration_rcp_native.z.so
│   │   ├── libcollaborationfwk_client.z.so
│   │   ├── libcollaborationfwk_service.z.so
│   │   ├── libcollaborationfwk_service_base.z.so
│   │   ├── libcolor_manager.z.so
│   │   ├── libcolor_picker.z.so
│   │   ├── libcolor_space_object_convertor.z.so
│   │   ├── libcommunicationchr.z.so
│   │   ├── libcompiler_service.z.so
│   │   ├── libcomponent_sched_common.z.so
│   │   ├── libcomponent_sched_frameworks.z.so
│   │   ├── libcomponent_sched_server.z.so
│   │   ├── libcomposer.z.so
│   │   ├── libconcurrent_task_client.z.so
│   │   ├── libconcurrentsvc.z.so
│   │   ├── libconfig_policy_ext_utils.z.so
│   │   ├── libconn_adapter.z.so
│   │   ├── libconnection_if.z.so
│   │   ├── libcontactsdataability.z.so
│   │   ├── libcoverage_signal_handler.z.so
│   │   ├── libcrashvalidator.z.so
│   │   ├── libcreate_pixelmap_surface.z.so
│   │   ├── libcups.z.so
│   │   ├── libcupsfilters.z.so
│   │   ├── libcupsimage.z.so
│   │   ├── libcupsmime.z.so
│   │   ├── libcupsppdc.z.so
│   │   ├── libcust_stop_plugin.z.so
│   │   ├── libdata_share_service.z.so
│   │   ├── libdata_transit_mgr.z.so
│   │   ├── libdatabase_utils.z.so
│   │   ├── libdataobsms.z.so
│   │   ├── libdatashare_jscommon.z.so
│   │   ├── libdaudio_proxy_1.0.z.so
│   │   ├── libdaudioext_proxy_1.0.z.so
│   │   ├── libdaudioext_proxy_2.0.z.so
│   │   ├── libdbinder.z.so
│   │   ├── libdbms.z.so
│   │   ├── libdbmsi.z.so
│   │   ├── libdcall_proxy_1.0.z.so
│   │   ├── libdeferred_processing_service.z.so
│   │   ├── libdevattest_core.z.so
│   │   ├── libdevattest_service.z.so
│   │   ├── libdevice_activate_service.z.so
│   │   ├── libdevice_attest_oem_adapter.z.so
│   │   ├── libdevice_cert_mgr_sdk.z.so
│   │   ├── libdevice_cert_mgr_service.z.so
│   │   ├── libdevice_profile_radar.z.so
│   │   ├── libdevice_standby_plugin.z.so
│   │   ├── libdeviceagent.z.so
│   │   ├── libdeviceinfoservice.z.so
│   │   ├── libdevicemanageradapter.z.so
│   │   ├── libdevicemanagerdependency.z.so
│   │   ├── libdevicemanagerext_pin_auth.z.so
│   │   ├── libdevicemanagerradar.z.so
│   │   ├── libdevicemanagerservice.z.so
│   │   ├── libdevicemanagerserviceimpl.z.so
│   │   ├── libdevicemanagerutils.z.so
│   │   ├── libdeviceprofileadapter.z.so
│   │   ├── libdeviceprofileradar.z.so
│   │   ├── libdevicestatus_algo.z.so
│   │   ├── libdevicestatus_mock.z.so
│   │   ├── libdevicestatus_service.z.so
│   │   ├── libdgles.z.so
│   │   ├── libdhfwk_sdk.z.so
│   │   ├── libdiff_patch_shared.z.so
│   │   ├── libdinput_collector.z.so
│   │   ├── libdinput_dfx_utils.z.so
│   │   ├── libdinput_handler.z.so
│   │   ├── libdinput_inject.z.so
│   │   ├── libdinput_sdk.z.so
│   │   ├── libdinput_sink.z.so
│   │   ├── libdinput_sink_handler.z.so
│   │   ├── libdinput_sink_state.z.so
│   │   ├── libdinput_sink_trans.z.so
│   │   ├── libdinput_source.z.so
│   │   ├── libdinput_source_handler.z.so
│   │   ├── libdinput_source_trans.z.so
│   │   ├── libdinput_trans_base.z.so
│   │   ├── libdinput_utils.z.so
│   │   ├── libdisplay_commontype_proxy_1.0.z.so
│   │   ├── libdisplay_commontype_proxy_1.1.z.so
│   │   ├── libdisplay_commontype_proxy_2.0.z.so
│   │   ├── libdisplay_composer_hdi_impl.z.so
│   │   ├── libdisplay_composer_hdi_impl_1.1.z.so
│   │   ├── libdisplay_composer_hdi_impl_1.2.z.so
│   │   ├── libdisplay_composer_proxy_1.0.z.so
│   │   ├── libdisplay_composer_proxy_1.1.z.so
│   │   ├── libdisplay_composer_proxy_1.2.z.so
│   │   ├── libdisplaymgr_stub.z.so
│   │   ├── libdisplaymgrservice.z.so
│   │   ├── libdistributed_ability_manager_svr.z.so
│   │   ├── libdistributed_audio_decode_transport.z.so
│   │   ├── libdistributed_audio_encode_transport.z.so
│   │   ├── libdistributed_audio_handler.z.so
│   │   ├── libdistributed_audio_sink.z.so
│   │   ├── libdistributed_audio_sink_sdk.z.so
│   │   ├── libdistributed_audio_source.z.so
│   │   ├── libdistributed_audio_source_sdk.z.so
│   │   ├── libdistributed_audio_utils.z.so
│   │   ├── libdistributed_av_receiver.z.so
│   │   ├── libdistributed_av_sender.z.so
│   │   ├── libdistributed_call_client.z.so
│   │   ├── libdistributed_call_decode_transport.z.so
│   │   ├── libdistributed_call_encode_transport.z.so
│   │   ├── libdistributed_call_handler.z.so
│   │   ├── libdistributed_call_sink.z.so
│   │   ├── libdistributed_call_sink_sdk.z.so
│   │   ├── libdistributed_call_source.z.so
│   │   ├── libdistributed_call_source_sdk.z.so
│   │   ├── libdistributed_call_utils.z.so
│   │   ├── libdistributed_camera_channel.z.so
│   │   ├── libdistributed_camera_client.z.so
│   │   ├── libdistributed_camera_data_process.z.so
│   │   ├── libdistributed_camera_handler.z.so
│   │   ├── libdistributed_camera_provider_proxy_1.1.z.so
│   │   ├── libdistributed_camera_sink.z.so
│   │   ├── libdistributed_camera_sink_sdk.z.so
│   │   ├── libdistributed_camera_source.z.so
│   │   ├── libdistributed_camera_source_sdk.z.so
│   │   ├── libdistributed_device_profile.z.so
│   │   ├── libdistributed_device_profile_client.z.so
│   │   ├── libdistributed_device_profile_common.z.so
│   │   ├── libdistributed_device_profile_sdk.z.so
│   │   ├── libdistributed_device_profile_svr.z.so
│   │   ├── libdistributed_file_daemon_kit_inner.z.so
│   │   ├── libdistributed_network_if.z.so
│   │   ├── libdistributed_network_service.z.so
│   │   ├── libdistributed_screen_client.z.so
│   │   ├── libdistributed_screen_handler.z.so
│   │   ├── libdistributed_screen_sink.z.so
│   │   ├── libdistributed_screen_sink_sdk.z.so
│   │   ├── libdistributed_screen_sinktrans.z.so
│   │   ├── libdistributed_screen_source.z.so
│   │   ├── libdistributed_screen_source_sdk.z.so
│   │   ├── libdistributed_screen_sourcetrans.z.so
│   │   ├── libdistributed_screen_utils.z.so
│   │   ├── libdistributeddata_adapter.z.so
│   │   ├── libdistributeddataservice.z.so
│   │   ├── libdistributeddatasvc.z.so
│   │   ├── libdistributeddatasvcfwk.z.so
│   │   ├── libdistributedfiledaemon.z.so
│   │   ├── libdistributedfiledentry.z.so
│   │   ├── libdistributedhardwarefwksvr.z.so
│   │   ├── libdistributedhardwareutils.z.so
│   │   ├── libdlp_credential_conn_server.z.so
│   │   ├── libdlp_credential_sdk.z.so
│   │   ├── libdlp_credential_service_sa.z.so
│   │   ├── libdlp_permission_sdk.z.so
│   │   ├── libdlp_permission_service.z.so
│   │   ├── libdlpparse.z.so
│   │   ├── libdm.z.so
│   │   ├── libdm_cast_meta_node.z.so
│   │   ├── libdmdevicecache.z.so
│   │   ├── libdms.z.so
│   │   ├── libdmsdp_adapter_sdk.z.so
│   │   ├── libdmsdp_adapter_sink.z.so
│   │   ├── libdmsdp_adapter_sink_sdk.z.so
│   │   ├── libdmsdp_adapter_source.z.so
│   │   ├── libdmsdp_adapter_utils.z.so
│   │   ├── libdmsdpaudiodecoder.z.so
│   │   ├── libdmsdpaudioencoder.z.so
│   │   ├── libdmsdpdvaudio.z.so
│   │   ├── libdmsdpdvavsinkwrapper.z.so
│   │   ├── libdmsdpdvavsourcewrapper.z.so
│   │   ├── libdmsdpdvdevice.z.so
│   │   ├── libdmsdpdvinterface.z.so
│   │   ├── libdmsdpmodules.z.so
│   │   ├── libdmsdpplatform.z.so
│   │   ├── libdns_event.z.so
│   │   ├── libdownload_server.dylib.so
│   │   ├── libdrivekit.z.so
│   │   ├── libdrivekit_lite.z.so
│   │   ├── libdrm_proxy_1.0.z.so
│   │   ├── libdrm_service.z.so
│   │   ├── libdslm_sdk.z.so
│   │   ├── libdslm_service.z.so
│   │   ├── libdvsync.z.so
│   │   ├── libedc_common.z.so
│   │   ├── libedcservices.z.so
│   │   ├── libedm_ext_commom.z.so
│   │   ├── libedm_external_adapters.z.so
│   │   ├── libedmservice.z.so
│   │   ├── libeffect_proxy_1.0.z.so
│   │   ├── libeffectchain.z.so
│   │   ├── libefficiency_config_reader.z.so
│   │   ├── libegl_effect.z.so
│   │   ├── libel5_filekey_manager_sdk.z.so
│   │   ├── libel5_filekey_manager_service.z.so
│   │   ├── libelfio.z.so
│   │   ├── libembedded_ui_extension.z.so
│   │   ├── libenterprise_admin_extension.z.so
│   │   ├── liberms.z.so
│   │   ├── libethernet_manager.z.so
│   │   ├── libevdev.z.so
│   │   ├── libeventhandler_native.z.so
│   │   ├── libeventloggerso.z.so
│   │   ├── libexec_common_plugin.z.so
│   │   ├── libexfat.z.so
│   │   ├── libext2_blkid.z.so
│   │   ├── libext2_com_err.z.so
│   │   ├── libext2_e2p.z.so
│   │   ├── libext2_misc.z.so
│   │   ├── libext2_quota.z.so
│   │   ├── libext2fs.z.so
│   │   ├── libf2fs.z.so
│   │   ├── libface_auth_proxy_2.0.z.so
│   │   ├── libfaceauthservice.z.so
│   │   ├── libfaceauthservice_ex.z.so
│   │   ├── libfactory_proxy_1.0.z.so
│   │   ├── libfast_audio_capturer_source.z.so
│   │   ├── libfast_audio_renderer_sink.z.so
│   │   ├── libfcodec.z.so
│   │   ├── libfdleak_tracker.so
│   │   ├── libfec.z.so
│   │   ├── libffi.z.so
│   │   ├── libfile_access_service.z.so
│   │   ├── libfile_migrate.z.so
│   │   ├── libfileshare_native.z.so
│   │   ├── libfileuri_native.z.so
│   │   ├── libfingerprint_auth_proxy_2.0.z.so
│   │   ├── libflowbuffer.so
│   │   ├── libfms.z.so
│   │   ├── libform_extension.z.so
│   │   ├── libformrender.z.so
│   │   ├── libformrender_service.z.so
│   │   ├── libframe_analyzer.z.so
│   │   ├── libframe_aware_plugin.z.so
│   │   ├── libframe_msg_intf.z.so
│   │   ├── libfsverity_utils.z.so
│   │   ├── libg_mem_dfx.z.so
│   │   ├── libgameservice_client.z.so
│   │   ├── libgameservice_gpucounter_plugin.z.so
│   │   ├── libgameservice_scene_plugin.z.so
│   │   ├── libgameservice_server.z.so
│   │   ├── libgaussdb_rd.z.so
│   │   ├── libgeofence_permission.z.so
│   │   ├── libgeofence_service.z.so
│   │   ├── libglib.z.so
│   │   ├── libglibpcre.z.so
│   │   ├── libgmodule.z.so
│   │   ├── libgobject.z.so
│   │   ├── libgraphic_memory.z.so
│   │   ├── libgraphic_utils.z.so
│   │   ├── libgraphics_effect.z.so
│   │   ├── libha_ace_engine.z.so
│   │   ├── libha_app_event.z.so
│   │   ├── libha_client.z.so
│   │   ├── libha_client_core.z.so
│   │   ├── libha_service.z.so
│   │   ├── libhap_restorecon.z.so
│   │   ├── libhapverify.z.so
│   │   ├── libhcodec.z.so
│   │   ├── libhdr_capability_utils.z.so
│   │   ├── libhevc_decoder.z.so
│   │   ├── libhiappevent_ndk.z.so
│   │   ├── libhichainsdk.z.so
│   │   ├── libhicollie_rust.dylib.so
│   │   ├── libhid_ddk_proxy_1.0.z.so
│   │   ├── libhidebug.so
│   │   ├── libhidebug_native.z.so
│   │   ├── libhidumper_client.z.so
│   │   ├── libhidumperclient.z.so
│   │   ├── libhidumpermemory.z.so
│   │   ├── libhidumperservice.z.so
│   │   ├── libhidumperservice_cpu_source.z.so
│   │   ├── libhilog_rust.dylib.so
│   │   ├── libhistreamer_ability_querier.z.so
│   │   ├── libhistreamer_base.z.so
│   │   ├── libhistreamer_codec_filters.z.so
│   │   ├── libhistreamer_ext_dfx.z.so
│   │   ├── libhistreamer_ffmpeg_convert.z.so
│   │   ├── libhistreamer_plugin_base.z.so
│   │   ├── libhisysevent.dylib.so
│   │   ├── libhisysevent_c_wrapper.so
│   │   ├── libhitrace_meter_rust.dylib.so
│   │   ├── libhitracechain.dylib.so
│   │   ├── libhitracechain_c_wrapper.so
│   │   ├── libhiviewbase.z.so
│   │   ├── libhiviewengine.z.so
│   │   ├── libhmi_proxy_1.0.z.so
│   │   ├── libhmos_bundle_mgr_ext.z.so
│   │   ├── libhmos_bundle_runtime_helper.z.so
│   │   ├── libhnpapi.z.so
│   │   ├── libhostapd_proxy_1.0.z.so
│   │   ├── libhuaweiid_features.z.so
│   │   ├── libhuaweiid_innerkits_ndk.z.so
│   │   ├── libhuaweiid_napi_base.z.so
│   │   ├── libhuaweiid_native_base.z.so
│   │   ├── libhuaweiid_ndk.z.so
│   │   ├── libhuaweiid_sa_client.z.so
│   │   ├── libhuaweiid_svc.z.so
│   │   ├── libhuks_engine_core_standard.z.so
│   │   ├── libhuks_ext_proxy_1.0.z.so
│   │   ├── libhuks_proxy_1.1.z.so
│   │   ├── libhuks_service.z.so
│   │   ├── libhwdisplay_proxy_1.0.z.so
│   │   ├── libhyper_graphic_manager.z.so
│   │   ├── libi18n_sa.z.so
│   │   ├── libimage_cuva_parser.z.so
│   │   ├── libimage_proxy_2.0.z.so
│   │   ├── libimf_hisysevent.z.so
│   │   ├── libinfosec_service.z.so
│   │   ├── libinit_module_engine.so
│   │   ├── libinit_stub_empty.so
│   │   ├── libinput-third-mmi.z.so
│   │   ├── libinput_proxy_1.0.z.so
│   │   ├── libinputmethod_common.z.so
│   │   ├── libinputmethod_extension.z.so
│   │   ├── libinputmethod_service.z.so
│   │   ├── libinsight_intent_executor.z.so
│   │   ├── libinsightintentcontext.z.so
│   │   ├── libinstallinfomanager_client.z.so
│   │   ├── libinstalls.z.so
│   │   ├── libintention_cooperate.z.so
│   │   ├── libintention_event.z.so
│   │   ├── libintention_event_anr_manager.z.so
│   │   ├── libintention_service.z.so
│   │   ├── libinteraction_drag.z.so
│   │   ├── libio_sched_plugin.z.so
│   │   ├── libipc.dylib.so
│   │   ├── libkernel_collector_sg.z.so
│   │   ├── libkernel_monitor.z.so
│   │   ├── liblame.z.so
│   │   ├── liblbsability_ext.z.so
│   │   ├── liblbsbase_module.z.so
│   │   ├── liblbsresources.z.so
│   │   ├── liblbsservice_geocode.z.so
│   │   ├── liblbsservice_gnss.z.so
│   │   ├── liblbsservice_locator.z.so
│   │   ├── liblbsservice_network.z.so
│   │   ├── liblbsservice_passive.z.so
│   │   ├── liblive_view_manager.z.so
│   │   ├── liblive_view_subscribe_manager_client.z.so
│   │   ├── liblive_view_utils_common.z.so
│   │   ├── libload_policy.z.so
│   │   ├── liblocalsocket.z.so
│   │   ├── liblocation_agnss_proxy_2.0.z.so
│   │   ├── liblocation_framework_ext.z.so
│   │   ├── liblocation_gnss_proxy_2.0.z.so
│   │   ├── liblpfence_cellbatching_proxy_1.0.z.so
│   │   ├── liblpfence_cellfence_proxy_1.0.z.so
│   │   ├── liblpfence_geofence_proxy_1.0.z.so
│   │   ├── liblpfence_safe_location_proxy_1.0.z.so
│   │   ├── liblpfence_wififence_proxy_1.0.z.so
│   │   ├── libmdns_manager.z.so
│   │   ├── libmedia_engine_common.z.so
│   │   ├── libmedia_library_asset_manager.z.so
│   │   ├── libmedia_library_custom_restore.z.so
│   │   ├── libmedia_library_extend_manager.z.so
│   │   ├── libmedia_library_manager.z.so
│   │   ├── libmedia_monitor.z.so
│   │   ├── libmedia_monitor_wrapper.z.so
│   │   ├── libmedia_service.z.so
│   │   ├── libmedia_service_dfx.z.so
│   │   ├── libmedia_service_log_dfx.z.so
│   │   ├── libmedialibrary_data_extension.z.so
│   │   ├── libmedialibrary_nutils.z.so
│   │   ├── libmeminfo.z.so
│   │   ├── libmemleak_tracker.so
│   │   ├── libmemmgrclient.z.so
│   │   ├── libmemmgrservice.z.so
│   │   ├── libmemorytracker_proxy_1.0.z.so
│   │   ├── libmigrate_cert_verify.z.so
│   │   ├── libmiscdevice_service.z.so
│   │   ├── libmlps_fwk.z.so
│   │   ├── libmlps_service.z.so
│   │   ├── libmmi-server.z.so
│   │   ├── libmmi_rust.z.so
│   │   ├── libmmi_rust_key_config.z.so
│   │   ├── libmock_thermalsrv_client.z.so
│   │   ├── libmodule-cli-protocol-unix.z.so
│   │   ├── libmodule-hdi-sink.z.so
│   │   ├── libmodule-hdi-source.z.so
│   │   ├── libmodule-inner-capturer-sink.z.so
│   │   ├── libmodule-native-protocol-fd.z.so
│   │   ├── libmodule-native-protocol-tcp.z.so
│   │   ├── libmodule-native-protocol-unix.z.so
│   │   ├── libmodule-split-stream-sink.z.so
│   │   ├── libmodule-suspend-on-idle.z.so
│   │   ├── libmodule_update_service.z.so
│   │   ├── libmodule_update_utils.z.so
│   │   ├── libmoduleinstallmanager_client.z.so
│   │   ├── libmotion_algo.z.so
│   │   ├── libmotion_drag.z.so
│   │   ├── libmotion_mock.z.so
│   │   ├── libmotion_param.z.so
│   │   ├── libmotion_permission.z.so
│   │   ├── libmotion_proxy_1.0.z.so
│   │   ├── libmotion_proxy_1.1.z.so
│   │   ├── libmotion_service.z.so
│   │   ├── libmotion_utils.z.so
│   │   ├── libmovement_ar.z.so
│   │   ├── libmovement_detector.z.so
│   │   ├── libmovement_service.z.so
│   │   ├── libmovement_util.z.so
│   │   ├── libmsdp_algorithm_common.z.so
│   │   ├── libmsdp_common_algorithm.z.so
│   │   ├── libmsdp_fusionawareness_algorithm.z.so
│   │   ├── libmsdp_hpe_algorithm.z.so
│   │   ├── libmsdp_multisceneawareness_algorithm.z.so
│   │   ├── libmsdp_pincode_algorithm.z.so
│   │   ├── libmtdev-third-mmi.z.so
│   │   ├── libmultichannel_audio_renderer_sink.z.so
│   │   ├── libmultimodal_awareness_service.z.so
│   │   ├── libmultimodal_awareness_stub.z.so
│   │   ├── libmultimodal_awareness_utils.z.so
│   │   ├── libnative_avscreen_capture.so
│   │   ├── libnative_drawing.so
│   │   ├── libnative_drawing_ndk.z.so
│   │   ├── libnative_image.so
│   │   ├── libnative_media_adec.so
│   │   ├── libnative_media_aenc.so
│   │   ├── libnative_media_avdemuxer.so
│   │   ├── libnative_media_avmuxer.so
│   │   ├── libnative_media_avsource.so
│   │   ├── libnative_media_codecbase.so
│   │   ├── libnative_media_core.so
│   │   ├── libnative_media_vdec.so
│   │   ├── libnative_media_venc.so
│   │   ├── libnative_migrate.z.so
│   │   ├── libnative_vsync.so
│   │   ├── libnav_info_client.z.so
│   │   ├── libnav_info_service.z.so
│   │   ├── libnet_access_policy_dialog.z.so
│   │   ├── libnet_bundle_utils.z.so
│   │   ├── libnet_conn_manager.z.so
│   │   ├── libnet_event_report.z.so
│   │   ├── libnet_manager_ext_common.z.so
│   │   ├── libnet_policy_manager.z.so
│   │   ├── libnet_service_common.z.so
│   │   ├── libnet_stats_manager.z.so
│   │   ├── libnet_tether_manager.z.so
│   │   ├── libnet_vpn_manager.z.so
│   │   ├── libnet_vpn_manager_if.z.so
│   │   ├── libnetsys_ext_client.z.so
│   │   ├── libnetsys_ext_service.z.so
│   │   ├── libnetsys_ext_utils.z.so
│   │   ├── libnetvirt_ext_client.z.so
│   │   ├── libnetvirt_ext_utils.z.so
│   │   ├── libnetwork_profiler.z.so
│   │   ├── libnetwork_select.z.so
│   │   ├── libnfc_inner_kits_card_emulation.z.so
│   │   ├── libnfc_inner_kits_common.z.so
│   │   ├── libnfc_inner_kits_controller.z.so
│   │   ├── libnfc_inner_kits_tags.z.so
│   │   ├── libnfc_notification.z.so
│   │   ├── libnfc_service.z.so
│   │   ├── libnnrt_proxy_1.0.z.so
│   │   ├── libnnrt_proxy_2.0.z.so
│   │   ├── libnstackx_congestion.z.so
│   │   ├── libnstackx_dfile.z.so
│   │   ├── libnstackx_dmsg.z.so
│   │   ├── libnstackx_linkfinder.z.so
│   │   ├── libnstackx_util.z.so
│   │   ├── libnumber_identity.z.so
│   │   ├── libnweb_ohos_wrapper.z.so
│   │   ├── liboaid_service.z.so
│   │   ├── liboffload_audio_renderer_sink.z.so
│   │   ├── libohos_adapter_glue_source.z.so
│   │   ├── libopencloudextension.z.so
│   │   ├── libopencore_amr_alg.z.so
│   │   ├── libopus_codec.z.so
│   │   ├── libos_account_core.z.so
│   │   ├── libpanic_handler.dylib.so
│   │   ├── libparam_watcher.z.so
│   │   ├── libparaperm_checker.z.so
│   │   ├── libpasteboard_framework.z.so
│   │   ├── libpasteboard_service.z.so
│   │   ├── libpatch_shared.z.so
│   │   ├── libperformance_enhance_plugin.z.so
│   │   ├── libphone_standby_plugin_ext.z.so
│   │   ├── libphoto_editor_extension.z.so
│   │   ├── libpin_auth_proxy_2.1.z.so
│   │   ├── libpinauthservice.z.so
│   │   ├── libplayback_capturer.z.so
│   │   ├── libplugin_kits.z.so
│   │   ├── libpower_ability.z.so
│   │   ├── libpower_ffrt.z.so
│   │   ├── libpower_permission.z.so
│   │   ├── libpower_proxy_1.0.z.so
│   │   ├── libpower_proxy_1.2.z.so
│   │   ├── libpower_setting.z.so
│   │   ├── libpower_sysparam.z.so
│   │   ├── libpower_vibrator.z.so
│   │   ├── libpowermgr_stub.z.so
│   │   ├── libpowermgrservice.z.so
│   │   ├── libpreferences_jscommon.z.so
│   │   ├── libprint_extension_framework.z.so
│   │   ├── libprint_service.z.so
│   │   ├── libprivacy_manager_service.z.so
│   │   ├── libprivacymanager_client.z.so
│   │   ├── libprocess_group.z.so
│   │   ├── libprocess_relation_manager_plugin.z.so
│   │   ├── libprocess_relation_manager_service.z.so
│   │   ├── libprotobuf.z.so
│   │   ├── libprotocol-cli.z.so
│   │   ├── libprotocol-native.z.so
│   │   ├── libpulse-simple.z.so
│   │   ├── libpulse_audio_service_adapter.z.so
│   │   ├── libpulseaudio.z.so
│   │   ├── libpurgeable_pixelmap_builder.z.so
│   │   ├── libpurgeablemem.z.so
│   │   ├── libpurgeablemem_plugin.z.so
│   │   ├── libpush_anco_adapter.z.so
│   │   ├── libpush_dynamic_load_so_adapter.z.so
│   │   ├── libpush_fwk_base.z.so
│   │   ├── libpush_manager_client.z.so
│   │   ├── libpush_manager_service.z.so
│   │   ├── libpush_service_client.z.so
│   │   ├── libpush_service_notification_client.z.so
│   │   ├── libpush_utils_common.z.so
│   │   ├── libqos.z.so
│   │   ├── libqpdf.z.so
│   │   ├── libquickfix_engine_app.z.so
│   │   ├── libquickfix_engine_kernel.z.so
│   │   ├── libquickfix_engine_modem.z.so
│   │   ├── libquickfix_engine_native.z.so
│   │   ├── libquickfix_engine_nv.z.so
│   │   ├── libquickfix_engine_service.z.so
│   │   ├── libquickfix_engine_utils.z.so
│   │   ├── libquickfix_interfaces.z.so
│   │   ├── libquickfixms.z.so
│   │   ├── librawfile.z.so
│   │   ├── librcp_cellular_callback.z.so
│   │   ├── libreal_time_detect_service.z.so
│   │   ├── librelational_common_base.z.so
│   │   ├── libremote_audio_capturer_source.z.so
│   │   ├── libremote_audio_renderer_sink.z.so
│   │   ├── libremote_fast_audio_capturer_source.z.so
│   │   ├── libremote_fast_audio_renderer_sink.z.so
│   │   ├── libremote_session_sink.z.so
│   │   ├── libremote_session_source.z.so
│   │   ├── librender_service.z.so
│   │   ├── librender_service_base.z.so
│   │   ├── librender_service_client.z.so
│   │   ├── librenderer_sink_adapter.z.so
│   │   ├── libres_sched_type_ext.z.so
│   │   ├── libres_sched_util.z.so
│   │   ├── libresource_quota_manager.z.so
│   │   ├── libressched_common_utils.z.so
│   │   ├── libresschedexesvc.z.so
│   │   ├── libresschedsvc.z.so
│   │   ├── libril_proxy_1.1.z.so
│   │   ├── libril_proxy_1.2.z.so
│   │   ├── libril_proxy_1.3.z.so
│   │   ├── libringtone_data_extension.z.so
│   │   ├── libringtone_data_helper.z.so
│   │   ├── libringtone_setting.z.so
│   │   ├── libringtone_utils.z.so
│   │   ├── librosen_text.z.so
│   │   ├── librtg_interface.z.so
│   │   ├── librustc_demangle.z.so
│   │   ├── libsandbox_manager_service.z.so
│   │   ├── libsandbox_manager_service_common.z.so
│   │   ├── libsane_service.z.so
│   │   ├── libscan_service.z.so
│   │   ├── libscene_recognize_ext_plugin.z.so
│   │   ├── libschedule_ext_param_update.z.so
│   │   ├── libscreenlock_server.z.so
│   │   ├── libscreenlock_utils.z.so
│   │   ├── libsecurity_collector_service.z.so
│   │   ├── libsecurity_component_sdk.z.so
│   │   ├── libsecurity_component_service.z.so
│   │   ├── libsecurity_component_service_enhance.z.so
│   │   ├── libsensor_proxy_2.0.z.so
│   │   ├── libsensor_proxy_2.1.z.so
│   │   ├── libsensor_service.z.so
│   │   ├── libsepol.z.so
│   │   ├── libservice_fence_extension.z.so
│   │   ├── libsetresolution_util.z.so
│   │   ├── libsg_app_risk_detection.z.so
│   │   ├── libsg_classify_service.z.so
│   │   ├── libsg_collect_service.z.so
│   │   ├── libsg_collect_service_database.z.so
│   │   ├── libsg_config_manager.z.so
│   │   ├── libsg_oem_mode_detection.z.so
│   │   ├── libsg_risk_factor_model.z.so
│   │   ├── libsg_system_risk_detection.z.so
│   │   ├── libsg_threat_detection.z.so
│   │   ├── libsg_time_event_related_analysis.z.so
│   │   ├── libshare_client.z.so
│   │   ├── libshare_extension.z.so
│   │   ├── libshare_service.z.so
│   │   ├── libsharing_codec.z.so
│   │   ├── libsharing_network.z.so
│   │   ├── libsharing_rtp.z.so
│   │   ├── libsharing_service.z.so
│   │   ├── libsharingwfd_client.z.so
│   │   ├── libskeffectchain.z.so
│   │   ├── libskia_canvaskit.z.so
│   │   ├── libskytone_service.z.so
│   │   ├── libsleep_detection.z.so
│   │   ├── libsmart_gc_plugin.z.so
│   │   ├── libsnapshot_util.z.so
│   │   ├── libsocket_permission.z.so
│   │   ├── libsocketpair.z.so
│   │   ├── libsocperf_executor_plugin.z.so
│   │   ├── libsocperf_plugin.z.so
│   │   ├── libsocperf_plugin_ext.z.so
│   │   ├── libsocperf_server.z.so
│   │   ├── libsoftbus_server.z.so
│   │   ├── libspatial_awareness_service.z.so
│   │   ├── libspatial_awareness_stub.z.so
│   │   ├── libspatial_awareness_utils.z.so
│   │   ├── libsps_access_token_ext.z.so
│   │   ├── libsps_infrastructure.z.so
│   │   ├── libsps_napi_common.z.so
│   │   ├── libsps_privacy_indicator_service.z.so
│   │   ├── libsps_privacy_indicator_service_intf.z.so
│   │   ├── libsps_security_privacy_service.z.so
│   │   ├── libsps_security_privacy_service_intf.z.so
│   │   ├── libsps_super_privacy_ca.z.so
│   │   ├── libsps_super_privacy_sdk.z.so
│   │   ├── libsps_super_privacy_service.z.so
│   │   ├── libsps_super_privacy_service_intf.z.so
│   │   ├── libsrms.z.so
│   │   ├── libstacktrace_rust.dylib.so
│   │   ├── libstandby_fwk.z.so
│   │   ├── libstandby_plugin.z.so
│   │   ├── libstandby_service.z.so
│   │   ├── libstandby_strategy_executor_plugin.z.so
│   │   ├── libstandby_strategy_update.z.so
│   │   ├── libstandby_utils_common.z.so
│   │   ├── libstandby_utils_policy.z.so
│   │   ├── libstatic_subscriber_extension.z.so
│   │   ├── libstatic_subscriber_ipc.z.so
│   │   ├── libstd.dylib.so
│   │   ├── libstorage_common_utils.z.so
│   │   ├── libstorage_manager.z.so
│   │   ├── libsuspend_manager_plugin.z.so
│   │   ├── libsuspend_manager_service.z.so
│   │   ├── libsync.z.so
│   │   ├── libsys_event_service_adapter.z.so
│   │   ├── libsys_installer.z.so
│   │   ├── libsyscap_interface_shared.z.so
│   │   ├── libsystemshare_innerkits.z.so
│   │   ├── libsystemshare_jskits.z.so
│   │   ├── libsysupdateauth_fwk_shared.so
│   │   ├── libsysupdateauth_shared.so
│   │   ├── libtag_sched_executor.z.so
│   │   ├── libtag_sched_plugin.z.so
│   │   ├── libtask_handler_wrap.z.so
│   │   ├── libtel_call_manager.z.so
│   │   ├── libtel_cellular_call.z.so
│   │   ├── libtel_cellular_data.z.so
│   │   ├── libtel_core_service.z.so
│   │   ├── libtel_ext_p2p.z.so
│   │   ├── libtel_ext_symbol.z.so
│   │   ├── libtel_modem_engine_service.z.so
│   │   ├── libtel_sms_mms.z.so
│   │   ├── libtel_state_registry.z.so
│   │   ├── libtel_voip_call_manager.z.so
│   │   ├── libtel_vsim_symbol.z.so
│   │   ├── libtelephony_ext_innerkits.z.so
│   │   ├── libtelephony_ext_service.z.so
│   │   ├── libtelephony_vsim_service.z.so
│   │   ├── libtelephony_vsim_service_if.z.so
│   │   ├── libtest_server_client.z.so
│   │   ├── libtest_server_service.z.so
│   │   ├── libthermal_ability.z.so
│   │   ├── libthermal_aware_executor.z.so
│   │   ├── libthermal_aware_plugin.z.so
│   │   ├── libthermal_proxy_1.1.z.so
│   │   ├── libthermalmgr_listener.z.so
│   │   ├── libthermalmgr_stub.z.so
│   │   ├── libthermalservice.z.so
│   │   ├── libtime_system_ability.z.so
│   │   ├── libtimeline_permission.z.so
│   │   ├── libtimeline_service.z.so
│   │   ├── libtoken_sync_manager_service.z.so
│   │   ├── libtokensync_sdk.z.so
│   │   ├── libturbojpeg.z.so
│   │   ├── libudmf_data_napi.z.so
│   │   ├── libudmf_server.z.so
│   │   ├── libui_appearance_service.z.so
│   │   ├── libui_extension.z.so
│   │   ├── libuiservice.z.so
│   │   ├── libuni_perception_plugin.z.so
│   │   ├── libupdate_foundations.z.so
│   │   ├── libupdate_module_mgr.z.so
│   │   ├── libupdatecjson.z.so
│   │   ├── libupdatemanager_client.z.so
│   │   ├── libupdater_bootasi_signature.z.so
│   │   ├── libupdater_layout.z.so
│   │   ├── libupdaterpackage_ext_shared.z.so
│   │   ├── libupdaterpackage_shared.z.so
│   │   ├── libupdateservice.z.so
│   │   ├── libupdateservicekitsext.z.so
│   │   ├── libupms.z.so
│   │   ├── liburma.so
│   │   ├── liburma_common.so
│   │   ├── liburpc_core.z.so
│   │   ├── liburpc_cpp.z.so
│   │   ├── liburpc_system.z.so
│   │   ├── libusagestatservice.z.so
│   │   ├── libusb_ddk_proxy_1.0.z.so
│   │   ├── libusb_proxy_1.0.z.so
│   │   ├── libusb_proxy_1.1.z.so
│   │   ├── libusb_shared.z.so
│   │   ├── libusbfn_mtp_proxy_1.0.z.so
│   │   ├── libusbservice.z.so
│   │   ├── libuser_auth_extension.z.so
│   │   ├── libuser_auth_proxy_3.0.z.so
│   │   ├── libuserauth_executors.z.so
│   │   ├── libuserauthservice.z.so
│   │   ├── libusession.z.so
│   │   ├── libutils_rust.dylib.so
│   │   ├── libvibrator_proxy_1.1.z.so
│   │   ├── libvibrator_proxy_1.2.z.so
│   │   ├── libvibrator_proxy_1.3.z.so
│   │   ├── libvideo_dragging_player.z.so
│   │   ├── libvoip_extension_manager_client.z.so
│   │   ├── libvpeer.z.so
│   │   ├── libvpn_extension.z.so
│   │   ├── libvsync.z.so
│   │   ├── libvulkan.so
│   │   ├── libvulkan_swapchain.so
│   │   ├── libwallpaper_service.z.so
│   │   ├── libwallpaperextensionability.z.so
│   │   ├── libweb_configs.z.so
│   │   ├── libwidget_service.z.so
│   │   ├── libwifi_ap_service.z.so
│   │   ├── libwifi_common_service.z.so
│   │   ├── libwifi_config_update.z.so
│   │   ├── libwifi_device_ability.z.so
│   │   ├── libwifi_enhance_common_utils.z.so
│   │   ├── libwifi_enhance_devicepipe_service.z.so
│   │   ├── libwifi_enhance_idl_client.z.so
│   │   ├── libwifi_enhance_interface.z.so
│   │   ├── libwifi_enhance_multilink_service.z.so
│   │   ├── libwifi_enhance_power_saving_service.z.so
│   │   ├── libwifi_enhance_service.z.so
│   │   ├── libwifi_enhance_toolkit.z.so
│   │   ├── libwifi_hml_ability.z.so
│   │   ├── libwifi_hml_manager_service.z.so
│   │   ├── libwifi_hotspot_ability.z.so
│   │   ├── libwifi_manager_service.z.so
│   │   ├── libwifi_native.z.so
│   │   ├── libwifi_p2p_service.z.so
│   │   ├── libwifi_scan_ability.z.so
│   │   ├── libwifi_scan_service.z.so
│   │   ├── libwifi_sta_service.z.so
│   │   ├── libwifi_toolkit.z.so
│   │   ├── libwindow_animation.z.so
│   │   ├── libwindow_extension.z.so
│   │   ├── libwlan_proxy_1.1.z.so
│   │   ├── libwlan_proxy_1.2.z.so
│   │   ├── libwlan_proxy_1.3.z.so
│   │   ├── libwm.z.so
│   │   ├── libwm_lite.z.so
│   │   ├── libworkschedservice.z.so
│   │   ├── libwpa_client.z.so
│   │   ├── libwpa_proxy_1.0.z.so
│   │   ├── libwpa_proxy_1.1.z.so
│   │   ├── libwpa_sys.z.so
│   │   ├── libxperf.z.so
│   │   ├── libxpower_manager_client.z.so
│   │   ├── libxpowerservice.z.so
│   │   ├── libylong_cloud_extension.z.so
│   │   ├── libylong_http_client.dylib.so
│   │   ├── libylong_http_client_inner.dylib.so
│   │   ├── libylong_runtime.dylib.so
│   │   ├── libzone_util.z.so
│   │   ├── media/
│   │   │   ├── histreamer_plugins/
│   │   │   │   ├── libhistreamer_plugin_CodecAdapter.z.so
│   │   │   │   ├── libhistreamer_plugin_FFmpegAudioDecoders.z.so
│   │   │   │   ├── libhistreamer_plugin_FFmpegAudioEncoders.z.so
│   │   │   │   ├── libhistreamer_plugin_FFmpegDemuxer.z.so
│   │   │   │   ├── libhistreamer_plugin_FFmpegMuxers.z.so
│   │   │   │   ├── libhistreamer_plugin_FFmpegVideoDecoders.z.so
│   │   │   │   └── libhistreamer_plugin_FFmpegVideoEncoders.z.so
│   │   │   ├── libmedia_engine_histreamer.z.so
│   │   │   └── media_plugins/
│   │   │       ├── libmedia_plugin_AmrNbAudioEncoder.z.so
│   │   │       ├── libmedia_plugin_AudioServerSink.z.so
│   │   │       ├── libmedia_plugin_AudioVendorAacEncoder.z.so
│   │   │       ├── libmedia_plugin_AudioVividDecoder.z.so
│   │   │       ├── libmedia_plugin_DataStreamSource.z.so
│   │   │       ├── libmedia_plugin_FFmpegAudioDecoders.z.so
│   │   │       ├── libmedia_plugin_FFmpegAudioEncoders.z.so
│   │   │       ├── libmedia_plugin_FFmpegDemuxer.z.so
│   │   │       ├── libmedia_plugin_FFmpegMuxer.z.so
│   │   │       ├── libmedia_plugin_FileFdSource.z.so
│   │   │       ├── libmedia_plugin_FileSource.z.so
│   │   │       ├── libmedia_plugin_G711muAudioDecoder.z.so
│   │   │       ├── libmedia_plugin_G711muAudioEncoder.z.so
│   │   │       ├── libmedia_plugin_HttpSource.z.so
│   │   │       ├── libmedia_plugin_LbvcAudioDecoder.z.so
│   │   │       ├── libmedia_plugin_LbvcAudioEncoder.z.so
│   │   │       ├── libmedia_plugin_Mp3AudioEncoder.z.so
│   │   │       ├── libmedia_plugin_OpusAudioDecoder.z.so
│   │   │       ├── libmedia_plugin_OpusAudioEncoder.z.so
│   │   │       └── libmedia_plugin_RawAudioDecoder.z.so
│   │   ├── module/
│   │   │   ├── ability/
│   │   │   │   ├── libfeatureability.z.so
│   │   │   │   ├── libparticleability.z.so
│   │   │   │   ├── libscreenlockfilemanager.z.so
│   │   │   │   └── libwantconstant.z.so
│   │   │   ├── accessibility/
│   │   │   │   ├── libconfig_napi.z.so
│   │   │   │   ├── libgesturepath_napi.z.so
│   │   │   │   └── libgesturepoint_napi.z.so
│   │   │   ├── account/
│   │   │   │   ├── libappaccount.z.so
│   │   │   │   ├── libdistributedaccount.z.so
│   │   │   │   └── libosaccount.z.so
│   │   │   ├── advertising/
│   │   │   │   ├── libadcomponent.z.so
│   │   │   │   ├── libadsserviceextensionability_napi.z.so
│   │   │   │   ├── libadsserviceextensioncontext_napi.z.so
│   │   │   │   └── libautoadcomponent.z.so
│   │   │   ├── ai/
│   │   │   │   └── libmindsporelite_napi.z.so
│   │   │   ├── animation/
│   │   │   │   └── libwindowanimationmanager_napi.z.so
│   │   │   ├── app/
│   │   │   │   ├── ability/
│   │   │   │   │   ├── libabilityconstant.z.so
│   │   │   │   │   ├── libabilitydelegatorregistry.z.so
│   │   │   │   │   ├── libabilitylifecyclecallback.z.so
│   │   │   │   │   ├── libabilitymanager.z.so
│   │   │   │   │   ├── libabilitystage.z.so
│   │   │   │   │   ├── libactionextensionability_napi.z.so
│   │   │   │   │   ├── libapplication_napi.z.so
│   │   │   │   │   ├── libapplicationstatechangecallback.z.so
│   │   │   │   │   ├── libappmanager.z.so
│   │   │   │   │   ├── libapprecovery_napi.z.so
│   │   │   │   │   ├── libautofillextensionability_napi.z.so
│   │   │   │   │   ├── libautofillmanager_napi.z.so
│   │   │   │   │   ├── libautostartupmanager.z.so
│   │   │   │   │   ├── libchildprocess_napi.z.so
│   │   │   │   │   ├── libchildprocessmanager_napi.z.so
│   │   │   │   │   ├── libconfigurationconstant.z.so
│   │   │   │   │   ├── libcontextconstant_napi.z.so
│   │   │   │   │   ├── libdatauriutils.z.so
│   │   │   │   │   ├── libdialogrequest_napi.z.so
│   │   │   │   │   ├── libdialogsession_napi.z.so
│   │   │   │   │   ├── libembeddableuiability_napi.z.so
│   │   │   │   │   ├── libembeddeduiextensionability_napi.z.so
│   │   │   │   │   ├── libenvironmentcallback.z.so
│   │   │   │   │   ├── liberrormanager.z.so
│   │   │   │   │   ├── libextensionability_napi.z.so
│   │   │   │   │   ├── libfenceextensionability_napi.z.so
│   │   │   │   │   ├── libfenceextensioncontext_napi.z.so
│   │   │   │   │   ├── libinsightintent_napi.z.so
│   │   │   │   │   ├── libinsightintentcontext_napi.z.so
│   │   │   │   │   ├── libinsightintentdriver_napi.z.so
│   │   │   │   │   ├── libinsightintentexecutor_napi.z.so
│   │   │   │   │   ├── libmissionmanager.z.so
│   │   │   │   │   ├── libphotoeditorextensionability_napi.z.so
│   │   │   │   │   ├── libprintextensionability_napi.z.so
│   │   │   │   │   ├── libquickfixmanager_napi.z.so
│   │   │   │   │   ├── libsendablecontextmanager_napi.z.so
│   │   │   │   │   ├── libserviceextensionability.z.so
│   │   │   │   │   ├── libshareextensionability_napi.z.so
│   │   │   │   │   ├── libuiability.z.so
│   │   │   │   │   ├── libuiextensionability_napi.z.so
│   │   │   │   │   ├── libuserauthextensionability_napi.z.so
│   │   │   │   │   ├── libvpnextensionability.z.so
│   │   │   │   │   ├── libwantagent_napi.z.so
│   │   │   │   │   └── libwantconstant_napi.z.so
│   │   │   │   ├── appstartup/
│   │   │   │   │   ├── libasynctaskcallback_napi.z.so
│   │   │   │   │   ├── libasynctaskexcutor_napi.z.so
│   │   │   │   │   ├── libstartupconfigentry_napi.z.so
│   │   │   │   │   ├── libstartuplistener_napi.z.so
│   │   │   │   │   ├── libstartupmanager_napi.z.so
│   │   │   │   │   └── libstartuptask_napi.z.so
│   │   │   │   ├── form/
│   │   │   │   │   ├── libformagent.z.so
│   │   │   │   │   ├── libformbindingdata.z.so
│   │   │   │   │   ├── libformextensionability.z.so
│   │   │   │   │   ├── libformhost.z.so
│   │   │   │   │   ├── libforminfo.z.so
│   │   │   │   │   ├── libformobserver.z.so
│   │   │   │   │   └── libformprovider.z.so
│   │   │   │   └── libbusinessabilityrouter.z.so
│   │   │   ├── application/
│   │   │   │   ├── libability_napi.z.so
│   │   │   │   ├── libabilityconstant_napi.z.so
│   │   │   │   ├── libabilitycontext_napi.z.so
│   │   │   │   ├── libabilitydelegatorregistry_napi.z.so
│   │   │   │   ├── libabilitymanager_napi.z.so
│   │   │   │   ├── libabilitystage_napi.z.so
│   │   │   │   ├── libabilitystagecontext_napi.z.so
│   │   │   │   ├── libaccessibilityextensionability_napi.z.so
│   │   │   │   ├── libaccessibilityextensioncontext_napi.z.so
│   │   │   │   ├── libapplicationcontext_napi.z.so
│   │   │   │   ├── libappmanager_napi.z.so
│   │   │   │   ├── libautofillextensioncontext_napi.z.so
│   │   │   │   ├── libbackupextensionability_napi.z.so
│   │   │   │   ├── libbackupextensioncontext_napi.z.so
│   │   │   │   ├── libcallee_napi.z.so
│   │   │   │   ├── libcaller_napi.z.so
│   │   │   │   ├── libconfigurationconstant_napi.z.so
│   │   │   │   ├── libcontext_napi.z.so
│   │   │   │   ├── libdatashareextensionability_napi.z.so
│   │   │   │   ├── libdatashareextensionabilitycontext_napi.z.so
│   │   │   │   ├── libembeddableuiabilitycontext_napi.z.so
│   │   │   │   ├── libembeddablewindowstage.z.so
│   │   │   │   ├── liberrormanager_napi.z.so
│   │   │   │   ├── libextensioncontext_napi.z.so
│   │   │   │   ├── libextensionwindow.z.so
│   │   │   │   ├── libfileaccessextensionability_napi.z.so
│   │   │   │   ├── libformbindingdata_napi.z.so
│   │   │   │   ├── libformerror_napi.z.so
│   │   │   │   ├── libformextension_napi.z.so
│   │   │   │   ├── libformextensioncontext_napi.z.so
│   │   │   │   ├── libformhost_napi.z.so
│   │   │   │   ├── libforminfo_napi.z.so
│   │   │   │   ├── libformprovider_napi.z.so
│   │   │   │   ├── libmissionmanager_napi.z.so
│   │   │   │   ├── libphotoeditorextensioncontext_napi.z.so
│   │   │   │   ├── libserviceextensionability_napi.z.so
│   │   │   │   ├── libserviceextensioncontext_napi.z.so
│   │   │   │   ├── libstaticsubscriberextensionability_napi.z.so
│   │   │   │   ├── libstaticsubscriberextensioncontext_napi.z.so
│   │   │   │   ├── libtestrunner_napi.z.so
│   │   │   │   ├── libuiextensioncontext_napi.z.so
│   │   │   │   ├── liburipermissionmanager_napi.z.so
│   │   │   │   ├── libvpnextensionability_napi.z.so
│   │   │   │   ├── libvpnextensioncontext_napi.z.so
│   │   │   │   ├── libwindowextensionability_napi.z.so
│   │   │   │   ├── libwindowextensioncontext_napi.z.so
│   │   │   │   ├── libwindowstage.z.so
│   │   │   │   └── libworkschedulerextensioncontext_napi.z.so
│   │   │   ├── arkcompiler/
│   │   │   │   ├── metadata.json
│   │   │   │   └── stub.an
│   │   │   ├── arkts/
│   │   │   │   ├── libcollections.z.so
│   │   │   │   ├── libutils.z.so
│   │   │   │   └── math/
│   │   │   │       └── libdecimal.z.so
│   │   │   ├── arkui/
│   │   │   │   ├── advanced/
│   │   │   │   │   ├── libchip.z.so
│   │   │   │   │   ├── libchipgroup.z.so
│   │   │   │   │   ├── libcomposelistitem.z.so
│   │   │   │   │   ├── libcomposetitlebar.z.so
│   │   │   │   │   ├── libcounter.z.so
│   │   │   │   │   ├── libdialog.z.so
│   │   │   │   │   ├── libdownloadfilebutton.z.so
│   │   │   │   │   ├── libeditabletitlebar.z.so
│   │   │   │   │   ├── libexceptionprompt.z.so
│   │   │   │   │   ├── libfilter.z.so
│   │   │   │   │   ├── libfoldsplitcontainer.z.so
│   │   │   │   │   ├── libformmenu.z.so
│   │   │   │   │   ├── libfullscreenlaunchcomponent.z.so
│   │   │   │   │   ├── libgridobjectsortcomponent.z.so
│   │   │   │   │   ├── libinnerfullscreenlaunchcomponent.z.so
│   │   │   │   │   ├── libmultinavigation.z.so
│   │   │   │   │   ├── libpopup.z.so
│   │   │   │   │   ├── libprogressbutton.z.so
│   │   │   │   │   ├── libsegmentbutton.z.so
│   │   │   │   │   ├── libselectionmenu.z.so
│   │   │   │   │   ├── libselecttitlebar.z.so
│   │   │   │   │   ├── libsplitlayout.z.so
│   │   │   │   │   ├── libsubheader.z.so
│   │   │   │   │   ├── libswiperefresher.z.so
│   │   │   │   │   ├── libtabtitlebar.z.so
│   │   │   │   │   ├── libtoolbar.z.so
│   │   │   │   │   └── libtreeview.z.so
│   │   │   │   ├── libcomponentsnapshot.z.so
│   │   │   │   ├── libcomponentutils.z.so
│   │   │   │   ├── libcontainerutils.z.so
│   │   │   │   ├── libdragcontroller.z.so
│   │   │   │   ├── libdrawabledescriptor.z.so
│   │   │   │   ├── libfocuscontroller.z.so
│   │   │   │   ├── libinspector.z.so
│   │   │   │   ├── libobserver.z.so
│   │   │   │   ├── libperformancemonitor.z.so
│   │   │   │   └── libuiextension_napi.z.so
│   │   │   ├── atomicservice/
│   │   │   │   ├── libatomicservicenavigation.z.so
│   │   │   │   ├── libatomicservicetabs.z.so
│   │   │   │   ├── libatomicserviceweb.z.so
│   │   │   │   ├── libinterstitialdialogaction.z.so
│   │   │   │   └── libnavpushpathhelper.z.so
│   │   │   ├── bluetooth/
│   │   │   │   ├── liba2dp.z.so
│   │   │   │   ├── libaccess.z.so
│   │   │   │   ├── libbaseprofile.z.so
│   │   │   │   ├── libble.z.so
│   │   │   │   ├── libconnection.z.so
│   │   │   │   ├── libconstant.z.so
│   │   │   │   ├── libhfp.z.so
│   │   │   │   ├── libhid.z.so
│   │   │   │   ├── libmap.z.so
│   │   │   │   ├── libopp.z.so
│   │   │   │   ├── libpan.z.so
│   │   │   │   ├── libpbap.z.so
│   │   │   │   ├── libsocket.z.so
│   │   │   │   └── libweardetection.z.so
│   │   │   ├── bundle/
│   │   │   │   ├── libappcontrol.z.so
│   │   │   │   ├── libappdomainverify_napi.z.so
│   │   │   │   ├── libbundlemanager.z.so
│   │   │   │   ├── libbundlemonitor.z.so
│   │   │   │   ├── libbundleresourcemanager.z.so
│   │   │   │   ├── libdefaultappmanager.z.so
│   │   │   │   ├── libdistributedbundlemanager.z.so
│   │   │   │   ├── libfreeinstall.z.so
│   │   │   │   ├── libinnerbundlemanager.z.so
│   │   │   │   ├── libinstaller.z.so
│   │   │   │   ├── liblauncherbundlemanager.z.so
│   │   │   │   ├── liboverlay.z.so
│   │   │   │   └── libshortcutmanager.z.so
│   │   │   ├── continuation/
│   │   │   │   └── libcontinuationmanager_napi.z.so
│   │   │   ├── customization/
│   │   │   │   └── libcustomconfig.z.so
│   │   │   ├── data/
│   │   │   │   ├── libclouddata.z.so
│   │   │   │   ├── libcloudextension.z.so
│   │   │   │   ├── libcommontype_napi.z.so
│   │   │   │   ├── libdataability.z.so
│   │   │   │   ├── libdatashare.z.so
│   │   │   │   ├── libdatasharepredicates.z.so
│   │   │   │   ├── libdistributeddata.z.so
│   │   │   │   ├── libdistributeddataobject.z.so
│   │   │   │   ├── libdistributedkvstore.z.so
│   │   │   │   ├── libintelligence_napi.z.so
│   │   │   │   ├── libpreferences.z.so
│   │   │   │   ├── librdb.z.so
│   │   │   │   ├── librelationalstore.z.so
│   │   │   │   ├── libsendablepreferences.z.so
│   │   │   │   ├── libsendablerelationalstore.z.so
│   │   │   │   ├── libstorage.z.so
│   │   │   │   ├── libudmfcomponents.z.so
│   │   │   │   ├── libunifieddatachannel_napi.z.so
│   │   │   │   └── libuniformtypedescriptor_napi.z.so
│   │   │   ├── devicestatus/
│   │   │   │   └── libdraginteraction.z.so
│   │   │   ├── distributedhardware/
│   │   │   │   ├── libdevicemanager.z.so
│   │   │   │   └── libhardwaremanager.z.so
│   │   │   ├── enterprise/
│   │   │   │   ├── libaccountmanager.z.so
│   │   │   │   ├── libadminmanager.z.so
│   │   │   │   ├── libapplicationmanager.z.so
│   │   │   │   ├── libbluetoothmanager.z.so
│   │   │   │   ├── libbrowser.z.so
│   │   │   │   ├── libbundlemanager.z.so
│   │   │   │   ├── libdatetimemanager.z.so
│   │   │   │   ├── libdevicecontrol.z.so
│   │   │   │   ├── libdeviceinfo.z.so
│   │   │   │   ├── libdevicesettings.z.so
│   │   │   │   ├── libenterpriseadminextensionability_napi.z.so
│   │   │   │   ├── libenterpriseadminextensioncontext_napi.z.so
│   │   │   │   ├── liblocationmanager.z.so
│   │   │   │   ├── libnetworkmanager.z.so
│   │   │   │   ├── librestrictions.z.so
│   │   │   │   ├── libsecuritymanager.z.so
│   │   │   │   ├── libsystemmanager.z.so
│   │   │   │   ├── libusbmanager.z.so
│   │   │   │   └── libwifimanager.z.so
│   │   │   ├── events/
│   │   │   │   └── libemitter.z.so
│   │   │   ├── file/
│   │   │   │   ├── libalbumpickercomponent.z.so
│   │   │   │   ├── libbackup.z.so
│   │   │   │   ├── libcloudsync.z.so
│   │   │   │   ├── libcloudsyncmanager.z.so
│   │   │   │   ├── libenvironment.z.so
│   │   │   │   ├── libfileaccess.z.so
│   │   │   │   ├── libfileextensioninfo.z.so
│   │   │   │   ├── libfileuri.z.so
│   │   │   │   ├── libfs.z.so
│   │   │   │   ├── libhash.z.so
│   │   │   │   ├── libkeymanager.z.so
│   │   │   │   ├── libphotoaccesshelper.z.so
│   │   │   │   ├── libphotopickercomponent.z.so
│   │   │   │   ├── libpicker.z.so
│   │   │   │   ├── librecent.z.so
│   │   │   │   ├── librecentphotocomponent.z.so
│   │   │   │   ├── libsecuritylabel.z.so
│   │   │   │   ├── libsendablephotoaccesshelper.z.so
│   │   │   │   ├── libstatvfs.z.so
│   │   │   │   ├── libstoragestatistics.z.so
│   │   │   │   ├── libstreamhash.z.so
│   │   │   │   ├── libstreamrw.z.so
│   │   │   │   ├── libtrash.z.so
│   │   │   │   └── libvolumemanager.z.so
│   │   │   ├── filemanagement/
│   │   │   │   └── libuserfilemanager.z.so
│   │   │   ├── graphics/
│   │   │   │   ├── libcolorspacemanager_napi.z.so
│   │   │   │   ├── libdisplaysync.z.so
│   │   │   │   ├── libdrawing_napi.z.so
│   │   │   │   ├── libhdrcapability_napi.z.so
│   │   │   │   ├── libsendablecolorspacemanager_napi.z.so
│   │   │   │   ├── libtext_napi.z.so
│   │   │   │   └── libuieffect_napi.z.so
│   │   │   ├── hiviewdfx/
│   │   │   │   ├── libhiappevent_napi.z.so
│   │   │   │   └── libjsleakwatcher.z.so
│   │   │   ├── hms/
│   │   │   │   ├── bundle/
│   │   │   │   │   ├── applinking/
│   │   │   │   │   │   └── libdeferredlink_napi.z.so
│   │   │   │   │   ├── libecologicalruledatamanager.z.so
│   │   │   │   │   └── libscenemanager.z.so
│   │   │   │   ├── carservice/
│   │   │   │   │   ├── libnavigationinfomgr_napi.z.so
│   │   │   │   │   ├── libsmartcar_napi.z.so
│   │   │   │   │   ├── libsmartmobility_napi.z.so
│   │   │   │   │   └── libsmartmobilitycommon_napi.z.so
│   │   │   │   ├── chr/
│   │   │   │   │   └── libchrlogservice.z.so
│   │   │   │   ├── collaboration/
│   │   │   │   │   ├── inner/
│   │   │   │   │   │   ├── libdevicepicker_napi.z.so
│   │   │   │   │   │   └── libservicedelivery_napi.z.so
│   │   │   │   │   ├── libcamera.z.so
│   │   │   │   │   ├── libcamerasupplier.z.so
│   │   │   │   │   ├── libcollaborationability_napi.z.so
│   │   │   │   │   ├── libcollaborationdevicepicker.z.so
│   │   │   │   │   ├── libcollaborationservicemanager_napi.z.so
│   │   │   │   │   ├── libdevicepicker.z.so
│   │   │   │   │   ├── libharmonyshare_napi.z.so
│   │   │   │   │   ├── librcp.z.so
│   │   │   │   │   ├── libservice.z.so
│   │   │   │   │   ├── libservicebrowser_napi.z.so
│   │   │   │   │   ├── libsystemshare.z.so
│   │   │   │   │   └── liburpc.z.so
│   │   │   │   ├── core/
│   │   │   │   │   ├── account/
│   │   │   │   │   │   ├── libaccountlogoutextensionability_napi.z.so
│   │   │   │   │   │   ├── libextendservice.z.so
│   │   │   │   │   │   ├── liblogincomponent.z.so
│   │   │   │   │   │   ├── librealname.z.so
│   │   │   │   │   │   ├── libretailauth.z.so
│   │   │   │   │   │   └── libshippingaddress.z.so
│   │   │   │   │   ├── appgalleryservice/
│   │   │   │   │   │   ├── libappinfomanager_napi.z.so
│   │   │   │   │   │   ├── libattributionmanager_napi.z.so
│   │   │   │   │   │   ├── libattributiontestmanager_napi.z.so
│   │   │   │   │   │   ├── libbridgingmanager_napi.z.so
│   │   │   │   │   │   ├── libinstallinfomanager_napi.z.so
│   │   │   │   │   │   ├── libmoduleinstallmanager_napi.z.so
│   │   │   │   │   │   ├── libprivacymanager_napi.z.so
│   │   │   │   │   │   ├── libproductviewmanager_napi.z.so
│   │   │   │   │   │   └── libupdatemanager_napi.z.so
│   │   │   │   │   ├── atomicservicecomponent/
│   │   │   │   │   │   ├── libatomicservice.z.so
│   │   │   │   │   │   └── libatomicserviceui_napi.z.so
│   │   │   │   │   ├── clientcloudcacheservice/
│   │   │   │   │   │   └── libgrs_napi.z.so
│   │   │   │   │   ├── devicecloudgateway/
│   │   │   │   │   │   └── libcloudcapabilitymanager_napi.z.so
│   │   │   │   │   ├── gameservice/
│   │   │   │   │   │   ├── libgameperformance_napi.z.so
│   │   │   │   │   │   ├── libgameplayer_napi.z.so
│   │   │   │   │   │   └── libgameplayerextensionability_napi.z.so
│   │   │   │   │   ├── libaaid_napi.z.so
│   │   │   │   │   ├── libauthentication.z.so
│   │   │   │   │   ├── libauthorizationextensionability_napi.z.so
│   │   │   │   │   ├── libauthorizationextensioncontext_napi.z.so
│   │   │   │   │   ├── libhianalytics_napi.z.so
│   │   │   │   │   ├── liveview/
│   │   │   │   │   │   ├── libliveviewlockscreenextensionability_napi.z.so
│   │   │   │   │   │   ├── libliveviewlockscreenextensioncontext_napi.z.so
│   │   │   │   │   │   └── libliveviewmanager_napi.z.so
│   │   │   │   │   ├── map/
│   │   │   │   │   │   ├── libmapcommon_napi.z.so
│   │   │   │   │   │   ├── libmapcomponent.z.so
│   │   │   │   │   │   ├── libnavi_napi.z.so
│   │   │   │   │   │   ├── libofflinemapdata_napi.z.so
│   │   │   │   │   │   ├── libpetalmaps_napi.z.so
│   │   │   │   │   │   ├── libscenemap_napi.z.so
│   │   │   │   │   │   ├── libsite_napi.z.so
│   │   │   │   │   │   └── libstaticmap_napi.z.so
│   │   │   │   │   ├── push/
│   │   │   │   │   │   ├── libpushcommon_napi.z.so
│   │   │   │   │   │   ├── libpushextensionability_napi.z.so
│   │   │   │   │   │   ├── libpushextensioncontext_napi.z.so
│   │   │   │   │   │   ├── libpushextensionmanager_napi.z.so
│   │   │   │   │   │   ├── libpushservice_napi.z.so
│   │   │   │   │   │   ├── libremotelocationextensionability_napi.z.so
│   │   │   │   │   │   ├── libremotelocationextensioncontext_napi.z.so
│   │   │   │   │   │   ├── libremotelocationextensionmanager_napi.z.so
│   │   │   │   │   │   ├── libremotenotificationextensionability_napi.z.so
│   │   │   │   │   │   ├── libremotenotificationextensioncontext_napi.z.so
│   │   │   │   │   │   ├── libremotenotificationextensionmanager_napi.z.so
│   │   │   │   │   │   ├── libservicenotification_napi.z.so
│   │   │   │   │   │   ├── libvoipextensionability_napi.z.so
│   │   │   │   │   │   ├── libvoipextensioncontext_napi.z.so
│   │   │   │   │   │   └── libvoipextensionmanager_napi.z.so
│   │   │   │   │   ├── scan/
│   │   │   │   │   │   ├── libcustomscan_napi.z.so
│   │   │   │   │   │   ├── libdetectbarcode_napi.z.so
│   │   │   │   │   │   ├── libgeneratebarcode_napi.z.so
│   │   │   │   │   │   ├── libscanbarcode_napi.z.so
│   │   │   │   │   │   ├── libscancore_napi.z.so
│   │   │   │   │   │   ├── libscandecode_napi.z.so
│   │   │   │   │   │   ├── libscanha_napi.z.so
│   │   │   │   │   │   └── libscanuiextservice_napi.z.so
│   │   │   │   │   └── scenariofusioncomponent/
│   │   │   │   │       └── libfileuriservice.z.so
│   │   │   │   ├── enterprise/
│   │   │   │   │   ├── libconfiguration.z.so
│   │   │   │   │   ├── libdevicecontrol_napi.z.so
│   │   │   │   │   ├── libdeviceinfo_napi.z.so
│   │   │   │   │   ├── librestrictions_napi.z.so
│   │   │   │   │   ├── libsecuritymanager_napi.z.so
│   │   │   │   │   └── libsystemmanager_napi.z.so
│   │   │   │   ├── filemanagement/
│   │   │   │   │   └── libfilepreview_napi.z.so
│   │   │   │   ├── global/
│   │   │   │   │   └── libtaboo.z.so
│   │   │   │   ├── graphic/
│   │   │   │   │   └── libapsmanager_napi.z.so
│   │   │   │   ├── hds/
│   │   │   │   │   ├── libanalogclock.z.so
│   │   │   │   │   └── libhdsdrawable.z.so
│   │   │   │   ├── hiviewdfx/
│   │   │   │   │   └── libinfosec.z.so
│   │   │   │   ├── libconfigpolicyext.z.so
│   │   │   │   ├── libhiviewlogservice_napi.z.so
│   │   │   │   ├── libxpower.z.so
│   │   │   │   ├── multimedia/
│   │   │   │   │   └── libmediaimageloader.z.so
│   │   │   │   ├── net/
│   │   │   │   │   └── libsmarthotspot.z.so
│   │   │   │   ├── security/
│   │   │   │   │   ├── libantifraudpicker_napi.z.so
│   │   │   │   │   ├── libdevicecertificate_napi.z.so
│   │   │   │   │   ├── libdevicecertificatemanager_napi.z.so
│   │   │   │   │   ├── libdlpconnection_napi.z.so
│   │   │   │   │   ├── libgtokenpolicymanager_napi.z.so
│   │   │   │   │   ├── libpermissionmanagement_napi.z.so
│   │   │   │   │   ├── libpermissionrecordmanager_napi.z.so
│   │   │   │   │   ├── libpermissionusagedurationmanager_napi.z.so
│   │   │   │   │   ├── libprivacyindicatormanager_napi.z.so
│   │   │   │   │   ├── libsafetydetect_napi.z.so
│   │   │   │   │   └── libsuperprivacymanager_napi.z.so
│   │   │   │   ├── system/
│   │   │   │   │   ├── libhwadc.z.so
│   │   │   │   │   └── libupdate.z.so
│   │   │   │   └── telephony/
│   │   │   │       ├── libcallerinfoqueryextensionability_napi.z.so
│   │   │   │       ├── libcallerinfoqueryextensioncontext_napi.z.so
│   │   │   │       ├── libenhanced.z.so
│   │   │   │       ├── libnumberlookup.z.so
│   │   │   │       ├── libvoipcall.z.so
│   │   │   │       └── libvsim.z.so
│   │   │   ├── identifier/
│   │   │   │   └── liboaid.z.so
│   │   │   ├── inputmethod/
│   │   │   │   └── libpanel.z.so
│   │   │   ├── libabilityaccessctrl.z.so
│   │   │   ├── libaccessibility_napi.z.so
│   │   │   ├── libace_uicast_proxy_napi.z.so
│   │   │   ├── libactivity.z.so
│   │   │   ├── libadvertising.z.so
│   │   │   ├── liballconnect_napi.z.so
│   │   │   ├── libanimator.z.so
│   │   │   ├── libatomicservicebar.z.so
│   │   │   ├── libbackgroundtaskmanager.z.so
│   │   │   ├── libbattery.z.so
│   │   │   ├── libbatteryinfo.z.so
│   │   │   ├── libbatterystatistics.z.so
│   │   │   ├── libbluetooth.z.so
│   │   │   ├── libbluetoothmanager.z.so
│   │   │   ├── libbrightness.z.so
│   │   │   ├── libbuffer.z.so
│   │   │   ├── libbundle.z.so
│   │   │   ├── libbundlestate.z.so
│   │   │   ├── libbytrace.z.so
│   │   │   ├── libcalendarmanager.z.so
│   │   │   ├── libcast.z.so
│   │   │   ├── libcharger.z.so
│   │   │   ├── libcipher_napi.z.so
│   │   │   ├── libcommonevent.z.so
│   │   │   ├── libcommoneventmanager.z.so
│   │   │   ├── libconfigpolicy.z.so
│   │   │   ├── libconfiguration.z.so
│   │   │   ├── libcontact.z.so
│   │   │   ├── libconvertxml.z.so
│   │   │   ├── libcooperate.z.so
│   │   │   ├── libdevice.z.so
│   │   │   ├── libdeviceattest.z.so
│   │   │   ├── libdeviceinfo.z.so
│   │   │   ├── libdfx.z.so
│   │   │   ├── libdisplay_napi.z.so
│   │   │   ├── libdistributedbundle.z.so
│   │   │   ├── libdistributeddevicemanager.z.so
│   │   │   ├── libdistributedmissionmanager.z.so
│   │   │   ├── libdlppermission_napi.z.so
│   │   │   ├── libdocument.z.so
│   │   │   ├── libeffectkit.z.so
│   │   │   ├── libfaultlogger_napi.z.so
│   │   │   ├── libfeatureability_napi.z.so
│   │   │   ├── libfetch.z.so
│   │   │   ├── libfile.z.so
│   │   │   ├── libfileio.z.so
│   │   │   ├── libfileshare.z.so
│   │   │   ├── libfont.z.so
│   │   │   ├── libgeofence.z.so
│   │   │   ├── libgeolocation.z.so
│   │   │   ├── libgeolocationmanager.z.so
│   │   │   ├── libgrid.z.so
│   │   │   ├── libhgmnapi.z.so
│   │   │   ├── libhiappevent.z.so
│   │   │   ├── libhichecker.z.so
│   │   │   ├── libhidebug.z.so
│   │   │   ├── libhilog_napi.z.so
│   │   │   ├── libhisysevent_napi.z.so
│   │   │   ├── libhitracechain_napi.z.so
│   │   │   ├── libhitracemeter_napi.z.so
│   │   │   ├── libi18n.z.so
│   │   │   ├── libinputmethod.z.so
│   │   │   ├── libinputmethodengine.z.so
│   │   │   ├── libinputmethodextensionability_napi.z.so
│   │   │   ├── libinputmethodextensioncontext_napi.z.so
│   │   │   ├── libinputmethodlist.z.so
│   │   │   ├── libintl.z.so
│   │   │   ├── libkeyboardpanelmanager.z.so
│   │   │   ├── libloglibrary_napi.z.so
│   │   │   ├── libmeasure.z.so
│   │   │   ├── libmediaquery.z.so
│   │   │   ├── libmigrate.z.so
│   │   │   ├── libmotion.z.so
│   │   │   ├── libmsdp_vlp_encode_napi.z.so
│   │   │   ├── libnetwork.z.so
│   │   │   ├── libnotification.z.so
│   │   │   ├── libnotificationmanager.z.so
│   │   │   ├── libnotificationsubscribe.z.so
│   │   │   ├── liboverlay.z.so
│   │   │   ├── libpackage.z.so
│   │   │   ├── libpasteboard_napi.z.so
│   │   │   ├── libpip_napi.z.so
│   │   │   ├── libpipwindow_napi.z.so
│   │   │   ├── libplugincomponent.z.so
│   │   │   ├── libpower.z.so
│   │   │   ├── libprint_napi.z.so
│   │   │   ├── libprintextensioncontext_napi.z.so
│   │   │   ├── libprivacymanager.z.so
│   │   │   ├── libprocess.z.so
│   │   │   ├── libprompt.z.so
│   │   │   ├── libpromptaction.z.so
│   │   │   ├── libreminderagent.z.so
│   │   │   ├── libreminderagentmanager.z.so
│   │   │   ├── librequest.z.so
│   │   │   ├── libresourcemanager.z.so
│   │   │   ├── librouter.z.so
│   │   │   ├── librpc.z.so
│   │   │   ├── librunninglock.z.so
│   │   │   ├── libscan_napi.z.so
│   │   │   ├── libscenesessionmanager_napi.z.so
│   │   │   ├── libscreen_napi.z.so
│   │   │   ├── libscreenlock.z.so
│   │   │   ├── libscreensessionmanager_napi.z.so
│   │   │   ├── libscreenshot.z.so
│   │   │   ├── libsendableresourcemanager.z.so
│   │   │   ├── libsensor.z.so
│   │   │   ├── libsessionmanagerservice_napi.z.so
│   │   │   ├── libsettings.z.so
│   │   │   ├── libshare_napi.z.so
│   │   │   ├── libspatialawareness.z.so
│   │   │   ├── libstatfs.z.so
│   │   │   ├── libstationary.z.so
│   │   │   ├── libstorage_napi.z.so
│   │   │   ├── libsystemcapability.z.so
│   │   │   ├── libsystemdatetime.z.so
│   │   │   ├── libsystemparameter.z.so
│   │   │   ├── libsystemparameterenhance.z.so
│   │   │   ├── libsystemparameterv9.z.so
│   │   │   ├── libsystemtime.z.so
│   │   │   ├── libsystemtimer.z.so
│   │   │   ├── libtaskpool.z.so
│   │   │   ├── libthermal.z.so
│   │   │   ├── libtimeline.z.so
│   │   │   ├── libtransactionmanager_napi.z.so
│   │   │   ├── libuiappearance.z.so
│   │   │   ├── libuitest.z.so
│   │   │   ├── libupdate.z.so
│   │   │   ├── liburi.z.so
│   │   │   ├── liburl.z.so
│   │   │   ├── libusb.z.so
│   │   │   ├── libusbmanager.z.so
│   │   │   ├── libutil.z.so
│   │   │   ├── libvibrator.z.so
│   │   │   ├── libwallpaper.z.so
│   │   │   ├── libwallpaperextensionability_napi.z.so
│   │   │   ├── libwallpaperextensioncontext_napi.z.so
│   │   │   ├── libwantagent.z.so
│   │   │   ├── libwebglnapi.z.so
│   │   │   ├── libwifi.z.so
│   │   │   ├── libwifi_native_js.z.so
│   │   │   ├── libwifiext.z.so
│   │   │   ├── libwifimanager.z.so
│   │   │   ├── libwifimanagerext.z.so
│   │   │   ├── libwindow_napi.z.so
│   │   │   ├── libworker.z.so
│   │   │   ├── libworkschedulerextensionability_napi.z.so
│   │   │   ├── libxml.z.so
│   │   │   ├── libzlib.z.so
│   │   │   ├── multimedia/
│   │   │   │   ├── libaudio.z.so
│   │   │   │   ├── libaudiohaptic_napi.z.so
│   │   │   │   ├── libavcastpicker.z.so
│   │   │   │   ├── libavcastpickerparam.z.so
│   │   │   │   ├── libavsession_napi.z.so
│   │   │   │   ├── libavvolumepanel.z.so
│   │   │   │   ├── libcamera_napi.z.so
│   │   │   │   ├── libcamerapicker_napi.z.so
│   │   │   │   ├── libdrm_napi.z.so
│   │   │   │   ├── libimage.z.so
│   │   │   │   ├── libmedia.z.so
│   │   │   │   ├── libmediabackup.z.so
│   │   │   │   ├── libmedialibrary.z.so
│   │   │   │   ├── libmovingphotoview.z.so
│   │   │   │   ├── libringtonerestore.z.so
│   │   │   │   ├── libsendableimage.z.so
│   │   │   │   └── libsystemsoundmanager.z.so
│   │   │   ├── multimodalawareness/
│   │   │   │   └── libmotion_napi.z.so
│   │   │   ├── multimodalinput/
│   │   │   │   ├── libgestureevent.z.so
│   │   │   │   ├── libinfraredemitter.z.so
│   │   │   │   ├── libinputconsumer.z.so
│   │   │   │   ├── libinputdevice.z.so
│   │   │   │   ├── libinputdevicecooperate.z.so
│   │   │   │   ├── libinputeventclient.z.so
│   │   │   │   ├── libinputmonitor.z.so
│   │   │   │   ├── libintentioncode.z.so
│   │   │   │   ├── libkeycode.z.so
│   │   │   │   ├── libkeyevent.z.so
│   │   │   │   ├── libmouseevent.z.so
│   │   │   │   ├── libpointer.z.so
│   │   │   │   ├── libshortkey.z.so
│   │   │   │   └── libtouchevent.z.so
│   │   │   ├── net/
│   │   │   │   ├── libconnection.z.so
│   │   │   │   ├── libethernet.z.so
│   │   │   │   ├── libhttp.z.so
│   │   │   │   ├── libmdns.z.so
│   │   │   │   ├── libnetworksecurity_napi.z.so
│   │   │   │   ├── libpolicy.z.so
│   │   │   │   ├── libsharing.z.so
│   │   │   │   ├── libsocket.z.so
│   │   │   │   ├── libstatistics.z.so
│   │   │   │   ├── libvpn.z.so
│   │   │   │   ├── libvpnextension.z.so
│   │   │   │   └── libwebsocket.z.so
│   │   │   ├── nfc/
│   │   │   │   ├── libcardemulation.z.so
│   │   │   │   ├── libcontroller.z.so
│   │   │   │   └── libtag.z.so
│   │   │   ├── resourceschedule/
│   │   │   │   ├── libbackgroundprocessmanager_napi.z.so
│   │   │   │   ├── libbackgroundtaskmanager_napi.z.so
│   │   │   │   ├── libdevicestandby.z.so
│   │   │   │   ├── libsystemload.z.so
│   │   │   │   ├── libusagestatistics.z.so
│   │   │   │   └── libworkscheduler.z.so
│   │   │   ├── security/
│   │   │   │   ├── libasset_napi.z.so
│   │   │   │   ├── libcert.z.so
│   │   │   │   ├── libcertmanager.z.so
│   │   │   │   ├── libcertmanagerdialog.z.so
│   │   │   │   ├── libcryptoframework_napi.z.so
│   │   │   │   ├── libhuks.z.so
│   │   │   │   └── libsecurityguard_napi.z.so
│   │   │   ├── telephony/
│   │   │   │   ├── libcall.z.so
│   │   │   │   ├── libdata.z.so
│   │   │   │   ├── libnumberidentity.z.so
│   │   │   │   ├── libobserver.z.so
│   │   │   │   ├── libradio.z.so
│   │   │   │   ├── libsim.z.so
│   │   │   │   ├── libsms.z.so
│   │   │   │   ├── libtelephonydata_napi.z.so
│   │   │   │   └── libvcard.z.so
│   │   │   ├── useriam/
│   │   │   │   ├── libfaceauth.z.so
│   │   │   │   ├── libuserauth.z.so
│   │   │   │   └── libuserauthicon.z.so
│   │   │   ├── util/
│   │   │   │   ├── libarraylist.z.so
│   │   │   │   ├── libdeque.z.so
│   │   │   │   ├── libhashmap.z.so
│   │   │   │   ├── libhashset.z.so
│   │   │   │   ├── libjson.z.so
│   │   │   │   ├── liblightweightmap.z.so
│   │   │   │   ├── liblightweightset.z.so
│   │   │   │   ├── liblinkedlist.z.so
│   │   │   │   ├── liblist.z.so
│   │   │   │   ├── libplainarray.z.so
│   │   │   │   ├── libqueue.z.so
│   │   │   │   ├── libstack.z.so
│   │   │   │   ├── libstream.z.so
│   │   │   │   ├── libstruct.z.so
│   │   │   │   ├── libtreemap.z.so
│   │   │   │   ├── libtreeset.z.so
│   │   │   │   └── libvector.z.so
│   │   │   └── web/
│   │   │       ├── libneterrorlist_napi.z.so
│   │   │       └── libwebview_napi.z.so
│   │   ├── ndk/
│   │   │   ├── libGLESv2.so
│   │   │   ├── libability_access_control.so
│   │   │   ├── libability_base_want.so
│   │   │   ├── libability_runtime.so
│   │   │   ├── libasset_ndk.z.so
│   │   │   ├── libbackground_process_manager.z.so
│   │   │   ├── libbluetooth_ndk.so
│   │   │   ├── libchild_process.so
│   │   │   ├── libdeviceinfo_ndk.z.so
│   │   │   ├── libffrt.so
│   │   │   ├── libffrt.z.so
│   │   │   ├── libgame_performance.z.so
│   │   │   ├── libhianalytics_ndk.z.so
│   │   │   ├── libhilog_ndk.z.so
│   │   │   ├── libhitrace_ndk.z.so
│   │   │   ├── libhmsmoduleinstall.so
│   │   │   ├── libicu.so
│   │   │   ├── libimage_common.so
│   │   │   ├── libimage_effect.so
│   │   │   ├── libimage_ndk.z.so
│   │   │   ├── libimage_packer.so
│   │   │   ├── libimage_packer_ndk.z.so
│   │   │   ├── libimage_processing.so
│   │   │   ├── libimage_receiver.so
│   │   │   ├── libimage_receiver_ndk.z.so
│   │   │   ├── libimage_source.so
│   │   │   ├── libimage_source_ndk.z.so
│   │   │   ├── libipc_capi.so
│   │   │   ├── libipc_capi.z.so
│   │   │   ├── liblocation_ndk.so
│   │   │   ├── libmedia_asset_manager.so
│   │   │   ├── libmindspore_lite_ndk.so
│   │   │   ├── libnative_color_space_manager.so
│   │   │   ├── libnative_display_manager.so
│   │   │   ├── libnative_display_soloist.so
│   │   │   ├── libnative_drm.so
│   │   │   ├── libnative_effect.so
│   │   │   ├── libnative_effect_ndk.z.so
│   │   │   ├── libnative_media_acodec.so
│   │   │   ├── libnative_media_avcencinfo.so
│   │   │   ├── libnative_rdb_ndk.z.so
│   │   │   ├── libnative_window_manager.so
│   │   │   ├── libnet_connection.so
│   │   │   ├── libnet_ssl.so
│   │   │   ├── libnet_websocket.so
│   │   │   ├── libohaudio.so
│   │   │   ├── libohavsession.so
│   │   │   ├── libohbattery_info.so
│   │   │   ├── libohcamera.so
│   │   │   ├── libohcommonevent.so
│   │   │   ├── libohcrypto.so
│   │   │   ├── libohdlp_permission.so
│   │   │   ├── libohenvironment.so
│   │   │   ├── libohfileio.so
│   │   │   ├── libohfileshare.so
│   │   │   ├── libohfileuri.so
│   │   │   ├── libohhicollie.so
│   │   │   ├── libohhidebug.so
│   │   │   ├── libohimage.so
│   │   │   ├── libohinput.so
│   │   │   ├── libohinputmethod.so
│   │   │   ├── libohnotification.so
│   │   │   ├── libohpreferences.so
│   │   │   ├── libohprint.so
│   │   │   ├── libohresmgr.so
│   │   │   ├── libohscan.so
│   │   │   ├── libohsensor.so
│   │   │   ├── libohvibrator.z.so
│   │   │   ├── libohweb.so
│   │   │   ├── libos_account_ndk.so
│   │   │   ├── libpasteboard.so
│   │   │   ├── libpicture.so
│   │   │   ├── libpixelmap.so
│   │   │   ├── libpixelmap_ndk.z.so
│   │   │   ├── libpurgeable_memory_ndk.z.so
│   │   │   ├── libqos.so
│   │   │   ├── librcp_c.so
│   │   │   ├── libservice_collaboration_ndk.z.so
│   │   │   ├── libtelephony_data.so
│   │   │   ├── libtelephony_radio.so
│   │   │   ├── libtime_service_ndk.so
│   │   │   ├── libtransient_task.so
│   │   │   ├── libudmf.so
│   │   │   ├── libvideo_processing.so
│   │   │   └── libwifi_ndk.so
│   │   ├── platformsdk/
│   │   │   ├── lib2d_graphics_new.z.so
│   │   │   ├── lib_dump_usage.z.so
│   │   │   ├── libability_business_error.z.so
│   │   │   ├── libability_connect_callback_stub.z.so
│   │   │   ├── libability_context_native.z.so
│   │   │   ├── libability_deps_wrapper.z.so
│   │   │   ├── libability_manager.z.so
│   │   │   ├── libability_manager_c.z.so
│   │   │   ├── libability_runtime_error_util.z.so
│   │   │   ├── libability_start_options.z.so
│   │   │   ├── libability_start_setting.z.so
│   │   │   ├── libability_thread.z.so
│   │   │   ├── libabilitykit_native.z.so
│   │   │   ├── libabilitykit_utils.z.so
│   │   │   ├── libabilityms.z.so
│   │   │   ├── libabnormal_mgr.z.so
│   │   │   ├── libabsl_int128.z.so
│   │   │   ├── libabsl_log_severity.z.so
│   │   │   ├── libabsl_raw_logging_internal.z.so
│   │   │   ├── libabsl_strings.z.so
│   │   │   ├── libabsl_strings_internal.z.so
│   │   │   ├── libabsl_throw_delegate.z.so
│   │   │   ├── libaccessibility_common.z.so
│   │   │   ├── libaccessibility_interface.z.so
│   │   │   ├── libaccessibilityclient.z.so
│   │   │   ├── libaccessibilityconfig.z.so
│   │   │   ├── libaccount_common.z.so
│   │   │   ├── libaccount_iam_innerkits.z.so
│   │   │   ├── libaccount_iam_napi.z.so
│   │   │   ├── libaccount_napi_common.z.so
│   │   │   ├── libaccountkits.z.so
│   │   │   ├── libace_compatible.z.so
│   │   │   ├── libace_container_scope.z.so
│   │   │   ├── libace_form_render.z.so
│   │   │   ├── libace_forward_compatibility.z.so
│   │   │   ├── libace_napi.z.so
│   │   │   ├── libace_network.z.so
│   │   │   ├── libace_uicontent.z.so
│   │   │   ├── libace_xcomponent_controller.z.so
│   │   │   ├── libaip_core.z.so
│   │   │   ├── libaip_knowledge_retrieval_core.z.so
│   │   │   ├── libapi_cache_manager.z.so
│   │   │   ├── libapp_account_innerkits.z.so
│   │   │   ├── libapp_context.z.so
│   │   │   ├── libapp_context_utils.z.so
│   │   │   ├── libapp_manager.z.so
│   │   │   ├── libapp_nap_client.z.so
│   │   │   ├── libappexecfwk_base.z.so
│   │   │   ├── libappexecfwk_common.z.so
│   │   │   ├── libappexecfwk_core.z.so
│   │   │   ├── libappgallery_sa_client.z.so
│   │   │   ├── libappkit_delegator.z.so
│   │   │   ├── libappkit_manager_helper.z.so
│   │   │   ├── libappkit_native.z.so
│   │   │   ├── libark_interop.z.so
│   │   │   ├── libark_interop_helper_ffi.z.so
│   │   │   ├── libark_jsruntime.so
│   │   │   ├── libarkweb_core_loader.z.so
│   │   │   ├── libasan_logger.z.so
│   │   │   ├── libastc_encoder_shared.z.so
│   │   │   ├── libaudio_capturer.z.so
│   │   │   ├── libaudio_client.z.so
│   │   │   ├── libaudio_common.z.so
│   │   │   ├── libaudio_haptic.z.so
│   │   │   ├── libaudio_policy_client.z.so
│   │   │   ├── libaudio_renderer.z.so
│   │   │   ├── libaudio_sasdk.z.so
│   │   │   ├── libaudio_toneplayer.z.so
│   │   │   ├── libaudio_utils.z.so
│   │   │   ├── libauto_fill_manager.z.so
│   │   │   ├── libauto_startup_callback.z.so
│   │   │   ├── libautostartupcallback.z.so
│   │   │   ├── libav_codec_client.z.so
│   │   │   ├── libavsession_cast_client.z.so
│   │   │   ├── libavsession_client.z.so
│   │   │   ├── libavsession_common.z.so
│   │   │   ├── libavsession_utils.z.so
│   │   │   ├── libbackup_kit_inner.z.so
│   │   │   ├── libbackup_utils.z.so
│   │   │   ├── libbase.z.so
│   │   │   ├── libbatterysrv_client.z.so
│   │   │   ├── libbgtaskmgr_innerkits.z.so
│   │   │   ├── libbootanimation_utils.z.so
│   │   │   ├── libbtframework.z.so
│   │   │   ├── libbundle_napi_common.z.so
│   │   │   ├── libbundlemgr_graphics.z.so
│   │   │   ├── libcamera_framework.z.so
│   │   │   ├── libcertificate_framework_core.z.so
│   │   │   ├── libcesfwk_core.z.so
│   │   │   ├── libcesfwk_innerkits.z.so
│   │   │   ├── libchild_process_manager.z.so
│   │   │   ├── libchr_service_api.z.so
│   │   │   ├── libcipher_shared.z.so
│   │   │   ├── libcj_ability_access_ctrl_ffi.z.so
│   │   │   ├── libcj_background_task_mgr_ffi.z.so
│   │   │   ├── libcj_bind_ffi.z.so
│   │   │   ├── libcj_bind_native.z.so
│   │   │   ├── libcj_bundle_manager_ffi.z.so
│   │   │   ├── libcj_color_manager_ffi.z.so
│   │   │   ├── libcj_common_event_manager_ffi.z.so
│   │   │   ├── libcj_config_policy_ffi.z.so
│   │   │   ├── libcj_cryptoframework_ffi.z.so
│   │   │   ├── libcj_device_info_ffi.z.so
│   │   │   ├── libcj_display_ffi.z.so
│   │   │   ├── libcj_distributed_kv_store_ffi.z.so
│   │   │   ├── libcj_emitter_ffi.z.so
│   │   │   ├── libcj_environment.z.so
│   │   │   ├── libcj_errormanager_ffi.z.so
│   │   │   ├── libcj_file_fileuri_ffi.z.so
│   │   │   ├── libcj_file_fs_ffi.z.so
│   │   │   ├── libcj_frontend_ohos.z.so
│   │   │   ├── libcj_hiappevent_ffi.z.so
│   │   │   ├── libcj_hitracechain_ffi.z.so
│   │   │   ├── libcj_hitracemeter_ffi.z.so
│   │   │   ├── libcj_huks_ffi.z.so
│   │   │   ├── libcj_i18n_ffi.z.so
│   │   │   ├── libcj_image_ffi.z.so
│   │   │   ├── libcj_net_connection_ffi.z.so
│   │   │   ├── libcj_net_http_ffi.z.so
│   │   │   ├── libcj_notification_manager_ffi.z.so
│   │   │   ├── libcj_pasteboard_ffi.z.so
│   │   │   ├── libcj_picker_ffi.z.so
│   │   │   ├── libcj_preferences_ffi.z.so
│   │   │   ├── libcj_relational_store_ffi.z.so
│   │   │   ├── libcj_request_ffi.z.so
│   │   │   ├── libcj_resource_manager_ffi.z.so
│   │   │   ├── libcj_system_date_time_ffi.z.so
│   │   │   ├── libcj_system_parameter_enhance_ffi.z.so
│   │   │   ├── libcj_telephony_call_ffi.z.so
│   │   │   ├── libcj_ui_test_ffi.z.so
│   │   │   ├── libcj_vibrator_ffi.z.so
│   │   │   ├── libcj_webview_ffi.z.so
│   │   │   ├── libcj_window_ffi.z.so
│   │   │   ├── libcj_work_scheduler_ffi.z.so
│   │   │   ├── libcloudfile_kit.z.so
│   │   │   ├── libcloudfile_kit_core.z.so
│   │   │   ├── libcloudsync_asset_kit_inner.z.so
│   │   │   ├── libcloudsync_kit_inner_lite.z.so
│   │   │   ├── libcoap.z.so
│   │   │   ├── libcommon_sdk.z.so
│   │   │   ├── libcomponent_sched_client.z.so
│   │   │   ├── libconfiguration.z.so
│   │   │   ├── libconnection_obs_manager.z.so
│   │   │   ├── libconsole.z.so
│   │   │   ├── libcontinuation_ipc.z.so
│   │   │   ├── libcontinuation_manager.z.so
│   │   │   ├── libcoordinateconvertor.z.so
│   │   │   ├── libcrypto_framework_lib.z.so
│   │   │   ├── libcrypto_openssl_plugin_lib.z.so
│   │   │   ├── libcurl_shared_http3.z.so
│   │   │   ├── libdata_ability_helper.z.so
│   │   │   ├── libdataobs_manager.z.so
│   │   │   ├── libdatashare_common.z.so
│   │   │   ├── libdatashare_consumer.z.so
│   │   │   ├── libdatashare_permission.z.so
│   │   │   ├── libdatashare_provider.z.so
│   │   │   ├── libdbms_fwk.z.so
│   │   │   ├── libdbmsi_fwk.z.so
│   │   │   ├── libdevattest_sdk.z.so
│   │   │   ├── libdeviceauth_sdk.z.so
│   │   │   ├── libdevicemanagersdk.z.so
│   │   │   ├── libdevicestatus_client.z.so
│   │   │   ├── libdevicestatus_ipc.z.so
│   │   │   ├── libdevicestatus_util.z.so
│   │   │   ├── libdhcp_client.z.so
│   │   │   ├── libdhcp_sdk.z.so
│   │   │   ├── libdhcp_server.z.so
│   │   │   ├── libdhcp_utils.z.so
│   │   │   ├── libdialog_request_callback.z.so
│   │   │   ├── libdialog_request_info.z.so
│   │   │   ├── libdisplaymgr.z.so
│   │   │   ├── libdistributed_sched_utils.z.so
│   │   │   ├── libdistributed_sdk.z.so
│   │   │   ├── libdistributeddata_client_sync.z.so
│   │   │   ├── libdistributeddata_inner.z.so
│   │   │   ├── libdistributeddata_mgr.z.so
│   │   │   ├── libdistributeddataobject_impl.z.so
│   │   │   ├── libdistributeddb.z.so
│   │   │   ├── libdistributedfileutils.z.so
│   │   │   ├── libdistributedfileutils_lite.z.so
│   │   │   ├── libdistributedschedsvr.z.so
│   │   │   ├── libdlp_fuse.z.so
│   │   │   ├── libdlp_permission_common_interface.z.so
│   │   │   ├── libdlpparse_inner.z.so
│   │   │   ├── libdm_lite.z.so
│   │   │   ├── libdomain_account_innerkits.z.so
│   │   │   ├── libdomain_account_napi.z.so
│   │   │   ├── libdrawable_descriptor.z.so
│   │   │   ├── libdrawing_napi_impl.z.so
│   │   │   ├── libdrm_framework.z.so
│   │   │   ├── libedc_client.z.so
│   │   │   ├── libedm_commom.z.so
│   │   │   ├── libedmservice_kits.z.so
│   │   │   ├── libegl_image.z.so
│   │   │   ├── libembeddablewindowstage_kit.z.so
│   │   │   ├── libenvironment_native.z.so
│   │   │   ├── liberms_client.z.so
│   │   │   ├── libethernet_manager_if.z.so
│   │   │   ├── libevent_report.z.so
│   │   │   ├── libext2_uuid.z.so
│   │   │   ├── libextension_manager.z.so
│   │   │   ├── libextensionkit_native.z.so
│   │   │   ├── libextensionwindow_napi.z.so
│   │   │   ├── libextplugin.z.so
│   │   │   ├── libextractresourcemanager.z.so
│   │   │   ├── libfile_access_extension_ability_kit.z.so
│   │   │   ├── libfileio_native.z.so
│   │   │   ├── libfilemgmt_libhilog.z.so
│   │   │   ├── libfilemgmt_libn.z.so
│   │   │   ├── libfmskit_native.z.so
│   │   │   ├── libfmskit_provider_client.z.so
│   │   │   ├── libform_manager.z.so
│   │   │   ├── libformutil_napi.z.so
│   │   │   ├── libframe_trace_intf.z.so
│   │   │   ├── libframe_ui_intf.z.so
│   │   │   ├── libfreeze_util.z.so
│   │   │   ├── libfuse.z.so
│   │   │   ├── libfwmark_client.z.so
│   │   │   ├── libgeocoding.z.so
│   │   │   ├── libgeofence_client.z.so
│   │   │   ├── libgeofence_sdk.z.so
│   │   │   ├── libglobal_resmgr.z.so
│   │   │   ├── libhdc_register.z.so
│   │   │   ├── libhe_vibrator_decoder.z.so
│   │   │   ├── libheifimpl.z.so
│   │   │   ├── libheifparser.z.so
│   │   │   ├── libhevc_software_decode.so
│   │   │   ├── libhiappevent_base.z.so
│   │   │   ├── libhiappevent_innerapi.z.so
│   │   │   ├── libhichecker.so
│   │   │   ├── libhiperf_client.z.so
│   │   │   ├── libhisyseventmanager.z.so
│   │   │   ├── libhitrace_dump.z.so
│   │   │   ├── libhmicui18n.z.so
│   │   │   ├── libhmicuuc.z.so
│   │   │   ├── libhttp_client.z.so
│   │   │   ├── libhuks_ndk.z.so
│   │   │   ├── libhukssdk.z.so
│   │   │   ├── libi18n_sa_client.z.so
│   │   │   ├── libi18n_util.z.so
│   │   │   ├── libimage_codec_ext_native.so
│   │   │   ├── libimage_effect_impl.so
│   │   │   ├── libimage_napi.z.so
│   │   │   ├── libimage_native.z.so
│   │   │   ├── libimage_utils.z.so
│   │   │   ├── libimageformatagent.z.so
│   │   │   ├── libimageloader_core.z.so
│   │   │   ├── libinputmethod_ability.z.so
│   │   │   ├── libinputmethod_client.z.so
│   │   │   ├── libintl_util.z.so
│   │   │   ├── libipc_core.z.so
│   │   │   ├── libipc_napi.z.so
│   │   │   ├── libjaipplugin.z.so
│   │   │   ├── libjpeg_hardware_encode.so
│   │   │   ├── libjpegplugin.z.so
│   │   │   ├── libjs_environment.z.so
│   │   │   ├── libjson_stack_formatter.z.so
│   │   │   ├── liblbsservice_common.z.so
│   │   │   ├── liblbsservice_ext_common.z.so
│   │   │   ├── liblight_agent.z.so
│   │   │   ├── liblight_native.z.so
│   │   │   ├── liblocator_agent.z.so
│   │   │   ├── liblocator_ext_sdk.z.so
│   │   │   ├── liblocator_sdk.z.so
│   │   │   ├── liblz4_shared.z.so
│   │   │   ├── libmbedtls.z.so
│   │   │   ├── libmdns_manager_if.z.so
│   │   │   ├── libmedia_avplayer.z.so
│   │   │   ├── libmedia_client.z.so
│   │   │   ├── libmedia_foundation.z.so
│   │   │   ├── libmedia_library.z.so
│   │   │   ├── libmedia_monitor_buffer.z.so
│   │   │   ├── libmedia_monitor_client.z.so
│   │   │   ├── libmedia_monitor_common.z.so
│   │   │   ├── libmedia_mtp.z.so
│   │   │   ├── libmedia_service_utils.z.so
│   │   │   ├── libmedia_soundpool.z.so
│   │   │   ├── libmindir.z.so
│   │   │   ├── libmindspore-lite-train.so
│   │   │   ├── libmindspore-lite.so
│   │   │   ├── libmiscdevice_utils.z.so
│   │   │   ├── libmission_info.z.so
│   │   │   ├── libmission_list.z.so
│   │   │   ├── libmlps_client.z.so
│   │   │   ├── libmmi-client.z.so
│   │   │   ├── libmmi-napi.z.so
│   │   │   ├── libmmi-util.z.so
│   │   │   ├── libmodal_system_ui_extension_client.z.so
│   │   │   ├── libmodule_update.z.so
│   │   │   ├── libmodule_update_shared.z.so
│   │   │   ├── libmotion_agent.z.so
│   │   │   ├── libmotion_client.z.so
│   │   │   ├── libmovement_client.z.so
│   │   │   ├── libmsdp_ble_range.z.so
│   │   │   ├── libmultimodal_awareness_client.z.so
│   │   │   ├── libmultimodal_awareness_proxy.z.so
│   │   │   ├── libnapi_ability_common.z.so
│   │   │   ├── libnapi_base_context.z.so
│   │   │   ├── libnapi_common.z.so
│   │   │   ├── libnapi_rdb.z.so
│   │   │   ├── libnapi_utils.z.so
│   │   │   ├── libnative_appdatafwk.z.so
│   │   │   ├── libnative_daemon_client.z.so
│   │   │   ├── libnative_dataability.z.so
│   │   │   ├── libnative_preferences.z.so
│   │   │   ├── libnative_rdb.z.so
│   │   │   ├── libnativetoken_shared.z.so
│   │   │   ├── libnet_conn_manager_if.z.so
│   │   │   ├── libnet_data_share.z.so
│   │   │   ├── libnet_manager_common.z.so
│   │   │   ├── libnet_native_manager_if.z.so
│   │   │   ├── libnet_policy_manager_if.z.so
│   │   │   ├── libnet_ssl.z.so
│   │   │   ├── libnet_stats_manager_if.z.so
│   │   │   ├── libnet_tether_manager_if.z.so
│   │   │   ├── libnetsys_bpf_utils.z.so
│   │   │   ├── libnetsys_client.z.so
│   │   │   ├── libnetsys_controller.z.so
│   │   │   ├── libnetsys_native_manager.z.so
│   │   │   ├── libnghttp2_shared.z.so
│   │   │   ├── libnstackx_ctrl.z.so
│   │   │   ├── libnstackx_util.open.z.so
│   │   │   ├── libnweb_ohos_adapter.z.so
│   │   │   ├── liboaid_client.z.so
│   │   │   ├── liboffline_audio_effect.z.so
│   │   │   ├── libopencl_wrapper.so
│   │   │   ├── libos_account_innerkits.z.so
│   │   │   ├── libpackage_shared.z.so
│   │   │   ├── libpasteboard_client.z.so
│   │   │   ├── libperm_verification.z.so
│   │   │   ├── libphonenumber_standard.z.so
│   │   │   ├── libpinauth_framework.z.so
│   │   │   ├── libpixelconvertadapter.z.so
│   │   │   ├── libpluginmanager.z.so
│   │   │   ├── libpngplugin.z.so
│   │   │   ├── libpowermgr_client.z.so
│   │   │   ├── libpreferred_language.z.so
│   │   │   ├── libprint_client.z.so
│   │   │   ├── libprint_helper.z.so
│   │   │   ├── libprint_models.z.so
│   │   │   ├── libprivacy_communication_adapter_cxx.z.so
│   │   │   ├── libprivacy_sdk.z.so
│   │   │   ├── libprocess_options.z.so
│   │   │   ├── libprocess_relation_manager_client.z.so
│   │   │   ├── libpulse.z.so
│   │   │   ├── libquickfix_manager.z.so
│   │   │   ├── librawplugin.z.so
│   │   │   ├── librdb_data_ability_adapter.z.so
│   │   │   ├── librdb_data_share_adapter.z.so
│   │   │   ├── libremote_file_share_native.z.so
│   │   │   ├── libremote_uri_native.z.so
│   │   │   ├── librequest_native.z.so
│   │   │   ├── libresmgr_napi_core.z.so
│   │   │   ├── libresource_quota_control_client.z.so
│   │   │   ├── libressched_client.z.so
│   │   │   ├── libresschedexe_client.z.so
│   │   │   ├── librestorecon.z.so
│   │   │   ├── libruntime.z.so
│   │   │   ├── librust_file.z.so
│   │   │   ├── libsamgr_common.z.so
│   │   │   ├── libsandbox_helper_native.z.so
│   │   │   ├── libsandbox_manager_communication_adapter_cxx.z.so
│   │   │   ├── libsandbox_manager_sdk.z.so
│   │   │   ├── libsane_backends.z.so
│   │   │   ├── libscan_client.z.so
│   │   │   ├── libscan_helper.z.so
│   │   │   ├── libscan_zxreader.z.so
│   │   │   ├── libscandecode.z.so
│   │   │   ├── libscenario_awareness_client.z.so
│   │   │   ├── libscene_session.z.so
│   │   │   ├── libscene_session_manager.z.so
│   │   │   ├── libscreen_session.z.so
│   │   │   ├── libscreen_session_manager.z.so
│   │   │   ├── libscreen_session_manager_client.z.so
│   │   │   ├── libscreenlock_client.z.so
│   │   │   ├── libsecurity_component_client_enhance.z.so
│   │   │   ├── libsensor_agent.z.so
│   │   │   ├── libsensor_client.z.so
│   │   │   ├── libsensor_ipc.z.so
│   │   │   ├── libsensor_utils.z.so
│   │   │   ├── libservice_extension.z.so
│   │   │   ├── libsession_handler.z.so
│   │   │   ├── libsession_info.z.so
│   │   │   ├── libsession_manager.z.so
│   │   │   ├── libsession_manager_lite.z.so
│   │   │   ├── libsession_manager_service.z.so
│   │   │   ├── libsg_classify_sdk.z.so
│   │   │   ├── libsg_collect_sdk.z.so
│   │   │   ├── libsg_collector_sdk.z.so
│   │   │   ├── libsg_obtaindata_sdk.z.so
│   │   │   ├── libsg_real_time_sdk.z.so
│   │   │   ├── libsite_sdk.z.so
│   │   │   ├── libskytone_client.z.so
│   │   │   ├── libsms.z.so
│   │   │   ├── libsoftbus_adapter.z.so
│   │   │   ├── libsoftbus_client.z.so
│   │   │   ├── libsoftbus_dfx_anonymizer.z.so
│   │   │   ├── libsoftbus_dfx_dump.z.so
│   │   │   ├── libsoftbus_dfx_event.z.so
│   │   │   ├── libsoftbus_dfx_log.z.so
│   │   │   ├── libsoftbus_utils.z.so
│   │   │   ├── libsonic.z.so
│   │   │   ├── libsoundpool_client.z.so
│   │   │   ├── libspatial_awareness_client.z.so
│   │   │   ├── libsqlite.z.so
│   │   │   ├── libsqliteicu.z.so
│   │   │   ├── libsrms_fwk.z.so
│   │   │   ├── libstack_utils_common.z.so
│   │   │   ├── libstandby_innerkits.z.so
│   │   │   ├── libstart_window_option.z.so
│   │   │   ├── libstartup_util.z.so
│   │   │   ├── libstorage_manager_sa_proxy.z.so
│   │   │   ├── libsuspend_manager_client.z.so
│   │   │   ├── libsvgplugin.z.so
│   │   │   ├── libsysinstaller_shared.z.so
│   │   │   ├── libsystem_ability_fwk.z.so
│   │   │   ├── libsystem_sound_client.z.so
│   │   │   ├── libsystemparameterv9.z.so
│   │   │   ├── libtask_heartbeat_mgr_client.z.so
│   │   │   ├── libtask_signal_native.z.so
│   │   │   ├── libtel_call_manager_api.z.so
│   │   │   ├── libtel_cellular_data_api.z.so
│   │   │   ├── libtel_common.z.so
│   │   │   ├── libtel_core_service_api.z.so
│   │   │   ├── libtel_ims_call_api.z.so
│   │   │   ├── libtel_modem_engine_client.z.so
│   │   │   ├── libtel_modem_engine_comm_client.z.so
│   │   │   ├── libtel_satellite_call_api.z.so
│   │   │   ├── libtel_sms_mms_api.z.so
│   │   │   ├── libtel_state_registry_api.z.so
│   │   │   ├── libtel_telephony_data.z.so
│   │   │   ├── libtel_vcard.z.so
│   │   │   ├── libtel_voip_call_manager_api.z.so
│   │   │   ├── libtexgine.z.so
│   │   │   ├── libtext_napi_impl.z.so
│   │   │   ├── libtextureEncoderCL.z.so
│   │   │   ├── libthermalmgr_proxy.z.so
│   │   │   ├── libthermalsrv_client.z.so
│   │   │   ├── libtime_client.z.so
│   │   │   ├── libtimeline_client.z.so
│   │   │   ├── libtimer.z.so
│   │   │   ├── libtoken_callback_sdk.z.so
│   │   │   ├── libtokenid_sdk.z.so
│   │   │   ├── libtokensetproc_shared.z.so
│   │   │   ├── libucollection_graphic.z.so
│   │   │   ├── libucollection_utility.z.so
│   │   │   ├── libucollection_utility_ex.z.so
│   │   │   ├── libudmf_client.z.so
│   │   │   ├── libui_appearance_client.z.so
│   │   │   ├── libui_service_mgr.z.so
│   │   │   ├── libui_session.z.so
│   │   │   ├── libuiabilitykit_native.z.so
│   │   │   ├── libupdater_shared.z.so
│   │   │   ├── libupdaterlog_shared.z.so
│   │   │   ├── libupdateservicekits.z.so
│   │   │   ├── liburi_permission_mgr.z.so
│   │   │   ├── libusagestatsinner.z.so
│   │   │   ├── libusagestatsutils.z.so
│   │   │   ├── libusbsrv_client.z.so
│   │   │   ├── libuserauth_client.z.so
│   │   │   ├── libutd_client.z.so
│   │   │   ├── libuv.so
│   │   │   ├── libvibrator_agent.z.so
│   │   │   ├── libvibrator_decoder.z.so
│   │   │   ├── libvibrator_native.z.so
│   │   │   ├── libview_data.z.so
│   │   │   ├── libwallpaper_utils.z.so
│   │   │   ├── libwallpapermanager.z.so
│   │   │   ├── libwant.z.so
│   │   │   ├── libwantagent_innerkits.z.so
│   │   │   ├── libwantagent_manager.z.so
│   │   │   ├── libwebsocket_client.z.so
│   │   │   ├── libwifi_base.z.so
│   │   │   ├── libwifi_enhance_sdk.z.so
│   │   │   ├── libwifi_sdk.z.so
│   │   │   ├── libwifi_utils.z.so
│   │   │   ├── libwindow_extension_client.z.so
│   │   │   ├── libwindow_native_kit.z.so
│   │   │   ├── libwindow_scene_common.z.so
│   │   │   ├── libwindowstage_kit.z.so
│   │   │   ├── libwmutil.z.so
│   │   │   ├── libwmutil_base.z.so
│   │   │   ├── libworkschedclient.z.so
│   │   │   ├── libwsutils.z.so
│   │   │   ├── libxpower_event.z.so
│   │   │   ├── libxpower_event_js.z.so
│   │   │   └── libzuri.z.so
│   │   ├── updateext/
│   │   │   └── libdupdate_engine_service.z.so
│   │   └── vendorGnssAdapter.so
│   ├── module_update/
│   │   └── ArkWebCore/
│   │       ├── module.img
│   │       └── module_info.zip
│   ├── profile/
│   │   ├── CollaborationFwk.json
│   │   ├── accessibility.json
│   │   ├── accesstoken_service.json
│   │   ├── accountmgr.json
│   │   ├── app_domain_verify_agent.json
│   │   ├── app_fwk_update_service.json
│   │   ├── appgallery_service.json
│   │   ├── aps_manager.json
│   │   ├── asset_service.json
│   │   ├── audio_server.json
│   │   ├── av_codec_service.json
│   │   ├── av_session.json
│   │   ├── backup_sa.json
│   │   ├── bgtaskmgr_service.json
│   │   ├── camera_service.json
│   │   ├── cast_engine_service.json
│   │   ├── cert_manager_service.json
│   │   ├── client_cloud_cache_service.json
│   │   ├── cloud_backup_service.json
│   │   ├── cloudfileservice.json
│   │   ├── cloudinterfaceauth.json
│   │   ├── compiler_service.json
│   │   ├── concurrent_task_service.json
│   │   ├── d-bms.json
│   │   ├── daudio.json
│   │   ├── dcall.json
│   │   ├── dcamera.json
│   │   ├── dcm_service.json
│   │   ├── devattest_service.json
│   │   ├── device_activate_service.json
│   │   ├── device_manager.json
│   │   ├── deviceinfoservice.json
│   │   ├── deviceprofile.json
│   │   ├── deviceprofile_trust.json
│   │   ├── dhardware.json
│   │   ├── dinput.json
│   │   ├── distributeddata.json
│   │   ├── distributedfiledaemon.json
│   │   ├── distributedsched.json
│   │   ├── distributedsched_trust.json
│   │   ├── dlp_credential_service_sa.json
│   │   ├── dlp_permission_service.json
│   │   ├── dmsdp_adapter.json
│   │   ├── download_server.json
│   │   ├── drm_service.json
│   │   ├── dscreen.json
│   │   ├── dslm_service.json
│   │   ├── edc.json
│   │   ├── edm.json
│   │   ├── el5_filekey_manager.json
│   │   ├── file_access_service.json
│   │   ├── foundation.json
│   │   ├── foundation_trust.json
│   │   ├── gameservice_server.json
│   │   ├── hianalytics.json
│   │   ├── hidumper_service.json
│   │   ├── hmiagent.json
│   │   ├── huawei_id_svc.json
│   │   ├── huks_service.json
│   │   ├── i18n_service.json
│   │   ├── inputmethod_service.json
│   │   ├── installs.json
│   │   ├── locationhub.json
│   │   ├── mdnsmanager.json
│   │   ├── mdnsmanager_trust.json
│   │   ├── media_monitor.json
│   │   ├── media_service.json
│   │   ├── memmgrservice.json
│   │   ├── module_update_sa.json
│   │   ├── msdp.json
│   │   ├── multimodalinput.json
│   │   ├── nav_info_service.json
│   │   ├── netmanager.json
│   │   ├── netmanager_trust.json
│   │   ├── netsysnative.json
│   │   ├── netsysnative_trust.json
│   │   ├── nfc_service.json
│   │   ├── oaid_service.json
│   │   ├── param_watcher.json
│   │   ├── pasteboard_service.json
│   │   ├── pinauth.json
│   │   ├── powermgr.json
│   │   ├── print_service.json
│   │   ├── privacy_service.json
│   │   ├── push_manager_service.json
│   │   ├── quick_fix.json
│   │   ├── quickfix_engine.json
│   │   ├── resource_schedule_executor.json
│   │   ├── resource_schedule_service.json
│   │   ├── sandbox_manager_service.json
│   │   ├── sane_service.json
│   │   ├── scan_service.json
│   │   ├── security_collector.json
│   │   ├── security_component_service.json
│   │   ├── security_guard.json
│   │   ├── security_privacy_server.json
│   │   ├── sensors.json
│   │   ├── service_router.json
│   │   ├── sharing_service.json
│   │   ├── skytone_service.json
│   │   ├── softbus_server.json
│   │   ├── storage_manager.json
│   │   ├── super_privacy_server.json
│   │   ├── sys_installer_sa.json
│   │   ├── telephony.json
│   │   ├── telephony_trust.json
│   │   ├── testserver.json
│   │   ├── time_service.json
│   │   ├── token_sync_service.json
│   │   ├── ui_service.json
│   │   ├── updater_sa.json
│   │   ├── usb_service.json
│   │   ├── useriam.json
│   │   ├── voip_call_manager.json
│   │   ├── wallpaper_service.json
│   │   └── wifi_manager_service.json
│   ├── resource/
│   │   └── media/
│   │       └── effect/
│   │           └── EffectResources/
│   │               ├── AIRemove/
│   │               │   ├── InterSegModel
│   │               │   ├── RemoveModel2
│   │               │   └── RemoveModel3
│   │               ├── Beauty/
│   │               │   ├── style.hdcg
│   │               │   └── style.pcg2
│   │               ├── FilterLUT/
│   │               │   ├── baixi.png
│   │               │   ├── fendiao.png
│   │               │   ├── huidiao.png
│   │               │   ├── jingdian.png
│   │               │   ├── senxi.png
│   │               │   └── ziran.png
│   │               ├── Instance/
│   │               │   └── InstanceModel
│   │               ├── Matting/
│   │               │   ├── model1
│   │               │   ├── model2
│   │               │   └── model3
│   │               └── Saliency/
│   │                   ├── SaliencyModel0
│   │                   ├── SaliencyModel1
│   │                   ├── emb_aes_anchor.txt
│   │                   └── emb_aes_model.ms
│   ├── usr/
│   │   ├── ohos_icu/
│   │   │   └── icudt72l.dat
│   │   ├── ohos_locale_config/
│   │   │   ├── datetime/
│   │   │   │   ├── common.xml
│   │   │   │   ├── en.xml
│   │   │   │   └── zh.xml
│   │   │   ├── dialect_languages.xml
│   │   │   ├── phonenumber/
│   │   │   │   ├── CN.xml
│   │   │   │   ├── GB.xml
│   │   │   │   └── common.xml
│   │   │   ├── region/
│   │   │   │   └── supported_regions.xml
│   │   │   ├── supported_locales.xml
│   │   │   └── supported_locales_old.xml
│   │   └── ohos_timezone/
│   │       ├── device_city_dispname/
│   │       │   ├── bo_CN.xml
│   │       │   ├── root.xml
│   │       │   ├── ug.xml
│   │       │   ├── zh_HK.xml
│   │       │   ├── zh_Hans.xml
│   │       │   ├── zh_TW.xml
│   │       │   └── zz_ZX.xml
│   │       ├── device_timezones.xml
│   │       ├── ohos_city_dispname/
│   │       │   ├── root.xml
│   │       │   └── zh_Hans.xml
│   │       ├── ohos_timezones.xml
│   │       ├── tz_2023001-000360.dat
│   │       ├── tz_2023002-000090.dat
│   │       ├── tz_2023002-090180.dat
│   │       ├── tz_2023002-180270.dat
│   │       ├── tz_2023002-270360.dat
│   │       └── tzlookup.xml
│   └── variant/
│       └── phone/
│           ├── base/
│           │   └── etc/
│           │       ├── ability_runtime/
│           │       │   ├── allow_native_child_process_apps.json
│           │       │   ├── deeplink_reserve_config.json
│           │       │   └── resident_process_in_extreme_memory.json
│           │       ├── access_token/
│           │       │   └── accesstoken_config.json
│           │       ├── activate_config.json
│           │       ├── advertising/
│           │       │   └── ads_framework/
│           │       │       └── ad_service_config.json
│           │       ├── ams_extension_config.json
│           │       ├── app/
│           │       │   ├── backup_default_app.json
│           │       │   ├── default_app.json
│           │       │   ├── install_list.json
│           │       │   ├── install_list_capability.json
│           │       │   ├── install_list_permissions.json
│           │       │   └── uninstall_list.json
│           │       ├── app_external_data.json
│           │       ├── app_lock/
│           │       │   └── app_lock.json
│           │       ├── audio/
│           │       │   └── audio_param_config.xml
│           │       ├── backgroundtask/
│           │       │   └── config.json
│           │       ├── battery/
│           │       │   ├── battery_config.json
│           │       │   └── battery_vibrator.json
│           │       ├── bms/
│           │       │   ├── hmos_clone_app_list.xml
│           │       │   └── uninstall_check_white_list.xml
│           │       ├── clone/
│           │       │   └── add_item_hwlauncher_to_hmos.json
│           │       ├── cloud/
│           │       │   └── push_manager_service/
│           │       │       └── push_config.json
│           │       ├── control_center_toggles_name_map_table.json
│           │       ├── cust/
│           │       │   └── followx_file_list.cfg
│           │       ├── deviceprofile/
│           │       │   ├── dp_static_capability_cfg.json
│           │       │   ├── dp_static_info_cfg.json
│           │       │   └── dp_switch_status_cfg.json
│           │       ├── display_policy.json
│           │       ├── dlp_permission/
│           │       │   └── dlp_config.json
│           │       ├── efficiency_manager/
│           │       │   ├── component_sched_config.xml
│           │       │   ├── prevent_startability_whitelist.json
│           │       │   ├── process_resource_limit.json
│           │       │   ├── socperf_power_config.xml
│           │       │   └── suspend_manager_config.json
│           │       ├── ffrt_core/
│           │       │   └── qos_policy_config.xml
│           │       ├── form_fwk_module_white_list.json
│           │       ├── form_mapping_relation_table.json
│           │       ├── huaweiid/
│           │       │   └── huaweiid_config.json
│           │       ├── hw_launcher_default_workspace.json
│           │       ├── inputmethod/
│           │       │   └── inputmethod_framework_config.json
│           │       ├── launcher_icon_map_table.json
│           │       ├── multimodalinput/
│           │       │   └── ability_launch_config.json
│           │       ├── netmanager/
│           │       │   └── net_access_policy_config.json
│           │       ├── notification/
│           │       │   ├── common_event_config.json
│           │       │   └── notification_config.json
│           │       ├── oobe_blocking_migrate_tasks.json
│           │       ├── param/
│           │       │   └── hw_defaults.para
│           │       ├── param_service/
│           │       │   └── param_config.json
│           │       ├── power_config/
│           │       │   ├── power_mode_config.xml
│           │       │   ├── power_vibrator.json
│           │       │   └── power_wakeup.json
│           │       ├── preinstalled_sa.json
│           │       ├── proxy_authorization_uri.json
│           │       ├── resource/
│           │       │   └── media/
│           │       │       ├── audio/
│           │       │       │   └── ringtone_list_language.xml
│           │       │       └── haptics/
│           │       │           └── vibration_list_language.xml
│           │       ├── ressched/
│           │       │   ├── res_sched_config.xml
│           │       │   └── res_sched_plugin_switch.xml
│           │       ├── sandbox/
│           │       │   ├── appdata-sandbox-app.json
│           │       │   ├── appdata-sandbox.json
│           │       │   └── system-sandbox.json
│           │       ├── self_dev_module_advanced_migrate_policy.json
│           │       ├── self_dev_module_simple_migrate_policy.json
│           │       ├── settings/
│           │       │   └── hw_hmos_security_patch_url.json
│           │       ├── settings_data/
│           │       │   ├── de_setting_key_clone_map.json
│           │       │   ├── de_setting_key_migrate_map.json
│           │       │   ├── default_settings.json
│           │       │   └── sync_settings_list.json
│           │       ├── standby_service/
│           │       │   ├── device_standby_config.json
│           │       │   └── standby_strategy_config.json
│           │       ├── system_kits_config.json
│           │       ├── task_dependency.json
│           │       ├── uiextension_picker_config.json
│           │       ├── web/
│           │       │   └── web_config.xml
│           │       ├── xml/
│           │       │   └── benchmar_app.xml
│           │       └── xperf/
│           │           └── xperfcfg.json
│           └── china/
│               └── etc/
│                   ├── ability_runtime/
│                   │   └── deeplink_reserve_config.json
│                   ├── backgroundtask/
│                   │   └── config.json
│                   ├── battery/
│                   │   └── battery_vibrator.json
│                   ├── contacts/
│                   │   └── predefined_contact_data.json
│                   ├── deviceprofile/
│                   │   ├── dp_static_capability_cfg.json
│                   │   ├── dp_static_info_cfg.json
│                   │   └── dp_switch_status_cfg.json
│                   ├── form_fwk_module_white_list.json
│                   ├── param/
│                   │   └── hw_defaults.para
│                   ├── power_config/
│                   │   ├── power_vibrator.json
│                   │   └── power_wakeup.json
│                   └── thermal_config/
│                       └── thermal_common_config.xml
├── tmp/
├── updater/
├── vendor/
└── version/
```

### `userdata.img`

```plain
./
├── [SYS]/
│   └── Journal
└── lost+found/
```

### `vendor.img`

```plain
./
├── bin/
│   ├── aivdr.net
│   ├── hdf_devhost
│   ├── hdf_devmgr
│   ├── hostapd
│   └── wpa_supplicant
├── etc/
│   ├── NOTICE.txt
│   ├── audio/
│   │   ├── audio_concurrency_config.xml
│   │   ├── audio_policy_config.xml
│   │   └── audio_policy_config_new.xml
│   ├── battery/
│   │   └── battery_config.json
│   ├── fstab.hmos.emulator
│   ├── gnss/
│   │   └── security/
│   │       ├── hd_config
│   │       └── hd_config_test
│   ├── hdfconfig/
│   │   ├── a2dp_adapter_config.json
│   │   ├── alsa_adapter.json
│   │   ├── alsa_paths.json
│   │   ├── hdf_default.hcb
│   │   └── hdf_pnp.cfg
│   ├── hiview/
│   │   └── hisysevent.zip
│   ├── init/
│   │   ├── hdf_devhost.cfg
│   │   ├── hdf_devmgr.cfg
│   │   ├── hdf_peripheral.cfg
│   │   └── init.usb.configfs.cfg
│   ├── init.hmos.emulator.cfg
│   ├── init.hmos.emulator.usb.cfg
│   ├── keymap/
│   │   └── 0_0_0_ExpressKeyboard.TOML
│   ├── native_packages.xml
│   ├── param/
│   │   ├── build_info.para
│   │   ├── default.para
│   │   ├── hdf_devmgr.para.dac
│   │   ├── thermal.para
│   │   ├── thermal.para.dac
│   │   └── usb.para.dac
│   ├── power_config/
│   │   ├── power_mode_config.xml
│   │   └── power_suspend.json
│   ├── selinux/
│   │   ├── ignore_cfg
│   │   ├── prebuild_sepolicy/
│   │   │   ├── developer_policy
│   │   │   └── policy.31
│   │   ├── prebuild_sepolicy.system.cil.sha256
│   │   ├── prebuild_sepolicy.system_developer.cil.sha256
│   │   ├── public.cil
│   │   ├── public_common.cil
│   │   ├── public_developer.cil
│   │   ├── targeted/
│   │   │   └── contexts/
│   │   │       ├── file_contexts
│   │   │       ├── hdf_service_contexts
│   │   │       ├── parameter_contexts
│   │   │       └── service_contexts
│   │   ├── vendor.cil
│   │   ├── vendor_common.cil
│   │   ├── vendor_developer.cil
│   │   └── version
│   ├── ta_ctrl.ctrl
│   ├── thermal_config/
│   │   └── thermal_hdi_config.xml
│   └── ueventd.config
├── lib64/
│   ├── chipsetsdk/
│   │   ├── libaudio_bluetooth_hdi_proxy_server.z.so
│   │   ├── libcodec_component_manager_service_3.0.z.so
│   │   ├── libhdi_input.z.so
│   │   ├── libinput_interfaces_service_1.0.z.so
│   │   ├── liblbsservice_tagloc.z.so
│   │   ├── libmapper_service_1.0.z.so
│   │   ├── libmapper_service_1.2.z.so
│   │   └── libmetadata_service_1.1.z.so
│   ├── libagnss_interface_service_2.0.z.so
│   ├── liballocator_driver_1.0.z.so
│   ├── liballocator_service_1.0.z.so
│   ├── libasound.so
│   ├── libaudio_bluetooth_hdi_adapter_server.z.so
│   ├── libaudio_capture_adapter.z.so
│   ├── libaudio_manager_daudio_primary_service_1.0.z.so
│   ├── libaudio_manager_service_4.0.z.so
│   ├── libaudio_path_select.z.so
│   ├── libaudio_primary_driver.z.so
│   ├── libaudio_primary_impl_vendor.z.so
│   ├── libaudio_render_adapter.z.so
│   ├── libaudio_stub_4.0.z.so
│   ├── libbattery_driver.z.so
│   ├── libbattery_interface_service_2.0.z.so
│   ├── libbattery_stub_2.0.z.so
│   ├── libbluetooth_a2dp_hdi_driver.z.so
│   ├── libbluetooth_a2dp_stub_2.0.z.so
│   ├── libbluetooth_audio_session.z.so
│   ├── libbluetooth_audio_session_service_2.0.z.so
│   ├── libbluetooth_hci_hdi_driver.z.so
│   ├── libbluetooth_hci_stub_1.0.z.so
│   ├── libcamera_stub_1.0.z.so
│   ├── libcamera_stub_1.1.z.so
│   ├── libcamera_stub_1.2.z.so
│   ├── libcamera_stub_1.3.z.so
│   ├── libchip_controller_chip_interface_service_1.0.z.so
│   ├── libchip_hdi_driver.z.so
│   ├── libchip_stub_1.0.z.so
│   ├── libcodec_driver.z.so
│   ├── libcodec_hdi_omx_callback_type_service_impl.z.so
│   ├── libcodec_hdi_omx_server.z.so
│   ├── libcodec_image_driver.z.so
│   ├── libcodec_image_service_2.0.z.so
│   ├── libcodec_stub_3.0.z.so
│   ├── libcomposer_buffer_cache.z.so
│   ├── libdaudio_ext_driver.z.so
│   ├── libdaudio_hdf_utils.z.so
│   ├── libdaudio_manager_daudio_ext_service_2.0.z.so
│   ├── libdaudio_primary_driver.z.so
│   ├── libdaudio_stub_1.0.z.so
│   ├── libdaudioext_stub_1.0.z.so
│   ├── libdaudioext_stub_2.0.z.so
│   ├── libdcall_driver.z.so
│   ├── libdcall_hdf_utils.z.so
│   ├── libdcall_manager_service_1.0.z.so
│   ├── libdcall_stub_1.0.z.so
│   ├── libdisplay_buffer_stub_1.0.z.so
│   ├── libdisplay_buffer_stub_1.1.z.so
│   ├── libdisplay_buffer_stub_1.2.z.so
│   ├── libdisplay_buffer_vdi_impl.z.so
│   ├── libdisplay_buffer_vendor.z.so
│   ├── libdisplay_commontype_stub_1.0.z.so
│   ├── libdisplay_commontype_stub_1.1.z.so
│   ├── libdisplay_commontype_stub_2.0.z.so
│   ├── libdisplay_composer_driver_1.0.z.so
│   ├── libdisplay_composer_service_1.2.z.so
│   ├── libdisplay_composer_stub_1.0.z.so
│   ├── libdisplay_composer_stub_1.1.z.so
│   ├── libdisplay_composer_stub_1.2.z.so
│   ├── libdisplay_composer_vdi_impl.z.so
│   ├── libdisplay_composer_vendor.z.so
│   ├── libdisplay_gfx.z.so
│   ├── libdistributed_camera_hdf_service_1.1.z.so
│   ├── libdistributed_camera_host_config.z.so
│   ├── libdistributed_camera_provider_config.z.so
│   ├── libdistributed_camera_provider_stub_1.1.z.so
│   ├── libeffect_stub_1.0.z.so
│   ├── libface_auth_driver.z.so
│   ├── libface_auth_interface_service_2.0.z.so
│   ├── libface_auth_stub_2.0.z.so
│   ├── libfingerprint_auth_driver.z.so
│   ├── libfingerprint_auth_interface_service_2.0.z.so
│   ├── libfingerprint_auth_stub_2.0.z.so
│   ├── libgeofence_interface_service_2.0.z.so
│   ├── libgnss_hd.so
│   ├── libgnss_higeo_mgr_1105.so
│   ├── libgnss_higeo_mgr_1106.so
│   ├── libgnss_higeo_service_1105.so
│   ├── libgnss_higeo_service_1106.so
│   ├── libgnss_interface_service_2.0.z.so
│   ├── libhci_interface_service_1.0.z.so
│   ├── libhdf_host.z.so
│   ├── libhdf_platform.z.so
│   ├── libhdi_audio_a2dp_server.z.so
│   ├── libhdi_audio_bluetooth.z.so
│   ├── libhdi_input_udriver.z.so
│   ├── libhdi_light.z.so
│   ├── libhdi_light_impl.z.so
│   ├── libhdi_motion_impl.z.so
│   ├── libhdi_sensor.z.so
│   ├── libhdi_sensor_impl.z.so
│   ├── libhdi_vibrator.z.so
│   ├── libhdi_vibrator_impl.z.so
│   ├── libhdi_wlan_impl.z.so
│   ├── libhid_ddk_stub_1.0.z.so
│   ├── libhostapd_hdi_c_device.z.so
│   ├── libhostapd_hdi_client.z.so
│   ├── libhostapd_interface_service_1.0.z.so
│   ├── libhostapd_stub_1.0.z.so
│   ├── libhril.z.so
│   ├── libhril_hdf.z.so
│   ├── libhril_innerkits.z.so
│   ├── libimage_stub_2.0.z.so
│   ├── liblight_driver.z.so
│   ├── liblight_interface_service_1.0.z.so
│   ├── liblight_stub_1.0.z.so
│   ├── liblocation_agnss_hdi_driver.z.so
│   ├── liblocation_agnss_stub_2.0.z.so
│   ├── liblocation_geofence_hdi_driver.z.so
│   ├── liblocation_geofence_stub_2.0.z.so
│   ├── liblocation_gnss_ext_driver.z.so
│   ├── liblocation_gnss_ext_interface_service_1.0.z.so
│   ├── liblocation_gnss_ext_stub_1.0.z.so
│   ├── liblocation_gnss_hdi_driver.z.so
│   ├── liblocation_gnss_stub_2.0.z.so
│   ├── libmapper_driver_1.0.z.so
│   ├── libmemory_tracker_interface_service_1.0.z.so
│   ├── libmemorytracker_driver.z.so
│   ├── libmemorytracker_stub_1.0.z.so
│   ├── libmetadata_driver_1.1.z.so
│   ├── libmotion_driver.z.so
│   ├── libmotion_interface_service_1.1.z.so
│   ├── libmotion_stub_1.0.z.so
│   ├── libmotion_stub_1.1.z.so
│   ├── libnb_mac.z.so
│   ├── libnearlink_hci_hdi_driver.z.so
│   ├── libnearlink_hci_stub_1.0.z.so
│   ├── liboff_find_hdi_driver.z.so
│   ├── liboff_find_interface_service_1.0.z.so
│   ├── liboff_find_stub_1.0.z.so
│   ├── liboff_find_vendor.z.so
│   ├── libpin_auth_driver.z.so
│   ├── libpin_auth_interface_service_2.1.z.so
│   ├── libpin_auth_stub_2.1.z.so
│   ├── libpower_driver.z.so
│   ├── libpower_interface_service_1.2.z.so
│   ├── libpower_stub_1.0.z.so
│   ├── libpower_stub_1.2.z.so
│   ├── libril_driver.z.so
│   ├── libril_service_1.3.z.so
│   ├── libril_stub_1.1.z.so
│   ├── libril_stub_1.2.z.so
│   ├── libril_stub_1.3.z.so
│   ├── libril_vendor.z.so
│   ├── libsensor_driver.z.so
│   ├── libsensor_extra_stub_1.0.z.so
│   ├── libsensor_interface_service_2.1.z.so
│   ├── libsensor_stub_2.0.z.so
│   ├── libsensor_stub_2.1.z.so
│   ├── libsle_hci_interface_service_1.0.z.so
│   ├── libthermal_driver.z.so
│   ├── libthermal_interface_service_1.1.z.so
│   ├── libthermal_stub_1.1.z.so
│   ├── libudi_stub_1.0.z.so
│   ├── libusb_ddk_device.z.so
│   ├── libusb_ddk_driver.z.so
│   ├── libusb_ddk_dynamic_library_wrapper.z.so
│   ├── libusb_ddk_host.z.so
│   ├── libusb_ddk_service_1.0.z.so
│   ├── libusb_ddk_stub_1.0.z.so
│   ├── libusb_driver.z.so
│   ├── libusb_interface_service_1.1.z.so
│   ├── libusb_pnp_manager.z.so
│   ├── libusb_stub_1.0.z.so
│   ├── libusb_stub_1.1.z.so
│   ├── libusbfn.z.so
│   ├── libusbfn_cdcacm.z.so
│   ├── libusbfn_cdcecm.z.so
│   ├── libusbfn_mtp_driver.z.so
│   ├── libusbfn_mtp_interface_service_1.0.z.so
│   ├── libusbfn_mtp_stub_1.0.z.so
│   ├── libusbhost_acm.z.so
│   ├── libusbhost_acm_rawapi.z.so
│   ├── libusbhost_ecm.z.so
│   ├── libuser_auth_driver.z.so
│   ├── libuser_auth_interface_service_3.0.z.so
│   ├── libuser_auth_stub_3.0.z.so
│   ├── libvibrator_driver.z.so
│   ├── libvibrator_interface_service_1.3.z.so
│   ├── libvibrator_stub_1.1.z.so
│   ├── libvibrator_stub_1.2.z.so
│   ├── libvibrator_stub_1.3.z.so
│   ├── libwifi_driver_client.z.so
│   ├── libwifi_hal.z.so
│   ├── libwifi_hal_hw.z.so
│   ├── libwifi_hdi_c_device.z.so
│   ├── libwlan_interface_service_1.3.z.so
│   ├── libwlan_service_extend.z.so
│   ├── libwlan_stub_1.1.z.so
│   ├── libwlan_stub_1.2.z.so
│   ├── libwlan_stub_1.3.z.so
│   ├── libwpa.z.so
│   ├── libwpa_client_vendor.z.so
│   ├── libwpa_hdi_c_device.z.so
│   ├── libwpa_hdi_client.z.so
│   ├── libwpa_interface_service_1.1.z.so
│   ├── libwpa_stub_1.0.z.so
│   └── libwpa_stub_1.1.z.so
└── lost+found/
```
