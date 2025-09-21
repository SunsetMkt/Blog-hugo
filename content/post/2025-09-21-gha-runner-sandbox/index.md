---
categories: Original
date: "2025-09-21T00:00:00Z"
tags:
    - GitHub
    - 信息技术
slug: gha-runner-sandbox
title: 将 GitHub Actions 运行器作为沙盒运行
---

这些工作流允许您将 GitHub Actions 运行器作为沙盒运行，以测试和修复您的工作流。

通过 Tailscale 访问沙盒，您可以：

- 检查运行器镜像中实际包含的内容。
- 观察运行器内部正在发生的情况。
- 手动查看文件变更。
- 动态运行命令。
- 手动与 Windows GUI 交互。

GitHub 托管的运行器是公共资源，不应用于任何非开发用途。

您需要在您的仓库中设置 `TS_OAUTH_CLIENT_ID` 和 `TS_OAUTH_SECRET` 密钥。该 OAuth 客户端需要拥有对 `tag:ci` 的 `auth_keys`（读取或修改认证密钥）范围的写入权限。

```yml
name: Windows RDP Sandbox with Tailscale
# RDP: runneradmin:6MonkeysRLooking^
# SSH: runneradmin:6MonkeysRLooking^
# Why 6MonkeysRLooking^: https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb

# Controls when the workflow will run
on:
    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:
    # Allows external webhook trigger
    repository_dispatch:
        types: [windows-rdp-tailscale]

# You can use the following syntax to disable permissions for all of the available permissions:
permissions: {}

# concurrency:
#     # Only one workflow can run at a time
#     group: ${{ github.workflow }}
#     cancel-in-progress: true # Cancel previous runs

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
    # This workflow contains a single job called "sandbox"
    sandbox:
        # The type of runner that the job will run on
        runs-on: windows-2025
        # This is a hard limit. 360 is the maximum allowed by GitHub.
        timeout-minutes: 360

        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
            # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
            # - uses: actions/checkout@v4

            # Windows Server runner seems have SSH already enabled
            - name: Setup
              run: |
                  # Enable RDP
                  Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Terminal Server'-name "fDenyTSConnections" -Value 0
                  Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
                  Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp' -name "UserAuthentication" -Value 1
                  # Set password
                  Set-LocalUser -Name "runneradmin" -Password (ConvertTo-SecureString -AsPlainText "6MonkeysRLooking^" -Force)
                  # Enable Audio
                  Set-Service -Name "Audiosrv" -StartupType Automatic
                  Start-Service -Name "Audiosrv"
                  # Hide power button and log off button
                  function Set-DwordRegistryValue {
                      param (
                          [Parameter(Mandatory=$true)]
                          [string]$Path,
                          [Parameter(Mandatory=$true)]
                          [string]$Name,
                          [Parameter(Mandatory=$true)]
                          [int]$Value
                      )

                      if (-not (Test-Path $Path)) {
                          New-Item -Path $Path -Force | Out-Null
                      }

                      New-ItemProperty -Path $Path -Name $Name -Value $Value -PropertyType DWord -Force | Out-Null
                  }
                      
                  Set-DwordRegistryValue -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer" -Name "StartMenuLogOff" -Value 1
                  Set-DwordRegistryValue -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer" -Name "NoClose" -Value 1
                  Set-DwordRegistryValue -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer" -Name "HidePowerOptions" -Value 1
                  # Hide hosted-compute-agent window
                  function Hide-Window {
                      param([string]$ProcessName = "notepad")

                      Add-Type @"
                  using System;
                  using System.Runtime.InteropServices;
                  public class Win32 {
                      [DllImport("user32.dll")]
                      public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
                      [DllImport("user32.dll")]
                      public static extern int GetWindowLong(IntPtr hWnd, int nIndex);
                      [DllImport("user32.dll")]
                      public static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);
                  }
                  "@

                      $SW_HIDE = 0
                      $GWL_EXSTYLE = -20
                      $WS_EX_TOOLWINDOW = 0x00000080

                      $procs = Get-Process -Name $ProcessName -ErrorAction SilentlyContinue
                      if (-not $procs) { return }

                      foreach ($proc in $procs) {
                          $hwnd = $proc.MainWindowHandle
                          if ($hwnd -eq 0) { continue }
                          $exStyle = [Win32]::GetWindowLong($hwnd, $GWL_EXSTYLE)
                          [Win32]::SetWindowLong($hwnd, $GWL_EXSTYLE, $exStyle -bor $WS_EX_TOOLWINDOW) | Out-Null
                          [Win32]::ShowWindow($hwnd, $SW_HIDE) | Out-Null
                      }
                  }

                  Hide-Window -ProcessName hosted-compute-agent

            - name: Tailscale
              uses: tailscale/github-action@v3
              with:
                  oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}
                  oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}
                  tags: tag:ci
                  args: --advertise-exit-node
                  hostname: gha-windows-sandbox
                  version: latest

            # Should be runneradmin
            - name: whoami
              run: whoami

            # Each job in a workflow can run for up to 6 hours of execution time.
            # If a job reaches this limit, the job is terminated and fails.
            # You may NOT log out runneradmin, since this will kill the Actions agent executable.
            # ("C:\ProgramData\GitHub\HostedComputeAgent\hosted-compute-agent")
            # The VM will be destroyed without agent watchdog message. So do not kill the agent process.
            - name: Sleep
              run: |
                  '@echo off\n type nul > C:\Users\runneradmin\Desktop\stop_sleeping_step_confirmed.txt' | Out-File C:\Users\runneradmin\Desktop\shutdown_confirmed.bat -Encoding ASCII
                  Write-Host "Sleeping..."
                  while (-not (Test-Path "C:\Users\runneradmin\Desktop\stop_sleeping_step_confirmed.txt")) {
                      Start-Sleep -Seconds 5
                  }
```

