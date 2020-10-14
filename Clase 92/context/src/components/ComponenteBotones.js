import React, {useContext} from 'react';
import MainContext from '../contexts/MainContext';

const ComponenteBotones = () => {
    const {valorAImprimir, setValorAImprimir} = useContext(MainContext);

    const sumar = () => setValorAImprimir(valorAImprimir + 1);
    const restar = () => setValorAImprimir(valorAImprimir - 1);

    return(
        <div>
            <button type="button" onClick={sumar}>Sumar</button>
            <button type="button" onClick={restar}>Restar</button>
        </div>
    );
};

export default ComponenteBotones;
