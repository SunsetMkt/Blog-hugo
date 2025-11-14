---
categories: Repost
date: 2024-10-24T00:00:00Z
tags:
    - Linux
    - 信息技术
    - 开源
    - 社会评论
    - 翻译
slug: Goodbye-from-a-Linux-community-volunteer
title: "linux: Goodbye from a Linux community volunteer"
---

> 请注意，本文仅作存档用途，文章叙述可能无法保证中立性。
> 阅读更多：[[PATCH] Revert "MAINTAINERS: Remove some entries due to various compliance requirements."](https://lore.kernel.org/all/20241023080935.2945-2-kexybiscuit@aosc.io/) [linux: Goodbye from a Linux community volunteer](https://lore.kernel.org/netdev/2m53bmuzemamzc4jzk2bj7tli22ruaaqqe34a2shtdtqrd52hp@alifh66en3rj/)

你好，Linux 内核社区：

我相信你们已经听说了 Greg 最近的提交（6e90b675cf942e，“MAINTAINERS: Remove some entries due to various compliance requirements”）引起的新闻。如你所见，这次变更涉及了一些与俄罗斯相关的开发者被从官方内核维护者名单中移除，包括我在内。

社区成员正确地指出，提交日志非常简短，包含非常模糊的术语，没有明确解释变更的原因。不管我多么努力地试图了解更多详情，遗憾的是，我和一位资深维护者讨论此事时，未能得到对合规要求的解释。由于这是私人邮件往来，我不会引用确切的邮件内容，但关键词包括“制裁”、“抱歉”、“我无能为力”、“联系你的（公司）律师”等。我不能为所有受到影响的开发者发言，但我为社区工作的这一年多时间完全是志愿性质的（在此之前有不到一半的工作是有偿的）。因此，我没有任何（公司）律师可以联系，坦白说，在这种补丁被合并的方式下，我现在也不想联系了。默不作声地、背着所有人、绕过标准的补丁审查流程，且未通知任何受影响的开发者/子系统——这确实是最糟糕的处理方式。没有任何感激，也没有对这些年来为社区奉献的开发者的任何表扬。无论这次情况的原因是什么，难道我们不值得更好的对待吗？至少应该加到 CREDITS 文件里，不是吗？

我无法相信内核的资深维护者没有预料到这个补丁不会被忽视，且这种情况可能会失控，对社区产生不可预测的后果，可能不是马上，但在中期或长期角度看肯定会如此。我确信有很多方式可以更少损害地解决问题，但他们选择了最简单的路径。遗憾的是，事情已经发生了。一年前稍微显现的分歧点，现在已经完全实施了。显然，这次事件的根本原因在于政治立场，而这必然动摇了社区最初建立的基础。如果是这样，那么谁知道接下来会发生什么（还有谁会被制裁……），但这一举动显然向 Linux 社区的新成员、现有志愿者和像我这样的爱好者传递了一个不好的信号。

因此，即使我还能发送补丁或进行审查，在经历了这些后，我作为志愿者的动力已经彻底消失了。（未来我可能会从事商业上游开发）。但在告别之前，我想向所有我有幸在这些年间合作过的社区成员表达我的感激。特别是：

NTB 团队，Jon、Dave、Allen。NTB 是我开始内核上游工作的起点。感谢你们的初步建议，尽管审查非常非常非常严格，几次让我完全重构补丁集，但我从中学到了很多。这段经历对我后来帮助很大。非常感谢你们。顺便说一下，自那以后我收到了几封感谢信，感谢我为 IDT NTB 和 IDT EEPROM 驱动程序所做的工作。如果没有你们，这些都不可能实现。

Andy，在我的 Linux 内核之旅中，你对我的帮助最多。我们第一次相遇是在 I2C 子系统的审查中，我提交了 DW I2C 驱动程序的补丁。之后我们经常在各个领域见面——GPIO、SPI、TTY、DMA、NET 等，修复补丁和功能补丁集的讨论非常激烈。你的第一次审查让我快要疯了。但每次我们都能达成某种共识。你从未中断讨论，总是耐心地一遍又一遍地解释你的观点。你也从不拒绝提供更多详细的理由，尽管你本不必这样做。感谢你让我学会了如何对待审查者和被审查者。当然，感谢你分享的 Linux 内核知识和所有的小技巧。

- Andy，请注意，鉴于目前的情况，我不再会继续维护我的 DW DMAC 修复补丁集了。因此，如果你想让 DW UART 稳定地与 DW DMA 引擎驱动程序一起工作，随时可以接手这套补丁集：链接：https://lore.kernel.org/dmaengine/20240911184710.4207-1-fancer.lancer@gmail.com/

Linus（Walleij），在你合并了我一个相当大的补丁集之后，你建议我继续维护 DW APB GPIO 驱动程序。这是我第一次被要求维护一个不是自己编写的驱动程序。感谢你的信任，我永远不会忘记。

Mark，非常感谢你让我负责维护 DW APB SSI 驱动程序。我投入了很多精力使它更加通用，减少错误，尤其是在 DMA 引擎控制或内存操作模式下工作时。我相信这对很多 DW SPI 控制器用户都有很大的好处。

Damien，我们第一次也是最后一次见面是在我提交的通用 AHCI 平台和 DW AHCI SATA 驱动补丁集的审查中。你没有让这成为一条轻松的道路。但所有审查意见都纯粹基于技术基础，补丁最终也被合并了。感谢你花时间给我的审查和经验。

Paul、Thomas、Arnd、Jiaxun，我们几次在邮件列表中讨论了我的 MIPS P5600 补丁和其他 MIPS 补丁。和你们这些领域的顶尖专家讨论问题一直是件愉快的事。遗憾的是，我花了太多时间在其他子系统的补丁上，没能提交所有与 MIPS 相关的内容。抱歉我未能履行承诺，但正如你所见，情况突然为我设定了最后期限。

Bjorn、Mani，我们在 DW PCIe RC 驱动程序框架下合作了很多次。你们审查了我的补丁，而我也帮忙审查了其他补丁。尽管有些争论，但与你们合作总是很愉快。特别感谢 Mani，你与我合作维护 DW eDMA 驱动程序的过程非常愉快。我认为我们一起做得很好。

Paolo、Jakub、David、Andrew、Vladimir、Russell。网络子系统，尤其是 STMMAC 驱动（毫无疑问，驱动程序确实不太好），成了我当前 Linux 内核工作停滞的障碍。我真的希望，至少在某种程度上，我对 STMMAC 和 DW XPCS 补丁审查的帮助减轻了你们的维护工作。我知道 Russell 可能不同意，但我真心认为我们所有的讨论都是有益的，至少对我来说是这样。我也认为我们在 DW GMAC/QoS ETH PCS 补丁上一起做得很好。希望你们能找到时间完成它。

Rob、Krzysztof，从你们的审查中我学到了很多关于内核中最硬件相关的部分——DT 源代码和 DT 绑定。你们的所有评论都简洁明了，使得审查过程快速而简单。非常感谢你们。

Guenter，特别感谢你审查并接受了我提交给 hwmon 和看门狗子系统的补丁。与您合作很愉快。

Borislav，我们争论了很多，我的 DW uMCTL2 DDRC EDAC 补丁集也因此搁置了很长时间。不管怎样，感谢你花时间审查我的补丁并试图解释你的观点。

- Borislav，看起来我也不能继续处理我的 Synopsys EDAC 补丁集了。如果你或其他人能接手并完成这项工作，那就太好了（你可以在 lore 存档中找到它）。这些补丁主要将 Zynq(MP)-特定的 Synopsys EDAC 驱动转换为支持通用的 DW uMCTL2 DDRC。对基于该控制器的每个平台都将非常有益。

Greg，我们几次在邮件列表中相遇。你审查了我提交给 USB 和 TTY 子系统的补丁，整个过程一直都很直接、专业，比大多数情况下要简单得多。非常感谢你。

Yoshihiro、Keguang、Yanteng、Kory、Cai，以及我有幸在内核邮件列表中相遇但未在此提及的所有人。感谢你们与我一起为 Linux 内核的改进所做的合作。很高兴在这里与你们相遇。

我还想对那些努力为被移除的维护者辩护并在这些日子里表达支持的社区成员表示衷心的感谢。这对我意义重大。

最后总结一下我在内核方面的工作数据：

签署的补丁：518  
审查和认可的补丁：253  
测试过的补丁：80

你可能会说，七年内这不是最伟大的成就，尤其是与其他开发者相比。也许吧。但我对每一个标记都非常认真，请放心。

我想这就是全部了。如果你们需要有关我曾经维护的驱动程序、相应硬件或 Synopsys IP 内核的任何信息或咨询，随时

可以通过这个电子邮件联系我。我一直愿意帮助社区成员。

希望我们能在更愉快的情况下再见面，一起喝几杯啤酒。但现在是时候说再见了。抱歉这篇文章有点长。祝你们在 Linux 之路上一帆风顺。

此致  
Serge(y)

```text
From mboxrd@z Thu Jan  1 00:00:00 1970
Received: from mail-lj1-f174.google.com (mail-lj1-f174.google.com [209.85.208.174])
	(using TLSv1.2 with cipher ECDHE-RSA-AES128-GCM-SHA256 (128/128 bits))
	(No client certificate requested)
	by smtp.subspace.kernel.org (Postfix) with ESMTPS id 65EB822EED
	for <ntb@lists.linux.dev>; Thu, 24 Oct 2024 04:27:50 +0000 (UTC)
Authentication-Results: smtp.subspace.kernel.org; arc=none smtp.client-ip=209.85.208.174
ARC-Seal:i=1; a=rsa-sha256; d=subspace.kernel.org; s=arc-20240116;
	t=1729744073; cv=none; b=Kos3FDtwkfdo6N/12qTJ3e4GlIsE2ttG3EplQFNqyvT/+O7hhphOJOhjusDUcIBf9adX2CffHFoMtJ52w07C7yfd2n/Zs5hKbqY9xNr82fWQHB8oa5NMViLhrSMSie7AqW8aPP3e+fh2X/CQzXeovX9IQrkqhHRC0gKVwJq9OGU=
ARC-Message-Signature:i=1; a=rsa-sha256; d=subspace.kernel.org;
	s=arc-20240116; t=1729744073; c=relaxed/simple;
	bh=udiji3e41S/dEoTtioHNHBTyRBA79emtkJvqRGsL3OU=;
	h=Date:From:To:Cc:Subject:Message-ID:MIME-Version:Content-Type:
	 Content-Disposition; b=m5z3THrshSel4bVqVUa1NvcqTnlwKg5YbZbtN/eV/6itBbVA85YNg3IYYxyxPiNzAn7Tagu9mH1wgdgCRYCHBbh8RY2clnJmvCPsw0guKwA5JUEz8URxgKPUljT47AT81u8PCGw2Rj+bBjwCeHnpZOTLfTuWf6+EbtK0Zp7SvAs=
ARC-Authentication-Results:i=1; smtp.subspace.kernel.org; dmarc=pass (p=none dis=none) header.from=gmail.com; spf=pass smtp.mailfrom=gmail.com; dkim=pass (2048-bit key) header.d=gmail.com header.i=@gmail.com header.b=DQGXcgyV; arc=none smtp.client-ip=209.85.208.174
Authentication-Results: smtp.subspace.kernel.org; dmarc=pass (p=none dis=none) header.from=gmail.com
Authentication-Results: smtp.subspace.kernel.org; spf=pass smtp.mailfrom=gmail.com
Authentication-Results: smtp.subspace.kernel.org;
	dkim=pass (2048-bit key) header.d=gmail.com header.i=@gmail.com header.b="DQGXcgyV"
Received: by mail-lj1-f174.google.com with SMTP id 38308e7fff4ca-2fabb837ddbso6412541fa.1
        for <ntb@lists.linux.dev>; Wed, 23 Oct 2024 21:27:50 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=gmail.com; s=20230601; t=1729744068; x=1730348868; darn=lists.linux.dev;
        h=content-disposition:mime-version:message-id:subject:cc:to:from:date
         :from:to:cc:subject:date:message-id:reply-to;
        bh=Ryd5TahOZqM0bMgqhyVoGsVt3QmLd20VHwwITcjUN10=;
        b=DQGXcgyVpqbmWaDWDHoCgabxAxP8rt6GK/vTvwDkxhiiLig9Mdp2a5W8gHsM6n8yCB
         jLUbmxBR4Zc2hUSMDeyuuk18+WxssF6L6kEbCdLZ1Jsij9J3FrjNAzLczpvRlkLPIGGF
         mijUrH1CBinUw2fu9bYS8YmaIR2xidGNidEKH7WPqOekMdlVbYiie09aeJwDqjES9KmT
         ORAqyj2dPns6wtbzbdxNbPBBSNPsalcb/3A5Y5htdkN6kIcSidFaB5fpfBLzPWqAg1p9
         wx/Eh+yJWvcLRCrRsvc8AGIeotzExev9DVTMPGQ2xhnnrrVysAaIL8TVsBd/Q/6tDuiS
         q+YQ==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20230601; t=1729744068; x=1730348868;
        h=content-disposition:mime-version:message-id:subject:cc:to:from:date
         :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;
        bh=Ryd5TahOZqM0bMgqhyVoGsVt3QmLd20VHwwITcjUN10=;
        b=trIiyZsvlzqNDiaLZvVMu9+Wt3/smicjZmRiBOjW+oF9QaZu8eFpEV5dyF8Kh0RrW7
         CTZZhcLDx5bC/W3FJBcHOWC8nmXFwh5z5kdcGVaYo3aNhies4aFbXiFLyAFtC6QNzI+q
         bbz0iaRefIijVZARqXEsj6uLip0ObKUUa8TccMPRkJNjA902Ormf3dWRSXpybSTL8hjw
         07oC8F8QrWq9YklosU+iHH2cqjfIzO5YkyhQVU5v1goi9Wkc6/FF5LHoaHWSLMrbyuG9
         mVXfsN4jX7KYCkoTMu7oYkx1+W622Q0VwjgFG2VUvRSveuAvXb8yEJMuwotfguuLpfV/
         O3bg==
X-Forwarded-Encrypted: i=1; AJvYcCVLOR9S5MNlMGwdhWX9YDtsCbHJQ7l7Nb7kdKSAmaaN2KIGyvKu9koTAnuZrZwPiPw/YYs=@lists.linux.dev
X-Gm-Message-State: AOJu0YxX1gkCFtavkDk2XhAF0wSLu6pXgC3qGps1Z76RJ6V5GUqupjxe
	bn2SsYAHpns29up6EuF5ELc3MPaQ1C0+8/LWrLpVoUYed/DPWwiS
X-Google-Smtp-Source: AGHT+IHZKxth9EOfqbWIOdrXsG+AxCKWQsu8nuoHzE9Doq8P4mdvScM2YJyFjW8FpHm5SXynKLpdUw==
X-Received: by 2002:a05:6512:350e:b0:53b:1e70:6ab4 with SMTP id 2adb3069b0e04-53b1e706b9fmr2494138e87.14.1729744067950;
        Wed, 23 Oct 2024 21:27:47 -0700 (PDT)
Received: from mobilestation ([85.249.18.76])
        by smtp.gmail.com with ESMTPSA id 2adb3069b0e04-53a224319a7sm1242740e87.230.2024.10.23.21.27.43
        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);
        Wed, 23 Oct 2024 21:27:47 -0700 (PDT)
Date: Thu, 24 Oct 2024 07:27:41 +0300
From: Serge Semin <fancer.lancer@gmail.com>
To: Jon Mason <jdmason@kudzu.us>, Dave Jiang <dave.jiang@intel.com>,
	Allen Hubbe <allenbh@gmail.com>, ntb@lists.linux.dev, Andy Shevchenko <andy@kernel.org>,
	Andy Shevchenko <andriy.shevchenko@linux.intel.com>, Kory Maincent <kory.maincent@bootlin.com>,
	Cai Huoqing <cai.huoqing@linux.dev>, dmaengine@vger.kernel.org, Mark Brown <broonie@kernel.org>,
	linux-spi@vger.kernel.org, Damien Le Moal <dlemoal@kernel.org>, linux-ide@vger.kernel.org,
	Paul Burton <paulburton@kernel.org>, Thomas Bogendoerfer <tsbogend@alpha.franken.de>,
	Arnd Bergmann <arnd@arndb.de>, Jiaxun Yang <jiaxun.yang@flygoat.com>,
	linux-mips@vger.kernel.org, Bjorn Helgaas <bhelgaas@google.com>,
	Manivannan Sadhasivam <manivannan.sadhasivam@linaro.org>, Yoshihiro Shimoda <yoshihiro.shimoda.uh@renesas.com>,
	linux-pci@vger.kernel.org, "David S. Miller" <davem@davemloft.net>,
	Jakub Kicinski <kuba@kernel.org>, Paolo Abeni <pabeni@redhat.com>, Andrew Lunn <andrew@lunn.ch>,
	Russell King <linux@armlinux.org.uk>, Vladimir Oltean <olteanv@gmail.com>,
	Keguang Zhang <keguang.zhang@gmail.com>, Yanteng Si <siyanteng@loongson.cn>, netdev@vger.kernel.org,
	Rob Herring <robh@kernel.org>, Krzysztof Kozlowski <krzk@kernel.org>,
	Guenter Roeck <linux@roeck-us.net>, linux-hwmon@vger.kernel.org, Borislav Petkov <bp@alien8.de>,
	linux-edac@vger.kernel.org, Greg Kroah-Hartman <gregkh@linuxfoundation.org>,
	linux-serial@vger.kernel.org
Cc: Andrew Halaney <ajhalaney@gmail.com>, Nikita Travkin <nikita@trvn.ru>,
	Ivan Kokshaysky <ink@jurassic.park.msu.ru>, Alexander Shiyan <shc_work@mail.ru>, Dmitry Kozlov <xeb@mail.ru>,
	Sergey Shtylyov <s.shtylyov@omp.ru>, Evgeniy Dushistov <dushistov@mail.ru>,
	Geert Uytterhoeven <geert@linux-m68k.org>, Sergio Paracuellos <sergio.paracuellos@gmail.com>,
	Nikita Shubin <nikita.shubin@maquefel.me>, linux-renesas-soc@vger.kernel.org, linux-kernel@vger.kernel.org
Subject: linux: Goodbye from a Linux community volunteer
Message-ID: <2m53bmuzemamzc4jzk2bj7tli22ruaaqqe34a2shtdtqrd52hp@alifh66en3rj>
Precedence: bulk
X-Mailing-List: ntb@lists.linux.dev
List-Id: <ntb.lists.linux.dev>
List-Subscribe: <mailto:ntb+subscribe@lists.linux.dev>
List-Unsubscribe: <mailto:ntb+unsubscribe@lists.linux.dev>
MIME-Version: 1.0
Content-Type: text/plain; charset=us-ascii
Content-Disposition: inline

Hello Linux-kernel community,

I am sure you have already heard the news caused by the recent Greg' commit
6e90b675cf942e ("MAINTAINERS: Remove some entries due to various compliance
requirements."). As you may have noticed the change concerned some of the
Ru-related developers removal from the list of the official kernel maintainers,
including me.

The community members rightly noted that the _quite_ short commit log contained
very vague terms with no explicit change justification. No matter how hard I
tried to get more details about the reason, alas the senior maintainer I was
discussing the matter with haven't given an explanation to what compliance
requirements that was. I won't cite the exact emails text since it was a private
messaging, but the key words are "sanctions", "sorry", "nothing I can do", "talk
to your (company) lawyer"... I can't say for all the guys affected by the
change, but my work for the community has been purely _volunteer_ for more than
a year now (and less than half of it had been payable before that). For that
reason I have no any (company) lawyer to talk to, and honestly after the way the
patch has been merged in I don't really want to now. Silently, behind everyone's
back, _bypassing_ the standard patch-review process, with no affected
developers/subsystem notified - it's indeed the worse way to do what has been
done. No gratitude, no credits to the developers for all these years of the
devoted work for the community. No matter the reason of the situation but
haven't we deserved more than that? Adding to the GREDITS file at least, no?..

I can't believe the kernel senior maintainers didn't consider that the patch
wouldn't go unnoticed, and the situation might get out of control with
unpredictable results for the community, if not straight away then in the middle
or long term perspective. I am sure there have been plenty ways to solve the
problem less harmfully, but they decided to take the easiest path. Alas what's
done is done. A bifurcation point slightly initiated a year ago has just been
fully implemented. The reason of the situation is obviously in the political
ground which in this case surely shatters a basement the community has been built
on in the first place. If so then God knows what might be next (who else might
be sanctioned...), but the implemented move clearly sends a bad signal to the
Linux community new comers, to the already working volunteers and hobbyists like
me.

Thus even if it was still possible for me to send patches or perform some
reviews, after what has been done my motivation to do that as a volunteer has
simply vanished. (I might be doing a commercial upstreaming in future though).
But before saying goodbye I'd like to express my gratitude to all the community
members I have been lucky to work with during all these years. Specifically:

NTB-folks, Jon, Dave, Allen. NTB was my starting point in the kernel upstream
work. Thanks for the initial advices and despite of very-very-very tough reviews
with several complete patchset refactorings, I learned a lot back then. That
experience helped me afterwards. Thanks a lot for that. BTW since then I've got
several thank-you letters for the IDT NTB and IDT EEPROM drivers. If not for you
it wouldn't have been possible.

Andy, it's hard to remember who else would have given me more on my Linux kernel
journey as you have. We first met in the I2C subsystem review of my DW I2C
driver patches. Afterwards we've got to be frequently meeting here and there -
GPIO, SPI, TTY, DMA, NET, etc, clean/fixes/features patch(set)s. Quite heat
discussions in your first reviews drove me crazy really. But all the time we
managed to come up with some consensus somehow. And you never quit the
discussions calmly explaining your point over and over. You never refused to
provide more detailed justification to your requests/comments even though you
didn't have to. Thanks to that I learned how to be patient to reviewers
and reviewees. And of course thank you for the Linux-kernel knowledges and all
the tips and tricks you shared.

* Andy, please note due to the situation I am not going to work on my DW DMAC
fixes patchset anymore. So if you ever wish to have DW UART stably working with the
DW DMA-engine driver, then feel free to pick the series up:
Link: https://lore.kernel.org/dmaengine/20240911184710.4207-1-fancer.lancer@gmail.com/

Linus (Walleij), after you merged one of my pretty much heavy patchset in you
suggested to me to continue the DW APB GPIO driver maintaining. It was a first
time I was asked to maintain a not-my driver. Thank you for the trust. I'll
never forget that.

Mark, thank you very much for entrusting the DW APB SSI driver maintenance to
me. I've put a lot of efforts into making it more generic and less errors-prune,
especially when it comes working under a DMA-engine control or working in the
mem-ops mode. I am sure the results have been beneficial to a lot of DW
SPI-controller users since then.

Damien, our first and last meeting was at my generic AHCI-platform and DW AHCI
SATA driver patches review. You didn't make it a quick and easy path. But still
all the reviews comments were purely on the technical basis, and the patches
were eventually merged in. Thank you for your time and experience I've got from
the reviews.

Paul, Thomas, Arnd, Jiaxun, we met several times in the mailing list during my
MIPS P5600 patches and just generic MIPS patches review. It was always a
pleasure to discuss the matters with such brilliant experts in the field. Alas
I've spent too much time working on the patches for another subsystems and
failed to submit all the MIPS-related bits. Sorry I didn't keep my promise, but
as you can see the circumstances have suddenly drawn its own deadline.

Bjorn, Mani, we were working quite a lot with you in the framework of the DW
PCIe RC drivers. You reviewed my patches. I helped you to review another patches
for some time. Despite of some arguing it was always a pleasure to work with
you.  Mani, special thanks for the cooperative DW eDMA driver maintenance. I
think we were doing a great work together.

Paolo, Jakub, David, Andrew, Vladimir, Russell. The network subsystem and
particularly the STMMAC driver (no doubt the driver sucks) have turned to be a
kind of obstacle on which my current Linux-kernel activity has stopped. I really
hope that at least in some way my help with the incoming STMMAC and DW XPCS
patches reviews lightened up your maintainance duty. I know Russell might
disagree, but I honestly think that all our discussions were useful after all,
at least for me. I also think we did a great work working together with Russell
on the DW GMAC/QoS ETH PCS patches. Hopefully you'll find a time to finish it up
after all.

Rob, Krzysztof, from your reviews I've learned a lot about the most hardwary part
of the kernel - DT sources and DT-bindings. All your comments have been laconic
and straight to the point. That made reviews quick and easy. Thank you very
much for that.

Guenter, special thanks for reviewing and accepting my patches to the hwmon and
watchdog subsystems. It was pleasure to be working with you.

Borislav, we disagreed and argued a lot. So my DW uMCTL2 DDRC EDAC patches even
got stuck in limbo for quite a long time. Anyway thank you for the time
you spent reviewing my patches and trying to explain your point.

* Borislav, it looks like I won't be able to work on my Synopsys EDAC patchsets
anymore. If you or somebody else could pick them up and finish up the work it
would be great (you can find it in the lore archive). The patches convert the
mainly Zynq(MP)-specific Synopsys EDAC driver to supporting the generic DW
uMCTL2 DDRC. It would be very beneficial for each platform based on that
controller.

Greg, we met several times in the mailing lists. You reviewed my patches sent
for the USB and TTY subsystems, and all the time the process was straight,
highly professional, and simpler than in the most of my other case.
Thank you very much for that.

Yoshihiro, Keguang, Yanteng, Kory, Cai and everybody I was lucky to meet in the
kernel mailing lists, but forgot to mention here. Thank you for the time spent
for our cooperative work on making the Linux kernel better. It was a pleasure to
meet you here.

I also wish to say huge thanks to the community members trying to
defend the kicked off maintainers and for support you expressed in
these days. It means a lot.

A little bit statics of my kernel-work at the end:

Signed-off patches:		518
Reviewed and Acked patches:	253
Tested patches:			80

You might say not the greatest achievement for seven years comparing to some
other developers. Perhaps. But I meant each of these tags, be sure.

I guess that's it. If you ever need some info or consultation regarding the
drivers I used to maintain or the respective hardware or the Synopsys IP-cores
(about which I've got quite comprehensive knowledge by this time), feel free to
reach me out via this email. I am always willing to help to the community
members.

Hope we'll meet someday in more pleasant circumstances and drink a
couple or more beers together. But now it's time to say good bye.
Sorry for a long-read text. I wish good luck on your Linux-way.

Best Regards,
-Serge(y)
```

[Source](https://lore.kernel.org/all/2m53bmuzemamzc4jzk2bj7tli22ruaaqqe34a2shtdtqrd52hp@alifh66en3rj/)
