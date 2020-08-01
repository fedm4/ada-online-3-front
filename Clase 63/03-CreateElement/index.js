const load = () => {
    const body = document.querySelector("body"); // devuelve un HTMLElement

    const section1 = document.createElement("section"); // devuelve un HTMLElement
    section1.id = "hero";
    section1.classList.add("main-container");
    const heroTitle = document.createElement("h1");
    heroTitle.id = "hero-title";
    heroTitle.className = "main-title";
    const heroTitleText = document.createTextNode("Mi Pagina Hero!");

    heroTitle.appendChild(heroTitleText);
    section1.appendChild(heroTitle);


    const section2 = document.createElement("section");
    section2.id = "section2";
    const div = document.createElement("div");

    section2.appendChild(div);

    body.appendChild(section1); // efectivamente metiendo en mi pagina
    body.appendChild(section2); 
};
