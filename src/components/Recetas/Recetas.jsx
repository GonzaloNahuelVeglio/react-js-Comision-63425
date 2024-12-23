import React from 'react'
import './Recetas.css'
import Buttons from '../Buttons/Buttons' 


const Recetas = ({nombre}) => {
  return (
    <div className="cardReceta">
        <div className="d-flex">
          <div className="nombreReceta">
            <h2> {nombre}</h2>
          </div>
          <div className="descripReceta">
            <div className="d-flex descripDetalle">

              <div> 
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
              </div>              <div> 
                <img
                  src="https://leonardoespinoza.com/cdn/shop/articles/pan_dulce.jpg?crop=center&height=1200&v=1648070222&width=1200"
                  alt=""
                  />
              </div>
            </div>
                  <Buttons accion="Comprar"/>
          </div>
        </div>
      </div>
  )
}

export default Recetas