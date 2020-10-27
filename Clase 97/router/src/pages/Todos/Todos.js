import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Todos = () => {

    const [todos, setTodos] = useState([]);

    const pepito = async () => {
        try {
            const res = await fetch();
            // hago otra cosa
            return 1;
        } catch(err) {
            console.info(err);
        }
    }

    const funcion2 = () => {
        const hola = pepito(); // devuelve promesa
        console.log(hola) // MAL! imprime promesa, no resultado
        hola.then(res => console.log(res)) // ahora si, imprime 1
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    return (
        <section id="todos" className="page-container">
            <h2>Todos</h2>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <li>
                                {todo.title} - <Link to={`/todo/${todo.id}`}>Ir al todo</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
    // /todo/1
    // /todo/2
    // ...
    // /todo/199
}

export default Todos;