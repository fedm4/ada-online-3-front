import React, {useReducer, useState} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faEdit } from '@fortawesome/free-solid-svg-icons';
import {reducer, ACTION_ADD, ACTION_REMOVE, ACTION_EDIT} from './reducers/userReducer.js';

import AppConCounter from './AppConCounter';

let nextUserId = 1;

function App() {

  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("")
  const [age, setAge] = useState();
  const [id, setId] = useState();

  const [editName, setEditName] = useState("")
  const [editAge, setEditAge] = useState();
  const [editId, setEditId] = useState();

  const sumar = () => {
    // const user = new User(id, name, age);
    // dispatch({type: ACTION_ADD, payload: user});
    const payload = {
      id: nextUserId,
      name,
      age
    };
    nextUserId++;
    dispatch({type: ACTION_ADD, payload});
  };
  
  const restar = () => dispatch({type: ACTION_REMOVE, id: parseInt(id)});

  const editar = () => {
    const action = {type: ACTION_EDIT, payload: {name: editName, age: editAge, id: parseInt(editId)}};
    dispatch(action);
  }
  return (
    <div className="App">
      <AppConCounter />
      {
        state.map(user => {
          return (
            <div key={user.id}>
              <h1>{user.id} - {user.name} - {user.age} años.</h1>
            </div>
          )
        })
      }
      <div>
        <input type="text" placeholder="nombre" onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="edad" onChange={e => setAge(e.target.value)} />
        <button type="button" onClick={sumar}>
          <FontAwesomeIcon icon={faUserPlus}/>
        </button>
      </div>
      <div>
        <input type="number" placeholder="id" onChange={e => setId(e.target.value)} />
        <button type="button" onClick={restar}>
          <FontAwesomeIcon icon={faUserMinus} />
        </button>
      </div>
      <div>
      <input type="text" placeholder="nombre" onChange={e => setEditName(e.target.value)} />
        <input type="number" placeholder="edad" onChange={e => setEditAge(e.target.value)} />
        <input type="number" placeholder="id" onChange={e => setEditId(e.target.value)} />
        <button type="button" onClick={editar}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </div>
  );
}

export default App;
