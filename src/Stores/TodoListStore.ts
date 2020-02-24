import { observable, computed } from "mobx";
import { TodoList } from "../Models/TodoList";
import { RootStore } from "./RootStore";
import { computedFn } from 'mobx-utils';

export class TodoListStore {
    @observable todoLists: TodoList[] = []
    @observable isLoading = false

    store: RootStore

    constructor(store: RootStore) {
        this.store = store;
    }

    createTodoList(name: string, description: string = '') {
        const todoList = new TodoList(this, name, description);
        this.todoLists.push(todoList);
        return todoList;
    }

    getByTodoListId = computedFn(function(id: string) {
        return this.todoLists.find(todoList => {
            return todoList.id === id;
        })
    }
}