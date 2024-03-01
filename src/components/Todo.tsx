import style from "../css/todo.module.css";

interface Iprops {
    todo: {
        id: string;
        title: string;
        desc: string;
    };
    onRemoveTodo: (id: string) => void;
}
export default function Todo(props: Iprops) {
    const { id, title, desc } = props.todo;

    function handleOnDelete() {
        props.onRemoveTodo(id);
    }
    return (
        <article className={style.todo}>
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <div>
                <button className={style.btn} onClick={handleOnDelete}><i className="fa fa-trash fa-2x"></i></button>
            </div>
        </article>
    )
}
