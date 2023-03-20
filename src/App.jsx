import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from './redux';
import Form from './pages/Form';
import TodoList from './pages/TodoList';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { todos, status } = useSelector((state) => state.addTodo);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'Completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'Incomplete':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      dispatch(addTask(todoLocal));
    }
  };

  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App </h1>
      </header>
      <Form />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
