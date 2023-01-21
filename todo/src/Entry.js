import React from 'react';
//https://react-icons.github.io/react-icons/icons?name=fa
import { FaTrash, FaPen } from 'react-icons/fa';

const Entry = ({todo, handleToggle, handleRemove}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const handleRemoveClick = (e) => {
        console.log(e.currentTarget.id)
        e.preventDefault()
        handleRemove(todo.id)
    }

    const handleEdit = (e) => {
        console.log()
    }

    return (
        <div className={todo.complete ? "entry-done" : "entry-todo"} id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} >
            <div className={todo.complete ? "todo strike" : "todo"} onClick={handleClick} id={todo.id}>
                {todo.task}
            </div>
            <button onClick={handleRemoveClick} className="delete-button" id={todo.id}>
                <FaTrash />
            </button>
            <button onClick={handleRemoveClick} className="edit-button" id={todo.id}>
                <FaTrash />
            </button>

        </div>

    );
};

export default Entry;