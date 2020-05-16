let cantidadCuotas = 12;
const aumentoInteres = 0.3;
const interesBase = 45;
let interes = interesBase;
let valorCompra = 5000;

let i = 1;

while(i <= cantidadCuotas) {
    interes += aumentoInteres; // interes = interes + aumentoInteres
    i++;
}

let valorCuota = valorCompra / cantidadCuotas;
console.log("Cuota sin interes", valorCuota);

let cuotas =  valorCuota + (valorCuota / (interes / 12));

console.log("Cuota con interes", cuotas);

// Calculador discutible de cuotas
// //////////////////////////////////////

let i = 1;

while(i <= 10) {
    console.log(i);
    i++;
}
console.log("");
