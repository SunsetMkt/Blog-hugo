# act1

```
SceneSetup.act1();
```

(...300)

n: 而这是人类的焦虑

n: _你_ 扮演焦虑

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: 哦嗨！我们又回来了？

`hong({eyes:"0_neutral"})`

n: 你的任务是从 *危险* 中保护人类

`bb({eyes:"look", mouth:"small_lock"})`

n: 实际上， 重玩这个游戏正让他处于 *危险中*

n: 快， 警告他！

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: 人类！听着，我们碰到危险了！这个玩家...

[...要再次折磨我们！](#act1_replay_torture)

[...不会找到别的结局的！](#act1_replay_alternate)

[...会发现游戏的内容和结构相矛盾！](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: 他会让我们缩成球然后哭！
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: 他会让你恐慌发作以谋杀你的手机！
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: 他会让我们*不*揍派对上的那个人！
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: 他会让我们揍派对上那个混乱善良的人！
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: 额至少我们这回也许不用从屋顶上跳--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: **他会让我们从屋顶上跳下去的。**
{{/if}}

`bb({body:"fear"});`

b: **所有这些新的坏事都会发生在我们身上， 然后我们就会--**

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: 当然了，*总体来说*整个故事还是一样的，但是每章都有两个可能的结局，再说还有那么多对话分支的选--

`bb({body:"fear"});`

b: 那玩家会很失望，关掉这个页面，删掉这个程序，然后我们就会--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: 会发现——什么玩意？

`bb({eyes:"normal"});`

b: 整个故事想阐述的就是你可以如何***选择***与你的恐惧建立健康的合作关系，

`bb({eyes:"normal_right"});`

b: 但是重玩游戏只会看到同一个故事，也就是在暗示你的***选择***压根不重要，

`bb({eyes:"narrow_eyebrow"});`

b: 也就是说游戏想传达的意思和游戏的机制根本就互相矛盾，

`bb({eyes:"fear"});`

b: 于是这个叙事宇宙的结构会开始瓦解，

`bb({body:"fear"});`

b: 然后我们就会--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: **死！！！！！！**

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: 好了回到角色来吧。

```
Game.clearText();
```

n4: （让 _你的_ 焦虑吧啦吧啦选择和 _你的_ 恐惧吧啦吧啦你知道怎么玩的）

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: 哦妙啊，我的狼回来了。太————棒了。

`hong({eyes:"0_neutral"})`

n: 你的任务是从 *危险* 中保护人类

`bb({eyes:"look", mouth:"small_lock"})`

n: 实际上， 那个三明治正让他处于 *危险中*

n: 快， 警告他！

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: 人类！听着，我们碰到危险了！危险是...

`bb({body:"squeeze"})`

n4: （让 _你的_ 焦虑来接手游戏！ 选择和 _你的_ 恐惧最接近的选项）

(#act1_normal_choice)

# act1_normal_choice

[我们又在一个人吃午餐！](#act1a_alone) `bb({body:"squeeze_talk"})`

[我们吃东西并不能产生价值！](#act1a_productive) `bb({body:"squeeze_talk"})`

[白面包对我们有害！](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: 你不知道孤独和一天抽十五根烟一样会导致过早死亡吗？

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: （Holt-Lunstad 2010，医学期刊)

`hong({eyes:"0_annoyed"})`

h: 呃，感谢你标注来源但是--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: 也就是说如果我们*现在*没和别人待在一块儿我们就会-

`bb({body:"panic"})`

b: **死！！！！！！**

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: 你使用了 *不被爱的恐惧*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: 立马掏出你的电脑干点正事！

`hong({eyes:"0_annoyed"})`

h: 呃，我不想让面包屑掉到键--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 如果我们没有在为社会做贡献我们就是社会寄生虫！

b: 就会有社会体系中的社会医生用药来消灭社会寄生虫然后我们就会--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: **死！！！！！！**

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: 你使用了 *成为坏人的恐惧*

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: 那些研究有没有做重复实--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 淀粉会导致我们血糖飙升然后我们不得不被截掉四肢然后我们就会-

`bb({body:"panic"})`

b: **死！！！！！！**

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: 你使用了 *受到伤害的恐惧*

(#act1b)

# act1b

n: 效果显著

`bb({mouth:"smile", eyes:"smile"});`

b: 看到了吗，人类？我是你忠诚的守卫狼！

`bb({body:"pride_talk"});`

b: 相信你的直觉！你的感受永远是合理的！

`bb({body:"pride"});`

n: 让人类的能量条清零

n: 为了保护人类生理上+ 社会上+ 道德上的需求， 你可以使用：

n: *受到伤害的恐惧* #harm#

n: *不被爱的恐惧* #alone#

n: 和 *成为坏人的恐惧* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: （重要提示： 选择那个说中了你内心最深处最隐秘的恐惧的选项！ ~）

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: 哈你猜怎么着我觉得我该看下手机了。

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: 保护你的人类

n: 从这个世界中。 从其他人中。 从他自己中。

n: 祝你好运

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: 第一轮： *FIGHT!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: 哈。脸书推送说这个周末有场派对。

`bb({eyes:"uncertain"});`

b: 那个怪胎难道不是*每个*周末都办派对吗？

`bb({eyes:"uncertain_right"});`

b: 他到底是有多空虚？肯定在内心深处是一团糟！

`hong({eyes:"surprise"});`

h: 还有，我被邀请了？

`bb({eyes:"fear", mouth:"normal"});`

b: 那么！

[接受，否则我们会孤独到死掉！](#act1c_loner)

[拒绝，那儿全是毒品！](#act1c_drugs)

[无视，我们只会让派对变悲伤。](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: 一天十五根烟，人类！十五根！
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: 然后我们的葬礼上会一个人都没有，他们会把我们的骨灰扬到海里，我们会被鲸鱼吃掉，
{{/if}}

{{if !_.fifteencigs}}
b: 然后我们就会成为**鲸鱼的大便**！
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: 所以我们当然要去那个派对！
{{/if}}

{{if _.parasite}}
b: 但是要带上电脑所以我们可以工作，避免当个社会寄生虫。
{{/if}}

{{if _.whitebread}}
b: 只要他们不提供**白面包**
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: **老天啊**。 要是那能让你闭嘴的话，行。

h: 我会同意。

{{if _.whalepoop}}
b: 鲸鱼的大便啊，人类！鲸鱼的大便！
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: 或者更糟... **白面包**
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: 我们吸食的冰毒和白面包会严重过量！我们肿胀的尸体都塞不进焚化炉！
{{/if}}

{{if !_.whitebread}}
b: 我们会嗑多少药！殡仪馆的人都会奇怪这具尸体怎么已经*提前*防腐过了！
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: 再说，不能参加派对，我们必须工作否则就是糟糕的社会寄生虫！
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: **老天啊**。 要是那能让你闭嘴的话，行。

h: 我会拒绝。

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: 我们只会找个角落哭自己的孤独是如何像一天十五根烟一样致命。
{{/if}}

{{if _.parasite}}
b: 我们在派对上只会一直担心要怎么做才能产生价值。
{{/if}}

{{if _.whitebread}}
b: 我们只会一直担心不健康的食物选择会让我们怎么死掉。
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: 哇哦为什么呢。

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: 所以要是我们去了我们就会让他们感觉糟糕，但如果拒绝了邀请我们也会让他们感觉糟糕！

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: **我们只会让别人感觉糟糕， 所以我们应该感觉糟糕**

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: 呃。要是那能让你闭嘴的话，行。

h: 我会无视邀请。

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: 总之。脸书太劲了。我需要更平静，不那么容易引发焦虑的玩意。

`hong({eyes:"neutral"});`

h: 现在微博上有什么？

`bb({eyes:"look"});`

[哦不，看那个恐怖的新闻！](#act1d_news)

[哦不，那条微博是不是在偷偷说我们？](#act1d_subtweet)

[嘿，一张猫喝牛奶的动图。](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: 天啊，感觉像是整个世界都烧起来了，你说是吧？

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: 就好像一切都在迈向结束，所有事物都在消亡。然而我们命中注定，在劫难逃。

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: 我们把这个新闻转发吧！

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 好好我会转发的所以拜托你安静！

`hong({mouth:"neutral", eyes:"annoyed"});`

h: 去他的，还是看下朋友圈吧。

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: 这是条在暗示我们的微博！一条卑鄙，狡猾的（没有艾特当事人的）嘲讽微博！

`hong({eyes:"annoyed"});`

h: 也许不是？

`bb({eyes:"narrow", mouth:"small"});`

b: 但是万一他们全都在背地里议论我们呢？

h: 他们没--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: **正对着我们的背后**

`hong({eyes:"sad", mouth:"sad"});`

h: 我不觉--

`bb({eyes:"narrow", mouth:"small"});`

b: 但是*万一*

h: 闭--

`bb({eyes:"narrow_eyebrow"});`

b: *万一*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: 好————了，还是试下朋友圈吧。

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: 哈是啊很可爱，那就转发一下吧，我觉--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: **猫消化不了牛奶我们竟然在享受对动物的虐待我们真是大烂人**

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: 好————了，还是试下朋友圈吧。

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: 唔，昨晚的照片。所以*这*就是那些周末派对的样子。

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: 哎哟。好像太多人了。

h: 也许我不该同意那个邀请的？

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[改变我们的决定？像个混蛋那样？！](#act1e_yes_dontchange)

[改变我们的决定！太多人了！](#act1e_yes_changetono)

{{if _.subtweet}}
[对他们绝对在偷偷议论我们。](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[等等我们还没核查事实就转发了。](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[嘿你现在的姿势很糟糕你知道吗？](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 他们就等着我们来，结果我们却背叛他们的信任？你想注孤生吗？！

{{if _.fifteencigs}}
b: **十五。根烟。**
{{/if}}

{{if _.whalepoop}}
b: **鲸鱼。大便。**
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 闭嘴闭嘴我不改了！

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 你不知道踩踏事件都是怎么来的吗？

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 2003年罗德岛的一家夜总会发生火灾，混乱中所有人都挤在了出口，于是一百个人被烧死了-

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: **你想让这种事也发生在我们身上吗**-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: **拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒**-


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 闭嘴闭嘴我改成拒绝就是了！老天啊！

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: 嗯...看上去真的很有趣。

h: 也许我不该拒绝那个邀请的？

`bb({mouth:"normal", eyes:"normal"});`

[改变我们的决定？像个混蛋那样？！](#act1e_no_dontchange)

[改变我们的决定！别孤独地死掉！](#act1e_no_changetoyes)

{{if _.subtweet}}
[对他们绝对在偷偷议论我们。](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[等等我们还没核查事实就转发了。](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[嘿你现在的姿势很糟糕你知道吗？](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: 每个人都在指望我们！

b: ...让他们有一个完美的派对，没有恶心的{{if _.whitebread}}，大嚼特嚼白面包的{{/if}}讨厌鬼，比如你--


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 闭嘴闭嘴我不改了！

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 慢性孤独会导致产生过多的皮质醇，提高心血管疾病和中风的风险！

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: **十五。根烟。**
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 闭嘴闭嘴我改成同意就是了！老天啊！

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 我们要因为所有有问题的微博遭到恶报了！

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: 我们会被找出来注销账号然后被系在马背上的绳子拖着沿信息高速公路摩擦！

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 你为什么要这样？！

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 我们正在散播谣言！我们正在自由媒体上摧毁自己的信誉！

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 我们就是法西斯主义从民主废墟中诞生的原因！

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: 你为什么要这样？！

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 你的脊椎是卷饼做的吗？！别弓着腰看屏幕了！

```
bb({body:"meta"});
```

b: 没错也是在说你。

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 你为什么要这样？！

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: 嗯...看上去真的很有趣。

h: 也许我不该无视那个邀请的？

`bb({mouth:"normal", eyes:"normal"});`

[继续无视，我们仍然是派对粥里的老鼠屎。](#act1e_ignore_continue)

[实际上，同意吧。](#act1e_ignore_changetoyes)

[实际上，拒绝吧。](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: 不过一直无视别人有点不礼貌，不是吗？

`bb({eyes:"normal_right"});`

b: 反正其他人也一直在无视*我们*，所以

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: 所以这就算是扯平了吧。

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: 你是在...让我去玩？

b: 嗯哼，我是说，孤独真的*会*杀死我们的。

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: 那里人太多了。人多是很危险的。

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: 随便吧。有新的陌陌提醒。

`bb({eyes:"uncertain"})`

b: 什么，那个约炮app？

`hong({eyes:"annoyed"})`

h: 它不是约炮app，它只是可以用来认识新朋--

`bb({eyes:"narrow"})`

b: 它就是个约炮app。

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: 噢，我配对成功了！他看上去挺可爱的！

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: 求求你不要毁了我这次--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: **危险危险危险危险危险危险危险危险**

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[我们在*被*别人*利用*。](#act1f_used_by_others)

[我们只是在*利用*别人。](#act1f_using_others)

[**你的匹配对象是个连环杀人狂**](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: 随机约炮也许可以填补这下面的空缺，

b: 但是它们永远无法填补...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: *这里*的空缺。

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 重点在于**我们会一个人孤独到死**

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: 你以为别人的生殖器是等待被收集的宠物小精灵吗？

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 1000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ （宝可梦主题曲）-

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ 我要成为，最^淫荡^的-

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ 其他人无法企及-

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ 大腿和^屁股^，丰满的胸部-

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ 还有汗津津的^屌^和蛋蛋！-

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ **^婊^可-梦！得抓住**-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 重点在于我们是个摆布别人的^混蛋^。

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: 他会把你困在井里逼你吃白面包发胖然后他就可以像穿大衣一样穿你的皮！
{{/if}}

{{if _.parasite}}
b: 他会用番茄计时器猛击你，一边说“**你该产生点价值的你这个寄生虫**”
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: 他会把你的肉撕成血色的碎片，把内脏裁成装饰带，然后把你的血混入大酒钵搅拌！
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: 把**那**作为派对邀请怎么样？！
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: 我真受够这个游戏了。

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}“孤独会杀死我们”... {{/if}}
{{if _.parasite}}“我们是社会寄生虫”... {{/if}}
{{if _.whitebread}}“别吃那个，会致命的”... {{/if}}
{{if _.subtweet}}“他们在背后议论我们”... {{/if}}
{{if _.badnews}}“世界在燃烧”... {{/if}}
{{if _.hookuphole}}“我们会一个人孤独到死”... {{/if}}
{{if _.serialkiller}}“他是个连环杀人狂”... {{/if}}
{{if _.catmilk}}“猫不能消化牛奶”... {{/if}}
{{if _.pokemon}}一个拙劣的模仿歌曲... {{/if}}

h: 我只想过我自己的生活。

h: 我只想摆脱所有这些...痛苦。

`bb({eyes:"look_sad"});`

b: 嘿...人类...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: 会没事的。

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: 作为你忠实的守卫狼，我会时刻提防危险，努力保证你的安全。

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: 我保证。

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: 最后一个app。绿洲。上面有什么？

`hong({eyes:"sad"});`

h: 是...更多的派对照片。

`hong({mouth:"sad"});`

h: 每个人都看起来很快乐。无拘无束。无忧无虑。

`hong({mouth:"anger"});`

h: 老天啊，为什么我不能像他们一样？为什么我不能就做个*正常人*？

`bb({eyes:"normal_right"});`

b: 说到派对，关于这个周末的邀请，这是我的**最终**决定。

`bb({eyes:"normal"});`

[我们应该去。](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[我们不该去。](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: 我们--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *^操^*。

`hong({body:"2_you"});`

h: 你。

(...500)

b: 什

(...1500)

`bb({eyes:"wat_2"});`

b: 什么？

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: 我会**同意**去这场派对，

{{if _.act1g=="go"}}
h: **不是**因为你想让我去，而是因为**我**想去。
{{/if}}

{{if _.act1g=="dont"}}
h: 正是**因为**你不想让我去。
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: 你**无法**控制我。

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: 现在，麻烦您^他妈的^让我一个人在平静中吃这个美味的三明治。

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[**啊啊啊啊我们要死了**](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[**啊啊啊啊每个人都讨厌我们**](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[**啊啊啊啊我们真糟糕**](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: **啊啊啊啊我们要死了啊啊啊啊啊啊**

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: **啊啊啊啊每个人都讨厌我们啊啊啊啊啊啊**

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: **啊啊啊啊我们真是烂人啊啊啊啊啊啊**

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: 恭喜

(...500)

n: 你成功地保护了人类生理上+ 社会上+ 道德上的需求

n: 为什么， 看他多感激！

(...500)

n: 现在他的能量条清零了， 你可以直接控制他的行为

`bb({mouth:"smile", eyes:"normal"});`

n: 选择你的最后一击

`bb({mouth:"small_lock", eyes:"fear"});`

n: *解决他*

[{攻击：惩罚给你带来焦虑的手机！}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{逃跑：缩成球然后哭！}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: 你的手机让你恐慌发作！

`bb({eyes:"anger"})`

b: 扎克伯格和他的同伙正为了风投资金操纵你的心理健康！

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 惩罚你的手机！ 毁了它！ 杀了它！

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: **杀了它杀了它杀了它杀了它杀了它杀了它杀了它杀了它杀了它杀了它杀了**--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: 整个世界都充满了危险！

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 像穿山甲那样！缩成球来自我防卫！

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: **缩起来哭缩起来哭缩起来哭缩起来哭缩起来哭缩起来哭缩起来哭缩起来**--

(#act1j)

# act1j

`SceneSetup.act1_outro()`
