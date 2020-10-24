import React from 'react';
import {useParams} from 'react-router-dom';
import './Pagina3.scss';

const Pagina3 = () => {
    const {id} = useParams();
    return (
        <section id="pagina-3" className="page-container">
            <h2>Página 3!</h2>
            Parametro recibido: {id}
        </section>
    )
};

export default Pagina3;
