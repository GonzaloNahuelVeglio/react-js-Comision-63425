import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

 
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/recetario" element={<RecetasContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />}          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
          <Route path="/receta/:idReceta" element={<RecetaDetail />} />
        </Routes>
        <RecetasContainer />  
         
        <ContactoContainer />
        <ToTop/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
