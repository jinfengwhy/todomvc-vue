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






