import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "入坑准备",
      icon: "star",
      prefix: "main",
      children: 'structure',
      collapsible: true
    },{
      text: "新人基础指南",
      icon: "book",
      prefix: "base",
      children: 'structure',
      collapsible: true
    },{
      text: "深入游戏指南",
      icon: "plane",
      prefix: "deep",
      children: 'structure',
      collapsible: true
    },{
      text: "常用工具",
      icon: "tools",
      prefix: "tools",
      children: 'structure',
      collapsible: true
    },{
      text: "日常休闲",
      icon: "sun",
      prefix: "daily",
      children: 'structure',
      collapsible: true
    },{
      text: "战斗玩法",
      icon: "gun",
      prefix: "fight",
      children: 'structure',
      collapsible: true
    },{
      text: "特殊玩法(轮换周常)",
      icon: "play",
      prefix: "special",
      children: 'structure',
      collapsible: true
    },{
      text: "生产采集",
      icon: "hammer",
      prefix: "manufacture",
      children: 'structure',
      collapsible: true
    },{
      text: "其他游戏系统",
      icon: "child",
      prefix: "other",
      children: 'structure',
      collapsible: true
    }
  ],
  '/template/':[
    {
      text: "准备工作",
      icon: "home",
      prefix: "template/",
      children: [
        {
          text: '准备',
          link: '/template/start.md',
          icon: 'hand'
        },{
          text: 'Clone 仓库',
          link: '/template/clone.md',
          icon: 'book'
        },{
          text: 'Vscode 书写',
          link: '/template/vsc.md',
          icon: 'pen'
        },{
          text: '上传文件',
          link: '/template/push.md',
          icon: 'upload'
        },{
          text: '线上书写可跳过以上所有步骤',
          link: '/template/startOnline.md',
          icon: 'cat'
        }
      ],
      collapsible: true
    },{
      text: '书写语法介绍',
      link: '/template/template.md',
      icon: 'code'
    },{
      text: '原则',
      link: '/template/rules.md',
      icon: 'heart'
    },{
      text: '更新流程',
      icon: 'key',
      children:[
        {
          text: '本地运行',
          link: '/template/dev.md'
        },{
          text: '本地打包',
          link: '/template/build.md'
        },{
          text: '更新发布',
          link: '/template/publish.md'
        },
      ]
    }
  ]
});
