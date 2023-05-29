import React, { useCallback, useState } from "react";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TodoList from "./component/TodoList";

let id = 1;

//useCallback: khi gía trị bị thay đổi thì component ko bị render lại

function App() {
    const todoArray = [
        {
            id: 0,
            name: "Todo 1",
            isComplete: "false",
        },
        {
            id: 1,
            name: "Todo 2",
            isComplete: "true",
        },
    ];
    const [textInput, setTextInput] = useState("");
    const [todoList, setTodoList] = useState(todoArray);
    const [filter, setFilter] = useState("all");
    const handelShowAll = () => {
        setFilter("all");
        console.log("all");
    };
    const handelShowCompleted = () => {
        setFilter("true");
        console.log("true");
    };
    const handelShowNew = () => {
        setFilter("false");
        console.log("false");
    };

    const onTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            isComplete:
                newTodoList[idx].isComplete === "true" ? "false" : "true",
        };

        setTodoList(newTodoList);
        console.log(newTodoList[idx]);
    };

    const onChangeText = (e) => {
        setTextInput(e.target.value);
    };

    const click = () => {
        id = id + 1;
        addArray();
    };

    const addArray = useCallback(() => {
        const newArray = {
            id: id,
            name: textInput,
            isComplete: false,
        };
        setTodoList([...todoList, newArray]);
        setTextInput("");
    }, [textInput, todoList]);

    const filterTodolist = todoList.filter(
        (todo) => filter === "all" || filter === todo.isComplete,
    );

    return (
        <div className="contain-sm px-4">
            <h3 className="container text-center">Todo app</h3>

            <br></br>
            <TextField
                elemAfterInput={
                    <Button
                        appearance="primary"
                        onClick={click}
                        isDisabled={!textInput}
                    >
                        Add Todo
                    </Button>
                }
                value={textInput}
                onChange={onChangeText}
            ></TextField>
            <br></br>

            <TodoList
                todoList={filterTodolist}
                onTodoClick={onTodoClick}
            ></TodoList>

            <Button onClick={handelShowAll}>Show all</Button>
            <Button onClick={handelShowCompleted}>Show completed</Button>
            <Button onClick={handelShowNew}>Show new</Button>
        </div>
    );
}

export default App;
