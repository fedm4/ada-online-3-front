import React from 'react';
import ComponenteNiete from './ComponenteNiete';
import ComponentesContext from '../contexts/ComponentesContext';

const ComponenteHije = () => {
    const pepito = "Pepon";

    return(
        <div id="hije">
            <ComponentesContext.Provider value={{pepito}}>
                <ComponenteNiete />
            </ComponentesContext.Provider>
        </div>
    );
}

export default ComponenteHije;