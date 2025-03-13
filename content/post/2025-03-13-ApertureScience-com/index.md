---
categories: Repost
date: "2025-03-13T00:00:00Z"
tags:
    - 游戏
slug: ApertureScience-com
title: "ApertureScience.com 的历史版本"
---

从[Web Archive](https://web.archive.org/web/20101212041243/https://www.aperturescience.com/)获取的历史版本。

Valve Archive 有一个使用 HTML5 的[更好的版本](https://valvearchive.com/web_archive/aperturescience.com/2010-09-17.html)。

## Ruffle 模拟的 Flash 播放器

<div>
    <object
        class="flash-container"
        data="ApertureScience17.swf"
        type="application/x-shockwave-flash"
    >
        <embed src="ApertureScience17.swf" width="550" height="400" />
    </object>
    <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</div>

## 反编译的 ActionScript 源代码

感谢[jpexs-decompiler](https://github.com/jindrapetrik/jpexs-decompiler)。

```actionscript
function TTYwriter(target, delay, startInput)
{
   if(startInput)
   {
      target.intervalStart = function()
      {
         target._visible = true;
         clearInterval(target.intervalID);
         if(!pauseReady)
         {
            keyLock = false;
            cursorSetPos(inputer._x,inputer._y - cursorAdjustY);
            cursorOn(true);
         }
         if(extraBlinkerReady)
         {
            extraBlinkerOn = true;
            extraBlinkerReady = false;
         }
         if(waitVisStart > 0)
         {
            var i = 0;
            while(i < waitVisTotal)
            {
               var j = waitVisStart + i;
               eval("char" + j)._visible = true;
               i++;
            }
            waitVisStart = 0;
         }
         if(entryMode == 0 && qon == 11)
         {
            glob_vid.attachVideo(glob_ns);
            glob_ns.setBufferTime(3);
            glob_vid._visible = true;
            glob_ns.play("security02.flv");
         }
         if(notesCursor)
         {
            cursorOn(false);
         }
      };
      target.intervalID = setInterval(target,"intervalStart",delay);
   }
   else
   {
      target.interval = function()
      {
         target._visible = true;
         cursor._x = target._x;
         cursor._y = target._y;
         clearInterval(target.intervalID);
         if(notesCursor)
         {
            cursorOn(false);
         }
      };
      target.intervalID = setInterval(target,"interval",delay);
   }
   target._visible = false;
}
function padnum(num, len, pchar)
{
   var _loc1_ = String(num);
   if(pchar == undefined)
   {
      pchar = "0";
   }
   while(_loc1_.length < len)
   {
      _loc1_ = pchar + _loc1_;
   }
   return _loc1_;
}
function padstr(num, len, pchar)
{
   var _loc1_ = String(num);
   if(pchar == undefined)
   {
      pchar = " ";
   }
   while(_loc1_.length < len)
   {
      _loc1_ = pchar + _loc1_;
   }
   return _loc1_;
}
function clearScreen()
{
   if(charIndex > 0)
   {
      var j = 1;
      while(j <= charIndex)
      {
         eval("char" + j)._visible = false;
         j++;
      }
   }
}
function thecakeisalie()
{
   theclip.loadVariables("gdxt.php?what=answer&uid=" + theclip.uid + "&aid=95&answer=cakelie");
   clearScreen();
   charIndex = 1;
   var curyy = 50;
   var char;
   var target = theclip;
   var par = new Array();
   var parlen = 10;
   par[0] = ">";
   par[1] = ">>>&!>>";
   par[2] = "When was the last time you left the building?";
   par[3] = "Has anybody left the building lately?";
   par[4] = "I don\'t know why we\'re in lockdown. I don\'t know who\'s in charge.";
   par[5] = "I did find out a few things, like these terminals don\'t have to";
   par[6] = "tap out characters one at a time. And while we\'re all working";
   par[7] = "on twenty year old equipment, somehow they can afford to build";
   par[8] = "an \'Enrichment Center\'. Check out this security feed.";
   par[9] = "Whatever the hell a \'relaxation vault\' is, it";
   par[10] = "doesn\'t have any doors.";
   var par2 = new Array();
   var par2len = 1;
   par2[0] = "I don\'t think going home is part of our job description anymore.";
   par2[1] = "If a supervisor walks by, press return!";
   charIndex = 1;
   var i = 0;
   while(i <= parlen)
   {
      if(++charIndex > charMaxIndex)
      {
         target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
         charMaxIndex++;
      }
      char = eval("char" + charIndex);
      char._x = 0;
      char._y = curyy;
      char.field.text = par[i];
      char._visible = true;
      curyy += format.getTextExtent(char.field.text).height;
      i++;
   }
   glob_vid._y = curyy;
   glob_vid.attachVideo(glob_ns);
   glob_ns.setBufferTime(3);
   glob_vid._visible = true;
   glob_ns.play("security02.flv");
   curyy += glob_vid._height + 20;
   var i = 0;
   while(i <= par2len)
   {
      if(++charIndex > charMaxIndex)
      {
         target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
         charMaxIndex++;
      }
      char = eval("char" + charIndex);
      char._x = 0;
      char._y = curyy;
      char.field.text = par2[i];
      char._visible = true;
      curyy += format.getTextExtent(char.field.text).height;
      curyy += format.getTextExtent(char.field.text).height;
      i++;
   }
}
function notesdisplay()
{
   notesCursor = true;
   theclip.loadVariables("gdxt.php?what=answer&uid=" + theclip.uid + "&aid=95&answer=cakelie");
   clearScreen();
   placeText(theclip,-1,20,cjhistory[notesPage].question,format,3);
   cursonOn(false);
}
function bosskey()
{
   clearScreen();
   var basey = 50;
   var curyy = basey;
   var maxy = 0;
   var curx = 0;
   var char;
   var target = theclip;
   charIndex = 1;
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "B8    (L) TOTAL                                                        ";
   char.field.backgroundColor = 6749952;
   char.field.background = true;
   char.field.textColor = 0;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   charIndex++;
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "                                                                ";
   char.field.backgroundColor = 6749952;
   char.field.background = true;
   char.field.textColor = 0;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   curyy += format.getTextExtent(char.field.text).height;
   charIndex++;
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "            A          B          C          D          E";
   char.field.backgroundColor = 6749952;
   char.field.background = true;
   char.field.textColor = 0;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   basey = curyy;
   var i = 1;
   while(i < 22)
   {
      if(++charIndex > charMaxIndex)
      {
         target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
         charMaxIndex++;
      }
      char = eval("char" + charIndex);
      char._x = 0;
      char._y = curyy;
      char.field.text = padnum(i,5," ");
      char.field.backgroundColor = 6749952;
      char.field.background = true;
      char.field.textColor = 0;
      char._visible = true;
      if(curx == 0)
      {
         curx = format.getTextExtent(char.field.text).width + 4;
      }
      curyy += format.getTextExtent(char.field.text).height;
      i++;
   }
   curyy = basey;
   var i = 1;
   while(i < 22)
   {
      if(++charIndex > charMaxIndex)
      {
         target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
         charMaxIndex++;
      }
      char = eval("char" + charIndex);
      char._x = curx;
      char._y = curyy;
      char.field.text = padstr(" ",56);
      char.field.backgroundColor = 0;
      char.field.background = true;
      char.field.textColor = 6749952;
      char._visible = true;
      curyy += format.getTextExtent(char.field.text).height;
      i++;
   }
   curyy = basey;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "     ITEM      UNITS      PER-U       EXT          ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "     ----      -----      -----      ------        ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "    FLOUR         50      21.50     1075.00        ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "INTUB-XLG          1 974,999.99  974,999.99         ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "TACK-THMB         75       0.02        1.50    ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx;
   char._y = curyy;
   char.field.text = "                                 ----------        ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx + 70;
   char._y = curyy;
   char.field.text = "TOTAL";
   char.field.backgroundColor = 6749952;
   char.field.background = true;
   char.field.textColor = 0;
   char._visible = true;
   if(++charIndex > charMaxIndex)
   {
      target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   char._x = curx + 153;
   char._y = curyy;
   char.field.text = "            976,076.49         ";
   char.field.backgroundColor = 0;
   char.field.background = true;
   char.field.textColor = 6749952;
   char._visible = true;
   curyy += format.getTextExtent(char.field.text).height;
}
function logout()
{
   getUrl("javascript:if (window.home) {window.home()} else {window.location.replace(\"http://www.steampowered.com/\")}", "");
}
function playPortal()
{
   getUrl("http://www.youtube.com/watch?v=0h50K2NVJHM", "");
}
function initCake(target)
{
   target.cakeInterval = function()
   {
      if(cakeimg1._visible)
      {
         cakeimg1._visible = false;
      }
      else if(random(cakeRandom) == 5 && entryMode == 2)
      {
         cakeimg1._x = random(500);
         cakeimg1._y = random(400);
         cakeimg1._visible = true;
      }
      if(hintOn)
      {
         hintScale += hintStep;
         if(hintScale < hintMin)
         {
            hintScale = hintMin;
            hintStep *= -1;
         }
         if(hintScale > hintMax)
         {
            hintScale = hintMax;
            hintStep *= -1;
         }
         hint.field._alpha = hintScale;
      }
      if(pauseReady)
      {
         pauseCounter++;
         if(pauseCounter > pauseLength)
         {
            pauseReady = false;
            pauseFunction();
         }
      }
   };
   target.intervalIDCursor = setInterval(target,"cakeInterval",50);
}
function initCursor(target, tFormat)
{
   cursor = target.attachMovie("cursorImage","cursor1",target.getNextHighestDepth());
   cursor._visible = false;
   cursor._x = 400;
   cursor._y = 550;
   cursorIsOn = false;
   target.cursorInterval = function()
   {
      if(cursorIsOn)
      {
         if(cursorBlink)
         {
            cursorBlink = false;
         }
         else
         {
            cursorBlink = true;
         }
         cursor._visible = cursorBlink;
         if(extraBlinkerOn)
         {
            if(!cursorblink && random(5) == 2)
            {
               var _loc1_ = random(40) + 3;
               if(random(2) == 1)
               {
                  extraBlinker.field.text = extraBlinker.field.text.substr(0,_loc1_) + random(10) + extraBlinker.field.text.substr(_loc1_ + 1);
               }
               else
               {
                  var _loc2_ = chr(97 + random(20));
                  extraBlinker.field.text = extraBlinker.field.text.substr(0,_loc1_) + _loc2_ + extraBlinker.field.text.substr(_loc1_ + 1);
               }
            }
            extraBlinker._visible = cursorBlink;
         }
      }
   };
   target.intervalIDCursor = setInterval(target,"cursorInterval",250);
}
function cursorOn(con)
{
   cursor._visible = con;
   cursorBlink = false;
   cursorIsOn = con;
}
function cursorSetPos(x, y)
{
   cursor._x = x;
   cursor._y = y;
}
function formatQuestion()
{
   var ts = "";
   if(qon < 51)
   {
      ts = "Form FORMS-EN-2873-FORM - Page " + qon + "^^";
   }
   if(questions[qon].type == "T")
   {
      placeText(theclip,0,20,ts + questions[qon].question + "^^> ",format,25);
      return undefined;
   }
   if(pageOffset > 0)
   {
      placeText(theclip,-1,20,ts + questions[qon].question + "^^",format,1);
   }
   else
   {
      placeText(theclip,-1,20,ts + questions[qon].question + "^^",format,15);
   }
   var ln = questions[qon].choices.length;
   var basey = lastPlaceY;
   var curyy = basey;
   var maxy = 0;
   var curx = 0;
   var char;
   waitVisStart = charIndex + 1;
   waitVisTotal = 0;
   var xadd = 180;
   var xcols = 3;
   if(ln > 150 || ln <= 48)
   {
      xadd = 240;
      xcols = 2;
   }
   var padit = String(ln).length;
   var i = 1 + pageOffset;
   while(i < ln)
   {
      if(++charIndex > charMaxIndex)
      {
         theclip.attachMovie("letter","char" + charIndex,theclip.getNextHighestDepth());
         charMaxIndex++;
      }
      char = eval("char" + charIndex);
      waitVisTotal++;
      char._x = curx;
      char._y = curyy;
      char.field.text = padnum(i,padit) + "] " + questions[qon].choices[i];
      char._visible = false;
      curyy += format.getTextExtent(char.field.text).textFieldHeight;
      if(curyy > maxy)
      {
         maxy = curyy;
      }
      if(curyy > 500)
      {
         maxy = 500;
         curyy = basey;
         curx += xadd;
         if(curx > xadd * xcols)
         {
            break;
         }
      }
      i++;
   }
   if(maxy == 500)
   {
      maxy += format.getTextExtent("W").textFieldHeight;
   }
   maxy += format.getTextExtent("W").textFieldHeight;
   if(++charIndex > charMaxIndex)
   {
      theclip.attachMovie("letter","char" + charIndex,theclip.getNextHighestDepth());
      charMaxIndex++;
   }
   char = eval("char" + charIndex);
   waitVisTotal++;
   char._x = 0;
   char._y = maxy;
   char._visible = false;
   if(questions[qon].choices.length > 104)
   {
      char.field.text = "[" + questions[qon].choices.length + " total choices : PGUP/PGDN to navigate]> ";
   }
   else
   {
      char.field.text = "> ";
   }
   inputer._y = maxy;
   inputer._x = format.getTextExtent(char.field.text).width;
   cursorSetPos(inputer._x,inputer._y - cursorAdjustY);
   cursorBaseX = inputer._x;
}
function placeText(target, x, y, banner, tFormat, delay)
{
   var lastChar = "";
   var char;
   if(hintOn)
   {
      hintOn = false;
      hint.field._alpha = 100;
   }
   keyLock = true;
   inputer._x = 600;
   inputer._y = 400;
   var noInput = false;
   if(x < 0)
   {
      x = 0;
      noInput = true;
   }
   if(charIndex > 0)
   {
      var j = 1;
      while(j <= charMaxIndex)
      {
         eval("char" + j)._visible = false;
         j++;
      }
   }
   charIndex = 0;
   var orgx = x;
   var orgy = y;
   var tmps = "";
   var turnBlinkerOn = false;
   if(entryMode == 0 && (qon == 2 || qon == 3))
   {
      inputer.field.password = true;
   }
   else
   {
      inputer.field.password = false;
   }
   var i = 0;
   while(i < banner.length)
   {
      var onchar = banner.substr(i,1);
      switch(onchar)
      {
         case "^":
            y += tFormat.getTextExtent(char.field.text).textFieldHeight;
            if(y > 500)
            {
               y = orgy;
               orgx += 150;
            }
            x = orgx;
            break;
         case "@":
            onchar = "[" + theclip.uid + "]";
            turnBlinkerOn = true;
            var _loc0_ = null;
            charIndex = _loc0_ = charIndex + 1;
            if(_loc0_ > charMaxIndex)
            {
               target.attachMovie("letter","char" + charIndex,target.getNextHighestDepth());
               charMaxIndex++;
            }
            char = eval("char" + charIndex);
            if(turnBlinkerOn)
            {
               extraBlinker = char;
               extraBlinkerReady = true;
               turnBlinkerOn = false;
            }
            var tmpx = 0;
            tmps = "";
            var j = i;
            while(j < banner.length)
            {
               if(banner.substr(j,1) == " " || banner.substr(j,1) == "^")
               {
                  break;
               }
               tmps += banner.substr(j,1);
               j++;
            }
            tmpx = x + tFormat.getTextExtent(tmps).width;
            break;
      }
      char.field.text = onchar;
      if(entryMode == 2 && !hintOn && hintOffset < hintMessage.length && (lastChar == " " || lastChar == "") && onchar == hintMessage.substr(hintOffset,1))
      {
         hintOffset++;
         hintOn = true;
         hint = char;
      }
      if(tmpx > 650)
      {
         y += tFormat.getTextExtent(char.field.text).textFieldHeight;
         if(y > 500)
         {
            y = orgy;
            orgx += 150;
         }
         x = orgx;
      }
      char._x = x;
      char._y = y;
      x += tFormat.getTextExtent(char.field.text).width;
      var timer = i * delay;
      if(delay <= 0)
      {
         char._visible = true;
      }
      lastChar = onchar;
      i++;
   }
   lastPlaceX = x;
   lastPlaceY = y;
   if(!noInput)
   {
      inputer._y = y;
      inputer._x = x;
      cursorSetPos(inputer._x,inputer._y - cursorAdjustY);
      cursorBaseX = inputer._x;
   }
   if(delay == 0)
   {
      if(pauseReady)
      {
         keyLock = true;
         cursorOn(false);
      }
      else
      {
         keyLock = false;
         cursorOn(true);
      }
   }
   else
   {
      cursorOn(true);
      var i = 1;
      while(i <= charIndex)
      {
         var timer = i * delay;
         TTYwriter(eval("char" + i),timer,i == charIndex);
         i++;
      }
   }
}
function switchPage()
{
   pageOffset = 0;
   inputer.field.text = "";
   cursorOn(false);
   switch(entryMode)
   {
      case 0:
         qon++;
         placeText(theclip,0,50,qar[qon],format,qdelay[qon]);
         break;
      case 1:
         placeText(theclip,0,50,gladosHeader + gladosMessage + gladosPrompt,format,gladosSpeed);
         break;
      case 2:
         qon++;
         formatQuestion();
         break;
      case 3:
         bosskey();
         break;
      case 4:
         thecakeisalie();
         break;
      case 5:
         notesdisplay();
   }
}
function ltrim(s)
{
   while(s.length > 0 && s.substr(0,1) == " ")
   {
      s = s.substr(1);
   }
   return s;
}
function processInput0()
{
   var _loc2_ = inputer.field.text;
   var _loc1_ = false;
   var _loc3_ = false;
   switch(qon)
   {
      case 8:
         qon = 0;
      case 0:
         theclip.loadVariables("gdxt.php?what=login&uid=" + theclip.uid);
         _loc1_ = _loc2_ == "LOGON" || _loc2_ == "LOGIN" || _loc2_ == "USER";
         if(_loc2_ == "HELP" || _loc2_ == "?")
         {
            _loc1_ = true;
            qon = 7;
         }
         if(_loc1_ && glob_vid._visible)
         {
            glob_vid._visible = false;
            holidayOff = true;
            glob_nsh.close();
         }
         break;
      case 1:
         _loc1_ = _loc2_.length > 2;
         is_cj = _loc2_ == "CJOHNSON";
         if(_loc1_)
         {
            theclip.loadVariables("gdxt.php?what=answer&uid=" + theclip.uid + "&aid=99&answer=" + _loc2_);
         }
         break;
      case 3:
         qon = 2;
      case 2:
         theclip.loadVariables("gdxt.php?what=password&uid=" + theclip.uid);
         if(is_cj)
         {
            _loc1_ = _loc2_ == "TIER3";
            is_cj = _loc1_ && is_cj;
            if(is_cj)
            {
               gladosHeader = "GLaDOS v1.07a (c) 1982 Aperture Science, Inc.";
               gladosPrompt = "^^ADMIN> ";
            }
         }
         else
         {
            _loc1_ = _loc2_ == "PORTAL" || _loc2_ == "PORTALS";
         }
         if(_loc1_)
         {
            entryMode = 1;
         }
         else
         {
            _loc1_ = true;
         }
         break;
      case 4:
         if(_loc2_ == "CONTINUE")
         {
            _loc1_ = true;
         }
         if(_loc2_ == "QUIT")
         {
            qon = 0;
            _loc1_ = true;
            entryMode = 1;
         }
         break;
      case 5:
         if(_loc2_ == "CONTINUE")
         {
            applyAIDNum = 0;
            applyAIDText = 90;
            _loc1_ = true;
            qon = 0;
            entryMode = 2;
            extraBlinkerOn = false;
         }
         if(_loc2_ == "QUIT")
         {
            extraBlinkerOn = false;
            qon = 0;
            _loc1_ = true;
            entryMode = 1;
         }
         break;
      case 9:
         if(_loc2_ == "THECAKEISALIE")
         {
            entryMode = 4;
            _loc1_ = true;
         }
         else
         {
            qon = 9;
            _loc1_ = true;
         }
         break;
      case 11:
         glob_ns.seek(0);
         glob_ns.pause();
         glob_vid._visible = false;
         entryMode = 3;
         _loc1_ = true;
         break;
      case 10:
         break;
      case 50:
         notesPage += 1;
         if(notesPage > maxNotesPage)
         {
            entryMode = 1;
            inputer.field.text = "";
         }
         _loc1_ = true;
         break;
      default:
         _loc1_ = true;
   }
   if(_loc1_)
   {
      switchPage();
   }
   else
   {
      inputer.field.text = "";
   }
}
function processInput5()
{
   var _loc2_ = inputer.field.text;
   var _loc1_ = false;
   var _loc3_ = false;
   notesPage += 1;
   if(notesPage > maxNotesPage)
   {
      entryMode = 1;
      notesCursor = false;
   }
   _loc1_ = true;
   switchPage();
}
function processInput1()
{
   var _loc2_ = ltrim(inputer.field.text);
   hintOffset = 0;
   if(_loc2_ == "")
   {
      return undefined;
   }
   var _loc3_ = false;
   var _loc1_ = _loc2_.split(" ");
   gladosMessage = "";
   switch(_loc1_[0])
   {
      case "THECAKEISALIE":
         entryMode = 4;
         break;
      case "DIR":
      case "CATALOG":
      case "DIRECTORY":
      case "LIST":
      case "LS":
      case "CAT":
         if(is_cj)
         {
            gladosMessage = "                                                                                                                ^                                                                                                                                                                                                                      ^DISK VOLUME 255 [WORKSTATION CJOHNSON]^^     I  019  APPLY.EXE^     I  004  NOTES.EXE^^2 FILE(S) IN 23 BLOCKS^^";
         }
         else
         {
            gladosMessage = "                                                                                                                ^                                                                                                                                                                                                                      ^DISK VOLUME 255 [NEW EMPLOYEE WORKSTATION]^^     I  019  APPLY.EXE^^1 FILE(S) IN 19 BLOCKS^^";
         }
         break;
      case "IP":
         gladosMessage = " ^^uid:" + theclip.uid + "^";
         break;
      case "HELP":
      case "LIB":
      case "?":
         if(is_cj)
         {
            gladosMessage = " ^^LIB^     NOTES^     APPEND^     ATTRIB^     COPY^     DIR^     ERASE^     FORMAT^     INTERROGATE^     LIB^     PLAY^     RENAME^     TAPEDISK";
         }
         else
         {
            gladosMessage = " ^^LIB^     APPEND^     ATTRIB^     COPY^     DIR^     ERASE^     FORMAT^     INTERROGATE^     LIB^     PLAY^     RENAME^     TAPEDISK";
         }
         break;
      case "LOGOUT":
      case "BYE":
      case "LOGOFF":
      case "VALVE":
         snd.attachSound("goodbye");
         snd.setVolume(20);
         snd.onSoundComplete = logout;
         qon = -1;
         entryMode = 0;
         snd.start();
         break;
      case "APPEND":
      case "ATTRIB":
      case "COPY":
      case "FORMAT":
      case "ERASE":
      case "RENAME":
         gladosMessage = "                                                                                                                ^                                                                                                                                                                                                                      ^ERROR 15 [Disk is write protected]";
         break;
      case "PLAY":
         if(_loc1_.length == 1)
         {
            gladosMessage = "^^ERROR 03 [What would you like to play?]";
         }
         else if(_loc1_[1] == "PORTAL")
         {
            snd.attachSound("goodbye");
            snd.setVolume(20);
            snd.onSoundComplete = playPortal;
            qon = -1;
            entryMode = 0;
            snd.start();
            break;
         }
         break;
      case "INTERROGATE":
         if(_loc1_.length == 1)
         {
            gladosMessage = "^^ERROR 02 [Command requires at least one parameter]";
         }
         else if(is_cj)
         {
            gladosMessage = "^^ERROR 07 [Unknown Employee]";
         }
         else
         {
            gladosMessage = "^^ERROR 01 [Illegal attempt to initiate disciplinary action]";
         }
         break;
      case "TAPEDISK":
         gladosMessage = "^^ERROR 18 [User not authorized to transfer system tapes]";
         break;
      case "NOTES":
      case "NOTES.EXE":
         if(is_cj)
         {
            qon = 50;
            entryMode = 5;
            notesPage = 1;
         }
         else
         {
            gladosMessage = "^^ERROR 24 [File \'" + _loc1_[0] + "\' not found]";
         }
         break;
      case "APPLY":
      case "APPLY.EXE":
         qon = 3;
         entryMode = 0;
         break;
      default:
         gladosMessage = "^^ERROR 24 [File \'" + _loc1_[0] + "\' not found]";
   }
   switchPage();
}
function processInput2()
{
   var _loc1_ = inputer.field.text;
   var _loc2_ = false;
   if(qon >= questionstot)
   {
      qon = 8;
      entryMode = 0;
      switchPage();
      return undefined;
   }
   if(questions[qon].type != "T")
   {
      if(Number(_loc1_) > 0 && Number(_loc1_) < questions[qon].choices.length)
      {
         _loc2_ = true;
         applyAIDNum++;
         theclip.loadVariables("gdxt.php?what=answer&uid=" + theclip.uid + "&aid=" + String(applyAIDNum) + "&answer=" + _loc1_);
      }
   }
   else if(qon != 51)
   {
      applyAIDText++;
      theclip.loadVariables("gdxt.php?what=answer&uid=" + theclip.uid + "&aid=" + String(applyAIDText) + "&answer=" + _loc1_);
      _loc2_ = true;
   }
   if(_loc1_ == "QUIT")
   {
      qon = 0;
      entryMode = 1;
      _loc2_ = true;
   }
   if(_loc2_)
   {
      switchPage();
   }
   else
   {
      inputer.field.text = "";
   }
}
var questions = new Array();
questions[1] = new Object();
questions[1].question = "If given a choice, what would you like to be called?";
questions[1].type = "T";
questions[1].choices = new Array();
questions[1].choices[1] = "Name:";
questions[2] = new Object();
questions[2].question = "It is important to consult a physician before starting an Aperture Science Enrichment Center program. If one or more of the statements listed below applies to you, please contact your supervisor to secure permission to consult a physician before beginning an Enrichment Center program. Pick the condition that most applies to you.";
questions[2].type = "C";
questions[2].choices = new Array();
questions[2].choices[1] = "dizziness";
questions[2].choices[2] = "shortness of breath";
questions[2].choices[3] = "problems waking up in the morning";
questions[2].choices[4] = "problems staying up 48 hours straight";
questions[2].choices[5] = "have not previously performed an enrichment center program";
questions[3] = new Object();
questions[3].question = "Sally, Dwayne, Anthony, David, and Franklin are, collectively, exactly 10 years apart in age. Sally\'s is two years older than David. David\'s favorite letter is \'g\'. Anthony\'s favorite letter is also \'g\', but Dwayne has no preference, insisting that he likes all the letters equally except for \'s\'.  What is Franklin\'s favorite letter?";
questions[3].type = "R";
questions[3].choices = new Array();
questions[3].choices[1] = "a";
questions[3].choices[2] = "b";
questions[3].choices[3] = "c";
questions[3].choices[4] = "d";
questions[3].choices[5] = "e";
questions[3].choices[6] = "f";
questions[3].choices[7] = "g";
questions[3].choices[8] = "h";
questions[3].choices[9] = "i";
questions[3].choices[10] = "j";
questions[3].choices[11] = "k";
questions[3].choices[12] = "l";
questions[3].choices[13] = "m";
questions[3].choices[14] = "n";
questions[3].choices[15] = "o";
questions[3].choices[16] = "p";
questions[3].choices[17] = "q";
questions[3].choices[18] = "r";
questions[3].choices[19] = "t";
questions[3].choices[20] = "u";
questions[3].choices[21] = "v";
questions[3].choices[22] = "w";
questions[3].choices[23] = "x";
questions[3].choices[24] = "y";
questions[3].choices[25] = "z";
questions[4] = new Object();
questions[4].question = "Which of the following best describes your pain?";
questions[4].type = "R";
questions[4].choices = new Array();
questions[4].choices[1] = "Nondescript";
questions[4].choices[2] = "Shooting";
questions[4].choices[3] = "Stabbing";
questions[4].choices[4] = "Burning";
questions[4].choices[5] = "Prickly";
questions[4].choices[6] = "Aching";
questions[4].choices[7] = "Sharp";
questions[4].choices[8] = "Dull";
questions[5] = new Object();
questions[5].question = "What is your favorite color?";
questions[5].type = "R";
questions[5].choices = new Array();
questions[5].choices[1] = "Peach-orange";
questions[5].choices[2] = "Powder blue";
questions[5].choices[3] = "Cyan";
questions[5].choices[4] = "Chartreuse";
questions[5].choices[5] = "Jade";
questions[5].choices[6] = "Dark coral";
questions[5].choices[7] = "Navy blue";
questions[5].choices[8] = "Pale mauve";
questions[5].choices[9] = "Linen";
questions[5].choices[10] = "Dark goldenrod";
questions[5].choices[11] = "Pumpkin";
questions[5].choices[12] = "Dark cerulean";
questions[5].choices[13] = "Zinnwaldite";
questions[5].choices[14] = "Rust";
questions[5].choices[15] = "Lavender Blush";
questions[5].choices[16] = "Green";
questions[5].choices[17] = "Lilac";
questions[5].choices[18] = "Blue";
questions[5].choices[19] = "Midnight Blue";
questions[5].choices[20] = "Tan";
questions[5].choices[21] = "Carmine";
questions[5].choices[22] = "Amber";
questions[5].choices[23] = "Indigo";
questions[5].choices[24] = "Pale red-violet";
questions[5].choices[25] = "Lemon Cream";
questions[5].choices[26] = "Pale chestnut";
questions[5].choices[27] = "Bondi Blue";
questions[5].choices[28] = "Gamboge";
questions[5].choices[29] = "Gold";
questions[5].choices[30] = "Steel blue";
questions[5].choices[31] = "Tangerine";
questions[5].choices[32] = "Lime";
questions[5].choices[33] = "Seashell";
questions[5].choices[34] = "Pale pink";
questions[5].choices[35] = "Dark turquoise";
questions[5].choices[36] = "Pale cornflower blue";
questions[5].choices[37] = "Denim";
questions[5].choices[38] = "Emerald";
questions[5].choices[39] = "Burnt Sienna";
questions[5].choices[40] = "Buff";
questions[5].choices[41] = "Brown";
questions[5].choices[42] = "Pear";
questions[5].choices[43] = "Orangatang Red";
questions[5].choices[44] = "Chestnut";
questions[5].choices[45] = "Cerulean";
questions[5].choices[46] = "Dark Tea Green";
questions[5].choices[47] = "Dark salmon";
questions[5].choices[48] = "Sandy brown";
questions[5].choices[49] = "Dark tan";
questions[5].choices[50] = "Pine Green";
questions[5].choices[51] = "Flax";
questions[5].choices[52] = "Ochre";
questions[5].choices[53] = "Bronze";
questions[5].choices[54] = "Klein Blue";
questions[5].choices[55] = "Pale Sandy Brown";
questions[5].choices[56] = "Teal";
questions[5].choices[57] = "Azure";
questions[5].choices[58] = "Dark Terra cotta";
questions[5].choices[59] = "International orange";
questions[5].choices[60] = "Red";
questions[5].choices[61] = "Orange";
questions[5].choices[62] = "Safety Orange";
questions[5].choices[63] = "Coral";
questions[5].choices[64] = "Scarlet";
questions[5].choices[65] = "Light brown";
questions[5].choices[66] = "Olive Drab";
questions[5].choices[67] = "Magenta";
questions[5].choices[68] = "Bistre";
questions[5].choices[69] = "Cerulean blue";
questions[5].choices[70] = "Dodger blue";
questions[5].choices[71] = "Cobalt";
questions[5].choices[72] = "Violet-eggplant";
questions[5].choices[73] = "Amethyst";
questions[5].choices[74] = "Sapphire";
questions[5].choices[75] = "Ultramarine";
questions[5].choices[76] = "Fuchsia";
questions[5].choices[77] = "Heliotrope";
questions[5].choices[78] = "Cinnamon";
questions[5].choices[79] = "Chocolate";
questions[5].choices[80] = "Goldenrod";
questions[5].choices[81] = "Sea Green";
questions[5].choices[82] = "Pastel pink";
questions[5].choices[83] = "Persian blue";
questions[5].choices[84] = "Mountbatten pink";
questions[5].choices[85] = "Pale carmine";
questions[5].choices[86] = "Bright green";
questions[5].choices[87] = "Turquoise";
questions[5].choices[88] = "Gray";
questions[5].choices[89] = "Gray-Tea Green";
questions[5].choices[90] = "Dark blue";
questions[5].choices[91] = "Cerise";
questions[5].choices[92] = "Pale brown";
questions[5].choices[93] = "Green-yellow";
questions[5].choices[94] = "Raw umber";
questions[5].choices[95] = "Lavender";
questions[6] = new Object();
questions[6].question = "How do others describe your education?";
questions[6].type = "R";
questions[6].choices = new Array();
questions[6].choices[1] = "Nursery School";
questions[6].choices[2] = "Grade School";
questions[6].choices[3] = "Junior High";
questions[6].choices[4] = "High School";
questions[6].choices[5] = "Some College";
questions[6].choices[6] = "Associates Degree";
questions[6].choices[7] = "Bachelors";
questions[6].choices[8] = "Graduate Degree";
questions[6].choices[9] = "PhD / Post Doctoral";
questions[6].choices[10] = "None";
questions[7] = new Object();
questions[7].question = "What is your current living situation?";
questions[7].type = "R";
questions[7].choices = new Array();
questions[7].choices[1] = "Live Alone";
questions[7].choices[2] = "Live With Roommate (s)";
questions[7].choices[3] = "Live With Kids";
questions[7].choices[4] = "Live With Parents";
questions[8] = new Object();
questions[8].question = "Do you require any jewelry for health reasons?";
questions[8].type = "R";
questions[8].choices = new Array();
questions[8].choices[1] = "Yes";
questions[8].choices[2] = "No";
questions[9] = new Object();
questions[9].question = "Do you require socks to be part of your uniform?";
questions[9].type = "R";
questions[9].choices = new Array();
questions[9].choices[1] = "Yes";
questions[9].choices[2] = "No";
questions[10] = new Object();
questions[10].question = "Do you prefer long or short sleeves?";
questions[10].type = "R";
questions[10].choices = new Array();
questions[10].choices[1] = "Long Sleeves";
questions[10].choices[2] = "Short Sleeves";
questions[10].choices[3] = "Sleeveless / Shirtless / No Preference";
questions[11] = new Object();
questions[11].question = "Does your illness prevent you from working?";
questions[11].type = "R";
questions[11].choices = new Array();
questions[11].choices[1] = "Yes";
questions[11].choices[2] = "No";
questions[12] = new Object();
questions[12].question = "Not including periods of mandatory silence, what is the longest you have gone voluntarily without talking?";
questions[12].type = "R";
questions[12].choices = new Array();
questions[12].choices[1] = "1 Day";
questions[12].choices[2] = "2-5 Days";
questions[12].choices[3] = "7-14 Days";
questions[12].choices[4] = "14-30 Days";
questions[12].choices[5] = "30-90 Days";
questions[12].choices[6] = "90 Days - 6 Months";
questions[12].choices[7] = "1 Year";
questions[12].choices[8] = "Greater Than 1 Year";
questions[13] = new Object();
questions[13].question = "Do you require music to perform simple tasks?";
questions[13].type = "R";
questions[13].choices = new Array();
questions[13].choices[1] = "Yes";
questions[13].choices[2] = "No";
questions[14] = new Object();
questions[14].question = "Your favorite color is:";
questions[14].type = "R";
questions[14].choices = new Array();
questions[14].choices[1] = "Camouflage green";
questions[14].choices[2] = "Sangria";
questions[14].choices[3] = "Salmon";
questions[14].choices[4] = "Pale magenta";
questions[14].choices[5] = "Swamp green";
questions[14].choices[6] = "Pastel green";
questions[14].choices[7] = "Carrot";
questions[14].choices[8] = "Burgundy";
questions[14].choices[9] = "Mint Green";
questions[14].choices[10] = "Wheat";
questions[14].choices[11] = "Aqua";
questions[14].choices[12] = "Thistle";
questions[14].choices[13] = "Vermilion";
questions[14].choices[14] = "School bus yellow";
questions[14].choices[15] = "Khaki";
questions[14].choices[16] = "Cornflower blue";
questions[14].choices[17] = "Dark light blue";
questions[14].choices[18] = "Dark slate gray";
questions[14].choices[19] = "Mustard";
questions[14].choices[20] = "Hot pink";
questions[14].choices[21] = "Dark pastel green";
questions[14].choices[22] = "Dark brown";
questions[14].choices[23] = "Papaya whip";
questions[14].choices[24] = "Dark spring green";
questions[14].choices[25] = "Cooked umber";
questions[14].choices[26] = "Dark chestnut";
questions[14].choices[27] = "Dark Khaki";
questions[14].choices[28] = "Russet";
questions[14].choices[29] = "Burnt umber";
questions[14].choices[30] = "Wisteria";
questions[14].choices[31] = "Beige";
questions[14].choices[32] = "Selective yellow";
questions[14].choices[33] = "Viridian";
questions[14].choices[34] = "Old Gold";
questions[14].choices[35] = "Mauve";
questions[14].choices[36] = "Dark violet";
questions[14].choices[37] = "Dark pink";
questions[14].choices[38] = "Aquamarine";
questions[14].choices[39] = "Slate gray";
questions[14].choices[40] = "Royal Blue";
questions[14].choices[41] = "Terra cotta";
questions[14].choices[42] = "Blaze Orange";
questions[14].choices[43] = "Dark Indigo";
questions[14].choices[44] = "Violet";
questions[14].choices[45] = "Dark tangerine";
questions[14].choices[46] = "Saffron";
questions[14].choices[47] = "Olive";
questions[14].choices[48] = "Tenné";
questions[14].choices[49] = "Peach";
questions[14].choices[50] = "Maroon";
questions[14].choices[51] = "Silver";
questions[14].choices[52] = "Robin egg blue";
questions[14].choices[53] = "Pink";
questions[14].choices[54] = "Asparagus";
questions[14].choices[55] = "Purple";
questions[14].choices[56] = "Pale Blue";
questions[14].choices[57] = "Dark green";
questions[14].choices[58] = "Yankee Yellow";
questions[14].choices[59] = "Navajo white";
questions[14].choices[60] = "Fern green";
questions[14].choices[61] = "Bright violet";
questions[14].choices[62] = "Corn";
questions[14].choices[63] = "Eggplant";
questions[14].choices[64] = "Bright turquoise";
questions[14].choices[65] = "Gray-asparagus";
questions[14].choices[66] = "Moss green";
questions[14].choices[67] = "Taupe";
questions[14].choices[68] = "Dark Olive";
questions[14].choices[69] = "Red-violet";
questions[14].choices[70] = "Burnt Orange";
questions[14].choices[71] = "Orchid";
questions[14].choices[72] = "Peach-yellow";
questions[14].choices[73] = "Spring Green";
questions[14].choices[74] = "Lemon";
questions[14].choices[75] = "Puce";
questions[14].choices[76] = "Periwinkle";
questions[14].choices[77] = "Celadon";
questions[14].choices[78] = "Dark Scarlet";
questions[14].choices[79] = "Yellow";
questions[14].choices[80] = "Black";
questions[14].choices[81] = "Alizarin Crimson";
questions[14].choices[82] = "Prussian blue";
questions[14].choices[83] = "Malachite";
questions[14].choices[84] = "Dark Peach";
questions[14].choices[85] = "White";
questions[14].choices[86] = "Brass";
questions[14].choices[87] = "Cardinal";
questions[14].choices[88] = "Alice Blue";
questions[14].choices[89] = "Cream";
questions[14].choices[90] = "Tea Green";
questions[14].choices[91] = "Sepia";
questions[14].choices[92] = "Crimson";
questions[14].choices[93] = "Copper";
questions[14].choices[94] = "Pink-orange";
questions[15] = new Object();
questions[15].question = "Lying about my favorite color makes me feel:";
questions[15].type = "R";
questions[15].choices = new Array();
questions[15].choices[1] = "Sorry";
questions[15].choices[2] = "Not Sorry";
questions[16] = new Object();
questions[16].question = "Are you plagued by suspicions that other people, including coworkers and relatives, may be doing things behind your back that will hurt you?";
questions[16].type = "R";
questions[16].choices = new Array();
questions[16].choices[1] = "Yes";
questions[16].choices[2] = "No";
questions[17] = new Object();
questions[17].question = "What is your  favorite meal?";
questions[17].type = "R";
questions[17].choices = new Array();
questions[17].choices[1] = "Lunch";
questions[17].choices[2] = "Dinner";
questions[18] = new Object();
questions[18].question = "Which pre-Christian mathematician is not correctly matched to his home city?";
questions[18].type = "R";
questions[18].choices = new Array();
questions[18].choices[1] = "Thales of Miletus";
questions[18].choices[2] = "Anaximander of Miletus";
questions[18].choices[3] = "Pythagoras of Samos";
questions[18].choices[4] = "Anaximenes of Miletus";
questions[18].choices[5] = "Cleostratus of Tenedos";
questions[18].choices[6] = "Anaxagoras of Clazomenae";
questions[18].choices[7] = "Zeno of Elea";
questions[18].choices[8] = "Antiphon of Rhamnos";
questions[18].choices[9] = "Oenopides of Chios";
questions[18].choices[10] = "Hippocrates of Chios";
questions[18].choices[11] = "Hippias of Elis";
questions[18].choices[12] = "Theodorus of Cyrene";
questions[18].choices[13] = "Philolaus of Croton";
questions[18].choices[14] = "Democritus of Abdera";
questions[18].choices[15] = "Hippasus of Metapontum";
questions[18].choices[16] = "Archytas of Tarentum";
questions[18].choices[17] = "Theaetetus of Athens";
questions[18].choices[18] = "Leodamas of Thasos";
questions[18].choices[19] = "Eudoxus of Cnidos";
questions[18].choices[20] = "Callipus of Cyzicus";
questions[18].choices[21] = "Xenocrates of Chalcedon";
questions[18].choices[22] = "Heraclides of Pontus";
questions[18].choices[23] = "Bryson of Heraclea";
questions[18].choices[24] = "Theudius of Magnesia";
questions[18].choices[25] = "Eudemus of Rhodes";
questions[18].choices[26] = "Autolycus of Pitane";
questions[18].choices[27] = "Aristarchus of Samos";
questions[18].choices[28] = "Archimedes of Syracuse";
questions[18].choices[29] = "Philo of Byzantium";
questions[18].choices[30] = "Nicoteles of Cyrene";
questions[18].choices[31] = "Eratosthenes of Cyrene";
questions[18].choices[32] = "Conon of Samos";
questions[18].choices[33] = "Apollonius of Perga";
questions[18].choices[34] = "Dositheus of Alexandria";
questions[18].choices[35] = "Dionysodorus of Amisus";
questions[18].choices[36] = "Diocles of Carystus";
questions[18].choices[37] = "Hypsicles of Alexandria";
questions[18].choices[38] = "Hipparchus of Nicaea";
questions[18].choices[39] = "Zeno of Sidon";
questions[18].choices[40] = "Geminus of Rhodes";
questions[19] = new Object();
questions[19].question = "Please choose the description that best describes your personality:";
questions[19].type = "R";
questions[19].choices = new Array();
questions[19].choices[1] = "Childish";
questions[19].choices[2] = "Oafish";
questions[19].choices[3] = "Stolid";
questions[19].choices[4] = "Timid";
questions[19].choices[5] = "Reserved";
questions[19].choices[6] = "Conceited";
questions[19].choices[7] = "Scornful";
questions[19].choices[8] = "Boastful";
questions[19].choices[9] = "Sleepy";
questions[19].choices[10] = "Stable";
questions[20] = new Object();
questions[20].question = "A cake can be sliced into more than seven pieces by making only four diameter cuts through its center.";
questions[20].type = "R";
questions[20].choices = new Array();
questions[20].choices[1] = "True";
questions[20].choices[2] = "False";
questions[21] = new Object();
questions[21].question = "Other than a large egret, what wild animal would you like to domesticate? NOTE: Several choices, including, but not limited to, \'Large Egret\', may trigger an investigation. Your supervisor has no further information about instigating animals or the investigatory process, though, upon request, your supervisor can provide further details about his or her authorized prophylactic unfamiliarity with procedure.";
questions[21].type = "R";
questions[21].choices = new Array();
questions[21].choices[1] = "Aardvark";
questions[21].choices[2] = "Aardwolf";
questions[21].choices[3] = "Abalone";
questions[21].choices[4] = "Abyssinian cat";
questions[21].choices[5] = "Achilles tang";
questions[21].choices[6] = "Acorn barnacle";
questions[21].choices[7] = "Acorn weevil";
questions[21].choices[8] = "Acorn woodpecker";
questions[21].choices[9] = "Adams stag-horned beetle";
questions[21].choices[10] = "Addax";
questions[21].choices[11] = "Adelie penguin";
questions[21].choices[12] = "Admiral butterfly";
questions[21].choices[13] = "African augur buzzard";
questions[21].choices[14] = "African bush viper";
questions[21].choices[15] = "African civet";
questions[21].choices[16] = "African clawed frog";
questions[21].choices[17] = "African elephant";
questions[21].choices[18] = "African fish eagle";
questions[21].choices[19] = "African golden cat";
questions[21].choices[20] = "African ground hornbill";
questions[21].choices[21] = "African harrier hawk";
questions[21].choices[22] = "African hornbill";
questions[21].choices[23] = "African jacana";
questions[21].choices[24] = "African mole snake";
questions[21].choices[25] = "African pied kingfisher";
questions[21].choices[26] = "African porcupine";
questions[21].choices[27] = "African rock python";
questions[21].choices[28] = "African wild cat";
questions[21].choices[29] = "African wild dog";
questions[21].choices[30] = "Agama";
questions[21].choices[31] = "Agouti";
questions[21].choices[32] = "Airedale";
questions[21].choices[33] = "Aisan pied starling";
questions[21].choices[34] = "Akita";
questions[21].choices[35] = "Alabama map turtle";
questions[21].choices[36] = "Alaska jingle";
questions[21].choices[37] = "Albacore tuna";
questions[21].choices[38] = "Albatross";
questions[21].choices[39] = "Albertosaurus";
questions[21].choices[40] = "Albino";
questions[21].choices[41] = "Aldabra tortoise";
questions[21].choices[42] = "Allens big-eared bat";
questions[21].choices[43] = "Alligator gar";
questions[21].choices[44] = "Alligator snapping turtle";
questions[21].choices[45] = "Allosaurus";
questions[21].choices[46] = "Alpaca";
questions[21].choices[47] = "Amazon dolphin";
questions[21].choices[48] = "Amazon parrot";
questions[21].choices[49] = "Amazon tree boa";
questions[21].choices[50] = "Amber pen shell";
questions[21].choices[51] = "American alligator";
questions[21].choices[52] = "American avocet";
questions[21].choices[53] = "American badger";
questions[21].choices[54] = "American bittern";
questions[21].choices[55] = "American black vulture";
questions[21].choices[56] = "American cicada";
questions[21].choices[57] = "American crayfish";
questions[21].choices[58] = "American crocodile";
questions[21].choices[59] = "American crow";
questions[21].choices[60] = "American goldfinch";
questions[21].choices[61] = "American kestrel";
questions[21].choices[62] = "American lobster";
questions[21].choices[63] = "American marten";
questions[21].choices[64] = "American ratsnake";
questions[21].choices[65] = "American red squirrel";
questions[21].choices[66] = "American river otter";
questions[21].choices[67] = "American robin";
questions[21].choices[68] = "American toad";
questions[21].choices[69] = "American wigeon";
questions[21].choices[70] = "Amethyst gem clam";
questions[21].choices[71] = "Amethyst sunbird";
questions[21].choices[72] = "Amethystine python";
questions[21].choices[73] = "Ammonite";
questions[21].choices[74] = "Amoeba";
questions[21].choices[75] = "Amphibian";
questions[21].choices[76] = "Amur minnow";
questions[21].choices[77] = "Amur ratsnake";
questions[21].choices[78] = "Amur starfish";
questions[21].choices[79] = "Anaconda";
questions[21].choices[80] = "Andean cat";
questions[21].choices[81] = "Andean cock-of-the-rock";
questions[21].choices[82] = "Andean condor";
questions[21].choices[83] = "Anemone crab";
questions[21].choices[84] = "Anemone shrimp";
questions[21].choices[85] = "Angel wing mussel";
questions[21].choices[86] = "Angelfish";
questions[21].choices[87] = "Anglerfish";
questions[21].choices[88] = "Angora";
questions[21].choices[89] = "Angwantibo";
questions[21].choices[90] = "Anhinga";
questions[21].choices[91] = "Animated";
questions[21].choices[92] = "Annas hummingbird";
questions[21].choices[93] = "Anole";
questions[21].choices[94] = "Anopheles";
questions[21].choices[95] = "Antarctic fur seal";
questions[21].choices[96] = "Antarctic giant petrel";
questions[21].choices[97] = "Anteater";
questions[21].choices[98] = "Antelope";
questions[21].choices[99] = "Antelope ground squirrel";
questions[21].choices[100] = "Antipodes green parakeet";
questions[21].choices[101] = "Aoudad";
questions[21].choices[102] = "Apatosaur";
questions[21].choices[103] = "Aphid";
questions[21].choices[104] = "Aplomado falcon";
questions[21].choices[105] = "Aquatic leech";
questions[21].choices[106] = "Arabian oryx";
questions[21].choices[107] = "Arabian wild cat";
questions[21].choices[108] = "Aracari";
questions[21].choices[109] = "Archaeocete";
questions[21].choices[110] = "Archaeopteryx";
questions[21].choices[111] = "Archer fish";
questions[21].choices[112] = "Arctic fox";
questions[21].choices[113] = "Arctic hare";
questions[21].choices[114] = "Arctic wolf";
questions[21].choices[115] = "Argali";
questions[21].choices[116] = "Argentine horned frog";
questions[21].choices[117] = "Argentine ruddy duck";
questions[21].choices[118] = "Argus fish";
questions[21].choices[119] = "Ariel toucan";
questions[21].choices[120] = "Arizona alligator lizard";
questions[21].choices[121] = "Ark shell";
questions[21].choices[122] = "Armadillo";
questions[21].choices[123] = "Armed crab";
questions[21].choices[124] = "Armed nylon shrimp";
questions[21].choices[125] = "Army ant";
questions[21].choices[126] = "Arrow crab";
questions[21].choices[127] = "Arrow worm";
questions[21].choices[128] = "Arrowana";
questions[21].choices[129] = "Asian constable butterfly";
questions[21].choices[130] = "Asian damselfly";
questions[21].choices[131] = "Asian elephant";
questions[21].choices[132] = "Asian lion";
questions[21].choices[133] = "Asian porcupine";
questions[21].choices[134] = "Asian small-clawed otter";
questions[21].choices[135] = "Asian trumpetfish";
questions[21].choices[136] = "Asian water buffalo";
questions[21].choices[137] = "Asiatic mouflon";
questions[21].choices[138] = "Asiatic wild ass";
questions[21].choices[139] = "Assassin bug";
questions[21].choices[140] = "Astarte";
questions[21].choices[141] = "Astrangia coral";
questions[21].choices[142] = "Atlantic black goby";
questions[21].choices[143] = "Atlantic blue tang";
questions[21].choices[144] = "Atlantic ridley turtle";
questions[21].choices[145] = "Atlantic sharpnose puffer";
questions[21].choices[146] = "Atlantic spadefish";
questions[21].choices[147] = "Atlas moth";
questions[21].choices[148] = "Auk";
questions[21].choices[149] = "Aurochs";
questions[21].choices[150] = "Australian curlew";
questions[21].choices[151] = "Australian fur seal";
questions[21].choices[152] = "Australian kestrel";
questions[21].choices[153] = "Australian shelduck";
questions[21].choices[154] = "Australian Silky Terrier";
questions[21].choices[155] = "Avocet";
questions[21].choices[156] = "Axis deer";
questions[21].choices[157] = "Axolotl";
questions[21].choices[158] = "Aye-aye";
questions[21].choices[159] = "Aztec ant";
questions[21].choices[160] = "Azure-winged magpie";
questions[21].choices[161] = "Azure vase";
questions[21].choices[162] = "Babacoot";
questions[21].choices[163] = "Babirusa";
questions[21].choices[164] = "Baboon";
questions[21].choices[165] = "Bactrian camel";
questions[21].choices[166] = "Badger";
questions[21].choices[167] = "Bahama boa";
questions[21].choices[168] = "Bahama Island hutia";
questions[21].choices[169] = "Bahama pintail";
questions[21].choices[170] = "Baikal teal";
questions[21].choices[171] = "Baillon\'s crake";
questions[21].choices[172] = "Balanophylla";
questions[21].choices[173] = "Bald eagle";
questions[21].choices[174] = "Bald ibis";
questions[21].choices[175] = "Bali mynah";
questions[21].choices[176] = "Baltimore oriole";
questions[21].choices[177] = "Band-tailed pigeon";
questions[21].choices[178] = "Banded butterflyfish";
questions[21].choices[179] = "Banded coral shrimp";
questions[21].choices[180] = "Banded pitta";
questions[21].choices[181] = "Banded shrimp";
questions[21].choices[182] = "Bandicoot";
questions[21].choices[183] = "Bannerfish";
questions[21].choices[184] = "Bantam";
questions[21].choices[185] = "Banteng";
questions[21].choices[186] = "Bar jack";
questions[21].choices[187] = "Barb";
questions[21].choices[188] = "Barbary macaque";
questions[21].choices[189] = "Barbary partridge";
questions[21].choices[190] = "Barbet";
questions[21].choices[191] = "Bark bug";
questions[21].choices[192] = "Barking treefrog";
questions[21].choices[193] = "Barn owl";
questions[21].choices[194] = "Barn swallow";
questions[21].choices[195] = "Barnacle";
questions[21].choices[196] = "Barnacle goose";
questions[21].choices[197] = "Barracuda";
questions[21].choices[198] = "Barred hamlet";
questions[21].choices[199] = "Barred owl";
questions[21].choices[200] = "Barrel sponge";
questions[21].choices[201] = "Barrow\'s goldeneye";
questions[21].choices[202] = "Barrows goldeneye";
questions[21].choices[203] = "Basilisk";
questions[21].choices[204] = "Basilosaurus";
questions[21].choices[205] = "Basket sponge";
questions[21].choices[206] = "Basket star";
questions[21].choices[207] = "Basking shark";
questions[21].choices[208] = "Bass";
questions[21].choices[209] = "Basset";
questions[21].choices[210] = "Bat-eared fox";
questions[21].choices[211] = "Bateleur";
questions[21].choices[212] = "Bay scallop";
questions[21].choices[213] = "Beach flea";
questions[21].choices[214] = "Beagle";
questions[21].choices[215] = "Bean goose";
questions[21].choices[216] = "Bear";
questions[21].choices[217] = "Bearded barbet";
questions[21].choices[218] = "Bearded dragon";
questions[21].choices[219] = "Bearded seal";
questions[21].choices[220] = "Beaver";
questions[21].choices[221] = "Bee-eater";
questions[21].choices[222] = "Bee";
questions[21].choices[223] = "Beetle";
questions[21].choices[224] = "Belted kingfisher";
questions[21].choices[225] = "Beluga whale";
questions[21].choices[226] = "Bengal cat";
questions[21].choices[227] = "Bengal monitor";
questions[21].choices[228] = "Bengal tiger";
questions[21].choices[229] = "Bennett\'s tree kangaroo";
questions[21].choices[230] = "Bennett\'s wallaby";
questions[21].choices[231] = "Bentnose macoma";
questions[21].choices[232] = "Betta fish";
questions[21].choices[233] = "Bewick\'s wren";
questions[21].choices[234] = "Bharal";
questions[21].choices[235] = "Bichon Friese";
questions[21].choices[236] = "Big brown bat";
questions[21].choices[237] = "Big cat";
questions[21].choices[238] = "Bighorn sheep";
questions[21].choices[239] = "Billbug";
questions[21].choices[240] = "Binturong";
questions[21].choices[241] = "Bird-voiced treefrog";
questions[21].choices[242] = "Bird";
questions[21].choices[243] = "Bison";
questions[21].choices[244] = "Black-and-yellow Argiope";
questions[21].choices[245] = "Black-backed gull";
questions[21].choices[246] = "Black-backed jackal";
questions[21].choices[247] = "Black-billed magpie";
questions[21].choices[248] = "Black-browed albatross";
questions[21].choices[249] = "Black-browed reed warbler";
questions[21].choices[250] = "Black-capped chickadee";
questions[21].choices[251] = "Black-capped conure";
questions[21].choices[252] = "Black-capped kingfisher";
questions[21].choices[253] = "Black-chinned hummingbird";
questions[21].choices[254] = "Black-crowned night heron";
questions[21].choices[255] = "Black-faced spoonbill";
questions[21].choices[256] = "Black-footed albatross";
questions[21].choices[257] = "Black-footed ferret";
questions[21].choices[258] = "Black-headed grosbeak";
questions[21].choices[259] = "Black-headed gull";
questions[21].choices[260] = "Black-headed python";
questions[21].choices[261] = "Black-legged katydid";
questions[21].choices[262] = "Black-legged kittiwake";
questions[21].choices[263] = "Black-masked lovebird";
questions[21].choices[264] = "Black-naped oriole";
questions[21].choices[265] = "Black-necked grebe";
questions[21].choices[266] = "Black-shouldered kite";
questions[21].choices[267] = "Black-spotted frog";
questions[21].choices[268] = "Black-striped field mouse";
questions[21].choices[269] = "Black-tailed gull";
questions[21].choices[270] = "Black-tailed jackrabbit";
questions[21].choices[271] = "Black-tailed rattlesnake";
questions[21].choices[272] = "Black-throated loon";
questions[21].choices[273] = "Black-winged stilt";
questions[21].choices[274] = "Black abalone";
questions[21].choices[275] = "Black ark";
questions[21].choices[276] = "Black bear";
questions[21].choices[277] = "Black caiman";
questions[21].choices[278] = "Black cat";
questions[21].choices[279] = "Black drongo";
questions[21].choices[280] = "Black horse";
questions[21].choices[281] = "Black howler monkey";
questions[21].choices[282] = "Black jackrabbit";
questions[21].choices[283] = "Black katy";
questions[21].choices[284] = "Black lemur";
questions[21].choices[285] = "Black leopard";
questions[21].choices[286] = "Black lory";
questions[21].choices[287] = "Black noddy tern";
questions[21].choices[288] = "Black palm cockatoo";
questions[21].choices[289] = "Black paradise flycatcher";
questions[21].choices[290] = "Black pig";
questions[21].choices[291] = "Black pine snake";
questions[21].choices[292] = "Black racer";
questions[21].choices[293] = "Black rat";
questions[21].choices[294] = "Black ratsnake";
questions[21].choices[295] = "Black rhinoceros";
questions[21].choices[296] = "Black scoter";
questions[21].choices[297] = "Black sea cucumber";
questions[21].choices[298] = "Black shinner";
questions[21].choices[299] = "Black squirrel";
questions[21].choices[300] = "Black stork";
questions[21].choices[301] = "Black swan";
questions[21].choices[302] = "Black tagla";
questions[21].choices[303] = "Black vulture";
questions[21].choices[304] = "Black widow";
questions[21].choices[305] = "Black woodpecker";
questions[21].choices[306] = "Blackbird";
questions[21].choices[307] = "Blackbuck";
questions[21].choices[308] = "Blackburnian warbler";
questions[21].choices[309] = "Blackneck snake";
questions[21].choices[310] = "Blacktail reef shark";
questions[21].choices[311] = "Blacktip shark";
questions[21].choices[312] = "Blandford\'s fox";
questions[21].choices[313] = "Bleeding tooth";
questions[21].choices[314] = "Blenny";
questions[21].choices[315] = "Blesbok";
questions[21].choices[316] = "Blood python";
questions[21].choices[317] = "Blood sea star";
questions[21].choices[318] = "Blood shrimp";
questions[21].choices[319] = "Blood worm";
questions[21].choices[320] = "Blue-crowned motmot";
questions[21].choices[321] = "Blue-gray gnatcatcher";
questions[21].choices[322] = "Blue-speckled prawn-goby";
questions[21].choices[323] = "Blue-spotted stingray";
questions[21].choices[324] = "Blue-striped snapper";
questions[21].choices[325] = "Blue-throated hummingbird";
questions[21].choices[326] = "Blue and gold macaw";
questions[21].choices[327] = "Blue butterfly";
questions[21].choices[328] = "Blue crane";
questions[21].choices[329] = "Blue crowned pigeon";
questions[21].choices[330] = "Blue footed booby";
questions[21].choices[331] = "Blue gray tanager";
questions[21].choices[332] = "Blue grosbeak";
questions[21].choices[333] = "Blue heron";
questions[21].choices[334] = "Blue jay";
questions[21].choices[335] = "Blue leaf beetle";
questions[21].choices[336] = "Blue mandarin fish";
questions[21].choices[337] = "Blue marlin";
questions[21].choices[338] = "Blue parrotfish";
questions[21].choices[339] = "Blue penguin";
questions[21].choices[340] = "Blue poison frog";
questions[21].choices[341] = "Blue reeffish";
questions[21].choices[342] = "Blue ringed octopus";
questions[21].choices[343] = "Blue shark";
questions[21].choices[344] = "Blue tit";
questions[21].choices[345] = "Blue tongue skink";
questions[21].choices[346] = "Blue waxbill";
questions[21].choices[347] = "Blue whale";
questions[21].choices[348] = "Bluebird";
questions[21].choices[349] = "Bluegill";
questions[21].choices[350] = "Bluehead wrasse";
questions[21].choices[351] = "Bluestriped grunt";
questions[21].choices[352] = "Bluethroat";
questions[21].choices[353] = "Boa";
questions[21].choices[354] = "Boar";
questions[21].choices[355] = "Boat-tailed grackle";
questions[21].choices[356] = "Bobcat";
questions[21].choices[357] = "Bobolink";
questions[21].choices[358] = "Bobwhite quail";
questions[21].choices[359] = "Bog turtle";
questions[21].choices[360] = "Bohemian waxwing";
questions[21].choices[361] = "Bongo";
questions[21].choices[362] = "Bontebok";
questions[21].choices[363] = "Booby";
questions[21].choices[364] = "Boreal owl";
questions[21].choices[365] = "Borneo blood python";
questions[21].choices[366] = "Borzoi";
questions[21].choices[367] = "Boston terrier";
questions[21].choices[368] = "Botfly";
questions[21].choices[369] = "Bottle nosed dolphin";
questions[21].choices[370] = "Bowerbird";
questions[21].choices[371] = "Box turtle";
questions[21].choices[372] = "Boxer";
questions[21].choices[373] = "Boyds forest dragon";
questions[21].choices[374] = "Brachiosaur";
questions[21].choices[375] = "Braconid wasp";
questions[21].choices[376] = "Brambling";
questions[21].choices[377] = "Brant";
questions[21].choices[378] = "Breeding";
questions[21].choices[379] = "British red squirrel";
questions[21].choices[380] = "Broad-billed hummingbird";
questions[21].choices[381] = "Broad-billed roller";
questions[21].choices[382] = "Broad-tailed hummingbird";
questions[21].choices[383] = "Broad-winged hawk";
questions[21].choices[384] = "Brolga";
questions[21].choices[385] = "Bronzed cowbird";
questions[21].choices[386] = "Brook trout";
questions[21].choices[387] = "Brown-eared bulbul";
questions[21].choices[388] = "Brown-headed cowbird";
questions[21].choices[389] = "Brown-headed parrot";
questions[21].choices[390] = "Brown anole";
questions[21].choices[391] = "Brown bear";
questions[21].choices[392] = "Brown capuchin";
questions[21].choices[393] = "Brown hyena";
questions[21].choices[394] = "Brown lemur";
questions[21].choices[395] = "Brown long-eared bat";
questions[21].choices[396] = "Brown lory";
questions[21].choices[397] = "Brown pelican";
questions[21].choices[398] = "Brown recluse spider";
questions[21].choices[399] = "Brown shrike";
questions[21].choices[400] = "Brown towhee";
questions[21].choices[401] = "Brown tree snake";
questions[21].choices[402] = "Brown water snake";
questions[21].choices[403] = "Brush-tailed phascogale";
questions[21].choices[404] = "Brush-tailed possum";
questions[21].choices[405] = "Buck";
questions[21].choices[406] = "Buckeye butterfly";
questions[21].choices[407] = "Budgerigar";
questions[21].choices[408] = "Buff-bellied hummingbird";
questions[21].choices[409] = "Buffalo";
questions[21].choices[410] = "Bug";
questions[21].choices[411] = "Bull snake";
questions[21].choices[412] = "Bulldog";
questions[21].choices[413] = "Bullfinch";
questions[21].choices[414] = "Bullfrog";
questions[21].choices[415] = "Bullterrier";
questions[21].choices[416] = "Bumblebee";
questions[21].choices[417] = "Bumblebee moth";
questions[21].choices[418] = "Bunting";
questions[21].choices[419] = "Burmese cat";
questions[21].choices[420] = "Burmese python";
questions[21].choices[421] = "Burrowing owl";
questions[21].choices[422] = "Bush dog";
questions[21].choices[423] = "Bush pig";
questions[21].choices[424] = "Bushbuck";
questions[21].choices[425] = "Butterfly";
questions[21].choices[426] = "Butterflyfish";
questions[21].choices[427] = "Buzzard";
questions[21].choices[428] = "Cactus wren";
questions[21].choices[429] = "Caddisfly";
questions[21].choices[430] = "Caiman";
questions[21].choices[431] = "Cairn terrier";
questions[21].choices[432] = "California chipmunk";
questions[21].choices[433] = "California condor";
questions[21].choices[434] = "California sea lion";
questions[21].choices[435] = "California towhee";
questions[21].choices[436] = "Calliope hummingbird";
questions[21].choices[437] = "Camel";
questions[21].choices[438] = "Canada goose";
questions[21].choices[439] = "Canada warbler";
questions[21].choices[440] = "Canary Island lizard";
questions[21].choices[441] = "Cantil";
questions[21].choices[442] = "Canvasback duck";
questions[21].choices[443] = "Cape Barren goose";
questions[21].choices[444] = "Cape buffalo";
questions[21].choices[445] = "Cape gannet";
questions[21].choices[446] = "Cape petrel";
questions[21].choices[447] = "Capercaillie";
questions[21].choices[448] = "Capuchin";
questions[21].choices[449] = "Capybara";
questions[21].choices[450] = "Caracal";
questions[21].choices[451] = "Caracara";
questions[21].choices[452] = "Cardinal";
questions[21].choices[453] = "Cardinal honeyeater";
questions[21].choices[454] = "Cardinal tetra";
questions[21].choices[455] = "Caribbean reef shark";
questions[21].choices[456] = "Caribou";
questions[21].choices[457] = "Carmine bee-eater";
questions[21].choices[458] = "Carolina chickadee";
questions[21].choices[459] = "Carolina mantis";
questions[21].choices[460] = "Carolina parakeet";
questions[21].choices[461] = "Carpenter ant";
questions[21].choices[462] = "Carpenter bee";
questions[21].choices[463] = "Carpet python";
questions[21].choices[464] = "Carpet shark";
questions[21].choices[465] = "Carrion crow";
questions[21].choices[466] = "Cassin\'s finch";
questions[21].choices[467] = "Cassowary";
questions[21].choices[468] = "Cat-eyed snake";
questions[21].choices[469] = "Caterpillar";
questions[21].choices[470] = "Catfish";
questions[21].choices[471] = "Cattle egret";
questions[21].choices[472] = "Cavy";
questions[21].choices[473] = "Cecropia moth";
questions[21].choices[474] = "Cedar waxwing";
questions[21].choices[475] = "Centipede";
questions[21].choices[476] = "Cerulean warbler";
questions[21].choices[477] = "Chachalaca";
questions[21].choices[478] = "Chacma baboon";
questions[21].choices[479] = "Chameleon";
questions[21].choices[480] = "Chamois";
questions[21].choices[481] = "Chat";
questions[21].choices[482] = "Cheetah";
questions[21].choices[483] = "Cherry-headed conure";
questions[21].choices[484] = "Chestnut-mandibled toucan";
questions[21].choices[485] = "Chevrotain";
questions[21].choices[486] = "Chick";
questions[21].choices[487] = "Chickadee";
questions[21].choices[488] = "Chihuahua";
questions[21].choices[489] = "Chilean rat";
questions[21].choices[490] = "Chimney swift";
questions[21].choices[491] = "Chimpanzee";
questions[21].choices[492] = "Chinchilla";
questions[21].choices[493] = "Chinese alligator";
questions[21].choices[494] = "Chinese catfish";
questions[21].choices[495] = "Chinese grosbeak";
questions[21].choices[496] = "Chinese mantis";
questions[21].choices[497] = "Chinese merganser";
questions[21].choices[498] = "Chinese minnow";
questions[21].choices[499] = "Chinese mystery snail";
questions[21].choices[500] = "Chinese paradise fish";
questions[21].choices[501] = "Chinese red-sided culter";
questions[21].choices[502] = "Chinese water deer";
questions[21].choices[503] = "Chinstrap penguin";
questions[21].choices[504] = "Chipmunk";
questions[21].choices[505] = "Chiroptera";
questions[21].choices[506] = "Chiton";
questions[21].choices[507] = "Chow Chow";
questions[21].choices[508] = "Chuckwalla";
questions[21].choices[509] = "Chukar";
questions[21].choices[510] = "Chum salmon";
questions[21].choices[511] = "Cicada";
questions[21].choices[512] = "Cichlid";
questions[21].choices[513] = "Cinnabar moth";
questions[21].choices[514] = "Cinnamon teal";
questions[21].choices[515] = "Civet";
questions[21].choices[516] = "Cleaner wrasse";
questions[21].choices[517] = "Clearfin lionfish";
questions[21].choices[518] = "Clearwing butterfly";
questions[21].choices[519] = "Click beetle";
questions[21].choices[520] = "Cliff swallow";
questions[21].choices[521] = "Clouded leopard";
questions[21].choices[522] = "Clown stink bug";
questions[21].choices[523] = "Clown triggerfish";
questions[21].choices[524] = "Clownfish";
questions[21].choices[525] = "Coachwhip";
questions[21].choices[526] = "Coastal plains milk snake";
questions[21].choices[527] = "Coati";
questions[21].choices[528] = "Cobra";
questions[21].choices[529] = "Cock-of-the-rock";
questions[21].choices[530] = "Cockatiel";
questions[21].choices[531] = "Cockatoo";
questions[21].choices[532] = "Cockchafer";
questions[21].choices[533] = "Cockroach";
questions[21].choices[534] = "Coelacanth";
questions[21].choices[535] = "Collared aracari";
questions[21].choices[536] = "Collared Inca hummingbird";
questions[21].choices[537] = "Collared lizard";
questions[21].choices[538] = "Collared peccary";
questions[21].choices[539] = "Collie";
questions[21].choices[540] = "Colubus monkey";
questions[21].choices[541] = "Common angwantibo";
questions[21].choices[542] = "Common black kite";
questions[21].choices[543] = "Common cabbage butterfly";
questions[21].choices[544] = "Common carp";
questions[21].choices[545] = "Common chiffchaff";
questions[21].choices[546] = "Common comma butterfly";
questions[21].choices[547] = "Common cormorant";
questions[21].choices[548] = "Common dolphin";
questions[21].choices[549] = "Common eland";
questions[21].choices[550] = "Common glider butterfly";
questions[21].choices[551] = "Common goldeneye";
questions[21].choices[552] = "Common grackle";
questions[21].choices[553] = "Common ground dove";
questions[21].choices[554] = "Common ground skink";
questions[21].choices[555] = "Common gull";
questions[21].choices[556] = "Common jay";
questions[21].choices[557] = "Common kingfisher";
questions[21].choices[558] = "Common kingsnake";
questions[21].choices[559] = "Common Korean bitterling";
questions[21].choices[560] = "Common lionfish";
questions[21].choices[561] = "Common loon";
questions[21].choices[562] = "Common map turtle";
questions[21].choices[563] = "Common merganser";
questions[21].choices[564] = "Common mongoose";
questions[21].choices[565] = "Common murre";
questions[21].choices[566] = "Common nighthawk";
questions[21].choices[567] = "Common pinktoe tarantula";
questions[21].choices[568] = "Common pipistrelle";
questions[21].choices[569] = "Common quail";
questions[21].choices[570] = "Common shelduck";
questions[21].choices[571] = "Common snapping turtle";
questions[21].choices[572] = "Common snipe";
questions[21].choices[573] = "Common teal";
questions[21].choices[574] = "Common tern";
questions[21].choices[575] = "Common toad";
questions[21].choices[576] = "Common wasp";
questions[21].choices[577] = "Common woolly monkey";
questions[21].choices[578] = "Conch";
questions[21].choices[579] = "Condor";
questions[21].choices[580] = "Cone shell";
questions[21].choices[581] = "Cooper\'s hawk";
questions[21].choices[582] = "Coot";
questions[21].choices[583] = "Cope\'s gray treefrog";
questions[21].choices[584] = "Copper butterfly";
questions[21].choices[585] = "Copperhead snake";
questions[21].choices[586] = "Coral";
questions[21].choices[587] = "Coral snake";
questions[21].choices[588] = "Corgi";
questions[21].choices[589] = "Corn bunting";
questions[21].choices[590] = "Corn snake";
questions[21].choices[591] = "Corvidae";
questions[21].choices[592] = "Cory\'s shearwater";
questions[21].choices[593] = "Coscoroba swan";
questions[21].choices[594] = "Costa\'s hummingbird";
questions[21].choices[595] = "Cotton-top tamarin";
questions[21].choices[596] = "Cotton rat";
questions[21].choices[597] = "Cottonmouth";
questions[21].choices[598] = "Cottontail rabbit";
questions[21].choices[599] = "Couch\'s spadefoot toad";
questions[21].choices[600] = "Cougar";
questions[21].choices[601] = "Cow";
questions[21].choices[602] = "Cowbird";
questions[21].choices[603] = "Cowfish";
questions[21].choices[604] = "Cowrie";
questions[21].choices[605] = "Coyote";
questions[21].choices[606] = "Crab-eating fox";
questions[21].choices[607] = "Crab-eating macaque";
questions[21].choices[608] = "Crab";
questions[21].choices[609] = "Crab spider";
questions[21].choices[610] = "Crane";
questions[21].choices[611] = "Crane fly";
questions[21].choices[612] = "Crayfish";
questions[21].choices[613] = "Crested Celebes macaque";
questions[21].choices[614] = "Crested guineafowl";
questions[21].choices[615] = "Crested hawk";
questions[21].choices[616] = "Crested tree dragon";
questions[21].choices[617] = "Cricket";
questions[21].choices[618] = "Crimson rosella";
questions[21].choices[619] = "Crinoid";
questions[21].choices[620] = "Crocodile";
questions[21].choices[621] = "Crocodile monitor";
questions[21].choices[622] = "Crossbill";
questions[21].choices[623] = "Crow";
questions[21].choices[624] = "Crow tit";
questions[21].choices[625] = "Crowned crane";
questions[21].choices[626] = "Crowned lemur";
questions[21].choices[627] = "Crowned pigeon";
questions[21].choices[628] = "Crucian carp";
questions[21].choices[629] = "Cuban Amazon parrot";
questions[21].choices[630] = "Cuban conure";
questions[21].choices[631] = "Cuban crocodile";
questions[21].choices[632] = "Cuban hutia";
questions[21].choices[633] = "Cuckoo";
questions[21].choices[634] = "Curlew";
questions[21].choices[635] = "Cuscus";
questions[21].choices[636] = "Cuttlefish";
questions[21].choices[637] = "Cuvier\'s dwarf caiman";
questions[21].choices[638] = "Dachshund";
questions[21].choices[639] = "Daddy longlegs";
questions[21].choices[640] = "Daisy coral";
questions[21].choices[641] = "Dall sheep";
questions[21].choices[642] = "Dalmatian";
questions[21].choices[643] = "Dama gazelle";
questions[21].choices[644] = "Damselfly";
questions[21].choices[645] = "Dapple gray horse";
questions[21].choices[646] = "Dark-eyed junco";
questions[21].choices[647] = "Dark chub";
questions[21].choices[648] = "Darwin frog";
questions[21].choices[649] = "Darwin\'s leaf-eared mouse";
questions[21].choices[650] = "Daurian myna";
questions[21].choices[651] = "Daurian redstart";
questions[21].choices[652] = "Day gecko";
questions[21].choices[653] = "Deep ocean fish";
questions[21].choices[654] = "Deep sea hatchetfish";
questions[21].choices[655] = "Deep sea shrimp";
questions[21].choices[656] = "Deer";
questions[21].choices[657] = "Deer mouse";
questions[21].choices[658] = "Degu";
questions[21].choices[659] = "Deinonychus";
questions[21].choices[660] = "Demoiselle crane";
questions[21].choices[661] = "Desert cottontail rabbit";
questions[21].choices[662] = "Desert fox";
questions[21].choices[663] = "Desert kingsnake";
questions[21].choices[664] = "Desert tortoise";
questions[21].choices[665] = "Desert whipsnake";
questions[21].choices[666] = "Dhole";
questions[21].choices[667] = "Diamond fish";
questions[21].choices[668] = "Diamondback rattlesnake";
questions[21].choices[669] = "Diamondback terrapin";
questions[21].choices[670] = "Diamondback watersnake";
questions[21].choices[671] = "Dice snake";
questions[21].choices[672] = "Dik-dik";
questions[21].choices[673] = "Dilophosaurus";
questions[21].choices[674] = "Dimetrodon";
questions[21].choices[675] = "Dingo";
questions[21].choices[676] = "Dinosaur";
questions[21].choices[677] = "Dione\'s ratsnake";
questions[21].choices[678] = "Diplodocus";
questions[21].choices[679] = "Dog";
questions[21].choices[680] = "Dolly varden";
questions[21].choices[681] = "Dolphin";
questions[21].choices[682] = "Donkey";
questions[21].choices[683] = "Dorado";
questions[21].choices[684] = "Dotted gizzard shad";
questions[21].choices[685] = "Double-banded sandgrouse";
questions[21].choices[686] = "Double-toothed kite";
questions[21].choices[687] = "Douc langur";
questions[21].choices[688] = "Douglas squirrel";
questions[21].choices[689] = "Downy woodpecker";
questions[21].choices[690] = "Dragonfly";
questions[21].choices[691] = "Drumfish";
questions[21].choices[692] = "Duck";
questions[21].choices[693] = "Ducorps cockatoo";
questions[21].choices[694] = "Dugong";
questions[21].choices[695] = "Duiker";
questions[21].choices[696] = "Dung beetle";
questions[21].choices[697] = "Dungeness crab";
questions[21].choices[698] = "Dusky hognose snake";
questions[21].choices[699] = "Dusky lory";
questions[21].choices[700] = "Dusky pygmy rattlesnake";
questions[21].choices[701] = "Dwarf crocodile";
questions[21].choices[702] = "Dwarf gourami";
questions[21].choices[703] = "Dwarf mongoose";
questions[21].choices[704] = "Dwarfsnake";
questions[21].choices[705] = "Eagle";
questions[21].choices[706] = "Eagle ray";
questions[21].choices[707] = "Earthworm";
questions[21].choices[708] = "Earwig";
questions[21].choices[709] = "East Asian white clam";
questions[21].choices[710] = "Eastern box turtle";
questions[21].choices[711] = "Eastern cottontail rabbit";
questions[21].choices[712] = "Eastern golden frog";
questions[21].choices[713] = "Eastern grass owl";
questions[21].choices[714] = "Eastern gray squirrel";
questions[21].choices[715] = "Eastern hognose snake";
questions[21].choices[716] = "Eastern kingsnake";
questions[21].choices[717] = "Eastern milk snake";
questions[21].choices[718] = "Eastern mud turtle";
questions[21].choices[719] = "Eastern red bat";
questions[21].choices[720] = "Eastern ribbon snake";
questions[21].choices[721] = "Eastern spadefoot toad";
questions[21].choices[722] = "Eastern tiger salamander";
questions[21].choices[723] = "Eastern towhee";
questions[21].choices[724] = "Eastern worm snake";
questions[21].choices[725] = "Eatern bluebird";
questions[21].choices[726] = "Echidna";
questions[21].choices[727] = "Eel";
questions[21].choices[728] = "Egret";
questions[21].choices[729] = "Egyptian cobra";
questions[21].choices[730] = "Egyptian goose";
questions[21].choices[731] = "Egyptian plover";
questions[21].choices[732] = "Egyptian vulture";
questions[21].choices[733] = "Eider";
questions[21].choices[734] = "Electric eel";
questions[21].choices[735] = "Elephant";
questions[21].choices[736] = "Elephant seal";
questions[21].choices[737] = "Elephant shrew";
questions[21].choices[738] = "Elk";
questions[21].choices[739] = "Emeral damselfly";
questions[21].choices[740] = "Emerald tree boa";
questions[21].choices[741] = "Emperor dart butterfly";
questions[21].choices[742] = "Emperor dragonfly";
questions[21].choices[743] = "Emperor goose";
questions[21].choices[744] = "Emperor moth";
questions[21].choices[745] = "Emperor newt";
questions[21].choices[746] = "Emperor penguin";
questions[21].choices[747] = "Emu";
questions[21].choices[748] = "Ensatina salamander";
questions[21].choices[749] = "Equador pinktoe tarantula";
questions[21].choices[750] = "Erckel\'s francolin";
questions[21].choices[751] = "Ermine";
questions[21].choices[752] = "Eurasian badger";
questions[21].choices[753] = "Eurasian black vulture";
questions[21].choices[754] = "Eurasian blackbird";
questions[21].choices[755] = "Eurasian cuckoo";
questions[21].choices[756] = "Eurasian curlew";
questions[21].choices[757] = "Eurasian eagle owl";
questions[21].choices[758] = "Eurasian harvest mouse";
questions[21].choices[759] = "Eurasian kestrel";
questions[21].choices[760] = "Eurasian lynx";
questions[21].choices[761] = "Eurasian red dragonfly";
questions[21].choices[762] = "Eurasian red squirrel";
questions[21].choices[763] = "Eurasian river otter";
questions[21].choices[764] = "Eurasian sparrowhawk";
questions[21].choices[765] = "Eurasian white spoonbill";
questions[21].choices[766] = "European brown shrimp";
questions[21].choices[767] = "European earwig";
questions[21].choices[768] = "European eel";
questions[21].choices[769] = "European garden spider";
questions[21].choices[770] = "European goldfinch";
questions[21].choices[771] = "European hedgehog";
questions[21].choices[772] = "European large crane fly";
questions[21].choices[773] = "European lynx";
questions[21].choices[774] = "European May cockchafer";
questions[21].choices[775] = "European polecat";
questions[21].choices[776] = "European rabbit";
questions[21].choices[777] = "European red kite";
questions[21].choices[778] = "European robin";
questions[21].choices[779] = "European roller";
questions[21].choices[780] = "European stag beetle";
questions[21].choices[781] = "European tree frog";
questions[21].choices[782] = "European water shrew";
questions[21].choices[783] = "European white stork";
questions[21].choices[784] = "European wild cat";
questions[21].choices[785] = "Evening bat";
questions[21].choices[786] = "Evening grosbeak";
questions[21].choices[787] = "Eyelash viper";
questions[21].choices[788] = "Fairy pitta";
questions[21].choices[789] = "Falcon";
questions[21].choices[790] = "Fallow deer";
questions[21].choices[791] = "False water cobra";
questions[21].choices[792] = "Fangtooth";
questions[21].choices[793] = "Fantail";
questions[21].choices[794] = "Fantail filefish";
questions[21].choices[795] = "Far Eastern Arrow Squid";
questions[21].choices[796] = "Far Eastern mussel";
questions[21].choices[797] = "Far Eastern sea cucumber";
questions[21].choices[798] = "Far Eastern tree frog";
questions[21].choices[799] = "Fat-tailed dwarf lemur";
questions[21].choices[800] = "Fat tailed lemur";
questions[21].choices[801] = "Fawn";
questions[21].choices[802] = "Feathertail glider";
questions[21].choices[803] = "Fennec fox";
questions[21].choices[804] = "Feral rock pigeon";
questions[21].choices[805] = "Ferret";
questions[21].choices[806] = "Ferruginous hawk";
questions[21].choices[807] = "Fiddler crab";
questions[21].choices[808] = "Field cricket";
questions[21].choices[809] = "Fieldfare";
questions[21].choices[810] = "Filefish";
questions[21].choices[811] = "Fin whale";
questions[21].choices[812] = "Finch";
questions[21].choices[813] = "Fischer\'s lovebird";
questions[21].choices[814] = "Fish";
questions[21].choices[815] = "Fisher weasel";
questions[21].choices[816] = "Fishing cat";
questions[21].choices[817] = "Fishing spider";
questions[21].choices[818] = "Five-beared rockling";
questions[21].choices[819] = "Five-lined skink";
questions[21].choices[820] = "Flamingo";
questions[21].choices[821] = "Flamingo\'s tongue";
questions[21].choices[822] = "Flammulated owl";
questions[21].choices[823] = "Flatworm";
questions[21].choices[824] = "Flea";
questions[21].choices[825] = "Flicker";
questions[21].choices[826] = "Flight";
questions[21].choices[827] = "Flycatcher";
questions[21].choices[828] = "Flying dino";
questions[21].choices[829] = "Forest pierrot butterfly";
questions[21].choices[830] = "Formicidae";
questions[21].choices[831] = "Formosan blue magpie";
questions[21].choices[832] = "Forster\'s tern";
questions[21].choices[833] = "Fossa";
questions[21].choices[834] = "Four-horned antelope";
questions[21].choices[835] = "Foureye butterflyfish";
questions[21].choices[836] = "Fox";
questions[21].choices[837] = "Fox snake";
questions[21].choices[838] = "Fox squirrel";
questions[21].choices[839] = "Francolin";
questions[21].choices[840] = "Free-tailed bat";
questions[21].choices[841] = "French angelfish";
questions[21].choices[842] = "Freshwater crayfish";
questions[21].choices[843] = "Freshwater mandarin fish";
questions[21].choices[844] = "Freshwater ray";
questions[21].choices[845] = "Frigate bird";
questions[21].choices[846] = "Frilled lizard";
questions[21].choices[847] = "Frog";
questions[21].choices[848] = "Frogfish";
questions[21].choices[849] = "Froghopper";
questions[21].choices[850] = "Fruit bat";
questions[21].choices[851] = "Fruit dove";
questions[21].choices[852] = "Fruit fly";
questions[21].choices[853] = "Fulmar";
questions[21].choices[854] = "Fulvous tree duck";
questions[21].choices[855] = "Funnel-web spider";
questions[21].choices[856] = "Fur seal";
questions[21].choices[857] = "Gaboon viper";
questions[21].choices[858] = "Gadwall";
questions[21].choices[859] = "Galah";
questions[21].choices[860] = "Galapagos giant tortoise";
questions[21].choices[861] = "Galapagos Penguin";
questions[21].choices[862] = "Galapagos sea lion";
questions[21].choices[863] = "Gallinule";
questions[21].choices[864] = "Gang-gang cockatoo";
questions[21].choices[865] = "Gannet";
questions[21].choices[866] = "Gannet\'s test";
questions[21].choices[867] = "Garter snake";
questions[21].choices[868] = "Gaur";
questions[21].choices[869] = "Gavial";
questions[21].choices[870] = "Gazelle";
questions[21].choices[871] = "Gecko";
questions[21].choices[872] = "Gelada baboon";
questions[21].choices[873] = "Gentoo penguin";
questions[21].choices[874] = "Gerenuk";
questions[21].choices[875] = "German shepherd";
questions[21].choices[876] = "Ghost-faced bat";
questions[21].choices[877] = "Ghost bat";
questions[21].choices[878] = "Ghost pipefish";
questions[21].choices[879] = "Giant abalone";
questions[21].choices[880] = "Giant anteater";
questions[21].choices[881] = "Giant armadillo";
questions[21].choices[882] = "Giant eagle owl";
questions[21].choices[883] = "Giant eland";
questions[21].choices[884] = "Giant Pacific octopus";
questions[21].choices[885] = "Giant panda";
questions[21].choices[886] = "Gibbon";
questions[21].choices[887] = "Giganotosaurus";
questions[21].choices[888] = "Gila monster";
questions[21].choices[889] = "Gila woodpecker";
questions[21].choices[890] = "Giraffe";
questions[21].choices[891] = "Glass frog";
questions[21].choices[892] = "Glassy sweeper";
questions[21].choices[893] = "Glaucous-winged gull";
questions[21].choices[894] = "Glaucous gull";
questions[21].choices[895] = "Gnatcatcher";
questions[21].choices[896] = "Gnu";
questions[21].choices[897] = "Go-away bird";
questions[21].choices[898] = "Goat";
questions[21].choices[899] = "Goby";
questions[21].choices[900] = "Goby minnow";
questions[21].choices[901] = "Godman\'s viper";
questions[21].choices[902] = "Goffin\'s cockatoo";
questions[21].choices[903] = "Goldcarp";
questions[21].choices[904] = "Golden-breasted mynah";
questions[21].choices[905] = "Golden-cheeked warbler";
questions[21].choices[906] = "Golden-crowned flying fox";
questions[21].choices[907] = "Golden-edged jewel beetle";
questions[21].choices[908] = "Golden-fronted woodpecker";
questions[21].choices[909] = "Golden eagle";
questions[21].choices[910] = "Golden jackal";
questions[21].choices[911] = "Golden lion tamarin";
questions[21].choices[912] = "Golden mole";
questions[21].choices[913] = "Golden orb spider";
questions[21].choices[914] = "Golden pheasant";
questions[21].choices[915] = "Golden snub-nosed monkey";
questions[21].choices[916] = "Golden toad";
questions[21].choices[917] = "Goldfinch";
questions[21].choices[918] = "Goldfish";
questions[21].choices[919] = "Goldie\'s lorikeet";
questions[21].choices[920] = "Goliath beetle";
questions[21].choices[921] = "Goliath heron";
questions[21].choices[922] = "Gomeran giant lizard";
questions[21].choices[923] = "Goose";
questions[21].choices[924] = "Goose barnacle";
questions[21].choices[925] = "Gopher";
questions[21].choices[926] = "Gopher tortoise";
questions[21].choices[927] = "Goral";
questions[21].choices[928] = "Gorgonian";
questions[21].choices[929] = "Gorilla";
questions[21].choices[930] = "Goshawk";
questions[21].choices[931] = "Gould\'s monitor";
questions[21].choices[932] = "Gouldian finch";
questions[21].choices[933] = "Graceful catshark";
questions[21].choices[934] = "Grackle";
questions[21].choices[935] = "Grand Cayman rock iguana";
questions[21].choices[936] = "Grant\'s gazelle";
questions[21].choices[937] = "Grant\'s zebra";
questions[21].choices[938] = "Grass snake";
questions[21].choices[939] = "Grassfinch";
questions[21].choices[940] = "Grasshopper";
questions[21].choices[941] = "Gray-backed myna";
questions[21].choices[942] = "Gray-banded kingsnake";
questions[21].choices[943] = "Gray-headed albatross";
questions[21].choices[944] = "Gray-headed kingfisher";
questions[21].choices[945] = "Gray-headed kite";
questions[21].choices[946] = "Gray falcon";
questions[21].choices[947] = "Gray fox";
questions[21].choices[948] = "Gray go-away bird";
questions[21].choices[949] = "Gray hawk";
questions[21].choices[950] = "Gray heron";
questions[21].choices[951] = "Gray jay";
questions[21].choices[952] = "Gray parrot";
questions[21].choices[953] = "Gray partridge";
questions[21].choices[954] = "Gray reef shark";
questions[21].choices[955] = "Gray seal";
questions[21].choices[956] = "Gray squirrel";
questions[21].choices[957] = "Gray starling";
questions[21].choices[958] = "Gray treefrog";
questions[21].choices[959] = "Gray whale";
questions[21].choices[960] = "Gray wolf";
questions[21].choices[961] = "Grayling";
questions[21].choices[962] = "Great-tailed grackle";
questions[21].choices[963] = "Great blue heron";
questions[21].choices[964] = "Great crested grebe";
questions[21].choices[965] = "Great Dane";
questions[21].choices[966] = "Great gray owl";
questions[21].choices[967] = "Great horned owl";
questions[21].choices[968] = "Great kiskadee";
questions[21].choices[969] = "Great knot";
questions[21].choices[970] = "Great Plains toad";
questions[21].choices[971] = "Great reed warbler";
questions[21].choices[972] = "Great slug";
questions[21].choices[973] = "Great tit";
questions[21].choices[974] = "Great white shark";
questions[21].choices[975] = "Greater bilby";
questions[21].choices[976] = "Greater dormouse";
questions[21].choices[977] = "Greater glider";
questions[21].choices[978] = "Greater kudu";
questions[21].choices[979] = "Greater long-eared bat";
questions[21].choices[980] = "Greater pied kingfisher";
questions[21].choices[981] = "Greater prairie chicken";
questions[21].choices[982] = "Greater scaup";
questions[21].choices[983] = "Greater tenrec";
questions[21].choices[984] = "Grebe";
questions[21].choices[985] = "Green-backed heron";
questions[21].choices[986] = "Green-cheeked conure";
questions[21].choices[987] = "Green-winged macaw";
questions[21].choices[988] = "Green-winged pytilia";
questions[21].choices[989] = "Green anaconda";
questions[21].choices[990] = "Green anole";
questions[21].choices[991] = "Green aracari";
questions[21].choices[992] = "Green billbug";
questions[21].choices[993] = "Green frog";
questions[21].choices[994] = "Green hermit hummingbird";
questions[21].choices[995] = "Green heron";
questions[21].choices[996] = "Green iguana";
questions[21].choices[997] = "Green jay";
questions[21].choices[998] = "Green lizard";
questions[21].choices[999] = "Green lynx spider";
questions[21].choices[1000] = "Green parrot";
questions[21].choices[1001] = "Green pygmy goose";
questions[21].choices[1002] = "Green sandpiper";
questions[21].choices[1003] = "Green sea turtle";
questions[21].choices[1004] = "Green toad";
questions[21].choices[1005] = "Green tree frog";
questions[21].choices[1006] = "Green tree python";
questions[21].choices[1007] = "Green tree skink";
questions[21].choices[1008] = "Green woodhoopoe";
questions[21].choices[1009] = "Green woodpecker";
questions[21].choices[1010] = "Greenwing teal";
questions[21].choices[1011] = "Grevy\'s zebra";
questions[21].choices[1012] = "Greyhound";
questions[21].choices[1013] = "Griffon vulture";
questions[21].choices[1014] = "Grison";
questions[21].choices[1015] = "Grizzly bear";
questions[21].choices[1016] = "Grosbeak";
questions[21].choices[1017] = "Grosbeak weaver";
questions[21].choices[1018] = "Ground dove";
questions[21].choices[1019] = "Ground parrot";
questions[21].choices[1020] = "Grouper";
questions[21].choices[1021] = "Grouse";
questions[21].choices[1022] = "Guadalupe fur seal";
questions[21].choices[1023] = "Guanaco";
questions[21].choices[1024] = "Guenon";
questions[21].choices[1025] = "Guineafowl";
questions[21].choices[1026] = "Gull-billed tern";
questions[21].choices[1027] = "Gull";
questions[21].choices[1028] = "Gulper eel";
questions[21].choices[1029] = "Gundi";
questions[21].choices[1030] = "Guppy";
questions[21].choices[1031] = "Gyrfalcon";
questions[21].choices[1032] = "Habrobracon hebetor";
questions[21].choices[1033] = "Hairstreak butterfly";
questions[21].choices[1034] = "Hairy-nosed wombat";
questions[21].choices[1035] = "Hairy-tailed mole";
questions[21].choices[1036] = "Hairy woodpecker";
questions[21].choices[1037] = "Haitian boa";
questions[21].choices[1038] = "Halibut";
questions[21].choices[1039] = "Hamadryas baboon";
questions[21].choices[1040] = "Hammerhead shark";
questions[21].choices[1041] = "Hammerkop";
questions[21].choices[1042] = "Hamster";
questions[21].choices[1043] = "Hanuman langur";
questions[21].choices[1044] = "Harbor seal";
questions[21].choices[1045] = "Hard coral";
questions[21].choices[1046] = "Hare";
questions[21].choices[1047] = "Harlequin bug";
questions[21].choices[1048] = "Harlequin duck";
questions[21].choices[1049] = "Harlequin poison frog";
questions[21].choices[1050] = "Harlequin shrimp";
questions[21].choices[1051] = "Harp seal";
questions[21].choices[1052] = "Harpy eagle";
questions[21].choices[1053] = "Harris hawk";
questions[21].choices[1054] = "Hartebeest";
questions[21].choices[1055] = "Harvest mouse";
questions[21].choices[1056] = "Hawaiian goose";
questions[21].choices[1057] = "Hawaiian hawk";
questions[21].choices[1058] = "Hawfinch";
questions[21].choices[1059] = "Hawksbill turtle";
questions[21].choices[1060] = "Hazel grouse";
questions[21].choices[1061] = "Head";
questions[21].choices[1062] = "Hedgehog";
questions[21].choices[1063] = "Heermann\'s gull";
questions[21].choices[1064] = "Hermit crab";
questions[21].choices[1065] = "Heron";
questions[21].choices[1066] = "Herring gull";
questions[21].choices[1067] = "High-hat";
questions[21].choices[1068] = "Hill mynah";
questions[21].choices[1069] = "Himalayan cat";
questions[21].choices[1070] = "Himalayan tahr";
questions[21].choices[1071] = "Hippopotamus";
questions[21].choices[1072] = "Hoary bat";
questions[21].choices[1073] = "Hoary marmot";
questions[21].choices[1074] = "Hoatzin";
questions[21].choices[1075] = "Hog deer";
questions[21].choices[1076] = "Hognose snake";
questions[21].choices[1077] = "Hollow-faced bat";
questions[21].choices[1078] = "Honeybee";
questions[21].choices[1079] = "Honeycomb filefish";
questions[21].choices[1080] = "Honeyeater";
questions[21].choices[1081] = "Hooded crane";
questions[21].choices[1082] = "Hooded crow";
questions[21].choices[1083] = "Hooded merganser";
questions[21].choices[1084] = "Hooded seal";
questions[21].choices[1085] = "Hook-billed kite";
questions[21].choices[1086] = "Hoopoe";
questions[21].choices[1087] = "Hornbill";
questions[21].choices[1088] = "Horned adder";
questions[21].choices[1089] = "Horned grebe";
questions[21].choices[1090] = "Horned lark";
questions[21].choices[1091] = "Horned lizard";
questions[21].choices[1092] = "Horned puffin";
questions[21].choices[1093] = "Horse";
questions[21].choices[1094] = "Horse fly";
questions[21].choices[1095] = "Horseshoe crab";
questions[21].choices[1096] = "Horseshoe whipsnake";
questions[21].choices[1097] = "Hose-horned viper";
questions[21].choices[1098] = "House finch";
questions[21].choices[1099] = "House fly";
questions[21].choices[1100] = "House mouse";
questions[21].choices[1101] = "House sparrow";
questions[21].choices[1102] = "House wren";
questions[21].choices[1103] = "Houston toad";
questions[21].choices[1104] = "Hoverfly";
questions[21].choices[1105] = "Howler monkey";
questions[21].choices[1106] = "Hummingbird";
questions[21].choices[1107] = "Humpback whale";
questions[21].choices[1108] = "Husky";
questions[21].choices[1109] = "Hutia";
questions[21].choices[1110] = "Hyacinth macaw";
questions[21].choices[1111] = "Hydra";
questions[21].choices[1112] = "Hyena";
questions[21].choices[1113] = "Hyppolytidae";
questions[21].choices[1114] = "Hyrax";
questions[21].choices[1115] = "Iberian rock lizard";
questions[21].choices[1116] = "Ibex";
questions[21].choices[1117] = "Ibis";
questions[21].choices[1118] = "Iguana";
questions[21].choices[1119] = "Imagine";
questions[21].choices[1120] = "Impala";
questions[21].choices[1121] = "Imperial cleaner shrimp";
questions[21].choices[1122] = "Imperial eagle";
questions[21].choices[1123] = "Inca dove";
questions[21].choices[1124] = "Inca tern";
questions[21].choices[1125] = "Indian bandicoot";
questions[21].choices[1126] = "Indian cobra";
questions[21].choices[1127] = "Indian elk";
questions[21].choices[1128] = "Indian pangolin";
questions[21].choices[1129] = "Indian python";
questions[21].choices[1130] = "Indigo bunting";
questions[21].choices[1131] = "Indri";
questions[21].choices[1132] = "Insect";
questions[21].choices[1133] = "Inshore lizardfish";
questions[21].choices[1134] = "Intermediate egret";
questions[21].choices[1135] = "Iron hairstreak butterfly";
questions[21].choices[1136] = "Island canary";
questions[21].choices[1137] = "Isopod";
questions[21].choices[1138] = "Ivory-billed woodpecker";
questions[21].choices[1139] = "Jacana";
questions[21].choices[1140] = "Jackal";
questions[21].choices[1141] = "Jackass penguin";
questions[21].choices[1142] = "Jackdaw";
questions[21].choices[1143] = "Jackrabbit";
questions[21].choices[1144] = "Jaguar";
questions[21].choices[1145] = "Jamaican ruddy duck";
questions[21].choices[1146] = "Jamaican woodpecker";
questions[21].choices[1147] = "Japanese flat aphid";
questions[21].choices[1148] = "Japanese grosbeak";
questions[21].choices[1149] = "Japanese John dory";
questions[21].choices[1150] = "Japanese marten";
questions[21].choices[1151] = "Japanese monkey";
questions[21].choices[1152] = "Japanese robin";
questions[21].choices[1153] = "Japanese serow";
questions[21].choices[1154] = "Japanese water scorpion";
questions[21].choices[1155] = "Japanese waxwing";
questions[21].choices[1156] = "Japanese white-eye";
questions[21].choices[1157] = "Java green peacock";
questions[21].choices[1158] = "Javan rhinoceros";
questions[21].choices[1159] = "Javelin sand boa";
questions[21].choices[1160] = "Jay";
questions[21].choices[1161] = "Jellyfish";
questions[21].choices[1162] = "Jenday conure";
questions[21].choices[1163] = "Jerboa";
questions[21].choices[1164] = "Jewel beetle";
questions[21].choices[1165] = "Jindogae";
questions[21].choices[1166] = "Juan Fernandez fur seal";
questions[21].choices[1167] = "Jumping spider";
questions[21].choices[1168] = "Jumping viper";
questions[21].choices[1169] = "Jungle cat";
questions[21].choices[1170] = "Jungle crow";
questions[21].choices[1171] = "Juniper shield bug";
questions[21].choices[1172] = "Kangaroo";
questions[21].choices[1173] = "Katydid";
questions[21].choices[1174] = "Kea parrot";
questions[21].choices[1175] = "Keel-billed toucan";
questions[21].choices[1176] = "Keeshond";
questions[21].choices[1177] = "Kentish plover";
questions[21].choices[1178] = "Kerabau water buffalo";
questions[21].choices[1179] = "Kestrel";
questions[21].choices[1180] = "Killdeer";
questions[21].choices[1181] = "Killer whale";
questions[21].choices[1182] = "King cheetah";
questions[21].choices[1183] = "King eider";
questions[21].choices[1184] = "King parrot";
questions[21].choices[1185] = "King penguin";
questions[21].choices[1186] = "King rail";
questions[21].choices[1187] = "King salmon";
questions[21].choices[1188] = "King vulture";
questions[21].choices[1189] = "Kingfisher";
questions[21].choices[1190] = "Kingsnake";
questions[21].choices[1191] = "Kissing gourami";
questions[21].choices[1192] = "Kit fox";
questions[21].choices[1193] = "Kite";
questions[21].choices[1194] = "Kitten";
questions[21].choices[1195] = "Kiwi";
questions[21].choices[1196] = "Klipspringer";
questions[21].choices[1197] = "Knysna turaco";
questions[21].choices[1198] = "Koala";
questions[21].choices[1199] = "Kodiak bear";
questions[21].choices[1200] = "Komodo dragon";
questions[21].choices[1201] = "Kookaburra";
questions[21].choices[1202] = "Koran angelfish";
questions[21].choices[1203] = "Korea";
questions[21].choices[1204] = "Korean alpine grasshopper";
questions[21].choices[1205] = "Korean aucha perch";
questions[21].choices[1206] = "Korean banded bumblebee";
questions[21].choices[1207] = "Korean black bear";
questions[21].choices[1208] = "Korean bullhead";
questions[21].choices[1209] = "Korean chipmunk";
questions[21].choices[1210] = "Korean cow";
questions[21].choices[1211] = "Korean dark sleeper";
questions[21].choices[1212] = "Korean doty barbel";
questions[21].choices[1213] = "Korean dusky cicada";
questions[21].choices[1214] = "Korean flat bitterling";
questions[21].choices[1215] = "Korean freshwater snail";
questions[21].choices[1216] = "Korean ghost crab";
questions[21].choices[1217] = "Korean grass cicada";
questions[21].choices[1218] = "Korean gray wolf";
questions[21].choices[1219] = "Korean harvestman cicada";
questions[21].choices[1220] = "Korean horse cicada";
questions[21].choices[1221] = "Korean Ladislavia";
questions[21].choices[1222] = "Korean land slug";
questions[21].choices[1223] = "Korean magpie viper";
questions[21].choices[1224] = "Korean Muljara";
questions[21].choices[1225] = "Korean oily bitterling";
questions[21].choices[1226] = "Korean red click beetle";
questions[21].choices[1227] = "Korean red fox";
questions[21].choices[1228] = "Korean rose bitterling";
questions[21].choices[1229] = "Korean round snail";
questions[21].choices[1230] = "Korean slender bitterling";
questions[21].choices[1231] = "Korean spine loach";
questions[21].choices[1232] = "Korean splendid dace";
questions[21].choices[1233] = "Korean spotted sleeper";
questions[21].choices[1234] = "Korean stag beetle";
questions[21].choices[1235] = "Korean tiger";
questions[21].choices[1236] = "Korean water mantis";
questions[21].choices[1237] = "Korean water toad";
questions[21].choices[1238] = "Korean wood mouse";
questions[21].choices[1239] = "Kori bustard";
questions[21].choices[1240] = "Kouprey";
questions[21].choices[1241] = "Kronosaurus";
questions[21].choices[1242] = "Kudu";
questions[21].choices[1243] = "Kumgang minnow";
questions[21].choices[1244] = "Kundzha";
questions[21].choices[1245] = "Labrador retriever";
questions[21].choices[1246] = "Lacewing";
questions[21].choices[1247] = "Ladder-backed woodpecker";
questions[21].choices[1248] = "Lady Amherst pheasant";
questions[21].choices[1249] = "Ladybug";
questions[21].choices[1250] = "Lamb";
questions[21].choices[1251] = "Lammergeier";
questions[21].choices[1252] = "Langur monkey";
questions[21].choices[1253] = "Lanner";
questions[21].choices[1254] = "Lapland longspur";
questions[21].choices[1255] = "Lappet-faced vulture";
questions[21].choices[1256] = "Lapwing";
questions[21].choices[1257] = "Large copper butterfly";
questions[21].choices[1258] = "Large egret";
questions[21].choices[1259] = "Large tree shrew";
questions[21].choices[1260] = "Largemouth bass";
questions[21].choices[1261] = "Lark";
questions[21].choices[1262] = "Laughing gull";
questions[21].choices[1263] = "Laughing kookaburra";
questions[21].choices[1264] = "Lava heron";
questions[21].choices[1265] = "Laysan albatross";
questions[21].choices[1266] = "Lazuli bunting";
questions[21].choices[1267] = "Leaf-cutter ant";
questions[21].choices[1268] = "Leaf-eared mouse";
questions[21].choices[1269] = "Leaf beetle";
questions[21].choices[1270] = "Leaf fish";
questions[21].choices[1271] = "Leaf nosed bat";
questions[21].choices[1272] = "Leafhopper";
questions[21].choices[1273] = "Leafy seadragon";
questions[21].choices[1274] = "Least weasel";
questions[21].choices[1275] = "Leatherback turtle";
questions[21].choices[1276] = "Lemming";
questions[21].choices[1277] = "Lemon shark";
questions[21].choices[1278] = "Lemur";
questions[21].choices[1279] = "Leopard";
questions[21].choices[1280] = "Leopard frog";
questions[21].choices[1281] = "Leopard gecko";
questions[21].choices[1282] = "Leopard lizard";
questions[21].choices[1283] = "Leopard seal";
questions[21].choices[1284] = "Leopard shark";
questions[21].choices[1285] = "Lesser flamingo";
questions[21].choices[1286] = "Lesser goldfinch";
questions[21].choices[1287] = "Lesser Japanese mole";
questions[21].choices[1288] = "Lesser kestrel";
questions[21].choices[1289] = "Lesser kudu";
questions[21].choices[1290] = "Lesser mouse lemur";
questions[21].choices[1291] = "Lesser prairie chicken";
questions[21].choices[1292] = "Lesser scaup";
questions[21].choices[1293] = "Lesser sheathbill";
questions[21].choices[1294] = "Lesser sooty owl";
questions[21].choices[1295] = "Lesser tree shrew";
questions[21].choices[1296] = "Lesser white-nosed guenon";
questions[21].choices[1297] = "Lettered aracari";
questions[21].choices[1298] = "Liger";
questions[21].choices[1299] = "Lijster";
questions[21].choices[1300] = "Lilac-breasted roller";
questions[21].choices[1301] = "Lilacine Amazon parrot";
questions[21].choices[1302] = "Lion-tailed macaque";
questions[21].choices[1303] = "Lion";
questions[21].choices[1304] = "Lionfish";
questions[21].choices[1305] = "Little bee-eater";
questions[21].choices[1306] = "Little blue heron";
questions[21].choices[1307] = "Little brown bat";
questions[21].choices[1308] = "Little egret";
questions[21].choices[1309] = "Little grebe";
questions[21].choices[1310] = "Little ringed plover";
questions[21].choices[1311] = "Little tern";
questions[21].choices[1312] = "Lizard";
questions[21].choices[1313] = "Lizard minnow";
questions[21].choices[1314] = "Llama";
questions[21].choices[1315] = "Lobster";
questions[21].choices[1316] = "Loggerhead turtle";
questions[21].choices[1317] = "Long-billed curlew";
questions[21].choices[1318] = "Long-eared bat";
questions[21].choices[1319] = "Long-eared owl";
questions[21].choices[1320] = "Long-footed potoroo";
questions[21].choices[1321] = "Long-horned beetle";
questions[21].choices[1322] = "Long-legged octopus";
questions[21].choices[1323] = "Long-legged scarab beetle";
questions[21].choices[1324] = "Long-necked tortoise";
questions[21].choices[1325] = "Long-nosed bandicoot";
questions[21].choices[1326] = "Long-nosed barbel";
questions[21].choices[1327] = "Long-nosed echidna";
questions[21].choices[1328] = "Long-nosed goblin bat";
questions[21].choices[1329] = "Long-nosed potoroo";
questions[21].choices[1330] = "Long-spined porcupinefish";
questions[21].choices[1331] = "Long-tailed jaeger";
questions[21].choices[1332] = "Long-tailed rose finch";
questions[21].choices[1333] = "Long-tailed tit";
questions[21].choices[1334] = "Long-tailed weasel";
questions[21].choices[1335] = "Long-winged katydid";
questions[21].choices[1336] = "Longhorn cow";
questions[21].choices[1337] = "Longnose gar";
questions[21].choices[1338] = "Longspine squirrelfish";
questions[21].choices[1339] = "Loon";
questions[21].choices[1340] = "Loris";
questions[21].choices[1341] = "Lory";
questions[21].choices[1342] = "Lovebird";
questions[21].choices[1343] = "Lucifer hummingbird";
questions[21].choices[1344] = "Lumpsucker";
questions[21].choices[1345] = "Luna moth";
questions[21].choices[1346] = "Lynx";
questions[21].choices[1347] = "Lynx spider";
questions[21].choices[1348] = "Macaque";
questions[21].choices[1349] = "Macaroni penguin";
questions[21].choices[1350] = "Macaw";
questions[21].choices[1351] = "Madagascar ground gecko";
questions[21].choices[1352] = "Madeira goby";
questions[21].choices[1353] = "Madeiran wall lizard";
questions[21].choices[1354] = "Magellan goose";
questions[21].choices[1355] = "Magellanic penguin";
questions[21].choices[1356] = "Malachite kingfisher";
questions[21].choices[1357] = "Malachite sunbird";
questions[21].choices[1358] = "Malayan tapir";
questions[21].choices[1359] = "Mallard";
questions[21].choices[1360] = "Mamba";
questions[21].choices[1361] = "Mammal";
questions[21].choices[1362] = "Mammoth";
questions[21].choices[1363] = "Manatee";
questions[21].choices[1364] = "Manchurian trout";
questions[21].choices[1365] = "Mandarin duck";
questions[21].choices[1366] = "Mandrill";
questions[21].choices[1367] = "Maned wolf";
questions[21].choices[1368] = "Mangrove monitor";
questions[21].choices[1369] = "Manila clam";
questions[21].choices[1370] = "Mannikin";
questions[21].choices[1371] = "Manta";
questions[21].choices[1372] = "Mantis";
questions[21].choices[1373] = "Manx cat";
questions[21].choices[1374] = "Map turtle";
questions[21].choices[1375] = "Marabou stork";
questions[21].choices[1376] = "Marbled cat";
questions[21].choices[1377] = "Marbled grouper";
questions[21].choices[1378] = "Marbled salamander";
questions[21].choices[1379] = "Marbled spider";
questions[21].choices[1380] = "Margay";
questions[21].choices[1381] = "Mariana fruit dove";
questions[21].choices[1382] = "Mariana\'s fruit bat";
questions[21].choices[1383] = "Marlin";
questions[21].choices[1384] = "Marmoset";
questions[21].choices[1385] = "Marmot";
questions[21].choices[1386] = "Marsh harrier";
questions[21].choices[1387] = "Marsh wren";
questions[21].choices[1388] = "Marsupial mole";
questions[21].choices[1389] = "Marten";
questions[21].choices[1390] = "Martial eagle";
questions[21].choices[1391] = "Masked booby";
questions[21].choices[1392] = "Masked palm civet";
questions[21].choices[1393] = "Mastiff bat";
questions[21].choices[1394] = "Masu salmon";
questions[21].choices[1395] = "Mata-mata turtle";
questions[21].choices[1396] = "Matschie\'s tree kangaroo";
questions[21].choices[1397] = "Maximillian turtle";
questions[21].choices[1398] = "Mazarine blue butterfly";
questions[21].choices[1399] = "Meadow bunting";
questions[21].choices[1400] = "Meadow lark";
questions[21].choices[1401] = "Meerkat";
questions[21].choices[1402] = "Merganser";
questions[21].choices[1403] = "Merlin";
questions[21].choices[1404] = "Merrens false viper";
questions[21].choices[1405] = "Mexican gray wolf";
questions[21].choices[1406] = "Mexican python";
questions[21].choices[1407] = "Midwest worm snake";
questions[21].choices[1408] = "Military macaw";
questions[21].choices[1409] = "Milk snake";
questions[21].choices[1410] = "Milkweed beetle";
questions[21].choices[1411] = "Millipede";
questions[21].choices[1412] = "Mink";
questions[21].choices[1413] = "Mirror carp";
questions[21].choices[1414] = "Mississippi kite";
questions[21].choices[1415] = "Mississippi map turtle";
questions[21].choices[1416] = "Mite";
questions[21].choices[1417] = "Mockingbird";
questions[21].choices[1418] = "Mojave rattlesnake";
questions[21].choices[1419] = "Mole";
questions[21].choices[1420] = "Mole salamander";
questions[21].choices[1421] = "Moluccan lory";
questions[21].choices[1422] = "Moluccan yellow monitor";
questions[21].choices[1423] = "Monarch butterfly";
questions[21].choices[1424] = "Mongoose";
questions[21].choices[1425] = "Mongoose lemur";
questions[21].choices[1426] = "Monitor";
questions[21].choices[1427] = "Monkey";
questions[21].choices[1428] = "Moorhen";
questions[21].choices[1429] = "Moorish gecko";
questions[21].choices[1430] = "Moose";
questions[21].choices[1431] = "Moray eel";
questions[21].choices[1432] = "Morelet\'s crocodile";
questions[21].choices[1433] = "Mosquito";
questions[21].choices[1434] = "Moth";
questions[21].choices[1435] = "Motmot";
questions[21].choices[1436] = "Mouflon sheep";
questions[21].choices[1437] = "Mountain bluebird";
questions[21].choices[1438] = "Mountain nyala";
questions[21].choices[1439] = "Mourning dove";
questions[21].choices[1440] = "Mouse";
questions[21].choices[1441] = "Mouse lemur";
questions[21].choices[1442] = "Mouse weasel";
questions[21].choices[1443] = "Mousebird";
questions[21].choices[1444] = "Mud dauber";
questions[21].choices[1445] = "Mud snake";
questions[21].choices[1446] = "Mudskipper";
questions[21].choices[1447] = "Mule";
questions[21].choices[1448] = "Mule deer";
questions[21].choices[1449] = "Mulga parrot";
questions[21].choices[1450] = "Muntjak";
questions[21].choices[1451] = "Musk deer";
questions[21].choices[1452] = "Musk ox";
questions[21].choices[1453] = "Mussel";
questions[21].choices[1454] = "Mute swan";
questions[21].choices[1455] = "Naked mole rat";
questions[21].choices[1456] = "Napoleon fish";
questions[21].choices[1457] = "Narcissus flycatcher";
questions[21].choices[1458] = "Narrow-winged mantis";
questions[21].choices[1459] = "Nassau grouper";
questions[21].choices[1460] = "Nautilus";
questions[21].choices[1461] = "Near East viper";
questions[21].choices[1462] = "Neon goby";
questions[21].choices[1463] = "New Caledonia bumpy gecko";
questions[21].choices[1464] = "New Guinea turtle";
questions[21].choices[1465] = "New Zealand fur seal";
questions[21].choices[1466] = "New Zealand robin";
questions[21].choices[1467] = "New Zealand scaup";
questions[21].choices[1468] = "Newt";
questions[21].choices[1469] = "Nicobar pigeon";
questions[21].choices[1470] = "Night monkey";
questions[21].choices[1471] = "Nile crocodile";
questions[21].choices[1472] = "Nile lechwe antelope";
questions[21].choices[1473] = "Nile monitor";
questions[21].choices[1474] = "Nilgai antelope";
questions[21].choices[1475] = "Nine-banded armadillo";
questions[21].choices[1476] = "North American porcupine";
questions[21].choices[1477] = "Northern dwarf tree frog";
questions[21].choices[1478] = "Northern elephant seal";
questions[21].choices[1479] = "Northern fur seal";
questions[21].choices[1480] = "Northern gannet";
questions[21].choices[1481] = "Northern harrier";
questions[21].choices[1482] = "Northern ringneck snake";
questions[21].choices[1483] = "Northern sea lion";
questions[21].choices[1484] = "Northern shrike";
questions[21].choices[1485] = "Northern slimy salamander";
questions[21].choices[1486] = "Northern snakehead";
questions[21].choices[1487] = "Northern snapping turtle";
questions[21].choices[1488] = "Northwestern garter snake";
questions[21].choices[1489] = "Norway rat";
questions[21].choices[1490] = "Nudibranch";
questions[21].choices[1491] = "Numbat";
questions[21].choices[1492] = "Nurse shark";
questions[21].choices[1493] = "Nutcracker";
questions[21].choices[1494] = "Nuthatch";
questions[21].choices[1495] = "Nutria";
questions[21].choices[1496] = "Nyala";
questions[21].choices[1497] = "Oceanic gecko";
questions[21].choices[1498] = "Ocelot";
questions[21].choices[1499] = "Octopus";
questions[21].choices[1500] = "Okapi";
questions[21].choices[1501] = "Old English sheepdog";
questions[21].choices[1502] = "Oldsquaw";
questions[21].choices[1503] = "Oldwife";
questions[21].choices[1504] = "Olive ridley turtle";
questions[21].choices[1505] = "Olympic salamander";
questions[21].choices[1506] = "Opossum";
questions[21].choices[1507] = "Orange-bellied parrot";
questions[21].choices[1508] = "Orange-cheeked waxbill";
questions[21].choices[1509] = "Orange-winged Amazon";
questions[21].choices[1510] = "Orangutan";
questions[21].choices[1511] = "Oribi";
questions[21].choices[1512] = "Oriental dragon";
questions[21].choices[1513] = "Oriental turtle dove";
questions[21].choices[1514] = "Oriental white stork";
questions[21].choices[1515] = "Oriole";
questions[21].choices[1516] = "Oryx";
questions[21].choices[1517] = "Oscar";
questions[21].choices[1518] = "Osprey";
questions[21].choices[1519] = "Ostrich";
questions[21].choices[1520] = "Otter";
questions[21].choices[1521] = "Ovenbird";
questions[21].choices[1522] = "Oviraptor";
questions[21].choices[1523] = "Owl";
questions[21].choices[1524] = "Oxpecker";
questions[21].choices[1525] = "Oyster";
questions[21].choices[1526] = "Oyster catcher";
questions[21].choices[1527] = "Pac-man frog";
questions[21].choices[1528] = "Paca agouti";
questions[21].choices[1529] = "Pacific giant salamander";
questions[21].choices[1530] = "Pacific loon";
questions[21].choices[1531] = "Pacific sailfish";
questions[21].choices[1532] = "Pademelon";
questions[21].choices[1533] = "Painted bunting";
questions[21].choices[1534] = "Painted frogfish";
questions[21].choices[1535] = "Painted lady butterfly";
questions[21].choices[1536] = "Painted turtle";
questions[21].choices[1537] = "Pale-breasted thrush";
questions[21].choices[1538] = "Pale-footed shearwater";
questions[21].choices[1539] = "Pale chub";
questions[21].choices[1540] = "Pale thrush";
questions[21].choices[1541] = "Pallas rosy finch";
questions[21].choices[1542] = "Pallas Cat";
questions[21].choices[1543] = "Pallas\'s sandgrouse";
questions[21].choices[1544] = "Palm cockatoo";
questions[21].choices[1545] = "Paludum water strider";
questions[21].choices[1546] = "Pampas cat";
questions[21].choices[1547] = "Pampas deer";
questions[21].choices[1548] = "Pangolin";
questions[21].choices[1549] = "Panther";
questions[21].choices[1550] = "Paper wasp";
questions[21].choices[1551] = "Parasitic jaeger";
questions[21].choices[1552] = "Parker\'s turtle";
questions[21].choices[1553] = "Parrot";
questions[21].choices[1554] = "Parrotfish";
questions[21].choices[1555] = "Partridge";
questions[21].choices[1556] = "Parula warbler";
questions[21].choices[1557] = "Patas monkey";
questions[21].choices[1558] = "Peach-faced lovebird";
questions[21].choices[1559] = "Peacock";
questions[21].choices[1560] = "Peacock butterfly";
questions[21].choices[1561] = "Pearl cichlid";
questions[21].choices[1562] = "Pearl kite";
questions[21].choices[1563] = "Peccary";
questions[21].choices[1564] = "Pederson cleaner shrimp";
questions[21].choices[1565] = "Pegasus";
questions[21].choices[1566] = "Pekinese";
questions[21].choices[1567] = "Pelican";
questions[21].choices[1568] = "Penguin";
questions[21].choices[1569] = "Peregrine falcon";
questions[21].choices[1570] = "Periwinkle";
questions[21].choices[1571] = "Perppermint shrimp";
questions[21].choices[1572] = "Persian cat";
questions[21].choices[1573] = "Phascogale";
questions[21].choices[1574] = "Pheasant";
questions[21].choices[1575] = "Philippine crocodile";
questions[21].choices[1576] = "Pied-billed grebe";
questions[21].choices[1577] = "Pied avocet";
questions[21].choices[1578] = "Pied flycatcher";
questions[21].choices[1579] = "Pied kingfisher";
questions[21].choices[1580] = "Pig-nosed turtle";
questions[21].choices[1581] = "Pig";
questions[21].choices[1582] = "Pigeon";
questions[21].choices[1583] = "Piglet";
questions[21].choices[1584] = "Pika";
questions[21].choices[1585] = "Pike";
questions[21].choices[1586] = "Pileated woodpecker";
questions[21].choices[1587] = "Pilot whale";
questions[21].choices[1588] = "Pin-tailed sandgrouse";
questions[21].choices[1589] = "Pin-tailed whydah";
questions[21].choices[1590] = "Pine Barrens treefrog";
questions[21].choices[1591] = "Pine grosbeak";
questions[21].choices[1592] = "Pine marten";
questions[21].choices[1593] = "Pine needle gall midge";
questions[21].choices[1594] = "Pine Woods treefrog";
questions[21].choices[1595] = "Pink cockatoo";
questions[21].choices[1596] = "Pintail";
questions[21].choices[1597] = "Pipefish";
questions[21].choices[1598] = "Piranha";
questions[21].choices[1599] = "Pit bull terrier";
questions[21].choices[1600] = "Pitta";
questions[21].choices[1601] = "Planaria";
questions[21].choices[1602] = "Plantain squirrel";
questions[21].choices[1603] = "Platypus";
questions[21].choices[1604] = "Plesiosaur";
questions[21].choices[1605] = "Plover";
questions[21].choices[1606] = "Plovercrest hummingbird";
questions[21].choices[1607] = "Plumbeous kite";
questions[21].choices[1608] = "Pochard";
questions[21].choices[1609] = "Pocket gopher";
questions[21].choices[1610] = "Poison frog";
questions[21].choices[1611] = "Poison spider";
questions[21].choices[1612] = "Polar bear";
questions[21].choices[1613] = "Pomeranian";
questions[21].choices[1614] = "Pony";
questions[21].choices[1615] = "Poodle";
questions[21].choices[1616] = "Poongsan dog";
questions[21].choices[1617] = "Poplar admiral butterfly";
questions[21].choices[1618] = "Porcupine";
questions[21].choices[1619] = "Porkfish";
questions[21].choices[1620] = "Portuguese man-of-war";
questions[21].choices[1621] = "Potato grouper";
questions[21].choices[1622] = "Potoroo";
questions[21].choices[1623] = "Powder blue tang";
questions[21].choices[1624] = "Prairie chicken";
questions[21].choices[1625] = "Prairie dog";
questions[21].choices[1626] = "Prairie falcon";
questions[21].choices[1627] = "Prairie kingsnake";
questions[21].choices[1628] = "Prairie ringneck snake";
questions[21].choices[1629] = "Prawn";
questions[21].choices[1630] = "Prion";
questions[21].choices[1631] = "Proboscis monkey";
questions[21].choices[1632] = "Promethea moth";
questions[21].choices[1633] = "Pronghorn";
questions[21].choices[1634] = "Prothonotary warbler";
questions[21].choices[1635] = "Provence burnet moth";
questions[21].choices[1636] = "Przewalski\'s wild horse";
questions[21].choices[1637] = "Ptarmigan";
questions[21].choices[1638] = "Puan spine loach";
questions[21].choices[1639] = "Pudu";
questions[21].choices[1640] = "Puerto Rican Amazon";
questions[21].choices[1641] = "Puff adder";
questions[21].choices[1642] = "Puffin";
questions[21].choices[1643] = "Pug";
questions[21].choices[1644] = "Puppy";
questions[21].choices[1645] = "Purple-capped lory";
questions[21].choices[1646] = "Purple finch";
questions[21].choices[1647] = "Purple gallinule";
questions[21].choices[1648] = "Purple martin";
questions[21].choices[1649] = "Purple nudibranch";
questions[21].choices[1650] = "Pygmy goose";
questions[21].choices[1651] = "Pygmy hippopotamus";
questions[21].choices[1652] = "Pygmy owl";
questions[21].choices[1653] = "Pygmy rattlesnake";
questions[21].choices[1654] = "Python";
questions[21].choices[1655] = "Quagga";
questions[21].choices[1656] = "Quaker parrot";
questions[21].choices[1657] = "Queen angelfish";
questions[21].choices[1658] = "Queen ant";
questions[21].choices[1659] = "Queen butterfly";
questions[21].choices[1660] = "Queen conch";
questions[21].choices[1661] = "Queen triggerfish";
questions[21].choices[1662] = "Quetzal";
questions[21].choices[1663] = "Quillback rockfish";
questions[21].choices[1664] = "Quokka";
questions[21].choices[1665] = "Quoll";
questions[21].choices[1666] = "Rabbit";
questions[21].choices[1667] = "Raccoon";
questions[21].choices[1668] = "Raccoon dog";
questions[21].choices[1669] = "Racket-tailed roller";
questions[21].choices[1670] = "Rafinesques big-eared bat";
questions[21].choices[1671] = "Rail";
questions[21].choices[1672] = "Rainbow bee-eater";
questions[21].choices[1673] = "Rainbow boa";
questions[21].choices[1674] = "Rainbow lorikeet";
questions[21].choices[1675] = "Rainbow trout";
questions[21].choices[1676] = "Ratel";
questions[21].choices[1677] = "Ratsnake";
questions[21].choices[1678] = "Rattle snake";
questions[21].choices[1679] = "Raven";
questions[21].choices[1680] = "Razorbill";
questions[21].choices[1681] = "Red-backed salamander";
questions[21].choices[1682] = "Red-backed spider";
questions[21].choices[1683] = "Red-backed vole";
questions[21].choices[1684] = "Red-banded prawn-goby";
questions[21].choices[1685] = "Red-bellied black snake";
questions[21].choices[1686] = "Red-bellied lemur";
questions[21].choices[1687] = "Red-bellied woodpecker";
questions[21].choices[1688] = "Red-billed pintail";
questions[21].choices[1689] = "Red-breasted merganser";
questions[21].choices[1690] = "Red-breasted sapsucker";
questions[21].choices[1691] = "Red-cheeked myna";
questions[21].choices[1692] = "Red-cockaded woodpecker";
questions[21].choices[1693] = "Red-crested pochard";
questions[21].choices[1694] = "Red-crowned crane";
questions[21].choices[1695] = "Red-eared turtle";
questions[21].choices[1696] = "Red-eyed bulbul";
questions[21].choices[1697] = "Red-eyed tree frog";
questions[21].choices[1698] = "Red-footed booby";
questions[21].choices[1699] = "Red-fronted parakeet";
questions[21].choices[1700] = "Red-headed poison frog";
questions[21].choices[1701] = "Red-headed ratsnake";
questions[21].choices[1702] = "Red-headed woodpecker";
questions[21].choices[1703] = "Red-lored Amazon parrot";
questions[21].choices[1704] = "Red-necked grebe";
questions[21].choices[1705] = "Red-necked pademelon";
questions[21].choices[1706] = "Red-necked stint";
questions[21].choices[1707] = "Red-rumped swallow";
questions[21].choices[1708] = "Red-shouldered hawk";
questions[21].choices[1709] = "Red-sided garter snake";
questions[21].choices[1710] = "Red-tailed black cockatoo";
questions[21].choices[1711] = "Red-tailed boa";
questions[21].choices[1712] = "Red-tailed Catfish";
questions[21].choices[1713] = "Red-tailed hawk";
questions[21].choices[1714] = "Red-tailed tropicbird";
questions[21].choices[1715] = "Red-throated caracara";
questions[21].choices[1716] = "Red-throated loon";
questions[21].choices[1717] = "Red admiral butterfly";
questions[21].choices[1718] = "Red coral";
questions[21].choices[1719] = "Red forest rat";
questions[21].choices[1720] = "Red fox";
questions[21].choices[1721] = "Red goshawk";
questions[21].choices[1722] = "Red hind grouper";
questions[21].choices[1723] = "Red howler monkey";
questions[21].choices[1724] = "Red knee tarantula";
questions[21].choices[1725] = "Red milkweed beetle";
questions[21].choices[1726] = "Red panda";
questions[21].choices[1727] = "Red pygmy rattlesnake";
questions[21].choices[1728] = "Red ruffed lemur";
questions[21].choices[1729] = "Red squirrel";
questions[21].choices[1730] = "Red thorax leaf bug";
questions[21].choices[1731] = "Red wolf";
questions[21].choices[1732] = "Reddish egret";
questions[21].choices[1733] = "Redhead duck";
questions[21].choices[1734] = "Redshank";
questions[21].choices[1735] = "Redstart";
questions[21].choices[1736] = "Redtail surfperch";
questions[21].choices[1737] = "Reedbuck";
questions[21].choices[1738] = "Reeffish";
questions[21].choices[1739] = "Reptile";
questions[21].choices[1740] = "Reticulated giraffe";
questions[21].choices[1741] = "Reticulated python";
questions[21].choices[1742] = "Retriever";
questions[21].choices[1743] = "Rex";
questions[21].choices[1744] = "Rhino";
questions[21].choices[1745] = "Rhinoceros hornbill";
questions[21].choices[1746] = "Rhinoceros iguana";
questions[21].choices[1747] = "Rhodesian Ridgeback";
questions[21].choices[1748] = "Ribbon snake";
questions[21].choices[1749] = "Ridley turtle";
questions[21].choices[1750] = "Right whale";
questions[21].choices[1751] = "Ring-billed gull";
questions[21].choices[1752] = "Ring-necked dove";
questions[21].choices[1753] = "Ring-necked duck";
questions[21].choices[1754] = "Ring-necked pheasant";
questions[21].choices[1755] = "Ring-tailed lemur";
questions[21].choices[1756] = "Ringed kingfisher";
questions[21].choices[1757] = "Ringed plover";
questions[21].choices[1758] = "Ringed salamander";
questions[21].choices[1759] = "Ringed seal";
questions[21].choices[1760] = "Ringed tang fish";
questions[21].choices[1761] = "Ringneck snake";
questions[21].choices[1762] = "Ringtail cat";
questions[21].choices[1763] = "River cooter";
questions[21].choices[1764] = "River otter";
questions[21].choices[1765] = "River turtle";
questions[21].choices[1766] = "Roadrunner";
questions[21].choices[1767] = "Roadside hawk";
questions[21].choices[1768] = "Roan antelope";
questions[21].choices[1769] = "Robber fly";
questions[21].choices[1770] = "Robin";
questions[21].choices[1771] = "Rock beauty angelfish";
questions[21].choices[1772] = "Rock dove";
questions[21].choices[1773] = "Rock hopper penguin";
questions[21].choices[1774] = "Rock hyrax";
questions[21].choices[1775] = "Rock iguana";
questions[21].choices[1776] = "Rock ptarmigan";
questions[21].choices[1777] = "Rockfish";
questions[21].choices[1778] = "Rocky mountain goat";
questions[21].choices[1779] = "Roe deer";
questions[21].choices[1780] = "Roller";
questions[21].choices[1781] = "Romper";
questions[21].choices[1782] = "Rook";
questions[21].choices[1783] = "Rooster";
questions[21].choices[1784] = "Rose-breasted goose";
questions[21].choices[1785] = "Rose-breasted grosbeak";
questions[21].choices[1786] = "Roseate spoonbill";
questions[21].choices[1787] = "Rosella";
questions[21].choices[1788] = "Rosy-billed pochard";
questions[21].choices[1789] = "Rosy boa";
questions[21].choices[1790] = "Rottweiler";
questions[21].choices[1791] = "Rough-legged hawk";
questions[21].choices[1792] = "Rough green snake";
questions[21].choices[1793] = "Roughskin sculpin";
questions[21].choices[1794] = "Roul-roul partridge";
questions[21].choices[1795] = "Royal gramma";
questions[21].choices[1796] = "Ruby-throated hummingbird";
questions[21].choices[1797] = "Ruddy crake";
questions[21].choices[1798] = "Ruddy ground dove";
questions[21].choices[1799] = "Ruddy kingfisher";
questions[21].choices[1800] = "Ruddy shelduck";
questions[21].choices[1801] = "Ruddy turnstone";
questions[21].choices[1802] = "Ruffed grouse";
questions[21].choices[1803] = "Ruffed lemur";
questions[21].choices[1804] = "Rufous-beaked snake";
questions[21].choices[1805] = "Rufous-fronted fantail";
questions[21].choices[1806] = "Rufous hummingbird";
questions[21].choices[1807] = "Ruppell\'s vulture";
questions[21].choices[1808] = "Russell\'s lionfish";
questions[21].choices[1809] = "Russet sparrow";
questions[21].choices[1810] = "Russian flying squirrel";
questions[21].choices[1811] = "Russian ratsnake";
questions[21].choices[1812] = "Rusty-spotted cat";
questions[21].choices[1813] = "Saber-toothed tiger";
questions[21].choices[1814] = "Sable antelope";
questions[21].choices[1815] = "Sable marten";
questions[21].choices[1816] = "Sacred ibis";
questions[21].choices[1817] = "Saffron toucanet";
questions[21].choices[1818] = "Saiga";
questions[21].choices[1819] = "Sailfish";
questions[21].choices[1820] = "Saint Bernard";
questions[21].choices[1821] = "Salamander";
questions[21].choices[1822] = "Sally lightfoot crab";
questions[21].choices[1823] = "Salmon-crested cockatoo";
questions[21].choices[1824] = "Salmon";
questions[21].choices[1825] = "Saltwater crocodile";
questions[21].choices[1826] = "Sambar";
questions[21].choices[1827] = "Samoyed";
questions[21].choices[1828] = "Sand cat";
questions[21].choices[1829] = "Sand dollar";
questions[21].choices[1830] = "Sandgrouse";
questions[21].choices[1831] = "Sandhill crane";
questions[21].choices[1832] = "Sapsari";
questions[21].choices[1833] = "Sapsucker";
questions[21].choices[1834] = "Satin bowerbird";
questions[21].choices[1835] = "Saunder\'s gull";
questions[21].choices[1836] = "Savannah monitor";
questions[21].choices[1837] = "Saw-whet owl";
questions[21].choices[1838] = "Scallop";
questions[21].choices[1839] = "Scarce heath butterfly";
questions[21].choices[1840] = "Scarlet cleaner shrimp";
questions[21].choices[1841] = "Scarlet ibis";
questions[21].choices[1842] = "Scarlet kingsnake";
questions[21].choices[1843] = "Scarlet macaw";
questions[21].choices[1844] = "Scarlet tanager";
questions[21].choices[1845] = "Schipperke";
questions[21].choices[1846] = "Schnieder\'s dwarf caiman";
questions[21].choices[1847] = "Scimitar-horned oryx";
questions[21].choices[1848] = "Scintillant hummingbird";
questions[21].choices[1849] = "Scipionyx samniticus";
questions[21].choices[1850] = "Scooter";
questions[21].choices[1851] = "Scops owl";
questions[21].choices[1852] = "Scorpion";
questions[21].choices[1853] = "Scottish wild cat";
questions[21].choices[1854] = "Scrawled filefish";
questions[21].choices[1855] = "Screech owl";
questions[21].choices[1856] = "Scrub jay";
questions[21].choices[1857] = "Sea anemone";
questions[21].choices[1858] = "Sea bream";
questions[21].choices[1859] = "Sea cucumber";
questions[21].choices[1860] = "Sea fan";
questions[21].choices[1861] = "Sea horse";
questions[21].choices[1862] = "Sea lion";
questions[21].choices[1863] = "Sea otter";
questions[21].choices[1864] = "Sea pen";
questions[21].choices[1865] = "Sea scorpion";
questions[21].choices[1866] = "Sea snake";
questions[21].choices[1867] = "Sea turtle";
questions[21].choices[1868] = "Sea urchin";
questions[21].choices[1869] = "Sea whip";
questions[21].choices[1870] = "Seal";
questions[21].choices[1871] = "Sebastopol goose";
questions[21].choices[1872] = "Semicircle angelfish";
questions[21].choices[1873] = "Seminole bat";
questions[21].choices[1874] = "Senegal dove";
questions[21].choices[1875] = "Sergeant Major";
questions[21].choices[1876] = "Serval";
questions[21].choices[1877] = "Seven-spotted ladybug";
questions[21].choices[1878] = "Shark";
questions[21].choices[1879] = "Sharp-shinned hawk";
questions[21].choices[1880] = "Shaw\'s cowfish";
questions[21].choices[1881] = "Shearwater";
questions[21].choices[1882] = "Sheep";
questions[21].choices[1883] = "Shell";
questions[21].choices[1884] = "Shepherd";
questions[21].choices[1885] = "Shetland sheepdog";
questions[21].choices[1886] = "Shield bug";
questions[21].choices[1887] = "Shoebill stork";
questions[21].choices[1888] = "Short-eared owl";
questions[21].choices[1889] = "Short-nosed echidna";
questions[21].choices[1890] = "Short-tailed albatross";
questions[21].choices[1891] = "Short-tailed hawk";
questions[21].choices[1892] = "Short-tailed shrew";
questions[21].choices[1893] = "Short horned grasshopper";
questions[21].choices[1894] = "Shortraker rockfish";
questions[21].choices[1895] = "Shoveler";
questions[21].choices[1896] = "Shrew";
questions[21].choices[1897] = "Shrimp";
questions[21].choices[1898] = "Shy albatross";
questions[21].choices[1899] = "Siamang";
questions[21].choices[1900] = "Siamese cat";
questions[21].choices[1901] = "Siberian chipmunk";
questions[21].choices[1902] = "Siberian jay";
questions[21].choices[1903] = "Siberian rubythroat";
questions[21].choices[1904] = "Siberian tiger";
questions[21].choices[1905] = "Siberian weasel";
questions[21].choices[1906] = "Siberian white crane";
questions[21].choices[1907] = "Sidewinder";
questions[21].choices[1908] = "Sifaka";
questions[21].choices[1909] = "Sika deer";
questions[21].choices[1910] = "Silkworm";
questions[21].choices[1911] = "Silver-haired bat";
questions[21].choices[1912] = "Silver pheasant";
questions[21].choices[1913] = "Silver salmon";
questions[21].choices[1914] = "Silvertip shark";
questions[21].choices[1915] = "Sinosauropteryx";
questions[21].choices[1916] = "Siskin";
questions[21].choices[1917] = "Sitatunga";
questions[21].choices[1918] = "Sixspot goby";
questions[21].choices[1919] = "Skink";
questions[21].choices[1920] = "Skunk";
questions[21].choices[1921] = "Skylark";
questions[21].choices[1922] = "Slaty-backed gull";
questions[21].choices[1923] = "Slender-billed kite";
questions[21].choices[1924] = "Slender-billed shearwater";
questions[21].choices[1925] = "Slender-snouted crocodile";
questions[21].choices[1926] = "Slender salamander";
questions[21].choices[1927] = "Sloth";
questions[21].choices[1928] = "Sloth bear";
questions[21].choices[1929] = "Slow loris";
questions[21].choices[1930] = "Slug";
questions[21].choices[1931] = "Small king dragonfly";
questions[21].choices[1932] = "Smallmouth grunt";
questions[21].choices[1933] = "Smew";
questions[21].choices[1934] = "Smooth-billed ani";
questions[21].choices[1935] = "Smooth frogfish";
questions[21].choices[1936] = "Smooth trunkfish";
questions[21].choices[1937] = "Snail";
questions[21].choices[1938] = "Snail kite";
questions[21].choices[1939] = "Snake";
questions[21].choices[1940] = "Snapper";
questions[21].choices[1941] = "Snapping turtle";
questions[21].choices[1942] = "Snow bunting";
questions[21].choices[1943] = "Snow goose";
questions[21].choices[1944] = "Snow leopard";
questions[21].choices[1945] = "Snow petrel";
questions[21].choices[1946] = "Snowshoe hare";
questions[21].choices[1947] = "Snowy egret";
questions[21].choices[1948] = "Snowy owl";
questions[21].choices[1949] = "Snowy sheathbill";
questions[21].choices[1950] = "Softshell turtle";
questions[21].choices[1951] = "Sonora mountain kingsnake";
questions[21].choices[1952] = "Sonoran gopher snake";
questions[21].choices[1953] = "Sooty copper butterfly";
questions[21].choices[1954] = "Sooty tern";
questions[21].choices[1955] = "South African fur seal";
questions[21].choices[1956] = "South American fur seal";
questions[21].choices[1957] = "South American tapir";
questions[21].choices[1958] = "Southern bald ibis";
questions[21].choices[1959] = "Southern green stink bug";
questions[21].choices[1960] = "Southern leopard frog";
questions[21].choices[1961] = "Southern ringneck snake";
questions[21].choices[1962] = "Southern sea lion";
questions[21].choices[1963] = "Sow";
questions[21].choices[1964] = "Spadefoot toad";
questions[21].choices[1965] = "Spangled drongo";
questions[21].choices[1966] = "Spaniel";
questions[21].choices[1967] = "Spanish hogfish";
questions[21].choices[1968] = "Spanish lynx";
questions[21].choices[1969] = "Sparrow";
questions[21].choices[1970] = "Sparrowhawk";
questions[21].choices[1971] = "Speckled kingsnake";
questions[21].choices[1972] = "Speckled mousebird";
questions[21].choices[1973] = "Spectacled bear";
questions[21].choices[1974] = "Spectacled caiman";
questions[21].choices[1975] = "Sperm whale";
questions[21].choices[1976] = "Sphinx moth";
questions[21].choices[1977] = "Spider";
questions[21].choices[1978] = "Spider monkey";
questions[21].choices[1979] = "Spiny-tailed monitor";
questions[21].choices[1980] = "Spiny lobster";
questions[21].choices[1981] = "Spiny softshell";
questions[21].choices[1982] = "Spirontocaris shrimp";
questions[21].choices[1983] = "Spitting cobra";
questions[21].choices[1984] = "Spixs Macaw";
questions[21].choices[1985] = "Sponge";
questions[21].choices[1986] = "Spoonbill";
questions[21].choices[1987] = "Spot-billed toucanet";
questions[21].choices[1988] = "Spot-fin porcupinefish";
questions[21].choices[1989] = "Spotbill";
questions[21].choices[1990] = "Spotfin lionfish";
questions[21].choices[1991] = "Spotted bat";
questions[21].choices[1992] = "Spotted cleaner shrimp";
questions[21].choices[1993] = "Spotted cuscus";
questions[21].choices[1994] = "Spotted dolphin";
questions[21].choices[1995] = "Spotted eagle";
questions[21].choices[1996] = "Spotted flycatcher";
questions[21].choices[1997] = "Spotted hyena";
questions[21].choices[1998] = "Spotted owl";
questions[21].choices[1999] = "Spotted salamander";
questions[21].choices[2000] = "Spotted skunk";
questions[21].choices[2001] = "Spotted towhee";
questions[21].choices[2002] = "Spotted trunkfish";
questions[21].choices[2003] = "Spotted turtle";
questions[21].choices[2004] = "Springbok";
questions[21].choices[2005] = "Springhare";
questions[21].choices[2006] = "Spruce grouse";
questions[21].choices[2007] = "Spur thigh tortoise";
questions[21].choices[2008] = "Squacco heron";
questions[21].choices[2009] = "Squid";
questions[21].choices[2010] = "Squirrel";
questions[21].choices[2011] = "Squirrel monkey";
questions[21].choices[2012] = "Squirrel treefrog";
questions[21].choices[2013] = "St Vincent Amazon parrot";
questions[21].choices[2014] = "Stag beetle";
questions[21].choices[2015] = "Staghorn coral";
questions[21].choices[2016] = "Stalk-eyed fly";
questions[21].choices[2017] = "Star-nosed mole";
questions[21].choices[2018] = "Starfish";
questions[21].choices[2019] = "Starling";
questions[21].choices[2020] = "Steel barbel";
questions[21].choices[2021] = "Steely-vented hummingbird";
questions[21].choices[2022] = "Steenbok";
questions[21].choices[2023] = "Stegosaurus";
questions[21].choices[2024] = "Steller jay";
questions[21].choices[2025] = "Steller\'s sea eagle";
questions[21].choices[2026] = "Stick insect";
questions[21].choices[2027] = "Stickleback";
questions[21].choices[2028] = "Stilt";
questions[21].choices[2029] = "Stink bug";
questions[21].choices[2030] = "Stinkpot";
questions[21].choices[2031] = "Stint";
questions[21].choices[2032] = "Stone marten";
questions[21].choices[2033] = "Stonefly";
questions[21].choices[2034] = "Stork";
questions[21].choices[2035] = "Storm petrel";
questions[21].choices[2036] = "Straw-necked ibis";
questions[21].choices[2037] = "Straw raincoat moth";
questions[21].choices[2038] = "Streamertail";
questions[21].choices[2039] = "Striped bass";
questions[21].choices[2040] = "Striped hyena";
questions[21].choices[2041] = "Striped mud turtle";
questions[21].choices[2042] = "Striped parrotfish";
questions[21].choices[2043] = "Striped shinner";
questions[21].choices[2044] = "Striped skunk";
questions[21].choices[2045] = "Sugar glider";
questions[21].choices[2046] = "Sumatran rhinoceros";
questions[21].choices[2047] = "Sumatran tiger";
questions[21].choices[2048] = "Summer tanager";
questions[21].choices[2049] = "Sun bear";
questions[21].choices[2050] = "Sun conure";
questions[21].choices[2051] = "Sunbird";
questions[21].choices[2052] = "Superb lyrebird";
questions[21].choices[2053] = "Superb starling";
questions[21].choices[2054] = "Surf scoter";
questions[21].choices[2055] = "Surfbird";
questions[21].choices[2056] = "Suriname crown heron";
questions[21].choices[2057] = "Swainson\'s hawk";
questions[21].choices[2058] = "Swallow-tailed bee-eater";
questions[21].choices[2059] = "Swallow-tailed kite";
questions[21].choices[2060] = "Swallow";
questions[21].choices[2061] = "Swallowtail butterfly";
questions[21].choices[2062] = "Swamp wallaby";
questions[21].choices[2063] = "Swan";
questions[21].choices[2064] = "Swan goose";
questions[21].choices[2065] = "Sweeper";
questions[21].choices[2066] = "Swinhoe\'s yellow rail";
questions[21].choices[2067] = "Sydney funnel-web spider";
questions[21].choices[2068] = "Tadpole";
questions[21].choices[2069] = "Taipan";
questions[21].choices[2070] = "Takahe";
questions[21].choices[2071] = "Tamandua";
questions[21].choices[2072] = "Tamarin";
questions[21].choices[2073] = "Tanager";
questions[21].choices[2074] = "Tang fish";
questions[21].choices[2075] = "Tapir";
questions[21].choices[2076] = "Tarantula";
questions[21].choices[2077] = "Tarsier";
questions[21].choices[2078] = "Tasmanian devil";
questions[21].choices[2079] = "Tasmanian wolf";
questions[21].choices[2080] = "Tassel-eared squirrel";
questions[21].choices[2081] = "Tawny frogmouth";
questions[21].choices[2082] = "Tawny owl";
questions[21].choices[2083] = "Taylor\'s cantil";
questions[21].choices[2084] = "Tayra";
questions[21].choices[2085] = "Teal";
questions[21].choices[2086] = "Temminck\'s Courser";
questions[21].choices[2087] = "Temmincks golden cat";
questions[21].choices[2088] = "Tenrec";
questions[21].choices[2089] = "Tern";
questions[21].choices[2090] = "Terrapin";
questions[21].choices[2091] = "Terrier";
questions[21].choices[2092] = "Texas coral snake";
questions[21].choices[2093] = "Texas freshwater crayfish";
questions[21].choices[2094] = "Texas tortoise";
questions[21].choices[2095] = "Thomson gazelle";
questions[21].choices[2096] = "Thorny devil";
questions[21].choices[2097] = "Thread-winged lacewing";
questions[21].choices[2098] = "Threadfin butterflyfish";
questions[21].choices[2099] = "Three-banded armadillo";
questions[21].choices[2100] = "Three-spined stickleback";
questions[21].choices[2101] = "Three-toed sloth";
questions[21].choices[2102] = "Thrush";
questions[21].choices[2103] = "Tick";
questions[21].choices[2104] = "Tiger";
questions[21].choices[2105] = "Tiger beetle";
questions[21].choices[2106] = "Tiger oscar";
questions[21].choices[2107] = "Tiger ratsnake";
questions[21].choices[2108] = "Tiger salamander";
questions[21].choices[2109] = "Tiger shark";
questions[21].choices[2110] = "Timber rattlesnake";
questions[21].choices[2111] = "Timor monitor";
questions[21].choices[2112] = "Timor python";
questions[21].choices[2113] = "Toad";
questions[21].choices[2114] = "Toadbug";
questions[21].choices[2115] = "Toco toucan";
questions[21].choices[2116] = "Tody";
questions[21].choices[2117] = "Tomato frog";
questions[21].choices[2118] = "Topmouth gudgeon";
questions[21].choices[2119] = "Tortoise";
questions[21].choices[2120] = "Toucan";
questions[21].choices[2121] = "Toucanet";
questions[21].choices[2122] = "Towhee";
questions[21].choices[2123] = "Tragopan pheasant";
questions[21].choices[2124] = "Trap-door spider";
questions[21].choices[2125] = "Tree creeper";
questions[21].choices[2126] = "Tree duck";
questions[21].choices[2127] = "Tree frog";
questions[21].choices[2128] = "Tree kangaroo";
questions[21].choices[2129] = "Tree shrew";
questions[21].choices[2130] = "Tree sparrow";
questions[21].choices[2131] = "Tree squirrel";
questions[21].choices[2132] = "Triceratops";
questions[21].choices[2133] = "Tricolor flycatcher";
questions[21].choices[2134] = "Tricolor poison dart frog";
questions[21].choices[2135] = "Tricolored heron";
questions[21].choices[2136] = "Triggerfish";
questions[21].choices[2137] = "Trilobite";
questions[21].choices[2138] = "Tripod fish";
questions[21].choices[2139] = "Tropical fish";
questions[21].choices[2140] = "Tropical rattlesnake";
questions[21].choices[2141] = "Trout";
questions[21].choices[2142] = "Trumpeter swan";
questions[21].choices[2143] = "Trumpetfish";
questions[21].choices[2144] = "Tuatara";
questions[21].choices[2145] = "Tube sponge";
questions[21].choices[2146] = "Tucson banded gecko";
questions[21].choices[2147] = "Tufted duck";
questions[21].choices[2148] = "Tufted puffin";
questions[21].choices[2149] = "Tufted titmouse";
questions[21].choices[2150] = "Turaco";
questions[21].choices[2151] = "Turkey";
questions[21].choices[2152] = "Turkey vulture";
questions[21].choices[2153] = "Turkish viper";
questions[21].choices[2154] = "Turquoise-browed motmot";
questions[21].choices[2155] = "Turtle";
questions[21].choices[2156] = "Two headed python";
questions[21].choices[2157] = "Tylosaurus";
questions[21].choices[2158] = "Tyrant flycatcher";
questions[21].choices[2159] = "Uakari";
questions[21].choices[2160] = "Ultramarine lorikeet";
questions[21].choices[2161] = "Unicorn";
questions[21].choices[2162] = "Ural owl";
questions[21].choices[2163] = "Utahraptor";
questions[21].choices[2164] = "Vagator robber fly";
questions[21].choices[2165] = "Vampire bat";
questions[21].choices[2166] = "Vancouver Island marmot";
questions[21].choices[2167] = "Velvet scoter";
questions[21].choices[2168] = "Vermilion rockfish";
questions[21].choices[2169] = "Vervet monkey";
questions[21].choices[2170] = "Vicuna";
questions[21].choices[2171] = "Viper";
questions[21].choices[2172] = "Vireo";
questions[21].choices[2173] = "Viscacha";
questions[21].choices[2174] = "Vole";
questions[21].choices[2175] = "Wallaby";
questions[21].choices[2176] = "Walrus";
questions[21].choices[2177] = "Wandering albatross";
questions[21].choices[2178] = "Warbler";
questions[21].choices[2179] = "Warbling vireo";
questions[21].choices[2180] = "Warthog";
questions[21].choices[2181] = "Wasp";
questions[21].choices[2182] = "Water snake";
questions[21].choices[2183] = "Water vole";
questions[21].choices[2184] = "Waterbuck";
questions[21].choices[2185] = "Waterdragon";
questions[21].choices[2186] = "Waterthrush";
questions[21].choices[2187] = "Watusi cattle";
questions[21].choices[2188] = "Waxwing";
questions[21].choices[2189] = "Weasel";
questions[21].choices[2190] = "Weaver";
questions[21].choices[2191] = "Wedge-tailed eagle";
questions[21].choices[2192] = "Weedy seadragon";
questions[21].choices[2193] = "Wenteltrap";
questions[21].choices[2194] = "Western banded gecko";
questions[21].choices[2195] = "Western bluebird";
questions[21].choices[2196] = "Western box turtle";
questions[21].choices[2197] = "Western gray squirrel";
questions[21].choices[2198] = "Western grebe";
questions[21].choices[2199] = "Western gull";
questions[21].choices[2200] = "Western hognose snake";
questions[21].choices[2201] = "Western rattlesnake";
questions[21].choices[2202] = "Western spadefoot toad";
questions[21].choices[2203] = "Western swamp tortoise";
questions[21].choices[2204] = "Western tanager";
questions[21].choices[2205] = "Whale";
questions[21].choices[2206] = "Whale shark";
questions[21].choices[2207] = "Whimbrel";
questions[21].choices[2208] = "Whip-poor-will";
questions[21].choices[2209] = "Whippet";
questions[21].choices[2210] = "Whipsnake";
questions[21].choices[2211] = "Whiptail lizard";
questions[21].choices[2212] = "Whistling swan";
questions[21].choices[2213] = "White-backed woodpecker";
questions[21].choices[2214] = "White-bellied bustard";
questions[21].choices[2215] = "White-bellied sea eagle";
questions[21].choices[2216] = "White-breasted nuthatch";
questions[21].choices[2217] = "White-cheeked turaco";
questions[21].choices[2218] = "White-crowned sparrow";
questions[21].choices[2219] = "White-eared hummingbird";
questions[21].choices[2220] = "White-faced pied wagtail";
questions[21].choices[2221] = "White-footed mouse";
questions[21].choices[2222] = "White-fronted goose";
questions[21].choices[2223] = "White-headed plover";
questions[21].choices[2224] = "White-headed vulture";
questions[21].choices[2225] = "White-naped crane";
questions[21].choices[2226] = "White-nosed guenon";
questions[21].choices[2227] = "White-nosed loach";
questions[21].choices[2228] = "White-tailed eagle";
questions[21].choices[2229] = "White-tailed hawk";
questions[21].choices[2230] = "White-tailed kite";
questions[21].choices[2231] = "White-tailed ptarmigan";
questions[21].choices[2232] = "White-throated bee-eater";
questions[21].choices[2233] = "White-throated capuchin";
questions[21].choices[2234] = "White-throated sparrow";
questions[21].choices[2235] = "White-winged crossbill";
questions[21].choices[2236] = "White-winged guan";
questions[21].choices[2237] = "White butterfly";
questions[21].choices[2238] = "White eye";
questions[21].choices[2239] = "White goat";
questions[21].choices[2240] = "White horse";
questions[21].choices[2241] = "White lion";
questions[21].choices[2242] = "White rhinoceros";
questions[21].choices[2243] = "White tail deer";
questions[21].choices[2244] = "White tiger";
questions[21].choices[2245] = "White tip reef shark";
questions[21].choices[2246] = "Whooper swan";
questions[21].choices[2247] = "Wigeon";
questions[21].choices[2248] = "Wild cat";
questions[21].choices[2249] = "Wild duck";
questions[21].choices[2250] = "Wild turkey";
questions[21].choices[2251] = "Williamson\'s sapsucker";
questions[21].choices[2252] = "Willow ptarmigan";
questions[21].choices[2253] = "Willow warbler";
questions[21].choices[2254] = "Wisent";
questions[21].choices[2255] = "Wolf";
questions[21].choices[2256] = "Wolf eel";
questions[21].choices[2257] = "Wolf spider";
questions[21].choices[2258] = "Wolverine";
questions[21].choices[2259] = "Wombat";
questions[21].choices[2260] = "Wood frog";
questions[21].choices[2261] = "Wood ibis";
questions[21].choices[2262] = "Wood stork";
questions[21].choices[2263] = "Wood thrush";
questions[21].choices[2264] = "Wood turtle";
questions[21].choices[2265] = "Woodchuck";
questions[21].choices[2266] = "Woodduck";
questions[21].choices[2267] = "Woodpecker";
questions[21].choices[2268] = "Worm snake";
questions[21].choices[2269] = "Wrasse";
questions[21].choices[2270] = "Xanthus hummingbird";
questions[21].choices[2271] = "Yacare caiman";
questions[21].choices[2272] = "Yak";
questions[21].choices[2273] = "Yellow-backed duiker";
questions[21].choices[2274] = "Yellow-backed lory";
questions[21].choices[2275] = "Yellow-bellied glider";
questions[21].choices[2276] = "Yellow-bellied marmot";
questions[21].choices[2277] = "Yellow-bellied sapsucker";
questions[21].choices[2278] = "Yellow-bellied turtle";
questions[21].choices[2279] = "Yellow-bellied waxbill";
questions[21].choices[2280] = "Yellow-bellied weasel";
questions[21].choices[2281] = "Yellow-billed cacique";
questions[21].choices[2282] = "Yellow-billed cuckoo";
questions[21].choices[2283] = "Yellow-billed loon";
questions[21].choices[2284] = "Yellow-breasted chat";
questions[21].choices[2285] = "Yellow-eyed penguin";
questions[21].choices[2286] = "Yellow-faced mynah";
questions[21].choices[2287] = "Yellow-handed titi";
questions[21].choices[2288] = "Yellow-headed blackbird";
questions[21].choices[2289] = "Yellow-legged gull";
questions[21].choices[2290] = "Yellow-throated bunting";
questions[21].choices[2291] = "Yellow-throated marten";
questions[21].choices[2292] = "Yellow-throated warbler";
questions[21].choices[2293] = "Yellow amata moth";
questions[21].choices[2294] = "Yellow anaconda";
questions[21].choices[2295] = "Yellow armadillo";
questions[21].choices[2296] = "Yellow eyed viper";
questions[21].choices[2297] = "Yellow golden mole";
questions[21].choices[2298] = "Yellow jacket";
questions[21].choices[2299] = "Yellow tang";
questions[21].choices[2300] = "Yellow wagtail";
questions[21].choices[2301] = "Yellowhead wrasse";
questions[21].choices[2302] = "Yellowtail damselfish";
questions[21].choices[2303] = "Yellowtail snapper";
questions[21].choices[2304] = "Yokohama Braconid wasp";
questions[21].choices[2305] = "Zaire duiker";
questions[21].choices[2306] = "Zebra";
questions[21].choices[2307] = "Zebra butterfly";
questions[21].choices[2308] = "Zebra duiker";
questions[21].choices[2309] = "Zebra finch";
questions[21].choices[2310] = "Zebra longwing";
questions[21].choices[2311] = "Zebra shark";
questions[21].choices[2312] = "Zone-tailed kite";
questions[21].choices[2313] = "Zorilla";
questions[22] = new Object();
questions[22].question = "Which interrogation technique do you think would be most effective on you?";
questions[22].type = "R";
questions[22].choices = new Array();
questions[22].choices[1] = "Going Next Door";
questions[22].choices[2] = "Pain";
questions[22].choices[3] = "Nobody Loves You";
questions[22].choices[4] = "The All-Seeing Eye";
questions[22].choices[5] = "The Barbering Curriculum";
questions[22].choices[6] = "The Informer";
questions[22].choices[7] = "News from Home";
questions[22].choices[8] = "The Witness";
questions[22].choices[9] = "Joint Suspects";
questions[22].choices[10] = "The Big Bang";
questions[22].choices[11] = "Pearls Before Swine";
questions[22].choices[12] = "Chicken Button";
questions[22].choices[13] = "Death Eats a Sandwich";
questions[22].choices[14] = "Hammerhead";
questions[22].choices[15] = "Hammerhand";
questions[22].choices[16] = "Fried Hole";
questions[22].choices[17] = "Hangri-La";
questions[22].choices[18] = "Ivan Is a Dope";
questions[22].choices[19] = "Joint Interrogators";
questions[22].choices[20] = "Law of Partial Pressure";
questions[22].choices[21] = "The Spinoza";
questions[22].choices[22] = "Gospel Shark";
questions[22].choices[23] = "Cloud Cuckoo Land";
questions[22].choices[24] = "The Wolf in Sheep\'s Clothing";
questions[22].choices[25] = "Good Cop / Ventriloquist Cop";
questions[22].choices[26] = "Alice in Wonderland";
questions[22].choices[27] = "Monster Polygraph";
questions[22].choices[28] = "Confession is Good for the Soul";
questions[22].choices[29] = "Silver Tongued Devil";
questions[22].choices[30] = "Deep Sea Diver";
questions[22].choices[31] = "Pay The Piper";
questions[22].choices[32] = "Federal Bikini Inspector";
questions[22].choices[33] = "Big Wig";
questions[22].choices[34] = "Carlsbad Caverns";
questions[22].choices[35] = "The Boy Who Cried";
questions[22].choices[36] = "Goonland";
questions[22].choices[37] = "Role-Role Theory";
questions[22].choices[38] = "Zipf\'s Law";
questions[22].choices[39] = "Stream of Unconsciousness";
questions[22].choices[40] = "Flash in the Pan";
questions[22].choices[41] = "The Little Bird";
questions[22].choices[42] = "Welcome to Bethany";
questions[22].choices[43] = "Ampere\'s Rule";
questions[22].choices[44] = "The Dental Assistant";
questions[23] = new Object();
questions[23].question = "Have you experienced recurrent thoughts of regicide?";
questions[23].type = "R";
questions[23].choices = new Array();
questions[23].choices[1] = "Yes";
questions[23].choices[2] = "No";
questions[24] = new Object();
questions[24].question = "If you answered \'yes\' to the previous question, please rate the following statement: I know what \'regicide\' means.";
questions[24].type = "R";
questions[24].choices = new Array();
questions[24].choices[1] = "Strongly Disagree";
questions[24].choices[2] = "Disagree";
questions[24].choices[3] = "Agree";
questions[24].choices[4] = "Strongly Agree";
questions[24].choices[5] = "N/A";
questions[25] = new Object();
questions[25].question = "You are a liar:";
questions[25].type = "R";
questions[25].choices = new Array();
questions[25].choices[1] = "Can\'t Honestly Disagree";
questions[25].choices[2] = "Agree";
questions[25].choices[3] = "Strongly Agree";
questions[26] = new Object();
questions[26].question = "Can you flash your ROM?";
questions[26].type = "R";
questions[26].choices = new Array();
questions[26].choices[1] = "Yes";
questions[26].choices[2] = "No";
questions[27] = new Object();
questions[27].question = "Please acknowledge before continuing: ^^I understand that my responses to all items in this questionnaire are the property of Aperture Science. As such, they will remain strictly confidential, though they may be used to distribute prizes and/or initiate, prolong, or modify the invasive properties of authorized questioning, investigation, testing, and surveillance.";
questions[27].type = "C";
questions[27].choices = new Array();
questions[27].choices[1] = "I have read all or most of the above.";
questions[28] = new Object();
questions[28].question = "Are you functionally incapacitated by witnessing other people\'s misery?";
questions[28].type = "R";
questions[28].choices = new Array();
questions[28].choices[1] = "Yes";
questions[28].choices[2] = "No";
questions[29] = new Object();
questions[29].question = "Do you get pleasure from solitary pursuits?";
questions[29].type = "R";
questions[29].choices = new Array();
questions[29].choices[1] = "Yes";
questions[29].choices[2] = "No";
questions[30] = new Object();
questions[30].question = "What is your favorite flatware for, purely as an example, eating cake?";
questions[30].type = "R";
questions[30].choices = new Array();
questions[30].choices[1] = "Spoon";
questions[30].choices[2] = "Fork";
questions[30].choices[3] = "Salad Fork";
questions[30].choices[4] = "Meat Fork";
questions[30].choices[5] = "Cocktail Fork";
questions[30].choices[6] = "Dessert Fork";
questions[30].choices[7] = "Banquet Fork";
questions[30].choices[8] = "Serving Fork";
questions[30].choices[9] = "Fish Fork";
questions[30].choices[10] = "Table Fork";
questions[30].choices[11] = "Pastry Fork";
questions[30].choices[12] = "Knife";
questions[31] = new Object();
questions[31].question = "What is your favorite number between 31 and 37?";
questions[31].type = "R";
questions[31].choices = new Array();
questions[31].choices[1] = "31";
questions[31].choices[2] = "32";
questions[31].choices[3] = "33";
questions[31].choices[4] = "34";
questions[31].choices[5] = "35";
questions[31].choices[6] = "36";
questions[31].choices[7] = "37";
questions[32] = new Object();
questions[32].question = "Do you trust yourself?";
questions[32].type = "R";
questions[32].choices = new Array();
questions[32].choices[1] = "Yes";
questions[32].choices[2] = "No";
questions[33] = new Object();
questions[33].question = "In case you forget your UIN(+L) and need to retrieve it later, please list a crime that only you would know that you have committed:";
questions[33].type = "T";
questions[33].choices = new Array();
questions[34] = new Object();
questions[34].question = "How often do you exercise?";
questions[34].type = "R";
questions[34].choices = new Array();
questions[34].choices[1] = "Every Day";
questions[34].choices[2] = "Every Other Day";
questions[34].choices[3] = "Twice Weekly";
questions[34].choices[4] = "Weekly";
questions[34].choices[5] = "Twice a Month";
questions[34].choices[6] = "Monthly";
questions[34].choices[7] = "Yearly";
questions[34].choices[8] = "Every Few Years";
questions[34].choices[9] = "Once a Decade";
questions[34].choices[10] = "Once";
questions[35] = new Object();
questions[35].question = "If you disappeared tomorrow would anyone miss you?";
questions[35].type = "R";
questions[35].choices = new Array();
questions[35].choices[1] = "Yes";
questions[35].choices[2] = "No";
questions[36] = new Object();
questions[36].question = "Would you like to use a prism to study light?";
questions[36].type = "R";
questions[36].choices = new Array();
questions[36].choices[1] = "Yes";
questions[36].choices[2] = "No";
questions[37] = new Object();
questions[37].question = "Do you feel depressed, guilty, or remorseful?";
questions[37].type = "R";
questions[37].choices = new Array();
questions[37].choices[1] = "Yes";
questions[37].choices[2] = "No";
questions[38] = new Object();
questions[38].question = "Do you ever have feelings that people are talking about you or watching you?";
questions[38].type = "R";
questions[38].choices = new Array();
questions[38].choices[1] = "Yes";
questions[38].choices[2] = "No";
questions[39] = new Object();
questions[39].question = "Rate the pain you have been able to withstand without losing consciousness:";
questions[39].type = "R";
questions[39].choices = new Array();
questions[39].choices[1] = "1- Slight Pain";
questions[39].choices[2] = "2";
questions[39].choices[3] = "3";
questions[39].choices[4] = "4";
questions[39].choices[5] = "5 - Regular Pain";
questions[39].choices[6] = "6";
questions[39].choices[7] = "7";
questions[39].choices[8] = "8";
questions[39].choices[9] = "9";
questions[39].choices[10] = "10 - Worst Pain Imaginable";
questions[40] = new Object();
questions[40].question = "Complete the following statement with the answer that DOES NOT apply to you:^I am often:";
questions[40].type = "R";
questions[40].choices = new Array();
questions[40].choices[1] = "worried that life is vague and unreal";
questions[40].choices[2] = "suspicious of the actions of others";
questions[40].choices[3] = "prejudiced in favor of my own department, lab, product, skin color, etc.";
questions[40].choices[4] = "convinced that nobody really cares about me";
questions[40].choices[5] = "disturbed by the noise of the wind";
questions[40].choices[6] = "enraged by the petty foibles of those around me";
questions[40].choices[7] = "irritated by my past failures and children";
questions[40].choices[8] = "too depressed to kill an animal or colleague in order to put it out of its pain";
questions[40].choices[9] = "convinced of the correctness of my opinions on subjects about which I am not an expert";
questions[40].choices[10] = "speaking very slowly for no apparent reason";
questions[41] = new Object();
questions[41].question = "On a scale of 12 to 11, with the 12 possible choices arranged as on the face of a clock, how would you rate your awareness of any habitual physical mannerisms such as tugging your ear or hair, eye twitches, hand spasms, etc.?";
questions[41].type = "R";
questions[41].choices = new Array();
questions[41].choices[1] = "12";
questions[41].choices[2] = "1";
questions[41].choices[3] = "2";
questions[41].choices[4] = "3";
questions[41].choices[5] = "4";
questions[41].choices[6] = "5";
questions[41].choices[7] = "6";
questions[41].choices[8] = "7";
questions[41].choices[9] = "8";
questions[41].choices[10] = "9";
questions[41].choices[11] = "10";
questions[41].choices[12] = "11";
questions[42] = new Object();
questions[42].question = "First Pet\'s Name:";
questions[42].type = "T";
questions[42].choices = new Array();
questions[43] = new Object();
questions[43].question = "Do you regularly experience deja vu?";
questions[43].type = "R";
questions[43].choices = new Array();
questions[43].choices[1] = "Yes";
questions[43].choices[2] = "No";
questions[44] = new Object();
questions[44].question = "Complete this sentence,";
questions[44].type = "T";
questions[44].choices = new Array();
questions[45] = new Object();
questions[45].question = "Do you feel bad that you have let your coworkers and/or larger mandated collective down?";
questions[45].type = "R";
questions[45].choices = new Array();
questions[45].choices[1] = "Yes";
questions[45].choices[2] = "No";
questions[46] = new Object();
questions[46].question = "Pick the sentence that incorrectly employs the word \'excruciating\'.";
questions[46].type = "R";
questions[46].choices = new Array();
questions[46].choices[1] = "The test caused excruciating pain.";
questions[46].choices[2] = "The participant felt excruciating pain.";
questions[46].choices[3] = "I like to eat cake while excruciating.";
questions[47] = new Object();
questions[47].question = "Choose the correct inspiration for this inspirational phrase, “You can succeed best and quickest by going it alone.”";
questions[47].type = "R";
questions[47].choices = new Array();
questions[47].choices[1] = "Purpose";
questions[47].choices[2] = "Patience";
questions[47].choices[3] = "Success";
questions[47].choices[4] = "Endurance";
questions[47].choices[5] = "Courage";
questions[47].choices[6] = "Teamwork";
questions[48] = new Object();
questions[48].question = "I express my opinions, even if others in the group disagree with me:";
questions[48].type = "R";
questions[48].choices = new Array();
questions[48].choices[1] = "Almost never";
questions[48].choices[2] = "Rarely";
questions[48].choices[3] = "Sometimes";
questions[48].choices[4] = "Quite often";
questions[48].choices[5] = "Most of the time";
questions[49] = new Object();
questions[49].question = "Pick your favorite type of cake.";
questions[49].type = "R";
questions[49].choices = new Array();
questions[49].choices[1] = "Angel food cake";
questions[49].choices[2] = "Apple cake";
questions[49].choices[3] = "Babka";
questions[49].choices[4] = "Battenburg cake";
questions[49].choices[5] = "Baumkuchen";
questions[49].choices[6] = "Birthday cake";
questions[49].choices[7] = "Black Forest cake";
questions[49].choices[8] = "Buccellato";
questions[49].choices[9] = "Bundt cake";
questions[49].choices[10] = "Butter cake";
questions[49].choices[11] = "Butterfly cake";
questions[49].choices[12] = "Carrot cake";
questions[49].choices[13] = "Cheesecake";
questions[49].choices[14] = "Chocolate cake";
questions[49].choices[15] = "Christmas cake";
questions[49].choices[16] = "Chiffon cake";
questions[49].choices[17] = "Croquembouche";
questions[49].choices[18] = "Cupcake";
questions[49].choices[19] = "Date and walnut loaf";
questions[49].choices[20] = "Devil\'s food cake";
questions[49].choices[21] = "Eccles cake";
questions[49].choices[22] = "Fairy cake";
questions[49].choices[23] = "Fifteens";
questions[49].choices[24] = "Fruit cake";
questions[49].choices[25] = "Sponge cake";
questions[49].choices[26] = "Génoise Cake";
questions[49].choices[27] = "Gingerbread";
questions[49].choices[28] = "Gob";
questions[49].choices[29] = "Gooey butter cake";
questions[49].choices[30] = "Honey cake";
questions[49].choices[31] = "Hot milk cake";
questions[49].choices[32] = "Hummingbird cake";
questions[49].choices[33] = "Ice cream cake";
questions[49].choices[34] = "Jaffa Cakes";
questions[49].choices[35] = "Suncake";
questions[49].choices[36] = "Mooncake";
questions[49].choices[37] = "Orehnjac(a";
questions[49].choices[38] = "Pancake";
questions[49].choices[39] = "Panettone";
questions[49].choices[40] = "Petit fours";
questions[49].choices[41] = "Pineapple Upside Down Cake";
questions[49].choices[42] = "Pound cake";
questions[49].choices[43] = "Queen Elizabeth cake";
questions[49].choices[44] = "Red bean cake";
questions[49].choices[45] = "Red velvet cake";
questions[49].choices[46] = "Rhubarb cake";
questions[49].choices[47] = "Sachertorte";
questions[49].choices[48] = "St. Honore Cake";
questions[49].choices[49] = "Simnel cake";
questions[49].choices[50] = "Spice cake";
questions[49].choices[51] = "German chocolate cake";
questions[49].choices[52] = "Stack cake";
questions[49].choices[53] = "Leavened cake, Hefekuchen";
questions[49].choices[54] = "Tarte Tatin";
questions[49].choices[55] = "Teacake";
questions[49].choices[56] = "Tres leches cake";
questions[49].choices[57] = "Vanilla slice";
questions[49].choices[58] = "Vanilla Crazy Cake";
questions[49].choices[59] = "Victoria Sponge";
questions[49].choices[60] = "Wedding cake";
questions[50] = new Object();
questions[50].question = "Gender";
questions[50].type = "T";
questions[50].choices = new Array();
var questionstot = 50;
var cjhistory = new Array();
cjhistory[1] = new Object();
cjhistory[1].question = "1953 - Aperture Science begins operations as a manufacturer of shower curtains. Early product line provides a very low-tech portal between the inside and outside of your shower. Very little science is actually involved. The name is chosen to make the curtains appear more hygienic.^^1956 - Eisenhower administration awards Aperture a contract to provide shower curtains to all branches of the military except the Navy.^^1957 - 1975 - Mostly shower curtains.^^1978 - Aperture Founder and CEO, Cave Johnson, is exposed to mercury while secretly developing a dangerous mercury-injected rubber sheeting from which he plans to manufacture seven deadly shower curtains to be given as gifts to each member of the House Naval Appropriations committee.^^^[MORE]";
cjhistory[2] = new Object();
cjhistory[2].question = "1979 - Both of Cave Johnson\'s kidneys fail. Brain damaged, dying, and incapable of being convinced that time is not now flowing backwards, Johnson lays out a three tiered R&D program. The results, he says, will \'guarantee the continued success of Aperture Science far into the fast-approaching distant past.\'^^Tier 1: The Heimlich Counter-Maneuver - A reliable technique for interrupting the life-saving Heimlich Maneuver.^^Tier 2: The Take-A-Wish Foundation - A charitable organization that will purchase wishes from the parents of terminally ill children and redistribute them to wish-deprived but otherwise healthy adults.^^Tier 3: \'Some kind of rip in the fabric of space… That would… Well, it\'d be like, I don\'t know, something that would help with the shower curtains I guess. I haven\'t worked this idea out as much as the wish-taking one.\'^^^[MORE]";
cjhistory[3] = new Object();
cjhistory[3].question = "1981 - Diligent Aperture engineers complete the Heimlich Counter-Maneuver and Take-A-Wish Foundation initiatives.  The company announces products related to the research in a lavish, televised ceremony. These products become immediately wildly unpopular.  After a string of very public choking and despondent sick child disasters, senior company officials are summoned before a Senate investigative committee. During these proceedings, an engineer mentions that some progress has been made on Tier 3, the \'man-sized ad hoc quantum tunnel through physical space with possible applications as a shower curtain.\' The committee is quickly permanently recessed, and Aperture is granted an open-ended contract to secretly continue research on the \'Portal\' and Heimlich Counter-Maneuver projects.^^^[MORE]";
cjhistory[4] = new Object();
cjhistory[4].question = "1981-1985 - Work progresses on the \'Portal\' project. Several high ranking Fatah personnel choke to death on lamb chunks despite the intervention of their bodyguards.^^1986 - Word reaches Aperture management that another defense contractor called Black Mesa is working on a similar portal technology. In response to this news, Aperture begins developing the Genetic Lifeform and Disk Operating System (GLaDOS), an artificially intelligent research assistant and disk operating system.^^1996 - After a decade spent bringing the disk operating parts of GLaDOS to a state of more or less basic functionality, work begins on the Genetic Lifeform component.^^Several Years Later - The untested AI is activated for the first time as one of the planned activities on Aperture\'s first annual bring-your-daughter-to-work day.^^In many ways, the initial test goes well...^^^[END]";
var gladosHeader = "GLaDOS v1.09 (c) 1982 Aperture Science, Inc.";
var gladosPrompt = " ^^B:\\> ";
var gladosMessage = "";
var gladosSpeed = 7;
var holidayOrgY = 0;
var holidayOff = false;
var holidayVideo = "wwc_holiday07_v04.flv";
var holidayVideoGnome = "wwc_holiday07_gnome_v02.flv";
var is_cj = false;
var notesPage = 0;
var maxNotesPage = 4;
var notesCursor = false;
var curx = 0;
var cury = 0;
var theclip = this;
var charIndex = 0;
var charMaxIndex = 0;
var keyLock = true;
var entryMode = 0;
var pageOffset = 0;
theclip.loadVariables("gdxt.php?what=getid&refid=" + _level0.refid);
var applyAIDNum = 0;
var applyAIDText = 0;
var pauseReady = false;
var pauseLength = 500;
var pauseReturnState = 0;
var pauseCounter = 0;
var pauseFunction;
var snd = new Sound();
var waitVisStart = 0;
var waitVisTotal = 0;
var hint;
var hintOn = true;
var hintScale = 100;
var hintStep = 5;
var hintMessage = "thecakeisalie";
var hintOffset = 0;
var hintMax = 100;
var hintMin = 50;
var cursor;
var cursorBlink = true;
var cursorBaseX = 0;
var cursorAdjustY = 0;
var extraBlinker;
var extraBlinkerOn = false;
var extraBlinkerReady = false;
var format = new TextFormat();
format.font = "Courier New";
format.size = 12;
var cakeimg1 = this.attachMovie("cake1","caker1",this.getNextHighestDepth(),{_visible:false});
var cakeRandom = 6000;
initCake(this);
var inputer = this.attachMovie("letter","input1",this.getNextHighestDepth());
inputer.field.text = "";
inputer._x = 10;
inputer._y = 550;
var qar = new Array();
qar[0] = "> ";
qar[1] = "Username> ";
qar[2] = "Password> ";
qar[3] = "ERROR 07 [Incorrect Password]^^Password> ";
qar[4] = "Loaded: ENRICHMENT CENTER TEST SUBJECT APPLICATION PROCESS           ^Form   : FORMS-EN-2873-FORM (PART1: PERSONALITY & GENERAL KNOWLEDGE)^^If you are a first time applicant, please type \"CONTINUE\".^^DISREGARD THIS INSTRUCTION if you are returning to form FORMS-EN-2873-FORM after a break of any duration for any reason. In that case, you MUST contact your supervisor before proceeding.Your supervisor will solicit your Authorized Administrative Unit for an affirmative injunction to type \"CONTINUE\".^^If permission to type \"CONTINUE\" has been granted, please do so now, unless the box labeled \"DO NOT TYPE CONTINUE\" on the \"Forms Re-Sanction\" form you should have received from your supervisor is checked, in which case you should remain at your workstation not typing \"CONTINUE\" until such a time as you are instructed by your supervisor to discontinue not typing it.^^> ";
qar[5] = "Below is your form FORMS-EN-2873-FORM Unique Indentity Number (Plus Letters) (UIN(+L)):^^^@^^^Please memorize your UIN(+L), as you may be required to recite it from memory as proof. The opening and closing braces are decorative and should not be memorized.^^When you are finished memorizing your case sensitive UIN(+L), type \"CONTINUE\" to proceed.^^^> ";
qar[6] = "";
qar[7] = "> ";
qar[8] = "If this is an actual plea for help in response to a hazardous material spill, an explosion, a fire on your person, radiation poisoning, a choking gas of unknown origin, eye trauma resulting from the use of an emergency eye wash station on floors three, four, or eleven, an animal malfunction, or any other injurious experimental equipment failure, please remain at your workstation. A Crisis Response Team has already been mobilized to deliberate on a response to your crisis.^^If you need help accessing the system, please refer to your User Handbook.^^> ";
qar[9] = "Congratulations!^^You have finished the:^^ENRICHMENT CENTER TEST SUBJECT APPLICATION^FORMS-EN-2873-FORM (PART1: PERSONALITY & GENERAL KNOWLEDGE)^^Please enter your 64 digit UIN(+L) to complete the process.^^> ";
qar[10] = "The entered UIN(+L) does not match your assigned UIN(+L).^^Please REMAIN AT YOUR WORKSTATION until a Computer-Aided-Enrichment Crisis Team arrives.^^";
qar[11] = "... > ^ >^ ^When was the last time you left the building? Do you know anyone who\'s left the building lately? I don\'t know what lunatic wrote the new lockdown policy. I don\'t know who\'s in charge. But they\'re building an \'Enrichment Center\'. Check out this security feed. Whatever the hell a \'relaxation vault\' is, it doesn\'t have any doors. ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^If a supervisor walks by, press return. I don\'t think going home is part of our job description anymore. ^ ";
var qdelay = new Array();
qdelay[0] = 75;
qdelay[1] = 75;
qdelay[2] = 75;
qdelay[3] = 25;
qdelay[4] = 5;
qdelay[5] = 10;
qdelay[6] = 50;
qdelay[7] = 10;
qdelay[8] = 10;
qdelay[9] = 10;
qdelay[10] = 10;
qdelay[11] = 5;
var qon = 0;
var glob_nc = new NetConnection();
glob_nc.connect(null);
var glob_ns = new NetStream(glob_nc);
glob_ns.onStatus = function(infoObject)
{
   if(infoObject.code == "NetStream.Play.Stop")
   {
      glob_ns.play("security02.flv");
   }
};
var glob_nch = new NetConnection();
glob_nch.connect(null);
var glob_nsh = new NetStream(glob_nch);
glob_nsh.onStatus = function(infoObject)
{
   if(infoObject.code == "NetStream.Play.Stop" && holidayOff == false)
   {
      if(random(15) != 2)
      {
         glob_nsh.play(holidayVideo);
      }
      else
      {
         glob_nsh.play(holidayVideoGnome);
      }
   }
};
var keyListener = new Object();
keyListener.onKeyDown = function()
{
   if(keyLock)
   {
      return undefined;
   }
   var tmpnum = Key.getCode();
   trace(tmpnum);
   var moveon = false;
   if((tmpnum < 48 || tmpnum > 90) && !(tmpnum == 8 || tmpnum == 13 || tmpnum == 37 || tmpnum == 32 || tmpnum == 34 || tmpnum == 33 || tmpnum == 191))
   {
      return undefined;
   }
   if(tmpnum == 191)
   {
      tmpnum = 63;
   }
   if(notesCursor)
   {
      tmpnum = 13;
   }
   switch(entryMode)
   {
      case 3:
         entryMode = 4;
         var char;
         var i = 1;
         while(i <= charIndex)
         {
            char = eval("char" + i);
            char.field.backgroundColor = 0;
            char.field.background = false;
            char.field.textColor = 6749952;
            i++;
         }
         switchPage();
         return undefined;
      case 4:
         entryMode = 3;
         glob_ns.seek(0);
         glob_ns.pause();
         glob_vid._visible = false;
         switchPage();
         return undefined;
      default:
         switch(tmpnum)
         {
            case 13:
               var fnc = eval("processInput" + entryMode);
               fnc();
               break;
            case 33:
            case 34:
               if(entryMode == 2)
               {
                  if(questions[qon].choices.length > 104)
                  {
                     var tmpo = pageOffset;
                     if(tmpnum == 33)
                     {
                        pageOffset -= 104;
                     }
                     if(tmpnum == 34)
                     {
                        pageOffset += 104;
                     }
                     if(pageOffset < 0)
                     {
                        pageOffset = 0;
                     }
                     if(pageOffset >= questions[qon].choices.length)
                     {
                        pageOffset = tmpo;
                     }
                     formatQuestion();
                     moveon = false;
                  }
               }
               break;
            case 37:
            case 8:
               if(inputer.field.length > 0)
               {
                  inputer.field.text = inputer.field.text.substr(0,inputer.field.length - 1);
               }
               break;
            default:
               if(inputer.field.text.length < 65)
               {
                  inputer.field.text += chr(tmpnum);
                  break;
               }
         }
         cursorSetPos(cursorBaseX + format.getTextExtent(inputer.field.text).textFieldWidth,inputer._y - cursorAdjustY);
   }
};
Key.addListener(keyListener);
initCursor(this,format);
glob_vid.attachVideo(glob_nsh);
glob_nsh.setBufferTime(3);
holidayOrgY = glob_vid._y;
glob_vid._y = 75;
glob_vid._visible = true;
glob_nsh.play(holidayVideo);
placeText(this,0,50,qar[qon],format,qdelay[qon]);
```

<!--
Files:

https://web.archive.org/web/20101212041243oe_/https://www.aperturescience.com/ApertureScience17.swf

https://web.archive.org/web/20101212041243oe_/https://www.aperturescience.com/wwc_holiday07_v04.flv

https://web.archive.org/web/20101212041243oe_/https://www.aperturescience.com/wwc_holiday07_gnome_v02.flv

https://web.archive.org/web/20101212041243oe_/https://www.aperturescience.com/security02.flv

https://www.aperturescience.com/aperturescience.swf

https://www.aperturescience.com/wcc_holiday10_v03.flv

https://www.aperturescience.com/wcc_holiday10_v03_egg.flv
-->
