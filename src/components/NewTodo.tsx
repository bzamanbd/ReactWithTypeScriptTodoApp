import { useState } from "react";
import style from "../css/newtodo.module.css";
import { v4 as uuidv4 } from 'uuid';

interface Iprops {
    onNewTodo: (newTodo: {
        id: string;
        title: string;
        desc: string;
    }) => void
}

export default function NewTodo(props: Iprops) {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;

    function handleOnChange(e: { target: { value: string; name: string } }) {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value }
        });
    }

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        if (title || desc) {
            props.onNewTodo({ id: uuidv4(), title: todo.title, desc: todo.desc });
            setTodo({ title: "", desc: "" });
        }
    }
    return (
        <form onSubmit={handleSubmit} className={style.form}>

            <div className={style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" value={title} onChange={handleOnChange} />
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="desc">Desc:</label>
                <textarea name="desc" id="desc" value={desc} onChange={handleOnChange} />
            </div>
            <button type="submit">Add New</button>

        </form>
    )
}
