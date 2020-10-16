import React, {Fragment, useReducer, useState, useEffect} from 'react';
import './App.scss';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Table from './components/Table/Table';
import {getTodos, updateTodoCheck} from './services/todosServices';
import todosReducer, {TODOS_INIT, TODOS_UPDATE_CHECK} from './reducers/todosReducer';
import TodoModal from './components/TodoModal/TodoModal';
import TodoContext from './contexts/TodoContext';

function App() {

  const [todos, todosDispatch] = useReducer(todosReducer, []);
  const [showTodoModal, setShowTodoModal] = useState(false);

  const setChecked = async (todo, checked) => {
    await updateTodoCheck(todo, checked); // Cambia la api
    todosDispatch({type: TODOS_UPDATE_CHECK, checked, id: todo.id}); // Cambia en el state/local
  };

  useEffect(() => {
    const promise = getTodos();
    promise.then(data => todosDispatch({ type: TODOS_INIT, todos: data }));
  }, []);

  return (
    <Fragment>
      <header id="main-header">
        <h1>Todos!</h1>
      </header>
      <button type="button" onClick={e => setShowTodoModal(true)}>Add Todo</button>
      <TodoContext.Provider value={ {todos, setShowTodoModal, todosDispatch} }>
        <ContentContainer>
          <Table headers={["id", "title", "content", "check", "delete"]}>
            {
              todos.map(todo => {
                return(
                  <tr key={todo.id} className={todo.checked ? "tachado" : ""}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.content}</td>
                    <td>
                      <input type="checkbox"
                        defaultChecked={todo.checked}
                        onChange={e => setChecked(todo, e.target.checked)}/>
                    </td>
                    <td>
                      <button type="button">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </Table>
        </ContentContainer>
        { showTodoModal ? <TodoModal /> : null }
      </TodoContext.Provider>
    </Fragment>
  );
}

export default App;

