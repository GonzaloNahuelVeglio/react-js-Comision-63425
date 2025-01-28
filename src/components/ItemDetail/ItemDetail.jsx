import "./ItemDetail.css";
import Badge from "react-bootstrap/Badge";
import Contador from "../Contador/Contador";

const ItemDetail = ({
  idItem,
  nombre,
  precio,
  categoria,
  img,
  stock,
  descripcion,
}) => {
  return (
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <div className="itemDetail_">
          <div className="prodImg">
            <img src={img} alt={nombre} />
          </div>
          <hr />
          <div className="detalle">
            <div className="detalle_titulo">
              <h2> {nombre} </h2>
              <span>Id: {idItem}</span>
            </div>
            <div>
              <span>
                <Badge bg="success">{categoria}</Badge>
              </span>
              <hr />
              <h3> ${precio}</h3>
            </div>
            <div className="detalle_cantidad">
              <button className="btn" type="submit">
                Agregar
              </button>
              <Contador valorInicial={1} valorMaximo={stock} />
            </div>
          </div>
        </div>
        <div className="itemDetail_detalle">
          <hr />
          <h4>Detalle</h4>
          <p>{descripcion}</p>
          <h6>Stock: {stock}</h6>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
