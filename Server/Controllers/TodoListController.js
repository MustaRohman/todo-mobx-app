const { TodoList } = require('../db')

class TodoListController {

    // sequelize = null;

    async getTodoLists(req, res) {
        const todoLists = await TodoList.findAll()
        return res.json(todoLists);
    }
}

module.exports = TodoListController