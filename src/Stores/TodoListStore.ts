import { observable } from "mobx";
import { TodoList } from "../Models/TodoList";
import { RootStore } from "./RootStore";

export class TodoListStore {
    @observable todoLists: TodoList[] = []
    @observable isLoading = false

    store: RootStore

    constructor(store: RootStore) {
        this.store = store;
    }
}