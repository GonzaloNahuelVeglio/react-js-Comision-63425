import './Buttons.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
  
const Buttons = ({accion}) => {
  return (
    <Button variant="danger">{accion}</Button>
  )  
}

export default Buttons