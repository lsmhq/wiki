---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 上传文件
# sideBar标题
shortTitle: 如何上传文件？
# 描述
description: 如何上传文件？
# 文章作者，不填，则会回退到默认作者
author: 蓝色灭火器
# 分类
category: 
  - Git上传文件
# 标签
tag: 
  - 教程
# 图标-详情请看：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
icon: book
# 是否原创文章
isOriginal: true
# 写作时间
date: 2023-11-06
# 置顶-数字越大越靠上
sticky: 9
# 时间线
timeline: true
# 封面图
banner: /assets/background/1698762378210.jpg
#---下方的为md正文内容
---

### 编辑完如何上传文件

#### VScode 上传 ==本方法学会就不用往下看Git命令上传了==

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

#### Git命令 - ==会使用Vscode不必看本方法==

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