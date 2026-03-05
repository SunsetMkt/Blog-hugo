"use strict";var k=Object.create;var b=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var A=(t,e)=>{for(var i in e)b(t,i,{get:e[i],enumerable:!0})},D=(t,e,i,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of O(e))!j.call(t,o)&&o!==i&&b(t,o,{get:()=>e[o],enumerable:!(r=z(e,o))||r.enumerable});return t};var W=(t,e,i)=>(i=t!=null?k(R(t)):{},D(e||!t||!t.__esModule?b(i,"default",{value:t,enumerable:!0}):i,t)),H=t=>D(b({},"__esModule",{value:!0}),t);var N={};A(N,{activate:()=>L});module.exports=H(N);var w=W(require("vscode"));var n=W(require("vscode"));function h(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function m(){if(typeof crypto.randomUUID=="function")return crypto.randomUUID.bind(crypto)();let t=new Uint8Array(16),e=[];for(let o=0;o<256;o++)e.push(o.toString(16).padStart(2,"0"));crypto.getRandomValues(t),t[6]=t[6]&15|64,t[8]=t[8]&63|128;let i=0,r="";return r+=e[t[i++]],r+=e[t[i++]],r+=e[t[i++]],r+=e[t[i++]],r+="-",r+=e[t[i++]],r+=e[t[i++]],r+="-",r+=e[t[i++]],r+=e[t[i++]],r+="-",r+=e[t[i++]],r+=e[t[i++]],r+="-",r+=e[t[i++]],r+=e[t[i++]],r+=e[t[i++]],r+=e[t[i++]],r+=e[t[i++]],r+=e[t[i++]],r}function M(t){for(;t.length;)t.pop()?.dispose()}var p=class{_isDisposed=!1;_disposables=[];dispose(){this._isDisposed||(this._isDisposed=!0,M(this._disposables))}_register(e){return this._isDisposed?e.dispose():this._disposables.push(e),e}get isDisposed(){return this._isDisposed}};var Z="text/vnd.mermaid",F="vscode.chat-mermaid-features.chatOutputItem",P=class{constructor(e,i){this._extensionUri=e;this._webviewManager=i}async renderChatOutput({value:e},i,r,o){let s=i.webview,d=J(e),c=d.source,l=d.title,u=m(),_=[];_.push(this._webviewManager.registerWebview(u,s,c,l,"chat")),_.push(s.onDidReceiveMessage(E=>{E.type==="openInEditor"&&n.commands.executeCommand("_mermaid-chat.openInEditor",{mermaidWebviewId:u})})),i.onDidDispose(()=>{M(_)});let x=n.Uri.joinPath(this._extensionUri,"chat-webview-out");s.options={enableScripts:!0,localResourceRoots:[x]};let I=m(),T=n.Uri.joinPath(x,"index.js"),$=s.asWebviewUri(n.Uri.joinPath(x,"codicon.css"));s.html=`
			<!DOCTYPE html>
			<html lang="en">

			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Mermaid Diagram</title>
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'nonce-${I}'; style-src ${s.cspSource} 'unsafe-inline'; font-src data:;" />
				<link rel="stylesheet" type="text/css" href="${$}">

				<style>
					body {
						padding: 0;
					}
					.mermaid {
						visibility: hidden;
					}
					.mermaid.rendered {
						visibility: visible;
					}
					.open-in-editor-btn {
						position: absolute;
						top: 8px;
						right: 8px;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 26px;
						height: 26px;
						background: var(--vscode-editorWidget-background);
						color: var(--vscode-icon-foreground);
						border: 1px solid var(--vscode-editorWidget-border);
						border-radius: 6px;
						cursor: pointer;
						z-index: 100;
						opacity: 0;
						transition: opacity 0.2s;
					}
					body:hover .open-in-editor-btn {
						opacity: 1;
					}
					.open-in-editor-btn:hover {
						opacity: 1;
						background: var(--vscode-toolbar-hoverBackground);
					}
				</style>
			</head>

			<body data-vscode-context='${JSON.stringify({preventDefaultContextMenuItems:!0,mermaidWebviewId:u})}' data-vscode-mermaid-webview-id="${u}">
				<button class="open-in-editor-btn" title="${n.l10n.t("Open in Editor")}"><i class="codicon codicon-open-preview"></i></button>
				<pre class="mermaid">
					${h(c)}
				</pre>

				<script type="module" nonce="${I}" src="${s.asWebviewUri(T)}"><\/script>
			</body>
			</html>`}};function U(t,e,i){let r=[];r.push(n.commands.registerCommand("_mermaid-chat.openInEditor",s=>{let d=s?.mermaidWebviewId?e.getWebview(s.mermaidWebviewId):e.activeWebview;d&&i.openPreview(d.mermaidSource,d.title)})),r.push(n.lm.registerTool("renderMermaidDiagram",{invoke:async(s,d)=>{let c=s.input.markup,l=s.input.title;return V(c,l)}}));let o=new P(t.extensionUri,e);return r.push(n.chat.registerChatOutputRenderer(F,o)),n.Disposable.from(...r)}function V(t,e){let i=q(t),r=new n.LanguageModelToolResult([new n.LanguageModelTextPart(`${i}mermaid
${t}
${i}`)]),o=JSON.stringify({source:t,title:e});return r.toolResultDetails2={mime:Z,value:new TextEncoder().encode(o)},r}function q(t){let e=t.matchAll(/`+/g);if(!e)return"```";let i=Math.max(...Array.from(e,r=>r[0].length));return"`".repeat(Math.max(3,i+1))}function J(t){let e=new TextDecoder().decode(t);try{let i=JSON.parse(e);if(typeof i=="object"&&typeof i.source=="string")return{title:i.title,source:i.source}}catch{}return{title:void 0,source:e}}var a=W(require("vscode"));var C="vscode.chat-mermaid-features.preview",g=class extends p{constructor(i,r){super();this._extensionUri=i;this._webviewManager=r;this._register(a.window.registerWebviewPanelSerializer(C,this))}_previews=new Map;openPreview(i,r){let o=S(i),s=this._previews.get(o);if(s){s.reveal();return}let d=f.create(o,i,r,this._extensionUri,this._webviewManager,a.ViewColumn.Active);this._registerPreview(d)}async deserializeWebviewPanel(i,r){if(!r?.mermaidSource){i.webview.html=this._getErrorHtml();return}let o=S(r.mermaidSource),s=f.revive(i,o,r.mermaidSource,this._extensionUri,this._webviewManager);this._registerPreview(s)}_registerPreview(i){this._previews.set(i.diagramId,i),i.onDispose(()=>{this._previews.delete(i.diagramId)})}_getErrorHtml(){return`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Mermaid Preview</title>
				<meta http-equiv="Content-Security-Policy" content="default-src 'none';">
				<style>
					body {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						margin: 0;
					}
				</style>
			</head>
			<body>
				<p>An unexpected error occurred while restoring the Mermaid preview.</p>
			</body>
			</html>`}dispose(){super.dispose();for(let i of this._previews.values())i.dispose();this._previews.clear()}},f=class t extends p{constructor(i,r,o,s,d){super();this._webviewPanel=i;this.diagramId=r;this._mermaidSource=o;this._extensionUri=s;this._webviewManager=d;this._webviewPanel.iconPath=new a.ThemeIcon("graph"),this._webviewPanel.webview.options={enableScripts:!0,localResourceRoots:[a.Uri.joinPath(this._extensionUri,"chat-webview-out")]},this._webviewPanel.webview.html=this._getHtml(),this._register(this._webviewManager.registerWebview(this.diagramId,this._webviewPanel.webview,this._mermaidSource,void 0,"editor")),this._register(this._webviewPanel.onDidChangeViewState(c=>{c.webviewPanel.active&&this._webviewManager.setActiveWebview(this.diagramId)})),this._register(this._webviewPanel.onDidDispose(()=>{this._onDisposeEmitter.fire(),this.dispose()}))}_onDisposeEmitter=this._register(new a.EventEmitter);onDispose=this._onDisposeEmitter.event;static create(i,r,o,s,d,c){let l=a.window.createWebviewPanel(C,o??a.l10n.t("Mermaid Diagram"),c,{retainContextWhenHidden:!1});return new t(l,i,r,s,d)}static revive(i,r,o,s,d){return new t(i,r,o,s,d)}reveal(){this._webviewPanel.reveal()}dispose(){this._onDisposeEmitter.fire(),super.dispose(),this._webviewPanel.dispose()}_getHtml(){let i=m(),r=a.Uri.joinPath(this._extensionUri,"chat-webview-out"),o=this._webviewPanel.webview.asWebviewUri(a.Uri.joinPath(r,"index-editor.js")),s=this._webviewPanel.webview.asWebviewUri(a.Uri.joinPath(r,"codicon.css"));return`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Mermaid Diagram</title>
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'nonce-${i}'; style-src ${this._webviewPanel.webview.cspSource} 'unsafe-inline'; font-src data:;" />
				<link rel="stylesheet" type="text/css" href="${s}">
				<style>
					html, body {
						margin: 0;
						padding: 0;
						height: 100%;
						width: 100%;
						overflow: hidden;
					}
					.mermaid {
						visibility: hidden;
					}
					.mermaid.rendered {
						visibility: visible;
					}
					.mermaid-wrapper {
						height: 100%;
						width: 100%;
					}
					.zoom-controls {
						position: absolute;
						top: 8px;
						right: 8px;
						display: flex;
						gap: 2px;
						z-index: 100;
						background: var(--vscode-editorWidget-background);
						border: 1px solid var(--vscode-editorWidget-border);
						border-radius: 6px;
						padding: 3px;
					}
					.zoom-controls button {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 26px;
						height: 26px;
						background: transparent;
						color: var(--vscode-icon-foreground);
						border: none;
						border-radius: 4px;
						cursor: pointer;
					}
					.zoom-controls button:hover {
						background: var(--vscode-toolbar-hoverBackground);
					}
				</style>
			</head>
			<body data-vscode-context='${JSON.stringify({preventDefaultContextMenuItems:!0,mermaidWebviewId:this.diagramId})}' data-vscode-mermaid-webview-id="${this.diagramId}">
				<div class="zoom-controls">
					<button class="zoom-out-btn" title="${a.l10n.t("Zoom Out")}"><i class="codicon codicon-zoom-out"></i></button>
					<button class="zoom-in-btn" title="${a.l10n.t("Zoom In")}"><i class="codicon codicon-zoom-in"></i></button>
					<button class="zoom-reset-btn" title="${a.l10n.t("Reset Zoom")}"><i class="codicon codicon-screen-normal"></i></button>
				</div>
				<pre class="mermaid">
					${h(this._mermaidSource)}
				</pre>
				<script type="module" nonce="${i}" src="${o}"><\/script>
			</body>
			</html>`}};function S(t){let e=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);e=(e<<5)-e+r,e=e&e}return Math.abs(e).toString(16)}var y=class{_activeWebviewId;_webviews=new Map;get activeWebview(){return this._activeWebviewId?this._webviews.get(this._activeWebviewId):void 0}registerWebview(e,i,r,o,s){if(this._webviews.has(e))throw new Error(`Webview with id ${e} is already registered.`);let d={id:e,webview:i,mermaidSource:r,title:o,type:s};return this._webviews.set(e,d),{dispose:()=>this.unregisterWebview(e)}}unregisterWebview(e){this._webviews.delete(e),this._activeWebviewId===e&&(this._activeWebviewId=void 0)}setActiveWebview(e){this._webviews.has(e)&&(this._activeWebviewId=e)}getWebview(e){return this._webviews.get(e)}resetPanZoom(e){(e?this._webviews.get(e):this.activeWebview)?.webview.postMessage({type:"resetPanZoom"})}};function L(t){let e=new y,i=new g(t.extensionUri,e);t.subscriptions.push(i),t.subscriptions.push(U(t,e,i)),t.subscriptions.push(w.commands.registerCommand("_mermaid-chat.resetPanZoom",r=>{e.resetPanZoom(r?.mermaidWebviewId)})),t.subscriptions.push(w.commands.registerCommand("_mermaid-chat.copySource",r=>{let o=r?.mermaidWebviewId?e.getWebview(r.mermaidWebviewId):e.activeWebview;o&&w.env.clipboard.writeText(o.mermaidSource)}))}
//# sourceMappingURL=extension.js.map
