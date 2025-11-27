# VSCode Web

* Copyright (C) Microsoft Corporation. All rights reserved.
* <https://github.com/Felx-B/vscode-web/issues/39>
* <https://github.com/microsoft/vscode-test-web>
* <https://update.code.visualstudio.com/api/update/web-standalone/stable/latest>
* Set `access-control-allow-origin: *` if not working.
* Use HTTPS if still not working.
* `productVersion`: `1.106.2`
* It just works and with no warranty.
* Keep `index.html`. It's customized. Replace `build` when upgrade.
* For demonstration purpose only. This page is not affiliated with Microsoft, nor the Visual Studio Code project.
* Alternative: [@github1s/vscode-web](https://www.npmjs.com/package/@github1s/vscode-web) seems to have all essential patches.

## Patches

May break security, but it's just a static page.

```patch
diff --git a/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html b/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html
index 9f3f70dc..20d95d5f 100644
--- a/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html
+++ b/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html
@@ -391,7 +391,7 @@
 					throw err instanceof Error ? err : new Error(String(err));
 				}
 
-				if (hostname === parentOriginHash || hostname.startsWith(parentOriginHash + '.')) {
+				if (hostname === parentOriginHash || hostname.startsWith(parentOriginHash + '.') || location.origin === parentOrigin) {
 					// validation succeeded!
 					return start(parentOrigin);
 				}
```

```patch
diff --git a/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html b/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html
index 20d95d5f..7ad2d215 100644
--- a/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html
+++ b/static/tools/vscode/build/out/vs/workbench/contrib/webview/browser/pre/index.html
@@ -4,7 +4,7 @@
 <head>
 	<meta charset="UTF-8">
 
-	<meta http-equiv="Content-Security-Policy"
+	<meta http-equiv="Content-Security-Policy-Report-Only"
 		content="default-src 'none'; script-src 'sha256-ZcIhtIuU4M9PbKfs7w/CLqHimFJRK8L7mYTXOfiUv0I=' 'self'; frame-src 'self'; style-src 'unsafe-inline';">
 
 	<!-- Disable pinch zooming -->
diff --git a/static/tools/vscode/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html b/static/tools/vscode/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html
index 372f26d5..0fc538ba 100644
--- a/static/tools/vscode/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html
+++ b/static/tools/vscode/build/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html
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
