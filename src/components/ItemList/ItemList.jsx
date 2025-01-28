import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ productos }) => {
  return (
    <div className="ItemList_Container">
        {
            productos.map(producto => <Item key={producto.idItem} {...producto} />)
        }
    </div>
  );
};

export default ItemList;

 