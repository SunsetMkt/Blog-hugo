---
categories: Repost
date: 2023-05-24T00:00:00Z
tags:
    - WinRAR
    - 信息技术
    - 密码学
    - 逆向工程
slug: winrar-keygen
title: “rarreg.key”是如何生成的？
---

[来源](https://github.com/bitcookies/winrar-keygen)，MIT License。

WinRAR 使用了基于 ECC 的签名算法来生成 `rarreg.key` 文件，其使用的签名算法是中国 SM2 数字签名算法的变体。与各种标准 ECDSA 不同的是，WinRAR 使用的椭圆曲线是一个基于复合域 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only) 上的曲线。

## 1. 复合域 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only)

基域 ![GF2p15-inlined](formula/GF2p15-inlined-light.svg#gh-light-mode-only)![GF2p15-inlined](formula/GF2p15-inlined-dark.svg#gh-dark-mode-only) 采用标准基（多项式基）来表达，采用的不可约多项式为：

<p align="center">
    <img src="formula/1-light.svg#gh-light-mode-only">
    <img src="formula/1-dark.svg#gh-dark-mode-only">
</p>

各项系数全部位于 ![GF2-inlined](formula/GF2-inlined-light.svg#gh-light-mode-only)![GF2-inlined](formula/GF2-inlined-dark.svg#gh-dark-mode-only)。设基域的标准基为：

<p align="center">
    <img src="formula/2-light.svg#gh-light-mode-only">
    <img src="formula/2-dark.svg#gh-dark-mode-only">
</p>

则位于基域 ![GF2p15-inlined](formula/GF2p15-inlined-light.svg#gh-light-mode-only)![GF2p15-inlined](formula/GF2p15-inlined-dark.svg#gh-dark-mode-only) 上的元素 ![A](formula/AA-inlined-light.svg#gh-light-mode-only)![A](formula/AA-inlined-dark.svg#gh-dark-mode-only) 可以用如下方式表达：

<p align="center">
    <img src="formula/3-light.svg#gh-light-mode-only">
    <img src="formula/3-dark.svg#gh-dark-mode-only">
</p>

---

复合域 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only) 的不可约多项式为：

<p align="center">
    <img src="formula/4-light.svg#gh-light-mode-only">
    <img src="formula/4-dark.svg#gh-dark-mode-only">
</p>

各项系数全部位于 ![GF2p15-inlined](formula/GF2p15-inlined-light.svg#gh-light-mode-only)![GF2p15-inlined](formula/GF2p15-inlined-dark.svg#gh-dark-mode-only)。设复合域的标准基为：

<p align="center">
    <img src="formula/5-light.svg#gh-light-mode-only">
    <img src="formula/5-dark.svg#gh-dark-mode-only">
</p>

则位于复合域 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only) 上的元素 ![B](formula/BB-inlined-light.svg#gh-light-mode-only)![B](formula/BB-inlined-dark.svg#gh-dark-mode-only) 可以用如下方式表达：

<p align="center">
    <img src="formula/6-light.svg#gh-light-mode-only">
    <img src="formula/6-dark.svg#gh-dark-mode-only">
</p>

---

为了方便表述我们用 255 比特的大数 ![D](formula/DD-inlined-light.svg#gh-light-mode-only)![D](formula/DD-inlined-dark.svg#gh-dark-mode-only) 来表示位于复合域 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only) 上的元素 ![B](formula/BB-inlined-light.svg#gh-light-mode-only)![B](formula/BB-inlined-dark.svg#gh-dark-mode-only)。它们的对应关系为：

<p align="center">
    <img src="formula/7-light.svg#gh-light-mode-only">
    <img src="formula/7-dark.svg#gh-dark-mode-only">
</p>

## 2. 复合域 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only) 上的椭圆曲线

曲线方程为：

<p align="center">
    <img src="formula/8-light.svg#gh-light-mode-only">
    <img src="formula/8-dark.svg#gh-dark-mode-only">
</p>

基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only) 为：

<p align="center">
    <img src="formula/9-light.svg#gh-light-mode-only">
    <img src="formula/9-dark.svg#gh-dark-mode-only">
</p>

基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only) 在曲线上的验证示例：

### 验证基点 G 在曲线上

#### 1. 复合域、曲线和基点 G

复合域为 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only)。

基域为 ![GF2p15-inlined](formula/GF2p15-inlined-light.svg#gh-light-mode-only)![GF2p15-inlined](formula/GF2p15-inlined-dark.svg#gh-dark-mode-only) ，即域中每个元素是一个 `15-bit` 的数字。扩展次数是 17，所以整个复合域元素可以看作是一个 17 项的多项式，每项都是 ![GF2p15-inlined](formula/GF2p15-inlined-light.svg#gh-light-mode-only)![GF2p15-inlined](formula/GF2p15-inlined-dark.svg#gh-dark-mode-only) 中的数。

曲线方程为：

<p align="center">
    <img src="formula/8-light.svg#gh-light-mode-only">
    <img src="formula/8-dark.svg#gh-dark-mode-only">
</p>

基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only) 为：

<p align="center">
    <img src="formula/9-light.svg#gh-light-mode-only">
    <img src="formula/9-dark.svg#gh-dark-mode-only">
</p>

#### 2. 转换基点 G

将基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only)（以大整数形式）转换为 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only)所需的 `15-bit` 小端表示形式。一个转换基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only) 的 Python 脚本如下：

