import React, {useContext} from 'react';
import MainContext from '../contexts/MainContext';
import ComponentesContext from '../contexts/ComponentesContext';


const ComponenteBisNiete = () => {
    const {valorAImprimir} = useContext(MainContext);
    const {pepito} = useContext(ComponentesContext);

    return(
        <div id="bis-niete">
            <h1>{valorAImprimir} - {pepito}</h1>
        </div>
    );
}

export default ComponenteBisNiete;