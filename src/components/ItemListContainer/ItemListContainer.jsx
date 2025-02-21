import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const { idCategoria } = useParams();
  const [idCat, setIdCat] = useState(null);
  const [frutasVerduras, setFrutasVerduras] = useState([]);

  useEffect(() => {
    if (idCategoria) {
      const obtenerIdCat = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "categorias"));
          const categoriaEncontrada = querySnapshot.docs.find(
            (doc) =>
              doc.data().nombre.toLowerCase() === idCategoria.toLowerCase()
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
          productosQuery = query(
            collection(db, "inventario"),
            where("idCat", "==", idCat)
          );
        } else {
          productosQuery = query(
            collection(db, "inventario"),
            where("idCat", "!=", "6")
          );
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
        const destacadosQuery = query(
          collection(db, "inventario"),
          where("destacado", "==", true)
        );
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

    const getFrutasVerduras = async () => {
      try {
        const frutasVerdurasQuery = query(
          collection(db, "inventario"),
          where("idCat", "==", "6")
        );
        const res = await getDocs(frutasVerdurasQuery);
        const productosFrutasVerduras = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFrutasVerduras(productosFrutasVerduras);
      } catch (error) {
        console.log("Error obteniendo frutas y verduras:", error);
      }
    };

    // 🔹 Si NO hay categoría seleccionada, se muestran destacados y frutas y verduras
    if (!idCat) {
      getDestacados();
      getFrutasVerduras();
    } else {
      // 🔹 Si hay una categoría seleccionada, se ocultan destacados y frutas y verduras
      setDestacados([]);
      setFrutasVerduras([]);
    }
  }, [idCat]);

  return (
    <div className="itemListContainer">
      {/* 🔹 Mostrar productos destacados SOLO si NO hay categoría seleccionada */}
      {!idCat && destacados.length > 0 && (
        <section className="destacados-section">
          <h2 className="destacados-titulo">✨ Productos Destacados</h2>
          <ItemList productos={destacados} />
        </section>
      )}

      {/* 🔹 Mostrar título dinámico según si hay categoría seleccionada */}
      <section className="productos-section">
        <h1 className="productos-titulo">
          {idCat ? `Categoría: ${idCategoria}` : "🛒 Productos"}
        </h1>
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <p className="no-productos">
            No hay productos disponibles en esta categoría.
          </p>
        )}
      </section>

      {/* 🔹 Mostrar frutas y verduras SOLO si NO hay categoría seleccionada */}
      {!idCat && frutasVerduras.length > 0 && (
        <section className="productos-section">
          <h2 className="productos-titulo">Frutas y Verduras</h2>
          <ItemList productos={frutasVerduras} />
        </section>
      )}
    </div>
  );
};
export default ItemListContainer;
