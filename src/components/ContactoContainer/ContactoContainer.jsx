import React from "react";
import Contacto from "../Contacto/Contacto";
import "./ContactoContainer.css";

const ContactoContainer = () => {
  return (
    <div className="container" id="ContactoContainer">
      <h2>Contacto</h2>
      <p>Envianos tu consulta</p>
      <div className="ContactoContaner">
        <div className="contactoForm"> 
          <Contacto />
        </div>
        <div className="contactoImagen">
          <img src="../img/contact.png" alt="imagen de contacto" />
        </div>
      </div>
    </div>
  );
};

export default ContactoContainer;
