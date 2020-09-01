const cargarUsuario = id => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            document.querySelector("#id").value = res.data.id;
            document.querySelector("#name").value = res.data.name;
            document.querySelector("#username").value = res.data.username;
            document.querySelector("#email").value = res.data.email;
            document.querySelector("#address-street").value = res.data.address.street;
            document.querySelector("#address-suite").value = res.data.address.suite;
        })
        .catch(err => alert(err.message));
};

const searchById = () => {
    const id = document.querySelector("#id-select").value;
    if(!id) throw new Error("Valor no encontrado.");
    cargarUsuario(id);
};

const load = () => {
    cargarUsuario(6);
    document.querySelector("#search").addEventListener("click", searchById);
};
