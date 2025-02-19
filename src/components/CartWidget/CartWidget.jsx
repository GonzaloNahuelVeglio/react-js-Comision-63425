import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./CartWidget.css";
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <Link to="/cart">
        <span className="IconCart">
          <IoMdCart />
        </span>
        <span> {cantidadTotal > 0 && cantidadTotal} </span>
      </Link>
    </div>
  );
};

export default CartWidget;
