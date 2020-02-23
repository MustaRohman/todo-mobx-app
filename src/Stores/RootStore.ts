import { TodoListStore } from "./TodoListStore";

export class RootStore {
    todoListStore: TodoListStore
    
    constructor() {
        this.todoListStore = new TodoListStore(this);
    }
}