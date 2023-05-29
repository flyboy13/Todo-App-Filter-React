import React from "react";
import Todo from "./Todo";

function TodoList(props) {
    const { todoList, onTodoClick } = props; // list props

    return (
        <div className="container">
            {todoList.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onTodoClick={onTodoClick}
                ></Todo>
            ))}
        </div>
    );
}

export default TodoList;
