let mivar1 = "chau";

const pepe = () => {
  let mivar1 = "hola";
  //mivar1 = "hola";
  console.log(mivar1);
};

pepe();

console.log(mivar1); 

/////////////////////////////
const haceralgo = ()=> alert("Hice algo");
const persona = {
    nombre: "Fede",
    edad: 34,
    email: "fede.m.fede@gmail.com",
    saludo: function () {
        alert(`Hola! Soy ${this.nombre}`);
        const miniSaludoExtra = () => console.log("Hola de nuevo " + this.nombre);
        miniSaludoExtra();
        haceralgo();
    }
}


const miArray = [
    {
        nombre: "Fede",
        edad: 34,
        email: "fede.m.fede@gmail.com",
        //metodoDelObjeto: () => this, // error, no existe this
        saludo: function () {
            alert(`Hola! Soy ${this.nombre}`);
            const miniSaludoExtra = () => console.log("Hola de nuevo " + this.nombre);
            miniSaludoExtra();
            haceralgo();
        }
    },
    {
        nombre: "Juanca",
        edad: 25,
        email: "juancafede@gmail.com",
        saludo: function () {
            alert(`Hola! Soy ${this.nombre}`);
            const miniSaludoExtra = () => console.log("Hola de nuevo " + this.nombre);
            miniSaludoExtra();
            haceralgo();
        }
    }
];
//////////////////////////////

const lista = [];

const addPerson = name => {
    const obj = {
        name, // es igual a name: name
        sayHi: function() {
           console.log(`Hi ${this.name}!`);
        }
    };
    lista.push(obj);
};

const letAllPeopleSayHi = () => lista.forEach(person => person.sayHi());

const askNameAndaddPerson  = () => {
   const name = prompt("decime tu nombre");
   addPerson(name);
}