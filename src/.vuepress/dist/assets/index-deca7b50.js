import{o as l,c as d,d as i,L as n,M as u,N as p,P as v,Q as f}from"./app-e7877d78.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";const h={data(){return{visible:!1,isMobileAu:!1}},props:{src:{type:String,default:"/images/empty.gif"},text:{type:String,default:"Subata"},trigger:{default:"hover"}},methods:{show(a){this.$props.trigger==="hover"&&(this.$data.visible=!0),this.$props.trigger==="click"&&(this.$data.visible=!this.$data.visible)},hide(a){this.$props.trigger==="hover"&&(this.$data.visible=!1)}},created(){}},b=["src"],g=["src"];function _(a,e,r,m,o,s){return l(),d("span",{class:"subata-popover",onClick:e[0]||(e[0]=(...t)=>s.show&&s.show(...t)),onMouseover:e[1]||(e[1]=(...t)=>s.show&&s.show(...t)),onMouseleave:e[2]||(e[2]=(...t)=>s.hide&&s.hide(...t))},[i("img",{src:`/subata${r.src}`},null,8,b),i("span",null,n(r.text),1),u(i("div",{class:f(`subata-popover-body ${o.isMobileAu?"subata-popover-body-app":""}`)},[i("img",{src:`/subata${r.src}`},null,8,g),v(a.$slots,"default")],2),[[p,o.visible]])],32)}const w=c(h,[["render",_],["__file","index.vue"]]);export{w as default};
