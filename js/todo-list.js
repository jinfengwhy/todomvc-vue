;(function () {
    const template = `
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li v-for="item in list" :class="{completed: item.completed}">
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.completed">
                        <label>{{ item.title }}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                </li>
            </ul>
        </section>
    `

    window.todoList = {
        template,
        props: ['list']
    }

})()
        