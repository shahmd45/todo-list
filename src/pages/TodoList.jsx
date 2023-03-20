import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

function TodoList(props) {
  const { filteredTodos } = props;
  const { todos, status } = useSelector((state) => state.addTodo);

  const count = filteredTodos.length;

  return (
    <div className="todo-container">
      <h4>{`${status} Task: ${count}`}</h4>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todos={todos} todo={todo} text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};
