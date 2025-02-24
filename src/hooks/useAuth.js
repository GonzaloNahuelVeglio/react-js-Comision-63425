import { useState, useEffect } from "react";

// Hook personalizado para manejar la autenticación del usuario
export const useAuth = () => {
  // Estado para almacenar la información del usuario (inicialmente null)
  const [usuario, setUsuario] = useState(null);

  // useEffect se ejecuta al montar el componente para cargar el usuario almacenado en localStorage
  useEffect(() => {
    const user = localStorage.getItem("userUser"); // Se obtiene el usuario guardado en localStorage
    setUsuario(user); // Se actualiza el estado con el usuario obtenido
  }, []);

  // Función para iniciar sesión: guarda el usuario en localStorage y actualiza el estado
  const login = (user) => {
    localStorage.setItem("userUser", user); // Se guarda el usuario en localStorage
    setUsuario(user); // Se actualiza el estado con el nuevo usuario
  };

  // Función para cerrar sesión: elimina el usuario de localStorage y limpia el estado
  const logout = () => {
    localStorage.removeItem("userUser"); // Se elimina el usuario de localStorage
    setUsuario(null); // Se limpia el estado del usuario
  };

  // Se retorna el usuario y las funciones login y logout para ser utilizados en otros componentes
  return { usuario, login, logout };
};
