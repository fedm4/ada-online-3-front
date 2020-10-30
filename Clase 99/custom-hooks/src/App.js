import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import Counter from './components/Counter';
import useAll from './hooks/useAll';

function App() {

  const {numero, sumarUno, sumarDiez, restarUno, restarDiez} = useAll();

  return (
    <div className="App">
      <Toggle />
      <Counter />

      <div>
        <h4>{numero}</h4>
        <button type="button" onClick={restarDiez}>Restar 10</button>
        <button type="button" onClick={restarUno}>Restar 1</button>
        <button type="button" onClick={sumarUno}>Sumar 1</button>
        <button type="button" onClick={sumarDiez}>Sumar 10</button>
      </div>
    </div>
  );
}

export default App;
