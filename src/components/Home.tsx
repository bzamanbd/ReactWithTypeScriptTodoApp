import { useState } from "react";
import Todos from "./Todos";
import style from "../css/home.module.css";
import NewTodo from "./NewTodo";

interface Itodo {
    id: string;
    title: string;
    desc: string;
}

export default function Home() {
    const initTodos: Itodo[] = [];
    const [todos, setTodos] = useState(initTodos);

    function onNewTodo(newTodo: Itodo) {
        setTodos([...todos, newTodo]);
    }
    function onRemoveTodo(id: string) {
        setTodos((xTodo) => {
            const filteredTodos = xTodo.filter((todo) => todo.id !== id)
            return filteredTodos;
        });
        alert('want to delete?');
    }

    return (
        <div className={style.container}>
            <h2>Todo App</h2>
            <NewTodo onNewTodo={onNewTodo} />
            <Todos todos={todos} onRemoveTodo={onRemoveTodo} />
        </div>
    )
}
