let peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
peliculas[4] = 'Batman: The Killing Joke';
peliculas[5] = 'Batman: The Dark Knight Returns, Part 1';
peliculas[6] = 'Batman: The Dark Knight Returns, Part 2';
peliculas[7] = 'LEGO Batman';
peliculas[8] = 'The Batman';

//peliculas[11] = "Batman 16";
//peliculas.push("Batman 16");
//peliculas[peliculas.length + 1] = "Batman 16";
peliculas[peliculas.length] = "Batman 16";
for(let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]);   
}

console.log(peliculas)

///


let villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];

for (let i = villanosDeBatman.length - 1; i >= 0; i--) {
  console.log(villanosDeBatman[i]);
}

/// 
array = [15, 76];

for(let i = 0; i < array.length ; i++) {
    // i => 1
    // array[i] => array[1] => 76
}
     




//////////////////////
// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:
//  Ingrese números: 5 7 10 12 24
//  La suma de todos los números es: 58
const input = prompt("ingresa los nros a sumar");
const arr = input.split(' ');
let suma = 0;

for(let i = 0; i < arr.length; i++) {
    suma = suma + Number(arr[i]); 
}
console.log(suma);
