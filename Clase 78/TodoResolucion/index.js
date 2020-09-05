let users = [];

const createToDoHtml = todo => {
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
    document.querySelector("#todo-list").prepend(li);
};

const onload = () => {
    const p1 = axios.get("https://jsonplaceholder.typicode.com/todos");
    const p2 = axios.get("https://jsonplaceholder.typicode.com/users");

    Promise.all([p1, p2]).then(res => {
        // res es un array [{data:}, {data:}]\
        const todos = res[0].data;
        users = res[1].data;
        todos.forEach(todo => createToDoHtml(todo));
        generarSelectUsuarios();
    })
    document.querySelector("#add-todo").addEventListener("click",addTodo)
};

const addTodo = async () => {
    const input = document.querySelector("#input-todo");
    const userId = Number(document.querySelector("#user-select").value);
    if(userId == -1) throw new Error("El usuario debe ser seleccionado.");
    try {
        const postData = {
            title: input.value,
            userId,
            completed: false
        };
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos", postData);
        const todo = res.data;
        createToDoHtml(todo);
    } catch(err) {
        console.error(err);
    }
}

const generarSelectUsuarios = () => {
    const select = document.querySelector("#user-select");
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.innerText = user.name;
        select.appendChild(option);
    });
};
