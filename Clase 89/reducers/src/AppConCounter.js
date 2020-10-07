import React, {useReducer} from 'react';
import './App.css';

const reducer = (state, action) => {
  switch(action.type) {
    case "sumar":
      return state + 1;
    case "restar":
      return state - 1;
    default:
      throw new Error("Invalid action type");
  }
}

const otroReducer = (state, action) => 1;

function App() {

  const [contador, dispatch] = useReducer(reducer, 1);

  const [otroState, otroDispatch] = useReducer(otroReducer, 0);

  const sumar = () => dispatch({type: "sumar"});
  const restar = () => dispatch({type: "restar"});

  return (
    <div className="App">
      <div>
        <h1>{contador}</h1>
      </div>
      <button type="button" onClick={sumar}>Sumar</button>
      <button type="button" onClick={restar}>Restar</button>
    </div>
  );
}

export default App;
