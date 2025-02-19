import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { db } from "../../services/config";
import { collection, getDocs } from "firebase/firestore";
import "./NavBar.css";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const usuario = useAuth();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categorias"));
        const categoriasArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategorias(categoriasArray);
      } catch (error) {
        console.error("Error obteniendo categorías:", error);
      }
    };

    obtenerCategorias();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="">
            <img src="../img/logo.svg" className="logo" alt="Logo" />
          </Link>
        </div>

        {/* Menú */}
        <div className="navbar-menu">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <div className="dropdown nav-link">
            <span className="dropdown-toggle">Categorías</span>
            <div className="dropdown-menu">
              {categorias.length > 0 ? (
                categorias.map((categoria) => (
                  <NavLink
                    key={categoria.id}
                    to={`/categoria/${categoria.nombre}`}
                    className="dropdown-item"
                  >
                    {categoria.nombre}
                  </NavLink>
                ))
              ) : (
                <p className="dropdown-item">Cargando...</p>
              )}
            </div>
          </div>
          <NavLink to="/recetario" className="nav-link">
            Recetario
          </NavLink>
          <NavLink to="/contacto" className="nav-link">
            Contacto
          </NavLink>
        </div>
        <div className="navbar-actions">
          <div className="navbar-cart">
            <CartWidget />
          </div>
          <Link to={usuario ? "/admin" : "/login"} className="navbar-cart">
            <FaUser className="carrito-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
