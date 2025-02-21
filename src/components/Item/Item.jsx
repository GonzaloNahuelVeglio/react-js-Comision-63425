import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { getDocs, collection } from "firebase/firestore";
import Badge from 'react-bootstrap/Badge'; 
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, idCat, precio, img }) => {
  const [nombreCategoria, setNombreCategoria] = useState("Cargando...");
const path = `../img/`;
const imgComplete = path + img;
  useEffect(() => {
    const obtenerNombreCategoria = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categorias"));
        const categoriaEncontrada = querySnapshot.docs.find(
          (doc) => doc.data().idCat === idCat
        );

        if (categoriaEncontrada) {
          setNombreCategoria(categoriaEncontrada.data().nombre);
        } else {
          setNombreCategoria("Sin categoría");
        }
      } catch (error) {
        console.error("Error obteniendo nombre de categoría:", error);
      }
    };

    obtenerNombreCategoria();
  }, [idCat]);

  return (
    <div className='item'>
        <img src={imgComplete} className="product" alt={nombre} />
       <div className='d-flex flex-column '> 
         <h3>{nombre}</h3>  
         <Badge bg="success">{nombreCategoria}</Badge> {/* Muestra el nombre real */}
        </div>
        <p>$ {precio}</p>
        <Link className='btn' to={`/item/${id}`}> Ver Detalles </Link>
    </div>  
  );
};

export default Item;
