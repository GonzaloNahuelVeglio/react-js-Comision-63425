import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import RecetasContainer from "./components/RecetasContainer/RecetasContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import RecetaDetail from "./components/RecetaDetail/RecetaDetail";
import ContactoContainer from "./components/ContactoContainer/ContactoContainer";
import ToTop from "./components/ToTop/ToTop";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { CarritoProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} /> 
          <Route path="/" element={<WithBanner><ItemListContainer /></WithBanner>} /> 
          <Route path="/categoria/:idCategoria" element={<WithBanner><ItemListContainer /></WithBanner>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/receta/:idReceta" element={<WithBanner><RecetaDetail /></WithBanner>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
          <Route path="/contacto" element={<ContactoContainer />} />
          <Route path="/recetario" element={<RecetasContainer />} />
        </Routes>
        
        <ToTop />
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}

// Nuevo componente que usa useLocation() dentro de Routes
function WithBanner({ children }) {
  const location = useLocation();
  const ocultarBanner = location.pathname.includes("/item/") || location.pathname === "/cart" || location.pathname === "/checkout";

  return (
    <>
      {!ocultarBanner && <Banner />}
      {children}
    </>
  );
}

export default App;
