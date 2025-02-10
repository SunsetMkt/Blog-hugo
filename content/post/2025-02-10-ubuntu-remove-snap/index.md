---
categories: Original
date: "2025-02-10T00:00:00Z"
tags:
    - Ubuntu
    - Linux
slug: ubuntu-remove-snap
title: 从 Ubuntu 中移除 Snap
---

参考[How to Remove and Disable Snap | Baeldung on Linux](https://www.baeldung.com/linux/snap-remove-disable)。

在 Ubuntu 24.04 (Server & WSL) 上测试通过。

## 步骤

### 检查是否有 Snap

```bash
$ snap --version
snap    2.67
snapd   2.67
series  16
ubuntu  24.04
kernel  6.8.0-52-generic

$ snap list
Name                 Version        Rev    Tracking       Publisher   Notes
canonical-livepatch  10.9.0         286    latest/stable  canonical✓  -
core20               20240911       2434   latest/stable  canonical✓  base
core22               20250110       1748   latest/stable  canonical✓  base
lxd                  5.0.4-497fe1e  31333  5.0/stable/…   canonical✓  -
snapd                2.67           23545  latest/stable  canonical✓  snapd
```

### 移除所有 Snap 包

根据`snap list`的输出，逐个移除所有 Snap 包。

```bash
sudo snap remove canonical-livepatch
sudo snap remove lxd
sudo snap remove core20
sudo snap remove core22
sudo snap remove snapd
```

确保已移除所有包。

```bash
$ snap list
No snaps are installed yet. Try 'snap install hello-world'.
```

### 移除 snapd

```bash
$ sudo systemctl stop snapd
Stopping 'snapd.service', but its triggering units are still active:
snapd.socket

$ sudo systemctl disable snapd
Removed "/etc/systemd/system/multi-user.target.wants/snapd.service".
Disabling 'snapd.service', but its triggering units are still active:
snapd.socket

$ sudo systemctl mask snapd
Created symlink /etc/systemd/system/snapd.service → /dev/null.
Masking 'snapd.service', but its triggering units are still active:
snapd.socket

$ sudo apt purge snapd -y
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  snapd* ubuntu-server-minimal*
...
Discarding preserved snap namespaces
Final directory cleanup
Removing extra snap-confine apparmor rules
Removing snapd cache
Removing snapd state

$ sudo apt-mark hold snapd
snapd set on hold.
```

注意：Server 版本中，`ubuntu-server-minimal`可能会被自动移除。在 24.04 版本中，这没有影响。

## 移除 Snap 包目录

```bash
rm -rf ~/snap
sudo rm -rf /snap
sudo rm -rf /var/snap
sudo rm -rf /var/lib/snapd
```

## 阻止 snapd 通过依赖（Canonical 的 Snap 包装器）安装

```bash
sudo cat <<EOF | sudo tee /etc/apt/preferences.d/nosnap.pref
Package: snapd
Pin: release a=*
Pin-Priority: -10
EOF
```

效果如下：

```bash
$ sudo apt install chromium-browser
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 chromium-browser : PreDepends: snapd but it is not installable
E: Unable to correct problems, you have held broken packages.
```
