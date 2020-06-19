const arr = [1,15,4,76,56, 85, 206,203];
// const arr2 = [...arr];
const valorMasGrande = (arr) => Math.max(...arr); // Math.max(1,15,4,76,56, 85,206,203)

valorMasGrande(arr);

//////////////////////////////////////////////////
const frase = "Ay si pudiera";
const letras = ["i", "a"];

const resultadoEsperado = {
    Ay: {
        i: 0,
        a: 1
    },
    si: {
        i: 1,
        a: 0
    },
    pudiera: {
        i: 1,
        a: 1
    }
};

// 1. Separar frase en array por palabras
// 2. Crear un objeto 
// 3. Meter cada palabra como propiedad (indice), donde cada palabra, sea otro objeto, adentro de mi primer objeto
// 4. Crear una propiedad por cada letra del array de letras, dentro de cada palabra de mi objeto
// 5. Cuento la cantidad de veces que se repite la letra que estoy buscando en mi palabra

const crearObjetitoDeLetrasYPalabras = (frase, letras) => {
    const arr = frase.split(" ");
    const obj = {};
    arr.forEach(palabra => {
        obj[palabra] = {}; // obj[propiedad-dinamica] -> obj[campo] = valor
        letras.forEach(letra => {
            const arrPal = palabra.split(""); //["A", "y"] -> ["s", "i"]
            obj[palabra][letra] = arrPal.reduce((acc, letraDePalabra) => {
                if (letraDePalabra.toLowerCase() === letra.toLowerCase()) {
                    acc = acc + 1;
                }
                return acc;
            }, 0);
        })
    });
    return obj;
};

/////////////////////////////////////////////////////

const crearObjetitoDeLetrasYPalabras = (frase, letras) => {
    const arr = frase.split(" ");
    const obj = {};
    arr.forEach(palabra => {
        obj[palabra] = {};
        letras.forEach(letra => {
            const arrPal = palabra.toLowerCase().split("");
            letra = letra.toLowerCase();
            obj[palabra][letra] = arrPal.reduce((acc, letraDePalabra) => letraDePalabra === letra ? acc + 1 : acc, 0);
        })
    });
    return obj;
};

// /// // 
const obj = crearObjetitoDeLetrasYPalabras(frase, letras); // se guarda en obj
crearObjetitoDeLetrasYPalabras(frase, letras);  // no se guarda y el return de la funcion se pierde en el eter