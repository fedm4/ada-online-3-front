function ToDo(titulo, descripcion, resuelto = false) {
  this.titulo      = titulo;
  this.descripcion = descripcion;
  this.resuelto    = resuelto;
}

function ListaToDos(){
  this.lista = [];
  
  this.agregar = toDo => {
    if(!(toDo instanceof ToDo)) throw new Error("El ToDo debe ser de tipo ToDo.");
    this.lista.push(toDo);
  };

  this.modificar = (tituloABuscar, nTitulo, nDescripcion, nResuelto) => {
    const index = this.lista.findIndex(t => t.titulo === tituloABuscar);
    if(index === -1) throw new Error("El ToDo buscado no existe.");
    this.lista[index].titulo = nTitulo;
    this.lista[index].descripcion = nDescripcion;
    this.lista[index].resuelto = nResuelto; 
  }

  this.eliminar = (tituloABuscar) => {
    this.lista = this.lista.filter(t => t.titulo !== tituloABuscar);
  }

  this.listar = resuelto => {
    if(typeof resuelto !== "undefined") {
      return this.lista.filter(t => t.resuelto === resuelto);
    }
    return this.lista;
  }
}

describe("Testeo crear ToDos", () => {
  test("Deberia poder crear TODO con valor default", () => {
    const todo = new ToDo("Doblar ropa", "Doblar la ropa planchada");
    expect(todo).toEqual({
      titulo: "Doblar ropa",
      descripcion: "Doblar la ropa planchada",
      resuelto: false
    });
  });

  test("Deberia poder crear TODO con resuelto en true", () => {
    const todo = new ToDo("Doblar ropa", "Doblar la ropa planchada", true);
    expect(todo).toEqual({
      titulo: "Doblar ropa",
      descripcion: "Doblar la ropa planchada",
      resuelto: true
    });
  });
});

describe("Testeo metodo agregar", () =>{
  test("Agregar elemento a lista de todos", () => {
    const lista = new ListaToDos();
    const toDo = new ToDo("Planchar", "Planchar camisas");
    lista.agregar(toDo);
    expect(lista.lista[0]).toEqual({
      titulo: "Planchar",
      descripcion: "Planchar camisas",
      resuelto: false
    });
  });
  
  test("Tira error al agregar elemento que no es ToDo", () => {
    const lista = new ListaToDos();
    const toDo = {
      titulo: "Planchar",
      descripcion: "Planchar camisas",
      resuelto: false
    };
  
    expect(() => lista.agregar(toDo)).toThrow("El ToDo debe ser de tipo ToDo.");
  });
});

describe("Testeo metodo modificar", () =>{
  test("Nos permite modificar el ToDo elegido por titulo", () =>{
    const lista = new ListaToDos();
    const toDo = new ToDo("Planchar", "Planchar camisas");
    lista.agregar(toDo);
    lista.modificar("Planchar", "Planchar Todo", "Planchar camisas y pantalones", true);
    expect(lista.lista[0]).toEqual({
      titulo: "Planchar Todo",
      descripcion: "Planchar camisas y pantalones",
      resuelto: true
    });
  });
  
  test("Nos tira error si no existe el ToDo elegido por titulo", () =>{
    const lista = new ListaToDos();
    const toDo = new ToDo("Planchar", "Planchar camisas");
    lista.agregar(toDo);
    expect(() => lista.modificar("p", "", "", true)).toThrow("El ToDo buscado no existe");
  });
});

test("Nos permite eliminar un ToDo", () => {
  const listaDeTodos = new ListaToDos();
  const toDo = new ToDo("Planchar", "Planchar camisas");
  
  listaDeTodos.agregar(toDo);
  expect(listaDeTodos.lista.length).toBe(1);

  listaDeTodos.eliminar("Planchar");
  expect(listaDeTodos.lista.length).toBe(0);
});

describe("Testeo obtener las listas", () => {
  let listaDeTodos;
  beforeAll(() =>{
    listaDeTodos = new ListaToDos();
    const toDo1 = new ToDo("Planchar", "Planchar camisas");
    const toDo2 = new ToDo("Limpiar cocina", "Limpiar la cocina con cif", true);
    const toDo3 = new ToDo("Ordenar estantes", "Ordenar los estantes con libros");
    listaDeTodos.agregar(toDo1);
    listaDeTodos.agregar(toDo2);
    listaDeTodos.agregar(toDo3);
  });

  test("Obtengo lista completa de Todos", () => {
    expect(listaDeTodos.listar().length).toBe(3);
  });
  
  test("Obtengo lista filtrada de Todos sin hacer", () => {
    expect(listaDeTodos.listar(false).length).toBe(2);
  });
  
  test("Obtengo lista filtrada de Todos hechos", () => {
    expect(listaDeTodos.listar(true).length).toBe(1);
  });
});
