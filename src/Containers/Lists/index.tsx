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
                            <div 
                                key={todoList.id} 
                                style={style}
                            >
                                <Link to={"/list/" + todoList.id}>
                                    <h3>{todoList.name + ' (' + todoList.todos.length + ')'}</h3>
                                </Link>

                                <div >
                                    {
                                        todoList.description && 
                                        <h4>{todoList.description}</h4>
                                    }
                                </div>
                            </div>
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