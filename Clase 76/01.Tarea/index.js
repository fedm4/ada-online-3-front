
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

const onload = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", setActive);
    });

    const btnRazas = document.querySelector("#btn-razas");
    const btnRandom = document.querySelector("#btn-random");

    btnRazas.addEventListener("click", openRazas);
    btnRandom.addEventListener("click", openRandom);

};