import React, { useState, useEffect } from "react";
// Importing Components
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';

function App() {

  // State
  const [inputText, setInputText] = useState(""); // hooks
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, []);


  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <div className="App">
      <header>
        <h1>Todo's App </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;