---
categories: Repost
date: 2026-02-02T00:00:00Z
tags:
    - 信息技术
    - 翻译
    - 逆向工程
slug: denuvo-analysis
title: Denuvo 分析
---

[来源](https://connorjaydunn.github.io/blog/posts/denuvo-analysis/)，CC BY-SA 4.0 协议，`gemini-3-pro-preview`翻译。

## 前言

本文仅供教育目的。Denuvo 可以说是这世上最成功的数字版权管理（DRM）解决方案，因此许多人都对它感兴趣。这篇博客包含了我大量的个人笔记以及与其他逆向工程师（见 [致谢](#致谢)）的通信内容，其中包含了关于 Denuvo 近期迭代的信息，很多内容我此前未见公开分享过。

我对 Irdeto 公司没有恶意，因此本文中某些敏感信息已被隐去。

## Denuvo

![](denuvo.logo.png)

Denuvo 是一种防篡改和数字版权管理系统（DRM）。它主要用于保护电子游戏等数字媒体免受盗版和逆向工程的侵害。与传统的 DRM 系统不同，Denuvo 采用了广泛的独特技术和检查机制来确认游戏代码和授权用户的完整性。

## 核心理念

Denuvo 背后的核心理念并不新颖。它只能被描述为一种“半在线” DRM，原因稍后会变得清晰。其大致流程如下：

**(1)** 用户首次启动 program.exe。

**(2)** 在任何原始游戏代码执行之前，Denuvo 会收集当前系统的硬件标识信息，并准备将其通过互联网发送。

**(3)** program.exe 随后将此硬件信息发送到 Denuvo 托管的服务器。服务器上发生了什么显然是个谜，但它很可能应用了可逆的数学函数，将“被偷取的常量”（稍后详述）与 program.exe 提供的硬件信息结合起来。然后，服务器将这些混合后的信息（我们称之为“许可证文件”）发送回 program.exe。

**(4)** 一旦 program.exe 收到许可证文件，就会创建一个本地副本，以便 program.exe 在未来的启动中引用；从而消除了再次进行在线请求的需要（因此前面使用了“半在线”一词）。

**(5)** program.exe 将被重定向到原始入口点（OEP），并开始执行实际的游戏代码。在此期间，program.exe 会在运行时收集硬件信息，并尝试从许可证文件中解密出“被偷取的常量”。这些解密后的常量随后将被用于执行“原始游戏指令”。

如果还没说清楚的话，实际上游戏最终会执行用户完整性检查。这是因为，如果在运行时收集的硬件信息与在 Denuvo 服务器上用于创建许可证信息的不一致，那么就会解密出错误的常量，游戏很可能会因此受损（大多数情况下会直接崩溃）。

## 更技术性的解释

本节将更深入地研究每种保护机制和用户完整性检查。请记住，Denuvo 的内容远不止这里列出的这些。

### 核心理念回顾

#### 许可证文件 (License File)

当 Denuvo 首次被添加到二进制文件中时，游戏中的某些函数会被选中变为“受保护”状态。这意味着该函数本身将在虚拟机内执行，并且某些指令的选定部分将从二进制文件中完全移除。许可证文件就是所有这些被移除的字节组合在一起，并通过可逆数学函数与用户的硬件标识相结合的产物。重要的是，所应用的任何操作都必须是可逆的，否则客户端将无法解密并获取原始常量。

#### 许可证 DWORDs (License DWORDs)

由于有多个被偷取的指令，在将执行权移交给 OEP 之前，Denuvo 会将许可证文件的选定部分写入分散在 `.vm` 段（`.vm` 是包含 VM 代码的 PE 段）周围的 DWORD 中。每个 DWORD（我们昵称其为“许可证 DWORD”）实际上就是从二进制文件中移除的单个指令与客户硬件标识信息结合后的产物。

#### 加密常量 / 移除指令示例

为了使这个概念具体化，我将展示一个指令是如何从二进制文件中被“移除”的例子。假设我们有以下函数：

```asm
add(int, int):
	push  rbp
	mov  rbp, rsp
	mov  DWORD  PTR [rbp-4], edi
	mov  DWORD  PTR [rbp-8], esi
	mov  edx, DWORD  PTR [rbp-4]
	mov  eax, DWORD  PTR [rbp-8]
	add  eax, edx
	pop  rbp
	ret

```

很容易看出，有些指令部分一旦编译后就永远不会改变。例如：

```nasm
mov  DWORD  PTR [rbp-4], edi

```

在这里，我们将 32 位寄存器 _EDI_ 的内容写入 _\[RBP-4\]_。在这种情况下，Denuvo 会从二进制文件中剥离常量 _-4_ 并将其存储在他们的服务器上。现在，任何人想要访问这个常量（这对于成功执行 _add(int, int)_ 是必须的），唯一的办法就是向 Denuvo 请求许可证文件，因为该文件包含许可证 DWORDs，其中含有加密的常量 _-4_（回忆一下，许可证文件包含与硬件标识混合的常量）。此外，Denuvo 会将整个 _add(int, int)_ 函数转换为只有他们的虚拟机能理解的字节码。在这个字节码中，存在着充当被移除指令“包装器（wrapper）”的代码。这个包装器负责以下工作：

**(1)** 在运行时收集相应的硬件信息（即那个与常量混合在一起的具体硬件信息）。

**(2)** 读取包含此特定函数加密常量的相应许可证 DWORD。

**(3)** 使用许可证 DWORD 和运行时收集的硬件标识执行一系列数学运算，以检索出值 _-4_。这应该是服务器所做操作的逆运算。

**(4)** 使用现在已解密的常量执行原始指令。

回顾前面的章节，如果在运行时收集的硬件标识与 Denuvo 服务器上用于加密常量的标识不一致，那么步骤 **(3)** 很可能会产生一个不等于 _-4_ 的结果；从而导致未定义行为。

### 用户完整性检查

我现在将重点介绍 Denuvo 用于验证执行受保护二进制文件的系统完整性的所有途径。由于保护机制的性质，每种检查至少有一个实例必须在请求许可证文件时发送到服务器。

#### Pre-OEP 检查 (Pre-OEP Checks)

阅读完前面的部分后，你可能会想，如果用户的硬件标识发生变化（例如 Windows 更新、新 CPU 等）会发生什么。Denuvo 考虑到这一点，使用了一种特殊的检查，这些检查就在将控制权移交给 OEP 之前执行。它们只是执行一些常量解密，但它们并不使用该常量来执行指令，而是检查它是否等于应有的值（只有这些检查会这样做，其他所有检查都假设解密的常量是正确的并据此行动）。如果结果与预期不符，Denuvo 将删除本地保存的许可证文件，并从 Denuvo 服务器请求一个新的；这基本上是重复 [核心理念](#核心理念) 中描述的过程。

#### KUSER_SHARED_DATA

[KUSER_SHARED_DATA](https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/ntddk/ns-ntddk-kuser_shared_data) 是一页（4096 字节）内存，[现在是只读的](https://msrc.microsoft.com/blog/2022/04/randomizing-the-kuser_shared_data-structure-on-windows/)，映射到在 Windows 机器上运行的每个进程中。它包含进程可能希望访问的信息，如 Windows 版本、Windows 构建号、系统时间等。它包含的许多信息可用于识别机器，因此 Denuvo 充分利用它来满足他们的需求。

Denuvo 利用以下字段：

---

- 0x026C : ULONG NtMajorVersion
- 0x02E8 : ULONG NumberOfPhysicalPages
- 0x02D0 : ULONG SuiteMask
- 0x0260 : ULONG NtBuildNumber
- 0x0264 : NT_PRODUCT_TYPE NtProductType
- 0x0268 : BOOLEAN ProductTypeIsValid
- 0x0270 : ULONG NtMinorVersion
- 0x0274 : BOOLEAN ProcessorFeatures \[0x40\]
- 0x026A : USHORT NativeProcessorArchitecture
- 0x03C0 : ULONG volatile ActiveProcessorCount

---

**_注意:_** 这些偏移量适用于 64 位机器。

#### CPUID

[CPUID](https://www.felixcloutier.com/x86/cpuid) 指令用于检索有关处理器的详细信息。这可能是 Denuvo 用于收集硬件信息的最常用方法。正如稍后将展示的，Denuvo 极尽全力保护其执行不被篡改。

Denuvo 使用以下参数：

---

- EAX=0x1 : 处理器信息和特性位
- EAX=0x80000001 : 扩展处理器信息和特性位
- EAX=0x80000002, 0x80000003, 0x80000004 : 处理器品牌字符串

---

#### SYSCALL

[SYSCALL](https://www.felixcloutier.com/x86/syscall) 指令在特权级 0 调用 OS 系统调用处理程序。你可以把它看作是用户模式程序与内核通信并请求服务的一种方式。

Denuvo 使用单一参数：

---

- 0x36 : NtQuerySystemInformation

---

#### NTDLL 检查

ntdll.dll 是“Windows 内核的用户模式接口”。它基本上提供了一个丰富的 API，用户模式应用程序可以使用它来请求内核代表它们执行操作。ntdll.dll 几乎被 Windows 加载器加载到每个 Windows 进程中，并且通常随 Windows 更新而改变；这使其成为 Denuvo 的理想目标。

##### NTDLL 函数检查

我没有像应该做的那样深入研究这个问题。但看起来 Denuvo 会基于 ntdll.dll 中某些函数的字节及其相对虚拟地址（RVA）来识别用户。

##### NTDLL 映像数据目录 (Image Data Directory)

如前所述，ntdll.dll 通常随 Windows 更新/版本发生细微变化，因此 Denuvo 针对其 [映像数据目录](https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-image_data_directory) 也是合情合理的。具体来说，访问了以下字段：

---

- 导出目录 RVA (Export Directory RVA)
- 导出目录大小 (Export Directory Size)
- 导入目录 RVA (Import Directory RVA)
- 导入目录大小 (Import Directory Size)
- 资源目录 RVA (Resource Directory RVA)
- 资源目录大小 (Resource Directory Size)
- 异常目录 RVA (Exception Directory RVA)
- 异常目录大小 (Exception Directory Size)
- 重定位目录 RVA (Relocation Directory RVA)
- 重定位目录大小 (Relocation Directory Size)

---

#### 进程环境块 (PEB)

[进程环境块](https://learn.microsoft.com/en-us/windows/win32/api/winternl/ns-winternl-peb) (PEB) 与 KUSER_SHARED_DATA 类似，都拥有信息。然而，PEB 包含的“全局”信息较少，更多的是“本地”信息。此外，系统上的每个进程都有自己独特的 PEB。另一个关键区别是应用程序可以自由覆盖 PEB 中的值，这使得它不是用于验证硬件信息的理想场所，但 Denuvo 仍然使用它。

Denuvo 利用以下字段：

---

- 0x0118 : ULONG OSMajorVersion
- 0x011C : ULONG OSMinorVersion
- 0x012C : ULONG ImageSubsystemMajorVersion
- 0x0130 : ULONG ImageSubsystemMinorVersion

---

**_注意:_** 这些偏移量适用于 64 位机器。

#### XGETBV

[XGETBV](https://www.felixcloutier.com/x86/xgetbv) 读取扩展控制寄存器（XCR）。关于具体的细节我没什么可说的，就其执行而言，这是一条非常小且独特的指令，可用于确定 CPU 的细节。

#### GetWindowsDirectoryW

[GetWindowsDirectoryW](https://learn.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getwindowsdirectoryw) 检索 Windows 目录的路径。

#### GetVolumeInformationW

[GetVolumeInformationW](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getvolumeinformationa) 将获取有关与特定根目录关联的文件系统和卷的信息。

#### GetComputerNameW

[GetComputerNameW](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-getcomputernamew) 检索本地计算机的 NetBIOS 名称。

#### GetUsernameW

[GetUsernameW](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-getusernamew) 检索与当前线程关联的用户的名称。在我们的例子中，这将是尝试运行 Denuvo 受保护二进制文件的用户的用户名。

### 代码完整性检查

#### 循环冗余校验 (CRC)

##### VM 处理程序 CRC (VM Handler CRC)

不出所料，Denuvo 会对重要的处理程序（例如 CPUID、SYSCALL 等）以及可能的其他代码执行扫描，以确保没有挂钩（Hook）/篡改发生。不幸的是，关于这些检查，我能说的就只有这些了。

##### 看似随机的 .VM 检查

Denuvo 经常通过读取 .VM 段中看似随机数量的字节来构建一个常量。然后，该常量将用于执行计算，如果常量发生变化，计算将会出错。以以下处理程序为例：

```nasm
mov edx, dword ptr ds:[rax+0x03] ; 读取下一个处理程序索引

movsx r13, word ptr ds:[0x00000001467FEE8D] ; 这里我们看到 Denuvo 从 .VM 代码中读取了一个“随机”字（word）

add r13, 0xFFFFFFFFFFFFDBAB ; 解密字

add rax,r13 ; 更新 vip (virtual instruction pointer)

mov qword ptr ds:[rcx+418],rax ; 保存 vip

lea rax,qword ptr ds:[0x14E2FD140] ; 将处理程序表的地址移入 rax

; 计算下一个处理程序并跳转到它
mov r12,qword ptr ds:[rax+rdx*8]
xchg qword ptr ss:[rsp],r12
ret

```

如果用户放置了断点、挂钩或篡改了存储在 _0x00000001467FEE8D_ 处的字（如果我没记错的话，这是一个 CPUID），那么 VM 很可能会最终执行一个随机的处理程序，因为 R13 中的结果值会不同；从而导致未定义行为。

### 杂项

#### 虚拟机 (VM)

我对虚拟机了解不多。我相信有不同类型的虚拟机。有时看起来很简单（例如处理程序表，没有滚动密钥等）。也许在未来的博客文章中我会讨论它？如果有人想聊聊这个，请随时联系我 ;)。

##### 位向量 (Bit Vector)

关于 Denuvo，我最喜欢的一点是，与传统的虚拟机（例如 VMP 和 Themida）不同，Denuvo 不会将值存储在连续内存中。相反，他们决定将寄存器值之类的内容其字节/位散布在各处。这使得观察正在发生的事情变得极其困难，尤其是当对所述值执行操作时。这大概是我能提供的 Denuvo 逐位写入值的最好例子：

```nasm
; 提取 EDI 的第 0x7 位
mov eax, edi
shr rax, 0x7
and eax, 0x1
mov qword ptr ss:[rsp+0x48], rax

; 提取 EDI 的第 0x8 位
mov eax, edi
shr rax, 0x8
and eax, 0x1
mov qword ptr ss:[rsp+0xB0], rax

; 提取 EDI 的第 0x9 位
mov eax, edi
shr rax, 0x9
and eax, 0x1
mov qword ptr ss:[rsp+0x40], rax

; 提取 EDI 的第 0xC 位
mov eax, edi
shr rax, 0xC
and eax, 0x1
mov qword ptr ss:[rsp+0xB8], rax
...

```

#### 随机性

随机性是保护机制的基石。没有它，修补检查将变得极其简单。与其他保护方案不同，Denuvo 不利用任何 API 或 x86 [RDRAND](https://www.felixcloutier.com/x86/rdrand) 指令。相反，Denuvo 选择使用原生寄存器中的值。这是天才之举，因为输入基本上保证会改变，无论是因为映像基址重定位，还是可能是游戏中的玩家角色失去了生命值。

Denuvo 使用的一种方法（也许是唯一一种）是基于原生游戏寄存器值使用模运算生成随机性。这是一个来自 Denuvo 受保护可执行文件的真实示例：

**_注意:_** 我无法提供汇编代码，因为它极其混淆且难以辨认，但这个 C 演示应该足够了。

```c
if (VCTX[0] % 9 == 0) // VCTX -> VM 上下文
{
	CPUID_A(); // cpuid 处理程序
}
else
{
	CPUID_B(); // cpuid 处理程序
}

```

在这个例子中，_CPUID_A_ 和 _CPUID_B_ 在语义上是相同的。决定执行哪一个并没有区别。

#### 混合布尔算术 (MBA)

混合布尔算术 (MBA) 是一种将表达式转换为难以理解和分析的表示形式的方法；同时保持原始表达式的语义。具体来说，它用算术和布尔运算（例如 ^, |, +, -, ~, &）替换所述表达式。

##### 示例

**(1)** x + y = (x & y) + (x | y)

**(2)** x | y = x + y + 1 + (~x | ~y)

**(3)** x - y = (x ^ -y) + 2\*(x & -y) = ((x ^ -y) & 2\*(x & -y)) + ((x ^ -y) | 2\*(x & -y)) = ((x ^ -y) & 2\*(x & -y)) + ((x ^ -y) + 2\*(x & -y) + 1 + (~(x ^ -y) | ~2\*(x & -y)))

**注意:** 这些表达式的等价性可以通过定理证明器（如 [Z3](https://github.com/Z3Prover/z3)）来证明。

如果仔细观察，你会发现为了得到 **(3)**，我们只是反复将 _x | y_ 和 _x + y_ 的恒等式代入 _x - y_ 中。这是生成 MBA 表达式的一种常见且简单的方法。其他或许“更好”的生成 MBA 的方法超出了本博客文章的范围，包括线性代数和抽象代数。但如果你感兴趣，请参阅以下内容：

- [zhou2007](https://link.springer.com/chapter/10.1007/978-3-540-77535-5_5)
- [SiMBA](https://arxiv.org/pdf/2209.06335)
- [Justus Polzin Blog](https://plzin.github.io/posts/mba)
- [MBA-Blast](https://www.usenix.org/system/files/sec21-liu-binbin.pdf)

**注意:** 本博客仅提供对概念和思想的高层次理解，但提到了相关定理的引用，供希望严谨探究的读者参考。

关于 Denuvo，他们大量使用了 MBA。具体来说，他们利用了 zhou2007 的结果：

**_(zhou2007, 定理 2)_** 设 e 为位运算表达式，则 e 具有非平凡的线性 MBA 表达式。

**_(zhou2007, 命题 1)_** BA-代数中的每个运算（可以将其视为布尔和算术运算符，例如 ^, |, +, -, ~, >, <, &, ……）都可以由高次多项式 MBA 表达式表示。

**_注意:_** 同样，这里省略了严谨性。阅读上述论文以获取更多信息。

这两个结果实际上意味着我们可以将大多数 x86 指令重写为 MBA 表达式。例如，取 x86 指令：

```nasm
mov rax, rbx

```

重写为：

```nasm
; y = ((~x)&(x))|y
push rax
not rax
and qword ptr [rsp], rax
pop rax
or rbx

```

根据 zhou2007 (定理 2)，我们可以对重写形式中存在的 BA-代数指令应用进一步的 MBA 变换；使表达式进一步复杂化。这个例子是故意简化过的，这里有一些原始的 Denuvo VM 代码：

```nasm
mov r8b,byte ptr ds:[rcx+2BA]
and r11d,r8d
mov al,byte ptr ds:[rcx+65]
shld r11d,r8d,18
lea rbx,qword ptr ds:[rcx+2BD]
ror r8d,8
or r8d,r11d
lea rbx,qword ptr ds:[rbx+564C320C]
shl eax,18
mov dl,byte ptr ds:[rbx-564C320C]
ror eax,18
and eax,FF
rcr r8d,18
mov r9b,byte ptr ds:[rcx+14A]
ror edx,8
and r8d,FF
sar edx,18
sub ebx,ebx
mov r10d,FF
or ebx,r9d
shr r9d,8
and edx,FF
and ebx,r10d
rcl ebx,18
sub r10d,r10d
sub r11d,r11d
xor r9d,ebx
mov r10b,byte ptr ds:[rcx+AD]
lea rbx,qword ptr ds:[rcx-5DF0648A]
shr r9d,18
mov r11b,byte ptr ds:[rcx+39D]
push rsi
not rsi
or rsi,FFFFFFFFFFFFFF00
and qword ptr ss:[rsp],rsi
pop rsi
or sil,byte ptr ds:[rcx+C7]
push rdi
not rdi
and byte ptr ss:[rsp],dil
pop rdi
rol esi,18
or dil,byte ptr ds:[rbx+5DF0669F]
mov dil,dil
mov rbx,FF
shl edi,18
shr edi,18
shr esi,18
and rdi,rbx
pushfq
push r15
mov r15,FFFFFFFFFFFF0000
shl r15,20
add r15,0
mov rbx,r15
pop r15
popfq
push rax

```

不再那么简单了。MBA 的进一步应用包括软件水印和常量隐藏，这两者都可以在 zhou2007 (_第 4 节，保护方法_) 中找到。虽然我不确定 Denuvo 是否利用了这些。

#### 即时解密+重加密 CPUID (On-The-Fly Decrypted+Re-Encrypted CPUID)

有时，Denuvo 不会在 VM 中执行标准的 CPUID 处理程序，而是在 VM 段中解密一个 CPUID，执行它，然后迅速将其再次加密。我想这样做是为了防止破解者对每个 CPUID 指令进行模式匹配，尽管这可能对破解者没什么帮助。实时加密和解密的使用有一个有趣的影响：

VM 与不同的执行线程共享处理程序。因此，如果两个线程试图同时执行同一个加密的 CPUID 会发生什么？如果不明显的话，这需要一个 [自旋锁 (spin-lock)](https://en.wikipedia.org/wiki/Spinlock) 来防止线程导致未定义行为。然而，自旋锁必须很快，因为否则你就是在执行已经混淆的代码，而现在你还是在循环中执行它。为了补救这一点，Denuvo 选择完全不让主自旋锁逻辑受到任何混淆。因此，破解者可以对自旋锁进行模式扫描，这反过来告诉了他们加密的 CPUID 在哪里（或多或少是这样）。Denuvo 对此的解决方案是什么？加密自旋锁，而这又需要另一个自旋锁。

我不知道他们是否加密了那个监控加密自旋锁的自旋锁（而那个加密自旋锁正在监控加密的 CPUID 指令），但这样想并不牵强。

Denuvo 的自旋锁模式：

```nasm
push r0
push r1
mov r1, 0x1
xor r0, r0
spinlock_entry:
lock cmpxchg dword ptr ds:[SPINLOCK_BOOL], r1 ; SPINLOCK_BOOL 是一个开关字节
je spinlock_exit
pause
jmp spinlock_entry
spinlock_exit:
pop r1
pop r0
... ; 最终会跳转到解密后的代码

```

#### 反基于异常的挂钩 (Anti-Exception-Based Hooking)

在早期，攻击 Denuvo 的主要手段是修补每一个硬件信息检查，确保它返回后续计算正确常量所需的正确信息。常用的一种方法是通过基于异常的挂钩来拦截 CPUID 和 SYSCALL 指令。虽然可以使用 Windows API 优雅地 [注册向量化异常处理程序](https://learn.microsoft.com/en-us/windows/win32/api/errhandlingapi/nf-errhandlingapi-addvectoredexceptionhandler)，但主要的方法是用 [UD2](https://mudongliang.github.io/x86/html/file_module_x86_id_318.html) 指令替换每个 CPUID 和 SYSCALL 指令，以触发 INVALID_OPCODE_EXCEPTION，并挂钩 KiUserExceptionDispatcher 以在需要时将正确的硬件信息加载到正确的寄存器中。

这种方法效果很好，主要是因为 CPUID 和 SYSCALL 都是两个字节长，所以你只需要修补一个字节就可以挂钩它们。然而，Denuvo 实施了一个相当天才的补丁。在执行 CPUID 处理程序之前，Denuvo 会将重要值写入栈空间高处的“未使用”区域。然后，稍后它会检索此值以进行重要的计算，如果值不存在，将导致未定义行为。这破坏了任何基于异常的挂钩，因为大多数时候触发异常时，Windows 会将 [EXCEPTION_RECORD](https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-exception_record) 写入栈空间高处的未使用区域。你大概明白这是怎么回事了。现在，每当通过异常挂钩 CPUID 时，那个重要值就会被 EXCEPTION_RECORD 覆盖，导致后续出现未定义行为。我相信如果将调试器附加到进程并在异常处理方面设置某些标志，这是可以绕过的，但由于随机性的存在，修补每个硬件检查的方法仍然很麻烦。

## 破解

### 修补硬件 ID 检查

击败这种保护的初次尝试可能是手动修补每个硬件标识检查，确保每次都返回正确的硬件信息（这里的“正确”意味着将解密出正确常量的硬件信息）。然而，如上节所述，这被证明极其困难。你面对的不仅是复杂的 CRC，还有随机性，这使得单个人几乎不可能找到所有的检查，更不用说修补它们了。

### 修补常量解密

与修补所有硬件信息检查类似，人们可以针对常量解密例程，返回正确的常量，而不是由于硬件信息不匹配而解密出的错误常量。此外，这种方法比修补所有硬件信息检查要合理得多，因为目前在这些例程上不存在 CRC 或随机性。然而，在约 10,000,000+ 条 x86 指令的跟踪记录中，找到单个常量解密并不是一项简单的任务。

### binary.exe 的完全还原

仅从这种方法的名称就能看出它有多困难。这将需要修复/去虚拟化（devirt）成千上万条指令。尽管如此，我知道有一个案例，一个 Denuvo 受保护的二进制文件被 [完全还原](https://i.imgur.com/6M6KBiO.png)（这可能是我见过的最好的破解）。

### 管理程序 (Hypervisor)

一种稍微高级一点的方法是利用管理程序（Hypervisor）来欺骗所有必要的硬件信息。这当然说起来容易做起来难。虽然 AMD 和 Intel 都支持拦截 CPUID 和 XGETBV 等指令的能力，而且从管理程序级别进行 SYSCALL 挂钩也不太难。我想唯一的难点在于修补 NTDLL 和 KUSER 检查而不破坏计算机上的其他应用程序。实际上，我很惊讶目前还没有一个基于点对点（p2p）管理程序的解决方案。

## 结语

Denuvo 在其领域绝对是一头猛兽。它一次又一次地证明了其保护游戏数月甚至数年的能力。无论是因为懒惰的破解者，还是能力不足，Denuvo 显然已经胜出。在我看来，Denuvo 短期内不会消失。

## 致谢

感谢这些很棒的人提供的所有帮助：

- Sp\*\*\*\*\*\*\*\*
- Ma\*\*\*\*
- Mk\*\*\*
- Az\*\*\*\*

## MkDEV hypervisor

[来源](https://cs.rin.ru/forum/viewtopic.php?t=153950)，`gemini-3-pro-preview`翻译。

该虚拟机监视器（Hypervisor）方案背后的思路是，它解决了一些通过其他方法很难修补的检测，无论是由于 Denuvo 的代码路径随机化、自修改代码还是完整性检查。
下面列出了已修补的检测项。假设当这些检测被排除在外时，P2P（破解组）将能够处理本 .txt 末尾列出的其余环境检测，因为那些更难进行保护。
更多详情请参阅虚拟机监视器源代码（SimpleSvm 的修改版本）和本 .txt 底部的资源部分。该代码仅用于概念验证（PoC），比较凌乱。

我们希望人们能接手这项工作，改进该方法，并带回 Day 0 发布。

---

### [SGDT]

SGDT 指令对于虚拟化客户机有一个专用的拦截功能。为了便于拦截，CR4.UMIP 已被禁用。CR4 的读写操作会被拦截，以向 Windows PatchGuard 掩盖这一更改。

当目标游戏进程中命中此指令拦截时，客户机的 GdtrBase 和 GdtrLimit 会被更改为一个固定值，禁用中断，设置陷阱标志（trap flag），并在执行下一条指令前修正 GDTR 值。

在 SGDT 指令期间可能遇到的 #PF、#AC 和 #SS 异常，当 GDTR 加载了欺骗值时会被拦截，否则可能导致三重错误（triple fault）。

请注意，这样做只是为了避免对指令进行解码，NoirVisor 中有一种对指令进行解码的不同方法可用。

如果需要，SIDT、SLDT 和 STR 指令也有专用的拦截功能。

---

### [CPUID]

CPUID 指令对于虚拟化客户机有一个专用的拦截功能。
对于子叶 0x1、0x80000002、0x80000003 和 0x80000004，当在目标游戏进程中执行该指令时（通过 CR3 检查），虚拟机监视器会使用生成许可证的那台 PC 的值作为结果。
通过检查 RIP，欺骗仅限于文件中的 Denuvo 部分，但这并非必要，并且可能导致漏掉检测，因为 Denuvo 可能会在其区域之外执行 CPUID。

---

### [SYSCALL]

虚拟化客户机的 LSTAR 被重定向到我们的钩子（hook），该钩子会检查 CR3 是否匹配目标进程、执行指令的 RIP、EAX 中的值（针对 syscall）以及 SYSTEM_INFORMATION_CLASS。如果根据这些检查不需要欺骗 SYSCALL 结果，钩子将跳转到原始操作系统的 LSTAR。如果需要欺骗，
我们将 NRIP 从 RCX 移动到 RAX，并将 RCX 移动到我们在已修补游戏进程中的 syscall 处理程序地址，然后执行 64 位 SYSRET。注意，在跳回 NRIP 之前需要修正 RCX 以保存 NRIP，否则钩子可能会暴露。

限制欺骗仅针对 Denuvo 部分的 RIP 检查是不需要的。

源码中包含了避免 AMD 处理器上 PatchGuard 检测的必要代码，已在配备 Zen 3 CPU 的 Win11 24H2 build 26100.3037 上测试。

请注意，x86 引入 FRED 可能需要调整代码，并且 Windows PatchGuard 未来可能会有更多的检测方法来防止钩子，但这些发展都不会成为根本性障碍，因为最终提供此指令结果的是操作系统（总是可以修补的），而不是 CPU 直接提供的。

---

### [KUSER_SHARED_DATA]

目标游戏进程 KUSER 页面的 PFN 被替换为一个可共享 PE 节（section）的 PFN，该节保存了来自生成许可证的那台 PC 的 KUSER。
该节中的动态字段随后由虚拟机监视器驱动程序（HyperHide 有此实现）或已修补的游戏进程持续更新。
详情请在源码中搜索 KUSER_SPOOF。

---

### [XGETBV]

并非所有 x86 处理器都支持 XGETBV 指令，这一点在 CPUID.01H:ECX.XSAVE[bit 26] 中指明。
如果 XSAVE 位为 0，Denuvo 不会执行此指令，因为这在非常旧的 CPU 上可能导致 #UD 异常。
虚拟机监视器提供的 CPUID 结果使该位为 0，因此该检测被修补。

如果 Denuvo 忽略 CPUID 位，该指令的潜在值也是有限的，因为结果取决于 XCR 寄存器，而后者基于 CPU 的特性集。可以为所有少数潜在结果请求许可证，
这是修补该检测的另一种方法。

---

### [AMD/Intel 或不同 CPU 代际之间的浮点不精确性以及具有未定义标志状态的指令]

如果 Denuvo 利用了这些差异，可以在不同的 CPU 上生成新许可证来解决这些检测。注意，这并非是每个 CPU 都会提供不同结果的情况，而是取决于架构，因此可能性的数量再次相当有限。

---

### [未被虚拟机监视器修补的检测]

NTDLL 检测，如图像数据目录（Image Data Directory）、导入 RVA（Import RVAs）
GetVolumeInformationW
GetWindowsDirectoryW
GetComputerNameW
GetUsernameW
CryptGetProvParam - 用于获取 CryptoAPI CSP UniqueKeyContainer，该容器随操作系统版本和 MachineGuid 变化
PEB +118, 11C, 12C, 130, B8

---

### 资源

AMD64 Architecture Programmer's Manual, Volumes 1-5:

<https://docs.amd.com/v/u/en-US/40332-PUB_4.08>

Intel® 64 and IA-32 Architectures Software Developer’s Manual Combined Volumes 1, 2A, 2B, 2C, 2D, 3A, 3B, 3C, 3D, and 4:

<https://cdrdv2-public.intel.com/868137/325462-089-sdm-vol-1-2abcd-3abcd-4.pdf>

NoirVisor:

<https://github.com/Zero-Tang/NoirVisor>

HyperHide:

<https://github.com/Air14/HyperHide>

SimpleSvm:

<https://github.com/tandasat/SimpleSvm>

Denuvo Analysis:

<https://connorjaydunn.github.io/blog/posts/denuvo-analysis>

### SimpleSvm Patch

```patch
diff --git a/README.md b/README.md
index c7ec76b..93c0a3b 100644
--- a/README.md
+++ b/README.md
@@ -5,7 +5,7 @@ Introduction
 -------------
 
 SimpleSvm is a minimalistic educational hypervisor for Windows on AMD processors.
-It aims to provide small and explanatory code to use Secure Virtual Machine (SVM),
+It aims to provide small and explanational code to use Secure Virtual Machine (SVM),
 the AMD version of Intel VT-x, with Nested Page Tables (NPT) from a windows driver.
 
 SimpleSvm is inspired by SimpleVisor, an Intel x64/EM64T VT-x specific hypervisor
@@ -14,8 +14,8 @@ for Windows, written by Alex Ionescu (@aionescu).
 
 Supported Platforms
 ----------------------
-- Windows 10 and later (x64)
-- AMD processors with SVM and NPT support
+- Windows 10 x64 and Windows 7 x64
+- AMD Processors with SVM and NPT support
 
 
 Resources
diff --git a/SimpleSvm/SimpleSvm.cpp b/SimpleSvm/SimpleSvm.cpp
index 77c32dd..98c250c 100644
--- a/SimpleSvm/SimpleSvm.cpp
+++ b/SimpleSvm/SimpleSvm.cpp
@@ -7,12 +7,82 @@
 
     @copyright  Copyright (c) 2017-2020, Satoshi Tanda. All rights reserved.
  */
+
+/*!
+
+*  Additional comments and modifications related to HWID spoofing are not affiliated with the author.
+
+*/
+
 #define POOL_NX_OPTIN   1
+
+#define KUSER_SPOOF
+
 #include "SimpleSvm.hpp"
 
 #include <intrin.h>
 #include <ntifs.h>
+#include <ntddk.h>
 #include <stdarg.h>
+#include "ia32.h"
+
+#ifdef KUSER_SPOOF
+
+#include "./amd.h"
+#include "./pte.h"
+#include "./global.h"
+#include "./runtime.h"
+#include "./other.h"
+#include "./utils.h"
+#include "./utils.cpp"
+
+EXTERN_C
+NTSTATUS
+NTAPI
+PsAcquireProcessExitSynchronization(
+    _In_ PEPROCESS Process
+);
+
+EXTERN_C
+VOID
+NTAPI
+PsReleaseProcessExitSynchronization(
+    _In_ PEPROCESS Process
+);
+
+#endif
+
+#define UMIP                (1UL << 11)
+#define X86_FLAGS_TF        (1U<<8)
+#define X86_FLAGS_IF        (1U<<9)
+#define SingleStep          (1U<<14)
+#define BranchSingleStep    (1U<<1)
+
+UINT64 OrigLSTAR;
+void(*sysPtr);
+UINT64 Decoy;
+UINT64 Decoy2;
+UINT64 TempPTR;
+UINT64 TargetCR3;
+UINT64 TargetSysHandler;
+BOOLEAN UMIPSystem;
+UINT64 RegionBase;
+UINT64 RegionEnd;
+
+#ifdef KUSER_SPOOF
+
+PEPROCESS TargetProcess = nullptr;
+HANDLE TargetProcessId;
+PVOID NewKuserSharedData;
+UINT64 OriginalKuserPFN;
+BOOLEAN NotifyRoutineActive;
+BOOLEAN StopCounterThread = FALSE;
+BOOLEAN CounterInit = 0x0;
+HANDLE CounterThreadHandle = NULL;
+#define KUSER_SHARED_DATA_USERMODE 0x7FFE0000
+#define KUSER_SHARED_DATA_KERNELMODE 0xFFFFF78000000000
+
+#endif
 
 EXTERN_C DRIVER_INITIALIZE DriverEntry;
 static DRIVER_UNLOAD SvDriverUnload;
@@ -63,7 +133,7 @@ typedef struct _PML4_ENTRY_2MB
         } Fields;
     };
 } PML4_ENTRY_2MB, *PPML4_ENTRY_2MB,
-  PDPT_ENTRY_2MB, *PPDPT_ENTRY_2MB;
+  PDPT_ENTRY_2MB, * PPDPT_ENTRY_2MB;
 static_assert(sizeof(PML4_ENTRY_2MB) == 8,
               "PML4_ENTRY_1GB Size Mismatch");
 
@@ -171,7 +241,7 @@ typedef struct _PML4E_TREE
 {
     DECLSPEC_ALIGN(PAGE_SIZE) PDPT_ENTRY_2MB PdptEntries[512];
     DECLSPEC_ALIGN(PAGE_SIZE) PD_ENTRY_2MB PdEntries[512][512];
-} PML4E_TREE, *PPML4E_TREE;
+} PML4E_TREE, * PPML4E_TREE;
 
 typedef struct _SHARED_VIRTUAL_PROCESSOR_DATA
 {
@@ -213,23 +283,23 @@ static_assert(sizeof(VIRTUAL_PROCESSOR_DATA) == KERNEL_STACK_SIZE + PAGE_SIZE *
 
 typedef struct _GUEST_REGISTERS
 {
-    UINT64 R15;
-    UINT64 R14;
-    UINT64 R13;
-    UINT64 R12;
-    UINT64 R11;
-    UINT64 R10;
-    UINT64 R9;
-    UINT64 R8;
-    UINT64 Rdi;
-    UINT64 Rsi;
-    UINT64 Rbp;
-    UINT64 Rsp;
-    UINT64 Rbx;
-    UINT64 Rdx;
-    UINT64 Rcx;
     UINT64 Rax;
-} GUEST_REGISTERS, *PGUEST_REGISTERS;
+    UINT64 Rcx;
+    UINT64 Rdx;
+    UINT64 Rbx;
+    UINT64 Rsp;
+    UINT64 Rbp;
+    UINT64 Rsi;
+    UINT64 Rdi;
+    UINT64 R8;
+    UINT64 R9;
+    UINT64 R10;
+    UINT64 R11;
+    UINT64 R12;
+    UINT64 R13;
+    UINT64 R14;
+    UINT64 R15;
+} GUEST_REGISTERS, * PGUEST_REGISTERS;
 
 typedef struct _GUEST_CONTEXT
 {
@@ -238,13 +308,30 @@ typedef struct _GUEST_CONTEXT
 } GUEST_CONTEXT, *PGUEST_CONTEXT;
 
 
+typedef struct _CRDecodeAssist
+{
+    union
+    {
+        UINT64 AsUInt64;
+        struct
+        {
+            UINT64 GPR :       4;  // [0:3]
+            UINT64 Zero :      59; // [4:62]
+            UINT64 Indicator : 1;  // [63]
+        } Fields;
+    };
+} CRDecodeAssist, *PCRDecodeAssist;
+
+
 //
 // x86-64 defined constants.
 //
-#define IA32_MSR_PAT    0x00000277
-#define IA32_MSR_EFER   0xc0000080
+#define IA32_MSR_PAT      0x00000277
+#define IA32_MSR_EFER     0xC0000080
+#define IA32_MSR_LSTAR    0xC0000082
+#define IA32_MSR_DEBUGCTL 0x000001D9
 
-#define EFER_SVME       (1UL << 12)
+#define EFER_SVME         (1UL << 12)
 
 #define RPL_MASK        3
 #define DPL_SYSTEM      0
@@ -299,8 +386,6 @@ static PVOID g_PowerCallbackRegistration;
 
     @param[in]  Format - The format string to print.
  */
-#pragma prefast(push)
-#pragma prefast(disable : 26826, "C-style variable arguments needed for DbgPrint.")
 _IRQL_requires_max_(DISPATCH_LEVEL)
 _IRQL_requires_same_
 static
@@ -320,7 +405,6 @@ SvDebugPrint (
                           argList);
     va_end(argList);
 }
-#pragma prefast(pop)
 
 /*!
     @brief      Allocates page aligned, zero filled physical memory.
@@ -356,7 +440,8 @@ SvAllocatePageAlingedPhysicalMemory (
     //
     NT_ASSERT(NumberOfBytes >= PAGE_SIZE);
 
-    memory = ExAllocatePool2(POOL_FLAG_NON_PAGED, NumberOfBytes, 'MVSS');
+#pragma prefast(disable : 28118 __WARNING_ERROR, "FP due to POOL_NX_OPTIN.")
+    memory = ExAllocatePoolWithTag(NonPagedPool, NumberOfBytes, 'MVSS');
     if (memory != nullptr)
     {
         NT_ASSERT(PAGE_ALIGN(memory) == memory);
@@ -412,12 +497,13 @@ SvAllocateContiguousMemory (
     boundary.QuadPart = lowest.QuadPart = 0;
     highest.QuadPart = -1;
 
-    memory = MmAllocateContiguousNodeMemory(NumberOfBytes,
-                                            lowest,
-                                            highest,
-                                            boundary,
-                                            PAGE_READWRITE,
-                                            MM_ANY_NODE_OK);
+#pragma prefast(disable : 30030, "No alternative API on Windows 7.")
+    memory = MmAllocateContiguousMemorySpecifyCacheNode(NumberOfBytes,
+                                                        lowest,
+                                                        highest,
+                                                        boundary,
+                                                        MmCached,
+                                                        MM_ANY_NODE_OK);
     if (memory != nullptr)
     {
         RtlZeroMemory(memory, NumberOfBytes);
@@ -444,146 +530,1005 @@ SvFreeContiguousMemory (
 /*!
     @brief          Injects #GP with 0 of error code.
 
-    @param[in,out]  VpData - Per processor data.
- */
-_IRQL_requires_same_
-static
-VOID
-SvInjectGeneralProtectionException (
-    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData
-    )
-{
-    EVENTINJ event;
+    @param[in,out]  VpData - Per processor data.
+ */
+_IRQL_requires_same_
+static
+VOID
+SvInjectGeneralProtectionException (
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData
+    )
+{
+    EVENTINJ event;
+
+    //
+    // Inject #GP(vector = 13, type = 3 = exception) with a valid error code.
+    // An error code are always zero. See "#GP-General-Protection Exception
+    // (Vector 13)" for details about the error code.
+    //
+    event.AsUInt64 = 0;
+    event.Fields.Vector = 13;
+    event.Fields.Type = 3;
+    event.Fields.ErrorCodeValid = 1;
+    event.Fields.Valid = 1;
+    VpData->GuestVmcb.ControlArea.EventInj = event.AsUInt64;
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvInjectDbException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData
+)
+{
+    EVENTINJ event;
+
+    // Inject #DB exception.
+
+    event.AsUInt64 = 0;
+    event.Fields.Vector = 1;
+    event.Fields.Type = 3;
+    event.Fields.ErrorCodeValid = 0;
+    event.Fields.Valid = 1;
+    VpData->GuestVmcb.ControlArea.EventInj = event.AsUInt64;
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvInjectPFException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData
+)
+{
+    EVENTINJ event;
+
+    // Inject #PF exception.
+
+    event.AsUInt64 = 0;
+    event.Fields.Vector = 14;
+    event.Fields.Type = 3;
+    event.Fields.ErrorCodeValid = 1;
+    event.Fields.Valid = 1;
+    event.Fields.ErrorCode = VpData->GuestVmcb.ControlArea.ExitInfo1;
+    VpData->GuestVmcb.ControlArea.EventInj = event.AsUInt64;
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvInjectACException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData
+)
+{
+    EVENTINJ event;
+
+    // Inject #AC exception.
+
+    event.AsUInt64 = 0;
+    event.Fields.Vector = 17;
+    event.Fields.Type = 3;
+    event.Fields.ErrorCodeValid = 1;
+    event.Fields.Valid = 1;
+    VpData->GuestVmcb.ControlArea.EventInj = event.AsUInt64;
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvInjectSsException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData
+)
+{
+    EVENTINJ event;
+
+    // Inject #SS exception.
+
+    event.AsUInt64 = 0;
+    event.Fields.Vector = 12;
+    event.Fields.Type = 3;
+    event.Fields.ErrorCodeValid = 1;
+    event.Fields.Valid = 1;
+    event.Fields.ErrorCode = VpData->GuestVmcb.ControlArea.ExitInfo1;
+    VpData->GuestVmcb.ControlArea.EventInj = event.AsUInt64;
+}
+
+static
+VOID
+SyscallHandler() //Later overwritten with actual code, creating space here for x64 inline assembly. Decoy code is never executed.
+{
+    Decoy = *(UINT64*)(0x7FFE0000);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0002) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0013) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE001f) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE002a);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0028) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE003c) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0030) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0042);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0049) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0055) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE005f) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0062);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0070) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0072) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE007a) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0280);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0008) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0490) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0192) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0133);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0175) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0144) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0318) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE01ac);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0428) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0330) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE014c) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0120);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0184) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0050) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0451) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0163);
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0227) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0342) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0181) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE03a0) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE01c8) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0120) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0321) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0204) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0451) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0223) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0041) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE043a) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE023c) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0111) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0238) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0040) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE031a) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0020) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE01ad) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0222) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0168) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE033f) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0078) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0312) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0128) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE01b3) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0098) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0300) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE01ad) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0426) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0237) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE004a) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE012c) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0327) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0201) - Decoy2;
+    Decoy2 = Decoy;
+    Decoy = *(UINT64*)(0x7FFE0452) - Decoy2;
+    Decoy2 = Decoy;
+}
+
+#ifdef KUSER_SPOOF
+
+// Single process tracking
+static HANDLE TrackedProcessId = nullptr;
+
+VOID ProcessNotifyRestoreFields(
+    IN HANDLE ParentId,
+    IN HANDLE ProcessId,
+    IN BOOLEAN Create
+) {
+    UNREFERENCED_PARAMETER(ParentId);
+
+    // Create == TRUE: Process creation
+    // Create == FALSE: Process termination
+    if (Create == FALSE && ProcessId == TrackedProcessId) {
+
+        if (CounterThreadHandle)
+        {
+            PETHREAD CounterThread;
+            ObReferenceObjectByHandle(CounterThreadHandle, NULL, *PsThreadType, KernelMode, (PVOID*)&CounterThread, NULL);
+            StopCounterThread = TRUE;
+            KeWaitForSingleObject(CounterThread, Executive, KernelMode, FALSE, NULL);
+            ObDereferenceObject(CounterThread);
+            ZwClose(CounterThreadHandle);
+            StopCounterThread = FALSE;
+            CounterThreadHandle = NULL;
+            CounterInit = 0x0;
+
+            auto hostcr3 = __readcr3();
+            __writecr3(TargetCR3);
+
+            auto TargetProcessKuserPte = Utils::GetPte((void*)0x7FFE0000, TargetCR3);
+
+            if (TargetProcessKuserPte)
+            {
+                TargetProcessKuserPte->PageFrameNumber = OriginalKuserPFN;
+
+                __invlpg((void*)0x7FFE0000);
+            }
+
+            __writecr3(hostcr3);
+
+            PsReleaseProcessExitSynchronization(TargetProcess);
+            ObDereferenceObject(TargetProcess);
+
+            if (NewKuserSharedData)
+            {
+                SvFreeContiguousMemory(NewKuserSharedData);
+            }
+
+            TargetProcessId = 0;
+            TrackedProcessId = nullptr;
+            TargetProcess = nullptr;
+        }
+
+    }
+}
+
+VOID CounterUpdater(PVOID Context)
+{
+    UNREFERENCED_PARAMETER(Context);
+
+    LARGE_INTEGER TimeToWait = { 0 };
+    TimeToWait.QuadPart = -10000LL; // relative 1ms
+
+    while (StopCounterThread == FALSE)
+    {
+        if (CounterInit)
+        {
+            if (!TrackedProcessId) {
+
+                NewKuserSharedData = SvAllocateContiguousMemory(PAGE_SIZE);
+
+                if (NewKuserSharedData)
+                {
+                    MM_COPY_ADDRESS KUSER_SHARED_DATA;
+
+                    SIZE_T size;
+
+                    KUSER_SHARED_DATA.VirtualAddress = (PVOID)KUSER_SHARED_DATA_USERMODE;
+
+                    MmCopyMemory(NewKuserSharedData, KUSER_SHARED_DATA, PAGE_SIZE, MM_COPY_MEMORY_VIRTUAL, &size);
+
+                    UINT64 NewKusdAddress = (UINT64)NewKuserSharedData;
+
+                    *(UINT32*)(NewKusdAddress + 0x2d6) = 0x00010034;
+                    *(UINT32*)(NewKusdAddress + 0x2e8) = 0x00BF9C8F;
+                    *(UINT32*)(NewKusdAddress + 0x3c0) = 0x00000010;
+                    *(UINT32*)(NewKusdAddress + 0x288) = 0x01010101;
+                    *(UINT32*)(NewKusdAddress + 0x268) = 0x00090001;
+                    *(UINT32*)(NewKusdAddress + 0x2f4) = 0x0;
+                    *(UINT32*)(NewKusdAddress + 0x264) = 0x1;
+                    *(UINT32*)(NewKusdAddress + 0x2d0) = 0x00000310;
+                    *(UINT32*)(NewKusdAddress + 0x260) = 0x00006658;
+                    *(UINT32*)(NewKusdAddress + 0x26c) = 0xA;
+                    *(UINT32*)(NewKusdAddress + 0x270) = 0x0;
+                }
+
+                TrackedProcessId = TargetProcessId;
+
+                auto hostcr3 = __readcr3();
+
+                UINT64 NewPFN = Utils::GetPte((void*)NewKuserSharedData, hostcr3)->PageFrameNumber;
+
+                ULONG_PTR GuestCr3 = TargetCR3;
+
+                __writecr3(GuestCr3);
+
+                auto TargetProcessKuserPte = Utils::GetPte((void*)0x7FFE0000, GuestCr3);
+
+                if (TargetProcessKuserPte) {
+
+                    OriginalKuserPFN = TargetProcessKuserPte->PageFrameNumber;
+
+                    TargetProcessKuserPte->PageFrameNumber = NewPFN;
+
+                    __invlpg((void*)0x7FFE0000);
+                }
+
+                if (!NotifyRoutineActive) {
+                    NTSTATUS status = PsSetCreateProcessNotifyRoutine(ProcessNotifyRestoreFields, FALSE);
+                    if (NT_SUCCESS(status)) {
+                        NotifyRoutineActive = TRUE;
+                    }
+                }
+
+                __writecr3(hostcr3);
+
+            }
+
+            KeDelayExecutionThread(KernelMode, FALSE, &TimeToWait);
+
+            if (NewKuserSharedData)
+            {
+                CONST PKUSER_SHARED_DATA TargetSpoofedKuserSharedData = (PKUSER_SHARED_DATA)NewKuserSharedData;
+                PKUSER_SHARED_DATA KernelKuserSharedData = (PKUSER_SHARED_DATA)(KUSER_SHARED_DATA_KERNELMODE);
+
+                *(ULONG64*)&TargetSpoofedKuserSharedData->InterruptTime = *(ULONG64*)&KernelKuserSharedData->InterruptTime.LowPart;
+                TargetSpoofedKuserSharedData->InterruptTime.High2Time = TargetSpoofedKuserSharedData->InterruptTime.High1Time;
+
+                *(ULONG64*)&TargetSpoofedKuserSharedData->SystemTime = *(ULONG64*)&KernelKuserSharedData->SystemTime.LowPart;
+                TargetSpoofedKuserSharedData->SystemTime.High2Time = TargetSpoofedKuserSharedData->SystemTime.High1Time;
+
+                TargetSpoofedKuserSharedData->LastSystemRITEventTickCount = KernelKuserSharedData->LastSystemRITEventTickCount;
+
+                *(ULONG64*)&TargetSpoofedKuserSharedData->TickCount = *(ULONG64*)&KernelKuserSharedData->TickCount.LowPart;
+                TargetSpoofedKuserSharedData->TickCount.High2Time = TargetSpoofedKuserSharedData->TickCount.High1Time;
+
+                TargetSpoofedKuserSharedData->TimeUpdateLock = KernelKuserSharedData->TimeUpdateLock;
+
+                TargetSpoofedKuserSharedData->BaselineSystemTimeQpc = KernelKuserSharedData->BaselineSystemTimeQpc;
+                TargetSpoofedKuserSharedData->BaselineInterruptTimeQpc = TargetSpoofedKuserSharedData->BaselineSystemTimeQpc;
+            }
+
+        }
+
+        CounterInit = 0x1;
+    }
+
+    PsTerminateSystemThread(STATUS_SUCCESS);
+}
+
+#endif 
+
+/*!
+    @brief          Handles #VMEXIT due to execution of the CPUID instructions.
+
+    @param[in,out]  VpData - Per processor data.
+    @param[in,out]  GuestContext - Guest's GPRs.
+ */
+_IRQL_requires_same_
+static
+VOID
+SvHandleCpuid (
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+    )
+{
+    int registers[4];   // EAX, EBX, ECX, and EDX
+    int leaf, subLeaf;
+    SEGMENT_ATTRIBUTE attribute;
+
+    //
+    // Execute CPUID as requested.
+    //
+
+    leaf = static_cast<int>(GuestContext->VpRegs->Rax);
+    subLeaf = static_cast<int>(GuestContext->VpRegs->Rcx);
+
+    if (VpData->GuestVmcb.StateSaveArea.Cpl == 0x3)
+    {
+        if (GuestContext->VpRegs->Rax == 0x69696969)
+        {
+            if (!TargetCR3 || !TrackedProcessId)
+            {
+                TargetCR3 = VpData->GuestVmcb.StateSaveArea.Cr3;
+                goto Exit;
+            }
+        }
+
+        if (VpData->GuestVmcb.StateSaveArea.Cr3 == TargetCR3)
+        {
+            if (GuestContext->VpRegs->Rax == 0x693369)  //Limit cpuid spoofing to target region
+            {
+                RegionBase = GuestContext->VpRegs->Rcx;
+                RegionEnd  = GuestContext->VpRegs->Rdx;
+                goto Exit;
+            }
+
+            if (leaf == 0x1 || leaf == 0x80000002 || leaf == 0x80000003 || leaf == 0x80000004)
+            {
+                if (RegionEnd && VpData->GuestVmcb.StateSaveArea.Rip >= RegionBase && VpData->GuestVmcb.StateSaveArea.Rip < RegionEnd)
+                {
+                    GuestContext->VpRegs->Rax = 0x69696969;
+                    GuestContext->VpRegs->Rbx = GuestContext->VpRegs->Rax;
+                    GuestContext->VpRegs->Rcx = GuestContext->VpRegs->Rax;
+                    GuestContext->VpRegs->Rdx = GuestContext->VpRegs->Rax;
+
+                    goto Exit;
+                }
+
+                else
+                {
+                    goto CPUIDEX;
+                }
+            }
+
+            if (GuestContext->VpRegs->Rax == 0x336933) //guest RCX should be == syscall handler address
+            {
+                TargetSysHandler = GuestContext->VpRegs->Rcx;
+                *(UINT64*)(TempPTR + 0x50) = TargetSysHandler;       //SYSCALL HOOK
+                *(UINT64*)(TempPTR + 0x48) = TargetCR3;               
+                goto Exit;
+            }
+
+#ifdef KUSER_SPOOF
+
+            if (GuestContext->VpRegs->Rax == 0x1337)
+            {
+                TargetProcessId = reinterpret_cast<HANDLE>(GuestContext->VpRegs->Rdx);
+
+                auto hostcr3 = __readcr3();
+
+                __writecr3(VpData->GuestVmcb.StateSaveArea.Cr3);
+
+                NTSTATUS status = PsLookupProcessByProcessId(TargetProcessId, &TargetProcess);
+
+                if (NT_SUCCESS(status)) {
+
+                    status = PsAcquireProcessExitSynchronization(TargetProcess);
+
+                    if (!NT_SUCCESS(status))
+                    {
+                        SvDebugPrint("Failed to AcquireProcessExitSynchronization, can not spoof KUSER only for the game process.");
+                    }
+
+                    if (NT_SUCCESS(PsCreateSystemThread(&CounterThreadHandle, 0, 0, 0, 0, CounterUpdater, NULL)) == FALSE)
+                    {
+                        SvDebugPrint("Failed to create CounterUpdater thread.");
+                    }
+
+                }
+
+                __writecr3(hostcr3);
+
+                goto Exit;
+
+            }
+#endif
+        }
+
+    }
+
+    CPUIDEX:
+
+    __cpuidex(registers, leaf, subLeaf);
+
+    switch (leaf)
+    {
+    case CPUID_PROCESSOR_AND_PROCESSOR_FEATURE_IDENTIFIERS:
+        //
+        // Indicate presence of a hypervisor by setting the bit that are
+        // reserved for use by hypervisor to indicate guest status. See "CPUID
+        // Fn0000_0001_ECX Feature Identifiers".
+        //
+        registers[2] |= CPUID_FN0000_0001_ECX_HYPERVISOR_PRESENT;
+        break;
+    case CPUID_HV_VENDOR_AND_MAX_FUNCTIONS:
+        //
+        // Return a maximum supported hypervisor CPUID leaf range and a vendor
+        // ID signature as required by the spec.
+        //
+        registers[0] = CPUID_HV_MAX;
+        registers[1] = 'pmiS';  // "SimpleSvm   "
+        registers[2] = 'vSel';
+        registers[3] = '   m';
+        break;
+    case CPUID_HV_INTERFACE:
+        //
+        // Return non Hv#1 value. This indicate that the SimpleSvm does NOT
+        // conform to the Microsoft hypervisor interface.
+        //
+        registers[0] = '0#vH';  // Hv#0
+        registers[1] = registers[2] = registers[3] = 0;
+        break;
+    case CPUID_UNLOAD_SIMPLE_SVM:
+        if (subLeaf == CPUID_UNLOAD_SIMPLE_SVM)
+        {
+            //
+            // Unload itself if the request is from the kernel mode.
+            //
+            attribute.AsUInt16 = VpData->GuestVmcb.StateSaveArea.SsAttrib;
+            if (attribute.Fields.Dpl == DPL_SYSTEM)
+            {
+                GuestContext->ExitVm = TRUE;
+            }
+        }
+        break;
+    default:
+        break;
+    }
+
+    //
+    // Update guest's GPRs with results.
+    //
+
+    GuestContext->VpRegs->Rax = registers[0];
+    GuestContext->VpRegs->Rbx = registers[1];
+    GuestContext->VpRegs->Rcx = registers[2];
+    GuestContext->VpRegs->Rdx = registers[3];
+
+
+    //
+    // Then, advance RIP to "complete" the instruction.
+    //
+
+Exit:
+
+    VpData->GuestVmcb.StateSaveArea.Rip = VpData->GuestVmcb.ControlArea.NRip;
+
+
+    if ((VpData->GuestVmcb.StateSaveArea.Rflags & X86_FLAGS_TF) != 0)
+
+    {
+
+        if ((__readmsr(IA32_MSR_DEBUGCTL) & BranchSingleStep) != 0)
+
+        {
+            __nop();
+        }
+
+        else
+
+        {
+
+            VpData->GuestVmcb.StateSaveArea.Dr6 = (VpData->GuestVmcb.StateSaveArea.Dr6 |= SingleStep);
+            VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+
+            SvInjectDbException(VpData);
+
+        }
+
+    }
+
+}
+
+/*!
+    SVM_INTERCEPT_MISC1_RDTSC   bit == Used to preserve original RFLAGS.TF value
+    SVM_INTERCEPT_MISC1_RDPMC   bit == Used to preserve original RFLAGS.IF value
+    SVM_INTERCEPT_MISC2_VMMCALL bit == Used to preserve original Debug-Control MSR Branch Single Step value
+ */
+
+_IRQL_requires_same_
+static
+VOID
+SvHandleDbException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+)
+{
+    DESCRIPTOR_TABLE_REGISTER CorrectGDTR;
+
+    if (VpData->GuestVmcb.StateSaveArea.Rip == UINT64(sysPtr))
+    {
+        VpData->GuestVmcb.StateSaveArea.Rip = OrigLSTAR;
+    }
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_GDTR_READ) != 0)
+
+    {
+        goto InjectDbException;
+    }
+
+    else
+
+    {
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_GDTR_READ;
+        VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_PF);
+        VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_AC);
+        VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_SS);
+
+        if (VpData->GuestVmcb.StateSaveArea.GdtrBase == 0xFFFFF69696900000)
+        {
+            _sgdt(&CorrectGDTR);
+            VpData->GuestVmcb.StateSaveArea.GdtrBase = CorrectGDTR.Base;
+            VpData->GuestVmcb.StateSaveArea.GdtrLimit = CorrectGDTR.Limit;
+        }
+
+        if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDPMC) != 0)
+        {
+            VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags |= X86_FLAGS_IF);
+            VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDPMC);
+        }
+
+        if ((VpData->GuestVmcb.ControlArea.InterceptMisc2 & SVM_INTERCEPT_MISC2_VMMCALL) != 0)
+        {
+            UINT64 MSR_DEBUGCTL = __readmsr(IA32_MSR_DEBUGCTL);
+            MSR_DEBUGCTL = (MSR_DEBUGCTL |= BranchSingleStep);
+            __writemsr(IA32_MSR_DEBUGCTL, MSR_DEBUGCTL);
+        }
+
+        if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDTSC) != 0)
+        {
+            VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDTSC);
+
+            if ((VpData->GuestVmcb.ControlArea.InterceptMisc2 & SVM_INTERCEPT_MISC2_VMMCALL) != 0)
+            {
+                VpData->GuestVmcb.ControlArea.InterceptMisc2 = (VpData->GuestVmcb.ControlArea.InterceptMisc2 & ~SVM_INTERCEPT_MISC2_VMMCALL);
+                goto Exit;
+            }
+
+        }
+
+        else
+
+        {
+            VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+            VpData->GuestVmcb.ControlArea.InterceptMisc2 = (VpData->GuestVmcb.ControlArea.InterceptMisc2 & ~SVM_INTERCEPT_MISC2_VMMCALL);
+            goto Exit;
+        }
+
+    }
+
+
+    InjectDbException:
+
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+        SvInjectDbException(VpData);
+
+    Exit:
+
+        __nop();
+
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvHandleCR4Read(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+)
+{
+    ULONG_PTR* gpr_array = (ULONG_PTR*)GuestContext->VpRegs;
+    CRDecodeAssist CRAssist;
+    UINT64 maskedCR4;
+
+    CRAssist.AsUInt64 = VpData->GuestVmcb.ControlArea.ExitInfo1;
+
+    maskedCR4 = (VpData->GuestVmcb.StateSaveArea.Cr4 |= UMIP);
+
+    gpr_array[CRAssist.Fields.GPR] = maskedCR4;
+
+    VpData->GuestVmcb.StateSaveArea.Rip = VpData->GuestVmcb.ControlArea.NRip;
+}
+
+
+_IRQL_requires_same_
+static
+VOID
+SvHandleCR4Write(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+)
+{
+    ULONG_PTR* gpr_array = (ULONG_PTR*)GuestContext->VpRegs;
+    CRDecodeAssist CRAssist;
+    CR4 New;
+    CR4 Old;
+
+    CRAssist.AsUInt64 = VpData->GuestVmcb.ControlArea.ExitInfo1;
+
+    New.CR4 = gpr_array[CRAssist.Fields.GPR];
+    Old.CR4 = (VpData->GuestVmcb.StateSaveArea.Cr4 |= UMIP);
+
+    if (New.CR4 != Old.CR4)
+    {
+        New.CR4 = (New.CR4 & ~UMIP);
+
+        VpData->GuestVmcb.StateSaveArea.Cr4 = New.CR4;
+
+        if (Old.PageSizeExtensions != New.PageSizeExtensions)
+
+        {
+            goto FlushGuestTLB;
+        }
+
+        if (Old.PhysicalAddressExtension != New.PhysicalAddressExtension)
+
+        {
+            goto FlushGuestTLB;
+        }
+
+        if (Old.PageGlobalEnable != New.PageGlobalEnable)
+
+        {
+            goto FlushGuestTLB;
+        }
+
+        if (New.PcidEnable == 0x0 && Old.PcidEnable == 0x1)
+        {
+            goto FlushGuestTLB;
+        }
+
+        if (New.ProtectionKeyEnable == 0x1 && Old.ProtectionKeyEnable == 0x0)
+        {
+            goto FlushGuestTLB;
+        }
+
+        goto Exit;
+
+    }
+
+    goto Exit;
+
+FlushGuestTLB:
+
+    VpData->GuestVmcb.ControlArea.TlbControl = 0x3;
+
+Exit:
+
+    VpData->GuestVmcb.StateSaveArea.Rip = VpData->GuestVmcb.ControlArea.NRip;
+
+}
+
+
+_IRQL_requires_same_
+static
+VOID
+SvHandleSGDT(                                            
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+)
+{
+
+    if (VpData->GuestVmcb.StateSaveArea.Cr3 != TargetCR3 && VpData->GuestVmcb.StateSaveArea.Cpl == 0x3 && UMIPSystem == 0x1)
+
+    {
+        SvInjectGeneralProtectionException(VpData);
+    }
+
+    else
+
+    {
+
+       if ((VpData->GuestVmcb.StateSaveArea.Rflags & X86_FLAGS_TF) != 0)
+
+       {
+           VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_RDTSC;
+       }
+
+       if ((VpData->GuestVmcb.StateSaveArea.Rflags & X86_FLAGS_IF) != 0)
+
+       {
+           VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_RDPMC;
+           VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_IF);
+       }
+
+       UINT64 MSR_DEBUGCTL = __readmsr(IA32_MSR_DEBUGCTL);
+
+       if ((MSR_DEBUGCTL & BranchSingleStep) != 0)
+
+       {
+           VpData->GuestVmcb.ControlArea.InterceptMisc2 |= SVM_INTERCEPT_MISC2_VMMCALL;
+           MSR_DEBUGCTL = (MSR_DEBUGCTL & ~BranchSingleStep);
+           __writemsr(IA32_MSR_DEBUGCTL, MSR_DEBUGCTL);
+       }
+
+       VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags |= X86_FLAGS_TF);
+
+       VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_GDTR_READ);
+
+       if (VpData->GuestVmcb.StateSaveArea.Cr3 == TargetCR3 && VpData->GuestVmcb.StateSaveArea.Cpl == 0x3)
+
+       {
+           VpData->GuestVmcb.StateSaveArea.GdtrBase = 0xFFFFF69696900000;
+           VpData->GuestVmcb.StateSaveArea.GdtrLimit = 0x7F;
+           VpData->GuestVmcb.ControlArea.InterceptException |= SVM_InterceptException_PF;
+           VpData->GuestVmcb.ControlArea.InterceptException |= SVM_InterceptException_AC;
+           VpData->GuestVmcb.ControlArea.InterceptException |= SVM_InterceptException_SS;
+       }
+
+    }
+
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvHandlePFException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+)
+{
+    DESCRIPTOR_TABLE_REGISTER CorrectGDTR;
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDPMC) != 0)
+    {
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags |= X86_FLAGS_IF);
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDPMC);
+    }
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc2 & SVM_INTERCEPT_MISC2_VMMCALL) != 0)
+    {
+        UINT64 MSR_DEBUGCTL = __readmsr(IA32_MSR_DEBUGCTL);
+        MSR_DEBUGCTL = (MSR_DEBUGCTL |= BranchSingleStep);
+        __writemsr(IA32_MSR_DEBUGCTL, MSR_DEBUGCTL);
+        VpData->GuestVmcb.ControlArea.InterceptMisc2 = (VpData->GuestVmcb.ControlArea.InterceptMisc2 & ~SVM_INTERCEPT_MISC2_VMMCALL);
+    }
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDTSC) != 0)
+    {
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDTSC);
+    }
+
+    else
+
+    {
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+    }
+
+    _sgdt(&CorrectGDTR);
+
+    VpData->GuestVmcb.StateSaveArea.GdtrBase = CorrectGDTR.Base;
+    VpData->GuestVmcb.StateSaveArea.GdtrLimit = CorrectGDTR.Limit;
+
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_PF);
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_AC);
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_SS);
+    VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_GDTR_READ;
+    VpData->GuestVmcb.StateSaveArea.Cr2 = VpData->GuestVmcb.ControlArea.ExitInfo2;
+
+    SvInjectPFException(VpData);
+}
+
+_IRQL_requires_same_
+static
+VOID
+SvHandleACException(
+    _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
+    _Inout_ PGUEST_CONTEXT GuestContext
+)
+{
+    DESCRIPTOR_TABLE_REGISTER CorrectGDTR;
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDPMC) != 0)
+    {
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags |= X86_FLAGS_IF);
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDPMC);
+    }
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc2 & SVM_INTERCEPT_MISC2_VMMCALL) != 0)
+    {
+        UINT64 MSR_DEBUGCTL = __readmsr(IA32_MSR_DEBUGCTL);
+        MSR_DEBUGCTL = (MSR_DEBUGCTL |= BranchSingleStep);
+        __writemsr(IA32_MSR_DEBUGCTL, MSR_DEBUGCTL);
+        VpData->GuestVmcb.ControlArea.InterceptMisc2 = (VpData->GuestVmcb.ControlArea.InterceptMisc2 & ~SVM_INTERCEPT_MISC2_VMMCALL);
+    }
+
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDTSC) != 0)
+    {
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDTSC);
+    }
+
+    else
+
+    {
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+    }
 
-    //
-    // Inject #GP(vector = 13, type = 3 = exception) with a valid error code.
-    // An error code are always zero. See "#GP-General-Protection Exception
-    // (Vector 13)" for details about the error code.
-    //
-    event.AsUInt64 = 0;
-    event.Fields.Vector = 13;
-    event.Fields.Type = 3;
-    event.Fields.ErrorCodeValid = 1;
-    event.Fields.Valid = 1;
-    VpData->GuestVmcb.ControlArea.EventInj = event.AsUInt64;
-}
+    _sgdt(&CorrectGDTR);
 
-/*!
-    @brief          Handles #VMEXIT due to execution of the CPUID instructions.
+    VpData->GuestVmcb.StateSaveArea.GdtrBase = CorrectGDTR.Base;
+    VpData->GuestVmcb.StateSaveArea.GdtrLimit = CorrectGDTR.Limit;
 
-    @details        This function returns unmodified results of the CPUID
-                    instruction, except for few cases to indicate presence of
-                    the hypervisor, and to process an unload request.
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_PF);
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_AC);
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_SS);
+    VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_GDTR_READ;
 
-                    CPUID leaf 0x40000000 and 0x40000001 return modified values
-                    to conform to the hypervisor interface to some extent. See
-                    "Requirements for implementing the Microsoft Hypervisor interface"
-                    https://msdn.microsoft.com/en-us/library/windows/hardware/Dn613994(v=vs.85).aspx
-                    for details of the interface.
+    SvInjectACException(VpData);
+}
 
-    @param[in,out]  VpData - Per processor data.
-    @param[in,out]  GuestContext - Guest's GPRs.
- */
 _IRQL_requires_same_
 static
 VOID
-SvHandleCpuid (
+SvHandleSsException(
     _Inout_ PVIRTUAL_PROCESSOR_DATA VpData,
     _Inout_ PGUEST_CONTEXT GuestContext
-    )
+)
 {
-    int registers[4];   // EAX, EBX, ECX, and EDX
-    int leaf, subLeaf;
-    SEGMENT_ATTRIBUTE attribute;
 
-    //
-    // Execute CPUID as requested.
-    //
-    leaf = static_cast<int>(GuestContext->VpRegs->Rax);
-    subLeaf = static_cast<int>(GuestContext->VpRegs->Rcx);
-    __cpuidex(registers, leaf, subLeaf);
+    DESCRIPTOR_TABLE_REGISTER CorrectGDTR;
 
-    switch (leaf)
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDPMC) != 0)
     {
-    case CPUID_PROCESSOR_AND_PROCESSOR_FEATURE_IDENTIFIERS:
-        //
-        // Indicate presence of a hypervisor by setting the bit that are
-        // reserved for use by hypervisor to indicate guest status. See "CPUID
-        // Fn0000_0001_ECX Feature Identifiers".
-        //
-        registers[2] |= CPUID_FN0000_0001_ECX_HYPERVISOR_PRESENT;
-        break;
-    case CPUID_HV_VENDOR_AND_MAX_FUNCTIONS:
-        //
-        // Return a maximum supported hypervisor CPUID leaf range and a vendor
-        // ID signature as required by the spec.
-        //
-        registers[0] = CPUID_HV_MAX;
-        registers[1] = 'pmiS';  // "SimpleSvm   "
-        registers[2] = 'vSel';
-        registers[3] = '   m';
-        break;
-    case CPUID_HV_INTERFACE:
-        //
-        // Return non Hv#1 value. This indicate that the SimpleSvm does NOT
-        // conform to the Microsoft hypervisor interface.
-        //
-        registers[0] = '0#vH';  // Hv#0
-        registers[1] = registers[2] = registers[3] = 0;
-        break;
-    case CPUID_UNLOAD_SIMPLE_SVM:
-        if (subLeaf == CPUID_UNLOAD_SIMPLE_SVM)
-        {
-            //
-            // Unload itself if the request is from the kernel mode.
-            //
-            attribute.AsUInt16 = VpData->GuestVmcb.StateSaveArea.SsAttrib;
-            if (attribute.Fields.Dpl == DPL_SYSTEM)
-            {
-                GuestContext->ExitVm = TRUE;
-            }
-        }
-        break;
-    default:
-        break;
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags |= X86_FLAGS_IF);
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDPMC);
     }
 
-    //
-    // Update guest's GPRs with results.
-    //
-    GuestContext->VpRegs->Rax = registers[0];
-    GuestContext->VpRegs->Rbx = registers[1];
-    GuestContext->VpRegs->Rcx = registers[2];
-    GuestContext->VpRegs->Rdx = registers[3];
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc2 & SVM_INTERCEPT_MISC2_VMMCALL) != 0)
+    {
+        UINT64 MSR_DEBUGCTL = __readmsr(IA32_MSR_DEBUGCTL);
+        MSR_DEBUGCTL = (MSR_DEBUGCTL |= BranchSingleStep);
+        __writemsr(IA32_MSR_DEBUGCTL, MSR_DEBUGCTL);
+        VpData->GuestVmcb.ControlArea.InterceptMisc2 = (VpData->GuestVmcb.ControlArea.InterceptMisc2 & ~SVM_INTERCEPT_MISC2_VMMCALL);
+    }
 
-    //
-    // Debug prints results. Very important to note that any use of API from
-    // the host context is unsafe and absolutely avoided, unless the API is
-    // documented to be accessible on IRQL IPI_LEVEL+. This is because
-    // interrupts are disabled when host code is running, and IPI is not going
-    // to be delivered when it is issued.
-    //
-    // This code is not exception and violating this rule. The reasons for this
-    // code are to demonstrate a bad example, and simply show that the SimpleSvm
-    // is functioning for a test purpose.
-    //
-    if (KeGetCurrentIrql() <= DISPATCH_LEVEL)
+    if ((VpData->GuestVmcb.ControlArea.InterceptMisc1 & SVM_INTERCEPT_MISC1_RDTSC) != 0)
     {
-        SvDebugPrint("CPUID: %08x-%08x : %08x %08x %08x %08x\n",
-                     leaf,
-                     subLeaf,
-                     registers[0],
-                     registers[1],
-                     registers[2],
-                     registers[3]);
+        VpData->GuestVmcb.ControlArea.InterceptMisc1 = (VpData->GuestVmcb.ControlArea.InterceptMisc1 & ~SVM_INTERCEPT_MISC1_RDTSC);
     }
 
-    //
-    // Then, advance RIP to "complete" the instruction.
-    //
-    VpData->GuestVmcb.StateSaveArea.Rip = VpData->GuestVmcb.ControlArea.NRip;
+    else
+
+    {
+        VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+    }
+
+    _sgdt(&CorrectGDTR);
+
+    VpData->GuestVmcb.StateSaveArea.GdtrBase = CorrectGDTR.Base;
+    VpData->GuestVmcb.StateSaveArea.GdtrLimit = CorrectGDTR.Limit;
+
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_PF);
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_AC);
+    VpData->GuestVmcb.ControlArea.InterceptException = (VpData->GuestVmcb.ControlArea.InterceptException & ~SVM_InterceptException_SS);
+    VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_GDTR_READ;
+
+    SvInjectSsException(VpData);
 }
 
+
 /*!
     @brief          Handles #VMEXIT due to execution of the WRMSR and RDMSR
                     instructions.
@@ -604,6 +1549,7 @@ SvHandleMsrAccess (
     )
 {
     ULARGE_INTEGER value;
+    ULARGE_INTEGER LSTARValue;
     UINT32 msr;
     BOOLEAN writeAccess;
 
@@ -631,51 +1577,56 @@ SvHandleMsrAccess (
             // leads to undefined behavior.
             //
             SvInjectGeneralProtectionException(VpData);
-            return;
         }
 
-        //
-        // Otherwise, update the MSR as requested. Important to note that the value
-        // should be checked not to allow any illegal values, and inject #GP as
-        // needed. Otherwise, the hypervisor attempts to resume the guest with an
-        // illegal EFER and immediately receives #VMEXIT due to VMEXIT_INVALID,
-        // which in our case, results in a bug check. See "Extended Feature Enable
-        // Register (EFER)" for what values are allowed.
-        //
-        // This code does not implement the check intentionally, for simplicity.
-        //
         VpData->GuestVmcb.StateSaveArea.Efer = value.QuadPart;
     }
+
+    if (msr == IA32_MSR_LSTAR)
+    {
+        if (writeAccess != FALSE)
+        {
+            LSTARValue.LowPart = GuestContext->VpRegs->Rax & MAXUINT32;
+            LSTARValue.HighPart = GuestContext->VpRegs->Rdx & MAXUINT32;
+
+            if (LSTARValue.QuadPart != OrigLSTAR)
+
+            {
+                VpData->GuestVmcb.StateSaveArea.LStar = LSTARValue.QuadPart;
+            }
+
+            else
+
+            {
+                VpData->GuestVmcb.StateSaveArea.LStar = UINT64(sysPtr);
+            }
+        }
+
+        else
+
+        {
+            if (VpData->GuestVmcb.StateSaveArea.LStar != UINT64(sysPtr))
+            {
+                LSTARValue.QuadPart = VpData->GuestVmcb.StateSaveArea.LStar;
+            }
+
+            else
+
+            {
+                LSTARValue.QuadPart = OrigLSTAR;
+            }
+
+            GuestContext->VpRegs->Rax = LSTARValue.LowPart;
+            GuestContext->VpRegs->Rdx = LSTARValue.HighPart;
+        }
+    }
+
     else
     {
-        //
-        // If the MSR being accessed is not IA32_MSR_EFER, assert that #VMEXIT
-        // can only occur on access to MSR outside the ranges controlled with
-        // the MSR permissions map. This is true because the map is configured
-        // not to intercept any MSR access but IA32_MSR_EFER. See
-        // "MSR Ranges Covered by MSRPM" in "MSR Intercepts" for the MSR ranges
-        // controlled by the map.
-        //
-        // Note that VMware Workstation has a bug that access to unimplemented
-        // MSRs unconditionally causes #VMEXIT ignoring bits in the MSR
-        // permissions map. This can be tested by reading MSR zero, for example.
-        //
         NT_ASSERT(((msr > 0x00001fff) && (msr < 0xc0000000)) ||
                   ((msr > 0xc0001fff) && (msr < 0xc0010000)) ||
                    (msr > 0xc0011fff));
 
-        //
-        // Execute WRMSR or RDMSR on behalf of the guest. Important that this
-        // can cause bug check when the guest tries to access unimplemented MSR
-        // *even within the SEH block* because the below WRMSR or RDMSR raises
-        // #GP and are not protected by the SEH block (or cannot be protected
-        // either as this code run outside the thread stack region Windows
-        // requires to proceed SEH). Hypervisors typically handle this by noop-ing
-        // WRMSR and returning zero for RDMSR with non-architecturally defined
-        // MSRs. Alternatively, one can probe which MSRs should cause #GP prior
-        // to installation of a hypervisor and the hypervisor can emulate the
-        // results.
-        //
         if (writeAccess != FALSE)
         {
             value.LowPart = GuestContext->VpRegs->Rax & MAXUINT32;
@@ -693,7 +1644,30 @@ SvHandleMsrAccess (
     //
     // Then, advance RIP to "complete" the instruction.
     //
+
     VpData->GuestVmcb.StateSaveArea.Rip = VpData->GuestVmcb.ControlArea.NRip;
+
+    if ((VpData->GuestVmcb.StateSaveArea.Rflags & X86_FLAGS_TF) != 0)
+
+    {
+
+        if ((__readmsr(IA32_MSR_DEBUGCTL) & BranchSingleStep) != 0)
+
+        {
+            __nop();
+        }
+
+        else
+
+        {
+
+            VpData->GuestVmcb.StateSaveArea.Dr6 = (VpData->GuestVmcb.StateSaveArea.Dr6 |= SingleStep);
+            VpData->GuestVmcb.StateSaveArea.Rflags = (VpData->GuestVmcb.StateSaveArea.Rflags & ~X86_FLAGS_TF);
+
+            SvInjectDbException(VpData);
+
+        }
+    }
 }
 
 /*!
@@ -747,7 +1721,6 @@ SvHandleVmExit (
     )
 {
     GUEST_CONTEXT guestContext;
-    KIRQL oldIrql;
 
     guestContext.VpRegs = GuestRegisters;
     guestContext.ExitVm = FALSE;
@@ -757,29 +1730,14 @@ SvHandleVmExit (
     //
     __svm_vmload(VpData->HostStackLayout.HostVmcbPa);
 
-    NT_ASSERT(VpData->HostStackLayout.Reserved1 == MAXUINT64);
-
-    //
-    // Raise the IRQL to the DISPATCH_LEVEL level. This has no actual effect since
-    // interrupts are disabled at #VMEXI but warrants bug check when some of
-    // kernel API that are not usable on this context is called with Driver
-    // Verifier. This protects developers from accidentally writing such #VMEXIT
-    // handling code. This should actually raise IRQL to HIGH_LEVEL to represent
-    // this running context better, but our Logger code is not designed to run at
-    // that level unfortunately. Finally, note that this API is a thin wrapper
-    // of mov-to-CR8 on x64 and safe to call on this context.
-    //
-    oldIrql = KeGetCurrentIrql();
-    if (oldIrql < DISPATCH_LEVEL)
-    {
-        KeRaiseIrqlToDpcLevel();
-    }
+    //NT_ASSERT(VpData->HostStackLayout.Reserved1 == MAXUINT64);
 
     //
     // Guest's RAX is overwritten by the host's value on #VMEXIT and saved in
     // the VMCB instead. Reflect the guest RAX to the context.
     //
     GuestRegisters->Rax = VpData->GuestVmcb.StateSaveArea.Rax;
+    GuestRegisters->Rsp = VpData->GuestVmcb.StateSaveArea.Rsp;
 
     //
     // Update the _KTRAP_FRAME structure values in hypervisor stack, so that
@@ -797,28 +1755,39 @@ SvHandleVmExit (
     case VMEXIT_CPUID:
         SvHandleCpuid(VpData, &guestContext);
         break;
+    case VMEXIT_CR4_READ:
+        SvHandleCR4Read(VpData, &guestContext);
+        break;
+    case VMEXIT_CR4_WRITE:
+        SvHandleCR4Write(VpData, &guestContext);
+        break;
+    case VMEXIT_EXCEPTION_DB:
+        SvHandleDbException(VpData, &guestContext);
+        break;
+    case VMEXIT_GDTR_READ:
+        SvHandleSGDT(VpData, &guestContext);
+        break;
     case VMEXIT_MSR:
         SvHandleMsrAccess(VpData, &guestContext);
         break;
+    case VMEXIT_EXCEPTION_PF:
+        SvHandlePFException(VpData, &guestContext);
+        break;
+    case VMEXIT_EXCEPTION_AC:
+        SvHandleACException(VpData, &guestContext);
+        break;
+    case VMEXIT_EXCEPTION_SS:
+        SvHandleSsException(VpData, &guestContext);
+        break;
     case VMEXIT_VMRUN:
         SvHandleVmrun(VpData, &guestContext);
         break;
     default:
         SV_DEBUG_BREAK();
-#pragma prefast(suppress : __WARNING_USE_OTHER_FUNCTION, "Unrecoverable path.")
+#pragma prefast(disable : __WARNING_USE_OTHER_FUNCTION, "Unrecoverble path.")
         KeBugCheck(MANUALLY_INITIATED_CRASH);
     }
 
-    //
-    // Again, no effect to change IRQL but restoring it here since a #VMEXIT
-    // handler where the developers most likely call the kernel API inadvertently
-    // is already executed.
-    //
-    if (oldIrql < DISPATCH_LEVEL)
-    {
-        KeLowerIrql(oldIrql);
-    }
-
     //
     // Terminate the SimpleSvm hypervisor if requested.
     //
@@ -826,6 +1795,16 @@ SvHandleVmExit (
     {
         NT_ASSERT(VpData->GuestVmcb.ControlArea.ExitCode == VMEXIT_CPUID);
 
+#ifdef KUSER_SPOOF
+
+        if (NotifyRoutineActive)
+        {
+            PsSetCreateProcessNotifyRoutine(ProcessNotifyRestoreFields, TRUE);
+            NotifyRoutineActive = 0x0;
+        }
+
+#endif
+
         //
         // Set return values of CPUID instruction as follows:
         //  RBX     = An address to return
@@ -855,7 +1834,9 @@ SvHandleVmExit (
         // Disable SVM, and restore the guest RFLAGS. This may enable interrupts.
         // Some of arithmetic flags are destroyed by the subsequent code.
         //
+
         __writemsr(IA32_MSR_EFER, __readmsr(IA32_MSR_EFER) & ~EFER_SVME);
+        __writemsr(IA32_MSR_LSTAR, OrigLSTAR);
         __writeeflags(VpData->GuestVmcb.StateSaveArea.Rflags);
         goto Exit;
     }
@@ -865,6 +1846,7 @@ SvHandleVmExit (
     // RAX is loaded from VMCB on VMRUN.
     //
     VpData->GuestVmcb.StateSaveArea.Rax = guestContext.VpRegs->Rax;
+    VpData->GuestVmcb.StateSaveArea.Rsp = guestContext.VpRegs->Rsp;
 
 Exit:
     NT_ASSERT(VpData->HostStackLayout.Reserved1 == MAXUINT64);
@@ -874,19 +1856,6 @@ Exit:
 /*!
     @brief      Returns attributes of a segment specified by the segment selector.
 
-    @details    This function locates a segment descriptor from the segment
-                selector and the GDT base, extracts attributes of the segment,
-                and returns it. The returned value is the same as what the "dg"
-                command of Windbg shows as "Flags". Here is an example output
-                with 0x18 of the selector:
-                ----
-                0: kd> dg 18
-                P Si Gr Pr Lo
-                Sel        Base              Limit          Type    l ze an es ng Flags
-                ---- ----------------- ----------------- ---------- - -- -- -- -- --------
-                0018 00000000`00000000 00000000`00000000 Data RW Ac 0 Bg By P  Nl 00000493
-                ----
-
     @param[in]  SegmentSelector - A segment selector to get attributes of a
                 corresponding descriptor.
     @param[in]  GdtBase - A base address of GDT.
@@ -932,15 +1901,6 @@ SvGetSegmentAccessRight (
 /*!
     @brief      Tests whether the SimpleSvm hypervisor is installed.
 
-    @details    This function checks a result of CPUID leaf 40000000h, which
-                should return a vendor name of the hypervisor if any of those
-                who implement the Microsoft Hypervisor interface is installed.
-                If the SimpleSvm hypervisor is installed, this should return
-                "SimpleSvm", and if no hypervisor is installed, it the result of
-                CPUID is undefined. For more details of the interface, see
-                "Requirements for implementing the Microsoft Hypervisor interface"
-                https://msdn.microsoft.com/en-us/library/windows/hardware/Dn613994(v=vs.85).aspx
-
     @result     TRUE when the SimpleSvm is installed; otherwise, FALSE.
  */
 _IRQL_requires_max_(DISPATCH_LEVEL)
@@ -970,7 +1930,7 @@ SvIsSimpleSvmHypervisorInstalled (
 }
 
 /*!
-    @brief      Virtualizes the current processor.
+    @brief      Virtualize the current processor.
 
     @details    This function enables SVM, initialize VMCB with the current
                 processor state, and enters the guest mode on the current
@@ -1008,19 +1968,22 @@ SvPrepareForVirtualization (
     pml4BasePa = MmGetPhysicalAddress(&SharedVpData->Pml4Entries);
     msrpmPa = MmGetPhysicalAddress(SharedVpData->MsrPermissionsMap);
 
-    //
-    // Configure to trigger #VMEXIT with CPUID and VMRUN instructions. CPUID is
-    // intercepted to present existence of the SimpleSvm hypervisor and provide
-    // an interface to ask it to unload itself.
-    //
-    // VMRUN is intercepted because it is required by the processor to enter the
-    // guest mode; otherwise, #VMEXIT occurs due to VMEXIT_INVALID when a
-    // processor attempts to enter the guest mode. See "Canonicalization and
-    // Consistency Checks" on "VMRUN Instruction".
-    //
+    VpData->GuestVmcb.StateSaveArea.Cr4 = __readcr4();
+
+    if ((VpData->GuestVmcb.StateSaveArea.Cr4 & UMIP) != 0)
+    {
+        UMIPSystem = 0x1;
+        VpData->GuestVmcb.StateSaveArea.Cr4 = (VpData->GuestVmcb.StateSaveArea.Cr4 & ~UMIP);
+        VpData->GuestVmcb.ControlArea.InterceptCrRead |= SVM_INTERCEPT_CR_READ_CR4;
+        VpData->GuestVmcb.ControlArea.InterceptCrWrite |= SVM_INTERCEPT_CR_WRITE_CR4;
+    }
+
     VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_CPUID;
+    VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_GDTR_READ;
     VpData->GuestVmcb.ControlArea.InterceptMisc2 |= SVM_INTERCEPT_MISC2_VMRUN;
 
+    VpData->GuestVmcb.ControlArea.InterceptException |= SVM_InterceptException_DB;
+
     //
     // Also, configure to trigger #VMEXIT on MSR access as configured by the
     // MSRPM. In our case, write to IA32_MSR_EFER is intercepted.
@@ -1028,28 +1991,8 @@ SvPrepareForVirtualization (
     VpData->GuestVmcb.ControlArea.InterceptMisc1 |= SVM_INTERCEPT_MISC1_MSR_PROT;
     VpData->GuestVmcb.ControlArea.MsrpmBasePa = msrpmPa.QuadPart;
 
-    //
-    // Specify guest's address space ID (ASID). TLB is maintained by the ID for
-    // guests. Use the same value for all processors since all of them run a
-    // single guest in our case. Use 1 as the most likely supported ASID by the
-    // processor. The actual the supported number of ASID can be obtained with
-    // CPUID. See "CPUID Fn8000_000A_EBX SVM Revision and Feature
-    // Identification". Zero of ASID is reserved and illegal.
-    //
     VpData->GuestVmcb.ControlArea.GuestAsid = 1;
 
-    //
-    // Enable Nested Page Tables. By enabling this, the processor performs the
-    // nested page walk, that involves with an additional page walk to translate
-    // a guest physical address to a system physical address. An address of
-    // nested page tables is specified by the NCr3 field of VMCB.
-    //
-    // We have already build the nested page tables with SvBuildNestedPageTables.
-    //
-    // Note that our hypervisor does not trigger any additional #VMEXIT due to
-    // the use of Nested Page Tables since all physical addresses from 0-512 GB
-    // are configured to be accessible from the guest.
-    //
     VpData->GuestVmcb.ControlArea.NpEnable |= SVM_NP_ENABLE_NP_ENABLE;
     VpData->GuestVmcb.ControlArea.NCr3 = pml4BasePa.QuadPart;
 
@@ -1077,10 +2020,10 @@ SvPrepareForVirtualization (
     VpData->GuestVmcb.StateSaveArea.SsAttrib = SvGetSegmentAccessRight(ContextRecord->SegSs, gdtr.Base);
 
     VpData->GuestVmcb.StateSaveArea.Efer = __readmsr(IA32_MSR_EFER);
+    OrigLSTAR = __readmsr(IA32_MSR_LSTAR);
     VpData->GuestVmcb.StateSaveArea.Cr0 = __readcr0();
     VpData->GuestVmcb.StateSaveArea.Cr2 = __readcr2();
     VpData->GuestVmcb.StateSaveArea.Cr3 = __readcr3();
-    VpData->GuestVmcb.StateSaveArea.Cr4 = __readcr4();
     VpData->GuestVmcb.StateSaveArea.Rflags = ContextRecord->EFlags;
     VpData->GuestVmcb.StateSaveArea.Rsp = ContextRecord->Rsp;
     VpData->GuestVmcb.StateSaveArea.Rip = ContextRecord->Rip;
@@ -1101,6 +2044,8 @@ SvPrepareForVirtualization (
     //
     __svm_vmsave(guestVmcbPa.QuadPart);
 
+    VpData->GuestVmcb.StateSaveArea.LStar = UINT64(sysPtr);
+
     //
     // Store data to stack so that the host (hypervisor) can use those values.
     //
@@ -1150,6 +2095,23 @@ SvVirtualizeProcessor (
     PVIRTUAL_PROCESSOR_DATA vpData;
     PCONTEXT contextRecord;
 
+    //SYSCALL hook - msvc x64 inline assembly xd
+
+    sysPtr = &SyscallHandler;
+    TempPTR = UINT64(sysPtr);
+    *(UINT64*)(TempPTR) = 0x18200F327536F883;
+    *(UINT64*)(TempPTR + 0x8) = 0x7500000039053B48;
+    *(UINT64*)(TempPTR + 0x10) = 0xFFFFFFFFFFB84821;
+    *(UINT64*)(TempPTR + 0x18) = 0x1277C1394800007F;
+    *(UINT64*)(TempPTR + 0x20) = 0xC889480D75D2854D;
+    *(UINT64*)(TempPTR + 0x28) = 0x48000000210D8B48;
+    *(UINT64*)(TempPTR + 0x30) = 0x4800000036B8070F;
+    *(UINT64*)(TempPTR + 0x38) = 0x00000000000225FF;
+
+    *(UINT64*)(TempPTR + 0x40) = OrigLSTAR;
+    *(UINT64*)(TempPTR + 0x48) = TargetCR3;
+    *(UINT64*)(TempPTR + 0x50) = TargetSysHandler;
+
     SV_DEBUG_BREAK();
 
     vpData = nullptr;
@@ -1157,8 +2119,8 @@ SvVirtualizeProcessor (
     NT_ASSERT(ARGUMENT_PRESENT(Context));
     _Analysis_assume_(ARGUMENT_PRESENT(Context));
 
-    contextRecord = static_cast<PCONTEXT>(ExAllocatePool2(
-                                                        POOL_FLAG_NON_PAGED,
+    contextRecord = static_cast<PCONTEXT>(ExAllocatePoolWithTag(
+                                                        NonPagedPool,
                                                         sizeof(*contextRecord),
                                                         'MVSS'));
     if (contextRecord == nullptr)
@@ -1171,9 +2133,11 @@ SvVirtualizeProcessor (
     //
     // Allocate per processor data.
     //
-#pragma prefast(suppress : __WARNING_MEMORY_LEAK, "Ownership is taken on success.")
+#pragma prefast(push)
+#pragma prefast(disable : __WARNING_MEMORY_LEAK, "Ownership is taken on success.")
     vpData = static_cast<PVIRTUAL_PROCESSOR_DATA>(
             SvAllocatePageAlingedPhysicalMemory(sizeof(VIRTUAL_PROCESSOR_DATA)));
+#pragma prefast(pop)
     if (vpData == nullptr)
     {
         SvDebugPrint("Insufficient memory.\n");
@@ -1223,11 +2187,11 @@ SvVirtualizeProcessor (
         //
         SvLaunchVm(&vpData->HostStackLayout.GuestVmcbPa);
         SV_DEBUG_BREAK();
-#pragma prefast(suppress : __WARNING_USE_OTHER_FUNCTION, "Unrecoverble path.")
         KeBugCheck(MANUALLY_INITIATED_CRASH);
     }
 
     SvDebugPrint("The processor has been virtualized.\n");
+
     status = STATUS_SUCCESS;
 
 Exit:
@@ -1246,26 +2210,6 @@ Exit:
     return status;
 }
 
-/*!
-    @brief      Execute a callback on all processors one-by-one.
-
-    @details    This function execute Callback with Context as a parameter for
-                each processor on the current IRQL. If the callback returned
-                non-STATUS_SUCCESS value or any error occurred, this function
-                stops execution of the callback and returns the error code.
-
-                When NumOfProcessorCompleted is not NULL, this function always
-                set a number of processors that successfully executed the
-                callback.
-
-    @param[in]  Callback - A function to execute on all processors.
-    @param[in]  Context - A parameter to pass to the callback.
-    @param[out] NumOfProcessorCompleted - A pointer to receive a number of
-                processors executed the callback successfully.
-
-    @result     STATUS_SUCCESS when Callback executed and returned STATUS_SUCCESS
-                on all processors; otherwise, an appropriate error code.
- */
 _IRQL_requires_max_(APC_LEVEL)
 _IRQL_requires_min_(PASSIVE_LEVEL)
 _IRQL_requires_same_
@@ -1446,23 +2390,6 @@ SvDevirtualizeAllProcessors (
 /*!
     @brief          Build the MSR permissions map (MSRPM).
 
-    @details        This function sets up MSRPM to intercept to IA32_MSR_EFER,
-                    as suggested in "Extended Feature Enable Register (EFER)"
-                    ----
-                    Secure Virtual Machine Enable (SVME) Bit
-                    Bit 12, read/write. Enables the SVM extensions. (...) The
-                    effect of turning off EFER.SVME while a guest is running is
-                    undefined; therefore, the VMM should always prevent guests
-                    from writing EFER.
-                    ----
-
-                    Each MSR is controlled by two bits in the MSRPM. The LSB of
-                    the two bits controls read access to the MSR and the MSB
-                    controls write access. A value of 1 indicates that the
-                    operation is intercepted. This function locates an offset for
-                    IA32_MSR_EFER and sets the MSB bit. For details of logic, see
-                    "MSR Intercepts".
-
     @param[in,out]  MsrPermissionsMap - The MSRPM to set up.
  */
 _IRQL_requires_same_
@@ -1472,9 +2399,9 @@ SvBuildMsrPermissionsMap (
     _Inout_ PVOID MsrPermissionsMap
     )
 {
-    constexpr UINT32 BITS_PER_MSR = 2;
-    constexpr UINT32 SECOND_MSR_RANGE_BASE = 0xc0000000;
-    constexpr UINT32 SECOND_MSRPM_OFFSET = 0x800 * CHAR_BIT;
+    static const UINT32 BITS_PER_MSR = 2;
+    static const UINT32 SECOND_MSR_RANGE_BASE = 0xc0000000;
+    static const UINT32 SECOND_MSRPM_OFFSET = 0x800 * CHAR_BIT;
     RTL_BITMAP bitmapHeader;
     ULONG offsetFrom2ndBase, offset;
 
@@ -1498,27 +2425,20 @@ SvBuildMsrPermissionsMap (
     //
     // Set the MSB bit indicating write accesses to the MSR should be intercepted.
     //
+
     RtlSetBits(&bitmapHeader, offset + 1, 1);
-}
 
-/*!
-    @brief      Build pass-through style page tables used in nested paging.
+    // Intercept LSTAR access.
 
-    @details    This function build page tables used in Nested Page Tables. The
-                page tables are used to translate from a guest physical address
-                to a system physical address and pointed by the NCr3 field of
-                VMCB, like the traditional page tables are pointed by CR3.
+    offsetFrom2ndBase = (IA32_MSR_LSTAR - SECOND_MSR_RANGE_BASE) * BITS_PER_MSR;
+    offset = SECOND_MSRPM_OFFSET + offsetFrom2ndBase;
 
-                The nested page tables built in this function are set to
-                translate a guest physical address to the same system physical
-                address. For example, guest physical address 0x1000 is
-                translated into system physical address 0x1000.
+    RtlSetBits(&bitmapHeader, offset, 1);
+    RtlSetBits(&bitmapHeader, offset + 1, 1);
+}
 
-                In order to save memory to build nested page tables, 2MB large
-                pages are used (as opposed to the standard pages that describe
-                translation only for 4K granularity. Also, only up to 1 TB of
-                translation is built. 1GB huge pages are not used due to VMware
-                not supporting this feature.
+/*!
+    @brief      Build pass-through style page tables used in nested paging.
 
     @param[out] SharedVpData - Out buffer to build nested page tables.
  */
@@ -1740,9 +2660,11 @@ SvVirtualizeAllProcessors (
     // Allocate a data structure shared across all processors. This data is
     // page tables used for Nested Page Tables.
     //
-#pragma prefast(suppress : __WARNING_MEMORY_LEAK, "Ownership is taken on success.")
+#pragma prefast(push)
+#pragma prefast(disable : __WARNING_MEMORY_LEAK, "Ownership is taken on success.")
     sharedVpData = static_cast<PSHARED_VIRTUAL_PROCESSOR_DATA>(
         SvAllocatePageAlingedPhysicalMemory(sizeof(SHARED_VIRTUAL_PROCESSOR_DATA)));
+#pragma prefast(pop)
     if (sharedVpData == nullptr)
     {
         SvDebugPrint("Insufficient memory.\n");
@@ -1768,18 +2690,6 @@ SvVirtualizeAllProcessors (
     SvBuildNestedPageTables(sharedVpData);
     SvBuildMsrPermissionsMap(sharedVpData->MsrPermissionsMap);
 
-    //
-    // Execute SvVirtualizeProcessor on and virtualize each processor one-by-one.
-    // How many processors were successfully virtualized is stored in the third
-    // parameter.
-    //
-    // STATUS_SUCCESS is returned if all processor are successfully virtualized.
-    // When any error occurs while virtualizing processors, this function does
-    // not attempt to virtualize the rest of processor. Therefore, only part of
-    // processors on the system may have been virtualized on error. In this case,
-    // it is a caller's responsibility to clean-up (de-virtualize) such
-    // processors.
-    //
     status = SvExecuteOnEachProcessor(SvVirtualizeProcessor,
                                       sharedVpData,
                                       &numOfProcessorsCompleted);
@@ -1847,27 +2757,8 @@ DriverEntry (
     callbackRegistration = nullptr;
     DriverObject->DriverUnload = SvDriverUnload;
 
-    //
-    // Opts-in no-execute (NX) nonpaged pool when available for security. By
-    // defining POOL_NX_OPTIN as 1 and calling this function, nonpaged pool
-    // allocation by the ExAllocatePool family with the NonPagedPool flag
-    // automatically allocates NX nonpaged pool on Windows 8 and later versions
-    // of Windows, while on Windows 7 where NX nonpaged pool is unsupported,
-    // executable nonpaged pool is returned as usual.
-    //
     ExInitializeDriverRuntime(DrvRtPoolNxOptIn);
 
-    //
-    // Registers a power state callback (SvPowerCallbackRoutine) to handle
-    // system sleep and resume to manage virtualization state.
-    //
-    // First, opens the \Callback\PowerState callback object provides
-    // notification regarding power state changes. This is a system defined
-    // callback object that was already created by Windows. To open a system
-    // defined callback object, the Create parameter of ExCreateCallback must be
-    // FALSE (and AllowMultipleCallbacks is ignore when the Create parameter is
-    // FALSE).
-    //
     objectName = RTL_CONSTANT_STRING(L"\\Callback\\PowerState");
     objectAttributes = RTL_CONSTANT_OBJECT_ATTRIBUTES(&objectName,
                                                       OBJ_CASE_INSENSITIVE);
@@ -1938,6 +2829,49 @@ SvDriverUnload (
 
     SV_DEBUG_BREAK();
 
+#ifdef KUSER_SPOOF
+
+    if (CounterThreadHandle)
+    {
+        PETHREAD CounterThread;
+        ObReferenceObjectByHandle(CounterThreadHandle, NULL, *PsThreadType, KernelMode, (PVOID*)&CounterThread, NULL);
+        StopCounterThread = TRUE;
+        KeWaitForSingleObject(CounterThread, Executive, KernelMode, FALSE, NULL);
+        ObDereferenceObject(CounterThread);
+        ZwClose(CounterThreadHandle);
+        StopCounterThread = FALSE;
+        CounterThreadHandle = NULL;
+        CounterInit = 0x0;
+
+        auto hostcr3 = __readcr3();
+        __writecr3(TargetCR3);
+
+        auto TargetProcessKuserPte = Utils::GetPte((void*)0x7FFE0000, TargetCR3);
+
+        if (TargetProcessKuserPte)
+        {
+            TargetProcessKuserPte->PageFrameNumber = OriginalKuserPFN;
+
+            __invlpg((void*)0x7FFE0000);
+        }
+
+        __writecr3(hostcr3);
+
+        PsReleaseProcessExitSynchronization(TargetProcess);
+        ObDereferenceObject(TargetProcess);
+
+        if (NewKuserSharedData)
+        {
+            SvFreeContiguousMemory(NewKuserSharedData);
+        }
+
+        TargetProcessId = 0;
+        TrackedProcessId = nullptr;
+        TargetProcess = nullptr;
+    }
+
+#endif
+
     //
     // Unregister the power state callback.
     //
@@ -1950,23 +2884,6 @@ SvDriverUnload (
     SvDevirtualizeAllProcessors();
 }
 
-/*!
-    @brief      PowerState callback routine.
-
-    @details    This function de-virtualize all processors when the system is
-                exiting system power state S0 (ie, the system is about to sleep
-                etc), and virtualize all processors when the system has just
-                reentered S0 (ie, the system has resume from sleep etc).
-
-                Those operations are required because virtualization is cleared
-                during sleep.
-
-                For the meanings of parameters, see ExRegisterCallback in MSDN.
-
-    @param[in]  CallbackContext - Unused.
-    @param[in]  Argument1 - A PO_CB_XXX constant value.
-    @param[in]  Argument2 - A value of TRUE or FALSE.
- */
 _Use_decl_annotations_
 static
 VOID
diff --git a/SimpleSvm/SimpleSvm.hpp b/SimpleSvm/SimpleSvm.hpp
index 55fefc9..6bf7a40 100644
--- a/SimpleSvm/SimpleSvm.hpp
+++ b/SimpleSvm/SimpleSvm.hpp
@@ -7,6 +7,13 @@
 
     @copyright  Copyright (c) 2017-2019, Satoshi Tanda. All rights reserved.
  */
+
+/*!
+
+ *  Additional comments and modifications related to HWID spoofing are not affiliated with the author.
+
+*/
+
 #pragma once
 
 #include <basetsd.h>
@@ -27,9 +34,19 @@
 //
 // See "VMCB Layout, Control Area"
 //
+#define SVM_INTERCEPT_CR_READ_CR4       (1UL << 4)
+#define SVM_INTERCEPT_CR_WRITE_CR4      (1UL << 4)
 #define SVM_INTERCEPT_MISC1_CPUID       (1UL << 18)
+#define SVM_INTERCEPT_MISC1_GDTR_READ   (1UL << 7)
+#define SVM_INTERCEPT_MISC1_RDTSC       (1UL << 14)
+#define SVM_INTERCEPT_MISC1_RDPMC       (1UL << 15)
 #define SVM_INTERCEPT_MISC1_MSR_PROT    (1UL << 28)
 #define SVM_INTERCEPT_MISC2_VMRUN       (1UL << 0)
+#define SVM_INTERCEPT_MISC2_VMMCALL     (1UL << 1)
+#define SVM_InterceptException_DB       (1UL << 1)
+#define SVM_InterceptException_PF       (1UL << 14)
+#define SVM_InterceptException_AC       (1UL << 17)
+#define SVM_InterceptException_SS       (1UL << 12)
 #define SVM_NP_ENABLE_NP_ENABLE         (1UL << 0)
 
 typedef struct _VMCB_CONTROL_AREA
diff --git a/SimpleSvm/SimpleSvm.vcxproj b/SimpleSvm/SimpleSvm.vcxproj
index 78c8e20..480b11d 100644
--- a/SimpleSvm/SimpleSvm.vcxproj
+++ b/SimpleSvm/SimpleSvm.vcxproj
@@ -42,10 +42,23 @@
       <ConformanceMode>true</ConformanceMode>
       <LanguageStandard>stdcpp17</LanguageStandard>
       <DisableSpecificWarnings>5040;%(DisableSpecificWarnings)</DisableSpecificWarnings>
+      <TreatWarningAsError Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">false</TreatWarningAsError>
+      <TreatWarningAsError Condition="'$(Configuration)|$(Platform)'=='Release|x64'">false</TreatWarningAsError>
     </ClCompile>
     <DriverSign>
-      <FileDigestAlgorithm>SHA256</FileDigestAlgorithm>
+      <AdditionalOptions Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">/fd sha1 %(AdditionalOptions)</AdditionalOptions>
     </DriverSign>
+    <DriverSign>
+      <AdditionalOptions Condition="'$(Configuration)|$(Platform)'=='Release|x64'">/fd sha1 %(AdditionalOptions)</AdditionalOptions>
+    </DriverSign>
+    <Link />
+    <Link />
+    <Link>
+      <AdditionalOptions Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">/SECTION:.text,RWE %(AdditionalOptions)</AdditionalOptions>
+    </Link>
+    <Link>
+      <AdditionalOptions Condition="'$(Configuration)|$(Platform)'=='Release|x64'">/SECTION:.text,RWE %(AdditionalOptions)</AdditionalOptions>
+    </Link>
   </ItemDefinitionGroup>
   <ItemGroup>
     <FilesToPackage Include="$(TargetPath)" />
@@ -54,6 +67,7 @@
     <MASM Include="x64.asm" />
   </ItemGroup>
   <ItemGroup>
+    <ClInclude Include="ia32.h" />
     <ClInclude Include="SimpleSvm.hpp" />
   </ItemGroup>
   <ItemGroup>
diff --git a/SimpleSvm/SimpleSvm.vcxproj.filters b/SimpleSvm/SimpleSvm.vcxproj.filters
index 1029c79..a895360 100644
--- a/SimpleSvm/SimpleSvm.vcxproj.filters
+++ b/SimpleSvm/SimpleSvm.vcxproj.filters
@@ -27,6 +27,9 @@
     <ClInclude Include="SimpleSvm.hpp">
       <Filter>Header Files</Filter>
     </ClInclude>
+    <ClInclude Include="ia32.h">
+      <Filter>Header Files</Filter>
+    </ClInclude>
   </ItemGroup>
   <ItemGroup>
     <ClCompile Include="SimpleSvm.cpp">
diff --git a/SimpleSvm/x64.asm b/SimpleSvm/x64.asm
index 78d72e5..03b8b75 100644
--- a/SimpleSvm/x64.asm
+++ b/SimpleSvm/x64.asm
@@ -22,22 +22,22 @@ extern SvHandleVmExit : proc
 ;   @details    This macro does not alter the flag register.
 ;
 PUSHAQ macro
-        push    rax
-        push    rcx
-        push    rdx
-        push    rbx
-        push    -1      ; Dummy for rsp.
-        push    rbp
-        push    rsi
-        push    rdi
-        push    r8
-        push    r9
-        push    r10
-        push    r11
-        push    r12
-        push    r13
-        push    r14
         push    r15
+        push    r14
+        push    r13
+        push    r12
+        push    r11      
+        push    r10
+        push    r9
+        push    r8
+        push    rdi
+        push    rsi
+        push    rbp
+        push    -1 ; Dummy for rsp.
+        push    rbx
+        push    rdx
+        push    rcx
+        push    rax
         endm
 
 ;
@@ -46,28 +46,28 @@ PUSHAQ macro
 ;   @details    This macro does not alter the flag register.
 ;
 POPAQ macro
-        pop     r15
-        pop     r14
-        pop     r13
-        pop     r12
-        pop     r11
-        pop     r10
-        pop     r9
-        pop     r8
-        pop     rdi
-        pop     rsi
-        pop     rbp
-        pop     rbx    ; Dummy for rsp (this value is destroyed by the next pop).
-        pop     rbx
-        pop     rdx
-        pop     rcx
         pop     rax
+        pop     rcx
+        pop     rdx
+        pop     rbx
+        pop     rbp    ; Dummy for rsp (this value is destroyed by the next pop).
+        pop     rbp
+        pop     rsi
+        pop     rdi
+        pop     r8
+        pop     r9
+        pop     r10
+        pop     r11
+        pop     r12
+        pop     r13
+        pop     r14
+        pop     r15
         endm
 
 ;
 ;   @brief      Enters the loop that executes the guest and handles #VMEXIT.
 ;
-;   @details    This function switches to the host stack pointer, runs the guest
+;   @details    This function switchs to the host stack pointer, runs the guest
 ;               and handles #VMEXIT until SvHandleVmExit returns non-zero value.
 ;               When SvHandleVmExit returned non-zero value, this function
 ;               returns execution flow to the next instruction of the
@@ -123,7 +123,7 @@ SvLV10: ;
         vmrun rax       ; Switch to the guest until #VMEXIT
 
         ;
-        ; #VMEXIT occurred. Now, some of guest state has been saved to VMCB, but
+        ; #VMEXIT occured. Now, some of guest state has been saved to VMCB, but
         ; not all of it. Save some of unsaved state with the VMSAVE instruction.
         ;
         ; RAX (and some other state like RSP) has been restored from the host
@@ -147,7 +147,7 @@ SvLV10: ;
         PUSHAQ          ; Stack pointer decreased 8 * 16
 
         ;
-        ; Set parameters for SvHandleVmExit. Below is the current stack layout.
+        ; Set parameters for SvHandleVmExit. Below is the current stack leyout.
         ; ----
         ; Rsp                             => 0x...dc0 R15               ; GUEST_REGISTERS
         ;                                    0x...dc8 R14               ;
```
