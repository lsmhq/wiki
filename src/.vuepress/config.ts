import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "./",
  lang: "zh-CN",
  title: "Subata",
  description: "Subata",
  theme,
  plugins:[
    searchProPlugin({
      // 配置选项
      searchDelay: 500,
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "Category: $content",
          },
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: {
            "/": "标签：$content",
          },
        },
      ],
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
