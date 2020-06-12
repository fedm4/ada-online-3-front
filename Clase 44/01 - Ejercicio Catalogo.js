let catalogo = [];

const agregarProducto = (id, titulo, descripcion, precio) => {
    const producto = {
        id,
        titulo,
        descripcion,
        precio
    };

    catalogo.push(producto);
};

//const index = catalogo.findIndex(producto => id === producto.id);
//catalogo.splice(index, 1);
const borrarProducto = id => {
    catalogo = catalogo.filter(producto => producto.id !== id);
};
// [1,2,3,4] - [1,2,4]

const modificarProducto = (id, campo, valor) => {
    const index = catalogo.findIndex(producto => id === producto.id);
    /*
        // catalogo[index] === producto
        catalogo[index].titulo = titulo;
        catalogo[index].descripcion = descripcion;
        catalogo[index].precio = precio;
    */
   // catalogo[index].campo = valor; // No va porque campo no es una propiedad del objeto
   catalogo[index][campo] = valor; 
};

///////////////////////////////////////////////
let catalogo = [];

const buscarPorId = id => catalogo.findIndex(producto => id === producto.id); // 4

const validarId = id => {
    const index = buscarPorId(id);
    if(index !== -1) throw new Error("El ID ya existe en el catalogo.");
}

//const validarId = id => {
//    if(buscarPorId(id) !== -1) throw new Error("El ID ya existe en el catalogo.");
//}

const agregarProducto = (id, titulo, descripcion, precio) => {
    validarId(id);
    const producto = {
        id,
        titulo,
        descripcion,
        precio
    };

    catalogo.push(producto);
};

const borrarProducto = id => {
    catalogo = catalogo.filter(producto => producto.id !== id);
};

const validarModificacion = (index, campo) => {
    const camposValidos = ["titulo", "descripcion", "precio"];
    if(index === -1) throw new Error("El ID seleccionado no existe.");
    if(camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    //if(!catalogo[index][campo]) throw new Error("El campo seleccionado no existe.");
}

const modificarProducto = (id, campo, valor) => {
    const index = buscarPorId(id);
    validarModificacion(index, campo);
    catalogo[index][campo] = valor; 
};

/////////////////////////////////////////////

const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    validarId: function(id) {
        const index = this.buscarPorId(id);
        if(index !== -1) throw new Error("El ID ya existe en el catalogo.");
    },
    agregar: function(id, titulo, descripcion, precio) {
        this.validarId(id);
        const producto = {
            id,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
    },
    borrar = function(id) {
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


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
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

