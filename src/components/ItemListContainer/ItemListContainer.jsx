 import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const { idCategoria } = useParams();
  const [idCat, setIdCat] = useState(null);
  const [cuidadoPersonal, setCuidadoPersonal] = useState([]);

  useEffect(() => {
    if (idCategoria) {
      const obtenerIdCat = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "categorias"));
          const categoriaEncontrada = querySnapshot.docs.find(
            (doc) => doc.data().nombre.toLowerCase() === idCategoria.toLowerCase()
          );

          if (categoriaEncontrada) {
            setIdCat(categoriaEncontrada.data().idCat);
          } else {
            console.log("Categoría no encontrada en Firebase");
          }
        } catch (error) {
          console.error("Error obteniendo categoría:", error);
        }
      };

      obtenerIdCat();
    } else {
      setIdCat(null);
    }
  }, [idCategoria]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        let productosQuery;
        if (idCat !== null) {
          productosQuery = query(collection(db, "inventario"), where("idCat", "==", idCat));
        } else {
          productosQuery = collection(db, "inventario");
        }

        const res = await getDocs(productosQuery);
        const nuevosProductos = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(nuevosProductos);
      } catch (error) {
        console.log("Error obteniendo productos:", error);
      }
    };

    getProductos();

    const getDestacados = async () => {
      try {
        const destacadosQuery = query(collection(db, "inventario"), where("destacado", "==", true));
        const res = await getDocs(destacadosQuery);
        const productosDestacados = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDestacados(productosDestacados);
      } catch (error) {
        console.log("Error obteniendo destacados:", error);
      }
    };

    getDestacados();
    
    const getCuidadoPersonal = async () => {
      try {
        const cuidadoPersonalQuery = query(collection(db, "inventario"), where("idCat", "==", "4"));
        const res = await getDocs(cuidadoPersonalQuery);
        const productosCuidadoPersonal = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCuidadoPersonal(productosCuidadoPersonal);
      } catch (error) {
        console.log("Error obteniendo destacados:", error);
      }
    };

    getCuidadoPersonal();
  }, [idCat]);

  return (
    <div className="itemListContainer">
      {/* Sección de productos destacados */}
      {destacados.length > 0 && (
        <section className="destacados-section">
          <h2 className="destacados-titulo">✨ Productos Destacados</h2>
          <ItemList productos={destacados} />
        </section>
      )}

      {/* Sección de productos */}
      <section className="productos-section">
        <h1 className="productos-titulo">🛒 Productos</h1>
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <p className="no-productos">No hay productos disponibles en esta categoría.</p>
        )}
      </section>
      
      {/* Sección de cuidado personal */}
      <section className="productos-section">
        <h2 className="productos-titulo">🧼 Cuidado Personal</h2>
        {cuidadoPersonal.length > 0 ? (
          <ItemList productos={cuidadoPersonal} />
        ) : (
          <p className="no-productos">No hay productos de cuidado personal disponibles.</p>
        )}
      </section>
    </div>
  );
};
export default ItemListContainer;