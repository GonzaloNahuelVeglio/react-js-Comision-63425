import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartItem.css";  

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.nombre}</h4>
        <p className="cart-item-quantity">Cantidad: <span>{cantidad}</span></p>
        <p className="cart-item-price">Precio: <span>${item.precio}</span></p>
      </div>
      <button className="cart-item-remove" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
