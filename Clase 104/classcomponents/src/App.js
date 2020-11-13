import react, {useState} from 'react';
import Lista from './components/Lista';

function App() {
  const [aloha, setAloha] = useState("hola");
  return (
    <div className="App">
      <Lista aloha={aloha} />
      <button type="button" onClick={e => setAloha("aloha")}>Change Aloha</button>
    </div>
  );
}

export default App;
