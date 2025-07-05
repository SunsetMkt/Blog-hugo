---
categories: Repost
date: "2025-07-05T00:00:00Z"
tags:
    - 信息技术
    - 开源
    - LLM
    - 华为
    - 翻译
slug: HonestyAGI-LLM-Fingerprint
title: LLM-Fingerprint
---

# Honesty Never Die

The previous GitHub repository inexplicably disappeared. This is a reupload.

# 🔍 Intrinsic Fingerprint of LLMs: Continue Training is NOT All You Need to Steal A Model!

## 🎯 Core Problem

Large language models (LLMs) face serious **copyright and intellectual property theft** issues as training costs skyrocket 💸 and model reuse becomes common. Traditional watermarking methods are vulnerable to continued training attacks - bad actors can simply train more to erase the watermarks! 😱

## 💡 Key Innovation

The researchers discovered a **simple yet brilliant approach**: analyzing the **standard deviation patterns** of attention parameters across model layers. These patterns act like unique "fingerprints" 🔬 that are:

- ✅ **Robust** - survive extensive continued training
- ✅ **Intrinsic** - emerge naturally from model architecture
- ✅ **Simple** - just need `torch.std()` on parameter matrices!

## 🔬 Methodology

For each transformer layer, they extract Q, K, V, O projection matrices and compute:

```plain
σ = std(Matrix_parameters)
```

Then normalize across layers to create distinctive signatures that can identify model lineage even after major modifications.

## 🚨 Bombshell Discovery

**Major finding**: Huawei's **Pangu Pro MoE model** shows extraordinary correlation (0.927) with **Qwen-2.5 14B**, suggesting it was derived through "upcycling" rather than trained from scratch! 😲

This indicates:

- 🚫 Potential **copyright violation**
- 📄 **Information fabrication** in technical reports
- 💸 False claims about massive training investment

## 🧪 Validation Results

The method successfully detected known lineage relationships:

- ✅ Llama-3.1-Nemotron (fine-tuned from Llama-3.1-70B)
- ✅ Various Qwen derivatives
- ✅ Qwen1.5-MoE (upcycled from Qwen-1.8B)

## 🎯 Impact & Implications

- 🛡️ **Protects IP rights** in the AI industry
- 🔍 **Detects model plagiarism** with high confidence
- ⚖️ Provides **legal evidence** for copyright enforcement
- 🌍 Promotes **transparency** and **accountability** in AI development

## ⚠️ Limitations

- Works best on **large models** (billions of parameters)
- May be less effective on **smaller models** due to limited statistical power
- Requires access to model parameters (not just outputs)

## 🔮 Broader Context

This research highlights the **urgent need** for robust authentication methods as:

- 💰 Training costs reach millions of dollars
- 🏃‍♂️ Market pressure drives rapid development
- 🌐 Geopolitical tensions affect AI supply chains
- 🎭 Companies may take shortcuts to demonstrate capabilities

## 💪 Why This Matters

In an era where **"continue training is NOT all you need to steal a model"**, this work provides the AI community with practical tools to maintain **fair competition** and **protect innovation** while fostering continued technological advancement! 🚀

---

# 🆕 Update

Based on the feedback and suggestions from the open-source LLM community, we further examined more architectural patterns of Pangu and other models. The investigation focused on QKV bias projections and attention layer normalization weights using the same normalized standard deviation measurements introduced in our paper.

## 🔬 QKV Bias Analysis Results

![QKV Bias Analysis](qkvbias.png)

