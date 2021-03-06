import React, {useReducer, useState, useEffect} from 'react';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Table from '../components/Table/Table';
import {getTodos, updateTodoCheck} from '../services/todosServices';
import todosReducer, {TODOS_INIT, TODOS_UPDATE_CHECK} from '../reducers/todosReducer';
import TodoModal from '../components/TodoModal/TodoModal';
import TodoContext from '../contexts/TodoContext';

const TodoPage = () => {
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
      <TodoContext.Provider value={ {todos, setShowTodoModal, todosDispatch } }>
        <button type="button" onClick={e => setShowTodoModal(true)} style={{position: 'fixed', left: '0', top: '125px'}}>
            Add Todo
        </button>
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
    );
};

export default TodoPage;