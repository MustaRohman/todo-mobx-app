export class Todo {
    id: number = Math.random()
    title: string = ""
    completed: boolean = false

    constructor(title: string) {
        this.title = title;
    }
}