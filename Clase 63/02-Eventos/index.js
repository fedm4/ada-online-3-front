const showAlert = event => {
    console.log(event);
    alert("Hola!");
    const button = document.querySelector('#myButton'); // instanceof HTMLElement
    button.removeEventListener("click", showAlert);
};


/**
 * EVENTS
 */
const loadEvents = () => {
    const button = document.querySelector('#myButton'); // instanceof HTMLElement
    //button.onclick = showAlert;
    button.addEventListener("click", showAlert);
    button.addEventListener("click", () => console.log("hola por consola"));
};