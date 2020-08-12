const saludos = ["aloha", "adieu", "hola", "baibai"];
saludos.forEach(saludo => console.log(saludo));

for(let saludo of saludos) {
    console.log(saludo);
}

// Ambos modos de iterar hacen lo mismo

// NodeList - querySelector
// HTMLCollection - elemento.children


//////////////////////
parseInt("1") // 1 - ParseInt lo voy a usar cuando quiera convertir de un string a un numero ENTERO
// o sea, un numero sin coma
Math.floor("1.25") // 1
parseInt(1.25) // 1
Math.floor(1.25) // 1 - Idealmente deberia pasarle un numero de punto flotante y lo voy a usar
// cuando quiera obtener un redondeo hacia abajo, o sea, un numero entero pero desde este numero
// de punto flotante
Math.ceil(1.25) // 2 - redondea hacia arriba 

//////////////////////
element.checked // es para input type checkbox
element.selected // es para <select></select>
element.selected = true // asignacion
element.selected === true // comparacion
element.selected // puedo usar su retorno booleano para evitar la comparacion redundante
if(element.selected) // es igual a 
if(element.selected == true)

//////////////////
element.id // obteniendo su valor // me devuelve por ej: "viejo-id"
element.id = "nuevo-id" // asignandole un valor // reemplazo id por "nuevo-id"
element.id === "nuevo-id" // comparando su valor // me devuelve true
/////////////

