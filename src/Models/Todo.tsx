import { observable } from 'mobx';

export class Todo {
    id: number = Math.random()
    @observable title: string = ""
    @observable completed: boolean = false

    constructor(title: string) {
        this.title = title;
    }
}