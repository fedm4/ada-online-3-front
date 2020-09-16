const onload = () => {
    const variableExtra = 1;
    document.querySelector(".button")
    .addEventListener("click", event => otraFuncion(event, variableExtra));
    //.addEventListener("click", otraFuncion);  // Esto está mal porque recibe solo event, pero no
                                            // no recibe otraVar:
}

const otraFuncion = (event, otraVar) => {
    //aca hago algo con event y otraVar
}
