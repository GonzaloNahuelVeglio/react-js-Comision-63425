import { useState, useContext } from "react";
import { db } from "../../services/config";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"; // Importamos los estilos

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      Swal.fire("Error", "Por favor completa todos los campos.", "error");
      setError("Por favor completa todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      Swal.fire("Error", "Los emails no coinciden.", "error");
      setError("Los emails no coinciden.");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrderId(docRef.id);
        vaciarCarrito(false);
        Swal.fire({
          title: "¡Compra realizada!",
          text: `Tu número de orden es: ${docRef.id}`,
          icon: "success",
          confirmButtonText: "OK",
        });
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(() => {
        Swal.fire("Error", "No se pudo completar la compra.", "error");
        setError("No se puede crear la orden, intente nuevamente");
      });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar Compra</h2>

      <form className="checkout-form" onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div className="checkout-item" key={producto.item.id}>
            <p>{producto.item.nombre} x {producto.cantidad}</p>
            <p>Precio: ${producto.item.precio}</p>
          </div>
        ))}

        <div>
          <label className="checkout-label">Nombre:</label>
          <input className="checkout-input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label className="checkout-label">Apellido:</label>
          <input className="checkout-input" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div>
          <label className="checkout-label">Teléfono:</label>
          <input className="checkout-input" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div>
          <label className="checkout-label">Email:</label>
          <input className="checkout-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label className="checkout-label">Confirmar Email:</label>
          <input className="checkout-input" type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        {error && <p className="checkout-error">{error}</p>}

        {orderId && (
          <strong className="checkout-success">
            ¡Gracias por tu compra! Tu número de orden es: {orderId}
          </strong>
        )}

        <button type="submit" className="checkout-submit">Finalizar Orden</button>
      </form>
    </div>
  );
};

export default Checkout;
