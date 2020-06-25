function Review(nombre, opinion, valoracion) {
  this.nombre     = nombre;
  this.opinion    = opinion;
  this.valoracion = valoracion;
}

function Libro(nombre, autor, anio, isbn) {
  this.nombre = nombre;
  this.autor  = autor;
  this.anio   = anio;
  this.isbn   = isbn;

  this.reviews = [];

  this.agregarReview = (nombre, opinion, valoracion) => {
    const review = new Review(nombre, opinion, valoracion);
    this.reviews.push(review);
  };

  this.promediarReviews = () => {
    let valoracion = this.reviews.reduce((acc, review) => acc + review.valoracion, 0);
    valoracion = valoracion / this.reviews.length;
    return valoracion;
  };
}

function CatalogoDeLibracos() {
  const lista = [];

  const buscarIndiceDeLibro = nombre => lista.findIndex(libro => libro.nombre === nombre);
  
  this.agregar = (nombre, autor, anio, isbn) => {
    const libraco = new Libro(nombre, autor, anio, isbn);
    lista.push(libraco);
  };
  
  const validarIndice = (indice) => {
    if(indice === -1) throw new Error("Te equivocaste");
  };
  this.agregarReviewPorLibro = (nombreLibro, usuario, opinion, valoracion) => {
    const indice = buscarIndiceDeLibro(nombreLibro);
    validarIndice(indice);
    lista[indice].agregarReview(usuario, opinion, valoracion);
    //const review = new Review(nombre, opinion, valoracion);
    //this.lista[indice].reviews.push(review);
  };

  this.mostrarLibros = () => {
    lista.forEach(libro => {
      console.log(`${libro.nombre} por ${libro.autor}`);
    })
  }
  this.verPromedioDeLibro = (nombreLibro) => {
    const indice = buscarIndiceDeLibro(nombreLibro);
    validarIndice(indice);
    return lista[indice].promediarReviews();
  }
}

////
const librosDeFede = new CatalogoDeLibracos();
librosDeFede.agregar("American Gods", "Neil Gaiman", 2008, 321321321);
librosDeFede.agregarReviewPorLibro("American Gods", "Fede", "Gran libro. No lo termine", 4.5);
librosDeFede.agregarReviewPorLibro("American Gods", "Fede2", "Tremendo. No lo termine", 4.2);
librosDeFede.verPromedioDeLibro("American Gods");
//4.35