// 匿名函数自执行
;(function () {
	const todos = [
		{
			id: 1,
			title: '吃饭',
			completed: true 
		},
		{
			id: 2,
			title: '上课',
			completed: false 
		},
		{
			id: 3,
			title: '写代码',
			completed: false 
		}
	]

	new Vue({
		data: {
			// 下面写法等同于 todos: todos 属于 ES 6 简写方式
			todos
		},
		methods: {
			handleNewTodoKeyDown (e) {
				// 0. 注册 enter 键按下的事件
				// 1. 获取文本框的值
				// 2. 数据校验
				// 3. 添加到 todos 
				// 4. 清空文本框
				const target = e.target
				const value = target.value
				if (!value.length) {
					return
				}
				const todos = this.todos
				todos.push({
					id: todos[todos.length - 1] + 1,
					title: value,
					completed: false
				})
				target.value = ''
			}
		}
	}).$mount('#app')
})()
