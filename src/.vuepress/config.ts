import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Subata",
  description: "Subata",
  theme
  // Enable it with pwa
  // shouldPrefetch: false,
});
