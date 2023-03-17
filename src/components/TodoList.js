import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {

    const count = filteredTodos.length;

    return (
        <div className="todo-container">
            <ul className="todo-list">
                <h4>Total Task: {count}</h4>
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        text={todo.text}
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList