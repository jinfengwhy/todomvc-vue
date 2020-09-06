;(function () {

	const template = `
		<div>
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
