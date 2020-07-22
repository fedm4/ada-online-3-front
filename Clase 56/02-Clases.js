class Processor {

}
class IntelI7 extends Processor {

}

//

class Auto {
  constructor(marca, modelo, color, motor) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.motor = motor;
      this.prendido = false;
      this.cambio = "neutro";
  }
  acelerar () {
      if(this.prendido){
          return "acelero";
      }
      return "...";
  }
  subirCambio(){
      switch(this.cambio) {
          case "neutro":
              this.cambio = "primera";
              break;
          case "primera":
              this.cambio = "segunda";
              break;
          //...
      }
  }
  bajarCambio(){

  }
  prender(){
      this.prendido = true;
  }
}

class Tesla extends Auto {
  constructor(modelo, color){
      super("Tesla", modelo, color, "electrico");
      this.sosCoolEnCalifornia = true;
  }
  prender(){
      this.prendido = true;
      return "....";
  }
}
class Ferrari extends Auto {
  constructor(modelo, color, motor){
      super("Ferrari", modelo, color, motor);
      this.lujo = true;
  }
  prender(){
      this.prendido = true;
      return "brooom!!";
  }
}

class Teslita extends Tesla {
  //...
}
class MiniTeslita extends Teslita {
  //..
}

//////////////////////////////////////
