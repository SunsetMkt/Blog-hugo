---
categories: Original
date: "2020-06-24T00:00:00Z"
description: 人脑可用的信息加密和传递方案
tags:
  - 文档
  - 说明
slug: a-method-of-safely-delivering-information-in-the-campus
title: 一种在校园内较安全地传递信息的方法
---

# 一种在校园内较安全地传递信息的方法

**sunsets-deprecated-username 2020.6.24**

**Summary:人脑可用的信息加密和传递方案**

## 加密方案：

### 一、针对中文的加密方案

#### (1)编码

1.通信双方规定汉字——数字对照表或使用同一版本字典（下文以此方法论述）。

2.以每一汉字为查找对象，在字典中寻找汉字实际所在位置（即词条所对应汉字所在页），并以此方法记下此汉字“页码 左/右(L/R) 自上向下数第 n 个词条”

> 例如：“你”表示为“944L1”

3.将信息中的每一个汉字依此方法转换并用\拼接

> 例如“你好”表示为“944L1\517L3”

#### (2)加密（对称加密）

1.通信双方随机生成固定密钥

令通信双方为 Amy 和 Bob

> 例：Amy 使用掷骰子的方式生成随机数 6
>
> Amy 使用掷骰子的方式生成第二个随机数 5
>
> Bob 使用掷骰子的方式生成随机数 4
>
> Bob 使用掷骰子的方式生成第二个随机数 1
>
> Amy 的密钥为 65
>
> Bob 的密钥为 41

2.Amy 和 Bob 交换密钥并记下对方和自己的固定密钥

通信前准备（生成当日 session）

Amy 和 Bob 约定在一固定位置使用纸张记录一特定整数（建议 1≤n≤9,n∈Z）

> 例：今日由 Amy 在砖块缝隙中插入写有“5”的纸片，Bob 前往约定地点观察后随即将纸张含“5”的部分分为数份并分别丢弃在不同随机位置。

> 此时，当日 session 为 5.

3.最终密钥为

> Amy:65\*5=325

> Bob:41\*5=205

4.使用密钥对信息加密

使用对方密钥加密自己发送的信息

> 例：Amy 向 Bob 发送“你好”
>
> 则“你好”编码为“944L1\517L3”
>
> 944L1 和 517L3 分别加密

Amy 使用 Bob 的密钥加密信息

> 944L1

> 944+205(固定密钥)=1149

若密钥个位数为奇数，L/R 保持不变。

若密钥个位数为偶数，L/R 调换。

> 1+5(session)=6

故 944L1 加密后为 1149L6

整条信息加密后为“1149L6\722L8”

### 二、针对英文字母和特殊字符的加密方案

#### (1)编码

1.通信双方规定字符——数字对照表或使用打乱后的 ASCII 打印字符编码表。

2.将每一字符用表转换并用@拼接

> 例："hi!"转换为"104@105@33"

#### (2)加密

同上文所述过程

Amy 向 Bob 发送"hi!"

使用 Bob 的密钥 205

> 104+205=309

> 105+205=310

> 33+205=238

则加密后的信息为"309@310@238"

### 三、混合信息的加密方案

将汉字与其他字符之间用@与\分隔，方案不限。

> 例如
>
> Amy 向 Bob 发送“你好 hi!”
>
> 加密文本为
>
> “1149L6\722L8@309@310@238”

### 四、信息校验值

在信息中随机插入描述时间和总字符数的文字，规定字符数不包括描述文本。

Amy 记录下当前时间为 7:00 和总字符数 5，最终原始信息为

“你好当前时间上午七点 hi!总字符数五”

### 五、最终加密和保存

将上文所述最终原始信息加密并书于纸上待用。

### 六、传递方案

#### 方案一：

直接由双方传递（特定地点或直接交换）

#### 方案二：

1.由发信方指定可信且互不相识的三人。

> 例：Amy 指定了不熟识但可靠的同学 Frad,Sam,Tim

并制定如下顺序 F→S→T

Amy 在信息末端补充经加密后的经处理的 Tim（处理为“蒂 m”）的名字

并将信纸密封（称为 T 层）并附上转交给 Bob 的提示和报酬，

再将所有文件密封（称为 S 层）并附上转交给 Tim 的提示和报酬，

再将所有文件密封（称为 F 层）并附上转交给 Sam 的提示和报酬，

再将所有文件密封（称为 A 层）保留备用。

Amy 与 Frad 约定只执行打开时所显示的转交提示并保证不向下一人告知 Amy 的相关信息并不接受任何多余的问题并向下一人告知相同规则。

Amy 使 Frad 传递信息，

在理想情况下，Frad 会打开 A 层发现转交给 Sam 的提示并执行，Sam 会打开 F 层发现转交给 Tim 的提示并执行，Tim 会打开 S 层发现转交给 Bob 的提示并执行。

Bob 在收到信息并打开 T 层后，需要先读取信息末端合理位数字符并解密确认转交者与加密信息一致，

否则应考虑加密系统泄漏的风险。

### 七、安保措施

(1)编码表应定期更换

(2)不要使用物理介质记录密钥

(3)英文编码表不应该直接使用 ASCII 编码表或任何现存的编码表且尽量不要使用非汉字字符

(4)使用笔迹参考验证对方身份

(5)定义特定字符组合为特定信息

| 字符串            | 信息                   | 特定字符组合 |
| ----------------- | ---------------------- | ------------ |
| Reset key         | 密钥作废               | 0L0L1        |
| Reset session     | session 作废           | 0L0L2        |
| Reset encoder     | 编码表作废             | 0L0L3        |
| Reset all         | 加密系统作废           | 0L0L4        |
| Untrusted Network | 传递网络不可信         | 0L0L5        |
| Leak              | 全部信息泄露           | 0L0L6        |
| No Reply(NR)      | 不要回复               | 0L0L7        |
| Critical          | 销毁所有文件并终止联系 | 0L0L8        |

(6)所有无价值文件必须销毁

方案优先级：

完全燃尽并粉碎＞分为数份并随机丢弃＞分为数份并食用

(7)此方案不适用于有强大算力的敌方组织

(8)此方案无法防备强大的社会工程学手段