import React, { useState } from 'react';

const TodoForm = props => {
    const [userInput, setUserInput] = useState('')

    const handleChanges = e => {
        setUserInput(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        props.dispatch({ type: 'ADD_TO_LIST', payload: userInput });
        setUserInput('');
    };

    return (
        <form>
            <input 
                type='text'
                name='todo'
                placeholder='Enter your task...'
                onChange={handleChanges}
                value={userInput}
            />
            <div className='btn-container'>
                <button onClick={submitForm}>
                    Add Task
                </button>
                <button className ='clear-btn' onClick={props.clearCompleted}>
                    Clear Completed
                </button>
            </div>
        </form>
    );
};

export default TodoForm;