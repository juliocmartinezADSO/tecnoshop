import React from "react";
import './registeruser.css'
export default function Register() {
  return (
    <div class="containerRegister">
      <h1>Crear cuenta</h1>
      <form className="form">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="terms" name="terms" required />
          <label for="terms">Acepto los términos y condiciones del sitio</label>
        </div>
        <button type="submit" class="btn-register">
          Registrar
        </button>
      </form>
    </div>
  );
}
