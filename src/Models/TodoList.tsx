import { observable, computed } from 'mobx';
import { Todo } from './Todo';

export class TodoList {
    name: string = "";
    description: string = '';
    @observable todos: Todo[] = [];

    constructor(name: string, description: string = '') {
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