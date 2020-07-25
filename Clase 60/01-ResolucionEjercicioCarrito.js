class Catalogo {
  lista = [];
  camposValidos = ["titulo", "descripcion", "precio"];

  constructor(nombre) {
      this.nombre = nombre;
  }
  
  agregar(producto) {      
      if(!(producto instanceof Producto)) throw new Error ('Debe ser de tipo Producto');
      this.lista.push(producto);
  }  
  
  buscarPorId(id) { 
      const index = this.lista.findIndex(producto => id === producto.id);
      if(index === -1 ) throw new Error("El producto no existe");
      return {
        index,
        producto: this.lista[index]
      };
  } 

  borrarProducto(id){
      this.lista = this.lista.filter(producto => id !== producto.id);
  }

  validarModificacion(campo) {
      if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
  }

  modificarProducto(id, campo, valor) {
      const {producto} = this.buscarPorId(id);
      this.validarModificacion(campo);
      producto[campo] = valor; 
  }

  obtenerListaProducto() {
      this.lista.forEach(producto => {
          if(producto instanceof Chocolates) {
              console.log(`Categoría: ${producto.titulo}` + `\n` +`ID: ${producto.id}` + `\n` +`Descripción: ${producto.descripcion}` + `\n` +`Precio: $${producto.precio}` + `\n` + `Marca: ${producto.marca}` + `\n` + `Porcentaje cacao: ${producto.porcentajeCacao}%` + `\n` + `Contiene leche: ${producto.leche}` + `\n` + `Peso:${producto.peso} grs.` + `\n` + `Extras: ${producto.getListaDeExtras()}`);
          } else if (producto instanceof Perfumes) {
              console.log(`Categoría: ${producto.titulo}` + `\n` +`ID: ${producto.id}` + `\n` +`Descripción: ${producto.descripcion}` + `\n` +`Precio: $${producto.precio}` + `\n` + `Marca: ${producto.marca}` + `\n` + `Volumen: ${producto.volumen} ml.`);
          } else {
              console.log(`Categoría: ${producto.titulo}` + `\n` +`ID: ${producto.id}` + `\n` +`Descripción: ${producto.descripcion}` + `\n` +`Precio: $${producto.precio}` + `\n` + `Marca: ${producto.marca}` + `\n` + `Wireless: ${producto.wireless}` + `\n` + `Tipo: ${producto.tipo}`);
          } 
      });
  }
}

class Carrito {
  listaCarrito = [];
  nextId = 1;
  cupon; //undefined

  get precioFinal() {
    const precio = this.listaCarrito.reduce((acc, producto) => {
      return acc + (producto.cantidad * producto.precio);
    }, 0);
/*
    let precio = 0;
    for(prod of this.listaCarrito) {
      precio += prod.cantidad * prod.precio;
    }
*/
    const precioFinal = this.cupon ? precio * (1 - (this.cupon.descuento / 100)) : precio;
    return precioFinal;
  }

  buscarEnCarritoPorCatalogoId(catalogoId) {
      const index = this.listaCarrito.findIndex(producto => producto.catalogoId === catalogoId);
      if(index === -1) throw new Error("No existe producto en el carrito");
      return {
        index,
        producto: this.listaCarrito[index]
      };
  }

  agregar(catalogo, catalogoId, cantidad) {
      if(!(catalogo instanceof Catalogo)) throw new Error (`El catalogo no es un Catalogo`);

      try {
        const {producto} = this.buscarEnCarritoPorCatalogoId(catalogoId);
        producto.cantidad += cantidad;
      } catch(err) {
        console.log("Ingreso producto nuevo.");
        const {producto} = catalogo.buscarPorId(catalogoId);
        const nuevoProducto = {
          ...producto,
          precio: producto.precio,
          id: this.nextId,
          catalogoId,
          cantidad
        }
        this.listaCarrito.push(nuevoProducto);
        this.nextId++;
      }
  }
  
  obtenerListaCarrito() {
    this.listaCarrito.forEach(catalogo => {
      console.log(`Producto: ${catalogo.titulo}` + `\n` +`Descripción: ${catalogo.descripcion}` + `\n` +`Cantidad: ${catalogo.cantidad} unidades`);
    });
  }

  agregarCupon(cupon) {
    if(!(cupon instanceof Cupon)) throw new Error("El cupon debe ser de tipo cupon");
    this.cupon = cupon;
  }
}

class Producto {    
  descuento = 0;
  
  constructor(id, titulo, descripcion, precio) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this._precio = precio;
  }

  get precio() {
      const aplicarDescuento =  1 - (this.descuento / 100);
      return this._precio * aplicarDescuento;
  }

  set precio(val) {
    this._precio = val;
  }
}

class Perfume extends Producto{
  constructor(id, titulo, descripcion, precio, marca, volumen){
      super(id, titulo, descripcion, precio)
      this.marca = marca;
      this.volumen = volumen;
  }
}

class Chocolate extends Producto{
  constructor(id, titulo, descripcion, precio, marca, porcentajeCacao, peso, leche = false, extras = []){
      super(id, titulo, descripcion, precio)
      this.marca = marca;
      this.porcentajeCacao = porcentajeCacao;
      this.leche = leche;
      this.peso = peso;
      this.extras = extras;
  }

  getListaDeExtras() {
    const extras = this.extras.reduce((acc, extra) => `${acc}, ${extra}`, '');
    return extras.substring(2, extras.length - 2);
  }
}

class Auricular extends Producto {
  constructor(id, titulo, descripcion, precio, marca, tipo, wireless = false){
      super(id, titulo, descripcion, precio)
      this.marca = marca;
      this.wireless = wireless;
      this.tipo = tipo;
  }
}

// 2. anadir cupon en carrito
// 3. get precioFinal que use este cupon

class Cupon {
  constructor(nombre, descuento) {
    this.nombre = nombre;
    this.descuento = descuento;
  }
}