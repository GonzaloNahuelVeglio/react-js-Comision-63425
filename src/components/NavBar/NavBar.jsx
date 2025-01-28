import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="">
            <img src="../img/logo.svg" className="logo" alt="Logo" />
          </Link>
        </div>

        {/* Menu */}
        <div className="navbar-menu">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <a href="#RecetasContainer" className="nav-link">
            Recetas
          </a>

          {/* Dropdown menu */}
          <div className="dropdown nav-link">
            <a className="dropdown-toggle">Categorias</a>
            <div className="dropdown-menu">
              <NavLink to="/categoria/almacen" className="dropdown-item">
                Almacen
              </NavLink>
              <NavLink
                to="/categoria/cuidado-personal"
                className="dropdown-item"
              >
                Cuidado personal
              </NavLink>
              <NavLink to="/categoria/panaderia" className="dropdown-item">
                Panadería
              </NavLink>
              <NavLink to="/categoria/lacteos" className="dropdown-item">
                Lacteos
              </NavLink>
              <NavLink to="/categoria/limpieza" className="dropdown-item">
                Limpieza
              </NavLink>
            </div>
          </div>
          <a href="#ContactoContainer" className="nav-link">
            Contacto
          </a>

        </div>

        {/* Cart Widget */}
        <div className="navbar-cart">
          <CartWidget className="carrito-icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
