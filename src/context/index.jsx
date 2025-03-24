import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../firebase/dbUtil';

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("ADD NEW TASK");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [panel, setPanel] = useState("tabAllTask");
  const id = useRef(3);
  
  // 載入待辦事項
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosArray = await fetchTodos();
        setTodos(todosArray);
        
        // 如果有資料，更新 id 參考
        if (todosArray.length > 0) {
          const maxId = Math.max(...todosArray.map(todo => todo.numId || 0));
          id.current = maxId + 1;
        }
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    };
    
    loadTodos();
  }, []);

  // 處理導航
  const handleNavNewClick = () => setActiveTab("ADD NEW TASK");
  const handleNavListClick = () => setActiveTab("TASK LISTS");
  
  // 處理選項卡
  const handleAllTaskClick = () => setPanel("tabAllTask");
  const handleTodoClick = () => setPanel("tabTodo");
  const handleDoneClick = () => setPanel("tabDone");
  
  // 處理輸入
  const handleInputChange = (e) => setValue(e.target.value);
  
  // 提交新的待辦事項
  const handleInputSubmit = async (event) => {
    event.preventDefault();
    if (value === "") return;
    
    try {
      const newTodo = {
        numId: id.current,
        content: value,
        isDone: false,
        isWrite: false,
      };
      
      const docRef = await addTodo(newTodo);
      
      setTodos(todos => [
        {
          id: docRef.id,
          ...newTodo
        },
        ...todos
      ]);
      
      id.current++;
      setValue('');
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  
  // 切換待辦事項狀態
  const handleChceckboxToggleIsDone = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      await updateTodo(id, { isDone: !todoToUpdate.isDone });
      
      const updatedTodos = todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      });
      
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  
  // 切換編輯模式
  const handleToggleIsWrite = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        isWrite: !todo.isWrite,
      };
    });
    setTodos(updatedTodos);
  };
  
  // 更新待辦事項內容
  const handleTitleRewrite = async (id, title) => {
    try {
      await updateTodo(id, { content: title, isWrite: false });
      
      const updatedTodos = todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          content: title,
          isWrite: false,
        };
      });
      
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo title:", error);
    }
  };
  
  // 刪除待辦事項
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  
  const contextValue = {
    todos,
    activeTab,
    title,
    setTitle,
    inputValue: value,
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
  };
  
  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}