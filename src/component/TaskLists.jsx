import React from 'react';
import TodoTasks from './TodoTasks';
import TaskTabs from './TaskTabs';

function TaskLists({ 
  todos, 
  panel, 
  onAllTaskClick, 
  onTodoClick, 
  onDoneClick, 
  handleChceckboxToggleIsDone, 
  handleToggleIsWrite, 
  handleTitleRewrite, 
  handleDeleteTodo, 
  title, 
  setTitle 
}) {
  return (
    <div className="pageTaskLists">
      <TaskTabs 
        activePanel={panel}
        onAllTaskClick={onAllTaskClick}
        onTodoClick={onTodoClick}
        onDoneClick={onDoneClick}
      />

      <div className={(panel === "tabAllTask" ? '' : "hide")}>
        {todos.map((todo, idx) =>
          <TodoTasks
            key={todo.id}
            todo={todo}
            idx={idx}
            isDone={todo.isDone}
            isWrite={todo.isWrite}
            handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
            handleToggleIsWrite={handleToggleIsWrite}
            handleTitleRewrite={handleTitleRewrite}
            handleDeleteTodo={handleDeleteTodo}
            title={title}
            setTitle={setTitle}
          />)}
      </div>
      
      <div className={(panel === "tabTodo" ? '' : "hide")}>
        {todos.filter(todo => todo.isDone === false)
          .map((todo, idx) =>
            <TodoTasks
              key={todo.id}
              todo={todo}
              idx={idx}
              isDone={todo.isDone}
              isWrite={todo.isWrite}
              handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
              handleToggleIsWrite={handleToggleIsWrite}
              handleTitleRewrite={handleTitleRewrite}
              handleDeleteTodo={handleDeleteTodo}
              title={title}
              setTitle={setTitle}
            />)}
      </div>
      
      <div className={(panel === "tabDone" ? '' : "hide")}>
        {todos.filter(todo => todo.isDone === true).map((todo, idx) =>
          <TodoTasks
            key={todo.id}
            todo={todo}
            idx={idx}
            isDone={todo.isDone}
            isWrite={todo.isWrite}
            handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
            handleToggleIsWrite={handleToggleIsWrite}
            handleTitleRewrite={handleTitleRewrite}
            handleDeleteTodo={handleDeleteTodo}
            title={title}
            setTitle={setTitle}
          />)}
      </div>
    </div>
  );
}

export default TaskLists;