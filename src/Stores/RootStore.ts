import { TodoListStore } from "./TodoListStore";

export class RootStore {
    todoListStore: TodoListStore
    
    constructor() {
        this.todoListStore = new TodoListStore(this);

        // TESTING
        this.todoListStore.createTodoList('Shopping', 'My shopping list')
        this.todoListStore.createTodoList('Work')
    }
}