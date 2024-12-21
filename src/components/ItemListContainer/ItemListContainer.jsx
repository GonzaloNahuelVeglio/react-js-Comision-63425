import React from 'react'
import './ItemListContainer.css' 

const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemListContainer_greeting  '>
        <h2>Bienvenidos</h2>
        <h1 className='dancing-script'>{greeting}</h1>

    </div>
  )
}

export default ItemListContainer