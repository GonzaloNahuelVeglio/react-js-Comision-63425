import React from "react";
import CarritoIcon from "../CarritoIcon/CarritoIcon";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar id="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">TiendaOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="#" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#recetas" className="nav-link">Recetas</Nav.Link>
            <Nav.Link href="#" className="nav-link">Novedades</Nav.Link>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="nav-link"
            >
              <NavDropdown.Item href="#">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#">Almacén</NavDropdown.Item>
              <NavDropdown.Item href="#">Panadería</NavDropdown.Item>
              <NavDropdown.Item href="#">Limpieza</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CarritoIcon className="carrito-icon" />
      </Container>
    </Navbar>
  );
};

export default NavBar;