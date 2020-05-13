let dia = prompt("Digame por favor que día es");
let mes = prompt("Digame por favor el mes");
let hemisferio = prompt("Digame por favor en qué hemisferio se encuentra");

if(
    (dia >= 21 && mes === "marzo") ||
    mes === "abril" ||
    mes === "mayo" ||
    (dia < 21 && mes === "junio")
) {
    if(hemisferio == "norte") {
        alert("Es primavera!");    
    } else {
        alert("Es otoño!");
    }
} else if (
    (dia >= 21 && mes === "junio") ||
    mes === "julio" ||
    mes === "agosto" ||
    (dia < 21 && mes === "septiembre")
) {
    if (hemisferio == "norte") {
        alert("Es verano");
    } else {
        alert("Es invierno!");
    }
} else if (
    (dia >= 21 && mes === "septiembre") ||
    mes === "octubre" ||
    mes === "noviembre" ||
    (dia < 21 && mes === "diciembre")
) {
    if (hemisferio == "norte") {
        alert("Es otoño");
    } else {
        alert("Es primavera");
    }
} else {
    if(hemisferio == "norte") {
        alert("Es invierno");
    } else {
        alert("Es verano");
    }
}


// ///////////////////////////////////////////////////////////////

let cantidadProducto1;

if(condicion) {
    cantidadProducto1 = prompt("Cuantos desea llevar de producto 1");
}


// //////////////////////////////////////////////////////////////

if(condicion) {
    alert();
    prompt();
    let pepe = 1;
    pepe = 1;
    const mi_const = "lala";
    console.log();
}

// ///////////////////////////////////////////////////////////////////

if(true){

}

if(miVariable) { // miVariable es truthy or falsy

}

// es equivalente a
if (miVariable == true) {

}

if(true) {

}

let pepito = 0;
if(!pepito) { // pepito == false
    console.log("entra porque false es igual a false");
}

// ////////////////////////////////////////////
let pregunta = prompt(`Esta es una pregunta \nOtra cosa en otra linea`);
// o
let pregunta = prompt(`Esta es una pregunta
Otra cosa en otra linea`);

// //////////////////////////////////////////////

if(variable == "valor") {
    // Lo que debe suceder cuadno efectivamente se cumple mi expectativa
    // de la condición teniendo ese valor definido
} else {
    // Lo que debe suceder si NO se cumple lo que yo esperaba en la 
    // condición del IF
}

if(variable === "valor1") {

} else if(variable === "valor2") {

} else if(variable === "valor3") {

} else {
    // Si ninguno de los casos, o sea, las condiciones de ninguno de los 
    // If o else If anteriores se cumple, Se ejecuta esta parte del
}

if(variable == "valor1") {

}

if(variable === "valor2") {

} 

if(variable === "valor3") {

}
