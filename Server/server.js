const express = require('express')
const app = express()
const {init} = require('./db')
const TodoListController = require('./Controllers/TodoListController');

const todoListController = new TodoListController();

init();

const port = 9000

app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

app.get('/todo-lists', todoListController.getTodoLists);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))