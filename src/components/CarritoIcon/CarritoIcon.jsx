import React from 'react'
import "./CarritoIcon.css"
import { IoMdCart } from "react-icons/io";
const CarritoIcon=()=> {
   return (
    <div className='carritoIcon'>
     <span className='IconCart'><IoMdCart /> </span>
     <span>3 </span>
    </div>
  )
}
 
export default CarritoIcon