import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
/*import logo from './logo.svg';*/
import './App.css';

import Login from './views/Login/Login';
import Home from './views/Home/Home';

import RegistroProductos from './views/Productos/Registro';
import Productos from './views/Productos/Productos';
import RegistroVentas from './views/Ventas/Registro';
import Ventas from './views/Ventas/Ventas';
import Usuarios from './views/Usuarios/Usuarios';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        
        {/* Productos */}
        <Route exact path="/productos/registro" component={RegistroProductos} />
        <Route exact path="/productos/" component={Productos} />

        {/* Ventas */}
        <Route exact path="/ventas/registro" component={RegistroVentas} />
        <Route exact path="/ventas/" component={Ventas} />

        {/* Usuarios */}
        <Route exact path="/usuarios" component={Usuarios} />

      </Switch>
    </Router>
  );
}

export default App;



{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}