if (
    true && false ||
    true ||
    false
) {
    console.log("Entra");
}

if (
    false && 
    (false || true || false)
) {
    console.log("Entra");
}


// //// con variables
let var1 = false;
let var2 = false;
let var3 = true;
let var4 = false;

if (
    var1 == true && 
    (var2 || var3 || var4)
) {
    console.log("Entra");
}

if (
    (var1 && var2) ||
    var3 ||
    var4
) {
    console.log("Entra 2");
}

// ///////////////////////////////////////////////////
