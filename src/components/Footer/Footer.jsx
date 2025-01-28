import React from 'react'
import './Footer.css'
const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <footer>
<img src="../img/logo.svg" alt="" />
<p>Powered by <span>Gonzalo Veglio</span> | Todos los derechos reservados © {year}</p>
    </footer>
  )
}

export default Footer