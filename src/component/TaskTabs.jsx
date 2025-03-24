import React from 'react';

function TaskTabs({ activePanel, onAllTaskClick, onTodoClick, onDoneClick }) {
  return (
    <div className="tabContainer">
      <button 
        className={(activePanel === "tabAllTask" ? "redTaskTab" : "taskTab")}
        onClick={onAllTaskClick}
      >
        <input 
          type="radio"
          id="tabAllTask"
          name="taskTab"
          value="tabAllTask"
          className="radioTab"
          onChange={onAllTaskClick}
          checked={(activePanel === "tabAllTask")} 
        />
        <label htmlFor="tabAllTask">
          <h4>AllTask</h4>
        </label>
      </button>

      <button 
        className={(activePanel === "tabTodo" ? "redTaskTab" : "taskTab")}
        onClick={onTodoClick}
      >
        <input 
          type="radio" 
          id="tabTodo" 
          name="taskTab" 
          value="tabTodo" 
          className="radioTab"
          onChange={onTodoClick}
          checked={(activePanel === "tabTodo")} 
        />
        <label htmlFor="tabTodo">
          <h4>ToDo</h4>
        </label>
      </button>

      <button 
        className={(activePanel === "tabDone" ? "redTaskTab" : "taskTab")}
        onClick={onDoneClick}
      >
        <input 
          type="radio" 
          id="tabDone" 
          name="taskTab" 
          value="tabDone" 
          className="radioTab" 
          onChange={onDoneClick}
          checked={(activePanel === "tabDone")} 
        />
        <label htmlFor="tabDone">
          <h4>Done</h4>
        </label>
      </button>
    </div>
  );
}

export default TaskTabs;