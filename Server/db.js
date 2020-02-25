const { Sequelize, Model, DataTypes }  = require('sequelize');
const { v4: uuid4 } = require('uuid');

const sequelize = new Sequelize('sqlite::memory');

class TodoList extends Model {}
TodoList.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
}, { sequelize, modelName: 'todolist'});

class Todo extends Model {}
Todo.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    todo_list_id: {
        type: DataTypes.STRING,
        references: {
            model: TodoList,
            key: 'id'
        }
    }
}, { sequelize, modelName: 'todo' });

 const init = async() => {
    const todoListId = uuid4();
    await sequelize.sync();
    await TodoList.create({
        id: todoListId,
        name: 'TodoList1',
        description: 'My first todolist'
    });

    await Todo.create({
        id: uuid4(),
        title: 'Todo Item 1',
        completed: false,
        todo_list_id: todoListId
    });

    return sequelize;
}
module.exports = { init, TodoList, Todo};