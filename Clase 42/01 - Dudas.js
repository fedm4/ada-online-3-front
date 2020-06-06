let arr = ["hola", "chau", "capo", "genial", "hola"];
const palabraABuscar = prompt("Cual palabra elimino");

arr = arr.filter(palabra => palabra !== palabraABuscar); // Return implicito en funciones arrow de una sola linea
// Parametro que recibe filter, que es una declaracion de una funcion (palabra => palabra !== palabraABuscar)
// Por otro lado tenemos el parametro que recibe la funcion que definimos recien (palabra)

console.log(arr);

// ////
foreach // El callback no requiere return y foreach no devuelve nada. (no hace return de ningun valor)

// retornan arrays
filter // devuelve un array filtrado en base a una condicion declarada como return en el callback
map    // devuelve un array de igual tamaño, basado en el array original, pero modificado en base al return
//Ejemplo
let arr = ["hola", "chau", "capo", "genial", "hola"];

arr = arr.map(palabra => palabra + " pepe");
console.log(arr);

// retornan un valor especifico
find // devuelve un elemento especifico, en base a una condicion declarada como return en el callback. Cuando lo encuentra, se corta la ejecucion.
findIndex // devuelve el indice de un elemento especifico en base a una condicion declarada como return en el callback. 
// Tambien cuando lo encuentra corta la ejecucion del metodo y SI NO LO ENCUENTRA devuelve -1.

// ejemplo
let arr = ["hola", "chau", "capo", "genial"];
const palabraABuscar = prompt("Cual palabra busco");

const callback = palabra => palabra === palabraABuscar;

const elemento = arr.find(callback); // find devuelve "array[i]"
const indice = arr.findIndex(callback);
console.log(elemento);
console.log(indice);

// ///////////////////

// splice!
const arr = ["miri", "mora", "orne", "sofi", "vale", "viki", "fede"];

const valor = arr.splice(6, 1);
// lleva dos parametros 
// 1. desde que elemento (indice) quiero eliminar
// 2. cuantos elementos a partir de ese indice quiero eliminar
// Modifica el array original y devuelve el valor separado de la lista.

console.log(arr); // (6) ["miri", "mora", "orne", "sofi", "vale", "viki"]
console.log(valor); //["fede"]
