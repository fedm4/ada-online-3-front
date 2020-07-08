function Cuadro() {
  console.log("hola");
  const a = 2;
  console.log("hola2", a);
  const b = 2 * 3;
  console.log("Hola3", b);
}

Cuadro();

//
function Cuadro() {
  this.marco = "madera";
  this.material = "oleo";
  this.artista = "Bango";

  console.log("hola");
  const a = 2;
  console.log("hola2", a);
  const b = 2 * 3;
  console.log("Hola3", b);

  return b;
}

new Cuadro();

//

function Cuadro(_marco, _material, _artista) {
  if(["oleo", "acuarela"].indexOf(_material) === -1) {
    throw new Error("El material es inadmisible para un artista.");
  }
  const marco = _marco;
  const material = _material;
  const artista = _artista;

  this.describir = () => `${material} en marco de ${marco} por ${artista}`;
}

const cuadrito = new Cuadro("plastico", "oleo", "Jaox");

///

function Cuadro(_marco, _material, _artista) {
  if(["oleo", "acuarela"].indexOf(_material) === -1) {
    throw new Error("El material es inadmisible para un artista.");
  }
  const marco = _marco;
  const material = _material;
  const artista = _artista;

  this.describir = () => `${material} en marco de ${marco} por ${artista}`;
  return 2;
}

const a = Cuadro("plastico", "oleo", "Jaox");
const b = new Cuadro("plastico", "oleo", "Jaox");
console.log(a);// 2
console.log(b); // Cuadro{describir:f}

///

const listaDeCuadros = {
  lista: [],
  agregar: function(marco, material, artista){
    const cuadrito = new Cuadro(marco, material, artista);
    this.lista.push(cuadrito);
  }, 
};

function ListaDeCuadros() {
  this.lista = [];
  this.agregar = () => {}; 
}
const listita = new ListaDeCuadros();
//
