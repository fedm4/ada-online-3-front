// COPIA Y REFERENCIA
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

console.log(arr1) // 1,2,3,4,5
console.log(arr2) //1,2,3,4,5

arr2[2] = 6;

console.log(arr1);
console.log(arr2);

/////////////////
let a = 1;
let b = a; // pasando por copia.
// porque es un tipo de dato que se pasa por copia.
console.log(a, b) // 1, 1
b = 2; 
console.log(a,b) // 1,2

//// 
// Pasar por referencia sucede con arrays y objetos

const arr1 = [1, 2, 3, 4, 5]; // 
const arr2 = arr1; // pasandole el puntero, o direccion de memoria del array
// apuntan al mismo array siempre, se modifica uno, se modifica el otro.
// para independizar, hay que CLONAR

console.log(arr1) // 1,2,3,4,5
console.log(arr2) //1,2,3,4,5

arr2[2] = 6;

console.log(arr1); // 1,2,6,4,5
console.log(arr2); // 1,2,6,4,5

//
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1]; // Spread operator / Clona el array
// ...arr1 => 1,2,3,4,5
arr2[0] = 6;
console.log(arr1, arr2); // [1,2,3,4,5] / [6,2,3,4,5]

const arr3 = [arr1]; // Mal porque quedaria [[1,2,3,4,5]]