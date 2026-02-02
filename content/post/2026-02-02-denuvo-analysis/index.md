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

[来源](https://www.reddit.com/r/PiratedGames/comments/1pncra1/mkdev_hypervisor_text/)，`gemini-3-pro-preview`翻译。

该虚拟机监视器（Hypervisor）方案背后的思路是，它解决了一些通过其他方法很难修补的检测，无论是由于 Denuvo 的代码路径随机化、自修改代码还是完整性检查。
下面列出了已修补的检测项。假设当这些检测被排除在外时，P2P（破解组）将能够处理本 .txt 末尾列出的其余环境检测，因为那些更难进行保护。
更多详情请参阅虚拟机监视器源代码（SimpleSvm 的修改版本）和本 .txt 底部的资源部分。该代码仅用于概念验证（PoC），比较凌乱。

我们希望人们能接手这项工作，改进该方法，并带回 Day 0 发布。

---

[SGDT]

SGDT 指令对于虚拟化客户机有一个专用的拦截功能。为了便于拦截，CR4.UMIP 已被禁用。CR4 的读写操作会被拦截，以向 Windows PatchGuard 掩盖这一更改。

当目标游戏进程中命中此指令拦截时，客户机的 GdtrBase 和 GdtrLimit 会被更改为一个固定值，禁用中断，设置陷阱标志（trap flag），并在执行下一条指令前修正 GDTR 值。

在 SGDT 指令期间可能遇到的 #PF、#AC 和 #SS 异常，当 GDTR 加载了欺骗值时会被拦截，否则可能导致三重错误（triple fault）。

请注意，这样做只是为了避免对指令进行解码，NoirVisor 中有一种对指令进行解码的不同方法可用。

如果需要，SIDT、SLDT 和 STR 指令也有专用的拦截功能。

---

[CPUID]

CPUID 指令对于虚拟化客户机有一个专用的拦截功能。
对于子叶 0x1、0x80000002、0x80000003 和 0x80000004，当在目标游戏进程中执行该指令时（通过 CR3 检查），虚拟机监视器会使用生成许可证的那台 PC 的值作为结果。
通过检查 RIP，欺骗仅限于文件中的 Denuvo 部分，但这并非必要，并且可能导致漏掉检测，因为 Denuvo 可能会在其区域之外执行 CPUID。

---

[SYSCALL]

虚拟化客户机的 LSTAR 被重定向到我们的钩子（hook），该钩子会检查 CR3 是否匹配目标进程、执行指令的 RIP、EAX 中的值（针对 syscall）以及 SYSTEM_INFORMATION_CLASS。如果根据这些检查不需要欺骗 SYSCALL 结果，钩子将跳转到原始操作系统的 LSTAR。如果需要欺骗，
我们将 NRIP 从 RCX 移动到 RAX，并将 RCX 移动到我们在已修补游戏进程中的 syscall 处理程序地址，然后执行 64 位 SYSRET。注意，在跳回 NRIP 之前需要修正 RCX 以保存 NRIP，否则钩子可能会暴露。

限制欺骗仅针对 Denuvo 部分的 RIP 检查是不需要的。

源码中包含了避免 AMD 处理器上 PatchGuard 检测的必要代码，已在配备 Zen 3 CPU 的 Win11 24H2 build 26100.3037 上测试。

请注意，x86 引入 FRED 可能需要调整代码，并且 Windows PatchGuard 未来可能会有更多的检测方法来防止钩子，但这些发展都不会成为根本性障碍，因为最终提供此指令结果的是操作系统（总是可以修补的），而不是 CPU 直接提供的。

---

[KUSER_SHARED_DATA]

目标游戏进程 KUSER 页面的 PFN 被替换为一个可共享 PE 节（section）的 PFN，该节保存了来自生成许可证的那台 PC 的 KUSER。
该节中的动态字段随后由虚拟机监视器驱动程序（HyperHide 有此实现）或已修补的游戏进程持续更新。
详情请在源码中搜索 KUSER_SPOOF。

---

[XGETBV]

并非所有 x86 处理器都支持 XGETBV 指令，这一点在 CPUID.01H:ECX.XSAVE[bit 26] 中指明。
如果 XSAVE 位为 0，Denuvo 不会执行此指令，因为这在非常旧的 CPU 上可能导致 #UD 异常。
虚拟机监视器提供的 CPUID 结果使该位为 0，因此该检测被修补。

如果 Denuvo 忽略 CPUID 位，该指令的潜在值也是有限的，因为结果取决于 XCR 寄存器，而后者基于 CPU 的特性集。可以为所有少数潜在结果请求许可证，
这是修补该检测的另一种方法。

---

[AMD/Intel 或不同 CPU 代际之间的浮点不精确性以及具有未定义标志状态的指令]

如果 Denuvo 利用了这些差异，可以在不同的 CPU 上生成新许可证来解决这些检测。注意，这并非是每个 CPU 都会提供不同结果的情况，而是取决于架构，因此可能性的数量再次相当有限。

---

[未被虚拟机监视器修补的检测]

NTDLL 检测，如图像数据目录（Image Data Directory）、导入 RVA（Import RVAs）
GetVolumeInformationW
GetWindowsDirectoryW
GetComputerNameW
GetUsernameW
CryptGetProvParam - 用于获取 CryptoAPI CSP UniqueKeyContainer，该容器随操作系统版本和 MachineGuid 变化
PEB +118, 11C, 12C, 130, B8

---

资源：

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
