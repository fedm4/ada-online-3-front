const saludar = () => {
    let nombres = prompt("decime varios nombres separados por espacio");
    nombres = nombres.split(" "); // array
    for (let i = 0; i < nombres.length; i++) {
       console.log(`Hola ${nombres[i]}!`);
    }
 };
 saludar();
 console.log("No se que escribir aca");
 const a = 1+1;
 console.log(a);
 saludar();
 console.log("No se, otra cosa distinta.");


 // ////////////

 