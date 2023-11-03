---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 本地书写
# sideBar标题
shortTitle: 如何在本地书写？
# 描述
description: 如何在本地书写？
# 文章作者，不填，则会回退到默认作者
author: 蓝色灭火器
# 分类
category: 
  - 本地环境
# 标签
tag: 
  - 教程
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

## 基础

### 你需要准备

#### Git安装方法 - 二选一

- 点击下载 - [Git](https://git-scm.com/) <Badge >推荐</Badge>

- cmd 运行下方命令

```sh

winget install --id Git.Git -e --source 

```

#### VScode安装

- 点击下载进行安装 - [VScode](https://code.visualstudio.com/Download)
- 下载完毕，运行下载好的可执行文件
- 选择安装目录
- 等待安装完毕

### 配置git

#### 首先准备一个Gitee账号，如果已有可跳过本步骤

- [点击前往注册账号](https://gitee.com/signup#lang=zh-CN)

#### 本地Git设置

```sh

# 配置username
git config --global user.name "Your Name-这个自己叫什么就写什么，随便写"

# 配置账号
git config --global user.email "your_email@example.com-自己的邮箱"

# 完毕

```

#### clone 仓库

- 我们找个想存放md文件的文件夹，位置随意，在文件夹中右键
- 安装完git后鼠标==右键菜单==会出现相应的选项，我们选择 <Badge>Git Bash Here</Badge> 选项
- 之后弹出黑框框
- 复制并执行下方命令

```sh

# 开始克隆
git clone https://gitee.com/lsmhq/subata.git

```

- 等待黑框框克隆完毕
- 可以开始写作惹

### VScode操作

- 双击桌面VScode图标 打开VScode
- 点击顶部菜单-文件-打开文件夹
- 选择自己之前克隆文件的文件夹
- 此时VScode中已经出现了文件目录结构

![目录结构](/assets/image/{BDB35562-E1C4-4f71-826F-774CB7B6A9D0}.png =200x500)

- src 文件夹下的目录结构就对应了页面中侧边导航栏的结构

#### 如何找到自己想编辑页面对应的文件

- 到网页中，我们可以点击文章底部的==编辑按钮==，将会跳转到

![编辑地址](/assets/image/20231103101946.png)

- 我们可以看到地址中也会有src，后面的路径就是对应的md文件

### 如何进行书写？

[书写方式请点击查看](https://lsmhq.gitee.io/subata/template/template.html)

### 编辑完如何上传文件

#### VScode 上传

- <Badge>推荐操作</Badge>

- 按下图步骤操作

![点击左侧的源代码管理](/assets/image/git/{FE9C5A22-2116-4eba-9202-5466D4726075}.png)

![鼠标移动到更改，并点击+号](/assets/image/git/QQ截图20231103103528.png)

![此时变成这个样子](/assets/image/git/QQ截图20231103103549.png)

![我们再写上本次提交的日志，并点击大大的提交按钮](/assets/image/git/{BDAA45F8-223C-4d61-8682-4E29B1003536}.png)

![最后再推送到网上的gitee的仓库中](/assets/image/git/QQ截图20231103104113.png)

![点击后，等待转圈圈，转完表示提交完毕](/assets/image/git/QQ截图20231103104328.png)

- ==如果出现账密登录窗口，不要慌，使用注册的gitee账密登录==

- 结束

#### Git命令

##### 方法一

- 在VScode中，==右击==左侧目录中的==src==，会弹出菜单，我们点击==在文件资源管理器中显示==
- 此时会弹出一个文件管理器
- 位置刚好是克隆文件的文件夹
- 我们在文件夹空白位置右键，选择Git Bash Here
- 弹出了黑框框,执行下方命令

##### 方法二

<Badge>推荐方法</Badge>

- 点击VScode 顶部菜单的 ==终端== ，我们新建终端，并执行下方代码

```sh

git pull --rebase origin v-wiki

git commit -m "你想说的话-随便写"

git push -u origin v-wiki

```

- ==如果出现账密登录窗口，不要慌，使用注册的gitee账密登录==
