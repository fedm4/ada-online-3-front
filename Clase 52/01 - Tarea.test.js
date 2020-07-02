// Array
function Llavero () {
  this.habitaciones = [];

  let piso = 1;
  let nroHabitacion = 1;
  for(i = 1; i <= 25; i++) {
    const habitacion = {
      numero: Number(`${piso}0${nroHabitacion}`),
      estado: false
    };
    this.habitaciones.push(habitacion);
    
    nroHabitacion++; // 1
    
    if(i % 5 === 0) {
      piso++; //2
      nroHabitacion = 1;
    }
  }
  
  const buscarIndexHabitacion = (nroHabitacion) => this.habitaciones.findIndex(h => h.numero === nroHabitacion);

  this.guardarLlave = (nroHabitacion) => {
    const index = buscarIndexHabitacion(nroHabitacion);
    if(index === -1) throw new Error("La habitacion no existe.");
    this.habitaciones[index].estado = true;
  };

}

let llaverito;
beforeEach(() => llaverito = new Llavero());

test("Deberia encontrar todas las habitaciones", () =>{
  expect(llaverito.habitaciones.length).toBe(25);
});

test("Las habitaciones deberian tener el piso correcto", () => {
  expect(llaverito.habitaciones[0].numero).toBe(101);
  expect(llaverito.habitaciones[4].numero).toBe(105);
  expect(llaverito.habitaciones[5].numero).toBe(201);
  expect(llaverito.habitaciones[10].numero).toBe(301);
  expect(llaverito.habitaciones[15].numero).toBe(401);
  expect(llaverito.habitaciones[20].numero).toBe(501);
  expect(llaverito.habitaciones[24].numero).toBe(505);
});

test("Deberia poder guardar llave de una habitacion", () => {
  llaverito.guardarLlave(202);
  expect(llaverito.habitaciones[6].estado).toBe(true);
});

test("Deberia ver un error si no existe la habitacion", () => {
  expect(() => llaverito.guardarLlave(207)).toThrow("La habitacion no existe.");
});

///
const objArray = {
  habitaciones: [
    {numero: 101, estado: false},
    {numero: 102, estado: false},
    {numero: 103, estado: true},
  ]
}
const objObj = {
  habitaciones: {
    101: false,
    102: false,
    103: true
  }
}
