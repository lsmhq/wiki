### 图片

<img src="/image/1698656222726.jpg" width="300"/>

### 安装node

### 安装gitbook

- npm i -g gitbook-cli

### 安装依赖

- gitbook install

### 运行

- gitbook serve

### 运行如果报错

- 如果此文件报错：

```
\gitbook-cli\node_modules\npm\node_modules\graceful-fs\polyfills.js:287
```

- 报错信息：

```
TypeError: cb.apply is not a function
```

- 查看报错信息，修改报错信息中指定的文件

- 一般将62-64行注释掉即可
