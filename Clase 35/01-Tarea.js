let user;
let password;
let i = 0;

while(i < 3){
    if (user !== "fede" || password !== "123123") {
        user = prompt("Decime tu usuario");
        password = prompt("Decime tu contraseña");
    } else {
        alert("Bienvenido");
    }
    i++;
}

// ///////////////////////
let user;
let password;
let i = 0;

while(i < 3){
    if (user !== "fede" || password !== "123123") {
        user = prompt("Decime tu usuario");
        password = prompt("Decime tu contraseña");
    } else {
        alert("Bienvenido");
        i = 3;
    }
    i++;
    if(i === 3 && (user !== "fede" || password !== "123123")){
        alert("No tenes acceso");
    }
}

// //////////////////////////////////
