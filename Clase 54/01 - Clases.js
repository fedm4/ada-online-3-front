class Pelaje{
  constructor(color){
      this.color = color;
  }
}

class Gato {
  constructor(nombre, edad, tipo, vidas = 7) {
      this.nombre = nombre;
      this.edad = edad;
      this.vidas = vidas;
      this.especie = "felino";
      this.cosas = {
          esObjeto: true
      };
      this.tomoPastilla = false;
      this.pelaje = new Pelaje("Amarillo");
      Gato.validarTipoDeGato(tipo);
      this.tipo = tipo;
  }

  get edadGatuna () {
      return this.calcularEdadGatuna();
  }

  calcularEdadGatuna() {
      return this.edad * 9;
  }

  maullar(maullido = "miau!") {
      return maullido;
  }

  static darPastilla(instanciaDeGato) {
      if(!(instanciaDeGato instanceof Gato)) throw new Error("Eh... gato.");
      instanciaDeGato.tomoPastilla = true;
      return "Pastilla en el ojo del duenio.";
  }

  static listarTiposDeGatos() {
      return [
          "europeo",
          "siames",
          "egipcio",
          "peluchito",
          "persa",
          "momificado",
          "garfield"
      ];
  }

  static validarTipoDeGato() {
    if(Gato.listarTiposDeGatos().indexOf(tipo) === -1) throw new Error("Tipo de gato inadmisible.");
  }
}