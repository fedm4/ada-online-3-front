/* Es una forma de crear una instancia de un tipo sin permitir mas instancias.
const manejadorDeMesas = new (function ManejadorDeMesas() {
    this.lista = [];

    this.agregar = mesa => {
        if(!(mesa instanceof Mesa)) throw new Error("La mesa debe ser de tipo Mesa");
        if(this.buscar(mesa.numero)) throw new Error("La mesa ya esta cargada");
        this.lista.push(mesa);
    };

    this.buscar = numeroDeMesa => this.lista.find(mesa => mesa.numero === numeroDeMesa);
})();*/

function ManejadorDeMesas() {
    this.lista = [];

    this.agregar = mesa => {
        if(!(mesa instanceof Mesa)) throw new Error("La mesa debe ser de tipo Mesa");
        if(this.buscar(mesa.numero)) throw new Error("La mesa ya esta cargada");
        this.lista.push(mesa);
    };

    this.buscar = numeroDeMesa => this.lista.find(mesa => mesa.numero === numeroDeMesa);
}

const manejadorDeMesas = new ManejadorDeMesas();

class Mesa {
    constructor(numero) {
        this.numero = Number(numero);
    }

    get cuenta() {
        return 0;
    }

    cerrar() {
        // hace alguna accion de cierre de mesa
    }
}

