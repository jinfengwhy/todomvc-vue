;(function () {
    const template = `
        <header class="header">
            <h1>todos</h1>
            <input
                @keydown.enter="addItem"
                class="new-todo" placeholder="What needs to be done?" autofocus>
        </header>
    `

    // 组件在代码中就体现为一个对象（比较特殊）
    // 在页面上就体现为一个自定义的 html 标签
    // 组件是对视图的拆分、而模块化是对 js 的拆分
    window.todoHeader = {
        template: template,

        methods: {
            addItem (e) {
                const target = e.target
                const value = target.value.trim()
                if (!value.length) {
                    return 
                }

                // 虽然这样子可以更改，但不建议在子组件中修改父组件中的值
                // 因为当嵌套了多层的子组件时，一旦父组件中的值发生改变，很难去进行定位
                // 也违背了 vue 官方的单向数据流的初衷
                // const todos = this.todos
                // todos.push({
                //     id: todos[todos.length - 1].id + 1,
                //     title: value,
                //     completed: false
                // })

                // 无论是引用类型还是普通类型，在子组件中直接给父组件中的值赋值都是会报错的
                // 数组和对象都属于是引用类型，引用类型可以如上面那般修改，但非常不建议这样做
                // 子组件中对于父组件中的数据，只能使用，不能修改
                // this.todos = []

                // 发射 addItem 事件，同时传递需要的参数
                // 如果父组件有订阅（监听）addItem 事件，则父组件就能捕获到子组件要添加任务项这个消息
                this.$emit('addItem', value)
                target.value = ''
            }
        }
    }
})()