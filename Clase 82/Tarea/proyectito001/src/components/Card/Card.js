import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <article className="card">
            <header className="card-title">
                <h4>Titulo de Card!</h4>
            </header>
            <p className="card-content">
                Hola! Soy el contenido de la card!
            </p>
            <footer className="card-footer">
                <button type="button">No hago nada</button>
            </footer>
        </article>
    );
};

export default Card;
