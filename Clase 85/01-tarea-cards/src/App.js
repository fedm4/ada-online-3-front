import React, {useState} from 'react';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import './App.scss';


function App() {

  const [cardIndex, setCardIndex] = useState(0);

  const fede1 = "Fede";
  const [fede2, setFede2] = useState("Fede")

  return (
    <div className="main-container">
      <Header
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
      />
      <CardContainer cardIndex={cardIndex}/>
    </div>
  );
}

export default App;
