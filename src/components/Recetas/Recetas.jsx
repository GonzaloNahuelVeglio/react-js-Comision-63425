import React from 'react'
import './Recetas.css'

import Buttons from '../Buttons/Buttons' 
const Recetas = ({nombre}) => {
  return (
    <div className='recetaContainer'>
        <div className="receta">
            <h2>{nombre}</h2>
            <p>Ingredientes:</p>
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <li>Ingrediente 3</li>
            </ul>
            <p>Preparación:</p>
            <ol>
                <li>Paso 1</li>
                <li>Paso 2</li>
                <li>Paso 3</li>
            </ol>
            <Buttons accion="Comprar"/>
            
        </div>
        <img src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
    </div>
  )
}

export default Recetas