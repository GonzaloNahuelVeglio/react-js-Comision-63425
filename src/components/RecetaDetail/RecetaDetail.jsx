import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/config";
import { useCart } from "../../context/CartContext";
import "./RecetaDetail.css";

const RecetaDetail = () => {
  const { idReceta } = useParams();
  const { agregarAlCarrito } = useCart();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        const recetaDoc = await getDoc(doc(db, "recetas", idReceta));
        if (recetaDoc.exists()) {
          setReceta({ id: recetaDoc.id, ...recetaDoc.data() });
        }
      } catch (error) {
        console.error("Error obteniendo receta:", error);
      }
    };
    obtenerReceta();
  }, [idReceta]);

  const agregarIngredientesAlCarrito = async () => {
    try {
      const productosSnapshot = await getDocs(collection(db, "inventario"));
      const productosDB = productosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      receta.ingredientes.forEach(ingrediente => {
        const productoEncontrado = productosDB.find(
          (producto) =>
            producto.nombre.toLowerCase() === ingrediente.producto.toLowerCase()
        );

        if (productoEncontrado) {
          agregarAlCarrito(productoEncontrado, 1); 
        } else {
          console.warn(`Producto no encontrado en inventario: ${ingrediente.producto}`);
        }
      });

    } catch (error) {
      console.error("Error al agregar ingredientes al carrito:", error);
    }
  };

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
          <li key={index}>
            {ingrediente.producto} - {ingrediente.cantidad}
          </li>
        ))}
      </ul>

      <button onClick={agregarIngredientesAlCarrito}>Agregar al carrito</button>
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
