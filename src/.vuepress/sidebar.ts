import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "入坑准备",
      icon: "laptop-code",
      prefix: "main/",
      children: 'structure',
      collapsible: true
    }
  ],
});
