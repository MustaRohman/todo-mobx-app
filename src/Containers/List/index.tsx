import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';

import {RootStoreContext} from '../../App';
import {observer} from "mobx-react"
import TodoItem from '../../Components/TodoItem';
import { action } from 'mobx';

interface Props {

}

const List = observer((props: Props) => {
    const { listId = '' } = useParams();
    const store = useContext(RootStoreContext).todoListStore;
    const todoList = store.getByTodoListId(listId);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const handleNewTodoChange = action((event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(event.target.value)
    })

    const handleSubmit = action((event: React.FormEvent<HTMLFormElement>) => {
        todoList?.createTodo(newTodoTitle);
        event.preventDefault();
    })

    return (
        <>
            <h1>{todoList?.name}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input name="title" value={newTodoTitle} type="text" onChange={handleNewTodoChange}></input>
                    <input type="submit" value="+ Add Todo"></input>
                </form>
                <h2>Incomplete</h2>
                {
                    todoList?.incompleteTodos.map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} />
                        );
                    })
                }

                <h2>Complete</h2>
                {
                    todoList?.completedTodos.map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} />
                        );
                    })
                }
            </div>
        </>
    )
})


export default List;