```python
def to_field_repr(val, bits=15, count=17):
    mask = (1 << bits) - 1
    result = []
    for _ in range(count):
        result.append(val & mask)
        val >>= bits
    return result

def print_field(label, field_data):
    print(f"{label} = to_field([")
    for i in range(len(field_data)):
        print(f"    0x{field_data[i]:04X},", end="\n" if (i + 1) % 4 == 0 else " ")
    print("])")

Gx_int = 0x56fdcbc6a27acee0cc2996e0096ae74feb1acf220a2341b898b549440297b8cc
Gy_int = 0x20da32e8afc90b7cf0e76bde44496b4d0794054e6ea60f388682463132f931a7

Gx_field = to_field_repr(Gx_int)
Gy_field = to_field_repr(Gy_int)

print_field("Gx", Gx_field)
print()
print_field("Gy", Gy_field)
```

输出结果可以看到正是 WinRarConfig.hpp 文件中 435~456 行的内容：

```plain
Gx = to_field([
    0x38CC,     0x052F,     0x2510,     0x45AA,
    0x1B89,     0x4468,     0x4882,     0x0D67,
    0x4FEB,     0x55CE,     0x0025,     0x4CB7,
    0x0CC2,     0x59DC,     0x289E,     0x65E3,
    0x56FD
])

Gy = to_field([
    0x31A7,     0x65F2,     0x18C4,     0x3412,
    0x7388,     0x54C1,     0x539B,     0x4A02,
    0x4D07,     0x12D6,     0x7911,     0x3B5E,
    0x4F0E,     0x216F,     0x2BF2,     0x1974,
    0x20DA
])
```

#### 3. 验证基点 G 和 PK 是否在曲线上

一个验证基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only) 和 PK 是否在曲线上的 Python 脚本如下：

