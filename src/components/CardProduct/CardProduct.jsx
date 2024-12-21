import React from 'react'
import './CardProduct.css' 
import Buttons from '../Buttons/Buttons' 
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const CardProduct = ({nombre, categoria, precio}) => {
  const imagenProduct = "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg" 
  return (
    <div className='cardProduct'>
        <img src={imagenProduct} className="product" alt="Producto de tienda" />
       <div className='d-flex flex-column '> 
         <h3>{nombre}</h3>  <Badge  bg="success">{categoria}</Badge>
        </div>
        <p>$ {precio}</p>
        <Buttons accion="Agregar"/>
    </div>  )
}

  
export default CardProduct