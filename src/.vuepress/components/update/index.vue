<template>
  <details class="item">
    <summary class="title">
      <span class="title-title">敬请期待下一版本</span>
      <span class="title-time"> ......</span>
      <span class="title-time">点击展开</span>
    </summary>
    <div v-html="`...`"></div>
  </details>
  <details class="item" v-for="item in updates" :key="item.time">
    <summary class="title">
      <span class="title-title">{{ item.title }}</span>
      <span class="title-time">{{ item.time }}-{{ item.username }}</span>
      <span class="title-time">点击展开</span>
    </summary>
    <div v-html="item.msg"></div>
  </details>
</template>

<script>
export default {
  data() {
    return {
      updates: [
        {
          msg: "启动器 V0.1.0 正式开发结束\n欢迎体验并提出宝贵意见\n我会适当地采纳并进行修改\n这次的主要功能如下：\n       1、新闻、活动的展示\n       2、游戏的快速启动\n       3、汉化补丁的一键安装和更新\n由于KI的注册表没有储存安装路径信息，所以V0.1.0仅支持Steam端的汉化和启动，后续我会添加官服的一键汉化和启动，敬请期待吧！\n                             \n                                                                                   ——灭火器",
          title: "Subata启动器V0.1.0正式发布",
          username: "蓝色灭火器",
          time: "2022年9月11日 0:5",
        },
        {
          msg: "经过灭火器的不懈努力\n\n本次更新内容:\n1、解决下载补丁时通知中心闪烁问题\n2、解决通知中心消息排序问题，现在改为最新消息在最顶\n3、优化操作逻辑，点击开始游戏后自动最小化\n4、调整UI样式，给右侧工具栏加上文字提示\n5、支持Steam自定义安装路径和官服游戏的启动和一键安装补丁功能\n\n😊",
          title: "启动器更新-开发者日志",
          username: "蓝色灭火器",
          time: "2022年9月11日 22:46",
        },
        {
          msg: "本次更新内容\n1、修复系统缩放不为100%情况下的拖拽窗口导致变形的bug\n2、优化操作体验\n3、优化界面适配不同屏幕分辨率和缩放下的按钮显示位置不一致问题\n\nH",
          title: "启动器更新-开发者日志",
          username: "蓝色灭火器",
          time: "2022年9月13日 0:41",
        },
        {
          msg: "1、此次添加启动器自更新功能\n2、优化屏幕适配\n\nHe",
          title: "启动器更新-开发者日志",
          username: "蓝色灭火器",
          time: "2022年9月13日 20:24",
        },
        {
          msg: "V 1.1.6 完美自更新版本发布\n\n添加检测上次安装的汉化类型方便区分\n\nLi",
          title: "启动器更新-开发者日志",
          username: "蓝色灭火器",
          time: "2022年9月14日 23:40",
        },
        {
          msg: "1、优化不同屏幕下的显示状态\n2、优化缓存及时清除\n\nBe",
          title: "启动器更新-v1.1.8",
          username: "蓝色灭火器",
          time: "2022年9月16日 17:16",
        },
        {
          msg: "1、换部署方式\n2、每次退出清掉缓存保证页面为最新\n3、新增安装补丁测试版慎重选择弹窗\n\nC",
          title: "启动器更新-v1.1.9",
          username: "蓝色灭火器",
          time: "2022年9月19日 10:31",
        },
        {
          msg: "1、新增设置模块\n     - 可进行背景图的切换\n     - 按钮功能自定义\n     - 初始化到原始状态\n2、优化启动器逻辑，解决官服并且没有安装steam的情况下无法启动的bug\n3、修改轮播图、修改轮播图下方的新闻活动公告\n4、优化操作体验\n\nN",
          title: "启动器更新-V1.2.1",
          username: "蓝色灭火器",
          time: "2022年9月23日 16:8",
        },
        {
          msg: "1、增加任务栏小图标\n2、增加任务栏下载进度条，最小化时也能看到下载进度\n3、优化设置操作\n4、优化用户体验\n\n\nO",
          title: "启动器更新-1.2.3",
          username: "蓝色灭火器",
          time: "2022年10月7日 1:51",
        },
        {
          msg: "1、支持账号密码登录和账号密码的管理(增加、修改和删除账号)、本地储存，不会泄露\n2、开始游戏按钮功能逻辑修改、从螺旋启动改为了账号密码登录\n3、右上角按钮样式调整\n4、导航栏调整\n5、页面布局微调\n\n\nF\n\n发布日期大概在10月25号前",
          title: "预备更新-V1.2.5",
          username: "蓝色灭火器",
          time: "2022年10月19日 17:25",
        },
        {
          msg: "1、经过漫长的4天开发，终于解决了账号密码登录问题,支持多开，支持账号密码记忆，仅限电脑记忆，换了电脑需要重新输入。\n     登录原理如下\n点击登录按钮：\n第一步、检测本地有没有一个python脚本，如果有直接调用，没有的话，进行下载。\n第二步、完成后调用，传入账号密码\n第三步、python脚本调用user32.dll(一个windows库)，模拟玩家进行账密输入\n第四步、关闭登录弹框\n\n2、账号存储问题，所有手输入的账号均在本地存储，防止账号泄露\n\n3、python脚本来自一老外，经过布雷兹调整为了适合启动器调用的版本，经过审查此脚本并不存在盗账号的代码段\n\n总结：放心使用，绝对安全，除非把电脑丢了！(❁´◡`❁)",
          title: "启动器更新-V1.2.5",
          username: "蓝色灭火器",
          time: "2022年10月20日 21:38",
        },
        {
          msg: "\n1、修复一些bug\n2、优化性能",
          title: "V1.2.6-不值一提的更新",
          username: "蓝色灭火器",
          time: "2022年10月21日 14:12",
        },
        {
          msg: "添加调试功能，方便定位bug原因",
          title: "V1.2.7",
          username: "蓝色灭火器",
          time: "2022年10月25日 11:59",
        },
        {
          msg: "增加账号密码登录，选择后回车快速登录\n优化体验",
          title: "V1.2.7 追加更新内容",
          username: "蓝色灭火器",
          time: "2022年10月25日 17:28",
        },
        {
          msg: "新增备份配置文件功能\n优化启动器稳定性\n\n\n\n\n\n\n\nNe",
          title: "启动器更新-V1.2.8",
          username: "蓝色灭火器",
          time: "2022年10月26日 16:50",
        },
        {
          msg: "1、账号绑定头像、修改头像\n2、登录界面美化\n3、账号输入框清空按钮\n4、设置弹框布局优化\n5、标题显示使用人数\n\n\nNa",
          title: "启动器更新V1.2.9",
          username: "蓝色灭火器",
          time: "2022年10月29日 15:57",
        },
        {
          msg: "1、支持选择本地文件夹，读取壁纸\n2、修改更新逻辑\n3、添加壁纸切换功能，并且记忆上次壁纸，仅限同一台电脑并且本地壁纸资源没有被删掉\n\n\n\nMg",
          title: "V1.2.10",
          username: "蓝色灭火器",
          time: "2022年11月5日 9:14",
        },
        {
          msg: "1、优化启动器启动时背景图加载逻辑\n2、修改背景图支持数量\n3、修改部分代码逻辑",
          title: "V1.3.0",
          username: "蓝色灭火器",
          time: "2022年11月26日 23:7",
        },
        {
          msg: "1、更新头像为wiz主题\n2、调整标题栏，使用原生标题栏\n3、设置面板挪动到右侧工具栏\n4、修改安装补丁图标\n5、当前在线人数挪动到开始游戏按钮\n6、发现在线人数统计在后台运行时统计不准确、下几个版本进行修改\n\n\n\n巴拉巴拉~",
          title: "V1.3.3更新内容",
          username: "蓝色灭火器",
          time: "2022年12月14日 17:6",
        },
        {
          msg: "圣诞节临近，邀请大家圣诞夜赏雪~",
          title: "看雪",
          username: "圣诞",
          time: "2022年12月14日 17:20",
        },
        {
          msg: "新增iKun、海豹主题头像，需要新增主题包找 《锤飞你是我》热心群友进行上传【🌹】",
          title: "V1.3.4小更新",
          username: "蓝色灭火器",
          time: "2022年12月15日 11:31",
          del: true,
        },
        {
          msg: "1、修改头像操作简化\n2、账号展示改为： 头像+账号名形式\n3、修复了一些bug",
          title: "V1.3.5-bug维修和头像处理",
          username: "蓝色灭火器",
          time: "2022年12月16日 21:50",
        },
        {
          msg: "V1.3.5中存在内存泄漏bug，导致页面整体非常卡顿，V1.3.6进行了修复",
          title: "V1.3.6 更新",
          username: "蓝色灭火器",
          time: "2022年12月20日 17:25",
        },
        {
          msg: "1、修改上上上上版拖拽bug\n2、修改样式\n3、后续可能支持自动检测游戏安装目录",
          title: "v1.4.1更新日志",
          username: "蓝色灭火器",
          time: "2023年2月2日 11:29",
        },
        {
          msg: "1、优化窗口样式\n2、优化体验\n3、本次解决了很多细节问题\n4、应该是变得有点丝滑了，体验较以前要好些",
          title: "1.4.2更新日志",
          username: "蓝色灭火器",
          time: "2023年2月15日 13:51",
        },
        {
          msg: "还支持了40%页面的 繁简英三种文字的切换\n埋了个彩蛋~",
          title: "1.4.2补充日志",
          username: "蓝色灭火器",
          time: "2023年2月15日 14:8",
        },
        {
          msg: "1、窗口可以灵活修改宽高\n2、其他优化...",
          title: "V1.4.3-窗口灵活大小",
          username: "蓝色灭火器",
          time: "2023年2月28日 17:28",
        },
        {
          msg: "1、新增另外几种语言补丁的下载安装方式\n2、背景图丢失问题\n3、其他。。。",
          title: "V1.4.4更新日志",
          username: "复归的蓝色灭火器",
          time: "2023年3月15日 23:31",
        },
        {
          msg: "1、新增小詹的商店\n2、修改下载补丁出现的bug\n3、正在研究如何压缩打包体积，减少安装包大小，敬请期待...",
          title: "V1.4.5更新",
          username: "蓝色灭火器",
          time: "2023年3月22日 10:21",
        },
        {
          msg: "1、开始游戏按钮新增菜单\n2、新增地区上线人数统计\n3、新增web柱状图\n4、补丁安装UI修改，可到开始游戏菜单中进行安装、切换，老版的也没有删除\n5、重写部分代码",
          title: "V1.4.7-更新日志",
          username: "蓝色灭火器",
          time: "2023年5月6日 15:6",
        },
        {
          msg: "修改补丁名称...",
          title: "V1.4.8",
          username: "蓝色灭火器",
          time: "2023年5月6日 16:48",
        },
        {
          msg: "优化补丁安装，新版UI\n优化其他...",
          title: "V1.4.10",
          username: "蓝色灭火器",
          time: "2023年5月17日 10:43",
        },
        {
          msg: "1、新增点赞功能（每人每天仅限10次）\n2、全新UI界面重构\n3、逻辑全部重做\n4、优化其他...",
          title: "v2.0.1",
          username: "蓝色灭火器",
          time: "2023-07-27 13:10:02",
        },
        {
          msg: '<div>兼容win10以下系统</div><br/><a target="_blank" href="http://101.43.174.221:3001/file/subataWin7Update/Subata-win7%20Setup%202.0.1.exe">v2.0.1-win7-点击下载</a>',
          title: "v2.0.1-win7特供版",
          username: "蓝色灭火器",
          time: "2023-07-28 11:36:35",
        },
        {
          msg: "优化-\n1、修改海盗游戏启动问题，修改文件名称\n2、优化账号登录窗口交互逻辑\n\n新增功能-\n1、账号按登录时间冒泡，登录时间越晚搜索框越靠前\n2、新增其他两款经典皮肤\n3、新增提示声音\n\n注意-\nwin10以下系统版本，耐心等待两天",
          title: "v2.0.2（win10+/11）",
          username: "蓝色灭火器",
          time: "2023-07-30 16:47:27",
        },
        {
          msg: "1、修复登录页面的一些bug\n2、修改日志样式\n3、优化关闭流程",
          title: "v2.0.3（win10+）",
          username: "蓝色灭火器",
          time: "2023-07-31 15:53:02",
        },
        {
          msg: '更新内容同win10+版本\n<a href="http://101.43.174.221:3001/file/subataWin7Update/Subata Setup 2.0.3.exe">点击下载安装包</a>',
          title: "v2.0.3-win7",
          username: "蓝色灭火器",
          time: "2023-07-31 16:32:03",
        },
        {
          msg: "新增功能\n1、日志页面添加消息分类功能\n2、管理员可以进行消息发布\n\n优化内容\n1、补丁使用、安装提示信息新增一个跳转按钮",
          title: "v2.0.4-win10+",
          username: "蓝色灭火器",
          time: "2023-08-01 14:43:54",
        },
        {
          msg: "-更新内容\n1、新增其他交互声音\n2、更新游戏图标\n3、设置中可以开关声音\n4、设置中新增两种动态壁纸（方块、圆圈）\n\n-优化\n1、消息页面\n2、某些卡顿",
          title: "v2.0.5-win10+",
          username: "蓝色灭火器",
          time: "2023-08-02 20:24:42",
        },
        {
          msg: "更新内容\n同win10+\n可前往设置页面进行检查更新",
          title: "v2.0.5-win7",
          username: "蓝色灭火器",
          time: "2023-08-02 20:25:32",
        },
        {
          msg: "\n更新内容-\n      1、 样式大更新，夜间模式和白天模式看起来更加舒服\n       2、皮肤也同样支持黑白两种模式\n       3、调整颜色的选取\n       4、修改海盗游戏的启动逻辑\n\n重要更新\n       1、设置中清除数据修改为只清除账号以外的数据\n\n优化\n       1、调整背景的黑白两种风格的舒适度\n\n何时才能更新？\n答：最快本周周日晚，最晚下周周日晚\n",
          title: "v2.0.6-更新预告！！！",
          username: "蓝色灭火器",
          id: 0.711756060313322,
          time: "2023-08-04 14:17:13",
          msgid: 0.6413403368947672,
        },
        {
          msg: "新增-\n宠物计算器\n\n优化x\n\n注意-\n\n【+65 +40 +25 操作】需要在加减按钮上右键点击弹出！！！\n",
          title: "v2.0.7-全部版本",
          username: "蓝色灭火器",
          time: "2023-08-07 17:58:36",
        },
        {
          msg: "优化\n黑白模式切换文字颜色显示\n根据不同皮肤显示不同文字颜色，观感更舒服",
          title: "v2.0.8",
          username: "蓝色灭火器",
          time: "2023-08-08 11:28:30",
        },
        {
          msg: "更新内容\n1、新增搜索功能，支持搜索攻略、账号（根据账号名搜索）\n2、新增账号页面，根据QQ获取头像并应用\n\n优化内容\n1、宠物计算器调整布局\n2、调整拖拽条在不同颜色背景下的可视度",
          title: "v2.0.9",
          username: "蓝色灭火器",
          time: "2023-08-16 20:23:29",
        },
        {
          msg: "更新内容\n支持更小尺寸调整\n修改计算器的图标支持类型\n调整离线状态补丁无法显示问题\n\n优化\n无\n\n注意事项\n无",
          title: "v2.1.0",
          username: "蓝色灭火器",
          time: "2023-08-23 10:46:26",
        },
        {
          msg: "新增\n1、计算器记忆功能\n2、所有删除按钮新增二次确认，防止误点\n3、检查更新弹窗底色修复\n4、左下方图标更换，贡献榜移动到爱心图标按钮\n\n优化\n1、补丁安装，如果本地没有使用补丁，会将刚才安装的补丁启用\n2、修复补丁页面多次安装同一个补丁时，进度显示异常问题\n\n注意事项\n无",
          title: "v2.1.1",
          username: "蓝色灭火器",
          time: "2023-08-25 21:30:43",
        },
        {
          msg: "更新内容\n1、补丁下载之后，如果没有应用任何补丁，会自动应用；如果应用的补丁为本次下载的补丁，也会自动应用；\n2、补丁设置新增提示补丁更新-小红点，不用点进补丁设置里也可以知道存在更新内容了\n3、修改宠物计算器布局\n\n优化\n1、计算器按钮文字颜色\n2、某些情况下崩溃的bug\n3、keyword优化\n4、贡献榜的点赞功能修复\n5、免费皇冠点击跳转页面，现改为跳到脚本页和答题页\n6、下载文件完成时，频繁多次触发问题\n",
          title: "v2.1.2",
          username: "蓝色灭火器",
          time: "2023-09-05 15:30:45",
        },
        {
          msg: "更新内容\n新增浏览历史前进后退\n新增自动获取Steam端wiz101安装路径\n\n优化\n优化了一些细节\n\n最近发生了一些事情，但是我们还是要坚持下去🤞",
          title: "v2.1.3",
          username: "蓝色灭火器",
          time: "2023-09-14 19:55:03",
        },
        {
          msg: "新年快乐\n更新内容\n1、新增一款红色风格皮肤\n2、开放自定义启动参数\n3、增加游戏新版wiki\n4、有雪！",
          title: "v2.1.4",
          username: "蓝色灭火器",
          time: "2024-01-26 16:53:27",
        },
      ],
    };
  },
  created() {
    const data = this.$data.updates.map((item) => {
      item.msg = item.msg.replaceAll("\n", "<br/>");
      return {
        ...item,
      };
    });
    this.$data.updates = data.reverse();
  },
};
</script>

<style lang="scss" scoped>
.title {
  cursor: pointer;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  .title-title {
    font-size: 26px;
    color: rgb(24, 117, 255);
  }
  .title-time {
    font-size: 15px;
  }
}
.item {
  background-color: rgba(233, 233, 233, 0.674);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 25px;
  margin: 20px;
}
</style>