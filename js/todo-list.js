;(function () {
    const template = `
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li v-for="item in filterTodos" :class="{completed: item.completed}">
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
        props: ['list', 'filterText'],
        computed: {
            filterTodos () {
                switch (this.filterText) {
                    case 'active': {
                        return this.list.filter(t => !t.completed)
                    }
                    case 'completed': {
                        return this.list.filter(t => t.completed)
                    }
                    default: {
                        return this.list
                    }
                }
            }
        }

    }

})()
        