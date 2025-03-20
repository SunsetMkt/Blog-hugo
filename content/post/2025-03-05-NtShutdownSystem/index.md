---
categories: Original
date: 2025-03-05T00:00:00Z
tags:
  - Windows
  - 信息技术
slug: NtShutdownSystem
title: 使用 NtShutdownSystem 快速关闭或重启 Windows
---

在 Windows 关机过程的最终阶段，会调用 `NtShutdownSystem`。该函数负责关闭所有驱动程序、刷新注册表配置单元和磁盘缓存、清除页面文件等。完成这些操作后，它会调用 `NtSetSystemPowerState` 函数。

`NtSetSystemPowerState` 随后会使所有即插即用设备关闭，并让系统进入停止运行、断电或重启状态。

然而，在未事先通知系统的情况下直接调用这两个函数是极其危险的，可能会导致系统不稳定。

[Reference](https://www.codeproject.com/Articles/34194/Performing-emergency-shutdowns)

[EmergencyShutdown 程序](https://github.com/SunsetMkt/EmergencyShutdown)

```cpp
#include <chrono>
#include <iostream>
#include <string>
#include <thread>
#include <Windows.h>

typedef enum _SHUTDOWN_ACTION
{
    ShutdownNoReboot,
    ShutdownReboot,
    ShutdownPowerOff
} SHUTDOWN_ACTION,
    *PSHUTDOWN_ACTION;

typedef LONG(__stdcall *PFN_NT_SHUTDOWN_SYSTEM)(DWORD SHUTDOWN_ACTION);

int DisplayError(const std::wstring &message);
std::wstring GetFormattedMessage(DWORD, LPCWSTR, DWORD, ...);

int main(int argc, char *argv[])
{
    std::wstring programName = std::wstring(argv[0], argv[0] + strlen(argv[0]));
    // std::wcout << L"Program Name: " << programName << std::endl;

    if (argc < 2 || strcmp(argv[1], "/?") == 0)
    {
        std::wcout << L"Usage: " << programName << L" [/r | /s] [/t seconds]\n"
                   << L"  /r : Reboot the system\n"
                   << L"  /s : Shutdown the system\n"
                   << L"  /t seconds : Set a countdown before executing (default 0)" << std::endl;
        return 0;
    }

    SHUTDOWN_ACTION action;
    int delay = 0;

    std::wcout << L"Processing command: " << argv[1] << std::endl;

    if (strcmp(argv[1], "/r") == 0)
    {
        action = ShutdownReboot;
        std::wcout << L"Action: Reboot" << std::endl;
    }
    else if (strcmp(argv[1], "/s") == 0)
    {
        action = ShutdownPowerOff;
        std::wcout << L"Action: Shutdown" << std::endl;
    }
    else
    {
        std::wcout << L"Invalid option. Use /? for help." << std::endl;
        return 1;
    }

    if (argc == 4 && strcmp(argv[2], "/t") == 0)
    {
        delay = std::stoi(argv[3]);
        std::wcout << L"Shutdown delay: " << delay << L" seconds" << std::endl;
    }

    if (delay > 0)
    {
        std::wcout << L"Shutdown will execute in " << delay << L" seconds..." << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(delay));
    }

    std::wcout << L"Loading ntdll.dll..." << std::endl;
    HINSTANCE hNtDll = GetModuleHandle(L"ntdll.dll");
    if (hNtDll == NULL)
        return DisplayError(L"GetModuleHandle() failed");

    std::wcout << L"Retrieving NtShutdownSystem function..." << std::endl;
    PFN_NT_SHUTDOWN_SYSTEM pNtShutdownSystem =
        (PFN_NT_SHUTDOWN_SYSTEM)GetProcAddress(hNtDll, "NtShutdownSystem");
    if (pNtShutdownSystem == NULL)
        return DisplayError(L"GetProcAddress() failed");

    std::wcout << L"Adjusting privileges..." << std::endl;
    HANDLE hToken;
    if (!OpenProcessToken(GetCurrentProcess(), TOKEN_QUERY | TOKEN_ADJUST_PRIVILEGES, &hToken))
        return DisplayError(L"OpenProcessToken() failed");

    TOKEN_PRIVILEGES tkp;
    if (!LookupPrivilegeValue(NULL, SE_SHUTDOWN_NAME, &tkp.Privileges[0].Luid))
        return DisplayError(L"LookupPrivilegeValue() failed");

    tkp.PrivilegeCount = 1;
    tkp.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;

    if (!AdjustTokenPrivileges(hToken, FALSE, &tkp, 0, NULL, 0))
        return DisplayError(L"AdjustTokenPrivileges() failed");

    CloseHandle(hToken);

    std::wcout << L"Calling NtShutdownSystem..." << std::endl;
    LONG status = pNtShutdownSystem(action);
    if (status)
    {
        std::wcout << L"NtShutdownSystem() returned 0x" << std::hex << status << std::endl;
        return 1;
    }

    std::wcout << L"System " << (action == ShutdownReboot ? L"reboot" : L"shutdown") << L" initiated successfully." << std::endl;
    return 0;
}

int DisplayError(const std::wstring &message)
{
    DWORD error = GetLastError();
    std::wstring errorMsg = GetFormattedMessage(FORMAT_MESSAGE_FROM_SYSTEM, NULL, error);
    std::wcout << message << L": " << errorMsg << std::endl;
    return 1;
}

std::wstring GetFormattedMessage(DWORD dwFlags, LPCWSTR pMsg, DWORD dwMsgId, ...)
{
    LPWSTR pBuffer = NULL;
    va_list args;
    va_start(args, dwMsgId);

    FormatMessage(dwFlags | FORMAT_MESSAGE_ALLOCATE_BUFFER,
                  pMsg, dwMsgId,
                  MAKELANGID(LANG_NEUTRAL, SUBLANG_NEUTRAL),
                  (LPWSTR)&pBuffer, 0, &args);
    va_end(args);

    std::wstring result = pBuffer ? pBuffer : L"Unknown error";
    LocalFree(pBuffer);
    return result;
}
```
