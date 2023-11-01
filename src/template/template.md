---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 模板汇总
# sideBar标题
shortTitle: 如何书写你的文章？
# 描述
description: 模板描述
# 文章作者，不填，则会回退到默认作者
autho: 蓝色灭火器
# 用时

# 分类
category:
  - 模板专属标签
# 标签
tag:
  - 模板
# 图标-详情请看：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
icon: 
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
## 图片引入展示

<img src="/assets/background/1698762378175.jpg" alt="图片名称" width=250/>

## 图片代码展示

::: tabs

@tab:active md

``` md
![图片名称](/assets/background/1698762378175.jpg)
```

@tab html

``` html
<img src="/assets/background/1698762378175.jpg" alt="图片名称" width=250/>
```

:::

## Tab标签

::: tabs

@tab:active tab1

tab1的内容

@tab tab2

tab2的内容

:::

## Tab标签代码展示

``` md
    ::: tabs

    @tab:active tab1

        tab1的内容

    @tab tab2

        tab2的内容

    :::
```