const myFunc = frase => {
    const arr = frase.split(''); // ['a', 'l', ' ', 'v', 'e'. 'r', ' ', ]
    let count = 0;
    /*
    const callback = letra => {
        if() { // si es vocal
            count++;
        }
    };
    arr.forEach(callback); */
    
    /*arr.forEach(function (letra) {
        if() { // si es vocal
            count++;
        }
    });*/
    
    arr.forEach(letra => {
        const vocales = ['a','e','i','o','u'];
        if(vocales.indexOf(letra) > -1) { // si es vocal
            count++;
        }
    });
    
    console.log(count);
}

const input = prompt("Digame una frase");
myFunc(input);

// //////
arr.forEach(callback);
arr.map(callback);
arr.filter(callback);
arr.find(callback);
arr.findIndex(callback);
arr.reduce(callback);

// Representacion de lo que hace Foreach por atras.
forEach = (funcionAEjecutar) => {
    for(let i = 0; i < Array.length; i++){
        funcionAEjecutar(Array[i]); // ['a', 'l', ' '] // si i = 0  entonces Array[i] == 'a'
    }
}

map = (funcionAEjecutar) => {
    const ret = [];
    for(let i = 0; i < Array.length; i++) {
        const nuevoElemento = funcionAEjecutar(Array[i]);
        ret.push(nuevoElemento);
        
    }
    return ret;
}

find = funcionAEjecutar => {
    for(let i = 0; i < Array.length; i++) {
        if(funcionAEjecutar(Array[i]) === true) {
            return Array[i];
        }
    }
}


// foreach es una funcion
// recibe como parametro a su vez una funcion
// las funciones que son pasadas por parametro se llaman callbacks
// 



const myFunc = frase => {
    const arr = frase.split(''); // ['a', 'l', ' ', 'v', 'e'. 'r', ' ', ]
    let count = 0;
    
    for (let i = 0; i < Array.length; i++){
        if(arr[i]) { // si es vocal
            count++;
        }
    }
}


arr.forEach()
"String.".split('')



///////////////////
// ejemplo  de map

const minus = ['a', 'b', 'c', 'd', 'e'];

const mayus = minus.map(letra => {
    return letra.toUpperCase();
});

console.log(mayus);

// find
const minus = ['a', 'b', 'c', 'd', 'e'];

const letraA = minus.find(letra => {
    return letra === 'd'; // bool
});

console.log(letraA);

find = funcionAEjecutar => {
    for(let i = 0; i < Array.length; i++) {
        if(funcionAEjecutar(Array[i]) === true) {
            return Array[i];
        }
    }
    return undefined;
}

findIndex = funcionAEjecutar => {
    for(let i = 0; i < Array.length; i++) {
        if(funcionAEjecutar(Array[i]) === true) {
            return i;
        }
    }
    return -1;
}
// ///
const lista = [
    ['', 'capx'],
    ['', 'genix'],
    ['', 'maquina'],
    ['', 'campeonx'],
    ['', 'crack']
];

lista.foreach(item => {
    // item === ['', 'palabra extra']
    item[0] = "edgar allan poe";
})

console.log(lista);

console.log(lista[0][1])

lista[0] === ['', 'capx'] 
lista[0][1] === 'capx'