const setMesaRow = mesa => {
    const tr = document.createElement("tr");
    const tdNumero = document.createElement("td");
    tdNumero.innerText = mesa.numero;

    const tdCuenta = document.createElement("td");
    tdCuenta.id = `cuenta-${mesa.numero}`;
    tdCuenta.innerText = `$${mesa.cuenta}`;

    const tdCerrar = document.createElement("td");
    const buttonCerrar = document.createElement("button");
    buttonCerrar.classList.add("bt-green");
    buttonCerrar.innerText = "Cerrar";
    // TODO: implementar callback en click de cerrar.
    buttonCerrar.addEventListener("click", () => null);
    tdCerrar.classList.add("text-center");
    tdCerrar.appendChild(buttonCerrar);

    tr.appendChild(tdNumero);
    tr.appendChild(tdCuenta);
    tr.appendChild(tdCerrar);

    document.querySelector("#tbody-mesas").appendChild(tr);
};

const setOptionsProductoAMesa = (mesa) => {
    const select = document.querySelector("#prod-a-mesa-numero");
    const option = document.createElement("option");
    option.value = mesa.numero;
    option.innerText = `Mesa ${mesa.numero}`;
    select.appendChild(option);
};

const addMesa = () => {
    try{
        const inputNumeroMesa = document.querySelector("#input-numero-mesa");
        const mesa = new Mesa(inputNumeroMesa.value);
        
        manejadorDeMesas.agregar(mesa);
        inputNumeroMesa.value = "";

        setMesaRow(mesa);
        setOptionsProductoAMesa(mesa);
    } catch(err) {
        alert(err);
    }
    
}

const onload = () => {
    document.querySelector("#agregar-mesa").addEventListener("click", addMesa);
}
