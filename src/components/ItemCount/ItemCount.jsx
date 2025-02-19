import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button 
          className="counter-btn"
          onClick={restarContador}
          disabled={contador <= inicial}
        >
          −
        </button>
        
        <span className="counter-value">{contador}</span>
        
        <button 
          className="counter-btn"
          onClick={sumarContador}
          disabled={contador >= stock}
        >
          +
        </button>
      </div>

      <button 
        className="add-to-cart-btn"
        onClick={() => funcionAgregar(contador)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default ItemCount;