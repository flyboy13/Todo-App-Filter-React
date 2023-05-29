import Button from "@atlaskit/button";
import React from "react";
import styled from "styled-components";
import "../App.css";

let ButtonStyle = styled(Button)`
    margin-bottom: 10px;

    &:hover {
        background-color: #7cb9e8;
    }
`;

function Todo(props) {
    const { todo, onTodoClick } = props;

    const handleTodoClick = (todo, idx) => {
        onTodoClick(todo, idx);
    };

    return (
        <ButtonStyle
            style={{
                textDecoration:
                    todo.isComplete === "true" ? " line-through" : "none", // set condition to style in component
                fontStyle: "italic",
                backgroundColor:
                    todo.isComplete === "true" ? "#7CB9E8" : "#f5f6f8",
            }}
            shouldFitContainer
            onClick={() => handleTodoClick(todo, todo.id)}
        >
            {todo.name}
        </ButtonStyle>
    );
}

export default Todo;
