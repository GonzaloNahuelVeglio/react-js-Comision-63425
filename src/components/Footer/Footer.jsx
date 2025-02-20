import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs } from "firebase/firestore";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const [categorias, setCategorias] = useState([]);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categorias"));
        const categoriasArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().nombre,
        }));
        setCategorias(categoriasArray);
      } catch (error) {
        console.error("Error obteniendo categorías:", error);
      }
    };

    obtenerCategorias();

    const obtenerRecetas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recetas"));
        const recetasArray = querySnapshot.docs.map((doc) => ({
          idReceta: doc.id,
          nombre: doc.data().nombre,
        }));
        setRecetas(recetasArray);
      } catch (error) {
        console.error("Error obteniendo recetas:", error);
      }
    };

    obtenerRecetas();
  }, []);

  return (
    <footer>
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="../img/logo.svg" alt="Logo" />
        </div>

        {/* Sección de categorías */}
        <div className="footer-categorias">
          <h3>Categorías</h3>
          <ul>
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <Link to={`/categoria/${categoria.nombre}`}>{categoria.nombre}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-recetas">
          <h3>Recetas</h3>
          <ul>
            {recetas.map((receta) => (
              <li key={receta.idReceta}>
                <Link to={`/receta/${receta.idReceta}`}>{receta.nombre}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Pie de página */}
      <div className="footer-powered">
        <p>
          Powered by
          <span>
            {" "}
            <a
              href="https://www.linkedin.com/in/gonzalo-nahuel-veglio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gonzalo Veglio
            </a>
          </span>{" "}
          | Todos los derechos reservados © {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer; 