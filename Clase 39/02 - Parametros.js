let myFunction = (param1, param2) => {
    if(!param1 || !param2) throw new Error("Param1 y Param2 must be defined");
    param1++;
    param2.push(2); 
    console.log(param1, param2);
};

let var1 = 4;
let var2 = [1];
myFunction(var1, var2);
console.log(var1, var2);

//

const array = [1];
const array2 = array; // por referencia. Son el mismo elemento.

array2.push(2);
console.log(array, array2);

// 

