---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 自定义组件
# sideBar标题
shortTitle: 组件
# 描述
description: 自定义组件
# 文章作者，不填，则会回退到默认作者
author: 蓝色灭火器
# 分类
category: 
  - 自定义组件
# 标签
tag: 
  - 教程
# 图标-详情请看：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
icon: book
# 是否原创文章
isOriginal: true
# 写作时间
date: 2023-11-14
# 置顶-数字越大越靠上
sticky: 9
# 时间线
timeline: true
# 封面图
banner: /assets/background/1698762378210.jpg
#---下方的为md正文内容
---

## PopOver - 半成品待优化

### 样式

<p>
这是一个例子：
    <PopOver
        src="/images/empty.gif"
        text="图片"
    >Empty.gif</PopOver>
</p>

### 代码展示

```md
<p>
这是一个例子：
    <PopOver
        src="/images/empty.gif"
        text="图片"
    >Empty.gif</PopOver>
</p>
```

### 参数介绍

名称|类型|作用|默认值
-|-|-|-
src|String|图片路径|'/images/empty.gif'
text|String|文本内容|'Subata'
trigger|'hover' \| 'click'|触发方式|'hover'
