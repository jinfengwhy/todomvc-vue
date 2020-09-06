// 应用程序入口，相当于电脑开机键了
;(function () {
	new Vue({
        el: '#app',
        
        // 下面简写成了单标签形式，等价于 <app></app>
        // 当全局的 Vue 实例定义了 template 属性时，会替换掉挂载到该实例上的 Dom 结构
        // 在这个案例中就对应 html 结构中 <div id="app"></div>
        // 这样子可以减少一层 Dom 的嵌套
        template: `
            <app/>
        `,

        // 局部注册
		components: {
			App
		}
	})

})()
