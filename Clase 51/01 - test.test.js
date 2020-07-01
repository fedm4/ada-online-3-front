function Ropa(talle, color, tipo, planchado = false) {
  this.talle = talle;
  this.color = color;
  this.tipo = tipo;
  this.planchado = planchado;
  this.planchar = () => this.planchado = true;
}

let pantalon;

beforeEach(() => {
  pantalon = new Ropa(44, "Rojo", "Pantalon");
});

test("El objeto es instancia de tipo Ropa", () => {
  expect(pantalon instanceof Ropa).toBe(true);
  pantalon.talle = 45;
  expect(pantalon.talle).toBe(45);
});

test("El objeto devuelve datos correctos", () => {
  expect(pantalon).toEqual(expect.objectContaining({
    talle: 44,
    color: "Rojo",
    tipo: "Pantalon",
    planchado: false
  }));
});

test("El objeto se puede planchar", () => {
  pantalon.planchar();
  expect(pantalon.planchado).toBeTruthy();
});
// .toStrictEqual // Chequea tipo de instancia Y valors
// .toEqual // chequea solo valor de obj

test("El parametro planchado funciona correctamente", () => {
  const remera = new Ropa("M", "Fucsia", "Remera", true);
  expect(remera.planchado).toBeTruthy();
});