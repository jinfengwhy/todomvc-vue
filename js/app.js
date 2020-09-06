;(function () {

	// 这里添加了 id 属性，是为了方便进行 dom 操作
	const template = `
		<div id="app">
			<section class="todoapp">
				<todo-header></todo-header>
				<todo-list></todo-list>
				<todo-footer></todo-footer>
			</section>
			<app-footer></app-footer>
		</div>
	`

	window.App = {
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
