import { useState, useEffect } from "react"
import { getProductos, getCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import  './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

   useEffect (() => {
    const funcionProductos = idCategoria ? getCategoria : getProductos
      funcionProductos(idCategoria)
      .then(respuesta => {
        setProductos(respuesta)
      })

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