```python
#  GF(((2^15)^17))
def gf2_15_add(a, b):
    return a ^ b

def gf2_15_mul(a, b):
    # 模 x^15 + x + 1
    res = 0
    for i in range(15):
        if (b >> i) & 1:
            res ^= a << i
    # 模多项式 x^15 + x + 1
    for i in range(29, 14, -1):
        if (res >> i) & 1:
            res ^= 0b1000000000000011 << (i - 15)
    return res & 0x7FFF  # 15-bit mask

def gf2_15_poly_add(a, b):
    return [gf2_15_add(x, y) for x, y in zip(a, b)]

def gf2_15_poly_mul(a, b):
    res = [0] * 33
    for i in range(17):
        for j in range(17):
            res[i + j] ^= gf2_15_mul(a[i], b[j])
    return res

def gf2_15_17_mod(poly):
    # 模 y^17 + y^3 + 1
    for i in range(len(poly) - 1, 16, -1):
        if poly[i]:
            poly[i - 17] ^= poly[i]
            poly[i - 14] ^= poly[i]
            poly[i] = 0
    return poly[:17]

def gf2_15_17_mul(a, b):
    return gf2_15_17_mod(gf2_15_poly_mul(a, b))

def gf2_15_17_square(a):
    return gf2_15_17_mul(a, a)

def gf2_15_17_add(a, b):
    return gf2_15_poly_add(a, b)

def gf2_15_17_eq(a, b):
    return all(x == y for x, y in zip(a, b))

def is_on_curve(x, y, b):
    y2 = gf2_15_17_square(y)
    xy = gf2_15_17_mul(x, y)
    lhs = gf2_15_17_add(y2, xy)
    x2 = gf2_15_17_square(x)
    x3 = gf2_15_17_mul(x2, x)
    rhs = gf2_15_17_add(x3, b)
    return gf2_15_17_eq(lhs, rhs)

def to_field(arr):
    assert len(arr) == 17
    return arr[:]

# 参数定义
b = [0x00] * 17
b = [161] + [0]*16  # GF((2^15)^17) 中的常数元素，等价于 b[0] = 0xA1

Gx = to_field([0x38CC, 0x052F, 0x2510, 0x45AA, 0x1B89, 0x4468, 0x4882, 0x0D67,
               0x4FEB, 0x55CE, 0x0025, 0x4CB7, 0x0CC2, 0x59DC, 0x289E, 0x65E3, 0x56FD])
Gy = to_field([0x31A7, 0x65F2, 0x18C4, 0x3412, 0x7388, 0x54C1, 0x539B, 0x4A02,
               0x4D07, 0x12D6, 0x7911, 0x3B5E, 0x4F0E, 0x216F, 0x2BF2, 0x1974, 0x20DA])

PKx = to_field([0x3A1A, 0x1109, 0x268A, 0x12F7, 0x3734, 0x75F0, 0x576C, 0x2EA4,
                0x4813, 0x3F62, 0x0567, 0x784D, 0x753D, 0x6D92, 0x366C, 0x1107, 0x3861])
PKy = to_field([0x6C20, 0x6027, 0x1B22, 0x7A87, 0x43C4, 0x1908, 0x2449, 0x4675,
                0x7933, 0x2E66, 0x32F5, 0x2A58, 0x1145, 0x74AC, 0x36D0, 0x2731, 0x12B6])

# 验证
print("验证基点 G 是否在曲线上：", is_on_curve(Gx, Gy, b))
print("验证 PK 是否在曲线上：", is_on_curve(PKx, PKy, b))
```

