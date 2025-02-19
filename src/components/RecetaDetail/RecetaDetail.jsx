import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReceta } from "../../asyncmock";
import "./RecetaDetail.css";

const RecetaDetail = () => {
  const { idReceta } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    getReceta(idReceta).then((data) => setReceta(data));
  }, [idReceta]);

  if (!receta) {
    return <div>Cargando...</div>;
  }

 

  return (
    <div className="recetaDetail">
      <h1>{receta.nombre}</h1>
      <img src={receta.img} alt={`Imagen de ${receta.nombre}`} />
      <h2>Ingredientes:</h2>
      <ul>
        {receta.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
        <button>Agregar al carrito</button>
      <h2>Preparación:</h2>
      <ol>
        {receta.pasos.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecetaDetail;