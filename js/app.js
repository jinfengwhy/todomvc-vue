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
				<todo-header></todo-header>
				<todo-list :list="todos"></todo-list>
				<todo-footer></todo-footer>
			</section>
			<app-footer></app-footer>
		</div>
	`

	window.App = {
		data () {
			return {
				todos
			}
		},
		template,
		components: {
			// ES 6 简写方式
			todoHeader,
			todoList,
			todoFooter,
			appFooter
		}
	}

})()
