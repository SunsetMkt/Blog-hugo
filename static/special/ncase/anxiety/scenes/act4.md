# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: （游戏已自动保存）

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: *（叹气）*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: 所以这一切到底^他妈的^意义在哪？

`hong({body:"one_up", eyes:"annoyed"})`

h: 我们*能学到*什么？我*在*犯蠢，我的"朋友们"*在*利用我，而且我们差点^他妈的^*死掉了*。

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[是啊，更不用说那些医疗费。](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[是啊，更不用说遭殃的肝。](#act4a_liver)
{{/if}}

[是啊，那*确实*是最糟的情况。](#act4a_worst)

[是啊，我是对的。](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: 嗯。我不觉得我的保险还包括“做出^傻逼^行为”。

`hong({eyes:"annoyed", mouth:"normal"});`

b: 但是尽管如此...我们活下来了！

`hong({eyes:"normal"});`

h: ？

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: 我们肯定把自己的预期寿命削没了好几年...

`bb({eyes:"surprise"});`

b: 但至少我们*还有*预期寿命！我们活下来了！

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ？

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: 但是尽管如此...

h: 嗯？

`bb({eyes:"surprise"});`

b: 我们活下来了！

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: 但是...你也是对的。

`hong({eyes:"surprise"});`

h: 嗯？

`bb({eyes:"normal"});`

b: 我*确实*是叫狼来了的那只狼。所以当*真正的*危险来临的时候，你-理所当然地-没有相信我。

`bb({eyes:"surprise_r"});`

b: 但是尽管如此，我们活下来了！

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: 尽管发生了这所有的一切，我们仍然在这里。

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h:  我们才刚和死亡擦肩而过，但你看上去还蛮冷静的嘛。
{{/if}}

{{if !_.INJURED}}
h: 我们才刚和死亡擦肩而过*还转身打了个招呼*，但你看上去还蛮冷静的嘛。
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: 这个嘛，和刚才的情况比起来一切都没那么可怕了。这也让我开始思考。

`bb({eyes:"normal", mouth:"normal"});`

b: 也许我对抗你很糟糕，因为这并没有保护到你...

h: 但是我对抗你*也*很糟糕，因为那只让你叫嚷得更嗨...

`bb({eyes:"normal_r"})`

b: 那么也许...

`bb({eyes:"normal"})`

h: 也许我们没必要彼此对抗。

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("smash_glass");
```

(...2601)

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: 我不是大坏狼。但我也不是守卫狼。

`bb({eyes:"sad_d"})`

b: 我是只遍体鳞伤的流浪狗。

`bb({eyes:"sad"})`

b: 我们经历了太多不好的事情，受到心理创伤或是被轻视冷漠。这就是为什么我有时反应过度然后：

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: 啊啊啊啊啊啊啊啊啊啊啊啊

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: 但是我不*想*当只懦弱的狗！我想保护你！我想做一只好狗！

`bb({eyes:"sad", mouth:"normal"});`

b: 人类...你能帮助我驯服这只狼吗？

`hong({eyes:"sad"})`

h: 我...我会试试。

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: 好。与情绪建立健康的关系。这需要沟通。所以我们聊聊吧。

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: 接下来的五分钟会听上去很矫情，但我们还是要装出样子直到达成目的。

```
hong({body:"hands_2", mouth:"normal"});
```

h: 亲爱的内心的狼...*你*现在感觉怎么样？

n2: 总共使用的恐惧：

n2: *受伤* {{_.attack_harm_total}}, *不被爱* {{_.attack_alone_total}}, *坏人* {{_.attack_bad_total}}

n2: 你想先谈哪个恐惧？（其他的可以等会再谈）

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[我害怕我们会受伤。](#act4_harm)

[我害怕我们会独自一人。](#act4_alone)

[我害怕我们是坏人。](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: 我想保护你不受身体上的伤害，

`bb({eyes:"sad_d"})`

b: 但是*整个世界*都看上去很危险。充斥着悲剧和邪恶。

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: 我不知道，由*我*决定的说的话够多了。*你*怎么认为，人类？
{{/if}}

{{if _.a4_fears_discussed==2}}
b: 那么，还是回到你，人类。你怎么认为？
{{/if}}

{{if _.a4_fears_discussed==3}}
b: 还有别的想法吗，人类？
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[你是对的。那么让我们保护自己吧。](#act4_harm_skills)

[让我们暴露给*更多*危险吧。](#act4_harm_exposure)

[谢谢。](#act4_thanks) `_.thanks_for = "人身安全";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: 但是...怎么做？我有尖牙也有利爪，但我只是个隐喻而已。

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: 我们可以学习防身术？加入一个互相保护对方的团体？提高我们的身体素质和社会距离？

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: 也许吧，但是...

[我们从哪开始？](#act4_harm_skills_start)

[如果这些都不奏效怎么办？](#act4_harm_skills_work)

[要是我们过于看重了“安全”怎么办？](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: 有那么多需要做的事情，那么多我们需要修好自己的地方。我们要从哪*开始*？

`hong({ body:"shrug", eyes:"surprise" })`

h: 从现在开始。

`bb({ eyes:"normal", mouth:"narrow" })`

b: 啊？

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: 我们现在就在进行有效沟通，这就会减少错误的绝对性，帮助我们更好地察觉危险，

`hong({ eyes:"surprise" });`

h: *这样*就会保护我们不受伤害！

`hong({ eyes:"normal", mouth:"normal" });`

h: 所以：这*就是*防身术训练。

`bb({ eyes:"normal_r" })`

b: 蛤。我本来还在期待更多这样的：

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: 确实，没有百分之百能保护我们的方法...

`hong({ body:"one_up" });`

h: 但即使会有百分之一的进步也值得这么做，对吧？

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: 即使杯子百分之九十九都是空的，你也说它还有百分之一的水？

`bb({ eyes:"normal" });`

h: 如果你正被困在沙漠里的话，它仍是有价值的。

`bb({ eyes:"closed" });`

b: 好吧。那干杯吧。

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: 我是说，你无视我的警告就是因为*我*过于看重安全！

`bb({ body:"normal", eyes:"normal" })`

h: 算啦，你是对的。我们会适度地注意安全。做所有事都适度。

`bb({ eyes:"suspect" })`

b: 你说什么，*所有事*？

`hong({ eyes:"annoyed" })`

h: 适度地做*适度的事*。

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: 感谢你让你的说辞前后逻辑连贯。

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: ***什么***

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: 我是说，比如有一只害怕雷声的狗。

`hong({ body:"hands_1" });`

h: 一种老练训练员的做法是播放低音量的雷声，狗冷静下来了就给它奖励。

`hong({ body:"hands_2" });`

h: 训练员在接下来的几天里慢慢调高雷声的音量，直到那条狗完全克服对雷声的恐惧。

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: 这叫暴露疗法！

`hong({ body:"point", eyes:"normal" });`

h: 既然你是狗，这种疗法对你应该也有效，对吧？所有哺乳动物都有同样的急性应激反应。

`hong({ body:"normal" });`

[要是我们麻木*过头*怎么办？](#act4_harm_exposure_overboard)

[要是我们遇见的是*真正的*危险怎么办？](#act4_harm_exposure_hurt)

[我是狼，不是狗。](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: 那我就温柔耐心地对待你，直到你被训成一只可爱的小狗。

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: 嗷。

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: 我们*才刚刚*看到了要是你失去恐惧会怎样- 你把自己置于了*真正的*危险境地。

`bb({ eyes:"angry_r", body:"one_up" })`

b: 再说，*过于*麻木不会让我们变成心理变态吗？

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: 不久我们就会发现自己在边吃爆米花边看鼻烟谋杀毛片！

`hong({ eyes:"annoyed" })`

h: 我...觉得那和雷声还是有区别的。

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: 但是区别的界线*在哪*，人类？*在哪？！*

`hong({ eyes:"surprise", body:"one_up" })`

h: 我不知道。但*你*可以帮助我！

`hong({ eyes:"normal", body:"normal" })`

h: 和你一起探讨协商，我们会画出那条界线的。

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: 好吧，但我没有大拇指，所以画画那部分得你来做。

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: 比如：我们从^他妈的^*屋顶*跳下去！
{{/if}}

{{if !_.INJURED}}
b: 比如：我们差点从^他妈的^*屋顶*跳下去！
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: 不你是对的，是*有可能*做过头。

`hong({ eyes:"normal" });`

h: 但那也是为什么，如果我们使用暴露疗法，我们会一小步一小步地向上走。

h: 在发生*真正的*危险之前，我们就停下。

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: 嗯我觉得听雷声和戴着高尖帽杵在暴风雨里还是有区别的。

(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: 等等，你没有其它想对我说的吗？就只是...“谢谢”？

`hong({ eyes:"surprise", body:"shrug" })`

h: 对呀！谢谢你关心我的{{_.thanks_for}}.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: 你还好吗？

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: 你从没对我说过*谢谢*。

`hong({ mouth:"smile" });`

h: 哦你这个毛茸茸软绵绵的大可怜狼。

(#act4_something_else)

# act4_thanks_2

h: 即使你反应过度，我依旧感谢你关心我的{{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: 等等...你不会是在用“谢谢”来回避对恐惧的讨论吧？

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: 唔，事情很复杂。而且我并不总是能准备好答案的。

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: 生活又不会给你提供备好的答案清单。

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: 但现在，我至少可以说声谢谢。

b: 那么，也谢谢你，这么耐心地听我说。

`bb({ eyes:"closed" });`

b: 你这个没毛的小动物。

(#act4_something_else)

# act4_thanks_3

h: 虽然你的乱叫吓到了我，但其实你只是想保护我的{{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: 行了行了，你再这样奉承我，网友们会对我们有什么奇奇怪怪的想法的。

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: 得了吧，我只是个脆弱的大学生而你是个巨大的可怕的狼。能发生什--

`hong({ eyes:"normal", body:"point" });`

h: 那什么，你别回答。

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: 我想确保满足你内心深处对归属感的需求...

`bb({ eyes:"sad_u" });`

b: 但是我担心要是有任何人了解了我们- *真实的*我们- 我们会把他们都吓跑。

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: 我不知道，由*我*决定的说的话够多了。*你*怎么认为，人类？
{{/if}}

{{if _.a4_fears_discussed==2}}
b: 那么，还是回到你，人类。你怎么认为？
{{/if}}

{{if _.a4_fears_discussed==3}}
b: 还有别的想法吗，人类？
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[我同意：让我们努力提升自己的社交生活吧。](#act4_alone_skills)

[我觉得人们是喜欢我们的。一起找找看？](#act4_alone_experiment)

[谢谢。](#act4_thanks) `_.thanks_for = "社会归属感";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: 我们可以练习技巧，像是提问，倾听，强调，开放思想，诸如此类？

`hong({ eyes:"normal_l" });`

h: 或者养成更好的社交习惯，像是安排时间陪朋友，或是固定每隔一段时间就去参加聚会？

`hong({ body:"one_up" });`

h: 还能让我们适应被拒绝。

`hong({ eyes:"normal" });`

h: 或是分辨出*没有*在拒绝我们的人，这些人只是累了或是天生长着一张臭脸。

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: 看来选择有很多。但是关于这个“学习社交技巧”...

[那不会是*摆布别人*吗？](#act4_alone_skills_manipulative)

[那不会让我们*更容易被摆布*吗？](#act4_alone_skills_manipulated)

[如果我们还是失败了呢？](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: 连环杀手不就是特别擅长使用“同理心”读取受害者的情绪的人吗？

`bb({ eyes:"annoyed" });`

b: 查尔斯·曼森不就获得了朋友和追随者吗？

`hong({ eyes:"annoyed", body:"chin" });`

h: 嗯，你是对的。

h: 如果我们不是真心实意地*在乎*他人，“社交技巧”将没有任何意义。

`hong({ body:"normal" });`

h: 总的来说就是，别当个^混球^。

`bb({ eyes:"annoyed", mouth:"smile" });`

b: 真是个激励人心的宣传标语。

`hong({ body:"shrug", mouth:"narrow" });`

h: “别当个^混球^™”

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: 我们会成为门口的擦鞋垫，一边说着请和谢谢一边让人们踩在我们脸上反复摩擦！

`bb({ mouth:"scream", eyes:"scream" })`

b: 我们要用热脸贴多少冷屁股，我们的嘴会变得像是涂了棕色的口红！

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: 嗯，你是对的。“社交技巧”不能只是取悦他人，也得包括设定*界限*。

`hong( body:"one_up" });`

h: 如果我们的房子没有墙作为支撑，我们就不能邀请别人进我们家。

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: 还有...那个口红的画面...*呕？？*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: 我们可能会失败。不对，我们*会*失败的。

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: 而那也没关系！每个人在刚开始学新东西时都会失败的！

`hong({ body:"normal", eyes:"normal" });`

h: 所以让我们一起在失败中前进吧，好吗？

`bb({ eyes:"normal_r" });`

b: 当然了，我猜...最坏的情况，我们可以直接跑路，然后整个新身份。

`bb({ eyes:"normal" });`

h: 是啊我觉得在这个年代做到这些只需要花两个比特币。

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: 我们可以做些实验！

`hong({ body:"chin" });`

h: 我们可以约个朋友出去玩，重新联系一个以前的朋友，或者就只是和一个咖啡师唠会嗑。

`hong({ body:"normal" });`

h: 我觉得我们也许会发现我们比自己想的要更讨人喜欢。

`bb({ eyes:"annoyed" });`

[如果这些只是渺小的，廉价的“胜利”呢？](#act4_alone_experiment_cheap)

[如果这给别人造成了负担呢？](#act4_alone_experiment_burden)

[但只是唠会嗑无法代表*真实的*我们！](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: 如果我们挂着假笑，我们就不可能和任何人建立真正的联系，

`bb({ eyes:"super_sad" });`

b: *但是*如果我们敞开心扉，其他人就会看到我们一团糟的内心！

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: 翻个身。

b: 什么。

`hong({body:"hands_1"})`

h: 当狗想展示爱和信任的时候，它们会露出肚子使自己变得脆弱。

`hong({body:"one_up"})`

h: 也许我们*还*无法安心变得太脆弱，但只要多练习，

`hong({body:"normal", eyes:"surprise"})`

h: 有一天我们会能够向人们展示真实的自己- 遭到透顶，但是有人情味。

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: 你奖励我的话我就翻身。

`bb({ eyes:"normal", mouth:"normal" });`

h: 免了。

(#act4_something_else)


# act4_alone_experiment_cheap

b: 跟咖啡师说声“嗨”可不是个在交际花奥运会里能拿金牌的表现。

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: 这是为了*我们*！

`hong({ body:"one_up", eyes:"annoyed" });`

h: 在社交舞台上，我们的级别连轻如鸿毛都算不上，我们大概...要以夸克为计量单位。

`hong({ body:"normal", eyes:"normal" });`

h: 如果我们非得从渺小的，廉价的“胜利”开始，那就这么做。在走到第一千步之前得先迈出第一步。

b: 对！也许说了“嗨”之后，我们下一步可以说...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *“你怎么样？”*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *“就那样吧！”*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: 也许那个咖啡师只想煮点咖啡，而不是被当做测试我们的社交技巧有多菜的*小白鼠*。

`bb({ eyes:"annoyed" })`

h: 这个，如果我们*真成了*人家的负担...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: 能知道这点也很好！

`hong({ eyes:"normal" });`

h: 我们就可以学习如何主动地询问另对方感觉舒服的表达方式，了解并尊重他人的界限。

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: 你知道的，那些心理咨询小册子里写的关于“人际沟通能力”的玩意儿。

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: 我想守护你的道德需求，让你成为一个更好的人，

`bb({ eyes:"sad_d" })`

b: 但是怎么感觉在内心深处，我们破碎得...那么彻底。

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: 而且别跟我说我们*不是*一团糟。我们刚才从*房顶*上跳下去了。
{{/if}}

{{if !_.INJURED}}
b: 而且别跟我说我们*不是*一团糟。我们刚才差点从*房顶*上跳下去了。
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: 我不知道，由*我*决定的说的话够多了。*你*怎么认为，人类？
{{/if}}

{{if _.a4_fears_discussed==2}}
b: 那么，还是回到你，人类。你怎么认为？
{{/if}}

{{if _.a4_fears_discussed==3}}
b: 还有别的想法吗，人类？
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[所以我们破碎得彻底。那我们把自己修好吧。](#act4_bad_fix)

[所以我们破碎得彻底。那我们就接受这点吧。](#act4_bad_accept)

[谢谢。](#act4_thanks) `_.thanks_for = "道德幸福感";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: 我们可以慢慢养成更好的习惯，让我们的人生迈向正轨，获得价值，

`hong({body:"one_up"});`

h: 如果需要，我们可以寻求专业的帮助-心理治疗师或是心理咨询师。

`hong({body:"normal"});`

h: 总会有办法修好我们的。

[如果我们没法完全修好呢？](#act4_bad_fix_cant)

[如果我们修*过多*了呢？](#act4_bad_fix_too_much)

[我们负担不起专业帮助。](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: 啧，我想你是对的。

h: 我们不可能完全修好。

`bb({mouth:"scream", eyes:"scream_sad"});`

b: 啊啊我就知道我们永远都会是坏掉的！

`hong({eyes:"surprise"});`

h: 但至少我们可以*不那么*破碎。

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: 伤口会随着时间愈合，但它们从不消失。而那也没关系。

`bb({eyes:"annoyed_r"});`

b: 我猜吧。再说，

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: 过去的伤疤*很性感*。

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: 求你别来这套。

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: 我很不想承认，但是...我内心的一部分*想要*继续保持这份混乱。

`bb({ eyes:"angry" })`

b: 我是说，没了它，我们不是会成为*无聊的人*吗？

`bb({ eyes:"sad_r", body:"one_up" })`

b: 没了它，我们的作品不会变得又陈腐又乏味吗？

`bb({ eyes:"sad_u", body:"two_up" })`

b: 没了它，我们还怎么和同样有这种混乱的朋友交流？

`bb({ eyes:"sad", body:"chest" })`

b: 如果我们开始对自己的生活感到满足，我们岂不是会停止驱动自己去干更伟大的事吗？

`hong({ MOUTH_LOCK:true })`

h: ...

h: 要是我们甚至对“克服恐惧”...感到恐惧...

h: 我想我们永远都无法克服恐惧。

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: 哦，对哦！咻！真是令人松了一口气！

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: “医生，我很焦虑因为我正花一小时一百的咨询费来听你重复*这让你有什么感觉？*”

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: “嗯-嗯。那么这让你有什么感觉？”

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: 嗯，这是很合理的担忧。

`hong({ eyes:"annoyed", mouth:"sad" });`

h: 很多人都负担不起心理医疗这件事遭到透顶。

`hong({ eyes:"normal", mouth:"normal" });`

h: 但是尽管如此，还是有一些便宜或是免费的选择的：

`hong({ body:"chin" })`

h: 互助小组，线上治疗，针对学生的/非盈利的健康中心...

`hong({ body:"hands_1" })`

h: 养成像是吃药啊，按时睡觉啊，定期和朋友聊天啊，学习新鲜事物啊这样的习惯。

`hong({ body:"hands_2" })`

h: 去图书馆借书来寻找有证据支撑的心理疗法...

`hong({ body:"one_up" })`

h: 在游戏的末尾会有一张完整的资源清单！

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: 嘿，*我们这个*第四面墙没能持续多久啊。

`hong({ body:"point" });`

h: 有些东西比叙事规范更重要。比如心理健康。

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: 我的意思是，心理治疗师不就是这么说的吗？接受你的所有情绪，哪怕是负面情绪？

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: 等等。

[“接受”是说*放弃*？](#act4_bad_accept_give_up)

[“接受”是说*赞成*？](#act4_bad_accept_approve)

[“接受”是说*就从字面上理解*？](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: 难道你觉得马丁·路德·金会说，“害，我们不能坐公交前面的位子，让我们*接受*这点吧”？

`bb({ eyes:"angry_r", body:"two_up" });`

b: 为什么那些鸡汤产业会输出挥舞白旗是什么*大智慧*的观念？

`bb({ eyes:"annoyed", body:"normal" });`

h: 我觉得当医生说“接受”不好的事物的时候是说： 承认它们的存在，并承认它们很难改变，

h: 但并不是说一定要放弃改变。

`bb({ eyes:"suspect" });`

b: 那他们就该说*承认*，而不是*接受*。

`hong({ body:"chin", eyes:"annoyed" });`

h: 哈这么一想，“接受”这个词是有点令人费解。

`bb({ eyes:"closed", mouth:"narrow" });`

b: 嗯哼，我*承认*这点。

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: 像是我们坏掉之类的是件好事？好个毛！

`bb({ eyes:"angry_r", body:"one_up" });`

b: 所有那些美化心理疾病的好莱坞编剧都是垃圾！

`bb({ eyes:"angry", body:"two_up" });`

b: 有心理疾病*糟透了*！它剥夺了人们*生活的权利*！我们为什么要*接受*？！

`bb({ body:"normal" });`

h: 我觉得当医生说“接受”我们的情绪的时候是说：多些耐心。

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: 就像在流沙中挣扎只会让你陷得更深，正确的解决方法是耐心地躺平。

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: 与你，与我的恐惧对抗，让我跳下了楼顶。
{{/if}}

{{if !_.INJURED}}
h: 与你，与我的恐惧对抗，差点让我跳下了楼顶。
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: 相反，正确的解决方法是做我们现在正在做的事情- 不是互相对抗，而是耐心地和对方相处。

`bb({ eyes:"annoyed" });`

b: 那他们就该*这么*说而不是用*接受*这种有问题的词汇。

`hong({ body:"chin", eyes:"annoyed" });`

h: 哈这么一想，“接受”这个词是有点烂。

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: 我不接受*接受*这个词。

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: 但我们已经*知道*了你不能真的在字面上接受我！

`bb({ eyes:"sad_u", body:"two_up" });`

b: 整个*问题*就在于我想帮助你，但是我不会用语言表达！

`bb({ eyes:"sad", body:"normal" });`

h: 我觉得当医生说“接受”你的情绪的时候是说： “不要抗争或无视它们。”

`hong({ eyes:"surprise", body:"one_up" });`

h: 倾听你所说的话，和你*一起*讨论，但不把你说的都当做百分之百的真理。

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: 那他们就该*这么*说而不是用*接受*这种模糊又费解的词汇。

`hong({ body:"chin", eyes:"annoyed" });`

h: 我猜他们的语文也很烂。

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: 总之，你还想谈什么吗？
{{/if}}

{{if _.a4_fears_discussed==2}}
h: 所以，你沉重的小心脏上面还压着什么吗？
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[我害怕我们会受伤。](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[我害怕我们会独自一人。](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[我害怕我们是坏人。](#act4_bad)
{{/if}}

[不，没别的了。](#act4c_prelude)

# act4_something_else_2

h: 很好，我觉得我们已经讨论完我们所有的恐惧了。

b: 嗯，只有三种恐惧。

h: 对，不多不少。

b: 小菜一碟。

(#act4c)

# act4c_prelude

h: 聊得愉快，搭档。

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: 这并不是什么*游戏*，你得知道。

`bb({eyes:"angry_d", body:"one_up"})`

b: 要和你的情绪建立健康的关系并不是戳戳屏幕上的按键就能做到的。

`bb({eyes:"sad", body:"normal"})`

b: 我们真的*能*合得来吗？

b: 我们真的*能*合作吗，像一个团队那样？

`hong({eyes:"sad", body:"one_up"})`

h: 这个嘛，

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: 不，不好意思...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

`publish("act4", ["alshire", 0]);`

a: 你介介介意我和你坐在一块儿吃午餐吗？

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: *这*就是你喜欢的人？他怎么一个人坐着，看着像连环杀人狂一样？
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: 问你喜欢的人你能不能和他坐一块儿？你知道我们听上去有多*饥渴*吗？！
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: *这*就是你喜欢的人？我们打扰了人家的平静！我们真是个累赘！
{{/if}}

`publish("act4", ["alshire", 2]);`

a: 我- 我是说， 如- 如果不行的话没关系，我只是...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[等等，我是不是在派对上见过你？](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[嗯，当然可以！过来吧。](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[对不起，我现在想花点时间独处。](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: 噢你当时在那个沙发上！我第一次去的那个派对...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: 我当时恐慌发作，打了那个人一拳。
{{/if}}

{{if _.a2_ending=="flight"}}
h2: 我当时恐慌发作，哭着逃跑了。
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: 等等人类，我们好像让人家尴尬了。

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: 啊，我不是故意要让你难堪的！

`publish("act4", ["hong_to_alshire",4]);`

h2: 只是想起了一副友善的面孔，仅此而已。

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: **啊啊啊啊啊我就知道！他是个危险的推动恐慌情绪的疯子！**
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: **啊啊啊我们给别人留下的第一印象是“目睹了我的创伤”！他绝对讨厌我们！**
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: **啊啊啊啊我们让别人想起了痛苦的经历。我们仅仅存在着就会伤害到别人。**
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: 等等人类，他们看上去有点不自在。

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: 啊，当然了不要觉得有压力！

`publish("act4", ["hong_to_alshire", 4]);`

h2: 我只是说，如果你想的话你可以坐在这里。

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: **他表现得*过于*友好了！就像是泰德·邦迪，那个连环杀人犯一样！**
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: **他只是装作友好！没有人*真的*想接近我们！**
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: **啊啊啊我们总是让别人尴尬！我们是地球上的污点！**
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: 等等人类，我们可能让人家尴尬了。

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: 啊，我不是想显得无礼！

`publish("act4", ["hong_to_alshire", 6]);`

h2: 我只是需要一点时间来处理自己的情绪。请不要把它当做出于个人的拒绝。

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: **他在处理什么恶心扭曲的想法？！这疯子的心里装的都是什么黑暗的欲望？！**
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: **我们被出于个人地拒绝了！永远不会有人爱我们！**
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: **我们打扰了他处理情绪！他将会永远饱受痛苦而这都是我们的错！**
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: **快走快走快走快走快走快走快走快走快走快走**

```
Game.clearText();
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["alshire", 10]);
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: 哈。真奇怪。不知道他刚才在想什么。

`publish("act4", ["hong_closer", 2]);`

h: 不管了，总之，你刚才在说？

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: 呃，我忘了？什么关于团队和合作的？

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: 人们说你要和你的情绪“达成和解”，就好像你的情绪是*战争罪犯*一样。

`publish("act4", ["bb_closer", 7]);`

b: 但是我*不*想我们只是达成和解！我想让我们成为*盟友*！

`publish("act4", ["bb_closer", 3]);`

b: 我想做只优秀的守卫狗。就像饥饿和口渴感会提醒你有生理上的需求那样，

`publish("act4", ["bb_closer", 8]);`

b: 我想成为你在*心理*需求上的警铃- 对安全，归属感和道德的需求。

`publish("act4", ["bb_closer", 1]);`

b: 但是...我做的很糟糕，所以我需要你来训练我。

`publish("act4", ["bb_closer", 4]);`

b: 我并不“总是合理的”，但也不是“总是无理的”。 我只是...在尽自己最大的努力了。所以，拜托，

`publish("act4", ["bb_closer", 30]);`

b: 帮我帮助你吧！

`publish("act4", ["bb_closer", 6]);`

b: 虽然，教一条老狗新技巧*会*花些时间。也许是*好几年*。

`publish("act4", ["bb_closer", 3]);`

b: 有时我会犯老毛病，不经意间又回到以前的习惯。

`publish("act4", ["bb_closer", 2]);`

b: 我会冲着阴影狂吠。我会用语言恐吓你。我甚至可能会强迫你看到一些...东西的画面。

`publish("act4", ["bb_closer", 9]);`

b: 对不起！我是只遍体鳞伤的流浪狗！受伤的狗有时会拉大便在你的床上！

`publish("act4", ["bb_closer", 4]);`

b: 但是如果你对我有耐心... 然后就只是坐着陪陪我...

`publish("act4", ["bb_closer", 8]);`

b: 也许你可以驯服这只狼。

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[乖狗狗。](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[乖人类。](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
```

{{if _.fifteencigs}}
b: **啊啊啊啊你还在一个人吃十五根烟啊啊啊啊**
{{/if}}

{{if _.parasite}}
b: **啊啊啊啊你还在对社会毫无贡献地吃东西我们是社会寄生虫啊啊啊啊**
{{/if}}

{{if _.whitebread}}
b: **啊啊啊啊你还在吃更多的白面包啊啊啊啊**
{{/if}}

```
publish("act4", ["bb_closer", 18]);
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: **啊啊啊啊啊啊啊啊**

(#credits)
