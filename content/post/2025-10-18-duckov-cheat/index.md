---
categories: Original
date: 2025-10-18T00:00:00Z
tags:
    - 逆向工程
    - 游戏
slug: duckov-cheat
title: 《逃离鸭科夫》（Escape from Duckov）的内置作弊开关
---

TL;DR：在当前用户的文档文件夹（`%USERPROFILE%\Documents`）中写入文件名为`WWSSADADBA`的文件，即可开启作弊模式。

- `leftCtrlKey` + `equalsKey`: 开关无敌
- `numpadMultiplyKey`: 在数字键盘输入生成的物品 ID
- `numpadPlusKey`: 生成上一步输入生成的物品 ID
- `numpadMinusKey`: 复制当前选中的物品
- `leftCtrlKey` + `backButton`: 传送
- `leftAltKey` + `sKey`: 睡觉

## TeamSoda.Duckov.Core.Duckov.CheatMode

```csharp
  private static bool CheatFileExists()
  {
    return File.Exists(Path.Join(string.op_Implicit(Environment.GetFolderPath(Environment.SpecialFolder.Personal)), string.op_Implicit("WWSSADADBA")));
  }
```

## TeamSoda.Duckov.Core.CheatingManager

```csharp
  private void Update()
  {
    if (!CheatMode.Active || !(bool) (Object) CharacterMainControl.Main)
      return;
    if (Keyboard.current != null && Keyboard.current.leftCtrlKey.isPressed && Keyboard.current.equalsKey.wasPressedThisFrame)
      this.ToggleInvincible();
    if (Keyboard.current != null && Keyboard.current.numpadMultiplyKey.wasPressedThisFrame)
    {
      this.typing = !this.typing;
      if (this.typing)
      {
        this.typingID = 0;
        this.LogCurrentTypingID();
      }
      else
        this.LockItem();
    }
    this.UpdateTyping();
    if (Keyboard.current != null && this.typing && Keyboard.current.backspaceKey.wasPressedThisFrame && this.typingID > 0)
    {
      this.typingID /= 10;
      this.LogCurrentTypingID();
    }
    if (Keyboard.current != null && Keyboard.current.leftCtrlKey.isPressed && Mouse.current.backButton.wasPressedThisFrame)
      this.CheatMove();
    if (Keyboard.current != null && Keyboard.current.leftAltKey.isPressed && Keyboard.current.sKey.wasPressedThisFrame)
      SleepView.Instance.Open();
    if (Keyboard.current != null && Keyboard.current.numpadPlusKey.wasPressedThisFrame)
    {
      if (this.typing)
      {
        this.LockItem();
        this.typing = false;
      }
      this.CreateItem(this.lockedItem);
    }
    if (Keyboard.current == null || !Keyboard.current.numpadMinusKey.wasPressedThisFrame)
      return;
    int displayingItemId = ItemHoveringUI.DisplayingItemID;
    if (displayingItemId <= 0)
      return;
    this.SetTypedItem(displayingItemId);
    this.CreateItem(this.lockedItem);
  }
```
