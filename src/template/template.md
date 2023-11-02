---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 模板汇总
# sideBar标题
shortTitle: 如何书写你的文章？
# 描述
description: 模板描述
# 文章作者，不填，则会回退到默认作者
author: 蓝色灭火器
# 分类
category:
  - 模板专属标签
# 标签
tag:
  - 模板
# 图标-详情请看：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
icon: book
# 是否原创文章
isOriginal: true
# 写作时间
date: 2023-11-01
# 置顶-数字越大越靠上
sticky: 9
# 时间线
timeline: true
# 封面图
banner: /assets/background/1698762378210.jpg
#---下方的为md正文内容
---


<!-- 一级标题 -->
## Markdown基本写法展示

## 图片引入展示

![图片名称](/assets/background/1698762378175.jpg =200x300)

### 图片代码展示

::: tabs

@tab:active md

<Badge type="tip">推荐写法</Badge>

``` md
![图片名称](/assets/background/1698762378175.jpg =200x300)
```

@tab html

``` html
<img src="/assets/background/1698762378175.jpg" alt="图片名称" width=200 height=300/>
```

:::

## Tab标签

::: tabs

@tab:active tab1

tab1的内容

@tab tab2

tab2的内容

:::

### Tab标签代码展示

``` md
::: tabs

@tab:active tab1

    tab1的内容

@tab tab2

    tab2的内容

:::
```

## Card样式

```card
title: 蓝色灭火器
desc: 蓝色灭火器简介
logo: /assets/background/1698762378195.jpg
link: https://gitee.com/lsmhq
color: rgba(253, 230, 138, 0.15)
```

### Card代码展示

```md
    ```card
    title: 蓝色灭火器
    desc: lsmhqlsmhqlsmhqlsmhqlsmhqlsmhqlsmhqlsmhq
    logo: /assets/background/1698762378195.jpg
    link: https://gitee.com/lsmhq
    color: #ecf4fa
    ```
```

## 标记

Subata ==宇宙== 无敌!

### 标记代码

```md
Subata ==宇宙== 无敌!
```
## 组件展示

## 标签

- <Badge text="tip" type="tip" vertical="middle" />
- <Badge text="warning" type="warning" vertical="middle" />
- <Badge text="danger" type="danger" vertical="middle" />
- <Badge text="info" type="info" vertical="middle" />
- <Badge text="note" type="note" vertical="middle" />

### 标签代码

```html
    - <Badge text="tip" type="tip" vertical="middle" />
    - <Badge text="warning" type="warning" vertical="middle" />
    - <Badge text="danger" type="danger" vertical="middle" />
    - <Badge text="info" type="info" vertical="middle" />
    - <Badge text="note" type="note" vertical="middle" />
```

## BiliBili

<BiliBili bvid="BV1H3411C7ZJ" />

### BiliBili代码

```html
    <BiliBili bvid="BV1H3411C7ZJ"/>
```

## PDF

<PDF url="/assets/sample.pdf" />

### PDF代码

```html
    <PDF url="/assets/sample.pdf" />
```

## 分享

<Share services="qq,weibo" colorful />
<Share colorful />

### 分享代码

```html
    <Share services="qq,weibo" colorful />
    <Share colorful />
```
