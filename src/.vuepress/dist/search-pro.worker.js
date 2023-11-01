const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const l of e.keys())if(l===F){const a=o[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=u;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=o[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=o[f+y]+ +b,A=o[f+y+1]+1,w=o[p+y]+1,L=o[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,o,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const l=new Map;l.set(u.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(u),e=l}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const l of Object.keys(u)){const a=u[l],h=e._fieldIds[l],m=o.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:N(n.boost,g)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,o,u,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,o,u,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,o,u,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(u),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=k(u),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(u,d)),u=l,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),l=u.includes("#"),[a,h]=u.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>o.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(o.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in o)for(const c of o.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":60,\"nextId\":60,\"documentIds\":{\"0\":\"v-bf49e556\",\"1\":\"v-4e65ec78\",\"2\":\"v-4e65ec78@0\",\"3\":\"v-4e65ec78@1\",\"4\":\"v-c151bf32\",\"5\":\"v-c151bf32@0\",\"6\":\"v-c151bf32@1\",\"7\":\"v-438ffe52\",\"8\":\"v-438ffe52#markdown-介绍\",\"9\":\"v-438ffe52#markdown-配置\",\"10\":\"v-438ffe52#markdown-扩展\",\"11\":\"v-438ffe52#vuepress-扩展\",\"12\":\"v-438ffe52#主题扩展\",\"13\":\"v-438ffe52#自定义容器\",\"14\":\"v-438ffe52#代码块\",\"15\":\"v-438ffe52#上下角标\",\"16\":\"v-438ffe52#自定义对齐\",\"17\":\"v-438ffe52#attrs\",\"18\":\"v-438ffe52#脚注\",\"19\":\"v-438ffe52#标记\",\"20\":\"v-438ffe52#任务列表\",\"21\":\"v-438ffe52#图片增强\",\"22\":\"v-438ffe52#卡片\",\"23\":\"v-438ffe52@0\",\"24\":\"v-438ffe52@1\",\"25\":\"v-6e19edb7\",\"26\":\"v-6e19edb7#页面信息\",\"27\":\"v-6e19edb7#页面内容\",\"28\":\"v-6e19edb7#页面结构\",\"29\":\"v-6e19edb7@0\",\"30\":\"v-6e19edb7@1\",\"31\":\"v-1473bf53\",\"32\":\"v-1473bf53#目录\",\"33\":\"v-1473bf53@0\",\"34\":\"v-3cde1f86\",\"35\":\"v-3cde1f86#页面内容\",\"36\":\"v-3cde1f86@0\",\"37\":\"v-32a10bcc\",\"38\":\"v-32a10bcc#免费试玩\",\"39\":\"v-32a10bcc#收费方式和充值奖励\",\"40\":\"v-44032603\",\"41\":\"v-44032603#markdown基本写法展示\",\"42\":\"v-44032603#图片引入展示\",\"43\":\"v-44032603#图片代码展示\",\"44\":\"v-44032603#tab标签\",\"45\":\"v-44032603#tab标签代码展示\",\"46\":\"v-44032603#card样式\",\"47\":\"v-44032603@0\",\"48\":\"v-44032603@1\",\"49\":\"v-1455d425\",\"50\":\"v-79c9f96f\",\"51\":\"v-1473a16a\",\"52\":\"v-7da36e58\",\"53\":\"v-14f0b23d\",\"54\":\"v-a3412df2\",\"55\":\"v-e4cb1150\",\"56\":\"v-5787c08f\",\"57\":\"v-7493181c\",\"58\":\"v-d440f426\",\"59\":\"v-f88c904c\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,18],\"2\":[null,null,1],\"3\":[null,null,1],\"4\":[1,7],\"5\":[null,null,1],\"6\":[null,null,1],\"7\":[2,11],\"8\":[2,8],\"9\":[2,13],\"10\":[2,11],\"11\":[2,10],\"12\":[1,10],\"13\":[1,19],\"14\":[1,1],\"15\":[1,3],\"16\":[1,3],\"17\":[1,5],\"18\":[1,2],\"19\":[1,3],\"20\":[1,6],\"21\":[1,2],\"22\":[1],\"23\":[null,null,1],\"24\":[null,null,1],\"25\":[1,3],\"26\":[1,20],\"27\":[1,17],\"28\":[1,16],\"29\":[null,null,1],\"30\":[null,null,2],\"31\":[1],\"32\":[1,5],\"33\":[null,null,1],\"34\":[1],\"35\":[1],\"36\":[null,null,1],\"37\":[1,4],\"38\":[1,27],\"39\":[1,26],\"40\":[1],\"41\":[1],\"42\":[1,1],\"43\":[1],\"44\":[1],\"45\":[1,8],\"46\":[1],\"47\":[null,null,1],\"48\":[null,null,1],\"49\":[1],\"50\":[1],\"51\":[1],\"52\":[1],\"53\":[1],\"54\":[1],\"55\":[1],\"56\":[1],\"57\":[1],\"58\":[1],\"59\":[1]},\"averageFieldLength\":[1.1068949147104221,8.962449800469743,0.750797626311703],\"storedFields\":{\"0\":{\"h\":\"游戏背景介绍\"},\"1\":{\"h\":\"布局与功能禁用\",\"t\":[\"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。\",\"本页面就是一个示例，禁用了如下功能:\",\"导航栏\",\"侧边栏\",\"路径导航\",\"页面信息\",\"贡献者\",\"编辑此页链接\",\"更新时间\",\"上一篇/下一篇 链接\",\"评论\",\"页脚\",\"返回顶部按钮\"]},\"2\":{\"c\":[\"使用指南\"]},\"3\":{\"c\":[\"禁用\"]},\"4\":{\"h\":\"密码加密的文章\",\"t\":[\"实际的文章内容。\",\"段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。\",\"段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。\"]},\"5\":{\"c\":[\"使用指南\"]},\"6\":{\"c\":[\"文章加密\"]},\"7\":{\"h\":\"Markdown 展示\",\"t\":[\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\",\"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"]},\"8\":{\"h\":\"Markdown 介绍\",\"t\":[\"如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。\"]},\"9\":{\"h\":\"Markdown 配置\",\"t\":[\"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。\",\"相关信息\",\"Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 Frontmatter 介绍。\"]},\"10\":{\"h\":\"Markdown 扩展\",\"t\":[\"VuePress 会使用 markdown-it 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 语法扩展 。\"]},\"11\":{\"h\":\"VuePress 扩展\",\"t\":[\"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。\",\"关于这些扩展，请阅读 VuePress 中的 Markdown 扩展。\"]},\"12\":{\"h\":\"主题扩展\",\"t\":[\"通过 vuepress-plugin-md-enhance，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。\"]},\"13\":{\"h\":\"自定义容器\",\"t\":[\"安全的在 Markdown 中使用 {{ variable }}。\",\"自定义标题\",\"信息容器，包含 代码 与 链接。\",\"const a = 1; \",\"自定义标题\",\"提示容器\",\"自定义标题\",\"警告容器\",\"自定义标题\",\"危险容器\",\"自定义标题\",\"详情容器\",\"查看详情\"]},\"14\":{\"h\":\"代码块\",\"t\":[\"查看详情\"]},\"15\":{\"h\":\"上下角标\",\"t\":[\"19th H2O\",\"查看详情\"]},\"16\":{\"h\":\"自定义对齐\",\"t\":[\"我是居中的\",\"我在右对齐\",\"查看详情\"]},\"17\":{\"h\":\"Attrs\",\"t\":[\"一个拥有 ID 的 单词。\",\"查看详情\"]},\"18\":{\"h\":\"脚注\",\"t\":[\"此文字有脚注^first.\",\"查看详情\"]},\"19\":{\"h\":\"标记\",\"t\":[\"你可以标记 重要的内容 。\",\"查看详情\"]},\"20\":{\"h\":\"任务列表\",\"t\":[\"[x] 计划 1\",\"[ ] 计划 2\",\"查看详情\"]},\"21\":{\"h\":\"图片增强\",\"t\":[\"支持为图片设置颜色模式和大小\",\"查看详情\"]},\"22\":{\"h\":\"卡片\"},\"23\":{\"c\":[\"使用指南\"]},\"24\":{\"c\":[\"Markdown\"]},\"25\":{\"h\":\"页面配置\",\"t\":[\"more 注释之前的内容被视为文章摘要。\"]},\"26\":{\"h\":\"页面信息\",\"t\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},\"27\":{\"h\":\"页面内容\",\"t\":[\"你可以自由在这里书写你的 Markdown。\",\"提示\",\"你可以将图片和 Markdown 文件放置在一起，但是你需要使用相对链接./ 进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\",\"主题包含了一个自定义徽章可以使用:\",\"文字结尾应该有深蓝色的 徽章文字 徽章。 \"]},\"28\":{\"h\":\"页面结构\",\"t\":[\"此页面应当包含:\",\"路径导航\",\"标题和页面信息\",\"TOC (文章标题列表)\",\"贡献者、更新时间等页面元信息\",\"评论\",\"导航栏\",\"侧边栏\",\"页脚\",\"返回顶部按钮\",\"你可以通过主题选项和页面 Frontmatter 自定义它们。\"]},\"29\":{\"c\":[\"使用指南\"]},\"30\":{\"c\":[\"页面配置\",\"使用指南\"]},\"31\":{\"h\":\"主要功能与配置演示\"},\"32\":{\"h\":\"目录\",\"t\":[\"Markdown 展示\",\"页面展示\",\"禁用展示\",\"加密展示\"]},\"33\":{\"c\":[\"使用指南\"]},\"34\":{\"h\":\"下载注册与创建角色\"},\"35\":{\"h\":\"页面内容\"},\"36\":{\"c\":[\"使用指南\"]},\"37\":{\"h\":\"游戏收费方式与福利介绍\",\"t\":[\"沃尔学院美服采用地图买断/月卡并行的计费模式，同时对于刚入坑的新人提供免费试玩魔法城部分区域等多重福利。\"]},\"38\":{\"h\":\"免费试玩\",\"t\":[\"沃尔学院美服可以免费试玩独角兽大道及海神大街任务线，大约能到5-8级左右。\",\"当然，免费试玩账号有一定功能上的限制，比如不能发词库之外的单词（包括数字，中文等，看到别人很多内容会被过滤为“...”）。\",\"当你首充（最低2美元-14元）之后，就算激活账户，可以进入官网设置自由聊天（Open-Chat)，就可以自由输入。\",\"官网不定期会举办两种免费活动，一种是免费试玩第一故事线（包括魔法城、克洛克、玛丽伯恩、木须和龙之谷），另一种是免费会员（一般在周年庆或者圣诞节有可能开启）\"]},\"39\":{\"h\":\"收费方式和充值奖励\",\"t\":[\"沃尔学院美服提供点卡和地图买断两种收费模式。买断地图约为2000皇冠地图一个小区域，一个世界大约需要（150-300元），月卡约为60元/月。\",\"::: collapse 关于商城\",\"游戏道具商城提供一些装备、宠物、外观、坐骑、动作、传送特效、药剂，还有家具等等。游戏外观是无属性的装备，必须通过[装备缝合]的方式使用，商城坐骑的移动速度和游戏内的其他坐骑也是一样的（少数例外的拥有50%移速，普通坐骑40%移速）。\"]},\"40\":{\"h\":\"模板汇总\"},\"41\":{\"h\":\"Markdown基本写法展示\"},\"42\":{\"h\":\"图片引入展示\",\"t\":[\"图片名称\"]},\"43\":{\"h\":\"图片代码展示\"},\"44\":{\"h\":\"Tab标签\"},\"45\":{\"h\":\"Tab标签代码展示\",\"t\":[\"::: tabs @tab:active tab1 tab1的内容 @tab tab2 tab2的内容 ::: \"]},\"46\":{\"h\":\"Card样式\"},\"47\":{\"c\":[\"模板专属标签\"]},\"48\":{\"c\":[\"模板\"]},\"49\":{\"h\":\"Base\"},\"50\":{\"h\":\"Daily\"},\"51\":{\"h\":\"Deep\"},\"52\":{\"h\":\"Fight\"},\"53\":{\"h\":\"Main\"},\"54\":{\"h\":\"Manufacture\"},\"55\":{\"h\":\"Other\"},\"56\":{\"h\":\"Special\"},\"57\":{\"h\":\"Template\"},\"58\":{\"h\":\"Tools\"},\"59\":{\"h\":\"外观\"}},\"dirtCount\":0,\"index\":[[\"special\",{\"0\":{\"56\":1}}],[\"other\",{\"0\":{\"55\":1}}],[\"open\",{\"1\":{\"38\":1}}],[\"fight\",{\"0\":{\"52\":1}}],[\"frontmatter\",{\"1\":{\"1\":1,\"9\":3,\"26\":1,\"28\":1}}],[\"deep\",{\"0\":{\"51\":1}}],[\"daily\",{\"0\":{\"50\":1}}],[\"base\",{\"0\":{\"49\":1}}],[\"模板\",{\"2\":{\"48\":1}}],[\"模板专属标签\",{\"2\":{\"47\":1}}],[\"模板汇总\",{\"0\":{\"40\":1}}],[\"tools\",{\"0\":{\"58\":1}}],[\"toc\",{\"1\":{\"28\":1}}],[\"template\",{\"0\":{\"57\":1}}],[\"tab2的内容\",{\"1\":{\"45\":1}}],[\"tab2\",{\"1\":{\"45\":1}}],[\"tab1的内容\",{\"1\":{\"45\":1}}],[\"tab1\",{\"1\":{\"45\":1}}],[\"tab\",{\"1\":{\"45\":2}}],[\"tabs\",{\"1\":{\"45\":1}}],[\"tab标签代码展示\",{\"0\":{\"45\":1}}],[\"tab标签\",{\"0\":{\"44\":1}}],[\"图片代码展示\",{\"0\":{\"43\":1}}],[\"图片名称\",{\"1\":{\"42\":1}}],[\"图片引入展示\",{\"0\":{\"42\":1}}],[\"图片增强\",{\"0\":{\"21\":1}}],[\"普通坐骑40\",{\"1\":{\"39\":1}}],[\"移速\",{\"1\":{\"39\":2}}],[\"少数例外的拥有50\",{\"1\":{\"39\":1}}],[\"商城坐骑的移动速度和游戏内的其他坐骑也是一样的\",{\"1\":{\"39\":1}}],[\"装备缝合\",{\"1\":{\"39\":1}}],[\"必须通过\",{\"1\":{\"39\":1}}],[\"还有家具等等\",{\"1\":{\"39\":1}}],[\"还不会编写\",{\"1\":{\"8\":1}}],[\"药剂\",{\"1\":{\"39\":1}}],[\"传送特效\",{\"1\":{\"39\":1}}],[\"动作\",{\"1\":{\"39\":1}}],[\"坐骑\",{\"1\":{\"39\":1}}],[\"外观\",{\"0\":{\"59\":1},\"1\":{\"39\":1}}],[\"宠物\",{\"1\":{\"39\":1}}],[\"关于商城\",{\"1\":{\"39\":1}}],[\"关于这些扩展\",{\"1\":{\"11\":1}}],[\"300元\",{\"1\":{\"39\":1}}],[\"买断地图约为2000皇冠地图一个小区域\",{\"1\":{\"39\":1}}],[\"收费方式和充值奖励\",{\"0\":{\"39\":1}}],[\"另一种是免费会员\",{\"1\":{\"38\":1}}],[\"木须和龙之谷\",{\"1\":{\"38\":1}}],[\"玛丽伯恩\",{\"1\":{\"38\":1}}],[\"克洛克\",{\"1\":{\"38\":1}}],[\"一个世界大约需要\",{\"1\":{\"39\":1}}],[\"一个拥有\",{\"1\":{\"17\":1}}],[\"一般在周年庆或者圣诞节有可能开启\",{\"1\":{\"38\":1}}],[\"一种是免费试玩第一故事线\",{\"1\":{\"38\":1}}],[\"官网不定期会举办两种免费活动\",{\"1\":{\"38\":1}}],[\"就可以自由输入\",{\"1\":{\"38\":1}}],[\"就算激活账户\",{\"1\":{\"38\":1}}],[\"card样式\",{\"0\":{\"46\":1}}],[\"collapse\",{\"1\":{\"39\":1}}],[\"const\",{\"1\":{\"13\":1}}],[\"chat\",{\"1\":{\"38\":1}}],[\"可以进入官网设置自由聊天\",{\"1\":{\"38\":1}}],[\"可以根据文件结构将它们转换为不同的页面\",{\"1\":{\"7\":1}}],[\"之后\",{\"1\":{\"38\":1}}],[\"最低2美元\",{\"1\":{\"38\":1}}],[\"当你首充\",{\"1\":{\"38\":1}}],[\"当然\",{\"1\":{\"38\":1}}],[\"看到别人很多内容会被过滤为\",{\"1\":{\"38\":1}}],[\"包括魔法城\",{\"1\":{\"38\":1}}],[\"包括数字\",{\"1\":{\"38\":1}}],[\"包含\",{\"1\":{\"13\":1}}],[\"比如不能发词库之外的单词\",{\"1\":{\"38\":1}}],[\"8级左右\",{\"1\":{\"38\":1}}],[\"大约能到5\",{\"1\":{\"38\":1}}],[\"沃尔学院美服提供点卡和地图买断两种收费模式\",{\"1\":{\"39\":1}}],[\"沃尔学院美服可以免费试玩独角兽大道及海神大街任务线\",{\"1\":{\"38\":1}}],[\"沃尔学院美服采用地图买断\",{\"1\":{\"37\":1}}],[\"免费试玩账号有一定功能上的限制\",{\"1\":{\"38\":1}}],[\"免费试玩\",{\"0\":{\"38\":1}}],[\"同时对于刚入坑的新人提供免费试玩魔法城部分区域等多重福利\",{\"1\":{\"37\":1}}],[\"游戏外观是无属性的装备\",{\"1\":{\"39\":1}}],[\"游戏道具商城提供一些装备\",{\"1\":{\"39\":1}}],[\"游戏收费方式与福利介绍\",{\"0\":{\"37\":1}}],[\"游戏背景介绍\",{\"0\":{\"0\":1}}],[\"下载注册与创建角色\",{\"0\":{\"34\":1}}],[\"下一篇\",{\"1\":{\"1\":1}}],[\"加密展示\",{\"1\":{\"32\":1}}],[\"目录\",{\"0\":{\"32\":1}}],[\"此页面应当包含\",{\"1\":{\"28\":1}}],[\"此文字有脚注^first\",{\"1\":{\"18\":1}}],[\"徽章\",{\"1\":{\"27\":1}}],[\"徽章文字\",{\"1\":{\"27\":1}}],[\"public\",{\"1\":{\"27\":1}}],[\"plugin\",{\"1\":{\"12\":1}}],[\"进行引用\",{\"1\":{\"27\":2}}],[\"但是你需要使用相对链接\",{\"1\":{\"27\":1}}],[\"标题和页面信息\",{\"1\":{\"28\":1}}],[\"标签为\",{\"1\":{\"26\":1}}],[\"标记\",{\"0\":{\"19\":1}}],[\"分类为\",{\"1\":{\"26\":1}}],[\"日\",{\"1\":{\"26\":1}}],[\"月卡约为60元\",{\"1\":{\"39\":1}}],[\"月卡并行的计费模式\",{\"1\":{\"37\":1}}],[\"月\",{\"1\":{\"26\":1,\"39\":1}}],[\"年\",{\"1\":{\"26\":1}}],[\"写作日期为\",{\"1\":{\"26\":1}}],[\"hope\",{\"1\":{\"26\":1}}],[\"h2o\",{\"1\":{\"15\":1}}],[\"作者设置为\",{\"1\":{\"26\":1}}],[\"注释之前的内容被视为文章摘要\",{\"1\":{\"25\":1}}],[\"卡片\",{\"0\":{\"22\":1}}],[\"支持为图片设置颜色模式和大小\",{\"1\":{\"21\":1}}],[\"计划\",{\"1\":{\"20\":2}}],[\"x\",{\"1\":{\"20\":1}}],[\"任务列表\",{\"0\":{\"20\":1}}],[\"重要的内容\",{\"1\":{\"19\":1}}],[\"脚注\",{\"0\":{\"18\":1}}],[\"单词\",{\"1\":{\"17\":1}}],[\"的方式使用\",{\"1\":{\"39\":1}}],[\"的\",{\"1\":{\"17\":1,\"26\":1}}],[\"id\",{\"1\":{\"17\":1}}],[\"it\",{\"1\":{\"10\":2}}],[\"我在右对齐\",{\"1\":{\"16\":1}}],[\"我是居中的\",{\"1\":{\"16\":1}}],[\"上下角标\",{\"0\":{\"15\":1}}],[\"上一篇\",{\"1\":{\"1\":1}}],[\"查看详情\",{\"1\":{\"13\":1,\"14\":1,\"15\":1,\"16\":1,\"17\":1,\"18\":1,\"19\":1,\"20\":1,\"21\":1}}],[\"详情容器\",{\"1\":{\"13\":1}}],[\"危险容器\",{\"1\":{\"13\":1}}],[\"警告容器\",{\"1\":{\"13\":1}}],[\"提示\",{\"1\":{\"27\":1}}],[\"提示容器\",{\"1\":{\"13\":1}}],[\"提供更加丰富的写作功能\",{\"1\":{\"12\":1}}],[\"=\",{\"1\":{\"13\":1}}],[\"active\",{\"1\":{\"45\":1}}],[\"attrs\",{\"0\":{\"17\":1}}],[\"a\",{\"1\":{\"13\":1}}],[\"与\",{\"1\":{\"13\":1}}],[\"代码块\",{\"0\":{\"14\":1}}],[\"代码\",{\"1\":{\"13\":1}}],[\"信息容器\",{\"1\":{\"13\":1}}],[\"自定义它们\",{\"1\":{\"28\":1}}],[\"自定义对齐\",{\"0\":{\"16\":1}}],[\"自定义标题\",{\"1\":{\"13\":5}}],[\"自定义容器\",{\"0\":{\"13\":1}}],[\"variable\",{\"1\":{\"13\":1}}],[\"vuepress\",{\"0\":{\"11\":1},\"1\":{\"7\":2,\"9\":2,\"10\":1,\"11\":2,\"12\":1,\"27\":1}}],[\"安全的在\",{\"1\":{\"13\":1}}],[\"enhance\",{\"1\":{\"12\":1}}],[\"manufacture\",{\"0\":{\"54\":1}}],[\"main\",{\"0\":{\"53\":1}}],[\"markdown基本写法展示\",{\"0\":{\"41\":1}}],[\"markdown\",{\"0\":{\"7\":1,\"8\":1,\"9\":1,\"10\":1},\"1\":{\"7\":2,\"8\":3,\"9\":1,\"10\":3,\"11\":2,\"12\":1,\"13\":1,\"26\":1,\"27\":2,\"32\":1},\"2\":{\"24\":1}}],[\"ms\",{\"1\":{\"26\":1}}],[\"more\",{\"1\":{\"25\":1}}],[\"md\",{\"1\":{\"12\":1}}],[\"主要功能与配置演示\",{\"0\":{\"31\":1}}],[\"主要从\",{\"1\":{\"7\":1}}],[\"主题包含了一个自定义徽章可以使用\",{\"1\":{\"27\":1}}],[\"主题扩展了更多\",{\"1\":{\"12\":1}}],[\"主题扩展\",{\"0\":{\"12\":1}}],[\"中文等\",{\"1\":{\"38\":1}}],[\"中设置页面信息\",{\"1\":{\"26\":1}}],[\"中使用\",{\"1\":{\"13\":1}}],[\"中的\",{\"1\":{\"11\":1}}],[\"中很重要的一个概念\",{\"1\":{\"9\":1}}],[\"请使用绝对链接\",{\"1\":{\"27\":1}}],[\"请阅读\",{\"1\":{\"11\":1}}],[\"请先阅读\",{\"1\":{\"8\":1}}],[\"语法\",{\"1\":{\"12\":1}}],[\"语法进行了扩展\",{\"1\":{\"11\":1}}],[\"语法扩展\",{\"1\":{\"10\":1}}],[\"对于\",{\"1\":{\"27\":1}}],[\"对\",{\"1\":{\"11\":1}}],[\"为了丰富文档写作\",{\"1\":{\"11\":1}}],[\"为每个\",{\"1\":{\"9\":1}}],[\"插件来实现\",{\"1\":{\"10\":1}}],[\"内容\",{\"1\":{\"10\":1}}],[\"来解析\",{\"1\":{\"10\":1}}],[\"会使用\",{\"1\":{\"10\":1}}],[\"扩展\",{\"0\":{\"10\":1,\"11\":1},\"1\":{\"11\":1}}],[\"如果你不了解它\",{\"1\":{\"9\":1}}],[\"如果你是一个新手\",{\"1\":{\"8\":1}}],[\"是\",{\"1\":{\"9\":1}}],[\"相关信息\",{\"1\":{\"9\":1}}],[\"通过\",{\"1\":{\"9\":1,\"12\":1}}],[\"配置\",{\"0\":{\"9\":1}}],[\"演示\",{\"1\":{\"8\":1}}],[\"和\",{\"1\":{\"8\":1,\"26\":1}}],[\"介绍\",{\"0\":{\"8\":1},\"1\":{\"8\":1,\"9\":1}}],[\"以便\",{\"1\":{\"7\":1}}],[\"你需要阅读\",{\"1\":{\"9\":1}}],[\"你应该创建和编写\",{\"1\":{\"7\":1}}],[\"你可以通过主题选项和页面\",{\"1\":{\"28\":1}}],[\"你可以通过设置页面的\",{\"1\":{\"1\":1}}],[\"你可以将图片和\",{\"1\":{\"27\":1}}],[\"你可以自由在这里书写你的\",{\"1\":{\"27\":1}}],[\"你可以在\",{\"1\":{\"26\":1}}],[\"你可以标记\",{\"1\":{\"19\":1}}],[\"你可以使用它轻松生成文档或博客站点\",{\"1\":{\"7\":1}}],[\"因此可以借助于\",{\"1\":{\"10\":1}}],[\"因此\",{\"1\":{\"7\":1}}],[\"展示\",{\"0\":{\"7\":1},\"1\":{\"32\":1}}],[\"文章标题列表\",{\"1\":{\"28\":1}}],[\"文章加密\",{\"2\":{\"6\":1}}],[\"文件夹的图片\",{\"1\":{\"27\":1}}],[\"文件放置在一起\",{\"1\":{\"27\":1}}],[\"文件\",{\"1\":{\"7\":1}}],[\"文件生成页面\",{\"1\":{\"7\":1}}],[\"文字结尾应该有深蓝色的\",{\"1\":{\"27\":1}}],[\"文字\",{\"1\":{\"4\":2}}],[\"文字段落\",{\"1\":{\"4\":24}}],[\"2020\",{\"1\":{\"26\":1}}],[\"2\",{\"1\":{\"4\":14,\"20\":1}}],[\"150\",{\"1\":{\"39\":1}}],[\"14元\",{\"1\":{\"38\":1}}],[\"19th\",{\"1\":{\"15\":1}}],[\"1\",{\"1\":{\"4\":12,\"13\":1,\"20\":1,\"26\":2}}],[\"段落\",{\"1\":{\"4\":2}}],[\"实际的文章内容\",{\"1\":{\"4\":1}}],[\"密码加密的文章\",{\"0\":{\"4\":1}}],[\"禁用展示\",{\"1\":{\"32\":1}}],[\"禁用\",{\"2\":{\"3\":1}}],[\"禁用了如下功能\",{\"1\":{\"1\":1}}],[\"使用指南\",{\"1\":{\"26\":2},\"2\":{\"2\":1,\"5\":1,\"23\":1,\"29\":1,\"30\":1,\"33\":1,\"36\":1}}],[\"返回顶部按钮\",{\"1\":{\"1\":1,\"28\":1}}],[\"页面展示\",{\"1\":{\"32\":1}}],[\"页面结构\",{\"0\":{\"28\":1}}],[\"页面内容\",{\"0\":{\"27\":1,\"35\":1}}],[\"页面配置\",{\"0\":{\"25\":1},\"1\":{\"26\":1},\"2\":{\"30\":1}}],[\"页面引入配置\",{\"1\":{\"9\":1}}],[\"页面信息\",{\"0\":{\"26\":1},\"1\":{\"1\":1}}],[\"页脚\",{\"1\":{\"1\":1,\"28\":1}}],[\"评论\",{\"1\":{\"1\":1,\"28\":1}}],[\"链接\",{\"1\":{\"1\":1,\"13\":1}}],[\"更新时间等页面元信息\",{\"1\":{\"28\":1}}],[\"更新时间\",{\"1\":{\"1\":1}}],[\"编辑此页链接\",{\"1\":{\"1\":1}}],[\"贡献者\",{\"1\":{\"1\":1,\"28\":1}}],[\"路径导航\",{\"1\":{\"1\":1,\"28\":1}}],[\"侧边栏\",{\"1\":{\"1\":1,\"28\":1}}],[\"导航栏\",{\"1\":{\"1\":1,\"28\":1}}],[\"本页面就是一个示例\",{\"1\":{\"1\":1}}],[\"在页面禁用功能与布局\",{\"1\":{\"1\":1}}],[\"布局与功能禁用\",{\"0\":{\"1\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
