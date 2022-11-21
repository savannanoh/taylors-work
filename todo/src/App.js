//used https://www.educative.io/blog/react-hooks-tutorial-todo-list tutorial as a base

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import data from "./data.json";
import AddTodo from "./AddTodo";
import Entry from './Entry';

function App() {

  const [ todos, setTodos ] = useState(data);

  const handleToggle = (id) => {
    let mapped = todos.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodos(mapped);
  }

  const handleFilter = () => {
    let filtered = todos.filter(task => {
      return !task.complete;
    });
    setTodos(filtered);
  }

  const handleRemove = (id) => {
    let filtered = todos.filter(task => {
      return task.id !== Number(id);
    });
    setTodos(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...todos];
    copy = [{ id: todos.length + 1, task: userInput, complete: false }, ...copy];
    setTodos(copy);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <AddTodo addTask={addTask}/>
      <div className="todo-list">
          {todos.map(todo => {
              return (
                  <Entry todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} handleRemove={handleRemove}/>
              )
          })}
      </div>
      <button className='clear-button' onClick={handleFilter}>Clear Completed</button>
      <p>
        Being useful is all I know
      </p>
      <a
        className="App-link"
        href="https://www.luxfilmproductions.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lux website
      </a>
    </div>
  );
}

export default App;
