import React from 'react';
import './App.css';
import Input from './Components/Input/Input';
import ConditionalDisplayA from './Components/ConditionalDisplayA/ConditionalDisplayA';
import ConditionalDisplayB from './Components/ConditionalDisplayB/ConditionalDisplayB';

function App() {
  return (
    <div className="App">
      <Input />
      <ConditionalDisplayA />
      <ConditionalDisplayB />
    </div>
  );
}

export default App;
