---
categories: Original
date: 2024-02-17T00:00:00Z
tags:
  - Kaspersky
  - Windows
  - 信息技术
  - 杀毒软件
  - 软件
slug: kfa
title: 卡巴斯基免费版的 Windows 安装包下载 URL 获取
---

> [卡巴斯基中国大陆官方网站现已提供最新版卡巴斯基免费版应用程序下载，点击这里跳转到下载页面。](https://www.kaspersky.com.cn/downloads/free-antivirus)
>
> 这里提供的部分或全部信息已过时。

## 下载页面

目前，KFA 仅通过 Kaspersky Global 站点提供，且不公开提供下载页面。

下载页面 URL 为：

```plain
https://www.kaspersky.com/downloads/free-antivirus
```

## API

在 2024-02-17，此页面会通过一个 API 请求动态获取安装包下载链接：

[快速请求](https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=5003617&businesspurposes=Update&licensetiers=Free&sites=https%3A%2F%2Fwww.kaspersky.com&sites=https%3A%2F%2Fwww.kaspersky.com%2Fcarribean&sites=https%3A%2F%2Fwww.kaspersky.com%2Fisrael&sites=https%3A%2F%2Fwww.kaspersky.com%2Fsouth-east-asia&sites=https%3A%2F%2Fwww.kaspersky.com%2Findonesia&sites=https%3A%2F%2Fwww.kaspersky.com%2Fthe-european-union&sites=https%3A%2F%2Fwww.kaspersky.com%2Flatvia&sites=https%3A%2F%2Fwww.kaspersky.com%2Flithuania&sites=https%3A%2F%2Fwww.kaspersky.com%2Festonia&sites=https%3A%2F%2Fwww.kaspersky.com%2Funited-kingdom&sites=https%3A%2F%2Fwww.kaspersky.com%2Fcalifornia&sites=https%3A%2F%2Fwww.kaspersky.com%2Fbrazil)（使用浏览器访问此 API 可绕过反爬虫）

```plain
https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=5003617&businesspurposes=Update&licensetiers=Free&sites=https%3A%2F%2Fwww.kaspersky.com&sites=https%3A%2F%2Fwww.kaspersky.com%2Fcarribean&sites=https%3A%2F%2Fwww.kaspersky.com%2Fisrael&sites=https%3A%2F%2Fwww.kaspersky.com%2Fsouth-east-asia&sites=https%3A%2F%2Fwww.kaspersky.com%2Findonesia&sites=https%3A%2F%2Fwww.kaspersky.com%2Fthe-european-union&sites=https%3A%2F%2Fwww.kaspersky.com%2Flatvia&sites=https%3A%2F%2Fwww.kaspersky.com%2Flithuania&sites=https%3A%2F%2Fwww.kaspersky.com%2Festonia&sites=https%3A%2F%2Fwww.kaspersky.com%2Funited-kingdom&sites=https%3A%2F%2Fwww.kaspersky.com%2Fcalifornia&sites=https%3A%2F%2Fwww.kaspersky.com%2Fbrazil
```

它会返回一个包含各操作系统安装包下载链接的 JSON 对象。

观察参数，可以构建一个这样的请求，使其搜索简体中文版的免费安装包：

[快速请求](https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=5003617&businesspurposes=Update&licensetiers=Free&sites=https%3A%2F%2Fwww.kaspersky.com.cn)

```plain
https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=5003617&businesspurposes=Update&licensetiers=Free&sites=https%3A%2F%2Fwww.kaspersky.com.cn
```

题外话，对于 KSOS，有：

```plain
https://api-router.kaspersky-labs.com/downloads/search/v3/b2c?productcodes=2911399&businesspurposes=Update&licensetiers=KSOS&sites=https%3A%2F%2Fwww.kaspersky.com.cn
```

## API（已弃用）

曾经，此页面还会在下载前请求另一个 API：

```javascript
fetch("https://api-router.kaspersky-labs.com/pcp/PdcProxy/downloadurl", {
    referrer: "https://www.kaspersky.com/downloads/free-antivirus",
    body: '{"ApplicationId":[2269],"localization":["en-INT"],"Platform":"Windows","CppId":39971,"VersionNumber":"21.16.6.467","customizationParams":{"StartupScenario":"Free"}}',
    method: "POST",
    mode: "cors",
    credentials: "include",
});
```

但此 API 似乎已被废弃。

## KFA 激活码

在一些情况下，安装的 KFA 仍然会请求激活码：

简体中文版：`3SXCM-M9RJM-6985N-PWKP7`或`A23B5-44EXM-85MVF-KM2GQ`

英文版：`ZM4YW-FUTDY-W9B62-GSK26`

## 自动化

```python
# Install Kaspersky Free Antivirus for Windows
# This script requests for free antivirus installer from free-antivirus download page API and install it with a fake activation code.
# https://www.kaspersky.com/downloads/free-antivirus
import os
import subprocess
import tempfile

import requests

ALLOWED_LOCALES = ["en-INT", "zh-Hans-CN"]

# The FAKE_ACTIVATION_CODE skips the Kaspersky account login process when first run KFA.
# The code is hardcoded in the Kaspersky activation dll file and used only for free versions.
# We are only sure about codes for the two locales now.
FAKE_ACTIVATION_CODE = {
    "en-INT": "ZM4YW-FUTDY-W9B62-GSK26",
    "zh-Hans-CN": "3SXCM-M9RJM-6985N-PWKP7",
}

SITES = {
    "en-INT": "https://www.kaspersky.com",
    "zh-Hans-CN": "https://www.kaspersky.com.cn",
}


def get_installer_url(locale):
    site = SITES[locale]
    params = {
        "productcodes": "5003617",
        "businesspurposes": "Update",
        "licensetiers": "Free",
        "sites": [site],
    }
    response = requests.get(
        "https://api-router.kaspersky-labs.com/downloads/search/v3/b2c",
        params=params,
    )
    response.raise_for_status()
    versions = response.json()[0]["response"]["Windows"]["Kaspersky4Win"]["Downloader"][
        site
    ]
    max_version_key = max(
        versions, key=lambda k: float(k) if k.isdigit() else -1
    )  # Get the max version, usually only one version, just in case
    url = versions[str(max_version_key)][locale]["Link"]
    return url


def download_and_get_path(url):
    temp_dir = tempfile.mkdtemp()
    response = requests.get(url, stream=True)
    response.raise_for_status()
    file_name = url.split("/")[-1]
    with open(os.path.join(temp_dir, file_name), "wb") as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
    return os.path.join(temp_dir, file_name)


if __name__ == "__main__":
    if os.name != "nt":
        raise NotImplementedError("Only Windows is supported.")

    default_locale = "zh-Hans-CN"

    if len(os.sys.argv) > 1:
        locale = os.sys.argv[1]
        if locale not in ALLOWED_LOCALES:
            raise ValueError(f"Unsupported locale: {locale}")
    else:
        locale = default_locale

    if locale not in FAKE_ACTIVATION_CODE:
        raise ValueError(f"Unsupported locale: {locale}")

    print("This script will install Kaspersky Free Antivirus (KFA) for Windows.")
    print(
        "Attention: If you cancel the installation, do not use the installer shortcut on the desktop, it will not activate KFA automatically."
    )
    print(
        "If KFA asks for login or activation code, please use the activation code: "
        + FAKE_ACTIVATION_CODE[locale]
    )
    print(
        "If KFA requests for an email address, please close the window and open KFA again."
    )
    installer_url = get_installer_url(locale)
    print(installer_url)
    installer_path = download_and_get_path(installer_url)
    print(installer_path)

    subprocess.Popen(
        [
            installer_path,
            "/pSKIPPRODUCTCHECK=1",
            "/pACTIVATIONCODE=" + FAKE_ACTIVATION_CODE[locale],
        ],
    )
```

## 附：移动端安装

[How to download Kaspersky apps on Android and iOS](https://support.kaspersky.com/common/beforeinstall/16085)

没有发现在移动端安装杀毒软件的必要性。
