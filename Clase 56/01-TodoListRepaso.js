
function ToDoList() {

  this.listaDetareas = [];

  this.agregarTarea = (titulo, descripcion, estado = false) => {
      const index = this.listaDeTareas.findIndex(tarea => tarea.titulo === titulo);
      if(index >= 0) throw new Error("La tarea ya existe con el mismo titulo.");
      tarea = {
          titulo,
          descripcion,
          estado
      }
      this.listaDetareas.push(tarea);
  };

  this.editarTarea = (titulo, nuevoEstado = true) => {
      for (i = 0; i < this.listaDetareas.length; i++) {
          if (titulo === this.listaDetareas[i].titulo) {
              this.listaDetareas[i].estado = nuevoEstado;
          }
      }
  };
  

  this.eliminarTarea = (titulo) => {
      this.listaDetareas = this.listaDetareas.filter((tarea) => tarea.titulo !== titulo);
  };

  this.listarTareas = estado => {
      if (estado !== undefined) {
        if(typeof estado !== "boolean") throw new Error("El estado debe ser booleano");
        return this.listaDetareas.filter((tarea) => estado === tarea.estado); 
      }
      return this.listaDetareas;
      
  }/// me queda como la duda de como devolver un error si no ingresa un booleano aqui
}

///////////////////////////////////////////////


function Carrito() {
  lista = [];
  nextId = 1;
  this.total = () => {
      return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
  };
  this.buscarPorCatalogoId = (catalogoId) => {
      return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
  };
  this.agregar = (catalogoId, cantidad) => {
      const catalogoIndex = catalogo.buscarPorId(catalogoId);
      if (catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
      const carritoIndex = this.buscarPorCatalogoId(catalogoId);

      if (carritoIndex === -1) {
          const obj = {
              ...catalogo.lista[catalogoIndex], // producto ({nombre, precio, descripcion, id})
              id: this.nextId,
              catalogoId,
              cantidad
            }
          this.lista.push(obj);
          this.nextId++;
      } else {
          this.lista[carritoIndex].cantidad += cantidad;
      }
  };
  this.borrar = (id) => {
      const index = this.lista.findIndex(producto => id === producto.id);
      if (index === -1) throw new Error("El producto no existe en el carrito.");
      this.lista.splice(index, 1);
  };
};

