# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: 干杯！

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: *啊*这个感觉才对。

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: 你懂的，孩子...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: 尤其是...上头的时候...左右杏仁体那一块...

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: 你让我想起我小时候，也被脑子里的那个怪兽折磨的时候。

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: 我很感激我可以把经验传授给你，然后帮你干掉那头野兽，就像我当时做的那样。

```
publish("act3",["roofhunter",2]);
```

r: 嘿，快问快答：真心话还是大--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: **大冒险！**

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: 哈哈哈！好！

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: 那，你看到下面那个淡蓝色的泳池了吗？

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: 嗯？六层楼下面的那个？

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: 跳进去。

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: 呃？等等？

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: 脑子里的怪兽要回来了对不对？

```
publish("act3",["roofhunter",23]);
```

r: *噢不不不那个太危险了千万别别别*--

```
publish("act3",["roofhunter",22]);
```

r: 但这就是为什么需要这种极限的刺激！尽情派对！及时行乐！从^妓女^的^屁股^里^吸可卡因^！人一辈子就活一次！

```
publish("act3",["roofhunter",10]);
```

r: 让那个东西知道我们^他妈的^根本就不在乎它的^婊言婊语^！跳进去。

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: 呃，但是有时候，呃...恐惧是有它的理由的...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: 有没有搞错？你是不是信了那个什么速成正念说的那个*感觉到糟糕是一种好事*的说法？

```
publish("act3",["roofhunter",17]);
```

r: 那些操纵这个世界的^混蛋^给我们其余人带来了焦虑和抑郁，

```
publish("act3",["roofhunter",18]);
```

r: 然后在TED演讲上告诉我们要“接受”^操蛋^的生活，“拥抱”我们脑子里残忍的恶魔！

```
publish("act3",["roofhunter",6]);
```

r: 孩子我知道*你*明白那些怪兽就是在*伤害*我们这种人，在*折磨*我们这种人。

```
publish("act3",["roofhunter",19]);
```

r: 那不是我们的朋友，那是野兽，凶猛的野兽，需要被放倒然后关起来的野兽，

```
publish("act3",["roofhunter",20]);
```

r: 或者直接*一枪爆头*。

```
publish("act3",["roofhunter",27]);
```

r: 不然的话，你会任由它战胜你的。

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: 对，说的没错。

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: 我可不能让它赢。

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: 这才^他妈^对嘛！我相信你宝贝！杀了它！<3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: 别别别别别

n: 这一章有两个不同结局， 其中一个会 *非常糟。*

b: **别别别别别别别别别别别别**

n: *小心决策， 保护人类。*

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: **啊啊啊啊啊啊啊啊啊啊啊啊**

`bb({ mouth:"normal" });`

n: *祝你好运*

```
Game.clearText();
bb({ eyes:"start" });
```

