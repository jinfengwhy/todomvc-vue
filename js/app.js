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
		}
	}).$mount('#app')
})()
