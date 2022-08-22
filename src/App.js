import React, { useState, useRef } from 'react';
import TodoTasks from './TodoTasks';
import './App.css';
import NewTodos from './NewTodos';



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'First Task',
      isDone: false,
      isWrite: false,
    },
    {
      id: 2,
      content: 'Second Task',
      isDone: true,
      isWrite: false,

    }
  ])



  const [Tabs, setTabs] = useState("ADD NEW TASK")

  const [title, setTitle] = useState("")

  const handleNavNewClick = (e) => {
    setTabs("ADD NEW TASK")
  }
  const handleNavListClick = (e) => {
    setTabs("TASK LISTS")
  }

  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  const id = useRef(3)
  const handleInputSubmit = (event) => {
    event.preventDefault()
    if (value === "") return
    setTodos(todo => {
      // console.log('sd', prev.length)
      return [{
        id: id.current + 1,
        content: value,
        isDone: false,
        isWrite: false,
      }, ...todo]

    })
    id.current++
    setValue('')
  }

  const handleChceckboxToggleIsDone = id => {
    const changeValue = todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone,
      }
    })
    setTodos(changeValue)
  }

  const handleToggleIsWrite = id => {
    console.log("handleToggleIsWrite", id);
    const changeValue = todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isWrite: !todo.isWrite,
      }
    })
    setTodos(changeValue)
  }


  const handleTitleRewrite = (id, title) => {
    console.log("SV", id, title)
    const changeValue = todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        content: title,
        isWrite: false,
      };
    });
    setTodos(changeValue)
  }
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  const [panel, setPanel] = useState("tabAllTask")

  const handleAllTaskClick = (e) => {
    setPanel("tabAllTask")
  }

  const handleTodoClick = (e) => {
    setPanel("tabTodo")
  }

  const handleDoneClick = (e) => {
    setPanel("tabDone")
  }

  return (
    <div className="App">
      <div className="navContainer">
        <button className="navBtn" onClick={handleNavNewClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svgNavBtn">
            <path className={(Tabs === "ADD NEW TASK" ? 'redSvgPath' : "svgPath")}
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>
        </button>
        <button className="navBtn" onClick={handleNavListClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svgNavBtn">
            <path className={(Tabs === "TASK LISTS" ? 'redSvgPath' : "svgPath")}
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </button>
      </div>

      <div className="taskContainer">
        <div className="pageTitle">
          <h1>{Tabs}</h1>
        </div>
        <div className="cutLine"></div>

        <form className={"pageAddTask" + " " + (Tabs === "ADD NEW TASK" ? '' : "hide")}
          onSubmit={handleInputSubmit}>
          <div className="pageAddTaskTitleContainer">
            <label className="pageAddTaskTitle" htmlFor="inputAddNewTask">
              <h3>TASK TITLE</h3>
            </label>
          </div>
          <div className="inputAddNewTaskContainer">
            <input className="inputAddNewTask"
              id="inputAddNewTask"
              name="inputAddNewTask"
              type="search"
              placeholder=" + Add Task"
              value={value}
              onChange={handleInputChange}
            />
          </div>
          <button id="btnAddTask" type="submit">
            <h3>ADD task</h3>
          </button>
          <div className="cutLine"></div>
          <>{todos.map((todo, idx) =>
            < NewTodos
              todo={todo}
              key={todo.id}
              idx={idx}
            />)}
          </>


        </form>


        <div className={"pageTaskLists" + " " + (Tabs === "TASK LISTS" ? '' : "hide")}>
          <div className="tabContainer" >

            <button className={(panel === "tabAllTask" ? "redTaskTab" : "taskTab")}
              onClick={handleAllTaskClick}>
              <input type="radio"
                id="tabAllTask"
                name="taskTab"
                value="tabAllTask"
                className="radioTab"
                onChange={handleAllTaskClick}
                checked={(panel === "tabAllTask")} />
              <label htmlFor="tabAllTask">
                <h4>AllTask</h4>
              </label>
            </button>

            <button className={(panel === "tabTodo" ? "redTaskTab" : "taskTab")}
              onClick={handleTodoClick}>
              <input type="radio" id="tabTodo" name="taskTab" value="tabTodo" className="radioTab"
                onChange={handleTodoClick}
                checked={(panel === "tabTodo")} />
              <label htmlFor="tabTodo">
                <h4>ToDo</h4>
              </label>

            </button>

            <button className={(panel === "tabDone" ? "redTaskTab" : "taskTab")}
              onClick={handleDoneClick}>
              <input type="radio" id="tabDone" name="taskTab" value="tabDone" className="radioTab" onChange={handleDoneClick}
                checked={(panel === "tabDone")} />
              <label htmlFor="tabDone">
                <h4>Done</h4>
              </label>

            </button>
          </div>
          {/* <div className="taskItem">
            <div className="taskItemList">
              <input type="checkbox" name="checkTodo" className="checkbox" id="checkTodo" />
              <label htmlFor="checkTodo" className="todoContent">
                <h2>My First Task</h2>
              </label>
              <button className="detailToogler detailToogle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path className="dotPath"
                    d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
                </svg>
              </button>

            </div>

            <div className="taskDetail">
              <div className="taskTitleContainer">
                <label htmlFor="titleRewrite">TASK TITLE
                </label>
              </div>
              <input type="search" name="titleRewrite" className="titleRewrite" id="titleRewrite" />
              <div className="detailBtnContainer">
                <button className="delete">Delete</button>
                <button className="save">Save</button>
              </div>

            </div>

          </div> */}
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

      </div>

    </div>

  );
}

export default App;
