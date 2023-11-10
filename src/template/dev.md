---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 本地运行
# sideBar标题
shortTitle: 本地运行
# 描述
description: 本地运行
# 文章作者，不填，则会回退到默认作者
author: 蓝色灭火器
# 分类
category: 
  - 本地运行
# 标签
tag: 
  - 教程
# 图标-详情请看：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
icon: book
# 是否原创文章
isOriginal: true
# 写作时间
date: 2023-11-10
# 置顶-数字越大越靠上
sticky: 9
# 时间线
timeline: true
# 封面图
banner: /assets/background/1698762378210.jpg
#---下方的为md正文内容
---

## 准备工作

### Node环境

- 下载Node - [点击前往下载-Node.js](https://nodejs.org/en)
- 安装Node
- 结束

### pnpm

```sh
#全局安装pnpm
npm i -g pnpm
```

### vuepress

```sh
# 安装vuepress
npm i -g vuepress
```

## 运行

### 进入项目文件夹

```sh
# 安装依赖
pnpm install

# 运行
npm run docs:dev
```
