import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import path from "path";

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

      autoSuggestions: false,
      hotKeys: [],
      searchDelay: 500,
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
    registerComponentsPlugin({
      components: {
        Icon: path.resolve(__dirname, "./components/Icon/index.vue"),
        Button: path.resolve(__dirname, "./components/Button/index.vue"),
        Card: path.resolve(__dirname, "./components/Card/index.vue"),
        Canculate: path.resolve(__dirname, "./components/canculate/index.vue"),
        PopOver: path.resolve(__dirname, "./components/popover/index.vue"),
      }
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
