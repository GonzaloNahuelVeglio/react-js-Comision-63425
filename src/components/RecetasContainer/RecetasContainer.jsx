import React from "react";
import "./RecetasContainer.css";
import Recetas from "../Recetas/Recetas";
const RecetasContainer = () => {
  return (
    <section className="container" id="recetasContainer">
      <h1>Recetas</h1>
      <p>
        En esta sección encontrarás las recetas más deliciosas y fáciles de
        preparar. <br /> <span>Con el botón COMPRAR, adquiriras los ingredientes</span>
      </p>
      <div className="recetasContainer" id="recetas">
        <Recetas nombre="Pan Dulce" />
        <Recetas nombre="Vitel Tone" />
        <Recetas nombre="Pan de manteca" />
        <Recetas nombre="Pizzas" />
        <Recetas nombre="Fideos con salsa" />
      </div>
    </section>
  );
};

export default RecetasContainer;
