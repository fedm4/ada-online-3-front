let abonarConTarjeta = confirm("Desea abonar con tarjeta?");
let algo = abonarConTarjeta ? 
    "Perfecto! Puedes pagar en 3, 6 o 12 cuotas"
    :
    alert("Estupendo. Procederemos ahora al checkout.");
console.log(algo);
let abonarEnCuotas = prompt("En cuantas cuotas quiere abonar?");

// //////////////////////

1. Git checkout master
2. Git pull origin master / Actualizo master con los ultimos cambios en remoto
3. git checkout -b mibranch // para crear mi nueva branch
4. trabajo sobre mi branch 
5. add commit push a mi branch

otra persona quiere ver o trabajar en mibranch
1. git fetch
2. git checkout mibranch
3. git pull origin mibranch // asegurarnos de tener actualizada esta branch con remoto
4. paso opcional si quiere basar su branch en la mia, git checkout -b otrabranch

// //////////////////////////////////
