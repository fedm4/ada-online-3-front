import React, {useEffect, useState} from 'react';
import {sumar, restar} from './helpers/MathHelpers.js';

const App = () => {

  const [nuevoValor, setNuevoValor] = useState(4);
  useEffect(() => setNuevoValor(sumar(nuevoValor, 4)), []);

  const [checked, setChecked] = useState(false);

  return (
    <React.Fragment>
      {nuevoValor}
      <input type="checkbox" checked={checked} onChange={e => setChecked(!checked)} />
      {
        checked ? 
        <div>Esta Chekeado!</div>
        :
        <div>No esta chequeado :*(</div>
      }
    </React.Fragment>
  );
}

export default App;
