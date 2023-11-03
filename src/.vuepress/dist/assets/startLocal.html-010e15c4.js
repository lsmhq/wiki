import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c,a,b as e,e as i,w as t,d as n}from"./app-f013bd81.js";const u="/subata/assets/image/{BDB35562-E1C4-4f71-826F-774CB7B6A9D0}.png",h="/subata/assets/image/20231103101946.png",g="/subata/assets/image/git/{FE9C5A22-2116-4eba-9202-5466D4726075}.png",p="/subata/assets/image/git/QQ截图20231103103528.png",m="/subata/assets/image/git/QQ截图20231103103549.png",b="/subata/assets/image/git/{BDAA45F8-223C-4d61-8682-4E29B1003536}.png",_="/subata/assets/image/git/QQ截图20231103104113.png",v="/subata/assets/image/git/QQ截图20231103104328.png",f={},k=n('<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="你需要准备" tabindex="-1"><a class="header-anchor" href="#你需要准备" aria-hidden="true">#</a> 你需要准备</h3><h4 id="git安装方法-二选一" tabindex="-1"><a class="header-anchor" href="#git安装方法-二选一" aria-hidden="true">#</a> Git安装方法 - 二选一</h4>',3),x={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},B=a("li",null,[a("p",null,"cmd 运行下方命令")],-1),V=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
winget <span class="token function">install</span> <span class="token parameter variable">--id</span> Git.Git <span class="token parameter variable">-e</span> <span class="token parameter variable">--source</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vscode安装" tabindex="-1"><a class="header-anchor" href="#vscode安装" aria-hidden="true">#</a> VScode安装</h4>`,2),G={href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"},S=a("li",null,"下载完毕，运行下载好的可执行文件",-1),y=a("li",null,"选择安装目录",-1),z=a("li",null,"等待安装完毕",-1),q=a("h3",{id:"配置git",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#配置git","aria-hidden":"true"},"#"),e(" 配置git")],-1),Q=a("h4",{id:"首先准备一个gitee账号-如果已有可跳过本步骤",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#首先准备一个gitee账号-如果已有可跳过本步骤","aria-hidden":"true"},"#"),e(" 首先准备一个Gitee账号，如果已有可跳过本步骤")],-1),w={href:"https://gitee.com/signup#lang=zh-CN",target:"_blank",rel:"noopener noreferrer"},C=n(`<h4 id="本地git设置" tabindex="-1"><a class="header-anchor" href="#本地git设置" aria-hidden="true">#</a> 本地Git设置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 配置username</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name-这个自己叫什么就写什么，随便写&quot;</span>

<span class="token comment"># 配置账号</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;your_email@example.com-自己的邮箱&quot;</span>

