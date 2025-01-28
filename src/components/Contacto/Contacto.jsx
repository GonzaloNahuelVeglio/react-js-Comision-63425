import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  const enviarEmail = (e) => {
    e.preventDefault();


    const templateParams = {
        from_name: nombre,
        message: mensaje,
        from_email: email
    }

    emailjs.send('service_bhpw6vc', 'template_4m1b163', templateParams,'6k69YJnpI1BhiRc4K')
    .then(respuesta => {
        setRespuesta("Mensaje enviado correctamente");
        setError(false);
    })
    .catch(error => {
        setRespuesta("Error al enviar el mensaje");
        setError(true);
    })

    setEmail("");
    setNombre("");
    setMensaje("");

  };

  return (
    <form onSubmit={enviarEmail}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        name="nombre"
        value={nombre}
        id="nombre"
      />

      <label htmlFor="email">Email: </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        value={email}
        id="email"
      />

      <label htmlFor="mensaje">Mensaje: </label>
      <textarea
        onChange={(e) => setMensaje(e.target.value)}
        type="text"
        name="mensaje"
        value={mensaje}
        id="mensaje"
        rows="5"  
      />

      <button type="submit">Enviar</button>
        {respuesta && <p className={ !error ? "success" : "error"}>{respuesta}</p>}
    </form>
  );
};

export default Contacto;