```yml
name: Ubuntu VNC Sandbox with Tailscale
# SSH: runner:6MonkeysRLooking^
# VNC: 6MonkeysRLooking^ (Port: 5901)

# Controls when the workflow will run
on:
    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:
    # Allows external webhook trigger
    repository_dispatch:
        types: [ubuntu-vnc-tailscale]

# You can use the following syntax to disable permissions for all of the available permissions:
permissions: {}

# concurrency:
#     # Only one workflow can run at a time
#     group: ${{ github.workflow }}
#     cancel-in-progress: true # Cancel previous runs

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
    # This workflow contains a single job called "sandbox"
    sandbox:
        # The type of runner that the job will run on
        runs-on: ubuntu-24.04
        # This is a hard limit. 360 is the maximum allowed by GitHub.
        timeout-minutes: 360

        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
            # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
            # - uses: actions/checkout@v4

            - name: Setup
              run: |
                  # Change password
                  echo "runner:6MonkeysRLooking^" | sudo chpasswd
                  # Install SSH
                  sudo apt-get update
                  sudo apt-get install openssh-server
                  sudo systemctl enable --now ssh
                  # Install Desktop
                  sudo apt-get install ubuntu-desktop-minimal
                  # Install VNC server
                  sudo apt-get install tigervnc-standalone-server tigervnc-common
                  # Set VNC password
                  mkdir -p ~/.vnc
                  echo "6MonkeysRLooking^" | vncpasswd -f > ~/.vnc/passwd
                  chmod 600 ~/.vnc/passwd
                  # Start VNC server
                  vncserver :1 -geometry 1920x1080 -depth 24 -localhost no

            - name: Tailscale
              uses: tailscale/github-action@v3
              with:
                  oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}
                  oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}
                  tags: tag:ci
                  # Tailscale SSH feature does not need openssh-server or user password, it's controlled by ACL
                  args: --advertise-exit-node --ssh
                  hostname: gha-ubuntu-sandbox
                  version: latest

            # Should be runner
            - name: whoami
              run: whoami

            # Each job in a workflow can run for up to 6 hours of execution time.
            # If a job reaches this limit, the job is terminated and fails.
            - name: Sleep
              run: |
                  echo -e "#!/bin/bash\n\ntouch /tmp/stop_sleeping_step_confirmed" | sudo tee /home/runner/shutdown_confirmed.sh
                  sudo chmod +x /home/runner/shutdown_confirmed.sh
                  echo "Sleeping..."
                  while [ ! -e /tmp/stop_sleeping_step_confirmed ]; do
                      sleep 5
                  done
```

```yml
name: Ubuntu SSH Sandbox with Tailscale
# SSH: runner:6MonkeysRLooking^

# Controls when the workflow will run
on:
    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:
    # Allows external webhook trigger
    repository_dispatch:
        types: [ubuntu-ssh-tailscale]

# You can use the following syntax to disable permissions for all of the available permissions:
permissions: {}

# concurrency:
#     # Only one workflow can run at a time
#     group: ${{ github.workflow }}
#     cancel-in-progress: true # Cancel previous runs

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
    # This workflow contains a single job called "sandbox"
    sandbox:
        # The type of runner that the job will run on
        runs-on: ubuntu-24.04
        # This is a hard limit. 360 is the maximum allowed by GitHub.
        timeout-minutes: 360

        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
            # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
            # - uses: actions/checkout@v4

            - name: Setup
              run: |
                  # Change password
                  echo "runner:6MonkeysRLooking^" | sudo chpasswd
                  # Install SSH
                  sudo apt-get update
                  sudo apt-get install openssh-server
                  sudo systemctl enable --now ssh

            - name: Tailscale
              uses: tailscale/github-action@v3
              with:
                  oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}
                  oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}
                  tags: tag:ci
                  # Tailscale SSH feature does not need openssh-server or user password, it's controlled by ACL
                  args: --advertise-exit-node --ssh
                  hostname: gha-ubuntu-sandbox
                  version: latest

            # Should be runner
            - name: whoami
              run: whoami

            # Each job in a workflow can run for up to 6 hours of execution time.
            # If a job reaches this limit, the job is terminated and fails.
            - name: Sleep
              run: |
                  echo -e "#!/bin/bash\n\ntouch /tmp/stop_sleeping_step_confirmed" | sudo tee /home/runner/shutdown_confirmed.sh
                  sudo chmod +x /home/runner/shutdown_confirmed.sh
                  echo "Sleeping..."
                  while [ ! -e /tmp/stop_sleeping_step_confirmed ]; do
                      sleep 5
                  done
```

