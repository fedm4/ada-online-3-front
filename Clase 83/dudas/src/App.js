import React, {useState} from 'react';
import Content from './components/Content/Content';
import './App.css';
import Section from './components/Section/Section';


function App() {

  // destructuring de array. 
  const [contentText, setContentText] = useState("Hola soy un texto simple.");
  //const [mesa, setMesa] = useState(new Mesa(1));

  return (
    <React.Fragment>
      <Section title={"Mi primer section"}>
        <Content contentText={contentText}/>
      </Section>

      <Section>

      </Section>
      
      <Section>
        Un texto aburridisimo
      </Section>
    </React.Fragment>
  );
}

export default App;
