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
  - 模板专属分类
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
## 文章信息配置代码展示

```md
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
# 图标
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

# ---下方的为md正文内容
---
```

<!-- 一级标题 -->
## Markdown基本写法展示

## 标题

### 标题

#### 标题

##### 标题

### 标题代码

```md
## 标题
### 标题
#### 标题
##### 标题
```

## 标记

*Subata* ==宇宙无敌==!

这句话里拥有**加粗**、*倾斜*和~~删除~~

### 标记代码

```md

*Subata* ==宇宙无敌==!

**加粗**、*倾斜*和~~删除~~

```

## 段落

这是一个段落。

这是另一个段落。

```md
这是一个段落。

这是另一个段落。
```

## 换行

拦路雨偏似雪花 饮泣的你冻吗\
这风褛我给你磨到有襟花\
连调了职也不怕 怎么始终牵挂\
苦心选中今天想车你回家\
原谅我不再送花 伤口应要结疤\
花瓣铺满心里坟场才害怕\
如若你非我不嫁 彼此终必火化\
一生一世等一天需要代价

### 换行代码展示

```md
拦路雨偏似雪花 饮泣的你冻吗\
这风褛我给你磨到有襟花\
连调了职也不怕 怎么始终牵挂\
苦心选中今天想车你回家\
原谅我不再送花 伤口应要结疤\
花瓣铺满心里坟场才害怕\
如若你非我不嫁 彼此终必火化\
一生一世等一天需要代价
```

## 列表

- DUO
  - 富士山下
  - 落花流水
- Eason's Moving On
  - 马里奥派对
  - 浮夸
- 列表换行
  - 比如这里有很多内容\
    需要进行一个行的换
  - 比如这里有很多内容\
    需要进行一个行的换

1. DUO
2. Eason's Moving On
3. 比如这里有很多内容\
   需要进行一个行的换

## 列表代码

```md
- DUO
  - 富士山下
  - 落花流水
- Eason's Moving On
  - 马里奥派对
  - 浮夸
- 列表换行
  - 比如这里有很多内容\
    需要进行一个行的换
  - 比如这里有很多内容\
    需要进行一个行的换

1. DUO
2. Eason's Moving On
3. 比如这里有很多内容\
   需要进行一个行的换
```

## 超链接

[Bilibili](https://www.bilibili.com)

### 超链接代码

```md
[Bilibili](https://www.bilibili.com)
```

## 可复制代码块

```ts
// 可复制的哦
const code: string = `代码块`
console.log(code)
```

### 代码展示

```md

    ```ts
        // 可复制的哦
        const code: string = `代码块`
        console.log(code)
    ```

```

## 表格

|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

### 表格代码展示

```md
|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |
```

## 图片引入展示

![图片名称](/assets/background/1698762378175.jpg =200x300)

### 不设置宽高

![啊啊啊~](/images/empty.gif)

### 只设置宽，高度按比例自动调节

![啊啊啊~](/images/empty.gif =500x)

![啊啊啊~](/images/empty.gif =300x)

![啊啊啊~](/images/empty.gif =100x)

### 宽高同时设置

![啊啊啊~](/images/empty.gif =100x500)

![啊啊啊~](/images/empty.gif =500x100)

### 图片代码展示

::: tabs

@tab:active md

<Badge type="tip">推荐写法</Badge>

``` md
<!-- 基础写法 -->
![图片名称](/assets/background/1698762378175.jpg =200x300)

### 不设置宽高

![啊啊啊~](/images/empty.gif)

### 只设置宽，高度按比例自动调节

![啊啊啊~](/images/empty.gif =500x)

![啊啊啊~](/images/empty.gif =300x)

![啊啊啊~](/images/empty.gif =100x)

### 宽高同时设置

![啊啊啊~](/images/empty.gif =100x500)

![啊啊啊~](/images/empty.gif =500x100)

```

@tab html

``` html
<img 
  src="/assets/background/1698762378175.jpg" 
  alt="图片名称" 
  width=200 
  height=300
/>
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

## 折叠文本

<details>
    <summary>蓝色灭火器</summary>
    这里是蓝色灭火器的私密笔记
</details>

### 折叠文本代码

```html
<details>
    <summary>蓝色灭火器</summary>
    这里是蓝色灭火器的私密笔记
</details>
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
