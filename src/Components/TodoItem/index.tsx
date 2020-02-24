import React from 'react';
import { observer } from 'mobx-react';
import { Todo } from '../../Models/Todo';

interface Props {
    todo: Todo
}

const handleCheckbox = (todo: Todo) => {
    todo.completed = !todo.completed
}

const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>, todo: Todo) => {
    todo.title = event.target.value;
}

const TodoItem = observer((props: Props) => {
    const { todo } = props;
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => handleCheckbox(todo)}></input>
            <input readOnly={todo.completed} type="text" value={todo.title} onChange={event => handleTextInput(event, todo)}></input>
        </div>
    )
});

export default TodoItem;