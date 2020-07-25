try {
  const cont1 = document.querySelector("#contenedor1");
  cont1.innerText = "Hola!";
} catch(err) {
  console.error("No se pudo!", err);
}

function test() {
  const cont1 = document.querySelector("#contenedor1");
  cont1.innerText = "Hola!";
}

test();