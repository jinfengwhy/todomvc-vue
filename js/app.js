;(function () {

	const todos = [
		{
			id: 1,
			title: '吃饭',
			completed: true
		},
		{
			id: 2,
			title: '写代码',
			completed: false
		},
		{
			id: 3,
			title: '溜达',
			completed: true
		},
	]

	// 这里添加了 id 属性，是为了方便进行 dom 操作
	const template = `
		<div id="app">
			<section class="todoapp">
				<!-- 父组件订阅（监听）了子组件的 addItem 事件 -->
				<!-- 当父组件监听到事件触发时，就会去执行 addTask 方法 -->
				<todo-header @addItem="addTask"></todo-header>
				<todo-list :filterText="filterText" :list="todos"></todo-list>
				<todo-footer :filterText="filterText"></todo-footer>
			</section>
			<app-footer></app-footer>
		</div>
	`

	window.App = {
		data () {
			return {
				todos,
				filterText: 'all'
			}
		},
		template,
		
		// 生命周期的钩子函数
		created () {
			// 使用箭头函数是为了拿到父级上下文的 this 对象
			window.onhashchange = () => {
				let filterText = window.location.hash.substr(2)
				if (filterText === '') {
					filterText = 'all'
				}
				this.filterText = filterText
			}
			// 页面第一次进入时，判断一下哈希值进而设置 filterText
			window.onhashchange()
		},

		methods: {
			// 父组件并不关心数据是从哪里来的（纯业务方向的代码）
			addTask (text) {
				const title = text.trim()
				if (!title.length) {
					return
				}

				const todos = this.todos
                todos.push({
                    id: todos[todos.length - 1].id + 1,
                    title: title,
                    completed: false
                })
			}
		},
		components: {
			// ES 6 简写方式
			todoHeader,
			todoList,
			todoFooter,
			appFooter
		}
	}

})()
