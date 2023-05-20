import React from "react";
import './registeruser.css'
export default function Ingresar() {
  return (
    <div class="containerRegister">
      <h1>Iniciar Sesión</h1>
      <form className="form">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
   
        <button type="submit" class="btn-register">
          Ingresar
        </button>
      </form>
    </div>
  );
}