let username=prompt("user");
let pass = prompt("password");

try{
    if(username !== "fede" || pass !== "123123") {
       console.log("Esto se ejecuta");
       throw new Error("Usuario o password invalido");
       console.log("Pero esto no");
    }
    alert(var12);
} catch(err) {
    alert(err);
}

console.log("continua el programa");
// console.log(err); // undefined

