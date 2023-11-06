import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as d,a as e,b as n,d as a,w as c,e as t}from"./app-7c56c401.js";const u={},h=e("h3",{id:"你需要准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#你需要准备","aria-hidden":"true"},"#"),n(" 你需要准备")],-1),m=e("h4",{id:"git安装方法-二选一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git安装方法-二选一","aria-hidden":"true"},"#"),n(" Git安装方法 - 二选一")],-1),p=e("mark",null,"方法一：",-1),_={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[e("p",null,[e("mark",null,"方法二："),n(" cmd 运行下方命令")])],-1),b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
winget <span class="token function">install</span> <span class="token parameter variable">--id</span> Git.Git <span class="token parameter variable">-e</span> <span class="token parameter variable">--source</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vscode安装" tabindex="-1"><a class="header-anchor" href="#vscode安装" aria-hidden="true">#</a> VScode安装</h4>`,2),g={href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"下载完毕，运行下载好的可执行文件",-1),k=e("li",null,"选择安装目录",-1),x=e("li",null,"等待安装完毕",-1),G=e("h3",{id:"配置git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置git","aria-hidden":"true"},"#"),n(" 配置git")],-1),N=e("h4",{id:"首先准备一个gitee账号-如果已有可跳过本步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#首先准备一个gitee账号-如果已有可跳过本步骤","aria-hidden":"true"},"#"),n(" 首先准备一个Gitee账号，如果已有可跳过本步骤")],-1),V={href:"https://gitee.com/signup#lang=zh-CN",target:"_blank",rel:"noopener noreferrer"},B=t(`<h4 id="本地git设置" tabindex="-1"><a class="header-anchor" href="#本地git设置" aria-hidden="true">#</a> 本地Git设置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 配置username</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name-这个自己叫什么就写什么，随便写&quot;</span>

<span class="token comment"># 配置账号</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;your_email@example.com-自己的邮箱&quot;</span>

<span class="token comment"># 完毕</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(w,C){const s=i("ExternalLinkIcon"),l=i("Badge");return o(),d("div",null,[h,m,e("ul",null,[e("li",null,[e("p",null,[p,n(),e("a",_,[n("点击下载 - Git"),a(s)]),n(),a(l,null,{default:c(()=>[n("推荐")]),_:1})])]),v]),b,e("ul",null,[e("li",null,[n("点击下载进行安装 - "),e("a",g,[n("VScode"),a(s)])]),f,k,x]),G,N,e("ul",null,[e("li",null,[e("a",V,[n("点击前往注册账号"),a(s)])])]),B])}const I=r(u,[["render",q],["__file","start.html.vue"]]);export{I as default};
