import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import RecetasContainer from "./components/RecetasContainer/RecetasContainer"; 
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <NavBar />
      <div>
        <ItemListContainer greeting="Felices Fiestas" />
        <ProductList />
        <RecetasContainer /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
