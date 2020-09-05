# TodoMVC

## 案例介绍

* [TodoMVC](http://todomvc.com/)

## 需求说明

* [TodoMVC 需求说明](https://github.com/tastejs/todomvc/blob/master/app-spec.md)

## 开始

### [TodoMVC 模板仓库](https://github.com/tastejs/todomvc-app-template)

1. 下载模板

```shell
# --depth 表示只下载最后一次 commit
git clone https://github.com/tastejs/todomvc-app-template.git todomvc-vue --depth=1
```

2. 安装依赖 

```shell
cd todomvc-vue/
npm install
```

### 配置 [browser-sync](http://www.browsersync.cn/) 浏览器同步测试工具

1. 安装依赖

```shell
# 也可以 npm install -D browser-sync 
# --save-dev(简写 -D) 表示安装包到 devDependencies(应用于开发环境) 选项中
npm install --save-dev browser-sync
```

2. 配置 scripts

```shell
# 启动服务，监听当前目录下的 .html 文件，css 目录下 .css 文件，js 目录下 .js 文件的变动
# 如果有变动，则浏览器自动刷新
"scripts": {
    "dev": "browser-sync start --server --files \"*.html, css/*.css, js/*.js\"",
    "start": "npm run dev"
}
```

3. 启动开发服务

```shell
# npm start 相当于是给 npm run dev 命令起了个别名，也可以 npm run dev
# 而 npm run dev 则会执行 scripts 对象中 dev 对应的那条命令
npm start
```

### 列表渲染

* 有数据
* 无数据

### 添加任务

* 页面初始化的时候文本框获得焦点
* 敲回车添加到任务列表中
* 不允许有非空数据
* 添加完成清空文本框

### 标记所有任务完成/未完成

### 任务项

* 切换任务完成状态
    * 样式联动（针对单个任务项）
    * 联动切换所有任务状态（针对全部任务项）
* 删除任务项
* 双击 label 进入编辑模式

### 编辑任务项

* 编辑文本框自动获得焦点
* 在编辑文本框中敲回车或者失去焦点时保存
    * 保存文本框的内容到任务列表
    * 非空校验
    * 如果是空的，则删除该 item
    * 如果非空，则保存该 item
    * 保存后，去除 editing 样式
* 输入状态下按 esc 取消编辑（不保存）

### 清除所有已完成任务

### 显示所有未完成任务数
    * 模板逻辑
    * 方法
    * 计算属性

### 将数据持久化到 localStorage 中

### 路由状态切换
    * 点击链接过滤数据的输出
    * 刷新保持过滤状态
    * 切换点击链接的样式
