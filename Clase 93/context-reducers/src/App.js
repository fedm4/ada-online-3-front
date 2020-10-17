import React, {Fragment} from 'react';
import './App.scss';
import TodoPage from './pages/TodoPage'
function App() {

  return (
    <Fragment>
      <header id="main-header">
        <h1>Todos!</h1>
      </header>
      <TodoPage />
    </Fragment>
  );
}

export default App;

