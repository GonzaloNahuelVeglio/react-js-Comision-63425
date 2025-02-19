import { useState, useEffect } from "react";

export const useAuth = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("userUser");
    setUsuario(user);
  }, []);

  const login = (user) => {
    localStorage.setItem("userUser", user);
    setUsuario(user);
  };

  const logout = () => {
    localStorage.removeItem("userUser");
    setUsuario(null);
  };

  return { usuario, login, logout };
};


