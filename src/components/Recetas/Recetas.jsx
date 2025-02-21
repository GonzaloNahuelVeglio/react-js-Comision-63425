import React from "react";
import "./Recetas.css";
import { Link } from "react-router-dom";

const Recetas = ({ idReceta, nombre, ingredientes, pasos, img }) => {
  return (
    <div className="cardReceta">
      <div className="d-flex">
        <div className="nombreReceta">
          <h2>{nombre}</h2>
        </div>
        <div className="descripReceta">
          <div className="descripDetalle">
            <div>
              <img src={img} alt={`Imagen de ${nombre}`} />
            </div>
            <div className="ingredientesContainer">
              <p>Ingredientes:</p>
              <ul>
                {ingredientes.map((ingrediente, index) => (
                  <li key={index}>
                    {ingrediente.producto} - {ingrediente.cantidad}
                  </li>
                ))}
              </ul>

              <Link to={`/receta/${idReceta}`} className="btn">
                Ver Receta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recetas;
