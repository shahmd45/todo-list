import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

//redux connection
import { addTask, addInputText, addInputError, addStatus } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const From = () => {
  const dispatch = useDispatch();
  const { todos, inputText, inputError } = useSelector((state) => state.addTodo);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addInputError(''));

    if (inputText.length > 0) {
      const todo = [
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000
        }
      ];

      dispatch(addTask(todo));
      dispatch(addInputText(''));
    } else {
      setTimeout(() => {
        dispatch(addInputError('Please enter your task.'));
      }, 300);
    }
  };

  const statusHandler = (e) => {
    dispatch(addStatus(e.target.value));
  };

  return (
    <>
      <form>
        <Input
          type="text"
          value={inputText}
          error={inputError}
          className="todo-input"
          onChange={(e) => dispatch(addInputText(e.target.value))}
        />
        <Button onClick={submitTodoHandler} className="todo-button">
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </Button>
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
