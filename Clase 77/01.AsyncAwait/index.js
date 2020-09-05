const buscarUsuariosYTodos = async () => {
    try {
        const start = Date.now();
        //const todosRes = await axios.get("https://jsonplaceholder.typicode.com/todos");
        //const usersRes = await axios.get("https://jsonplaceholder.typicode.com/users");
        const p1 = axios.get("https://jsonplaceholder.typicode.com/todos");
        const p2 = axios.get("https://jsonplaceholder.typicode.com/users")
        const [todosRes, usersRes] = await Promise.all([p1, p2]);
        console.log(Date.now() - start);
        console.log(todosRes.data, usersRes.data);
    } catch(err) {
        console.log("ERROR", err);
    }
};

buscarUsuariosYTodos();
console.log("Esto se ejecuta antes que termine la funcion anterior.");