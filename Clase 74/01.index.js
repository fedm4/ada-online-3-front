
///////////////
// JSON.stringify convierte de objeto a string
{employeeId: 1, name: "Fede"}
//a
"{'employeeId': '1', 'name': 'Fede'}"

////
// JSON.parse convierte de string a objeto
"{'employeeId': '1', 'name': 'Fede'}"
//a
{employeeId: 1, name: "Fede"}


//////
const fetchOptions = {method: "DELETE",...};
console.log("Antes del fetch");
fetch("url", fetchOptions)
    .then(response => response.json()) // console.log("Adentro del then")
    .then(responseData => console.log(responseData))
    .catch(err => console.log("Adentro del catch"));
console.log("Despues del fetch");

// Antes del fetch
// Despues del fetch 
// Adentro del then - Si esta todo bien /// Adentro del catch - Si devolvio error la promesa

///////////////////
console.log("1");
fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(res => res.json())
  .then(data => console.log("3", data));

console.log("2");


console.log("1");
fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(res => res.json())
  .then(data => console.log("3", data))
  .catch(err => console.log("3", "Hubo un error")
  .finally(() => console.log("4", "finally!"));

console.log("2");


//////////////////////////

const loading = document.querySelector("#loading");

loading.style.display = "block"; // [paso a mostrar mi spinner de carga]

fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(res => res.json())
  .then(data => console.log("3", data))
  .catch(err => console.log("3", "Hubo un error")
  .finally(() => loading.style.display = "none");
