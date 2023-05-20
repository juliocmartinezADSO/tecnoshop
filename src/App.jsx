import "./App.css";
import React from "react";
import logo from './assets/logo.png'
import carrito from './assets/Carrito.png'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/RegisterUser";
import Menu from "./Components/Menu";
import Ingresar from "./Components/IngresarUser";

function App() {
  return (
    <Router>
      <div className="principal">
      <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <div className="menu-top">
          <div className="text-header">
            <h2>TecnologyShop</h2>
          </div>
          <div className="search-cart">
            <div className="search-bar">
              <input type="text" placeholder="buscar..." />
              <button>Buscar</button>
            </div>
            <div className="cart-icon">
              <a href="#" className="carrito">
                <img src={carrito} alt="Carrito" />
                <p>Carrito</p>
              </a>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="menu-up">
          <div className="menu-items">
            <ul>
              <li>
                <NavLink to="/">Todo</NavLink>
              </li>
              <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
              </li>
              <li>
              <NavLink to="/catalogo">Catálogo</NavLink>
              </li>
              <li>
              <NavLink to="/promociones">Promociones</NavLink>
              </li>
              <li>
              <NavLink to="/contactenos">Contáctenos</NavLink>
              </li>
            </ul>
          </div>
          <div className="user-auth">
          <NavLink to="/ingresar">Ingresar</NavLink>
          <NavLink to="/register">Registrarse</NavLink>
          </div>
        </div>
      </div>
      

    </div>

        <Switch>
          <Route path="/register" element={<Register />} />
          <Route path="/ingresar" element={<Ingresar />} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
