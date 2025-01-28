import React, { useState, useEffect } from "react";
import { getRecetas } from "../../asyncmock";
import "./RecetasContainer.css";
import Recetas from "../Recetas/Recetas";

const RecetasContainer = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    getRecetas().then((data) => setRecetas(data));
  }, []);

  return (
    <section id="RecetasContainer">
      <div className="recetasTitulo">
        <h1>Recetas</h1>
        <p>
          En esta sección encontrarás las recetas más deliciosas y fáciles de
          preparar. <br /> 
        </p>
      </div>
      <div className="recetasContainer container" id="recetas">
        {recetas.map((receta) => (
          <Recetas
            key={receta.idReceta}
            idReceta={receta.idReceta}
            nombre={receta.nombre}
            ingredientes={receta.ingredientes}
            pasos={receta.pasos}
            img={receta.img}
          />
        ))}
      </div>
    </section>
  );
};

export default RecetasContainer;
