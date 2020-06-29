
const miLibro = new Libro(); // Todo ok, tiempo de compilacion lo hizo disponible globalmente
const arrowResult = miArrow();// Error. no se puede llamar una variable antes de su inicializacion
// Cuando usar function y cuando usar arrow function
const miArrow = () => doSomething();
// Si no necesita scope, uso arrow. Es la mayoria de las veces
function Libro() {
  this.nombre;
  this.isbn;
  function OtraClase() {
    // no accesible desde afuera 
    this.nombre // error
  }
  this.agregarLibro = () => doSomething(this.nombre);
}
// Usamos keyword function cunado tenemos una entidad y usamos this
const newObj = {
  propiedad: 1,
  miMetodo: function() {
    console.log(this.propiedad);
  }
}
// Tambien, dentro de objetos usamos el function keyword para acceder a 
// las propiedades de nuestro objeto desde la funcion.

// se puede hacer lo siguiente
const miFun = function () {
  doSomething();
}
// Pero hoy por hoy esto es mas facil resolverlo con arrow functions.
miFun();
miArrow();
Libro();
newObj.miMetodo();
/////////////////////////////////////////////////////////////////////
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const sumar = presentar => {
    const resultado = getRandomInt(10) + getRandomInt(10);
    presentar(resultado);
}
sumar(res => console.log(res));
sumar(resultado => alert(resultado));

//v1
const crearObjeto = ObjetoCreator => {
  const newObj = new ObjetoCreator();
  return newObj;
};
//v2
const crearObjeto = ObjetoCreator => {
  return new ObjetoCreator();
};
//v3
const crearObjeto = ObjetoCreator => new ObjetoCreator();

const librito = crearObjeto(Libro); // librito instancia de Libro
librito.nombre = "mi nombre";
librito["nombre"] // lo mismo que librito.nombre

const strategy = tipo => {
  switch(tipo){
    case "Libro": return new Libro();
    case "Solvente": return new Solvente();
    default: throw new Error("No existe el tipo definido");
  }
}

//////////////////////////////////////////////////////

const obj = {
  _propiedad: 1,
  set propiedad(val) {
    this._propiedad = Number(val);
  },
  get propiedad() {
    return this._propiedad;
  }
}
obj.propiedad = "1"

obj.propiedad // 1

////////////////
obj.receta;
obj.getReceta();
obj.setReceta()
///////////////////////
