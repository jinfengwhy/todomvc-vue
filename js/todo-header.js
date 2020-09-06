;(function () {
    const template = `
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus>
        </header>
    `

    // 组件在代码中就体现为一个对象（比较特殊）
    // 在页面上就体现为一个自定义的 html 标签
    // 组件是对视图的拆分、而模块化是对 js 的拆分
    window.todoHeader = {
        template: template
    }
})()