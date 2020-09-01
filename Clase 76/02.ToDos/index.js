const onload = () => {
    const lista = document.querySelector("#todo-list");
    /*axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res2 => {
                res.data.forEach(todo => {
                    const li = document.createElement('li');
                    const title = document.createTextNode(todo.title);
                    const u = res2.data.find(user => user.id === todo.userId);
                    const user = document.createTextNode(u.name);
                    const separator = document.createTextNode(" - ");
                    li.appendChild(title);
                    li.appendChild(separator);
                    li.appendChild(user);
                    lista.appendChild(li);
                });
            })
        });*/


    const p1 = axios.get("https://jsonplaceholder.typicode.com/todos");
    const p2 = axios.get("https://jsonplaceholder.typicode.com/users");

    Promise.all([p1, p2]).then(res => {
        // res es un array [{data:}, {data:}]\
        const todos = res[0].data;
        const users = res[1].data;

        todos.forEach(todo => {
            const li = document.createElement('li');
            const title = document.createTextNode(todo.title);
            const u = users.find(user => user.id === todo.userId);
            const user = document.createTextNode(u.name);
            const separator = document.createTextNode(" - ");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;

            li.appendChild(title);
            li.appendChild(separator);
            li.appendChild(user);
            li.appendChild(checkbox);

            if(todo.completed) li.classList.add("completed");
            lista.appendChild(li);
        });
    })
};