<span class="token comment"># 完毕</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clone-仓库" tabindex="-1"><a class="header-anchor" href="#clone-仓库" aria-hidden="true">#</a> clone 仓库</h4>`,3),E=a("li",null,"我们找个想存放md文件的文件夹，位置随意，在文件夹中右键",-1),N=a("mark",null,"右键菜单",-1),D=a("li",null,"之后弹出黑框框",-1),A=a("li",null,"复制并执行下方命令",-1),L=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 开始克隆</span>
<span class="token function">git</span> clone https://gitee.com/lsmhq/subata.git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>等待黑框框克隆完毕</li><li>可以开始写作惹</li></ul><h3 id="vscode操作" tabindex="-1"><a class="header-anchor" href="#vscode操作" aria-hidden="true">#</a> VScode操作</h3><ul><li>双击桌面VScode图标 打开VScode</li><li>点击顶部菜单-文件-打开文件夹</li><li>选择自己之前克隆文件的文件夹</li><li>此时VScode中已经出现了文件目录结构</li></ul><figure><img src="`+u+'" alt="目录结构" width="200" height="500" tabindex="0" loading="lazy"><figcaption>目录结构</figcaption></figure><ul><li>src 文件夹下的目录结构就对应了页面中侧边导航栏的结构</li></ul><h4 id="如何找到自己想编辑页面对应的文件" tabindex="-1"><a class="header-anchor" href="#如何找到自己想编辑页面对应的文件" aria-hidden="true">#</a> 如何找到自己想编辑页面对应的文件</h4><ul><li>到网页中，我们可以点击文章底部的<mark>编辑按钮</mark>，将会跳转到</li></ul><figure><img src="'+h+'" alt="编辑地址" tabindex="0" loading="lazy"><figcaption>编辑地址</figcaption></figure><ul><li>我们可以看到地址中也会有src，后面的路径就是对应的md文件</li></ul><h3 id="如何进行书写" tabindex="-1"><a class="header-anchor" href="#如何进行书写" aria-hidden="true">#</a> 如何进行书写？</h3>',11),F={href:"https://lsmhq.gitee.io/subata/template/template.html",target:"_blank",rel:"noopener noreferrer"},H=a("h3",{id:"编辑完如何上传文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#编辑完如何上传文件","aria-hidden":"true"},"#"),e(" 编辑完如何上传文件")],-1),I=a("h4",{id:"vscode-上传",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vscode-上传","aria-hidden":"true"},"#"),e(" VScode 上传")],-1),T=a("li",null,[a("p",null,"按下图步骤操作")],-1),Y=n('<figure><img src="'+g+'" alt="点击左侧的源代码管理" tabindex="0" loading="lazy"><figcaption>点击左侧的源代码管理</figcaption></figure><figure><img src="'+p+'" alt="鼠标移动到更改，并点击+号" tabindex="0" loading="lazy"><figcaption>鼠标移动到更改，并点击+号</figcaption></figure><figure><img src="'+m+'" alt="此时变成这个样子" tabindex="0" loading="lazy"><figcaption>此时变成这个样子</figcaption></figure><figure><img src="'+b+'" alt="我们再写上本次提交的日志，并点击大大的提交按钮" tabindex="0" loading="lazy"><figcaption>我们再写上本次提交的日志，并点击大大的提交按钮</figcaption></figure><figure><img src="'+_+'" alt="最后再推送到网上的gitee的仓库中" tabindex="0" loading="lazy"><figcaption>最后再推送到网上的gitee的仓库中</figcaption></figure><figure><img src="'+v+'" alt="点击后，等待转圈圈，转完表示提交完毕" tabindex="0" loading="lazy"><figcaption>点击后，等待转圈圈，转完表示提交完毕</figcaption></figure><ul><li><p>如果出现账密登录，使用注册的gitee账密登录</p></li><li><p>结束</p></li></ul><h4 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令" aria-hidden="true">#</a> Git命令</h4><h5 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h5><ul><li>在VScode中，<mark>右击</mark>左侧目录中的<mark>src</mark>，会弹出菜单，我们点击<mark>在文件资源管理器中显示</mark></li><li>此时会弹出一个文件管理器</li><li>位置刚好是克隆文件的文件夹</li><li>我们在文件夹空白位置右键，选择Git Bash Here</li><li>弹出了黑框框,执行下方命令</li></ul><h5 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h5>',11),j=n(`<ul><li>点击VScode 顶部菜单的 <mark>终端</mark> ，我们新建终端，并执行下方代码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin v-wiki

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;你想说的话-随便写&quot;</span>

<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin v-wiki

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>如果弹出了账密登录窗口，就填写Gitee的账密</mark></li></ul>`,3);function J(K,M){const s=r("ExternalLinkIcon"),l=r("Badge");return o(),c("div",null,[k,a("ul",null,[a("li",null,[a("p",null,[e("点击下载 - "),a("a",x,[e("Git"),i(s)]),e(),i(l,null,{default:t(()=>[e("推荐")]),_:1})])]),B]),V,a("ul",null,[a("li",null,[e("点击下载进行安装 - "),a("a",G,[e("VScode"),i(s)])]),S,y,z]),q,Q,a("ul",null,[a("li",null,[a("a",w,[e("点击前往注册账号"),i(s)])])]),C,a("ul",null,[E,a("li",null,[e("安装完git后鼠标"),N,e("会出现相应的选项，我们选择 "),i(l,null,{default:t(()=>[e("Git Bash Here")]),_:1}),e(" 选项")]),D,A]),L,a("p",null,[a("a",F,[e("书写方式请点击查看"),i(s)])]),H,I,a("ul",null,[a("li",null,[i(l,null,{default:t(()=>[e("推荐操作")]),_:1})]),T]),Y,i(l,null,{default:t(()=>[e("推荐方法")]),_:1}),j])}const R=d(f,[["render",J],["__file","startLocal.html.vue"]]);export{R as default};
