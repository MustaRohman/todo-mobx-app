import React from 'react';
import { TodoList } from '../../../Models/TodoList';

interface Props {
    todoLists: TodoList[]
}

const Lists = (props: Props) => {
    return (
        <>
            <h2>Todo lists go here</h2>
            {
                props.todoLists.map(todoList => {
                    return <div>{todoList.name}</div>
                })
            }
        </>
    )
}

export default Lists;