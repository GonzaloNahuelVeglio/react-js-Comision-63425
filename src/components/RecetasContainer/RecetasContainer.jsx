import React from 'react'
import './RecetasContainer.css'
import Recetas from '../Recetas/Recetas'
const RecetasContainer = () => {
  return (
     <div className='recetasContainer' id='recetas'>
         <h1>Recetas</h1>
         <p>En esta sección encontrarás las recetas más deliciosas y fáciles de preparar.</p>
        <div className="container">
            <Recetas nombre="Receta 1" />
            <Recetas nombre="Receta 2" />
            <Recetas nombre="Receta 3" />
            <Recetas nombre="Receta 4" />
        </div>
     </div>
  )
}

export default RecetasContainer