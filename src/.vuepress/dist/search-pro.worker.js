const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const l of e.keys())if(l===F){const a=o[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=u;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=o[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=o[f+y]+ +b,A=o[f+y+1]+1,w=o[p+y]+1,L=o[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,o,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const l=new Map;l.set(u.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(u),e=l}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const l of Object.keys(u)){const a=u[l],h=e._fieldIds[l],m=o.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:N(n.boost,g)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,o,u,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,o,u,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,o,u,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(u),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=k(u),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(u,d)),u=l,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),l=u.includes("#"),[a,h]=u.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>o.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(o.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in o)for(const c of o.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":49,\"nextId\":49,\"documentIds\":{\"0\":\"v-bf49e556\",\"1\":\"v-3cde1f86\",\"2\":\"v-3cde1f86#页面内容\",\"3\":\"v-3cde1f86@0\",\"4\":\"v-3cde1f86@1\",\"5\":\"v-32a10bcc\",\"6\":\"v-32a10bcc#免费试玩\",\"7\":\"v-32a10bcc#收费方式和充值奖励\",\"8\":\"v-44032603\",\"9\":\"v-44032603#文章信息配置代码展示\",\"10\":\"v-44032603#markdown基本写法展示\",\"11\":\"v-44032603#标题\",\"12\":\"v-44032603#标题-1\",\"13\":\"v-44032603#标题-2\",\"14\":\"v-44032603#标题-3\",\"15\":\"v-44032603#标题代码\",\"16\":\"v-44032603#标记\",\"17\":\"v-44032603#标记代码\",\"18\":\"v-44032603#段落\",\"19\":\"v-44032603#换行\",\"20\":\"v-44032603#换行代码展示\",\"21\":\"v-44032603#列表\",\"22\":\"v-44032603#列表代码\",\"23\":\"v-44032603#超链接\",\"24\":\"v-44032603#超链接代码\",\"25\":\"v-44032603#可复制代码块\",\"26\":\"v-44032603#代码展示\",\"27\":\"v-44032603#表格\",\"28\":\"v-44032603#表格代码展示\",\"29\":\"v-44032603#图片引入展示\",\"30\":\"v-44032603#图片代码展示\",\"31\":\"v-44032603#tab标签\",\"32\":\"v-44032603#tab标签代码展示\",\"33\":\"v-44032603#card样式\",\"34\":\"v-44032603@0\",\"35\":\"v-44032603@1\",\"36\":\"v-555c22e6\",\"37\":\"v-555c22e6#战斗类\",\"38\":\"v-1455d425\",\"39\":\"v-79c9f96f\",\"40\":\"v-1473a16a\",\"41\":\"v-7da36e58\",\"42\":\"v-14f0b23d\",\"43\":\"v-a3412df2\",\"44\":\"v-e4cb1150\",\"45\":\"v-5787c08f\",\"46\":\"v-7493181c\",\"47\":\"v-d440f426\",\"48\":\"v-f88c904c\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1],\"2\":[1],\"3\":[null,null,1],\"4\":[null,null,1],\"5\":[1,4],\"6\":[1,27],\"7\":[1,26],\"8\":[1],\"9\":[1,46],\"10\":[1],\"11\":[1],\"12\":[1],\"13\":[1],\"14\":[1],\"15\":[1,2],\"16\":[1,3],\"17\":[1,6],\"18\":[1,3],\"19\":[1,12],\"20\":[1,13],\"21\":[1,12],\"22\":[1,16],\"23\":[1,1],\"24\":[1,6],\"25\":[1,9],\"26\":[1,11],\"27\":[1,11],\"28\":[1,14],\"29\":[1,1],\"30\":[1],\"31\":[1],\"32\":[1,8],\"33\":[1],\"34\":[null,null,1],\"35\":[null,null,1],\"36\":[1],\"37\":[1,15],\"38\":[1],\"39\":[1],\"40\":[1],\"41\":[1],\"42\":[1],\"43\":[1],\"44\":[1],\"45\":[1],\"46\":[1],\"47\":[1],\"48\":[1]},\"averageFieldLength\":[1,9.606379585326954,0.43333333333333335],\"storedFields\":{\"0\":{\"h\":\"游戏背景介绍\"},\"1\":{\"h\":\"下载注册与创建角色\"},\"2\":{\"h\":\"页面内容\"},\"3\":{\"c\":[\"使用指南\"]},\"4\":{\"c\":[\"tag\"]},\"5\":{\"h\":\"游戏收费方式与福利介绍\",\"t\":[\"沃尔学院美服采用地图买断/月卡并行的计费模式，同时对于刚入坑的新人提供免费试玩魔法城部分区域等多重福利。\"]},\"6\":{\"h\":\"免费试玩\",\"t\":[\"沃尔学院美服可以免费试玩独角兽大道及海神大街任务线，大约能到5-8级左右。\",\"当然，免费试玩账号有一定功能上的限制，比如不能发词库之外的单词（包括数字，中文等，看到别人很多内容会被过滤为“...”）。\",\"当你首充（最低2美元-14元）之后，就算激活账户，可以进入官网设置自由聊天（Open-Chat)，就可以自由输入。\",\"官网不定期会举办两种免费活动，一种是免费试玩第一故事线（包括魔法城、克洛克、玛丽伯恩、木须和龙之谷），另一种是免费会员（一般在周年庆或者圣诞节有可能开启）\"]},\"7\":{\"h\":\"收费方式和充值奖励\",\"t\":[\"沃尔学院美服提供点卡和地图买断两种收费模式。买断地图约为2000皇冠地图一个小区域，一个世界大约需要（150-300元），月卡约为60元/月。\",\"::: collapse 关于商城\",\"游戏道具商城提供一些装备、宠物、外观、坐骑、动作、传送特效、药剂，还有家具等等。游戏外观是无属性的装备，必须通过[装备缝合]的方式使用，商城坐骑的移动速度和游戏内的其他坐骑也是一样的（少数例外的拥有50%移速，普通坐骑40%移速）。\"]},\"8\":{\"h\":\"模板汇总\"},\"9\":{\"h\":\"文章信息配置代码展示\",\"t\":[\"--- # 标题-sideBar在shortTitle不设置时使用title的文本 title: 模板汇总 # sideBar标题 shortTitle: 如何书写你的文章？ # 描述 description: 模板描述 # 文章作者，不填，则会回退到默认作者 author: 蓝色灭火器 # 分类 category: - 模板专属标签 # 标签 tag: - 模板 # 图标 icon: book # 是否原创文章 isOriginal: true # 写作时间 date: 2023-11-01 # 置顶-数字越大越靠上 sticky: 9 # 时间线 timeline: true # 封面图 banner: /assets/background/1698762378210.jpg # ---下方的为md正文内容 --- \"]},\"10\":{\"h\":\"Markdown基本写法展示\"},\"11\":{\"h\":\"标题\"},\"12\":{\"h\":\"标题\"},\"13\":{\"h\":\"标题\"},\"14\":{\"h\":\"标题\"},\"15\":{\"h\":\"标题代码\",\"t\":[\"## 标题 ### 标题 #### 标题 ##### 标题 \"]},\"16\":{\"h\":\"标记\",\"t\":[\"Subata宇宙无敌!\",\"这句话里拥有加粗、倾斜和删除\"]},\"17\":{\"h\":\"标记代码\",\"t\":[\" *Subata* ==宇宙无敌==! **加粗**、*倾斜*和~~删除~~ \"]},\"18\":{\"h\":\"段落\",\"t\":[\"这是一个段落。\",\"这是另一个段落。\",\"这是一个段落。 这是另一个段落。 \"]},\"19\":{\"h\":\"换行\",\"t\":[\"拦路雨偏似雪花 饮泣的你冻吗 这风褛我给你磨到有襟花 连调了职也不怕 怎么始终牵挂 苦心选中今天想车你回家 原谅我不再送花 伤口应要结疤 花瓣铺满心里坟场才害怕 如若你非我不嫁 彼此终必火化 一生一世等一天需要代价\"]},\"20\":{\"h\":\"换行代码展示\",\"t\":[\"拦路雨偏似雪花 饮泣的你冻吗\\\\ 这风褛我给你磨到有襟花\\\\ 连调了职也不怕 怎么始终牵挂\\\\ 苦心选中今天想车你回家\\\\ 原谅我不再送花 伤口应要结疤\\\\ 花瓣铺满心里坟场才害怕\\\\ 如若你非我不嫁 彼此终必火化\\\\ 一生一世等一天需要代价 \"]},\"21\":{\"h\":\"列表\",\"t\":[\"DUO \",\"富士山下\",\"落花流水\",\"Eason's Moving On \",\"马里奥派对\",\"浮夸\",\"列表换行 \",\"比如这里有很多内容 需要进行一个行的换\",\"比如这里有很多内容 需要进行一个行的换\",\"DUO\",\"Eason's Moving On\",\"比如这里有很多内容 需要进行一个行的换\"]},\"22\":{\"h\":\"列表代码\",\"t\":[\"- DUO - 富士山下 - 落花流水 - Eason's Moving On - 马里奥派对 - 浮夸 - 列表换行 - 比如这里有很多内容\\\\ 需要进行一个行的换 - 比如这里有很多内容\\\\ 需要进行一个行的换 1. DUO 2. Eason's Moving On 3. 比如这里有很多内容\\\\ 需要进行一个行的换 \"]},\"23\":{\"h\":\"超链接\",\"t\":[\"Bilibili\"]},\"24\":{\"h\":\"超链接代码\",\"t\":[\"[Bilibili](https://www.bilibili.com) \"]},\"25\":{\"h\":\"可复制代码块\",\"t\":[\"// 可复制的哦 const code: string = `代码块` console.log(code) \"]},\"26\":{\"h\":\"代码展示\",\"t\":[\" ```ts // 可复制的哦 const code: string = `代码块` console.log(code) ``` \"]},\"27\":{\"h\":\"表格\",\"t\":[\"居中\",\"右对齐\",\"左对齐\",\"居中使用:-:\",\"右对齐使用-:\",\"左对齐使用:-\",\"b\",\"aaaaaaaaa\",\"aaaa\",\"c\",\"aaaa\",\"a\"]},\"28\":{\"h\":\"表格代码展示\",\"t\":[\"| 居中 | 右对齐 | 左对齐 | | :-----------: | -------------: | :------------- | | 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` | | b | aaaaaaaaa | aaaa | | c | aaaa | a | \"]},\"29\":{\"h\":\"图片引入展示\",\"t\":[\"图片名称\"]},\"30\":{\"h\":\"图片代码展示\"},\"31\":{\"h\":\"Tab标签\"},\"32\":{\"h\":\"Tab标签代码展示\",\"t\":[\"::: tabs @tab:active tab1 tab1的内容 @tab tab2 tab2的内容 ::: \"]},\"33\":{\"h\":\"Card样式\"},\"34\":{\"c\":[\"模板专属标签\"]},\"35\":{\"c\":[\"模板\"]},\"36\":{\"h\":\"黑话缩略语词典\"},\"37\":{\"h\":\"战斗类\",\"t\":[\"TC：Treasure Card，即宝藏卡\\nBC：Battle Card，兽月模式中的宝藏卡\\nSpellments：技能碎片，用于解锁和升级技能\\n虹豆/彩豆/学院豆：即学院魔豆，每个系的学院魔豆都可以作为该系的两个魔豆使用\"]},\"38\":{\"h\":\"Base\"},\"39\":{\"h\":\"Daily\"},\"40\":{\"h\":\"Deep\"},\"41\":{\"h\":\"Fight\"},\"42\":{\"h\":\"Main\"},\"43\":{\"h\":\"Manufacture\"},\"44\":{\"h\":\"Other\"},\"45\":{\"h\":\"Special\"},\"46\":{\"h\":\"Template\"},\"47\":{\"h\":\"Tools\"},\"48\":{\"h\":\"外观\"}},\"dirtCount\":0,\"index\":[[\"fight\",{\"0\":{\"41\":1}}],[\"每个系的学院魔豆都可以作为该系的两个魔豆使用\",{\"1\":{\"37\":1}}],[\"即学院魔豆\",{\"1\":{\"37\":1}}],[\"即宝藏卡\",{\"1\":{\"37\":1}}],[\"学院豆\",{\"1\":{\"37\":1}}],[\"彩豆\",{\"1\":{\"37\":1}}],[\"虹豆\",{\"1\":{\"37\":1}}],[\"用于解锁和升级技能\",{\"1\":{\"37\":1}}],[\"技能碎片\",{\"1\":{\"37\":1}}],[\"兽月模式中的宝藏卡\",{\"1\":{\"37\":1}}],[\"战斗类\",{\"0\":{\"37\":1}}],[\"黑话缩略语词典\",{\"0\":{\"36\":1}}],[\"图片代码展示\",{\"0\":{\"30\":1}}],[\"图片名称\",{\"1\":{\"29\":1}}],[\"图片引入展示\",{\"0\":{\"29\":1}}],[\"图标\",{\"1\":{\"9\":1}}],[\"|\",{\"1\":{\"28\":20}}],[\"左对齐使用`\",{\"1\":{\"28\":1}}],[\"左对齐使用\",{\"1\":{\"27\":1}}],[\"左对齐\",{\"1\":{\"27\":1,\"28\":1}}],[\"右对齐使用`\",{\"1\":{\"28\":1}}],[\"右对齐使用\",{\"1\":{\"27\":1}}],[\"右对齐\",{\"1\":{\"27\":1,\"28\":1}}],[\"居中使用`\",{\"1\":{\"28\":1}}],[\"居中使用\",{\"1\":{\"27\":1}}],[\"居中\",{\"1\":{\"27\":1,\"28\":1}}],[\"表格代码展示\",{\"0\":{\"28\":1}}],[\"表格\",{\"0\":{\"27\":1}}],[\"`\",{\"1\":{\"28\":3}}],[\"```\",{\"1\":{\"26\":1}}],[\"```ts\",{\"1\":{\"26\":1}}],[\"`代码块`\",{\"1\":{\"25\":1,\"26\":1}}],[\"代码展示\",{\"0\":{\"26\":1}}],[\"log\",{\"1\":{\"25\":1,\"26\":1}}],[\"=\",{\"1\":{\"25\":1,\"26\":1}}],[\"==宇宙无敌==\",{\"1\":{\"17\":1}}],[\"可复制的哦\",{\"1\":{\"25\":1,\"26\":1}}],[\"可复制代码块\",{\"0\":{\"25\":1}}],[\"可以进入官网设置自由聊天\",{\"1\":{\"6\":1}}],[\"www\",{\"1\":{\"24\":1}}],[\"https\",{\"1\":{\"24\":1}}],[\"超链接代码\",{\"0\":{\"24\":1}}],[\"超链接\",{\"0\":{\"23\":1}}],[\"3\",{\"1\":{\"22\":1}}],[\"300元\",{\"1\":{\"7\":1}}],[\"2\",{\"1\":{\"22\":1}}],[\"2023\",{\"1\":{\"9\":1}}],[\"需要进行一个行的换\",{\"1\":{\"21\":3,\"22\":3}}],[\"比如这里有很多内容\",{\"1\":{\"21\":3,\"22\":3}}],[\"比如不能发词库之外的单词\",{\"1\":{\"6\":1}}],[\"浮夸\",{\"1\":{\"21\":1,\"22\":1}}],[\"马里奥派对\",{\"1\":{\"21\":1,\"22\":1}}],[\"other\",{\"0\":{\"44\":1}}],[\"on\",{\"1\":{\"21\":2,\"22\":2}}],[\"open\",{\"1\":{\"6\":1}}],[\"manufacture\",{\"0\":{\"43\":1}}],[\"main\",{\"0\":{\"42\":1}}],[\"markdown基本写法展示\",{\"0\":{\"10\":1}}],[\"moving\",{\"1\":{\"21\":2,\"22\":2}}],[\"eason\",{\"1\":{\"21\":2,\"22\":2}}],[\"落花流水\",{\"1\":{\"21\":1,\"22\":1}}],[\"富士山下\",{\"1\":{\"21\":1,\"22\":1}}],[\"列表代码\",{\"0\":{\"22\":1}}],[\"列表换行\",{\"1\":{\"21\":1,\"22\":1}}],[\"列表\",{\"0\":{\"21\":1}}],[\"彼此终必火化\",{\"1\":{\"19\":1,\"20\":1}}],[\"如若你非我不嫁\",{\"1\":{\"19\":1,\"20\":1}}],[\"如何书写你的文章\",{\"1\":{\"9\":1}}],[\"花瓣铺满心里坟场才害怕\",{\"1\":{\"19\":1,\"20\":1}}],[\"伤口应要结疤\",{\"1\":{\"19\":1,\"20\":1}}],[\"原谅我不再送花\",{\"1\":{\"19\":1,\"20\":1}}],[\"苦心选中今天想车你回家\",{\"1\":{\"19\":1,\"20\":1}}],[\"怎么始终牵挂\",{\"1\":{\"19\":1,\"20\":1}}],[\"连调了职也不怕\",{\"1\":{\"19\":1,\"20\":1}}],[\"饮泣的你冻吗\",{\"1\":{\"19\":1,\"20\":1}}],[\"拦路雨偏似雪花\",{\"1\":{\"19\":1,\"20\":1}}],[\"换行代码展示\",{\"0\":{\"20\":1}}],[\"换行\",{\"0\":{\"19\":1}}],[\"这风褛我给你磨到有襟花\",{\"1\":{\"19\":1,\"20\":1}}],[\"这是另一个段落\",{\"1\":{\"18\":2}}],[\"这是一个段落\",{\"1\":{\"18\":2}}],[\"这句话里拥有加粗\",{\"1\":{\"16\":1}}],[\"段落\",{\"0\":{\"18\":1}}],[\"和~~删除~~\",{\"1\":{\"17\":1}}],[\"倾斜\",{\"1\":{\"17\":1}}],[\"倾斜和删除\",{\"1\":{\"16\":1}}],[\"加粗\",{\"1\":{\"17\":1}}],[\"下方的为md正文内容\",{\"1\":{\"9\":1}}],[\"下载注册与创建角色\",{\"0\":{\"1\":1}}],[\"jpg\",{\"1\":{\"9\":1}}],[\"active\",{\"1\":{\"32\":1}}],[\"a\",{\"1\":{\"27\":1,\"28\":1}}],[\"aaaa\",{\"1\":{\"27\":2,\"28\":2}}],[\"aaaaaaaaa\",{\"1\":{\"27\":1,\"28\":1}}],[\"assets\",{\"1\":{\"9\":1}}],[\"author\",{\"1\":{\"9\":1}}],[\"bc\",{\"1\":{\"37\":1}}],[\"b\",{\"1\":{\"27\":1,\"28\":1}}],[\"bilibili\",{\"1\":{\"23\":1,\"24\":2}}],[\"base\",{\"0\":{\"38\":1}}],[\"battle\",{\"1\":{\"37\":1}}],[\"background\",{\"1\":{\"9\":1}}],[\"banner\",{\"1\":{\"9\":1}}],[\"book\",{\"1\":{\"9\":1}}],[\"封面图\",{\"1\":{\"9\":1}}],[\"时间线\",{\"1\":{\"9\":1}}],[\"9\",{\"1\":{\"9\":1}}],[\"数字越大越靠上\",{\"1\":{\"9\":1}}],[\"置顶\",{\"1\":{\"9\":1}}],[\"01\",{\"1\":{\"9\":1}}],[\"deep\",{\"0\":{\"40\":1}}],[\"description\",{\"1\":{\"9\":1}}],[\"daily\",{\"0\":{\"39\":1}}],[\"date\",{\"1\":{\"9\":1}}],[\"duo\",{\"1\":{\"21\":2,\"22\":2}}],[\"写作时间\",{\"1\":{\"9\":1}}],[\"isoriginal\",{\"1\":{\"9\":1}}],[\"icon\",{\"1\":{\"9\":1}}],[\"是否原创文章\",{\"1\":{\"9\":1}}],[\"标记代码\",{\"0\":{\"17\":1}}],[\"标记\",{\"0\":{\"16\":1}}],[\"标签\",{\"1\":{\"9\":1}}],[\"标题代码\",{\"0\":{\"15\":1}}],[\"标题\",{\"0\":{\"11\":1,\"12\":1,\"13\":1,\"14\":1},\"1\":{\"9\":1,\"15\":4}}],[\"分类\",{\"1\":{\"9\":1}}],[\"蓝色灭火器\",{\"1\":{\"9\":1}}],[\"则会回退到默认作者\",{\"1\":{\"9\":1}}],[\"不填\",{\"1\":{\"9\":1}}],[\"文章作者\",{\"1\":{\"9\":1}}],[\"文章信息配置代码展示\",{\"0\":{\"9\":1}}],[\"模板\",{\"1\":{\"9\":1},\"2\":{\"35\":1}}],[\"模板专属标签\",{\"1\":{\"9\":1},\"2\":{\"34\":1}}],[\"模板描述\",{\"1\":{\"9\":1}}],[\"模板汇总\",{\"0\":{\"8\":1},\"1\":{\"9\":1}}],[\"描述\",{\"1\":{\"9\":1}}],[\"special\",{\"0\":{\"45\":1}}],[\"spellments\",{\"1\":{\"37\":1}}],[\"string\",{\"1\":{\"25\":1,\"26\":1}}],[\"sticky\",{\"1\":{\"9\":1}}],[\"s\",{\"1\":{\"21\":2,\"22\":2}}],[\"subata\",{\"1\":{\"17\":1}}],[\"subata宇宙无敌\",{\"1\":{\"16\":1}}],[\"shorttitle\",{\"1\":{\"9\":1}}],[\"sidebar标题\",{\"1\":{\"9\":1}}],[\"sidebar在shorttitle不设置时使用title的文本\",{\"1\":{\"9\":1}}],[\"tools\",{\"0\":{\"47\":1}}],[\"template\",{\"0\":{\"46\":1}}],[\"treasure\",{\"1\":{\"37\":1}}],[\"true\",{\"1\":{\"9\":2}}],[\"tc\",{\"1\":{\"37\":1}}],[\"tab2的内容\",{\"1\":{\"32\":1}}],[\"tab2\",{\"1\":{\"32\":1}}],[\"tab1的内容\",{\"1\":{\"32\":1}}],[\"tab1\",{\"1\":{\"32\":1}}],[\"tab\",{\"1\":{\"32\":2}}],[\"tabs\",{\"1\":{\"32\":1}}],[\"tab标签代码展示\",{\"0\":{\"32\":1}}],[\"tab标签\",{\"0\":{\"31\":1}}],[\"tag\",{\"1\":{\"9\":1},\"2\":{\"4\":1}}],[\"timeline\",{\"1\":{\"9\":1}}],[\"title\",{\"1\":{\"9\":1}}],[\"普通坐骑40\",{\"1\":{\"7\":1}}],[\"移速\",{\"1\":{\"7\":2}}],[\"少数例外的拥有50\",{\"1\":{\"7\":1}}],[\"商城坐骑的移动速度和游戏内的其他坐骑也是一样的\",{\"1\":{\"7\":1}}],[\"的方式使用\",{\"1\":{\"7\":1}}],[\"装备缝合\",{\"1\":{\"7\":1}}],[\"必须通过\",{\"1\":{\"7\":1}}],[\"还有家具等等\",{\"1\":{\"7\":1}}],[\"药剂\",{\"1\":{\"7\":1}}],[\"传送特效\",{\"1\":{\"7\":1}}],[\"动作\",{\"1\":{\"7\":1}}],[\"坐骑\",{\"1\":{\"7\":1}}],[\"外观\",{\"0\":{\"48\":1},\"1\":{\"7\":1}}],[\"宠物\",{\"1\":{\"7\":1}}],[\"关于商城\",{\"1\":{\"7\":1}}],[\"card\",{\"1\":{\"37\":2}}],[\"card样式\",{\"0\":{\"33\":1}}],[\"category\",{\"1\":{\"9\":1}}],[\"c\",{\"1\":{\"27\":1,\"28\":1}}],[\"console\",{\"1\":{\"25\":1,\"26\":1}}],[\"const\",{\"1\":{\"25\":1,\"26\":1}}],[\"code\",{\"1\":{\"25\":2,\"26\":2}}],[\"com\",{\"1\":{\"24\":1}}],[\"collapse\",{\"1\":{\"7\":1}}],[\"chat\",{\"1\":{\"6\":1}}],[\"月\",{\"1\":{\"7\":1}}],[\"月卡约为60元\",{\"1\":{\"7\":1}}],[\"月卡并行的计费模式\",{\"1\":{\"5\":1}}],[\"1\",{\"1\":{\"22\":1}}],[\"1698762378210\",{\"1\":{\"9\":1}}],[\"11\",{\"1\":{\"9\":1}}],[\"150\",{\"1\":{\"7\":1}}],[\"14元\",{\"1\":{\"6\":1}}],[\"买断地图约为2000皇冠地图一个小区域\",{\"1\":{\"7\":1}}],[\"收费方式和充值奖励\",{\"0\":{\"7\":1}}],[\"一生一世等一天需要代价\",{\"1\":{\"19\":1,\"20\":1}}],[\"一个世界大约需要\",{\"1\":{\"7\":1}}],[\"一般在周年庆或者圣诞节有可能开启\",{\"1\":{\"6\":1}}],[\"一种是免费试玩第一故事线\",{\"1\":{\"6\":1}}],[\"另一种是免费会员\",{\"1\":{\"6\":1}}],[\"木须和龙之谷\",{\"1\":{\"6\":1}}],[\"玛丽伯恩\",{\"1\":{\"6\":1}}],[\"克洛克\",{\"1\":{\"6\":1}}],[\"包括魔法城\",{\"1\":{\"6\":1}}],[\"包括数字\",{\"1\":{\"6\":1}}],[\"官网不定期会举办两种免费活动\",{\"1\":{\"6\":1}}],[\"就可以自由输入\",{\"1\":{\"6\":1}}],[\"就算激活账户\",{\"1\":{\"6\":1}}],[\"之后\",{\"1\":{\"6\":1}}],[\"最低2美元\",{\"1\":{\"6\":1}}],[\"当你首充\",{\"1\":{\"6\":1}}],[\"当然\",{\"1\":{\"6\":1}}],[\"看到别人很多内容会被过滤为\",{\"1\":{\"6\":1}}],[\"中文等\",{\"1\":{\"6\":1}}],[\"8级左右\",{\"1\":{\"6\":1}}],[\"大约能到5\",{\"1\":{\"6\":1}}],[\"沃尔学院美服提供点卡和地图买断两种收费模式\",{\"1\":{\"7\":1}}],[\"沃尔学院美服可以免费试玩独角兽大道及海神大街任务线\",{\"1\":{\"6\":1}}],[\"沃尔学院美服采用地图买断\",{\"1\":{\"5\":1}}],[\"免费试玩账号有一定功能上的限制\",{\"1\":{\"6\":1}}],[\"免费试玩\",{\"0\":{\"6\":1}}],[\"同时对于刚入坑的新人提供免费试玩魔法城部分区域等多重福利\",{\"1\":{\"5\":1}}],[\"游戏外观是无属性的装备\",{\"1\":{\"7\":1}}],[\"游戏道具商城提供一些装备\",{\"1\":{\"7\":1}}],[\"游戏收费方式与福利介绍\",{\"0\":{\"5\":1}}],[\"游戏背景介绍\",{\"0\":{\"0\":1}}],[\"使用指南\",{\"2\":{\"3\":1}}],[\"页面内容\",{\"0\":{\"2\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
