
const setActive = event => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navLink = event.target;
    for(let nl of navLinks) {
        nl.classList.remove("is-active");
    }
    navLink.classList.add("is-active");
};

const hideAllMainScts = () => {
    const sections = document.querySelectorAll(".main-sct");
    for(let sct of sections) {
        sct.style.display = "none";
    }
}

const openRazas = () => {
    hideAllMainScts();
    document.querySelector("#sct-razas").style.display = "block";
    document.querySelector("#btn-random").addEventListener("click", openRandom);
};

const openRandom = e => {
    hideAllMainScts();
    axios.get("https://api.thecatapi.com/v1/images/search/")
        .then(res => {
            document.querySelector("#random-img").src = res.data[0].url;
            document.querySelector("#sct-random").style.display = "flex";
            e.target.removeEventListener("click", openRandom);
        })
        .catch(err => alert("Hubo un error"));
}
const openBuscador = e => {
    hideAllMainScts();
    document.querySelector("#sct-buscador").style.display = "block";
}

const search = async() => {
    const inputSearch = document.querySelector("#search");

    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${inputSearch.value}`)
        const gatitos = response.data;

        const html = gatitos.reduce((html,gatito)=>{
            return html+`
            <tr>
             <td>${gatito.name}</td>
             <td>${gatito.weight.metric}</td>
             <td>${gatito.origin}</td>
             <td>${gatito.temperament}</td>
             <td>${gatito.description}</td>
            </tr>
            `
        },"")

        document.querySelector("#table-search").innerHTML=`<table>
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Peso</th>
          <th>Origen</th>
          <th>Temperamento</th>
          <th>Descripcion</th>
        </tr>
        </thead>
        <tbody>
        ${html}
        </tbody>
        </table>`;

        console.log({gatitos,html});
    } catch (error) {
        console.log(error)
    }

    let tableHtml = `<table>
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Peso</th>
      <th>Origen</th>
      <th>Temperamento</th>
      <th>Descripcion</th>
    </tr>
    </thead>`
    
    

  
   
}
/*
const addEventListener =(accionResponder,callbackFunction)=>{
    if(accionResponder){
        callbackFunction(evento)
    }
}
*/

const onload = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", setActive);
    });

    const btnRazas = document.querySelector("#btn-razas");
    const btnRandom = document.querySelector("#btn-random");
    const btnBuscador = document.querySelector("#btn-buscador");

    btnRazas.addEventListener("click", openRazas);
    btnRandom.addEventListener("click", openRandom);
    btnBuscador.addEventListener("click", openBuscador);


    const btnSearch = document.querySelector("#btn-search");
    const inputSearch = document.querySelector("#search");

    btnSearch.addEventListener("click",search)
    inputSearch.addEventListener("keyDown",(e)=>{
       if (e.keyCode === 13 ){
           search();
       }
    })
    
};

    const persona = {
        nombre:"Matias",
        apellido:"Benary",
        edad:25,
        trabajos:["Fonselp","Ada"],
        saludar:()=>{console.log("hola")}
    }

    const cosas = ["pan","leche",{ingredientes:"harina",cantidad:3},persona,5,6,7,8,9,10,11,12]
  

    const [tete,compra2,receta,humano,...casa]=cosas;
console.log(casa);
  //  console.log(humano,receta,tete,compra2,rest)

    
    const testear = ({nombre,apellido})=>{
        console.log(nombre,apellido)
    }