"use strict";var Q=Object.create;var P=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty;var te=(e,i)=>{for(var r in i)P(e,r,{get:i[r],enumerable:!0})},L=(e,i,r,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of ee(i))!re.call(e,n)&&n!==r&&P(e,n,{get:()=>i[n],enumerable:!(o=X(i,n))||o.enumerable});return e};var x=(e,i,r)=>(r=e!=null?Q(ie(e)):{},L(i||!e||!e.__esModule?P(r,"default",{value:e,enumerable:!0}):r,e)),oe=e=>L(P({},"__esModule",{value:!0}),e);var be={};te(be,{activate:()=>he});module.exports=oe(be);var u=x(require("vscode"));var c=x(require("vscode"));function W(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _(){if(typeof crypto.randomUUID=="function")return crypto.randomUUID.bind(crypto)();let e=new Uint8Array(16),i=[];for(let n=0;n<256;n++)i.push(n.toString(16).padStart(2,"0"));crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;let r=0,o="";return o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o}function E(e){for(;e.length;)e.pop()?.dispose()}var C=class{_isDisposed=!1;_disposables=[];dispose(){this._isDisposed||(this._isDisposed=!0,E(this._disposables))}_register(i){return this._isDisposed?i.dispose():this._disposables.push(i),i}get isDisposed(){return this._isDisposed}};var R=x(require("vscode")),h="markdown-mermaid";var ne="vscode",se=["vscode","base","forest","dark","default","neutral"];function j(e){return typeof e=="string"&&se.includes(e)?e:ne}function z(){let e=R.workspace.getConfiguration(h);return{darkModeTheme:j(e.get("darkModeTheme")),lightModeTheme:j(e.get("lightModeTheme")),maxTextSize:e.get("maxTextSize"),clickDrag:e.get("mouseNavigation.enabled","alt"),showControls:e.get("controls.show","onHoverOrFocus"),resizable:e.get("resizable",!0),maxHeight:e.get("maxHeight","")}}function B(e){let i=e.renderer.render;return e.renderer.render=function(...r){return`${b()}
				${i.apply(e.renderer,r)}`},e}function b(){let e=ae(JSON.stringify(z()));return`<span id="${h}" aria-hidden="true" data-config="${e}"></span>`}function ae(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var de="text/vnd.mermaid",ce="vscode.mermaid-markdown-features.chatOutputItem",O=class{constructor(i,r){this._extensionUri=i;this._webviewManager=r}_extensionUri;_webviewManager;async renderChatOutput({value:i},r,o,n){let t=r.webview,s=pe(i),l=s.source,v=s.title,a=_(),f=[];f.push(this._webviewManager.registerWebview(a,t,l,v,"chat")),f.push(t.onDidReceiveMessage(p=>{p.type==="openInEditor"&&c.commands.executeCommand("_mermaid-markdown.openInEditor",{mermaidWebviewId:a})})),r.onDidDispose(()=>{E(f)});let m=c.Uri.joinPath(this._extensionUri,"chat-webview-out");t.options={enableScripts:!0,localResourceRoots:[m]};let w=_(),I=c.Uri.joinPath(m,"index.js"),$=t.asWebviewUri(c.Uri.joinPath(m,"codicon.css")),M=c.l10n.t("Open Diagram in Editor");t.html=`
			<!DOCTYPE html>
			<html lang="en">

			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Mermaid Diagram</title>
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; script-src 'nonce-${w}'; style-src ${t.cspSource} 'unsafe-inline'; font-src data:;" />
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
					body:hover .open-in-editor-btn,
					.open-in-editor-btn:focus {
						opacity: 1;
					}
					.open-in-editor-btn:hover {
						opacity: 1;
						background: var(--vscode-toolbar-hoverBackground);
					}
				</style>
			</head>

			<body data-vscode-context='${JSON.stringify({preventDefaultContextMenuItems:!0,mermaidWebviewId:a})}' data-vscode-mermaid-webview-id="${a}">
				${b()}
				<button class="open-in-editor-btn" title="${M}" aria-label="${M}"><i class="codicon codicon-open-preview" aria-hidden="true"></i></button>
				<pre class="mermaid">
					${W(l)}
				</pre>

				<script type="module" nonce="${w}" src="${t.asWebviewUri(I)}"><\/script>
			</body>
			</html>`}};function F(e,i,r){let o=[];o.push(c.commands.registerCommand("_mermaid-markdown.openInEditor",t=>{if(typeof t?.mermaidSource=="string"){r.openPreview(t.mermaidSource,typeof t.title=="string"?t.title:void 0);return}let s=t?.mermaidWebviewId?i.getWebview(t.mermaidWebviewId):i.activeWebview;s&&r.openPreview(s.mermaidSource,s.title)})),o.push(c.lm.registerTool("renderMermaidDiagram",{invoke:async(t,s)=>{let l=t.input.markup,v=t.input.title;return me(l,v)}}));let n=new O(e.extensionUri,i);return o.push(c.chat.registerChatOutputRenderer(ce,n)),c.Disposable.from(...o)}function me(e,i){let r=le(e),o=new c.LanguageModelToolResult([new c.LanguageModelTextPart(`${r}mermaid
${e}
${r}`)]),n=JSON.stringify({source:e,title:i});return o.toolResultDetails2={mime:de,value:new TextEncoder().encode(n)},o}function le(e){let i=e.matchAll(/`+/g);if(!i)return"```";let r=Math.max(...Array.from(i,o=>o[0].length));return"`".repeat(Math.max(3,r+1))}function pe(e){let i=new TextDecoder().decode(e);try{let r=JSON.parse(i);if(typeof r=="object"&&typeof r.source=="string")return{title:r.title,source:r.source}}catch{}return{title:void 0,source:i}}var d=x(require("vscode"));var Z="vscode.mermaid-markdown-features.preview",S=class extends C{constructor(r,o){super();this._extensionUri=r;this._webviewManager=o;this._register(d.window.registerWebviewPanelSerializer(Z,this))}_extensionUri;_webviewManager;_previews=new Map;openPreview(r,o){let n=N(r),t=this._previews.get(n);if(t){t.reveal();return}let s=D.create(n,r,o,this._extensionUri,this._webviewManager,d.ViewColumn.Active);this._registerPreview(s)}async deserializeWebviewPanel(r,o){if(!o?.mermaidSource){r.webview.html=this._getErrorHtml();return}let n=N(o.mermaidSource),t=D.revive(r,n,o.mermaidSource,this._extensionUri,this._webviewManager);this._registerPreview(t)}_registerPreview(r){this._previews.set(r.diagramId,r),r.onDispose(()=>{this._previews.delete(r.diagramId)})}_getErrorHtml(){return`<!DOCTYPE html>
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
			</html>`}dispose(){super.dispose();for(let r of this._previews.values())r.dispose();this._previews.clear()}},D=class e extends C{constructor(r,o,n,t,s){super();this._webviewPanel=r;this.diagramId=o;this._mermaidSource=n;this._extensionUri=t;this._webviewManager=s;this._webviewPanel.iconPath=new d.ThemeIcon("graph"),this._webviewPanel.webview.options={enableScripts:!0,localResourceRoots:[d.Uri.joinPath(this._extensionUri,"chat-webview-out")]},this._webviewPanel.webview.html=this._getHtml(),this._register(this._webviewManager.registerWebview(this.diagramId,this._webviewPanel.webview,this._mermaidSource,void 0,"editor")),this._register(this._webviewPanel.onDidChangeViewState(l=>{l.webviewPanel.active&&this._webviewManager.setActiveWebview(this.diagramId)})),this._register(this._webviewPanel.onDidDispose(()=>{this._onDisposeEmitter.fire(),this.dispose()}))}_webviewPanel;diagramId;_mermaidSource;_extensionUri;_webviewManager;_onDisposeEmitter=this._register(new d.EventEmitter);onDispose=this._onDisposeEmitter.event;static create(r,o,n,t,s,l){let v=d.window.createWebviewPanel(Z,n??d.l10n.t("Mermaid Diagram"),l,{retainContextWhenHidden:!1});return new e(v,r,o,t,s)}static revive(r,o,n,t,s){return new e(r,o,n,t,s)}reveal(){this._webviewPanel.reveal()}dispose(){this._onDisposeEmitter.fire(),super.dispose(),this._webviewPanel.dispose()}_getHtml(){let r=_(),o=d.Uri.joinPath(this._extensionUri,"chat-webview-out"),n=this._webviewPanel.webview.asWebviewUri(d.Uri.joinPath(o,"index-editor.js")),t=this._webviewPanel.webview.asWebviewUri(d.Uri.joinPath(o,"codicon.css")),s=d.l10n.t("Toggle Pan Mode"),l=d.l10n.t("Zoom Out"),v=d.l10n.t("Zoom In"),a=d.l10n.t("Reset Pan and Zoom");return`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Mermaid Diagram</title>
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; script-src 'nonce-${r}'; style-src ${this._webviewPanel.webview.cspSource} 'unsafe-inline'; font-src data:;" />
				<link rel="stylesheet" type="text/css" href="${t}">
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
					.zoom-controls button.active {
						background: var(--vscode-toolbar-activeBackground);
						color: var(--vscode-focusBorder);
					}
				</style>
			</head>
			<body data-vscode-context='${JSON.stringify({preventDefaultContextMenuItems:!0,mermaidWebviewId:this.diagramId})}' data-vscode-mermaid-webview-id="${this.diagramId}">
				${b()}
				<div class="zoom-controls">
					<button class="pan-mode-btn" title="${s}" aria-label="${s}" aria-pressed="false"><i class="codicon codicon-move" aria-hidden="true"></i></button>
					<button class="zoom-out-btn" title="${l}" aria-label="${l}"><i class="codicon codicon-zoom-out" aria-hidden="true"></i></button>
					<button class="zoom-in-btn" title="${v}" aria-label="${v}"><i class="codicon codicon-zoom-in" aria-hidden="true"></i></button>
					<button class="zoom-reset-btn" title="${a}" aria-label="${a}"><i class="codicon codicon-screen-normal" aria-hidden="true"></i></button>
				</div>
				<pre class="mermaid">
					${W(this._mermaidSource)}
				</pre>
				<script type="module" nonce="${r}" src="${n}"><\/script>
			</body>
			</html>`}};function N(e){let i=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);i=(i<<5)-i+o,i=i&i}return Math.abs(i).toString(16)}var y=x(require("vscode"));function V(e){return`<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<style>
		html, body { height: 100%; margin: 0; padding: 0; }
		/* The body scrolls; Mermaid's hidden tooltip, appended to the body, must not make the document scroll. */
		html { overflow: hidden; }
		body { overflow: auto; }
		#markdown-mermaid { display: none; }
		main { display: flex; min-height: 100%; }
		main > .mermaid { margin: auto; width: 100%; }
		main > .mermaid > svg { display: block; margin: 0 auto; }
		.mermaid-error { margin: 0; padding: 8px; white-space: pre-wrap; overflow-wrap: anywhere; color: var(--vscode-errorForeground); }
	</style>
</head>
<body>
	${e}
	<main aria-label="Mermaid diagram" aria-busy="true"></main>
	<script type="module" src="./index.js"><\/script>
</body>
</html>`}var q="mermaid",ve=1e4,T=class{constructor(i){this._extensionUri=i}_extensionUri;_onDidChange=new y.EventEmitter;onDidChange=this._onDidChange.event;_configurationListener=y.workspace.onDidChangeConfiguration(i=>{i.affectsConfiguration(h)&&this._onDidChange.fire()});resolve(){let i=z(),r=V(b());return{content:{html:r,baseUri:y.Uri.joinPath(this._extensionUri,"markdown-editor-out")},contentType:"text",runtimeKey:`vscode.mermaid-markdown-features/${ge(r)}`,initialHeight:150,presentation:{resizable:i.resizable,fullWidth:!0,fullView:!0,maxAutomaticHeight:ue(i.maxHeight)}}}dispose(){this._configurationListener.dispose(),this._onDidChange.dispose()}};function ue(e){let i=/^\s*(\d+(?:\.\d+)?)\s*(?:px)?\s*$/i.exec(e),r=i?Number(i[1]):NaN;return r>0?Math.min(r,ve):void 0}function ge(e){let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r)|0;return(i>>>0).toString(16)}var H="mermaid",A="mermaidContainer";function Y(e,i){e.use(o=>{function n(t,s,l,v){let a,f=!1,m=t.bMarks[s]+t.tShift[s],w=t.eMarks[s];if(t.src.charCodeAt(m)!==58)return!1;for(a=m+1;a<=w&&":"[(a-m)%1]===t.src[a];a++);let I=Math.floor((a-m)/1);if(I<3)return!1;a-=(a-m)%1;let $=t.src.slice(m,a),M=t.src.slice(a,w);if(M.trim().split(" ")[0].toLowerCase()!==H)return!1;if(v)return!0;let p=s;for(;p++,!(p>=l||(m=t.bMarks[p]+t.tShift[p],w=t.eMarks[p],m<w&&t.sCount[p]<t.blkIndent));)if(t.src.charCodeAt(m)===58&&!(t.sCount[p]-t.blkIndent>=4)){for(a=m+1;a<=w&&":"[(a-m)%1]===t.src[a];a++);if(!(Math.floor((a-m)/1)<I)&&(a-=(a-m)%1,a=t.skipSpaces(a),!(a<w))){f=!0;break}}let K=t.parentType,G=t.lineMax;t.parentType="container",t.lineMax=p;let k=t.push(A,"div",1);return k.markup=$,k.block=!0,k.info=M,k.map=[s,p],k.content=t.getLines(s+1,p,t.blkIndent,!0),t.parentType=K,t.lineMax=G,t.line=p+(f?1:0),!0}o.block.ruler.before("fence",A,n,{alt:["paragraph","reference","blockquote","list"]}),o.renderer.rules[A]=(t,s)=>{let v=t[s].content;return`<div class="${H}">${J(v)}</div>`}});let r=e.options.highlight;return e.options.highlight=(o,n,t)=>{let s=new RegExp("\\b("+i.languageIds().map(we).join("|")+")\\b","i");return n&&s.test(n)?`<pre class="${H}" style="all: unset;">${J(o)}</pre>`:r?.(o,n,t)??o},e}function J(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n+$/,"").trimStart()}function we(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var U=class{_activeWebviewId;_webviews=new Map;get activeWebview(){return this._activeWebviewId?this._webviews.get(this._activeWebviewId):void 0}registerWebview(i,r,o,n,t){if(this._webviews.has(i))throw new Error(`Webview with id ${i} is already registered.`);let s={id:i,webview:r,mermaidSource:o,title:n,type:t};return this._webviews.set(i,s),{dispose:()=>this.unregisterWebview(i)}}unregisterWebview(i){this._webviews.delete(i),this._activeWebviewId===i&&(this._activeWebviewId=void 0)}setActiveWebview(i){this._webviews.has(i)&&(this._activeWebviewId=i)}getWebview(i){return this._webviews.get(i)}resetPanZoom(i){(i?this._webviews.get(i):this.activeWebview)?.webview.postMessage({type:"resetPanZoom"})}};function he(e){let i=new U,r=new S(e.extensionUri,i);e.subscriptions.push(r);let o=new T(e.extensionUri);return e.subscriptions.push(o),e.subscriptions.push(F(e,i,r)),e.subscriptions.push(u.commands.registerCommand("_mermaid-markdown.resetPanZoom",n=>{i.resetPanZoom(n?.mermaidWebviewId)})),e.subscriptions.push(u.commands.registerCommand("_mermaid-markdown.copySource",n=>{if(typeof n?.mermaidSource=="string"){u.env.clipboard.writeText(n.mermaidSource);return}let t=n?.mermaidWebviewId?i.getWebview(n.mermaidWebviewId):i.activeWebview;t&&u.env.clipboard.writeText(t.mermaidSource)})),e.subscriptions.push(u.workspace.onDidChangeConfiguration(n=>{n.affectsConfiguration(`${h}.languages`)&&u.commands.executeCommand("markdown.api.reloadPlugins"),(n.affectsConfiguration(h)||n.affectsConfiguration("workbench.colorTheme"))&&u.commands.executeCommand("markdown.preview.refresh")})),{extendMarkdownIt(n){return Y(n,{languageIds:()=>u.workspace.getConfiguration(h).get("languages",["mermaid"])}),n.use(B),n},markdownCodeBlockEditors:{apiV1:{getProvider:n=>n===q?o:void 0}}}}
//# sourceMappingURL=extension.js.map
