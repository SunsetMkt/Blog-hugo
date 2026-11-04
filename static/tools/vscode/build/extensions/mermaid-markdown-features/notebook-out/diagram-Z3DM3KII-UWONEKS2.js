import{a as z}from"./chunk-2S6PUNXZ.js";import{a as E}from"./chunk-R6TTN2K4.js";import"./chunk-MORPLMM4.js";import"./chunk-PAO23QCD.js";import"./chunk-NZ3Q2WJX.js";import"./chunk-PPKVOE2H.js";import"./chunk-JXO2KM4E.js";import"./chunk-PNBHH3ZV.js";import"./chunk-ABRXOUHG.js";import"./chunk-QSWXSH5R.js";import"./chunk-U4VSMEDZ.js";import"./chunk-CQHAQPZP.js";import"./chunk-4HJKLDAT.js";import"./chunk-ROB3ZELR.js";import"./chunk-JZV3OND4.js";import"./chunk-JHQ3LEJ2.js";import"./chunk-BQR5VGCX.js";import"./chunk-ECAF5OLA.js";import{a as P}from"./chunk-XQK6T7GN.js";import{o as u}from"./chunk-DSAPFASR.js";import"./chunk-5TVAF4SJ.js";import{O as x,T as y,U as $,V as B,W as C,X as S,Y as D,Z as T,k as w,u as v}from"./chunk-L7V4HMD4.js";import{b}from"./chunk-SNB7PWCV.js";import"./chunk-CU3WNRKO.js";import{a as h}from"./chunk-5ZAMBDF5.js";import"./chunk-3RNHDNP5.js";var N=w.packet,F=class{constructor(){this.packet=[],this.setAccTitle=$,this.getAccTitle=B,this.setDiagramTitle=D,this.getDiagramTitle=T,this.getAccDescription=S,this.setAccDescription=C}static{h(this,"PacketDB")}getConfig(){let t=u({...N,...v().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){y(),this.packet=[]}},L=1e4,M=h((t,e)=>{z(t,e);let a=-1,o=[],n=1,{bitsPerRow:l}=e.getConfig();for(let{start:r,end:s,bits:d,label:c}of t.blocks){if(r!==void 0&&s!==void 0&&s<r)throw new Error(`Packet block ${r} - ${s} is invalid. End must be greater than start.`);if(r??=a+1,r!==a+1)throw new Error(`Packet block ${r} - ${s??r} is not contiguous. It should start from ${a+1}.`);if(d===0)throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(s??=r+(d??1)-1,d??=s-r+1,a=s,b.debug(`Packet block ${r} - ${a} with label ${c}`);o.length<=l+1&&e.getPacket().length<L;){let[p,i]=Y({start:r,end:s,bits:d,label:c},n,l);if(o.push(p),p.end+1===n*l&&(e.pushWord(o),o=[],n++),!i)break;({start:r,end:s,bits:d,label:c}=i)}}e.pushWord(o)},"populate"),Y=h((t,e,a)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];let o=e*a-1,n=e*a;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),A={parser:{yy:void 0},parse:h(async t=>{let e=await E("packet",t),a=A.parser?.yy;if(!(a instanceof F))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");b.debug(e),M(e,a)},"parse")},I=h((t,e,a,o)=>{let n=o.db,l=n.getConfig(),{rowHeight:r,paddingY:s,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),i=n.getDiagramTitle(),f=r+s,g=f*(p.length+1)-(i?0:r),k=d*c+2,m=P(e);m.attr("viewBox",`0 0 ${k} ${g}`),x(m,g,k,l.useMaxWidth);for(let[W,_]of p.entries())O(m,_,W,l);m.append("text").text(i).attr("x",k/2).attr("y",g-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),O=h((t,e,a,{rowHeight:o,paddingX:n,paddingY:l,bitWidth:r,bitsPerRow:s,showBits:d})=>{let c=t.append("g"),p=a*(o+l)+l;for(let i of e){let f=i.start%s*r+1,g=(i.end-i.start+1)*r-n;if(c.append("rect").attr("x",f).attr("y",p).attr("width",g).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",f+g/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!d)continue;let k=i.end===i.start,m=p-2;c.append("text").attr("x",f+(k?g/2:0)).attr("y",m).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||c.append("text").attr("x",f+g).attr("y",m).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),j={draw:I},G={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},H=h(({packet:t}={})=>{let e=u(G,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),V={parser:A,get db(){return new F},renderer:j,styles:H};export{V as diagram};
