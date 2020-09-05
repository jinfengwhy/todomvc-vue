// 匿名函数自执行
;(function () {
	// const todos = [
	// 	{
	// 		id: 1,
	// 		title: '吃饭',
	// 		completed: true 
	// 	},
	// 	{
	// 		id: 2,
	// 		title: '上课',
	// 		completed: false 
	// 	},
	// 	{
	// 		id: 3,
	// 		title: '写代码',
	// 		completed: false 
	// 	}
	// ]

	window.app = new Vue({
		data: {
			todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
			currentEditing: null,
			filterText: 'all'
		},
		// 计算属性是 Vue 的一大特色
		// 它是为了解决模板过重及重复调用的问题的，计算属性可以缓存计算的结果
		// 它是一种带有行为的属性，本质是方法，但不能作为方法来调用，只能当做属性来使用
		computed: {
			remainingCount () {
				return this.todos.filter(t => !t.completed).length
			},
			toggleAllStat: {
				get () {
					// 计算属性知道它依赖了 todos
					// 所以 todos 发生变化时，会被重新计算
					// every 方法：数组中的元素每一个都满足条件，则返回 true
					return this.todos.every(t => t.completed)
				},
				set (status) {
					// checkbox 双向绑定该变量
					// 等价于下面这行代码 checked = !this.toggleAllStat 
					const checked = status
					this.todos.forEach(item => {
						item.completed = checked
					})
				}
			},

			filterTodos () {
				switch (this.filterText) {
					case 'active': {
						return this.todos.filter(t => !t.completed)
					}
					case 'completed': {
						return this.todos.filter(t => t.completed)
					}
					default: {
						return this.todos
					}
				}
			}
		},
		watch: {
			// 监视 todos 的改变，当 todos 发生变化的时候做业务定制处理
			// 引用类型只能监视一层，无法检测内部子成员的变动，因此需要深度监视
			todos: {
				// 当监视到 todos 发生变化的时候，会自动执行 handler 方法
				// 你监视的是谁，val 就是谁，val 是变化后的最新值
				handler (val) {
					// 也可以使用 this.todos 代替 val
					window.localStorage.setItem('todos', JSON.stringify(val))
				},
				deep: true // 深度监视，文档都有说明
			}
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

	// 监听哈希 change 事件
	window.onhashchange = handlehashchange

	// 为了让页面第一次进入时获取哈希值，手动调用一次
	handlehashchange()

	function handlehashchange () {
		window.app.filterText = window.location.hash.substr(2)
	}

})()
