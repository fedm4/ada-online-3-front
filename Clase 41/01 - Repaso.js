const pepe = "hola soy pepe";
console.log(peep); // Error! se frena la ejecucion
const multiplicacion = 10*8;    
console.log(multiplicacion);  

// //////

try {
    const pepe = "hola soy pepe";
    console.log(peep); // Error!
}catch(error) {
    alert(`Hubo un error: ${error}`); // Agarra el error y hace algo
}

// Sigue ejecutando normalmente
try {
    const multiplicacion = 10*8;    
    console.log(multiplicacion);    
}catch(error) {
    console.error(`Hubo un error: ${error}`);
}

// //////

const pedirDatos = () => {
    const input = prompt("Decime tu nombre");
    if(!input) {
        throw new Error("Usuario no puso datos");
    }
    return input;
};

const procesarDatos = datos => console.log(datos);

const initApp = () => {
    try {
        const datos = pedirDatos();
        procesarDatos(datos);
    } catch(err) {
        alert(`Hubo un error!`);
    }
}


// 


const asignar = (opcion) => {
    let muerte;
    switch(opcion) {
        case "1":
            muerte = "Exceso de netflix";
            break;
        case "2":
            muerte = "Atragantamiento con mousse pasado";
            break;
        case "3":
            muerte = "Exploto de risa";
            break;
        default:
            throw new Error("No pusiste ningun numero correcto");
    }
    return muerte;
}

const ingresar = () => {
    const input = prompt("Por favor elegir entre la opcion 1, 2 o 3");
    return asignar(input); // SIII!! funciona!
}

const mostrar = () => {
    try {
        const respuesta = ingresar();
        alert(`Usted morira por: ${respuesta}`);  
    } catch(err) {
        alert(`Hubo un error: ${err}`);
    }
};    



 // /// Otra opcion para hacer esto es:

 const asignar = (opcion) => {
    switch(opcion) {
        case "1":
            return "Exceso de netflix";
        case "2":
            return "Atragantamiento con mousse pasado";
        case "3":
            return "Exploto de risa";
        default:
            throw new Error("No pusiste ningun numero correcto");
    }
}

// ////
let arr = ["hola", "chau", "capo", "genial", "hola"];

const newArr = [];

const palabraABuscar = prompt("Cual palabra elimino");

for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== palabraABuscar) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

// O mejor incluso
let arr = ["hola", "chau", "capo", "genial", "hola"];
const palabraABuscar = prompt("Cual palabra elimino");

arr = arr.filter(palabra =>{
    return  palabra !== palabraABuscar;
});

console.log(arr);


// Explicacion de como funciona el filter
// Esto YA ESTA hecho, no es necesario hacer para que 
// funcione el codigo anterior.
Array.prototype.filter = (callback) => {
    const resultArray = [];

    for(let i = 0; i < Array.length; i++){
        let seGuarda = callback(Array[i]); // true o false 
        if(seGuarda){
            resultArray.push(Array[i]);
        }
    }

    return resultArray;
}

// ///////////////////////////////////////
let arr = ["hola", "chau", "capo", "genial", "hola"];
const palabraABuscar = prompt("Cual palabra elimino");

arr = arr.filter(palabra =>{
    return  palabra !== palabraABuscar;
});

console.log(arr);

// /////
let arr = ["hola", "chau", "capo", "genial", "hola"];
const palabraABuscar = prompt("Cual palabra elimino");

arr = arr.filter(palabra => palabra !== palabraABuscar); // Return implicito en funciones arrow de una sola linea

console.log(arr);

const miFuncion = () => "lalala Fede";

console.log(miFuncion());
