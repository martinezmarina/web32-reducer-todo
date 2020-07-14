import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './Components/Reducer'

import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTask = taskID => {
    dispatch({ type: 'COMPLETED', payload: taskID});
  };
  const clearCompleted = (e) => {
    dispatch({ type: 'CLEAR_COMPLETED'});
    e.preventDefault();
  }
  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <div classname="todo-form">
      <TodoForm 
      dispatch={dispatch}
      clearCompleted={clearCompleted}
      />
      </div>
      <div className="todo-list">
        <h2>Things To Do...</h2>
        <TodoList 
        todos={state}
        toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
