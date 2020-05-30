const miFunc = param1 => {
    return param1 + " dinosaurio";
};

let pepe = miFunc("pepe"); // pepe dinosaurio


if(pepe == "pepe dinosaurio") {
    console.log("Dino!")
} else {
    console.log("Reptiliano");
}
// 
const sumar = (valor1, valor2) => {
    return valor1 + valor2;
}

const imprimirSuma = (srResultado) => {
    console.log(`El resultado de la suma es: ${srResultado}`);
}

let resultado = sumar(1,2);
imprimirSuma(resultado);

// S = Single responsibility - o responsabilidad unica