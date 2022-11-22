//used https://www.educative.io/blog/react-hooks-tutorial-todo-list tutorial as a base

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import data from "./data.json";
import AddTodo from "./AddTodo";
import Entry from './Entry';

function App() {

  const [todos, setTodos] = useState(data);
  const [dones, setDones] = useState([]);

  const handleToggleFromTodo = (id) => {
    console.log(id);
    let copy = [...dones];
    let move = null;
    let filtered = todos.filter(task => {
      if (task.id === Number(id)) {
        move = task;
      }
      return task.id !== Number(id);
    });
    console.log(move);
    setTodos(filtered);
    if (move !== null) {
      move.complete = !move.complete;
      copy = [move, ...copy];
      setDones(copy);
    }
    /*
    let mapped = todos.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodos(mapped);
    */
  }

  const handleToggleFromDone = (id) => {
    console.log(id);
    let copy = [...todos];
    let move = null;
    let filtered = dones.filter(task => {
      if (task.id === Number(id)) {
        move = task;
      }
      return task.id !== Number(id);
    });
    console.log(move);
    setDones(filtered);
    if (move !== null) {
      move.complete = !move.complete;
      copy = [move, ...copy];
      setTodos(copy);
    }
    /*
    let mapped = todos.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodos(mapped);
    */
  }

  const handleFilter = () => {
    setDones([]);
    /*
    let filtered = todos.filter(task => {
      return !task.complete;
    });
    setTodos(filtered);
    */
  }

  const handleRemoveTodo = (id) => {
    let filtered = todos.filter(task => {
      return task.id !== Number(id);
    });
    setTodos(filtered);
  }

  const handleRemoveDone = (id) => {
    let filtered = dones.filter(task => {
      return task.id !== Number(id);
    });
    setDones(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...todos];
    copy = [{ id: todos.length + dones.length + 1, task: userInput, complete: false }, ...copy];
    setTodos(copy);
  }

  let empty = (
    <div className='empty'>
      Nothing here yet
    </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <div className='lists'>
        <div className='left-side'>
        {todos.length !== 0 ?
          <div className="todo-list">
            {todos.map(todo => {
              return (
                <Entry todo={todo} handleToggle={handleToggleFromTodo} handleFilter={handleFilter} handleRemove={handleRemoveTodo} />
              )
            })}
          </div> : empty}
          <AddTodo addTask={addTask} />
        </div>
        <div className='right-side'>
        {dones.length !== 0 ?
          <div className="done-list">
            {dones.map(done => {
              return (
                <Entry todo={done} handleToggle={handleToggleFromDone} handleFilter={handleFilter} handleRemove={handleRemoveDone} />
              )
            })}
          </div> : empty}
          <button className='clear-button' onClick={handleFilter}>Clear Completed</button>
        </div>
      </div>
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
