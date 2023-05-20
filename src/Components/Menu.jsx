import React from "react";

import { Fragment } from "react";
import "./menu.css";
import logo from "../assets/logo.png";
import carrito from "../assets/Carrito.png";
import font from "../assets/font.jpg";
import Register from "./RegisterUser";
const Menu = () => {
  return (
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
              <input type="text" placeholder="Buscar" />
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
                <a href="/">Todo</a>
              </li>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/">Catálogo</a>
              </li>
              <li>
                <a href="/">Promociones</a>
              </li>
              <li>
                <a href="/">Contáctenos</a>
              </li>
            </ul>
          </div>
          <div className="user-auth">
            <a href="/">Ingresar</a>
            <a href="/">Registrarse</a>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default Menu;
