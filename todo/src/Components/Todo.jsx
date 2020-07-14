import React from 'react';

const Todo = props => {
    return (
        <div>
            <div
                className={`task${props.todo.completed ? ' completed' : ''}`}
                onClick={() => props.toggleTask(props.todo.id)}
            >{props.todo.item}</div>
        </div>
    );
};

export default Todo;