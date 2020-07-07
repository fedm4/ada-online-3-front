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

describe("Tests de Catalogo", () => {
  beforeEach(() => {
    catalogo.lista = [];
    catalogo.siguienteId = 1;
  });

  test("Agrego un nuevo producto", () => {
    catalogo.agregar("Shampoo", "Para cabello liso y sedoso", 160);
    expect(catalogo.lista[0]).toEqual({
      id: 1,
      titulo: "Shampoo",
      descripcion: "Para cabello liso y sedoso",
      precio: 160
    });
  });

  test("Testeo que funcione el siguienteId", () => {
    catalogo.agregar("Shampoo", "Para cabello liso y sedoso", 160);
    expect(catalogo.siguienteId).toBe(2);
  });
});

describe("Testeo carrito", () => {
  beforeEach(() => {
    carrito.nextId = 1;
    carrito.lista = [];
    catalogo.lista = [];
    catalogo.siguienteId = 1;
  });

  test("Testeo agregar producto a carrito", () => {
    catalogo.agregar("Shampoo", "Para cabello liso y sedoso", 160);
    carrito.agregar(1, 4);
    expect(carrito.lista[0]).toEqual({
      id: 1,
      titulo: "Shampoo",
      descripcion: "Para cabello liso y sedoso",
      precio: 160,
      catalogoId: 1,
      cantidad: 4
    });
  });

  test("Testeo que los ids se asignen correctamente", () => {
    catalogo.agregar("Shampoo", "Para cabello liso y sedoso", 160);
    catalogo.agregar("Jabon", "De glicerina para mi pielcita sensible", 60);

    carrito.agregar(2, 4);
    expect(carrito.lista[0]).toEqual({
      id: 1,
      titulo: "Jabon",
      descripcion: "De glicerina para mi pielcita sensible",
      precio: 60,
      catalogoId: 2,
      cantidad: 4
    });
  });

  test("Testeo agregar dos veces un mismo producto a carrito y se suman cantidades", () => {
    catalogo.agregar("Shampoo", "Para cabello liso y sedoso", 160);
    carrito.agregar(1, 4);
    carrito.agregar(1, 3);
    expect(carrito.lista[0]).toEqual({
      id: 1,
      titulo: "Shampoo",
      descripcion: "Para cabello liso y sedoso",
      precio: 160,
      catalogoId: 1,
      cantidad: 7
    });
  });

  test("Testeo que tira error si producto no existe en catalogo", () => {
    expect(() => carrito.agregar(1)).toThrow("El elemento solicitado no existe.");
  });
});