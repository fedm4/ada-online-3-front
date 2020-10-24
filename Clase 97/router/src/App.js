import React, {Fragment} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import Index from './pages/Index/Index';
import Pagina2 from './pages/Pagina2/Pagina2'
import Pagina3 from './pages/Pagina3/Pagina3';


import './App.scss';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <MainHeader />
        <p>
                <Link to="/pagina3/1">1</Link>
                <Link to="/pagina3/2">2</Link>
                <Link to="/pagina3/3">3</Link>
                <Link to="/pagina3/4">4</Link>
                <Link to="/pagina3/5">5</Link>
            </p>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/pagina2" component={Pagina2} />
          <Route exact path="/pagina3/:id" component={Pagina3} />

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
