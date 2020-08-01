// 1er ejercicio
/*const changeElementColor = (element, color) => {
    if(!(element instanceof HTMLElement)) throw new Error("El elemento debe ser instancia de HTMLElement");
    element.style.backgroundColor = color; // formato definido para color
};*/

// 2do ejercicio
const changeElementColor = (element, color) => {
    if(!(element instanceof HTMLElement)) throw new Error("El elemento debe ser instancia de HTMLElement");
    if(!color) color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    element.style.backgroundColor = color; 
};

// 3er ejercicio
const setActive = index => {
    const lis = document.querySelectorAll("#ej3-lista li");
    lis.forEach(li => li.classList.remove("active"));
    lis[index].classList.add("active");
};

//4to ejercicio

const fontSizeToNumber = fontSize => Number(fontSize.replace("px", ""));

const growTitle = () => {
    const title = document.querySelector("#ej4-title");
    let size = fontSizeToNumber(title.style.fontSize); // "24px"
    size += 2;
    title.style.fontSize = size + "px";

};

const reduceTitle = () => {
    const title = document.querySelector("#ej4-title");
    let size = fontSizeToNumber(title.style.fontSize); // "24px"
    size -= 2;
    title.style.fontSize = size + "px";
}

// 5to ejercicio
let imageIndex = 0;
const slide = () => {
    const images = document.querySelectorAll("#ej5-lista li");
    images[imageIndex].style.display = "none";
    imageIndex++;
    if(imageIndex === images.length) imageIndex = 0;
    images[imageIndex].style.display = "block";
};