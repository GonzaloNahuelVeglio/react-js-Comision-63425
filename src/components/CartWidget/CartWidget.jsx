import React from 'react'
import "./CartWidget.css"
import { IoMdCart } from "react-icons/io";
const CartWidget=()=> {
   return (
    <div className='cartWidget'>
     <span className='IconCart'><IoMdCart /> </span>
     <span>3 </span>
    </div>
  )
}
 
export default CartWidget