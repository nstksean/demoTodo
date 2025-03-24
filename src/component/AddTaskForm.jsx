import React from 'react';
import NewTodos from './NewTodos';

function AddTaskForm({ value, onChange, onSubmit, todos }) {
  return (
    <form className="pageAddTask" onSubmit={onSubmit}>
      <div className="pageAddTaskTitleContainer">
        <label className="pageAddTaskTitle" htmlFor="inputAddNewTask">
          <h3>TASK TITLE</h3>
        </label>
      </div>
      <div className="inputAddNewTaskContainer">
        <input 
          className="inputAddNewTask"
          id="inputAddNewTask"
          name="inputAddNewTask"
          type="search"
          placeholder=" + Add Task"
          value={value}
          onChange={onChange}
        />
      </div>
      <button id="btnAddTask" type="submit">
        <h3>ADD task</h3>
      </button>
      <div className="cutLine"></div>
      <>
        {todos.map((todo, idx) => (
          <NewTodos
            todo={todo}
            key={todo.id}
            idx={idx}
          />
        ))}
      </>
    </form>
  );
}

export default AddTaskForm;