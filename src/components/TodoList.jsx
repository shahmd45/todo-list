import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

function TodoList(props) {
  const { status, todos, setTodos, filteredTodos } = props;
  const count = filteredTodos.length;

  return (
    <div className="todo-container">
      <h4>{`${status} Task: ${count}`}</h4>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id} />
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
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};
