import React, { useState } from 'react';
import './App.css';

function TodoTasks({
    todo,
    isDone,
    isWrite,
    handleChceckboxToggleIsDone,
    handleToggleIsWrite,
    handleTitleRewrite,
    setTitle,
    title,
    handleDeleteTodo

}) {


    const handleChceckboxChange = () => {
        handleChceckboxToggleIsDone(todo.id)
    }
    const handleWriteClick = () => {
        handleToggleIsWrite(todo.id)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleToggleSaveTitle = (event) => {
        handleTitleRewrite(todo.id, event.target.value)
        setTitle("")
    }
    const handleToggleDelete = () => {
        handleDeleteTodo(todo.id)
    }


    return (

        <div className="taskItem">
            <div className="taskItemList">
                <input type="checkbox" name="checkTodo" id={todo.id} className="checkbox" checked={todo.isDone}
                    onChange={handleChceckboxChange} />
                <label htmlFor={todo.id} className="todoContent">
                    <h2>{todo.content}</h2>
                </label>
                <button className={todo.isWrite === true ? "detailToogle " : "detailToogler "} onClick={handleWriteClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path className="dotPath"
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                    </svg>
                </button>
            </div>
            <div className={(todo.isWrite === true ? "taskDetail" : "hide")}>
                <div className="taskTitleContainer">
                    <label htmlFor="titleRewrite"><h4>TASK TITLE</h4>
                    </label>
                </div>
                <input type="search"
                    name="titleRewrite"
                    className="titleRewrite"
                    id="titleRewrite"
                    value={title}
                    onChange={handleTitleChange}
                />
                <div className="detailBtnContainer">
                    <button className="delete"
                        onClick={handleToggleDelete}
                    ><h3>Delete</h3></button>
                    <button className="save" type='submit'
                        onClick={handleToggleSaveTitle}
                        value={title}
                    // onClick={handleToggleSaveTitle}
                    ><h3>Save</h3></button>
                </div>

            </div>
        </div>
    );
}
export default TodoTasks;