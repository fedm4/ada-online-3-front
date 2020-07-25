try {
  const cont1 = document.querySelector("#contenedor1");
  cont1.innerText = "Chau!";
} catch(err) {
  console.error("No se pudo!", err);
}