---
categories: Original
date: 2025-11-30T00:00:00Z
tags:
    - Microsoft
    - 前端
slug: vscode-web-static
title: VSCode Web 的静态部署
---

标题“VSCode Web 的静态部署”特指如下情况：

- 官方 VSCode 或 `Code - OSS`
- 在默认设置的浏览器中运行
- 无后端服务，只使用 HTTP 文件服务器
- 仅通过静态文件进行部署

有很多项目尝试达成此目标，下面是一个不完整的列表：

- [github1s/vscode-web](https://github.com/conwnet/github1s/tree/master/vscode-web)
- [Felx-B/vscode-web](https://github.com/Felx-B/vscode-web)
- [YieldRay/code-oss](https://github.com/YieldRay/code-oss)
- [progrium/vscode-web](https://github.com/progrium/vscode-web)

由于 VSCode/`Code - OSS` 的 Web 构建在设计上用于`github.dev`这样的在线服务，为了完全静态地使用它，需要一些补丁（[github1s/vscode-web](https://github.com/conwnet/github1s/tree/master/vscode-web)）。

---

不考虑上面的现有方案，受[wylieconlon](https://github.com/Felx-B/vscode-web/issues/39)的启发，我们可以从[vscode-test-web](https://github.com/microsoft/vscode-test-web)工具中获取达成此目标的参考。

VSCode 的官方 Web 构建通过[API](https://update.code.visualstudio.com/api/update/web-standalone/stable/latest)提供，通过恰当的 Workbench 初始化，我们可以获得基于官方构建的可用版本。

在解压静态文件后，应用下面的 Patch：

注：我们假定用户不会通过此部署处理凭据或其他秘密信息，也不会受到针对性攻击。理想的使用环境为 Chromium 的无痕窗口且仅打开此页面。

此 Patch 用于修补 Webview 的子域名 Hash 校验，因为静态部署无法动态处理任意子域名（通常用于`github.dev`环境），仅验证是否同源。

```patch
diff --git a/build/out/vs/workbench/contrib/webview/browser/pre/index.html b/build/out/vs/workbench/contrib/webview/browser/pre/index.html
index 9f3f70dc..20d95d5f 100644
--- a/build/out/vs/workbench/contrib/webview/browser/pre/index.html
+++ b/build/out/vs/workbench/contrib/webview/browser/pre/index.html
@@ -391,7 +391,7 @@
 					throw err instanceof Error ? err : new Error(String(err));
 				}

-				if (hostname === parentOriginHash || hostname.startsWith(parentOriginHash + '.')) {
+				if (hostname === parentOriginHash || hostname.startsWith(parentOriginHash + '.') || location.origin === parentOrigin) {
 					// validation succeeded!
 					return start(parentOrigin);
 				}
```

此 Patch 用于禁用可能导致问题的 Content-Security-Policy。

```patch
diff --git a/build/out/vs/workbench/contrib/webview/browser/pre/index.html b/build/out/vs/workbench/contrib/webview/browser/pre/index.html
index 20d95d5f..7ad2d215 100644
--- a/build/out/vs/workbench/contrib/webview/browser/pre/index.html
+++ b/build/out/vs/workbench/contrib/webview/browser/pre/index.html
@@ -4,7 +4,7 @@
 <head>
 	<meta charset="UTF-8">

-	<meta http-equiv="Content-Security-Policy"
+	<meta http-equiv="Content-Security-Policy-Report-Only"
 		content="default-src 'none'; script-src 'sha256-ZcIhtIuU4M9PbKfs7w/CLqHimFJRK8L7mYTXOfiUv0I=' 'self'; frame-src 'self'; style-src 'unsafe-inline';">

 	<!-- Disable pinch zooming -->
diff --git a/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html b/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html
index 372f26d5..0fc538ba 100644
--- a/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html
+++ b/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html
@@ -1,7 +1,7 @@
 <!DOCTYPE html>
 <html>
 	<head>
-		<meta http-equiv="Content-Security-Policy" content="
+		<meta http-equiv="Content-Security-Policy-Report-Only" content="
 			default-src 'none';
 			child-src 'self' data: blob:;
 			script-src 'self' 'unsafe-eval' 'sha256-cl8ijlOzEe+0GRCQNJQu2k6nUQ0fAYNYIuuKEm72JDs=' https: http://localhost:* blob:;
```

使用如下`index.html`启动：

注：此案例中添加了[vscode-web-extension-memfs](https://github.com/YieldRay/vscode-web-extension-memfs)扩展。

此处使用的配置禁用了所有在线服务以减少隐私问题和违反微软协议的可能性，并允许用户打开本地文件夹。

```html
<!-- Copyright (C) Microsoft Corporation. All rights reserved. -->
<!-- https://github.com/Felx-B/vscode-web/issues/39 -->
<!-- https://github.com/microsoft/vscode-test-web -->
<!-- https://update.code.visualstudio.com/api/update/web-standalone/stable/latest -->
<!-- Set access-control-allow-origin: * if not working -->
<!-- Use HTTPS if still not working -->
<!DOCTYPE html>
<html>
    <head>
        <script>
            performance.mark("code/didStartRenderer");
        </script>
        <meta charset="utf-8" />

        <!-- Mobile tweaks -->
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Code" />
        <link rel="apple-touch-icon" href="./build/code-192.png" />

        <!-- Disable pinch zooming -->
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />

        <!-- Workbench Configuration -->
        <!--
        <meta
            id="vscode-workbench-web-configuration"
            data-settings='{"productConfiguration":{"enableTelemetry":false,"webEndpointUrlTemplate":"http://{{uuid}}.localhost:3000/static/build","webviewContentExternalBaseUrlTemplate":"http://{{uuid}}.localhost:3000/static/build/out/vs/workbench/contrib/webview/browser/pre/"},"workspaceUri":{"$mid":1,"path":"/default.code-workspace","scheme":"tmp"}}'
        />
        -->

        <!-- Builtin Extensions (running out of sources) -->
        <meta id="vscode-workbench-builtin-extensions" data-settings="[]" />

        <!-- Workbench Icon/Manifest/CSS -->
        <link rel="icon" href="./build/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="./build/manifest.json" />

        <link
            data-name="vs/workbench/workbench.web.main"
            rel="stylesheet"
            href="./build/out/vs/workbench/workbench.web.main.css"
        />
        <style id="vscode-css-modules" type="text/css" media="screen"></style>
    </head>

    <body aria-label=""></body>

    <!-- Startup (do not modify order of script tags!) -->
    <script>
        const url = new URL(window.location.href);
        const path = url.pathname.split("/").slice(0, -1).join("/") + "/";
        const dir = url.origin + path;
        // BASE URL
        const baseUrl = new URL("./build", dir).toString();
        globalThis._VSCODE_FILE_ROOT = baseUrl + "/out/";
        globalThis._VSCODE_WEB_PACKAGE_TTP = window.trustedTypes?.createPolicy(
            "amdLoader",
            {
                createScriptURL(value) {
                    return value;
                },
            },
        );
    </script>
    <script>
        performance.mark("code/willLoadWorkbenchMain");
    </script>
    <script src="./build/out/nls.messages.js"></script>
    <script type="module">
        import {
            create,
            URI,
            Emitter,
        } from "./build/out/vs/workbench/workbench.web.main.internal.js";
        class WorkspaceProvider {
            workspace;
            payload;
            static QUERY_PARAM_EMPTY_WINDOW = "ew";
            static QUERY_PARAM_FOLDER = "folder";
            static QUERY_PARAM_WORKSPACE = "workspace";
            static QUERY_PARAM_PAYLOAD = "payload";
            static create(config) {
                let foundWorkspace = false;
                let workspace;
                let payload = Object.create(null);
                const query = new URL(document.location.href).searchParams;
                query.forEach((value, key) => {
                    switch (key) {
                        case WorkspaceProvider.QUERY_PARAM_FOLDER:
                            workspace = { folderUri: URI.parse(value) };
                            foundWorkspace = true;
                            break;
                        case WorkspaceProvider.QUERY_PARAM_WORKSPACE:
                            workspace = { workspaceUri: URI.parse(value) };
                            foundWorkspace = true;
                            break;
                        case WorkspaceProvider.QUERY_PARAM_EMPTY_WINDOW:
                            workspace = undefined;
                            foundWorkspace = true;
                            break;
                        case WorkspaceProvider.QUERY_PARAM_PAYLOAD:
                            try {
                                payload = JSON.parse(value);
                            } catch (error) {
                                console.error(error);
                            }
                            break;
                    }
                });
                if (!foundWorkspace) {
                    if (config.folderUri) {
                        workspace = { folderUri: URI.revive(config.folderUri) };
                    } else if (config.workspaceUri) {
                        workspace = {
                            workspaceUri: URI.revive(config.workspaceUri),
                        };
                    }
                }
                return new WorkspaceProvider(workspace, payload);
            }
            trusted = true;
            constructor(workspace, payload) {
                this.workspace = workspace;
                this.payload = payload;
            }
            async open(workspace, options) {
                if (
                    options?.reuse &&
                    !options.payload &&
                    this.isSame(this.workspace, workspace)
                ) {
                    return true;
                }
                const targetHref = this.createTargetUrl(workspace, options);
                if (targetHref) {
                    if (options?.reuse) {
                        window.location.href = targetHref;
                        return true;
                    } else {
                        return !!window.open(targetHref);
                    }
                }
                return false;
            }
            createTargetUrl(workspace, options) {
                let targetHref = undefined;
                if (!workspace) {
                    targetHref = `${document.location.origin}${document.location.pathname}?${WorkspaceProvider.QUERY_PARAM_EMPTY_WINDOW}=true`;
                } else if ("folderUri" in workspace) {
                    const queryParamFolder = encodeURIComponent(
                        workspace.folderUri.toString(true),
                    );
                    targetHref = `${document.location.origin}${document.location.pathname}?${WorkspaceProvider.QUERY_PARAM_FOLDER}=${queryParamFolder}`;
                } else if ("workspaceUri" in workspace) {
                    const queryParamWorkspace = encodeURIComponent(
                        workspace.workspaceUri.toString(true),
                    );
                    targetHref = `${document.location.origin}${document.location.pathname}?${WorkspaceProvider.QUERY_PARAM_WORKSPACE}=${queryParamWorkspace}`;
                }
                if (options?.payload) {
                    targetHref += `&${
                        WorkspaceProvider.QUERY_PARAM_PAYLOAD
                    }=${encodeURIComponent(JSON.stringify(options.payload))}`;
                }
                return targetHref;
            }
            isSame(workspaceA, workspaceB) {
                if (!workspaceA || !workspaceB) {
                    return workspaceA === workspaceB;
                }
                if ("folderUri" in workspaceA && "folderUri" in workspaceB) {
                    return this.isEqualURI(
                        workspaceA.folderUri,
                        workspaceB.folderUri,
                    );
                }
                if (
                    "workspaceUri" in workspaceA &&
                    "workspaceUri" in workspaceB
                ) {
                    return this.isEqualURI(
                        workspaceA.workspaceUri,
                        workspaceB.workspaceUri,
                    );
                }
                return false;
            }
            isEqualURI(a, b) {
                return (
                    a.scheme === b.scheme &&
                    a.authority === b.authority &&
                    a.path === b.path
                );
            }
        }
        class LocalStorageURLCallbackProvider {
            _callbackRoute;
            static REQUEST_ID = 0;
            static QUERY_KEYS = [
                "scheme",
                "authority",
                "path",
                "query",
                "fragment",
            ];
            _onCallback = new Emitter();
            onCallback = this._onCallback.event;
            pendingCallbacks = new Set();
            lastTimeChecked = Date.now();
            checkCallbacksTimeout = undefined;
            onDidChangeLocalStorageDisposable;
            constructor(_callbackRoute) {
                this._callbackRoute = _callbackRoute;
            }
            create(options = {}) {
                const id = ++LocalStorageURLCallbackProvider.REQUEST_ID;
                const queryParams = [`vscode-reqid=${id}`];
                for (const key of LocalStorageURLCallbackProvider.QUERY_KEYS) {
                    const value = options[key];
                    if (value) {
                        queryParams.push(
                            `vscode-${key}=${encodeURIComponent(value)}`,
                        );
                    }
                }
                if (
                    !(
                        options.authority === "vscode.github-authentication" &&
                        options.path === "/dummy"
                    )
                ) {
                    const key = `vscode-web.url-callbacks[${id}]`;
                    localStorage.removeItem(key);
                    this.pendingCallbacks.add(id);
                    this.startListening();
                }
                return URI.parse(window.location.href).with({
                    path: this._callbackRoute,
                    query: queryParams.join("&"),
                });
            }
            startListening() {
                if (this.onDidChangeLocalStorageDisposable) {
                    return;
                }
                const fn = () => this.onDidChangeLocalStorage();
                window.addEventListener("storage", fn);
                this.onDidChangeLocalStorageDisposable = {
                    dispose: () => window.removeEventListener("storage", fn),
                };
            }
            stopListening() {
                this.onDidChangeLocalStorageDisposable?.dispose();
                this.onDidChangeLocalStorageDisposable = undefined;
            }
            async onDidChangeLocalStorage() {
                const ellapsed = Date.now() - this.lastTimeChecked;
                if (ellapsed > 1000) {
                    this.checkCallbacks();
                } else if (this.checkCallbacksTimeout === undefined) {
                    this.checkCallbacksTimeout = setTimeout(() => {
                        this.checkCallbacksTimeout = undefined;
                        this.checkCallbacks();
                    }, 1000 - ellapsed);
                }
            }
            checkCallbacks() {
                let pendingCallbacks;
                for (const id of this.pendingCallbacks) {
                    const key = `vscode-web.url-callbacks[${id}]`;
                    const result = localStorage.getItem(key);
                    if (result !== null) {
                        try {
                            this._onCallback.fire(
                                URI.revive(JSON.parse(result)),
                            );
                        } catch (error) {
                            console.error(error);
                        }
                        pendingCallbacks =
                            pendingCallbacks ?? new Set(this.pendingCallbacks);
                        pendingCallbacks.delete(id);
                        localStorage.removeItem(key);
                    }
                }
                if (pendingCallbacks) {
                    this.pendingCallbacks = pendingCallbacks;
                    if (this.pendingCallbacks.size === 0) {
                        this.stopListening();
                    }
                }
                this.lastTimeChecked = Date.now();
            }
            dispose() {
                this._onCallback.dispose();
            }
        }
        /**
        (function () {
            const configElement = window.document.getElementById(
                "vscode-workbench-web-configuration"
            );
            const configElementAttribute = configElement
                ? configElement.getAttribute("data-settings")
                : undefined;
            if (!configElement || !configElementAttribute) {
                throw new Error("Missing web configuration element");
            }
            const config = JSON.parse(configElementAttribute);
            create(window.document.body, {
                ...config,
                workspaceProvider: WorkspaceProvider.create(config),
                urlCallbackProvider: new LocalStorageURLCallbackProvider(
                    config.callbackRoute
                ),
            });
        })();
        */
        (function () {
            const url = new URL(window.location.href);
            const path = url.pathname.split("/").slice(0, -1).join("/") + "/";
            const dir = url.origin + path;
            const config = {
                // https://github.com/microsoft/vscode/blob/main/src/vs/workbench/browser/web.api.ts#L149
                authenticationProviders: false,
                tunnelProvider: false,
                settingsSyncOptions: false,
                // https://github.com/microsoft/vscode/blob/main/src/vs/base/common/product.ts#L66
                productConfiguration: {
                    nameShort: "Not VSCode",
                    nameLong: "Not Visual Studio Code",
                    enableTelemetry: false,
                    webEndpointUrlTemplate: `${dir}build`,
                    webviewContentExternalBaseUrlTemplate: `${dir}build/out/vs/workbench/contrib/webview/browser/pre/`,
                    extensionsGallery: false, // CORS breaks gallery
                    tasConfig: false, // AB Testing
                    mcpGallery: false,
                    aiConfig: false,
                    chatParticipantRegistry: false,
                    "configurationSync.store": false,
                    enableSyncingProfiles: false,
                    "editSessions.store": false,
                    extensionEnabledApiProposals: {
                        "YieldRay.vscode-web-extension-memfs": [
                            "fileSearchProvider",
                            "textSearchProvider",
                        ],
                    },
                },
                workspaceUri: {
                    $mid: 1,
                    path: "/default.code-workspace",
                    scheme: "tmp",
                },
                additionalBuiltinExtensions: [
                    {
                        scheme: location.protocol.replace(":", ""),
                        authority: location.host,
                        path: location.pathname + "vscode-web-extension-memfs",
                    },
                ],
                // If you really need an out-of-box place to write stuff:
                // folderUri: { scheme: "vscode-userdata", path: "/" },
            };
            create(window.document.body, {
                ...config,
                workspaceProvider: WorkspaceProvider.create(config),
                urlCallbackProvider: new LocalStorageURLCallbackProvider(
                    config.callbackRoute,
                ),
            });
        })();
    </script>
</html>
```

为了使扩展主机和 Webview 可用，除了应用上面的 Patch，还需要设置`access-control-allow-origin: *`并使用 HTTPS。

注：对官方构建进行自定义部署和修补可能违反微软许可协议。此方法仅为 PoC，不适用于非个人使用。

虽然官方测试 Web 示例提供了下面的可选 Header，但是没有发现必要性：

- `cross-origin-opener-policy: same-origin`
- `cross-origin-embedder-policy: require-corp`
- `cross-origin-resource-policy: cross-origin`
