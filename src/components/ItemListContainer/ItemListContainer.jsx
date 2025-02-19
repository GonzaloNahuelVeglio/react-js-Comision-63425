import { useState, useEffect } from "react" 
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect(() => {
    const getProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(getProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        });
        setProductos(nuevosProductos);
  })
  .catch ((error) => console.log("Error ", error))

   }, [idCategoria])

return (
  <div className="container itemListContainer">
    <h1>Productos</h1>
    {productos.length > 0 ? (
      <ItemList productos={productos} />
    ) : (
      <p>No hay productos disponibles en esta categoría.</p>
    )}
  </div>
)
  }
export default ItemListContainer 