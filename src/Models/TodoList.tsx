import { observable, computed } from 'mobx';
import { Todo } from './Todo';
import { TodoListStore } from '../Stores/TodoListStore';
import { v4 as uuid4} from 'uuid';

export class TodoList {
    id = uuid4();
    name: string = "";
    description: string = '';
    store: TodoListStore;

    @observable todos: Todo[] = [];

    constructor(store: TodoListStore, name: string, description: string = '') {
        this.store = store;
        this.name = name;
        this.description = description;
    }

    @computed get todo() {
        return this.todos;
    }

    @computed get completedTodoCount() {
        return this.todos.filter(todo => (todo.completed)).length;
    }

    @computed get incompleteTodos() {
        return this.todos.filter(todo => (!todo.completed));
    }

}