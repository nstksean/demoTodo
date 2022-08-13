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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path className="dotPath"
                            d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
                    </svg>
                </button>
            </div>
            <div className={(todo.isWrite === true ? "taskDetail" : "hide")}>
                <div className="taskTitleContainer">
                    <label htmlFor="titleRewrite">TASK TITLE
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
                    >Delete</button>
                    <button className="save" type='submit'
                        onClick={handleToggleSaveTitle}
                        value={title}
                    // onClick={handleToggleSaveTitle}
                    >Save</button>
                </div>

            </div>
        </div>
    );
}
export default TodoTasks;