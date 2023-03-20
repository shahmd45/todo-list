import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

import { addTask } from '../redux';
import { useDispatch } from 'react-redux';

function Todo(props) {
  const { text, todo, todos } = props;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    const filterTodo = todos.filter((el) => el.id !== todo.id);
    dispatch(addTask(filterTodo));
  };

  const completeHandler = () => {
    const newTodo = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    dispatch(addTask(newTodo));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <Button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </Button>
      <Button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </Button>
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  todo: PropTypes.object.isRequired
};
