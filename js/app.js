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
			todos,
			currentEditing: null
		},
		methods: {
			handleNewTodoKeyDown (e) {
				// 0. 注册 enter 键按下的事件
				// 1. 获取文本框的值
				// 2. 数据校验
				// 3. 添加到 todos 
				// 4. 清空文本框
				const target = e.target
				const value = target.value.trim()
				if (!value.length) {
					return
				}
				const todos = this.todos
				todos.push({
					id: todos.length ? todos[todos.length - 1] + 1 : 1,
					title: value,
					completed: false
				})
				target.value = ''
			},

			handleToggleAllChange (e) {
				// 0. 注册 checkbox 的 change 事件
				// 1. 获取 checkbox 的选中状态
				// 2. 循环设置 todos 中任务项的 completed 的状态
				const checked = e.target.checked
				this.todos.forEach(item => {
					item.completed = checked
				})
			},

			// 事件处理函数在没有传参的情况下，默认第一个参数是 event: 事件源对象
			// 如果传参的话，则没办法自动拿到 event: 事件源对象，除非手动的传递 $event 对象
			// 如 handleRemoveTodoClick(index, $event) 形参的顺序不重要，但 $event 变量名不能变
			handleRemoveTodoClick (index, e) {
				this.todos.splice(index, 1)
			},

			handleGetEditingDblclick (item) {
				this.currentEditing = item
			},

			handleSaveEditKeydown (todo, index, e) {
				// 0. 注册 enter 键按下的事件
				// 1. 拿到文本框中的值
				// 2. 数据校验
				//		如果为空，则删除
				//		如果非空，保存，并清除 editing 样式
				const target = e.target
				const value = target.value.trim()

				if (!value.length) {
					return this.todos.splice(index, 1)
				}
				todo.title = value
				this.currentEditing = null
			},

			handleCancelEditEsc () {
				this.currentEditing = null
			},

			handleClearAllDoneClick () {
				// 满足条件的数据元素会被过滤出来重新赋值给 todos
				this.todos = this.todos.filter(t => !t.completed)
			}
		}
	}).$mount('#app')
})()