[你真的可能会_死_！人类！](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[这太蠢了！这是自我毁灭！](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[那些神经病根本就不是你的朋友！](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: **你真**--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: **那些**--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: **这太**--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: 你知道吗，我本来可能会相信你的...要是你没有把你那套用了千万遍。

h: 你是那个叫狼来了的大灰狼。

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: 对，包括这一招。

b: 人类...求求你...

`hong({ eyes:"look_right" });`

h: 哦*很抱歉*我的大救星不赞同我的自我治疗办法。

h: 你个^混蛋^看好了，我们*全都*有办法让你^他妈的^闭嘴。

`hong({ body:"look_up", eyes:"look_up" });`

h: 有人投入工作。

`hong({ body:"look_down", eyes:"look_down" });`

h: 有人投入约炮，嗑药，或者是刷他们的脸书推送。

`hong({ body:"normal", eyes:"look_right" });`

h: 还有人投入其他人的怀抱。

`hong({ eyes:"angry" });`

h: 而我要投入那个泳池。

[你喝醉了**那是六层楼下面**。](#act3_bad_1_harm)

[草，你就这样感谢我的？！](#act3_bad_1_insult) `bb({eyes:"angry"});`

[ 好吧，我承认，我搞砸了。](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: 就算是你能落在水里，水面张力**最次**也能让你摔得粉身碎骨！

h: 呃

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: 我在B站看到有战斗民族的人试过了。

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: 我- 你再说一遍，*感谢*？

`bb({ eyes:"angry" });`

b: 这就是我*存在*的原因啊！因为根本不能去相信人类有能力去保护自己！

b: 这辈子我就做了一件事情那就是让你避开危险！结果现在你就要这样--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: 呵

`hong({ body:"laugh_2" })``

h: 呵呵哈哈哈

`hong({ body:"laugh_3" })``

h: **啊哈哈哈哈哈哈哈哈**

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: 哇这简直是这个世纪最^他妈^轻的轻描淡写了！

`hong({ body:"yell_2" });`

h: 对没错，你这个^死臭血逼烂布头^！你把一切都^他妈的^搞砸了！

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: 还有别的评论要发表吗，明知故问先生？

[但是报复我并不是答案！](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[但是这一次我*真的*是对的！](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[我伤害了你。](#act3_good_2a)


# act3_good_1_fail_revenge

b: 你需要和自己的情绪建立更健康的关系，而不是把--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: 所以拜托，把手里的瓶子放下然后我们--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: 求你了千万别...

h: 你的血条看来已经见底了，大灰狼。

h: 如果我是你的话说话会再小心一点，

`bb({ eyes:"normal" });`

[行，我再也不管你了。](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[我一直都是对的。](#act3_bad_2_right)

[我很抱歉。](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: 行，那你跳吧。看谁管你。

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: 很好。我先干杯。

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: **等一下不我刚刚那是逆向心理学你应该故意不按我说**--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: 你*确实*把自己置于了危险的境地。你所谓的朋友*正在*利用你，*你自己*也在利用你所谓的朋友。

`bb({ eyes:"sad" });`

b: 所以，求你了，人类，为什么就是不相信我？！

h: 因为你从来就没相信过*我*。

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: 其他人类都花时间去耐心地训练他们的守卫狼，去*学习*怎么和它相处。

b: 而不是去憎恶保护自己的守卫狼！所以为什么你就不--

`bb({ eyes:"normal" });`

h: 满口^喷粪^。

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *“唯一需要恐惧的东西是恐惧自身。”*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *“不要想太多，要看开！”*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: 我们这个时代的智者都认为：消极的情绪是不好的！

`hong({ eyes:"less_angry" });`

h: 废话！所以它们才叫做*消极的*！

b: 人类......求你了......

`hong({ eyes:"normal" });`

h: 我之前说：“我只想摆脱所有这些痛苦。”

h: 我现在做到了，我再也感觉不到痛苦，恐惧，或是焦虑...

h: 我什么都感觉不到。

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: 我之前沉浸在不让任何东西伤害你的念头里，以至于没有意识到是*我*正在创造伤害。

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: ^我操^不是吧。

`hong({ body:"yell_1" });`

h: ^靠^。真的需要这么久你才能发现吗？！

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: 你这毛茸茸的笨蛋本来能为我们避免那么多的麻烦。为什么你不能早点意识到呢？...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...你很*抱歉*。

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: 抱*什么*歉？

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[我很抱歉我没保护好你。](#act3_good_3_protector)

[我很抱歉我不够尊重你。](#act3_good_3_respect)

[我很抱歉。](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[我很抱歉我的人类这么烂！](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[我很抱歉我不够尊重你。](#act3_good_3_respect)

[我很抱歉我伤害了你。](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: 我的职责是为你警戒*真正的*危险，而不是对着车子和路人狂吠。

`bb({eyes:"sorry_up"});`

b: 冲着阴影狂吠，吠个不停。

`bb({eyes:"sorry"});`

b: 你恨不得给我按上嘴套很正常。

`bb({eyes:"sorry_down"});`

b: 我很抱歉。

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: 我本来应该是*你的*忠诚守卫，但我却表现得是在要求你听*我的*命令。

`bb({eyes:"sorry_up"});`

b: 守护者和典狱长本来应该是不同的概念，而我越界了。

`bb({eyes:"sorry_down"});`

b: 我很抱歉。

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: 我之前沉浸在不让你受到伤害的念头里，从没有停下来去意识到是*我*正在伤害你。

`bb({eyes:"sorry_up"});`

b: 我是条坏狗。

`bb({eyes:"sorry_down"});`

b: 我很抱歉。

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: 啊，那好吧，反正这本来也不是什么好主意。

h: 我做这件事本来是想让你乱了阵脚，然后，嗯，我觉得我做到了。

h: 我们这轮就算平局吧，好吗？

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: 好。

h: 好。

n: *平局*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: 你*不是吧*？那个猛兽折磨了你这么久，结果你就这么*放弃*了？

r: 你小子怎么了？*害怕*了？

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: 对。

h2: 我是害怕了。

`publish('hong-next')`

h2: 但是那也没关系。

`publish('hong-next')`

h2: 感到害怕也没有关系。

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: 他刚刚是不是把门给锁了？

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: 别...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: 别别别

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: **不！**

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
