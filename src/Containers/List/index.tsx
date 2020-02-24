import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';

import {RootStoreContext} from '../../App';
import {observer} from "mobx-react"
import TodoItem from '../../Components/TodoItem';

interface Props {

}

const List = observer((props: Props) => {
    const { listId = '' } = useParams();
    const store = useContext(RootStoreContext).todoListStore;
    const todoList = store.getByTodoListId(listId);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        todoList?.createTodo(newTodoTitle);
        event.preventDefault();
    }

    return (
        <>
            <h1>{todoList?.name}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input name="title" value={newTodoTitle} type="text" onChange={handleNewTodoChange}></input>
                    {/* <button
                        // onClick={}
                    >
                        + Add Todo
                    </button> */}
                    <input type="submit" value="+ Add Todo"></input>
                </form>
                {/* Map todos, section by complete and incomplete */}
                <h2>Incomplete</h2>
                {
                    todoList?.todos.filter(item => (!item.completed)).map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} />
                        );
                    })
                }

                <h2>Complete</h2>
                {
                    todoList?.todos.filter(item => (item.completed)).map(todo => {
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