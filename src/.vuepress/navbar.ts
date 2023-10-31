import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "我是菜单",
    icon: "lightbulb",
    children: [
      {
        text: "我是菜",
        icon: "lightbulb",
        children: ["菜", { text: "的答复", link: "" }],
      },
      {
        text: "我是单",
        icon: "lightbulb",
        children: ["单", { text: "噔噔咚", link: "" }],
      },
    ],
  }
]);
