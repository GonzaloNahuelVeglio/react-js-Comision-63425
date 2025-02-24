import React, { useState, useEffect } from "react";
import { db } from "../../services/config";
import { collection, getDocs } from "firebase/firestore";
import "./RecetasContainer.css";
import Recetas from "../Recetas/Recetas"; 

const RecetasContainer = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recetas"));
        const recetasArray = querySnapshot.docs.map((doc) => ({
          idReceta: doc.id,  
          ...doc.data(),
        }));
        setRecetas(recetasArray);
      } catch (error) {
        console.error("Error obteniendo recetas:", error);
      }
    };

    obtenerRecetas();
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
          <Recetas key={receta.idReceta} {...receta} />
        ))}
      </div> 
    </section>
  );
};

export default RecetasContainer;
