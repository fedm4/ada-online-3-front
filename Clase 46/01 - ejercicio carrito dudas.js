const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    agregar: function(titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    buscarPorCatalogoId(catalogoId) {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    },
    agregar: function (catalogoId, cantidad) {
        const catalogoIndex = catalogo.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};

////////////////////////////////////////////////////////////////////////////////////////
const receta = {
    nombre: 'pancakes',
    ingredientes: [
        {cantidad: '2', ingrediente: 'huevos'},
        {cantidad: 'una taza', ingrediente: 'harina'},
        {cantidad: 'una taza', ingrediente: 'leche'}
    ],
    get receta() {
        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}, `);
        const textoFinal = texto.substr(0, texto.length - 2) + '.';
        return textoFinal;
    }
};

//////
// JSON
// JavaScript Object Notation 