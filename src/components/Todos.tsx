import Todo from "./Todo";
import style from "../css/todos.module.css"

interface Iprops {
    todos: {
        id: string;
        title: string;
        desc: string;
    }[];

    onRemoveTodo: (id: string) => void;
}

export default function Todos(props: Iprops) {
    const todoList = props.todos;
    function onRemoveTodo(id: string) {
        props.onRemoveTodo(id);

    }
    return (
        <section className={style.todos}>
            {todoList.map((todo) => (
                <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
            ))}
        </section>
    )
}
