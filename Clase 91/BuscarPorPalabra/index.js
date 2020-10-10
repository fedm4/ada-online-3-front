const onload = () => {
    const datos = [
        {nombre: "Goku", nivel: 9999},
        {nombre: "Gohan", nivel: 150000},
        {nombre: "Vegeta", nivel: 9955}
    ];
    const buscador = document.querySelector("#buscador");
    buscador.addEventListener("click", () => {
        const inputador = document.querySelector("#inputador").value.toLowerCase();
        if(inputador.length < 3) return;
        const resultados = datos.filter(item => {
            if(
                item.nombre.toLowerCase().indexOf(inputador) > -1 ||
                String(item.nivel).indexOf(inputador) > -1
            ) {
                return true;
            }
            return false;
        });
        const resultador = document.querySelector("#resultador");
        let text = ``;
        for(let res of resultados) {
            text += `${res.nombre} - nivel ${res.nivel}
            `;
        }
        resultador.value = text;
    });
}