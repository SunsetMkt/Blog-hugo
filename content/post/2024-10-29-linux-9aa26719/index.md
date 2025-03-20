---
categories: Repost
date: 2024-10-29T00:00:00Z
tags:
  - Linux
  - 信息技术
  - 开源
  - 社会评论
  - 翻译
slug: linux-9aa26719
title: "Re: [PATCH] MAINTAINERS: Remove some entries due to various compliance requirements."
---

> 请注意，本文仅作存档用途，文章叙述可能无法保证中立性。
> 阅读更多：[[PATCH] Revert "MAINTAINERS: Remove some entries due to various compliance requirements."](https://lore.kernel.org/all/20241023080935.2945-2-kexybiscuit@aosc.io/) [linux: Goodbye from a Linux community volunteer](https://lore.kernel.org/netdev/2m53bmuzemamzc4jzk2bj7tli22ruaaqqe34a2shtdtqrd52hp@alifh66en3rj/)

大家好，

我叫亚历山大·佩夫兹纳，住在俄罗斯莫斯科。

也许我就是林纳斯几天前提到的“俄罗斯水军”之一。

无论如何，我使用 Linux 作为我的主要操作系统已经有大约 30 年了（自 1.2.13 内核开始）。我还贡献了一些代码（或者更确切地说，可能是几千行代码），使得 Linux 上的无驱打印和扫描得以实现。所以，如果你使用现代多功能打印机，很有可能在你个人电脑上使用的某些组件中包含了我的项目。

对我来说，自由软件运动是非常重要的。真的非常重要。它让人们合作，不仅是个人之间的合作，还包括来自竞争公司的人之间的合作。自由软件运动有时比金钱利益更能将人们紧密联系在一起，而金钱利益常常起到分化作用。

人类的整个历史可以看作是一部充满丑陋战争的历史（战争总是丑陋的，无论其原因，因为它总是消灭了人性）。

从另一个角度看，人类的整个历史也可以看作是一部合作的历史。正是合作让我们从洞穴走向太空，创造出计算机，并为其编写操作系统和其他软件。

任何战争总有一天会结束，任何政府总有一天会成为历史的一部分，但人类合作的故事有可能超越历史而存在。

从这个意义上说，自由软件的方向与战争完全相反。它让人们合作，让人在他人眼中（以及代码中）看到人性，即使我们被战争隔离开来。

这也为自由软件的领导者们带来了巨大的责任，因为他们不仅管理代码的行数，还在某种程度上决定了人类未来的某些边界。

作为一个专业人士，我尽量将软件开发与任何形式的政治分开（大概我们也都希望医生这样做）。当我收到 PR 审查请求或错误报告时，我只关注提交的代码更改或错误描述，而不考虑发送者是谁。

Linux 基金会是软件专业人士的社区。我理解它是一个美国组织，有时受美国法律和法规的约束。

在这种情况下，我对专业组织的期望如下：

1. 发布明确的公开声明，表明根据某些美国法规，来自被制裁组织的人将无法继续担任内核维护者；
2. 与他们每个人进行个人沟通，解释发生了什么，并核实这些人是否在制裁之列；
3. 再次发布公开声明，列出受影响的人员名单，并向他们致以深深的感谢，感谢他们之前所做的工作；
4. 将这些人列入内核的名人堂（CREDITS 名单）。

遗憾的是，这些都没有做到。这非常、非常令人遗憾 :(

此致最诚挚的问候，亚历山大·佩夫兹纳 (pzz@apevzner.com)

[Source](https://lore.kernel.org/all/9aa26719-0614-4b83-b638-ac48b69be4e5@apevzner.com/)

```text
From mboxrd@z Thu Jan  1 00:00:00 1970
Received: from mail-lf1-f53.google.com (mail-lf1-f53.google.com [209.85.167.53])
	(using TLSv1.2 with cipher ECDHE-RSA-AES128-GCM-SHA256 (128/128 bits))
	(No client certificate requested)
	by smtp.subspace.kernel.org (Postfix) with ESMTPS id E2E2879C2
	for <patches@lists.linux.dev>; Sun, 27 Oct 2024 20:20:34 +0000 (UTC)
Authentication-Results: smtp.subspace.kernel.org; arc=none smtp.client-ip=209.85.167.53
ARC-Seal:i=1; a=rsa-sha256; d=subspace.kernel.org; s=arc-20240116;
	t=1730060438; cv=none; b=JDYbEILQZwh2XC6c+GvspU0Q67icFbrh/5HYLgR+fr78RHk1zdg6DDet0LHg7CvPkk7Fu8Hc4JGXuTWK14R9q64wM3I/xZ9hetXmhgRdjXBtlEgedeGx9inbPZ/C0Ffr1ueoRjDUzWC89Yv4tcmCc1enqExzwFnaz48xtAmmuVw=
ARC-Message-Signature:i=1; a=rsa-sha256; d=subspace.kernel.org;
	s=arc-20240116; t=1730060438; c=relaxed/simple;
	bh=NDjKwj6KYq8eyzvWnAuMCVUjblMxJAeNZC5/nLC9ZUA=;
	h=Message-ID:Date:MIME-Version:Subject:To:References:From:
	 In-Reply-To:Content-Type; b=P0KhCvIffgOY7dAhWbOE61I2RxOSdJS1UcpXJFHBp/SO0rofjPTrIRAKezfIPeKq4kIVG73G01BG09RsI3MybymkM6wptMD5lFhBwTfmA5AiPyV0h9/zbPlFVphQa9Vi/l+UdzkNI8gt1Na1dYGm3lN9zetpJIxtgK8vC77yTBo=
ARC-Authentication-Results:i=1; smtp.subspace.kernel.org; dmarc=none (p=none dis=none) header.from=apevzner.com; spf=pass smtp.mailfrom=apevzner.com; dkim=pass (2048-bit key) header.d=apevzner.com header.i=@apevzner.com header.b=nhpvCpZ3; arc=none smtp.client-ip=209.85.167.53
Authentication-Results: smtp.subspace.kernel.org; dmarc=none (p=none dis=none) header.from=apevzner.com
Authentication-Results: smtp.subspace.kernel.org; spf=pass smtp.mailfrom=apevzner.com
Authentication-Results: smtp.subspace.kernel.org;
	dkim=pass (2048-bit key) header.d=apevzner.com header.i=@apevzner.com header.b="nhpvCpZ3"
Received: by mail-lf1-f53.google.com with SMTP id 2adb3069b0e04-539f72c913aso4538982e87.1
        for <patches@lists.linux.dev>; Sun, 27 Oct 2024 13:20:34 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=apevzner.com; s=google; t=1730060433; x=1730665233; darn=lists.linux.dev;
        h=content-transfer-encoding:in-reply-to:from:content-language
         :references:to:subject:user-agent:mime-version:date:message-id:from
         :to:cc:subject:date:message-id:reply-to;
        bh=qA/SMxSLqXVatL6zizWumFPrrDcbY7I4o2XKLGYPLFM=;
        b=nhpvCpZ3YlIsfFnKN03q8Md5UC2fnTvhgdMHKBuP9KqoesTwWX2sLn/eA8kLHKkieD
         Fvp67luQbgAyc3iv2ESHnw4vNQg4OdVXaW3t/5urcsq4aQo3daSdeHjQ/6kU2UTKOJEv
         KfP2hpq0+o5RDtpBeEBTa+ojsDDzGL8WuBkxmexmN13jx7D5+R6slYNEssDmlqWI6z/j
         n+vhxLJGQp5fY+WmBHvL+TLlCyepd1H5RdTFEOYoEXAqoSwbqJ0GJgXNvqE2B+djXYsc
         X9PyePxUE/4f2SvIdSYEbrtf55EBeRzzRVR0274eMl/0NGWrQz4o8XJLvmBgAFjsBh0+
         t+Bg==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20230601; t=1730060433; x=1730665233;
        h=content-transfer-encoding:in-reply-to:from:content-language
         :references:to:subject:user-agent:mime-version:date:message-id
         :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;
        bh=qA/SMxSLqXVatL6zizWumFPrrDcbY7I4o2XKLGYPLFM=;
        b=e/3R6m5reWa5eVKVi4XytWg7pK5OURwvlxST1Xu2LvsY6GR3C4O3+Pe884Whp8y0PW
         Q0lBbO3kTHUJkK712hTdjjsdKZnkV7BY99CsUoLM5OCwhE3+ub27g24Wv2t4uBNKAZYK
         5IIkWRShsVzm/UivUrwEPccbR8UqJmXPBZUIpASrUk6l8FwZjXbHqxP6w+L2sAt7Ybae
         wYImub2vcwTzSZ9DOrWr8c/8ri8Oh+e4x/0bITVkh8iRCGIRPdlz1VboUavAF5ZJv8FZ
         vkUb8fHEx12nDWdYnTvoyhRnoN8mGwehs7693lrtj/e9gLWDgdk+k/MbBFfvF/QErs4P
         dEuA==
X-Gm-Message-State: AOJu0YxQbJXRlOejqN13SEaJXnWiEjeXLocnUSqTHhEDf/Po3kRcwKWp
	Twov1Rc9ToJyuvpT5Av82UJ2fKyWPxI6HMy5IdV1qiLUzkPgx6YuXDcr6mDdhGLHH2WAYyCv/MH
	o
X-Google-Smtp-Source: AGHT+IErIhzF7Pbcl1dtNSnwSsVR0KjX1OS+Oz3o2xs9b3TCYCjYRRu96N0ZL8qgAQFuLXA9VCLPvw==
X-Received: by 2002:a05:6512:2347:b0:530:c212:4a5a with SMTP id 2adb3069b0e04-53b348d3775mr2266413e87.22.1730060432434;
        Sun, 27 Oct 2024 13:20:32 -0700 (PDT)
Received: from [192.168.0.6] (ppp85-141-194-121.pppoe.mtu-net.ru. [85.141.194.121])
        by smtp.googlemail.com with ESMTPSA id 2adb3069b0e04-53b2e1cbe9dsm873320e87.225.2024.10.27.13.20.30
        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
        Sun, 27 Oct 2024 13:20:31 -0700 (PDT)
Message-ID: <9aa26719-0614-4b83-b638-ac48b69be4e5@apevzner.com>
Date: Sun, 27 Oct 2024 23:20:29 +0300
Precedence: bulk
X-Mailing-List: patches@lists.linux.dev
List-Id: <patches.lists.linux.dev>
List-Subscribe: <mailto:patches+subscribe@lists.linux.dev>
List-Unsubscribe: <mailto:patches+unsubscribe@lists.linux.dev>
MIME-Version: 1.0
User-Agent: Mozilla Thunderbird
Subject: Re: [PATCH] MAINTAINERS: Remove some entries due to various
 compliance requirements.
To: patches@lists.linux.dev, linux-kernel@vger.kernel.org
References: <2024101835-tiptop-blip-09ed@gregkh>
Content-Language: en-US
From: Alexander Pevzner <pzz@apevzner.com>
In-Reply-To: <2024101835-tiptop-blip-09ed@gregkh>
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

Hi everybody,

My name is Alexander Pevzner, and I live in Russia, Moscow.

I'm probably one of these "Russian trolls", mentioned by Linus in his
message a couple of days ago.

Regardless of that, I use Linux as my primary OS since 1.2.13 kernel (so
about 30 years for now) and I've contributed few lines of code (or, most
likely, few thousand of lines of code) to make driverless printing and
scanning work on Linux, so if you use one of those modern multifuction
printers, this is very likely that among other stuff you use one of
couple of my projects already on our personal computer.

As for me, the free software movement is the important thing. Really
important. It makes people to cooperate. Not only individuals, but
people from competing corporations. The free software movement sometimes
"glues" people stronger, that money interest, which often works to
separate people.

The whole history of the humanity can be seen as a history of ugly wars
(the war is always ugly regardless of its reasons, because it always
kills the human in a person).

 From another side, the whole history of the humanity can be seem as a
history of cooperation. It was cooperation that allowed us to get out of
the caves into outer space, to create computers and to write operating
systems and other software for them.

Any war will some day end and any government will some day become part
of the history, but the story of human cooperation has a chance to
outlive the history.

In that sense, free software works in direction just opposite to the
war. It lets people to cooperate, to see humans in another person's eyes
(and code). Even when we are separated by the war.

And it puts a lot of responsibility to the free software leaders,
because they not only manage lines of code, but somehow define edges of
the future of the entire humanity. At least, in some aspects.

As a professional, I'm trying to cleanly separate software development
from any kind of politics (probably, the same we all expect from the
medical doctors). When I receive PR for review or a bug report, I look
only to proposed code changes or bug description, regardless on who send
me it.

The Linux Foundation is the community of software professionals. I
understand that this is US organization and it is sometimes obliged by
the US laws and regulation.

What would I expect from the professional organization in a case like
this. The following:
1. The clear public note, that according to some US regulation the
people from the sanctioned organizations cannot longer act as kernel
maintainers
2. The personal communication with each of them, with explanation what
is going on and verification that these persons are under sanctions
3. The clear public note, now with the list of affected persons,
explaining that they will be removed from the maintainers list and with
the great thanks for the work that they have done before.
4. Inclusion of these peoples into the kernel's hall of fame (the
CREDITS list)

Nothing of this has be done, unfortunately. This is very, very pity :(

--
With the best regards, Alexander Pevzner (pzz@apevzner.com)
```
