import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="cart-empty-link">
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <div className="total-amount">
            Total: ${total.toLocaleString()}
          </div>
          <div className="total-quantity">
            Cantidad Total: {cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'}
          </div>
        </div>

        <div className="cart-actions">
          <button 
            className="clear-cart-btn"
            onClick={vaciarCarrito}
          >
            Vaciar Carrito
          </button>
          
          <Link to="/checkout" className="checkout-link">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;