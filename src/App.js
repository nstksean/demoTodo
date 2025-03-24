import React from 'react';
import '../src/App.css';
import Navigation from './component/Navigation';
import AddTaskForm from './component/AddTaskForm';
import TaskLists from './component/TaskLists';
import { TodoProvider, useTodoContext } from './context';

function TodoApp() {
  const { 
    todos, 
    activeTab, 
    title, 
    setTitle, 
    inputValue, 
    panel,
    handleNavNewClick,
    handleNavListClick,
    handleInputChange,
    handleInputSubmit,
    handleChceckboxToggleIsDone,
    handleToggleIsWrite,
    handleTitleRewrite,
    handleDeleteTodo,
    handleAllTaskClick,
    handleTodoClick,
    handleDoneClick
  } = useTodoContext();

  return (
    <div className="App">
      <Navigation 
        activeTab={activeTab} 
        onNavNewClick={handleNavNewClick} 
        onNavListClick={handleNavListClick} 
      />

      <div className="taskContainer">
        <div className="pageTitle">
          <h1>{activeTab}</h1>
        </div>
        <div className="cutLine"></div>

        <div className={activeTab === "ADD NEW TASK" ? '' : "hide"}>
          <AddTaskForm 
            value={inputValue}
            onChange={handleInputChange}
            onSubmit={handleInputSubmit}
            todos={todos}
          />
        </div>

        <div className={activeTab === "TASK LISTS" ? '' : "hide"}>
          <TaskLists 
            todos={todos}
            panel={panel}
            onAllTaskClick={handleAllTaskClick}
            onTodoClick={handleTodoClick}
            onDoneClick={handleDoneClick}
            handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
            handleToggleIsWrite={handleToggleIsWrite}
            handleTitleRewrite={handleTitleRewrite}
            handleDeleteTodo={handleDeleteTodo}
            title={title}
            setTitle={setTitle}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;