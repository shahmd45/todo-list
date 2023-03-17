import React from 'react';

const From = (props) => {
    const { todos, setTodos, inputText, setInputText, setStatus } = props;

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const addTodo = [
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]

        setTodos(addTodo);
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} className="todo-button">
                <i className="fa fa-plus-square" aria-hidden="true"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Incomplete</option>
                </select>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </form>
    );
}

export default From;