let numero = 1000;
do {
    console.log('número: ', numero);
    numero++;
} while (numero < 1000);
// // 
let numero = 1000;
while(numero < 1000) {
    console.log('número: ', numero);
    numero++;
}

// //  Refactorizar - rehacer código mejorandolo con diferentes enfoques y/o herramientas
let user;
let password;
let i = 0;

do {
    user = prompt("Decime tu usuario");
    password = prompt("Decime tu contraseña");
    i++;
} while(i < 3 && (user !== "fede" || password !== "123123"));

if(user === "fede" && password === "123123") {
    alert("Bienvenido");
}else {
    alert("No tenés acceso.");
}
