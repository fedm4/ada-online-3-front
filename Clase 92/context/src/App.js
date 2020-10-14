import React, {useState} from 'react';
import './App.scss';
import ComponenteHije from './components/ComponenteHije';
import ComponenteBotones from './components/ComponenteBotones';
import MainContext from './contexts/MainContext';

function App() {

  const [valorAImprimir, setValorAImprimir] = useState(1);

  const contextValue = {
    valorAImprimir: valorAImprimir,
    setValorAImprimir
  };

  return (
    <MainContext.Provider value={contextValue}>
      <ComponenteHije />
      <ComponenteBotones />
    </MainContext.Provider>
  );
}

export default App;
