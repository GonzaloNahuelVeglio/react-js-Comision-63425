import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams(); 
  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };
        setProducto(nuevoProducto);
      })
      .catch((error) => console.log("Error ", error));
  }, [idItem]);

  return (
    <div>{producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}</div>
  );
};

export default ItemDetailContainer;
