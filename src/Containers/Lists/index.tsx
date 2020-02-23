import React from 'react';
import { TodoList } from '../../Models/TodoList';
import { Link } from 'react-router-dom';

interface Props {
    todoLists: TodoList[]
}

const Lists = (props: Props) => {
    return (
        <>
            {
                props.todoLists.map((todoList, index) => {
                    return (
                        <Link to={"/list/" + todoList.id}>
                            <div 
                                key={todoList.id} 
                                style={style}
                            >
                                <h3>{todoList.name + ' (' + todoList.todos.length + ')'}</h3>
                                <div >
                                    {
                                        todoList.description && 
                                        <h4>{todoList.description}</h4>
                                    }
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

const style: React.CSSProperties = {
    border : '1px solid black',
    margin : '10px',
    width : 'auto',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column'
}

export default Lists;