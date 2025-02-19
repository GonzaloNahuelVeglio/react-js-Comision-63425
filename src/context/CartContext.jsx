import { useState, createContext } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);
 
 
  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + (item.precio * cantidad));
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + (item.precio * cantidad));
    }
    Swal.fire({
      title: "¡Producto agregado!",
      text: `${cantidad}x ${item.nombre} agregado al carrito.`,
      icon: "success",
      confirmButtonText: "OK",
      timer: 2000, // Se cierra automáticamente en 2 segundos
  });
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);

    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);

    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
  };

  const vaciarCarrito = (conConfirmacion = true) => {
    if (conConfirmacion) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Se eliminarán todos los productos del carrito.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, vaciar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setCarrito([]);
          setCantidadTotal(0);
          setTotal(0);
          Swal.fire("Carrito vacío", "El carrito ha sido vaciado.", "success");
        }
      });
    } else {
       
      setCarrito([]);
      setCantidadTotal(0);
      setTotal(0);
    }
  };
  

  return (
    <CartContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
        { children }
    </CartContext.Provider>
  );
};
