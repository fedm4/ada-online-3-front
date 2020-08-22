let // me permite reemplazar el valor enteramente
const // solo me permite darle valor al asignar

const a = 1;
const a = 2; // ERROR:

let b = 1;
let b = 2; // todo lindo

////////////////
const arr = [];
arr.push(1); // funciona bien
arr.splice(); //  funciona bien
arr[2] = "lalala"; // bien
// solo uso let en arrays si necesito reemplazar, por ej cuando uso filter para eliminar una entrada
///////////////////// 
const miObj = {};
miObj.prop1 = 1;
miObj["prop2"] = 2;
// Todo funciona perfecto asi.
///////////////////////
const func = () => null; //
////////////////
arr.forEach(item => {
    const tr = document.createElement('tr');
})
//////////////
const productos = [];
const precio = 1;

const funcioncita = valor => {
    const productos = document.querySelector(".producto");
    return valor + 1;
}

funcioncita(precio);// ambas llamadas
funcioncita(1); // hacen EXACTAMENTE lo mismo
// productos === []
//////////////////////////////////////
const func2 = param => {
    return typeof param;
}

const callback = () => 2;

func2(callback); // function 
func2(callback()); // number

///--->
func2(callback()); // number
// dividida en dos pasos de
const res = callback();
func2(res);
// ambos casos son iguales

func2(callback);
func2(() => 2);// hacen lo mismo y obtienen mismo resultadoEsperado
////////////////
//adentro de add event listener pasa esto, en algun momento 
const addEventListener = (eventToListen, callback) => {
...
    //console.log(eventToListen) // "click"
    callback(event); // eliminar(event) en nuestro caso siguiente, el primer ejemplo
    // en el segundo caso hace "null(event) y esto tiraria error"
...
////////////////////////////////////
const eliminar = (event, productoId) => null;
const productoId = 2;
button.addEventListener("click", eliminar); // solo le estoy pasando el event, no productoID
button.addEventListener("click", eliminar(event, productoId))// event no existe y estoy pasandole, no
// un callback pero el resultado de la funcion eliminar // Esta es la que SEGURO esta mal.
button.addEventListener("click", event => eliminar(event, productoId));

////////////////////////////////////
//Fede en ({key}) puedo dejarlo como key aquí:
document.querySelector('#inputToDo').addEventListener('keydown', ({key}) => { // desde event.key
    if (key === "Enter") { createTask(); } });
// No! Deberias dejar las llavecitas siempre para traer destructuradamente el key del objecto event

const {prop1} = {prop1: "abc", prop2: "a"};
// prop1 === "abc"
///////////////////////
button.addEventListener("keydown", ({key}) => {if(key ==="barrita") doAction();});
button.addEventListener("click", doAction);
////////////////////
load = () => {
    //...
    //agregarProductoAMesa
    const elem = document.querySelector("#agregar-producto-a-mesa");
    elem.addEventListener("click", agregarProductoAMesa);
    elem.addEventListener("keyup", event => {
        if(event.keyCode === 13) agregarProductoAMesa();
    })
}
////////////////////
