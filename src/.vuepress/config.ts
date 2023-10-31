import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Subata",
  description: "Subata",
  theme,
  plugins:[
    searchProPlugin({
      // 配置选项
      searchDelay: 500
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
