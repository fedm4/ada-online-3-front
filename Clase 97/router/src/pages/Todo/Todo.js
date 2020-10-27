import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Todo = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState({title: "", completed: false});

    useEffect(() => {
//        Si tuviera context podria hacer lo siguiente:
//        const currTodo = todo.find(t => t.id == id)
//        setTodo(currTodo);

        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, []);


    return (
        <section id="todo" className="page-container">
            <h2>Todo</h2>
            <article>
                Title: {todo.title}
                <br />
                Completed: {todo.completed ? "Completed" : "Incompleted"}
            </article>
        </section>
    )
}

export default Todo;