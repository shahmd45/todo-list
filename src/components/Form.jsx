import React, { useState } from 'react';
import PropTypes from 'prop-types';

const From = (props) => {
  const { todos, setTodos, inputText, setInputText, setStatus } = props;
  const [error, setError] = useState('');

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setError('');

    if (inputText.length > 0) {
      const addTodo = [
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000
        }
      ];

      setTodos(addTodo);
      setInputText('');
    } else {
      setTimeout(() => {
        setError('Please enter your task.');
      }, 300);
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form>
        <div className="input-fields">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            className="todo-input"
          />
          {error.length > 0 && <p className="error">{error}</p>}
        </div>
        <button onClick={submitTodoHandler} className="todo-button">
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </form>
    </>
  );
};

export default From;

From.propTypes = {
  inputText: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  setInputText: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired
};
