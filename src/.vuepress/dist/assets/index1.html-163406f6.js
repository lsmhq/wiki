import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as _,c,e as p,w as n,d,a as t}from"./app-8a1dac44.js";const u="/subata/images/BeastmoonMonsterMayhemCal.png",a={},h=d('<h2 id="月之女神主办的狩猎场——beastmoon" tabindex="-1"><a class="header-anchor" href="#月之女神主办的狩猎场——beastmoon" aria-hidden="true">#</a> <strong>月之女神主办的狩猎场——Beastmoon</strong></h2><h2 id="beastmoon介绍" tabindex="-1"><a class="header-anchor" href="#beastmoon介绍" aria-hidden="true">#</a> <strong>Beastmoon介绍：</strong></h2><figure><img src="'+u+'" alt="封面图" tabindex="0" loading="lazy"><figcaption>封面图</figcaption></figure><ul><li><p>兽月强袭（以下简称打野）是Ki2019推出的全新系列月度活动。</p></li><li><p>以选择扮演相应怪物并在特定地图中进行势力点占取作为竞争核心。</p></li><li><p>红蓝双方的夺取势力点将以点数的形式直观呈现，点数条（满槽为100）先到100的队伍获得胜利；占取势力点固定分值2分，打败敌人固定分值4分/人。</p></li><li><p>该模式不可组队，面向全体玩家，且中途退出将获得15分钟禁赛惩罚。</p></li><li><p>占取势力点的方式，为角色在以法阵为表现的势力点上停留数秒，该势力点首次占取需10秒，若已被占取过，则夺取势力点需要30秒。</p></li><li><p>如果该势力点在占取过程中被另一方队员同时占取，则会爆发势力战。</p></li><li><p>该模式的核心奖励与爬塔一样，为特殊装备外观——兽月披风，无法氪金获得，只能通过兽月强袭活动获得相应线圈进行打造。</p></li></ul><h2 id="术语解释" tabindex="-1"><a class="header-anchor" href="#术语解释" aria-hidden="true">#</a> <strong>术语解释：</strong></h2><p><strong>线圈：该活动唯一产出。</strong></p><p>获得方式为：参加打野结算掉落（固定掉落1）、种植兽月之花收获（基本掉落1，小概率掉落2，且该掉落吃双倍材料与双倍园艺加成）。</p><p>线圈种类：基础线圈、系别线圈、元素线圈、精神线圈、和谐线圈（平衡系专属二级线圈）</p><p><strong>Cap：占点</strong>，避免战斗的纯占取势力点作战，优点是安全无脑，缺点是在快节奏的如今打野版本里一场夺分较低，一般上限在20分左右。</p><p><strong>Battle：势力战</strong>，以跟对面势力打架的方式获得点数，由于打赢势力战直接占领势力点，同时击败一人获得的分值上调至4分，所以2V2打赢就有10分，3V3打赢就有14分，4V4打赢则有18分，在现行版本较为推荐。</p><p><strong>Spiral：终势力点</strong>，在整个地图的中间，拥有4人战斗位，可提供4V4势力战，胜利则队伍点数条上升30分，一锤定音之效果。</p><p>**豆槽：**可提前搜寻并积攒的pips数量。</p><p>**Level：**指怪物角色本次活动等级，影响技能池。</p><p>**Tier：**怪物角色永久等级，仅在永久解锁该怪物角色时可升级，每次活动将把怪物角色level重置为当前tier级数。影响tc技能携带数。</p><p>**刺客：**以rat thief（myth）、elf（fire）、fairy（black）为主要代表，特点是单次伤害较高，且输出平滑，1豆至4豆都有输出技能，能快速拉开血量差距；然而其基础生命较低，同时因为其高威胁容易被集火。</p><p>**战士：**以牛怪、狼、忍者猪、两种木乃伊为主要代表，特点是伤害输出需要一定豆子施放，容易卡豆；但其基础生命较高，可以站场输出。</p><p>**辅助：**以fairy（balance）、elf（ice）、独眼巨人（balance）为例，拥有护盾，加刀，加豆，加血等保人、强化技能，与刺客一同组队有亮眼表现，且嘲讽度比刺客低，往往能站场，但因为输出不足，场上只留辅助则基本宣告本次势力战失败。</p><p>**奶妈：**以亚龙、fairy（balance）为例，拥有回血技能。其中亚龙因为拥有过多回复技能而输出不足，且会严重拖慢战斗时长，因而现版本不再那么流行。刺客克星，战士的噩梦，但因为自身输出过弱已逐渐被拥有同样具有拉人效果的fairy（balance）取代。</p><p>**坦克：**以巨像（ice）为例，基本操作就是加盾，自身血量极高，输出在高豆前提下尚可，由于过于拖慢游戏节奏及几乎没有的输出已无人问津。</p><p>**戏法师：**以牛头（myth）、独眼巨人（black）、fairy（balance）为例，拥有变化类技能，可以解除dot，引爆dot，交换dot，交换debuff，偷取护盾等操作，时机得当往往可以赚取回合优势甚至改变战局。</p><h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> <strong>基本思路：</strong></h2><p>前期：出门2个势力点的初次占取是必须的，保底2分。</p><p>刺客优先吃满豆子，同时开视野</p><p>奶妈辅助跟随刺客行动</p><p>战士可双人组队或与刺客一同行动</p><p>戏法师可单带，同时吃豆子</p><p>坦克不建议选</p><p>当拥有一定豆子时：刺客可与辅助或奶妈组队去battle，戏法师单带capping，战士组队。</p><p>奶妈及辅助不建议单带，遇到对面组合基本无还手之力。</p><p>人数优先于豆子，哪怕没满豆子，队友上了最好也要上，不然队友基本必输。</p><p>后期开spiral时：若落后则优先capping，待双方均在70多时battle；若落后太多直接capping，反正也打不赢了不如拿低保；若领先则停止capping，吃满豆子补满血，逼开battle；若领先太多，可互相capping逐渐胜利，或主动battle夺取胜利。</p><h2 id="怪物扮演介绍" tabindex="-1"><a class="header-anchor" href="#怪物扮演介绍" aria-hidden="true">#</a> <strong>怪物扮演介绍：</strong></h2>',32),r=t("strong",null,"1.巨像（ice）：600生命值",-1),g=t("strong",null,"2.独眼巨人（black）：550生命值",-1),f=t("strong",null,"3.独眼巨人（balance）：575生命值",-1),v=t("strong",null,"4.亚龙：450生命值",-1),b=t("strong",null,"5.elf（fire）：325生命值",-1),m=t("strong",null,"6.elf（ice）：400生命值",-1),A=t("strong",null,"7.fairy（black）：350生命值",-1),y=t("strong",null,"8.fairy（balance）375生命值",-1),x=t("strong",null,"9.木乃伊（冰）生命值：500",-1),V=t("strong",null,"10.木乃伊（风暴）生命值：400",-1),k=t("strong",null,"11.牛怪（fire）生命值：425",-1),B=t("strong",null,"12.牛怪（myth）生命值：425",-1),C=t("p",null,"定位：坦克",-1),N=t("p",null,"豆槽：0",-1),T=t("p",null,"特长：加盾",-1),w=t("p",null,"输出技能：直伤，需要高豆进行一定输出",-1),M=t("p",null,"推荐度：不推荐",-1),S=t("p",null,"使用思路：由于牛怪（myth）这一新怪物及elf（fire）的强势，建议不选",-1),z=t("p",null,"定位：戏法师",-1),E=t("p",null,"豆槽：1",-1),K=t("p",null,"特长：偷取hot，亡语（死亡后产生5回合共250伤害dot）",-1),L=t("p",null,"输出技能：直伤与dot相结合，带吸血，输出技能较为平滑",-1),j=t("p",null,"推荐度：高",-1),q=t("p",null,"使用思路：0豆debuff，留豆吸血，被集火放亡语。",-1),D=t("p",null,"定位：辅助",-1),F=t("p",null,"豆槽：0",-1),G=t("p",null,"特长：盾刀组合buff，交换盾，偷盾，交换dot",-1),H=t("p",null,"输出技能：直伤为主，需要高豆施法，一般为输出上buff",-1),I=t("p",null,"推荐度：高",-1),J=t("p",null,"使用思路：容易被戏法师针对，输出保人都有一定能力。",-1),O=t("p",null,"定位：奶妈",-1),P=t("p",null,"豆槽：2",-1),Q=t("p",null,"特长：奶人，自我苏生，刀，清除dot",-1),R=t("p",null,"输出技能：基本没有",-1),U=t("p",null,"推荐度：高",-1),W=t("p",null,"使用思路：有责任感可以用，因为用了一定会被陷入battle；开局尽量放自我苏生防止被秒。",-1),X=t("p",null,"定位：刺客",-1),Y=t("p",null,"豆槽：2",-1),Z=t("p",null,"特长：高伤害dot，高伤害群攻dot",-1),$=t("p",null,"输出技能：全部都为dot，但总伤害破格",-1),tt=t("p",null,"推荐度：强角",-1),nt=t("p",null,"使用思路：嘲讽度极高，适合小规模势力战，4V4第一回合基本就死。",-1),st=t("p",null,"定位：辅助",-1),ot=t("p",null,"豆槽：3",-1),lt=t("p",null,"特长：盾豆组合buff",-1),et=t("p",null,"输出技能：亏伤害技能，基本靠队友",-1),it=t("p",null,"推荐度：较弱",-1),_t=t("p",null,"使用思路：给队友加盾豆buff，看着他输出，他死了你也死了。",-1),ct=t("p",null,"定位：刺客",-1),pt=t("p",null,"豆槽：2",-1),dt=t("p",null,"特长：吸血，陷阱",-1),ut=t("p",null,"输出技能：dot为主，拥有吸血",-1),at=t("p",null,"推荐度：强角",-1),ht=t("p",null,"使用思路：前期贴陷阱，被打了吸血，拉开血量差。",-1),rt=t("p",null,"定位：戏法师",-1),gt=t("p",null,"豆槽：3",-1),ft=t("p",null,"特长：加豆交换组合buff，回血，交换dot",-1),vt=t("p",null,"输出技能：7豆超新星525伤害，2豆200dot150",-1),bt=t("p",null,"推荐度：强角",-1),mt=t("p",null,"使用思路：留回血技能奶已死队友，前期2豆补伤害的同时自我回血；嘲讽度极高，超新星基本不要想。",-1),At=t("p",null,"定位：战士",-1),yt=t("p",null,"豆槽：2",-1),xt=t("p",null,"特长：稳中求胜",-1),Vt=t("p",null,"输出技能：高豆施法一定输出",-1),kt=t("p",null,"推荐度：中等",-1),Bt=t("p",null,"使用思路：上两个版本的强角，如今因为神圣牛头的出现地位尴尬",-1),Ct=t("p",null,"定位：战士",-1),Nt=t("p",null,"豆槽：1",-1),Tt=t("p",null,"特长：残血双倍输出，技能带移除持续效果",-1),wt=t("p",null,"输出技能：0豆技能亏伤害，在学会泰坦前无1豆输出，较卡手",-1),Mt=t("p",null,"推荐度：中等",-1),St=t("p",null,"使用思路：别人不打你就没啥伤害，克制hot与dot",-1),zt=t("p",null,"定位：战士",-1),Et=t("p",null,"豆槽：1",-1),Kt=t("p",null,"特长：直伤优秀，群攻多",-1),Lt=t("p",null,"输出技能：直伤很高，实则容易卡豆丧失输出机会",-1),jt=t("p",null,"推荐度：中等",-1),qt=t("p",null,"使用思路：0豆debuff，帮队友清除dot，高豆秒人或群攻",-1),Dt=t("p",null,"定位：戏法师",-1),Ft=t("p",null,"豆槽：1",-1),Gt=t("p",null,"特长：偷盾，加盾，召唤minion拉开人数差，minion为盾系专精",-1),Ht=t("p",null,"输出技能：直伤稳定",-1),It=t("p",null,"推荐度：强角",-1),Jt=t("p",null,"使用思路：小规模势力战十分强力，4V4也可以作为盾系的克星使用，嘲讽较高。",-1),Ot=t("p",null,[t("strong",null,"13.忍者猪 生命值：450")],-1),Pt=t("p",null,"定位：战士",-1),Qt=t("p",null,"豆槽：2",-1),Rt=t("p",null,"特长：吸血，陷阱",-1),Ut=t("p",null,"输出技能：直伤稳定，吸血需要高豆施法",-1),Wt=t("p",null,"推荐度：强角",-1),Xt=t("p",null,"使用思路：万精油，什么队伍都可以配。",-1),Yt=t("p",null,[t("strong",null,"14.rat thief（storm）生命值：300")],-1),Zt=t("p",null,"定位：戏法师",-1),$t=t("p",null,"豆槽：1",-1),tn=t("p",null,"特长：驱散技能，眩晕",-1),nn=t("p",null,"输出技能：直伤技能平滑且伤害不俗",-1),sn=t("p",null,"推荐度：较弱",-1),on=t("p",null,"使用思路：上场后手则无出手机会。",-1),ln=t("p",null,[t("strong",null,"15.rat thief（myth）生命值：325")],-1),en=t("p",null,"定位：刺客",-1),_n=t("p",null,"豆槽：2",-1),cn=t("p",null,"特长：高直伤，高直伤群攻，召唤minion（辅助专精）",-1),pn=t("p",null,"输出技能：优秀且平滑",-1),dn=t("p",null,"推荐度：强角",-1),un=t("p",null,"使用思路：活着到群攻放出去就赢了，不然就输了，小规模势力战极强；嘲讽第一。",-1),an=t("p",null,[t("strong",null,"16.狼（风暴）生命值：500")],-1),hn=t("p",null,"定位：战士",-1),rn=t("p",null,"豆槽：1",-1),gn=t("p",null,"特长：强力单体，控场",-1),fn=t("p",null,"输出技能：不平滑，低豆技能为控场，亏伤害",-1),vn=t("p",null,"推荐度：普通",-1),bn=t("p",null,"使用思路：对面有亚龙建议不选，彼此克制。但溢出的高单体输出非常克制平衡仙女。",-1),mn=t("p",null,[t("strong",null,"17.狼（平衡）生命值：575")],-1),An=t("p",null,"定位：辅助",-1),yn=t("p",null,"豆槽：1",-1),xn=t("p",null,"特长：交换刀",-1),Vn=t("p",null,"输出技能：平滑且优秀",-1),kn=t("p",null,"推荐度：高",-1),Bn=t("p",null,"使用思路：不熟悉其技能的容易造成把自己刀子移给对方导致战斗失败的惨剧。",-1);function Cn(Nn,Tn){const l=i("Tabs");return _(),c("div",null,[h,p(l,{id:"130",data:[{id:"<strong>1.巨像（ice）：600生命值</strong>"},{id:"<strong>2.独眼巨人（black）：550生命值</strong>"},{id:"<strong>3.独眼巨人（balance）：575生命值</strong>"},{id:"<strong>4.亚龙：450生命值</strong>"},{id:"<strong>5.elf（fire）：325生命值</strong>"},{id:"<strong>6.elf（ice）：400生命值</strong>"},{id:"<strong>7.fairy（black）：350生命值</strong>"},{id:"<strong>8.fairy（balance）375生命值</strong>"},{id:"<strong>9.木乃伊（冰）生命值：500</strong>"},{id:"<strong>10.木乃伊（风暴）生命值：400</strong>"},{id:"<strong>11.牛怪（fire）生命值：425</strong>"},{id:"<strong>12.牛怪（myth）生命值：425</strong>"}],active:0},{title0:n(({value:s,isActive:o})=>[r]),title1:n(({value:s,isActive:o})=>[g]),title2:n(({value:s,isActive:o})=>[f]),title3:n(({value:s,isActive:o})=>[v]),title4:n(({value:s,isActive:o})=>[b]),title5:n(({value:s,isActive:o})=>[m]),title6:n(({value:s,isActive:o})=>[A]),title7:n(({value:s,isActive:o})=>[y]),title8:n(({value:s,isActive:o})=>[x]),title9:n(({value:s,isActive:o})=>[V]),title10:n(({value:s,isActive:o})=>[k]),title11:n(({value:s,isActive:o})=>[B]),tab0:n(({value:s,isActive:o})=>[C,N,T,w,M,S]),tab1:n(({value:s,isActive:o})=>[z,E,K,L,j,q]),tab2:n(({value:s,isActive:o})=>[D,F,G,H,I,J]),tab3:n(({value:s,isActive:o})=>[O,P,Q,R,U,W]),tab4:n(({value:s,isActive:o})=>[X,Y,Z,$,tt,nt]),tab5:n(({value:s,isActive:o})=>[st,ot,lt,et,it,_t]),tab6:n(({value:s,isActive:o})=>[ct,pt,dt,ut,at,ht]),tab7:n(({value:s,isActive:o})=>[rt,gt,ft,vt,bt,mt]),tab8:n(({value:s,isActive:o})=>[At,yt,xt,Vt,kt,Bt]),tab9:n(({value:s,isActive:o})=>[Ct,Nt,Tt,wt,Mt,St]),tab10:n(({value:s,isActive:o})=>[zt,Et,Kt,Lt,jt,qt]),tab11:n(({value:s,isActive:o})=>[Dt,Ft,Gt,Ht,It,Jt,Ot,Pt,Qt,Rt,Ut,Wt,Xt,Yt,Zt,$t,tn,nn,sn,on,ln,en,_n,cn,pn,dn,un,an,hn,rn,gn,fn,vn,bn,mn,An,yn,xn,Vn,kn,Bn]),_:1},8,["data"])])}const Sn=e(a,[["render",Cn],["__file","index1.html.vue"]]);export{Sn as default};