The QKV bias analysis reveals striking similarities between Pangu and Qwen2.5-14B across all three projection types (Q, K, V). Both models exhibit nearly identical patterns, particularly in the characteristic spike at early layers followed by convergence behavior. This is especially significant given that QKV bias was a distinctive design feature of Qwen generations 1-2.5 (as documented in their technical report: https://arxiv.org/abs/2309.16609), while most open-source models have abandoned this approach, including Qwen3.

Ref:

- https://github.com/huggingface/transformers/blob/037755ed54208eefa77673b0af2a0b13e51f2fb1/src/transformers/models/qwen2/modeling_qwen2.py#L136
- https://gitcode.com/ascend-tribe/pangu-pro-moe-model/blob/main/modeling_pangu_moe.py#L303

## 🔬 Attention LayerNorm Weight Patterns

![Attention LayerNorm Analysis](layernorm.png)

The attention LayerNorm weight analysis further reinforces these similarities. Pangu and Qwen2.5-14B demonstrate remarkably consistent trends across the layer sequence, with parallel initialization patterns and convergence behaviors that distinguish them from other models like Qwen2-57B-A14B and Qwen3-30A3B.

## 💡 Beyong Parameters: Model Activation (Ongoing)

![Activation Norms on Pile LayerNorm Analysis](pileactivation.png)

We are analyzing the activation norms of each layer. We randomly sampled 1k batches of samples in The Pile test set (https://pile.eleuther.ai/) and computed the norm of activations. We also use the same layer-wise normalization method. The batch size is 8 and the sequence length is 1024. Initial results are posted here. Pangu is _still_ similar to Qwen. This indicates that their computation patterns have substantial overlaps.

\*Note that the increasing of activation norm with layers is common for pre-norm based LLMs due to the residual connection.

## 🔍 Implications

These architectural similarities extend beyond coincidental design choices. The consistency observed is almost EVERYWHERE: QKVO matrices (Figure 3 in our paper), FFN (Figure 8 in our paper), QKV bias, and attention RMSNorm. These are _all critical components_ of a large language model.

**All of these points are coincidences? Probably not.**

One or two types of overlap can be coincidences (also see Figure 3 in our paper, some models may have overlap in V and O matrices). But in Pangu's case, there are TOO MANY coincidences, and we are investigating more "coincidences" along with the open-source community.

Please DO NOT FOOL the community around the world.

We sincerely invite researchers from the LLM community to contribute more evidence about this case.

💡New: we are actively update and supply our experiments & analysis. Some additional results **(such as Qwen 1.5 MoE/Qwen 2 MoE)** can be found in this issue https://github.com/HonestAGI/LLM-Fingerprint/issues/8. Stay tuned 😁!

---

## 🤣 Other

- We also noticed that the official repo of Pangu abnormally contains the license of Qwen 2024:
  https://gitcode.com/ascend-tribe/pangu-pro-moe-model/blob/main/Open%20Source%20Software%20Notice
  https://gitcode.com/ascend-tribe/pangu-pro-moe-model/blob/main/configuration_pangu_moe.py#L3
  https://gitcode.com/ascend-tribe/pangu-pro-moe-model/blob/main/modeling_pangu_moe.py#L3

Since the Qwen 2.5 family is published in 2024, this is **consistent with our findings**.

- We noticed the revelation of fraud in the issue, which is **consistent with our findings**.

https://github.com/HonestAGI/LLM-Fingerprint/issues/2
https://github.com/HonestAGI/LLM-Fingerprint/issues/4

They mentioned that the developer's team changed the model's vocabulary. This can explain why the vocab sizes of Pangu and Qwen are different (as well as their used tokens). The developers may want to conceal their fraud through this deliberate operation, because using the same vocab is too easy for the community to identify the overlap 🤣. The issues also mentioned benchmark cheating via training on test sets, but this is not the scope of this project.

- We received messages from multiple whistleblowers (claimed to be) in their team. They confirmed the accusation towards Pangu Pro MoE and also confirmed that there exists a version of Pangu Ultra MoE that is "very similar" to DeepSeek-V3 (still upcycling, but in other ways, which matches the information provided by issues 2&4). Nonetheless, these messages are not verifiable because Pangu Ultra MoE is not released and we are not able to confirm the identities of these whistleblowers.

---

_🤝 Conducted by the Honest AGI Community - promoting transparency and integrity in AI development_
