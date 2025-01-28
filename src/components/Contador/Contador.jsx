import React from "react";
import { useState } from "react";

const Contador = ({ valorInicial = 1 , valorMaximo }) => { 
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    if (contador < valorMaximo) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > valorInicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador">
      <button onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
};
  export default Contador; 
