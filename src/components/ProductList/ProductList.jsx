import React from "react";
import "./ProductList.css";
import CardProduct from "../CardProduct/CardProduct";

const ProductList = () => {
  return (
    <section className="container">
    <h3>Conoce nuestro catalogo</h3>
    <div className="productList">
      <CardProduct nombre="Harina" categoria="Almacén" precio="450" />
      <CardProduct nombre="Fideos" categoria="Almacén" precio="850" />
      <CardProduct nombre="Arroz" categoria="Almacén" precio="600" />
      <CardProduct nombre="Manteca" categoria="Lácteos" precio="1200" />
      <CardProduct nombre="Leche" categoria="Lácteos" precio="1350" /> 
      <CardProduct nombre="Agua Saborizada" categoria="Bebidas" precio="1350" /> 
      <CardProduct nombre="Coca Cola" categoria="Bebidas" precio="2500" /> 
      <CardProduct nombre="Lentejas" categoria="Legumbres" precio="750" /> 
    </div>
    </section>
  );
}

export default ProductList;
