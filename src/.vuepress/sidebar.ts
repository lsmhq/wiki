import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "入坑准备",
      icon: "laptop-code",
      prefix: "main",
      children: 'structure',
      collapsible: true
    },{
      text: "新人基础指南",
      icon: "laptop-code",
      prefix: "base/",
      children: 'structure',
      collapsible: true
    },{
      text: "深入游戏指南",
      icon: "laptop-code",
      prefix: "deep/",
      children: 'structure',
      collapsible: true
    },{
      text: "常用工具",
      icon: "laptop-code",
      prefix: "tools/",
      children: 'structure',
      collapsible: true
    },{
      text: "日常休闲",
      icon: "laptop-code",
      prefix: "daily/",
      children: 'structure',
      collapsible: true
    },{
      text: "战斗玩法",
      icon: "laptop-code",
      prefix: "fight/",
      children: 'structure',
      collapsible: true
    },{
      text: "特殊玩法(轮换周常)",
      icon: "laptop-code",
      prefix: "special/",
      children: 'structure',
      collapsible: true
    },{
      text: "生产采集",
      icon: "laptop-code",
      prefix: "manufacture/",
      children: 'structure',
      collapsible: true
    },{
      text: "其他游戏系统",
      icon: "laptop-code",
      prefix: "other/",
      children: 'structure',
      collapsible: true
    }
  ],
  '/template/':[
    {
      text: "原初模板",
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
    }
  ]
});
