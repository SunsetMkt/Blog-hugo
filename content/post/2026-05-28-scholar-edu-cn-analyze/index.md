---
categories: Repost
date: "2026-05-28T00:00:00Z"
tags:
    - 信息技术
slug: scholar-edu-cn-analyze
title: CERNET 国际学术资源访问专用通道 技术架构分析
---

[Source](https://web.archive.org/web/20260413003452/https://rentry.co/r9frf3i4/edit)

> Notice: The original content of this page has been removed as it is no longer applicable following recent changes to the underlying technical architecture. To ensure accuracy and avoid misinformation, we recommend that readers conduct independent research or consult the latest technical standards.
> 
> Edit: 29 Apr 2026 11:56 UTC

# CERNET 国际学术资源访问专用通道 技术架构分析

> Edit: 10 Apr 2026 17:00 UTC

---

#### 摘要

本文通过 DNS 解析测试、TLS 握手分析、路由追踪对比、源 IP 验证、流量中断行为观测等手段，对中国教育和科研计算机网（CERNET）部署的"国际学术资源访问专用通道"进行了系统性的技术分析。该系统基于 CERNET 主干网路由劫持、Apache Traffic Server（ATS）代理集群、IP Spoofing 配合 FlowSpec 流量工程实现了一套白名单制、具备全流量审计与实时内容篡改能力的学术资源访问代理体系。

---

## 一、系统组成与入口

该系统由以下组件构成：

- **门户站点**：`scholar.edu.cn`（WHOIS 注册方为清华大学），提供定制浏览器下载及相关资源入口
- **定制浏览器**：基于常规浏览器，未做深层修改，仅内置自签名根证书（`Scholar Root CA v1` 和 `Scholar Service V2`）和专用 DNS-over-HTTPS 地址
- **专用 DoH 服务器**：`doh.scholar.work`（ICP 备案主体为长安通信科技有限责任公司，系 CNCERT 全资子公司）
- **代理集群**：劫持使用 IP 段 `205.164.50.20x`（AS18779, EGI Hosting, Santa Clara），物理部署于 CERNET 主干网内部

客户端侵入性极低：不安装 VPN 客户端、不修改系统代理配置、不加载内核模块，仅通过根证书信任和 DNS 指向两项变更实现流量引导。

---

## 二、DNS 控制层

`doh.scholar.work` 维护一份域名白名单。白名单内域名（包括 Google、Wikipedia、GitHub、Docker Hub、YouTube 及部分学术出版商等）解析至 `205.164.50.20x` 段地址；白名单外域名返回正常解析结果。

这一层实现了域名级的选择性隧道（split tunneling），仅被批准的域名流量进入代理通道。

---

## 三、CERNET 主干网路由劫持

#### 3.1 路由对比测试

对代理 IP `205.164.50.201`（TCP 443）与同 AS 相邻网段 IP `205.164.49.254` 分别进行路由追踪，结果如下：

**205.164.50.201（代理入口，TCP 443）：**

```
$ nexttrace 205.164.50.201 -T -p 443

 1   *
 2   *
 3   *
 4   *
 5   *
 6   *.*.*.*  AS4538   [CERNET-CN]      edu.cn
                                               36.25 ms / 36.33 ms / 35.66 ms
 7   101.4.*.*   AS4538   [BJR-CERNET]     edu.cn
                                               35.37 ms / 36.02 ms / 35.43 ms
 8   101.4.112.97    AS4538   [BJR-CERNET]     edu.cn
                                               35.39 ms / 35.96 ms / * ms
 9   *
10   *
11   205.164.50.201  AS18779                   egihosting.com
                                               35.47 ms / 35.45 ms / 35.32 ms
```

**205.164.49.254（同 AS 邻段，ICMP）：**

```
$ nexttrace 205.164.49.254

 1   *
 2   *
 3   *
 4   *
 5   *
 6   *.*.*.*  AS4538   [CERNET-CN]      edu.cn
                                               37.87 ms / 36.63 ms / 36.34 ms
 7   101.4.*.*   AS4538   [BJR-CERNET]     edu.cn
                                               44.58 ms / 35.61 ms / 35.80 ms
 8   101.4.112.97    AS4538   [BJR-CERNET]     edu.cn
                                               35.75 ms / 54.16 ms / * ms
 9   *
10   101.4.114.194   AS4538   [BJR-CERNET]     edu.cn
                                               37.21 ms / 36.49 ms / 35.96 ms
11   101.4.116.122   AS4538   [BJR-CERNET]     edu.cn
                                               39.44 ms / 38.90 ms / 37.09 ms
12   101.4.117.250   AS4538   [BJR-CERNET]     edu.cn (Hong Kong)
                                               188.18 ms / 189.37 ms / 186.28 ms
13   38.88.196.185   AS174    cogentco.com (Los Angeles)
                                               223.01 ms / 226.03 ms / 221.46 ms
...
20   205.164.49.254  AS18779  egihosting.com (San Jose)
                                               234.14 ms / 234.17 ms / 234.44 ms
```

#### 3.2 分析

两个目标 IP 同属 AS18779，但 RTT 差异接近 200ms。`205.164.50.201` 在第 8 跳（CERNET 北京核心节点 `101.4.112.97`）之后即到达，实际 RTT 约 35ms，表明其从未离开中国大陆。`205.164.49.254` 则经过正常的国际路由（CERNET 香港 → Cogent 洛杉矶 → 圣何塞），RTT 约 234ms。

此外，该劫持仅对 TCP 443 端口生效，其他端口和协议组合不触发。

结论：CERNET 在其主干路由器上对 `205.164.50.200-205.164.50.209` 网段实施了基于端口的策略路由或 BGP 劫持，将该网段的 TCP 443 流量截留至部署在 CERNET 内部（推测位于北京）的代理集群。使用名义属于美国 AS 的地址空间可能是为了避免与 CERNET 自有地址段的路由策略产生冲突。

---

## 四、代理服务层

#### 4.1 代理软件识别

对不可达域名的连接超时响应暴露了代理软件特征：

```
$ curl https://anthropic.com/cdn-cgi/trace \
    --resolve anthropic.com:443:205.164.50.208 -k -v

* SSL connection using TLSv1.2 / ECDHE-ECDSA-AES256-GCM-SHA384
* Server certificate:
*  subject: C=CN; ST=CN; L=CN; O=Scholar Verify; OU=Scholar Verify;
*           CN=Scholar Service v1
*  issuer: C=CN; ST= ; O=Scholar Verify; CN=Scholar Root CA v1

< HTTP/1.1 502 Broken pipe
< Date: Thu, 09 Apr 2026 15:04:03 GMT
< Cache-Control: no-store
< Content-Type: text/html

<HTML>
<HEAD><TITLE>Could Not Connect</TITLE></HEAD>
<BODY BGCOLOR="white" FGCOLOR="black">
<H1>Could Not Connect</H1>
<HR>
<FONT FACE="Helvetica,Arial"><B>
Description: Could not connect to the requested server host.
</B></FONT>
</BODY>
```

该错误页面的格式、措辞和 HTTP 头部特征与 **Apache Traffic Server（ATS）** 的默认错误模板一致。

需注意，此处 `anthropic.com` 返回 502 并非"域名被拒绝访问"的表现。ATS 接受了 TLS 连接并完成了握手，说明该域名位于白名单内；502 是 ATS 无法连接至上游服务器（可能是远端主动拒绝或 TLS 握手失败）。真正不在白名单中的域名，ATS 在 TLS 握手阶段即拒绝连接，不会返回任何 HTTP 响应。

#### 4.2 TLS MITM

代理对客户端使用 `Scholar Service v1` 证书进行 TLS 终止。该证书的 SAN 列表包含大量域名。代理解密客户端请求后，以代理自身身份向上游目标发起独立的 TLS 连接。

该根证书文件如下：
```
-----BEGIN CERTIFICATE-----
MIIB8jCCAZmgAwIBAgIUOsvyWrIj7759dGH/sIE6CCFTIK4wCgYIKoZIzj0EAwIw
TzELMAkGA1UEBhMCQ04xCjAIBgNVBAgMASAxFzAVBgNVBAoMDlNjaG9sYXIgVmVy
aWZ5MRswGQYDVQQDDBJTY2hvbGFyIFJvb3QgQ0EgdjEwHhcNMjQwNzI2MTQzODEy
WhcNMzQwNzI0MTQzODEyWjBPMQswCQYDVQQGEwJDTjEKMAgGA1UECAwBIDEXMBUG
A1UECgwOU2Nob2xhciBWZXJpZnkxGzAZBgNVBAMMElNjaG9sYXIgUm9vdCBDQSB2
MTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBU5kf9XFR4xZk+JHcJKA87pJzZf
s6JTS0plq8z4v8EJama/U8oUT0R+YRYnKTZW8i/mlWLsVkVItz4/PqC5xWWjUzBR
MB0GA1UdDgQWBBTV1SWL9XEoqFCfSoGt9trPGa5gcDAfBgNVHSMEGDAWgBTV1SWL
9XEoqFCfSoGt9trPGa5gcDAPBgNVHRMBAf8EBTADAQH/MAoGCCqGSM49BAMCA0cA
MEQCIAr5M9lsqHuGhLUVym0uz5TO3f7EtnRhKM58wFYYxFp3AiAyTUZVv+xUiLqS
4TMCktIEOexZBu9uJCFoQMapO1DwAA==
-----END CERTIFICATE-----
```

一个旁证：客户端侧协商结果为 TLS 1.2，而当前主流站点（如 Cloudflare 托管的 anthropic.com）均支持 TLS 1.3。这说明客户端握手的对象是 ATS 而非目标服务器。

同时浏览器内包含一个未观察到使用的 `Scholar Service V2` 根：

```
-----BEGIN CERTIFICATE-----
MIIDUzCCAjugAwIBAgIUX41C+5l4ouW5VU5dca4Rpnbu0cIwDQYJKoZIhvcNAQELBQAwNjEXMBUGA1UECgwOU2Nob2xhciBWZXJpZnkxGzAZBgNVBAMMElNjaG9sYXIgU2VydmljZSBWMjAgFw0yNTA1MTYwMjE3MjJaGA8yMTI1MDQyMjAyMTcyMlowNjEXMBUGA1UECgwOU2Nob2xhciBWZXJpZnkxGzAZBgNVBAMMElNjaG9sYXIgU2VydmljZSBWMjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKZ6pY/GLHuU9yKgE5+BQneV7S1d/EAZZfwC2jvsXktNowkUnWqXOpVd6vKfZWXXp1FFr1pqmLpFFyaqtgJLjqPWwn09FTCbCesMoO1fzlZiz0Qa7eYL2zqEj5LMdfK3WgvflcugDwo7Mgsq3GvCRItHVIeZI7Ve4VHDvxQvxASMUVTPG9OkcgavXYmjd8h83rinQfp7/gVjjgDOa5pr92zJFLrD2GNAJf3/iuJF2xuGX5XG4lCaDPXnqfb+HMvGqf9QD9+6cngusoBtZ70j6igNsLYgdGIGNBlkJ6ySQH4Xeogs6+mTxuoAAr7kkLPq6m6N5ckM2qPpCTSzKaWEGicCAwEAAaNXMFUwDwYDVR0TAQH/BAUwAwEB/zATBgNVHSUEDDAKBggrBgEFBQcDATAOBgNVHQ8BAf8EBAMCAQYwHQYDVR0OBBYEFK+izkq0e+QEmJlDtcEhyDiOxnRBMA0GCSqGSIb3DQEBCwUAA4IBAQAZhbj/Er/xGeKLIibIILT1wyeDmBjv1dNEebZORTewDKrSxZ1SfU9P/dWLBKKlgUCnZYeCbVK2G4aIKT4k01RKRAVKoZf1YAq0bf+AEcxie9G+bv0zobLiU6u3DoGHhg4wpYB1ceQrIwe1lbTK+VbDdJdHTat6TKdmYtB3WU3pauK1Ey/xoYawlqRTFFhAS+6vDxOoAOiPXOzizrGidwZPjty8vW7mo06LOx6jKU1luE9BCGmE7V3VFrzu55Cjr7tiKCNbMw28dbLQeBKJ3DL5cnf76IvXrA0TJ+en4iWZY+dHB6Z1quqmwtTN2/IWhubOBIbSEcDuWYLmlfJ83uqw
-----END CERTIFICATE-----
```

---

## 五、MITM 内容审计与篡改

代理并非仅被动记录流量，而是在必要时对内容实施实时篡改。

#### 5.1 YouTube 访问控制

YouTube 域名处于白名单内，但 ATS 中间件对其实施了路径级的访问控制。几乎所有直接访问路径——包括首页、搜索功能、直接访问 `/watch` 页面——均被中间件拦截并返回 **HTTP 403 阻断页面**。

唯一可行的观看路径为：通过 `https://scholar.edu.cn/ytb/#/home` 提供的视频列表进入指定上传者的频道页面，再从频道页面打开视频。仅部分视频可正常播放。

这意味着代理在 HTTP 层对请求 URL 进行了实时匹配与过滤，而非简单的域名级放行/拦截。

#### 5.2 Wikipedia 首页内容删除

Wikipedia 部分条目页面可正常访问，但中文 Wikipedia 首页经过实时内容篡改：首页各栏目（特色列表、你知道吗、新闻动态、历史上的今天等）中的 **所有文字内容被移除**，仅保留配图和超链接框架。

该篡改具有实时性——各栏目的条目数量与正常版本一致，显示内容并非静态替换页面，而是代理对上游响应进行了实时的 DOM 级处理后再转发至客户端。

---

## 六、出口路由与 IP Spoofing + FlowSpec 机制

#### 6.1 出口 IP 行为差异

针对不同目标站点，代理的出站源 IP 表现出两种不同行为：

**保留用户原始 IP（Google、Wikipedia 等）：**

```
$ curl https://www.google.com/sorry/index \
    --resolve www.google.com:443:205.164.50.208 -k

IP address: 219.x.x.x
```

```
$ curl "https://en.wikipedia.org/w/api.php?action=query&meta=userinfo&format=json" \
    --resolve en.wikipedia.org:443:205.164.50.208 -k

{"query":{"userinfo":{"id":0,"name":"219.x.x.x","anon":true}}}
```

此处 `219.x.x.x` 为测试终端所在高校的 CERNET 出口 IP。该结果通过两种独立方法交叉验证：一是 Google 显示的客户端 IP；二是登录 Gmail 后在另一终端查看账号活动记录中的登录 IP，确认目标服务器确实看到的是该高校 IP 而非代理服务器地址。

**使用代理自有出口（Docker Hub、OpenAI 等）：**

```
$ curl https://hub.docker.com/cdn-cgi/trace \
    --resolve hub.docker.com:443:205.164.50.208 -k

...
ip=42.247.113.x
...
```

Docker Hub 看到的是另一个 CERNET 段 IP `42.247.113.x`，位于北京。对 OpenAI 的测试则显示使用了一个香港 PCCW 出口 IP。

#### 6.2 IP Spoofing + FlowSpec 流量工程模型

综合以上行为，推断代理出站采用 **IP Spoofing 配合 FlowSpec/策略路由的流量牵引** 实现源 IP 保留：

1. 用户与代理集群建立连接
2. 代理以用户原始 IP 为源地址（IP Spoofing）向目标服务器发起上游连接
3. 代理同时通过 FlowSpec 或等效的流量工程机制，在 CERNET 主干路由器上注入规则，将匹配 `(用户IP, 代理源端口)` 的回程流量牵引至代理集群
4. 目标服务器的响应报文目的地址为用户 IP，在途经 CERNET 主干时被 FlowSpec 规则捕获并导向代理
5. 代理接收上游响应，经审计/篡改后转发至用户

由于代理部署在 CERNET 主干网内部，CERNET 路由器不会对来自自身基础设施的源地址进行 uRPF/BCP38 过滤，IP Spoofing 可以成立。

#### 6.3 流量中断行为验证

在对 Wikipedia 进行大文件传输测试时，中途主动断开客户端连接，观测到以下现象：

- 客户端断开后，代理释放会话资源，对应的 FlowSpec 牵引规则随之撤销
- 上游 Wikimedia 服务器因连接突然中断而执行 TCP 重传
- 重传报文目的地址仍为用户原始 IP，但由于 FlowSpec 规则已撤销，这些报文不再被牵引至代理，而是沿正常路由直接送达用户终端
- 用户终端因此收到大量来自 Wikimedia 服务器的非预期报文

该现象与 IP Spoofing + FlowSpec 模型完全吻合：FlowSpec 规则存续期间，回程流量被代理截获；规则撤销后，回程流量回归正常路由直达用户。

#### 6.4 出口选择逻辑

综合各站点测试结果，代理出口策略推断如下：

| 条件 | 出口方式 |
|------|---------|
| 目标可经 CERNET 国际链路直达且不封锁教育网 IP | IP Spoofing 保留用户源地址，经 CERNET 国际出口直连 |
| 目标需特殊路由或对大陆 IP 有限制 | 使用代理自有出口节点（如北京 CERNET、香港 PCCW 等） |
| 域名不在白名单中 | TLS 握手阶段拒绝连接 |
| 域名在白名单中但上游不可达 | 返回 ATS 502 错误 |


#### 6.5 开个洞？：Google Cloud PTR 域名

测试发现 `*.bc.googleusercontent.com`（Google Cloud Engine 实例的 PTR 反向域名）的所有子域均位于代理白名单中。理论上，若攻击者控制一台 GCE 实例，可以令其 PTR 域名解析至该实例 IP，进而通过代理访问任意自定义服务。

然而，该 PoC 无法完成。因为未知原因，代理服务器无法与 GCP 实例正常建立 TCP 连接。在 GCP 上只能收到首个 SYN 包，然后双方都在疯狂重传，最后 502 Broken Pipe。推测为 FlowSpec 未命中或牵引规则有其他白名单限制。

---

## 七、访问控制与管理架构

根据公开信息检索，系统准入控制与域名管理可能涉及多个层级：

- **DoH 与策略控制**：`scholar.work` 由长安通信运营（CNCERT 全资公司），负责 DNS 白名单维护与核心策略
- **门户与主干网运维**：清华大学/赛尔网络作为 CERNET 运营方，负责 `scholar.edu.cn` 门户及主干路由配置
- **学校级准入**：各高校需逐级申请开通，部分学校需通过面向学生的需求问卷调查论证必要性。开通后，代理集群根据源 IP 所属学校进行认证

---

## 八、完整数据流

```
用户终端（内置 Scholar Root CA v1 + DoH → doh.scholar.work）
│
│  DNS 查询: www.google.com → 205.164.50.208
│
│  TLS ClientHello (SNI: www.google.com) → dst: 205.164.50.208:443
│
▼
校园网出口 → CERNET 主干网
│
│  主干路由器匹配 dst 205.164.50.20x + TCP 443
│  策略路由/BGP 劫持 → 导向代理集群
│
▼
ATS 代理集群（CERNET 北京节点）
│
│  ① TLS 终止：用 Scholar Service v1 证书与客户端握手
│  ② 请求解析：URL 级审计、过滤、内容篡改规则匹配
│  ③ 上游连接：向目标服务器发起独立 TLS 连接
│  ④ 注入 FlowSpec 规则牵引回程流量
│
├── 路径 A（源 IP 保留）: src=用户 CERNET IP
│   → CERNET 国际出口 → Google / Wikipedia / GitHub ...
│   ← 回程被 FlowSpec 牵引回代理
│
├── 路径 B（代理出口）: src=代理出口 IP
│   → 专用线路（香港 CERNET / PCCW）→ Docker Hub / OpenAI ...
│
├── 路径 C（内容篡改）:
│   → 上游响应经实时 DOM 处理 / URL 过滤后转发
│   （YouTube 路径级 403、Wikipedia 首页文字删除等）
│
└── 路径 D（上游不可达）:
    → ATS 返回 502 "Could Not Connect"
```

---

## 九、总结

该系统是一套部署于 CERNET 主干网层面的白名单制学术资源访问代理，其技术架构具有以下特点：

1. **网络层控制**：利用 CERNET 主干网运营方权限实施路由劫持和 FlowSpec 流量工程，无需在用户终端部署重客户端
2. **IP Spoofing 透明代理**：通过源地址伪造配合 FlowSpec 回程牵引，对部分目标站点实现源 IP 透传，代理对目标服务器接近透明
3. **全流量 MITM**：所有经代理的 HTTPS 流量均被终止和重新加密，具备完整的内容审计、过滤和实时篡改能力
4. **多级出口策略**：根据目标站点的可达性和限制情况，动态选择 IP Spoofing 直连或代理出口节点转发
5. **行政与技术双重管控**：域名白名单、学校准入、内容过滤策略等均由中央层面统一控制

*声明：本文所有测试仅通过正常访问和网络抓包进行现象观测，未对目标系统实施任何主动攻击、渗透或逆向工程。分析结论基于可观测现象的合理推断，仅供技术参考，存在不完善部分，不构成对系统实际实现的确定性描述。文中数据反映的是 2026 年 4 月初的系统状态，后续可能发生变更。所有测试均为真实执行，通过 LLM 进行文本润色和匿名化处理。*

