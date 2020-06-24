[
  {cantidad, ingrediente},
  {cantidad, ingrediente},
  {cantidad, ingrediente},
  {cantidad, ingrediente},
]

const obj = {
  nombreDePropiedad: 1
};

obj["nombreDePropiedad"] === obj.nombreDePropiedad // true

obj.nombreDePropiedad = "MiValor";


const variable = "nombreDePropiedad";
obj[variable] === obj.nombreDePropiedad // true
/////
obj["propiedad2"] = true;
// true
// obj{nombreDePropiedad: 1, propiedad2: true}

//////////////////////////////
//Caso 1:
let numeros=prompt("Escriba números para ser sumados"); // "1 2"
const array= numeros.split(' '); // ["1", "2"]

let suma = 0;

for(i = 0; i < array.length; i++){
    let numero = Number(array[i]);
    suma = suma + numero;
}

console.log(suma);//17

// CASO 2
let total=0;
let resp = prompt ("ingrese numeros separados por espacios");
const numeros = resp.split (" ");
for(let i = 0; i < numeros.length; i++) total += Number(numeros[i]);
console.log(total);//28


// Caso 3
let resp = prompt ("ingrese numeros separados por espacios");
const array = resp.split(" ");
let suma = 0;

for(i=0; i < array.length; i++){
  let numero = Number(array[i]);
  suma += numero;
}
console.log(suma);//35

//////////////////////////////////

const myFunc = (frase) => {
  const arr = frase.split(''); // ['a', 'l', ' ', 'v', 'e'. 'r', ' ', ]
  
  const count = arr.reduce((acc, letra) => {
      const vocales = ['a','e','i','o','u'];
      return vocales.indexOf(letra) > -1 ? acc + 1 : acc;
      /*if(vocales.indexOf(letra) > -1) { // si es vocal
          return acc + 1;
      }
      return acc;*/
  }, 0);
  
  console.log(count);
}

const input = prompt("Digame una frase");
myFunc(input);

////////////////////////
const contenedorDePeliculas = () => {
  const obj = {
    lista: [],
    agregar: function (titulo, director, anio, genero, estado) {
      this.lista.push({
        titulo,
        director,
        anio,
        genero,
        estado
      });
    },
    borrar: function(nombre) {
      this.lista = this.lista.filter(pelicula => pelicula.titulo != nombre);
    }
  };

  return obj;
}

contenedorDePeliculas.agregar // error no  existe

const peliculasDeFede = contenedorDePeliculas();
peliculasDeFede.agregar("They Live!", "Nomeacue", 1986, "Horror", "Visto");

const peliculasDeMery = contenedorDePeliculas();

////////////////////////////////////////////////
function InfoPeliculas () {
  this.lista = [];

  this.agregar = (titulo, director, anio, genero, estado) => {
    this.lista.push({
      titulo,
      director,
      anio,
      genero,
      estado
    });
  };

  this.borrar = (nombre) => this.lista = this.lista.filter(pelicula => pelicula.titulo != nombre);

  this.listarPorEstado = (estado) => {
    const listaPorEstado = this.lista.filter(pelicula => pelicula.estado == estado);
    listaPorEstado.forEach(pelicula => {
      console.log(`${pelicula.titulo} dirigida por ${pelicula.director}`);
    });
  }
}

const pelisDeFede = new InfoPeliculas();

/////////////////////////////////
function Producto(id, titulo, descripcion, precio) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.precio = precio;
}

function Catalogo() {
  this.lista =  [];
  this.camposValidos = ["titulo", "descripcion", "precio"];
  this.siguienteId = 1;
  this.buscarPorId = (id) => this.lista.findIndex(producto => id === producto.id);
  this.agregar = (titulo, descripcion, precio) => {
      const producto = new Producto(
        this.siguienteId,
        titulo,
        descripcion,
        precio
      );
      this.lista.push(producto);
      this.siguienteId++;
  };
  this.borrar = (id) => {
      this.lista = this.lista.filter(producto => producto.id !== id);
  };
  this.validarModificacion = (index, campo) => {
      if(index === -1) throw new Error("El ID seleccionado no existe.");
      if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
  };
  this.modificar = (id, campo, valor) => {
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