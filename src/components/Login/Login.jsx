import React, { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userDocRef = doc(db, "usuarios", "admin"); 
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        if (
          userData.user.trim().toLowerCase() === user.trim().toLowerCase() &&
          userData.password === password.trim()
        ){
          localStorage.setItem("userUser", user); 
          Swal.fire("Bienvenido", "Acceso concedido", "success");
          navigate("/admin"); 
        } else {
          Swal.fire("Error", "Credenciales incorrectas", "error");
        }
      } else {
        Swal.fire("Error", "El usuario no existe", "error");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire("Error", "Hubo un problema con el login", "error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Iniciar Sesión</h2>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label className="form-label">Usuario:</label>
            <input
              className="form-input"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              placeholder="Ingrese su usuario"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña:</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
