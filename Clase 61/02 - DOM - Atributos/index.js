const link = document.querySelector("#link-a-google");
link.href="https://www.google.com";
link.setAttribute("class", "texto-grande"); // 1er param EL atributo a modificar, 2do param, el valor del atributo


////
link.innerText ="<span style='background:green;'>lalalla</span>";
"<span style='background:green;'>lalalla</span>"
link.innerHTML ="<span style='background:green;'>lalalla</span>";
"<span style='background:green;'>lalalla</span>"

const MiFuncion = () => {
  console.log("hola!");
}