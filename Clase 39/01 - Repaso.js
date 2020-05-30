const miFuncion = () => {
    console.log("Estoy en mi funcion");
};
// //
function miFuncion() {
    console.log("Estoy en mi funcion");
}

// //
const miFuncion = function() {
    console.log("Estoy en mi funcion");
};

///
const a = () => console.log("A");

function b() {
    console.log("B");
}

const c = function() {
    console.log("C")
};

a();
b();
c();
// //////////////////////

const miFuncion = () => {
    let hola = "hola";
}
console.log(hola);

//
let hola = "hola2";
const miFuncion = () => {
    //let hola = "hola";
    //console.log(hola);
    hola = "hola";
}
miFuncion();

console.log(hola);