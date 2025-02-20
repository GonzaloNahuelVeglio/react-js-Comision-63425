import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useCart } from "../../context/CartContext"; 
import Swal from "sweetalert2";
import "./RecetaDetail.css";

const RecetaDetail = () => {
  const { idReceta } = useParams();
  const [receta, setReceta] = useState(null);
  const { agregarAlCarrito } = useCart(); // Hook del carrito

  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        const recetaDoc = await getDoc(doc(db, "recetas", idReceta));
        if (recetaDoc.exists()) {
          setReceta({ idReceta: recetaDoc.id, ...recetaDoc.data() });
        } else {
          console.log("No se encontró la receta");
        }
      } catch (error) {
        console.error("Error obteniendo receta:", error);
      }
    };

    obtenerReceta();
  }, [idReceta]);

  // Función para agregar ingredientes al carrito
  const agregarIngredientesAlCarrito = async () => {
    if (!receta) return;
  
    try {
      const productosRef = collection(db, "inventario");
      const productosSnapshot = await getDocs(productosRef);
      
      let productosEncontrados = [];
  
      for (let ingrediente of receta.ingredientes) {
        let ingredienteNormalizado = ingrediente.toLowerCase();
  
        productosSnapshot.docs.forEach((doc) => {
          let producto = doc.data();
          let nombreProducto = producto.nombre.toLowerCase();
  
          // Si el nombre del producto está contenido en el ingrediente, lo agregamos
          if (ingredienteNormalizado.includes(nombreProducto)) {
            productosEncontrados.push({ id: doc.id, ...producto, cantidad: 1 });
          }
        });
      }
  
      if (productosEncontrados.length > 0) {
        productosEncontrados.forEach((producto) => agregarAlCarrito(producto, 1));
  
        Swal.fire({
          title: "¡Agregado al carrito!",
          text: "Todos los ingredientes de la receta han sido añadidos.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Ingredientes no encontrados",
          text: "Algunos ingredientes no están disponibles en la tienda.",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error("Error agregando ingredientes al carrito:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudieron agregar los ingredientes al carrito.",
        icon: "error",
        confirmButtonText: "Ok",
      });
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
          <li key={index}>{ingrediente}</li>
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
