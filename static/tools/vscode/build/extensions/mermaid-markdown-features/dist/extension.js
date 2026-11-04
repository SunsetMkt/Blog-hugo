"use strict";var G=Object.create;var I=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var re=(e,i)=>{for(var r in i)I(e,r,{get:i[r],enumerable:!0})},A=(e,i,r,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of X(i))!ie.call(e,n)&&n!==r&&I(e,n,{get:()=>i[n],enumerable:!(o=Q(i,n))||o.enumerable});return e};var k=(e,i,r)=>(r=e!=null?G(ee(e)):{},A(i||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),te=e=>A(I({},"__esModule",{value:!0}),e);var he={};re(he,{activate:()=>we});module.exports=te(he);var u=k(require("vscode"));var c=k(require("vscode"));function P(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function x(){if(typeof crypto.randomUUID=="function")return crypto.randomUUID.bind(crypto)();let e=new Uint8Array(16),i=[];for(let n=0;n<256;n++)i.push(n.toString(16).padStart(2,"0"));crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;let r=0,o="";return o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+="-",o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o+=i[e[r++]],o}function $(e){for(;e.length;)e.pop()?.dispose()}var _=class{_isDisposed=!1;_disposables=[];dispose(){this._isDisposed||(this._isDisposed=!0,$(this._disposables))}_register(i){return this._isDisposed?i.dispose():this._disposables.push(i),i}get isDisposed(){return this._isDisposed}};var j=k(require("vscode")),w="markdown-mermaid";var oe="vscode",ne=["vscode","base","forest","dark","default","neutral"];function L(e){return typeof e=="string"&&ne.includes(e)?e:oe}function E(){let e=j.workspace.getConfiguration(w);return{darkModeTheme:L(e.get("darkModeTheme")),lightModeTheme:L(e.get("lightModeTheme")),maxTextSize:e.get("maxTextSize"),clickDrag:e.get("mouseNavigation.enabled","alt"),showControls:e.get("controls.show","onHoverOrFocus"),resizable:e.get("resizable",!0),maxHeight:e.get("maxHeight","")}}function R(e){let i=e.renderer.render;return e.renderer.render=function(...r){return`${h()}
				${i.apply(e.renderer,r)}`},e}function h(){let e=se(JSON.stringify(E()));return`<span id="${w}" aria-hidden="true" data-config="${e}"></span>`}function se(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ae="text/vnd.mermaid",de="vscode.mermaid-markdown-features.chatOutputItem",z=class{constructor(i,r){this._extensionUri=i;this._webviewManager=r}_extensionUri;_webviewManager;async renderChatOutput({value:i},r,o,n){let t=r.webview,s=le(i),l=s.source,v=s.title,a=x(),b=[];b.push(this._webviewManager.registerWebview(a,t,l,v,"chat")),b.push(t.onDidReceiveMessage(p=>{p.type==="openInEditor"&&c.commands.executeCommand("_mermaid-markdown.openInEditor",{mermaidWebviewId:a})})),r.onDidDispose(()=>{$(b)});let m=c.Uri.joinPath(this._extensionUri,"chat-webview-out");t.options={enableScripts:!0,localResourceRoots:[m]};let g=x(),C=c.Uri.joinPath(m,"index.js"),U=t.asWebviewUri(c.Uri.joinPath(m,"codicon.css")),y=c.l10n.t("Open Diagram in Editor");t.html=`
			<!DOCTYPE html>
			<html lang="en">

			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Mermaid Diagram</title>
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; script-src 'nonce-${g}'; style-src ${t.cspSource} 'unsafe-inline'; font-src data:;" />
				<link rel="stylesheet" type="text/css" href="${U}">

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
				${h()}
				<button class="open-in-editor-btn" title="${y}" aria-label="${y}"><i class="codicon codicon-open-preview" aria-hidden="true"></i></button>
				<pre class="mermaid">
					${P(l)}
				</pre>

				<script type="module" nonce="${g}" src="${t.asWebviewUri(C)}"></script>
			</body>
			</html>`}};function B(e,i,r){let o=[];o.push(c.commands.registerCommand("_mermaid-markdown.openInEditor",t=>{if(typeof t?.mermaidSource=="string"){r.openPreview(t.mermaidSource,typeof t.title=="string"?t.title:void 0);return}let s=t?.mermaidWebviewId?i.getWebview(t.mermaidWebviewId):i.activeWebview;s&&r.openPreview(s.mermaidSource,s.title)})),o.push(c.lm.registerTool("renderMermaidDiagram",{invoke:async(t,s)=>{let l=t.input.markup,v=t.input.title;return ce(l,v)}}));let n=new z(e.extensionUri,i);return o.push(c.chat.registerChatOutputRenderer(de,n)),c.Disposable.from(...o)}function ce(e,i){let r=me(e),o=new c.LanguageModelToolResult([new c.LanguageModelTextPart(`${r}mermaid
${e}
${r}`)]),n=JSON.stringify({source:e,title:i});return o.toolResultDetails2={mime:ae,value:new TextEncoder().encode(n)},o}function me(e){let i=e.matchAll(/`+/g);if(!i)return"```";let r=Math.max(...Array.from(i,o=>o[0].length));return"`".repeat(Math.max(3,r+1))}function le(e){let i=new TextDecoder().decode(e);try{let r=JSON.parse(i);if(typeof r=="object"&&typeof r.source=="string")return{title:r.title,source:r.source}}catch{}return{title:void 0,source:i}}var d=k(require("vscode"));var N="vscode.mermaid-markdown-features.preview",W=class extends _{constructor(r,o){super();this._extensionUri=r;this._webviewManager=o;this._register(d.window.registerWebviewPanelSerializer(N,this))}_extensionUri;_webviewManager;_previews=new Map;openPreview(r,o){let n=F(r),t=this._previews.get(n);if(t){t.reveal();return}let s=S.create(n,r,o,this._extensionUri,this._webviewManager,d.ViewColumn.Active);this._registerPreview(s)}async deserializeWebviewPanel(r,o){if(!o?.mermaidSource){r.webview.html=this._getErrorHtml();return}let n=F(o.mermaidSource),t=S.revive(r,n,o.mermaidSource,this._extensionUri,this._webviewManager);this._registerPreview(t)}_registerPreview(r){this._previews.set(r.diagramId,r),r.onDispose(()=>{this._previews.delete(r.diagramId)})}_getErrorHtml(){return`<!DOCTYPE html>
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
			</html>`}dispose(){super.dispose();for(let r of this._previews.values())r.dispose();this._previews.clear()}},S=class e extends _{constructor(r,o,n,t,s){super();this._webviewPanel=r;this.diagramId=o;this._mermaidSource=n;this._extensionUri=t;this._webviewManager=s;this._webviewPanel.iconPath=new d.ThemeIcon("graph"),this._webviewPanel.webview.options={enableScripts:!0,localResourceRoots:[d.Uri.joinPath(this._extensionUri,"chat-webview-out")]},this._webviewPanel.webview.html=this._getHtml(),this._register(this._webviewManager.registerWebview(this.diagramId,this._webviewPanel.webview,this._mermaidSource,void 0,"editor")),this._register(this._webviewPanel.onDidChangeViewState(l=>{l.webviewPanel.active&&this._webviewManager.setActiveWebview(this.diagramId)})),this._register(this._webviewPanel.onDidDispose(()=>{this._onDisposeEmitter.fire(),this.dispose()}))}_webviewPanel;diagramId;_mermaidSource;_extensionUri;_webviewManager;_onDisposeEmitter=this._register(new d.EventEmitter);onDispose=this._onDisposeEmitter.event;static create(r,o,n,t,s,l){let v=d.window.createWebviewPanel(N,n??d.l10n.t("Mermaid Diagram"),l,{retainContextWhenHidden:!1});return new e(v,r,o,t,s)}static revive(r,o,n,t,s){return new e(r,o,n,t,s)}reveal(){this._webviewPanel.reveal()}dispose(){this._onDisposeEmitter.fire(),super.dispose(),this._webviewPanel.dispose()}_getHtml(){let r=x(),o=d.Uri.joinPath(this._extensionUri,"chat-webview-out"),n=this._webviewPanel.webview.asWebviewUri(d.Uri.joinPath(o,"index-editor.js")),t=this._webviewPanel.webview.asWebviewUri(d.Uri.joinPath(o,"codicon.css")),s=d.l10n.t("Toggle Pan Mode"),l=d.l10n.t("Zoom Out"),v=d.l10n.t("Zoom In"),a=d.l10n.t("Reset Pan and Zoom");return`<!DOCTYPE html>
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
				${h()}
				<div class="zoom-controls">
					<button class="pan-mode-btn" title="${s}" aria-label="${s}" aria-pressed="false"><i class="codicon codicon-move" aria-hidden="true"></i></button>
					<button class="zoom-out-btn" title="${l}" aria-label="${l}"><i class="codicon codicon-zoom-out" aria-hidden="true"></i></button>
					<button class="zoom-in-btn" title="${v}" aria-label="${v}"><i class="codicon codicon-zoom-in" aria-hidden="true"></i></button>
					<button class="zoom-reset-btn" title="${a}" aria-label="${a}"><i class="codicon codicon-screen-normal" aria-hidden="true"></i></button>
				</div>
				<pre class="mermaid">
					${P(this._mermaidSource)}
				</pre>
				<script type="module" nonce="${r}" src="${n}"></script>
			</body>
			</html>`}};function F(e){let i=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);i=(i<<5)-i+o,i=i&i}return Math.abs(i).toString(16)}var f=k(require("vscode"));function Z(e){return`<!DOCTYPE html>
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
	<script type="module" src="./index.js"></script>
</body>
</html>`}var V="mermaid",pe=1e4,D=class{constructor(i){this._extensionUri=i}_extensionUri;_onDidChange=new f.EventEmitter;onDidChange=this._onDidChange.event;_configurationListener=f.workspace.onDidChangeConfiguration(i=>{i.affectsConfiguration(w)&&this._onDidChange.fire()});resolve(){let i=E(),r=Z(h());return{content:{html:r,baseUri:f.Uri.joinPath(this._extensionUri,"markdown-editor-out")},contentType:"text",runtimeKey:`vscode.mermaid-markdown-features/${ue(r)}`,initialHeight:150,presentation:{resizable:i.resizable,fullWidth:!0,fullView:!0,maxAutomaticHeight:ve(i.maxHeight)}}}dispose(){this._configurationListener.dispose(),this._onDidChange.dispose()}};function ve(e){let i=/^\s*(\d+(?:\.\d+)?)\s*(?:px)?\s*$/i.exec(e),r=i?Number(i[1]):NaN;return r>0?Math.min(r,pe):void 0}function ue(e){let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r)|0;return(i>>>0).toString(16)}var O="mermaid",H="mermaidContainer";function J(e,i){e.use(o=>{function n(t,s,l,v){let a,b=!1,m=t.bMarks[s]+t.tShift[s],g=t.eMarks[s];if(t.src.charCodeAt(m)!==58)return!1;for(a=m+1;a<=g&&":"[(a-m)%1]===t.src[a];a++);let C=Math.floor((a-m)/1);if(C<3)return!1;a-=(a-m)%1;let U=t.src.slice(m,a),y=t.src.slice(a,g);if(y.trim().split(" ")[0].toLowerCase()!==O)return!1;if(v)return!0;let p=s;for(;p++,!(p>=l||(m=t.bMarks[p]+t.tShift[p],g=t.eMarks[p],m<g&&t.sCount[p]<t.blkIndent));)if(t.src.charCodeAt(m)===58&&!(t.sCount[p]-t.blkIndent>=4)){for(a=m+1;a<=g&&":"[(a-m)%1]===t.src[a];a++);if(!(Math.floor((a-m)/1)<C)&&(a-=(a-m)%1,a=t.skipSpaces(a),!(a<g))){b=!0;break}}let Y=t.parentType,K=t.lineMax;t.parentType="container",t.lineMax=p;let M=t.push(H,"div",1);return M.markup=U,M.block=!0,M.info=y,M.map=[s,p],M.content=t.getLines(s+1,p,t.blkIndent,!0),t.parentType=Y,t.lineMax=K,t.line=p+(b?1:0),!0}o.block.ruler.before("fence",H,n,{alt:["paragraph","reference","blockquote","list"]}),o.renderer.rules[H]=(t,s)=>{let v=t[s].content;return`<div class="${O}">${q(v)}</div>`}});let r=e.options.highlight;return e.options.highlight=(o,n,t)=>{let s=new RegExp("\\b("+i.languageIds().map(ge).join("|")+")\\b","i");return n&&s.test(n)?`<pre class="${O}" style="all: unset;">${q(o)}</pre>`:r?.(o,n,t)??o},e}function q(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n+$/,"").trimStart()}function ge(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var T=class{_activeWebviewId;_webviews=new Map;get activeWebview(){return this._activeWebviewId?this._webviews.get(this._activeWebviewId):void 0}registerWebview(i,r,o,n,t){if(this._webviews.has(i))throw new Error(`Webview with id ${i} is already registered.`);let s={id:i,webview:r,mermaidSource:o,title:n,type:t};return this._webviews.set(i,s),{dispose:()=>this.unregisterWebview(i)}}unregisterWebview(i){this._webviews.delete(i),this._activeWebviewId===i&&(this._activeWebviewId=void 0)}setActiveWebview(i){this._webviews.has(i)&&(this._activeWebviewId=i)}getWebview(i){return this._webviews.get(i)}resetPanZoom(i){(i?this._webviews.get(i):this.activeWebview)?.webview.postMessage({type:"resetPanZoom"})}};function we(e){let i=new T,r=new W(e.extensionUri,i);e.subscriptions.push(r);let o=new D(e.extensionUri);return e.subscriptions.push(o),e.subscriptions.push(B(e,i,r)),e.subscriptions.push(u.commands.registerCommand("_mermaid-markdown.resetPanZoom",n=>{i.resetPanZoom(n?.mermaidWebviewId)})),e.subscriptions.push(u.commands.registerCommand("_mermaid-markdown.copySource",n=>{if(typeof n?.mermaidSource=="string"){u.env.clipboard.writeText(n.mermaidSource);return}let t=n?.mermaidWebviewId?i.getWebview(n.mermaidWebviewId):i.activeWebview;t&&u.env.clipboard.writeText(t.mermaidSource)})),e.subscriptions.push(u.workspace.onDidChangeConfiguration(n=>{n.affectsConfiguration(`${w}.languages`)&&u.commands.executeCommand("markdown.api.reloadPlugins"),(n.affectsConfiguration(w)||n.affectsConfiguration("workbench.colorTheme"))&&u.commands.executeCommand("markdown.preview.refresh")})),{extendMarkdownIt(n){return J(n,{languageIds:()=>u.workspace.getConfiguration(w).get("languages",["mermaid"])}),n.use(R),n},markdownCodeBlockEditors:{apiV1:{getProvider:n=>n===V?o:void 0}}}}0&&(module.exports={activate});
//# sourceMappingURL=extension.js.map
