class Mesa {
    constructor() {
        this.cuenta = new Cuenta();
    }
}

const productos = [];

class Cuenta() {
    lista = [
        {
            id: 1,
            producto: { // instanceof Producto
                id: 2,
                nombre: "Cafe Cortado"
            },
            cantidad: 2
        },
        {
            id: 2,
            producto: { // instanceof Producto
                id: 2,
                nombre: "Cafe Cortado"
            },
            cantidad: 4
        }
    ];
    nextId = 1;
    agregar(producto, cantidad) {
        this.lista.push({id: this.nextId, producto, cantidad});
        nextId++;
    }

    eliminar(consumicionId) {
        // eliminar en base al ID
    }
}

const mostrarConsumisionesDeMesa = () => {
    //mesa = buscarMesa
    mesa.cuenta.lista.forEach(consumicion => {
        // document.createElement('tr')
        const btnEliminar = document.createElement("button");
        btnEliminar.addEventListener("click", event => {
            // eliminar el Tr
            // utilizar mi "event" para conseguir el TR a eliminar, y eliminarlo
            // Luego efectivamente borro de mi cuenta. (linea siguiente)
            mesa.cuenta.eliminar(consumicion.id);
        })
    })
}

/////////////////

const sumar1 = () => 1 + 1;
//const a = 1+1;
const a = sumar1();
//const b = 1+1;
const b = sumar1();

////////////////

const reducirMesa = mesa => mesa.reduce(cuenta => cuenta complicada); 

const pepe = () => {
    if(){
        if() {
            if() {
                reducirMesa();
            }
        }
    }
}

const juano = () => {
    if() {
        mesareducirMesa();
    }
}