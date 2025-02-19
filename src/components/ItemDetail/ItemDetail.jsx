import "./ItemDetail.css";
import Badge from "react-bootstrap/Badge";
import Contador from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, categoria, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="itemDetailContainer">
      <article className="itemDetail">
        <div className="itemDetail_">
          <div className="prodImg">
            <img src={img} alt={nombre} loading="lazy" />
          </div>
          
          <div className="detalle">
            <div className="detalle_titulo">
              <h2>{nombre}</h2>
              <span>Código: {id}</span>
            </div>
            
            <div>
              <Badge bg="success" className="badge">
                {categoria}
              </Badge>
              <h3>${precio.toLocaleString()}</h3>
            </div>
            
            <div className="detalle_cantidad">
              {agregarCantidad > 0 ? (
                <Link to="/cart">Terminar compra</Link>
              ) : (
                <Contador
                  inicial={1}
                  stock={stock}
                  funcionAgregar={manejadorCantidad}
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="itemDetail_detalle">
          <h4>Descripción del producto</h4>
          <p>{descripcion}</p>
          <h6>Stock disponible: {stock} unidades</h6>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;