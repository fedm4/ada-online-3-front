import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Sidebar from './components/Sidebar/Sidebar';
import ContentContainer from './components/ContentContainer/ContentContainer';
import MainFooter from './components/MainFooter/MainFooter';

import './App.css';

const App = () => {
  const [currentContent, setCurrentContent] = useState(1);
    
  //Dentro del return, las {} hacen referencia a javascript. O sea
  // Estoy diciendo que lo que está dentro de las {} es una variable
  // de javascript o una funcion de javascript (ver map)
  // Estas {} no significan que nada de adentro se convierta en objeto
  return (
    <React.Fragment>
      <MainHeader />
      <div id="main-nav-content">
        <Sidebar
          setCurrentContent={setCurrentContent} 
          currentContent={currentContent}
          pepita="hola!"
        />
        <ContentContainer currentContent={currentContent} />
      </div>
      <MainFooter />
    </React.Fragment>
  );
}

export default App;
