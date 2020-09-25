import React, {useState} from 'react';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import './App.scss';


function App() {

  const [cardIndex, setCardIndex] = useState(0);

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