```yml
name: macOS SSH Sandbox with Tailscale
# SSH: altrunner:6MonkeysRLooking^
# VNC: altrunner:6MonkeysRLooking^ (Port: 5900) (Black Screen)

# Controls when the workflow will run
on:
    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:
    # Allows external webhook trigger
    repository_dispatch:
        types: [macos-ssh-tailscale]

# You can use the following syntax to disable permissions for all of the available permissions:
permissions: {}

# concurrency:
#     # Only one workflow can run at a time
#     group: ${{ github.workflow }}
#     cancel-in-progress: true # Cancel previous runs

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
    # This workflow contains a single job called "sandbox"
    sandbox:
        # The type of runner that the job will run on
        runs-on: macos-26
        # This is a hard limit. 360 is the maximum allowed by GitHub.
        timeout-minutes: 360

        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
            # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
            # - uses: actions/checkout@v4

            # macOS runner seems have SSH already enabled
            - name: Setup
              run: |
                  # https://github.com/dikeckaan/MacOS-Workflow-VNC/blob/master/configure.sh
                  # Disable spotlight indexing
                  sudo mdutil -i off -a

                  # Create new account
                  sudo dscl . -create /Users/altrunner
                  sudo dscl . -create /Users/altrunner UserShell /bin/bash
                  sudo dscl . -create /Users/altrunner RealName "My User"
                  sudo dscl . -create /Users/altrunner UniqueID 1001
                  sudo dscl . -create /Users/altrunner PrimaryGroupID 80
                  sudo dscl . -create /Users/altrunner NFSHomeDirectory /Users/altrunner
                  sudo dscl . -passwd /Users/altrunner "6MonkeysRLooking^"
                  sudo dscl . -passwd /Users/altrunner "6MonkeysRLooking^"
                  sudo createhomedir -c -u altrunner

                  # Enable VNC
                  # Set priveleges
                  sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -allowAccessFor -allUsers -privs -all
                  # Allow VNC clients
                  sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -clientopts -setvnclegacy -vnclegacy yes 

                  # VNC password - http://hints.macworld.com/article.php?story=20071103011608872
                  echo "6MonkeysRLooking^" | perl -we 'BEGIN { @k = unpack "C*", pack "H*", "1734516E8BA8C5E2FF1C39567390ADCA"}; $_ = <>; chomp; s/^(.{8}).*/$1/; @p = unpack "C*", $_; foreach (@k) { printf "%02X", $_ ^ (shift @p || 0) }; print "\n"' | sudo tee /Library/Preferences/com.apple.VNCSettings.txt

                  # Start VNC/reset changes
                  sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -restart -agent -console
                  sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate
                  # This actually won't work. VNC client only shows black screen
                  # Screen recording might be disabled. Screen Sharing or Remote Management must be enabled from System Preferences or via MDM.
                  # Screen control might be disabled. Screen Sharing or Remote Management must be enabled from System Preferences or via MDM.

            - name: Tailscale
              uses: tailscale/github-action@v3
              with:
                  oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}
                  oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}
                  tags: tag:ci
                  # Tailscale SSH feature does not need openssh-server or user password, it's controlled by ACL
                  args: --advertise-exit-node --ssh
                  hostname: gha-macos-sandbox
                  version: latest

            # Should be runner
            - name: whoami
              run: whoami

            # Each job in a workflow can run for up to 6 hours of execution time.
            # If a job reaches this limit, the job is terminated and fails.
            - name: Sleep
              run: |
                  echo -e "#!/bin/bash\n\ntouch /tmp/stop_sleeping_step_confirmed" | sudo tee /Users/altrunner/shutdown_confirmed.sh
                  sudo chmod +x /Users/altrunner/shutdown_confirmed.sh
                  echo "Sleeping..."
                  while [ ! -e /tmp/stop_sleeping_step_confirmed ]; do
                      sleep 5
                  done
```