基点 ![G](formula/GG-inlined-light.svg#gh-light-mode-only)![G](formula/GG-inlined-dark.svg#gh-dark-mode-only) 的阶 ![n](formula/n-inlined-light.svg#gh-light-mode-only)![n](formula/n-inlined-dark.svg#gh-dark-mode-only) 为：

<p align="center">
    <img src="formula/10-light.svg#gh-light-mode-only">
    <img src="formula/10-dark.svg#gh-dark-mode-only">
</p>

## 3. 消息哈希算法

设长度为 ![l](formula/l-inlined-light.svg#gh-light-mode-only)![l](formula/l-inlined-dark.svg#gh-dark-mode-only) 的消息为：

<p align="center">
    <img src="formula/11-light.svg#gh-light-mode-only">
    <img src="formula/11-dark.svg#gh-dark-mode-only">
</p>

则消息 ![M](formula/MM-inlined-light.svg#gh-light-mode-only)![M](formula/MM-inlined-dark.svg#gh-dark-mode-only) 的 SHA1 值为：

<p align="center">
    <img src="formula/12-light.svg#gh-light-mode-only">
    <img src="formula/12-dark.svg#gh-dark-mode-only">
</p>

其中 ![s0,4](formula/13-light.svg#gh-light-mode-only)![s0,4](formula/13-dark.svg#gh-dark-mode-only) 为 SHA1 算法输出时的 5 个状态值；将这 5 个状态值按照大端字节序依次输出，即为的 SHA1 哈希值 ![SHA1M](formula/14-light.svg#gh-light-mode-only)![SHA1M](formula/14-dark.svg#gh-dark-mode-only)。

WinRAR 在做完 SHA1 计算后，采用大数 ![h](formula/h-inlined-light.svg#gh-light-mode-only)![h](formula/h-inlined-dark.svg#gh-dark-mode-only) 作为 ECC 签名时消息的哈希：

<p align="center">
    <img src="formula/15-light.svg#gh-light-mode-only">
    <img src="formula/15-dark.svg#gh-dark-mode-only">
</p>

## 4. ECC 签名算法

设私钥为 ![k](formula/k-inlined-light.svg#gh-light-mode-only)![k](formula/k-inlined-dark.svg#gh-dark-mode-only)，公钥为 ![P](formula/PP-inlined-light.svg#gh-light-mode-only)![P](formula/PP-inlined-dark.svg#gh-dark-mode-only)，即：

<p align="center">
    <img src="formula/16-light.svg#gh-light-mode-only">
    <img src="formula/16-dark.svg#gh-dark-mode-only">
</p>

消息哈希为 ![h](formula/h-inlined-light.svg#gh-light-mode-only)![h](formula/h-inlined-dark.svg#gh-dark-mode-only)，则签名 ![(r,s)](formula/17-light.svg#gh-light-mode-only)![(r,s)](formula/17-dark.svg#gh-dark-mode-only) 为：

1. 生成随机数 ![Rnd](formula/Rnd-inlined-light.svg#gh-light-mode-only)![Rnd](formula/Rnd-inlined-dark.svg#gh-dark-mode-only)，满足 ![RND](formula/18-light.svg#gh-light-mode-only)![RND](formula/18-dark.svg#gh-dark-mode-only)。

2. 计算 ![r](formula/r-inlined-light.svg#gh-light-mode-only)![r](formula/r-inlined-dark.svg#gh-dark-mode-only)

    <p align="center">
        <img src="formula/19-light.svg#gh-light-mode-only">
        <img src="formula/19-dark.svg#gh-dark-mode-only">
    </p>

    其中 ![RNDGx](formula/20-light.svg#gh-light-mode-only)![RNDGx](formula/20-dark.svg#gh-dark-mode-only) 表示取 ![RNDG](formula/21-light.svg#gh-light-mode-only)![RNDG](formula/21-dark.svg#gh-dark-mode-only) 的 X 坐标，同时将 X 坐标从 ![GF2p15p17-inlined](formula/GF2p15p17-inlined-light.svg#gh-light-mode-only) ![GF2p15p17-inlined](formula/GF2p15p17-inlined-dark.svg#gh-dark-mode-only) 转换为大数。

    若 ![r=0](formula/22-light.svg#gh-light-mode-only)![r=0](formula/22-dark.svg#gh-dark-mode-only) 或者 ![rRnd](formula/23-light.svg#gh-light-mode-only)![rRnd](formula/23-dark.svg#gh-dark-mode-only) 则回到步骤 1。

3. 计算 ![s](formula/s-inlined-light.svg#gh-light-mode-only)![s](formula/s-inlined-dark.svg#gh-dark-mode-only)

    <p align="center">
        <img src="formula/24-light.svg#gh-light-mode-only">
        <img src="formula/24-dark.svg#gh-dark-mode-only">
    </p>

    若 ![s=0](formula/25-light.svg#gh-light-mode-only)![s=0](formula/25-dark.svg#gh-dark-mode-only) 则回到步骤 1。

4. 输出 ![(r,s)](formula/17-light.svg#gh-light-mode-only)![(r,s)](formula/17-dark.svg#gh-dark-mode-only)。

## 5. WinRAR 的私钥生成算法

该算法会利用长度为 ![l](formula/l-inlined-light.svg#gh-light-mode-only)![l](formula/l-inlined-dark.svg#gh-dark-mode-only) 的数据

<p align="center">
    <img src="formula/26-light.svg#gh-light-mode-only">
    <img src="formula/26-dark.svg#gh-dark-mode-only">
</p>

来生成私钥 ![k](formula/k-inlined-light.svg#gh-light-mode-only)![k](formula/k-inlined-dark.svg#gh-dark-mode-only)。

1. 设 6 个 32 位整数为 ![g0-5](formula/27-light.svg#gh-light-mode-only)![g0-5](formula/27-dark.svg#gh-dark-mode-only)，则有

 <p align="center">
     <img src="formula/28-light.svg#gh-light-mode-only">
     <img src="formula/28-dark.svg#gh-dark-mode-only">
 </p>

2. 令 ![g0=0](formula/29-light.svg#gh-light-mode-only)![g0=0](formula/29-dark.svg#gh-dark-mode-only)。

3. 如果 ![l!=0](formula/30-light.svg#gh-light-mode-only)![l!=0](formula/30-dark.svg#gh-dark-mode-only) 则计算 ![T](formula/TT-inlined-light.svg#gh-light-mode-only)![T](formula/TT-inlined-dark.svg#gh-dark-mode-only) 的 SHA1 值，并将状态值 ![Si](formula/31-light.svg#gh-light-mode-only)![Si](formula/31-dark.svg#gh-dark-mode-only) 赋值给 ![gi+1](formula/32-light.svg#gh-light-mode-only)![gi+1](formula/32-dark.svg#gh-dark-mode-only)：

    <p align="center">
        <img src="formula/33-light.svg#gh-light-mode-only">
        <img src="formula/33-dark.svg#gh-dark-mode-only">
    </p>

    否则，即 ![l=0](formula/34-light.svg#gh-light-mode-only)![l=0](formula/34-dark.svg#gh-dark-mode-only) 时，令：

    <p align="center">
        <img src="formula/35-light.svg#gh-light-mode-only">
        <img src="formula/35-dark.svg#gh-dark-mode-only">
    </p>

4. 把 ![g0](formula/36-light.svg#gh-light-mode-only)![g0](formula/36-dark.svg#gh-dark-mode-only) 作为计数器，自增 1。

    计算 SHA1 值：

    <p align="center">
        <img src="formula/37-light.svg#gh-light-mode-only">
        <img src="formula/37-dark.svg#gh-dark-mode-only">
    </p>

    取 ![S0](formula/38-light.svg#gh-light-mode-only)![S0](formula/38-dark.svg#gh-dark-mode-only) 的低 16 位并记为 ![Kg0](formula/39-light.svg#gh-light-mode-only)![Kg0](formula/39-dark.svg#gh-dark-mode-only)。

5. 步骤 4 再重复 14 次。

6. 重复执行完后会得到 ![k1-15](formula/40-light.svg#gh-light-mode-only)![k1-15](formula/40-dark.svg#gh-dark-mode-only)，则输出私钥

 <p align="center">
     <img src="formula/41-light.svg#gh-light-mode-only">
     <img src="formula/41-dark.svg#gh-dark-mode-only">
 </p>

## 6. WinRAR 的公钥和私钥

WinRAR 的私钥 ![k](formula/k-inlined-light.svg#gh-light-mode-only)![k](formula/k-inlined-dark.svg#gh-dark-mode-only) 为：

<p align="center">
    <img src="formula/42-light.svg#gh-light-mode-only">
    <img src="formula/42-dark.svg#gh-dark-mode-only">
</p>

该私钥是通过算法 5 生成的，其中数据 ![T](formula/TT-inlined-light.svg#gh-light-mode-only)![T](formula/TT-inlined-dark.svg#gh-dark-mode-only) 的长度为 0。

公钥 ![P](formula/PP-inlined-light.svg#gh-light-mode-only)![P](formula/PP-inlined-dark.svg#gh-dark-mode-only) 为：

<p align="center">
    <img src="formula/43-light.svg#gh-light-mode-only">
    <img src="formula/43-dark.svg#gh-dark-mode-only">
</p>

## 7. 授权文件"rarreg.key"的生成

授权文件的生成需要两个参数：

1. 用户名的 ANSI 字符串，不包括 null-terminator；记为

 <p align="center">
     <img src="formula/44-light.svg#gh-light-mode-only">
     <img src="formula/44-dark.svg#gh-dark-mode-only">
 </p>

2. 授权类型的 ANSI 字符串，不包括 null-terminator；记为

 <p align="center">
     <img src="formula/45-light.svg#gh-light-mode-only">
     <img src="formula/45-dark.svg#gh-dark-mode-only">
 </p>

`rarreg.key` 的生成算法如下：

1. 使用用户名 ![U](formula/UU-inlined-light.svg#gh-light-mode-only)![U](formula/UU-inlined-dark.svg#gh-dark-mode-only) 通过算法 5 计算出私钥 ![ku](formula/46-light.svg#gh-light-mode-only)![ku](formula/46-dark.svg#gh-dark-mode-only) 以及公钥 ![pu](formula/47-light.svg#gh-light-mode-only)![pu](formula/47-dark.svg#gh-dark-mode-only)，并将公钥 ![pu](formula/47-light.svg#gh-light-mode-only)![pu](formula/47-dark.svg#gh-dark-mode-only) 按照 SM2 压缩公钥格式以 Hex 字符串（ASCII 编码）的形式输出。得到的 Hex 字符串记为临时值 ![Temp](formula/Temp-inlined-light.svg#gh-light-mode-only)![Temp](formula/Temp-inlined-dark.svg#gh-dark-mode-only)。

    ![Temp](formula/Temp-inlined-light.svg#gh-light-mode-only)![Temp](formula/Temp-inlined-dark.svg#gh-dark-mode-only) 的长度应该为 64；若长度不足，则在前面补字符 `'0'`，直到长度为 64。

2. 令字符串 ![Data3](formula/Data3-inlined-light.svg#gh-light-mode-only)![Data3](formula/Data3-inlined-dark.svg#gh-dark-mode-only) 为

 <p align="center">
     <img src="formula/48-light.svg#gh-light-mode-only">
     <img src="formula/48-dark.svg#gh-dark-mode-only">
 </p>

3. 使用 ![Data3](formula/Data3-inlined-light.svg#gh-light-mode-only)![Data3](formula/Data3-inlined-dark.svg#gh-dark-mode-only) 通过算法 5 计算出私钥 ![kdata3](formula/49-light.svg#gh-light-mode-only)![kdata3](formula/49-dark.svg#gh-dark-mode-only) 以及公钥 ![pdata3](formula/50-light.svg#gh-light-mode-only)![pdata3](formula/50-dark.svg#gh-dark-mode-only)，并将公钥 ![pdata3](formula/50-light.svg#gh-light-mode-only)![pdata3](formula/50-dark.svg#gh-dark-mode-only) 按照 SM2 压缩公钥格式以 Hex 字符串（ASCII 编码）的形式输出。得到的 Hex 字符串记为 ![Data0](formula/Data0-inlined-light.svg#gh-light-mode-only)![Data0](formula/Data0-inlined-dark.svg#gh-dark-mode-only)。

    ![Data0](formula/Data0-inlined-light.svg#gh-light-mode-only)![Data0](formula/Data0-inlined-dark.svg#gh-dark-mode-only) 的长度应该为 64；若长度不足，则在前面补字符 `'0'`，直到长度为 64。

4. 令字符串 ![UID](formula/UID-inlined-light.svg#gh-light-mode-only)![UID](formula/UID-inlined-dark.svg#gh-dark-mode-only) 为

 <p align="center">
     <img src="formula/51-light.svg#gh-light-mode-only">
     <img src="formula/51-dark.svg#gh-dark-mode-only">
 </p>

5. 对授权类型 ![L](formula/LL-inlined-light.svg#gh-light-mode-only)![L](formula/LL-inlined-dark.svg#gh-dark-mode-only) 使用算法 4 得到签名 ![(rl,sl)](formula/52-light.svg#gh-light-mode-only)![(rl,sl)](formula/52-dark.svg#gh-dark-mode-only)，其中私钥见第 6 节。

    要求 ![rl](formula/53-light.svg#gh-light-mode-only)![rl](formula/53-dark.svg#gh-dark-mode-only) 和 ![sl](formula/54-light.svg#gh-light-mode-only)![sl](formula/54-dark.svg#gh-dark-mode-only) 的长度都不得超过 240 比特，否则重复该步骤。

6. 将 ![rl](formula/53-light.svg#gh-light-mode-only)![rl](formula/53-dark.svg#gh-dark-mode-only) 和 ![sl](formula/54-light.svg#gh-light-mode-only)![sl](formula/54-dark.svg#gh-dark-mode-only) 以 16 进制形式输出（无 `"0x"` 前缀），分别记为 ![SZrl](formula/55-light.svg#gh-light-mode-only)![SZrl](formula/55-dark.svg#gh-dark-mode-only) 和 ![SZsl](formula/56-light.svg#gh-light-mode-only)![SZsl](formula/56-dark.svg#gh-dark-mode-only)。

    若长度不满 60，则在前面补字符 `'0'`，直到长度为 60。

7. 令字符串 ![Data1](formula/Data1-inlined-light.svg#gh-light-mode-only)![Data1](formula/Data1-inlined-dark.svg#gh-dark-mode-only) 为

 <p align="center">
     <img src="formula/57-light.svg#gh-light-mode-only">
     <img src="formula/57-dark.svg#gh-dark-mode-only">
 </p>

8. 令字符串 ![Temp](formula/Temp-inlined-light.svg#gh-light-mode-only)![Temp](formula/Temp-inlined-dark.svg#gh-dark-mode-only) 为

    <p align="center">
        <img src="formula/58-light.svg#gh-light-mode-only">
        <img src="formula/58-dark.svg#gh-dark-mode-only">
    </p>

    对 ![Temp](formula/Temp-inlined-light.svg#gh-light-mode-only)![Temp](formula/Temp-inlined-dark.svg#gh-dark-mode-only) 使用算法 4 得到签名 ![(rTemp,sTemp)](formula/59-light.svg#gh-light-mode-only)![(rTemp,sTemp)](formula/59-dark.svg#gh-dark-mode-only)，其中私钥见第 6 节。

    要求 ![rTemp](formula/60-light.svg#gh-light-mode-only)![rTemp](formula/60-dark.svg#gh-dark-mode-only) 和 ![sTemp](formula/61-light.svg#gh-light-mode-only)![sTemp](formula/61-dark.svg#gh-dark-mode-only) 的长度都不得超过 240 比特，否则重复该步骤。

9. 将 ![rTemp](formula/60-light.svg#gh-light-mode-only)![rTemp](formula/60-dark.svg#gh-dark-mode-only) 和 ![sTemp](formula/61-light.svg#gh-light-mode-only)![sTemp](formula/61-dark.svg#gh-dark-mode-only) 以 16 进制形式输出（无 `"0x"` 前缀），分别记为 ![SZrTemp](formula/62-light.svg#gh-light-mode-only)![SZrTemp](formula/62-dark.svg#gh-dark-mode-only) 和 ![SZsTemp](formula/63-light.svg#gh-light-mode-only)![SZsTemp](formula/63-dark.svg#gh-dark-mode-only)。

    若长度不满 60，则在前面补字符 `'0'`，直到长度为 60。

10. 令字符串 ![Data2](formula/Data2-inlined-light.svg#gh-light-mode-only)![Data2](formula/Data2-inlined-dark.svg#gh-dark-mode-only) 为

    <p align="center">
        <img src="formula/64-light.svg#gh-light-mode-only">
        <img src="formula/64-dark.svg#gh-dark-mode-only">
    </p>

11. 对

    <p align="center">
        <img src="formula/65-light.svg#gh-light-mode-only">
        <img src="formula/65-dark.svg#gh-dark-mode-only">
    </p>

计算 CRC32 值，最终校验和为 CRC32 值的反。将校验和以 10 进制形式输出，若长度不满 10，则在前面补字符 `'0'`，直到长度为 10，记为 ![SZchecksum](formula/66-light.svg#gh-light-mode-only)![SZchecksum](formula/66-dark.svg#gh-dark-mode-only)。

12. 令字符串 ![Data](formula/Data-inlined-light.svg#gh-light-mode-only)![Data](formula/Data-inlined-dark.svg#gh-dark-mode-only) 为

    <p align="center">
        <img src="formula/67-light.svg#gh-light-mode-only">
        <img src="formula/67-dark.svg#gh-dark-mode-only">
    </p>

13. 格式化输出。
    - 固定文件头 `"RAR registration data"`，占一行。

    - 用户名，占一行。

    - 授权类型，占一行。

    - UID，占一行：

    <p align="center">
        <img src="formula/68-light.svg#gh-light-mode-only">
        <img src="formula/68-dark.svg#gh-dark-mode-only">
    </p>
    - 将 ![Data](formula/Data-inlined-light.svg#gh-light-mode-only)![Data](formula/Data-inlined-dark.svg#gh-dark-mode-only) 按照每行 54 个字符输出。

## 拓展阅读

[winrar-keygen](https://github.com/bitcookies/winrar-keygen)

[WinRAR-Extractor](https://github.com/lvtx/WinRAR-Extractor)
