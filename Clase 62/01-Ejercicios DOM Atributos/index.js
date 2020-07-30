const toggleChecked = () => {
    const input = document.querySelector("#ej-1 > input");
    input.checked = !input.checked;
};

const changeMiInputName = () => {
    const input = document.querySelector("#miInput");
    //input.name = "miExInput";
    input.setAttribute("name", "miExInput");
};

const addList = () => {
    const ej3Container = document.querySelector("#ej3-container");
    ej3Container.innerHTML = `
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    `;

    const lis = document.querySelectorAll("#ej3-container li");

    for(let i = 0; i < lis.length; i++) {
        lis[i].innerText = i+1;
    }
};

const changeTitle = () => {
    const title = document.querySelector("#ej4-title");
    const input = document.querySelector("#ej4-input");

    title.textContent = input.value;

    input.value = "";
};