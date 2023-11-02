import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  
  base: "/subata/",

  lang: "zh-CN",

  title: "Subata",

  description: "Subata",

  theme,

  plugins:[
    searchProPlugin({
      //
      // 索引全部内容
      indexContent: true,

      queryHistoryCount: 0,

      resultHistoryCount: 0,

      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
