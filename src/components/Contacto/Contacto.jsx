import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const [respuesta, setRespuesta] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const enviarEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: nombre,
      message: mensaje,
      from_email: email,
    };

    try {
      await emailjs.send(
        'service_bhpw6vc',
        'template_4m1b163',
        templateParams,
        '6k69YJnpI1BhiRc4K'
      );
      setRespuesta("Mensaje enviado correctamente");
      setError(false);
      
      // Limpiar formulario
      setEmail("");
      setNombre("");
      setMensaje("");
    } catch (error) {
      setRespuesta("Error al enviar el mensaje");
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={enviarEmail} className="contact-form">
        <div className="form-header">
          <h2>Contacto</h2>
          <p>Envíanos tu mensaje y te responderemos a la brevedad</p>
        </div>

        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            className="form-input"
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            name="nombre"
            value={nombre}
            id="nombre"
            required
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            id="email"
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            Mensaje:
          </label>
          <textarea
            className="form-textarea"
            onChange={(e) => setMensaje(e.target.value)}
            name="mensaje"
            value={mensaje}
            id="mensaje"
            rows="5"
            required
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>

        {respuesta && (
          <div className={`message ${error ? 'error' : 'success'}`}>
            {respuesta}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contacto;