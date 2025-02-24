// Este script lo genere unicamente para facilitar la carga de datos de manera masiva a Firebase

import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/config"; 

const recetas = [
    {
        idReceta: "1",
        nombre: "Pan de Manteca",
        ingredientes: [
            { producto: "Harina", cantidad: "500g" },
            { producto: "Manteca", cantidad: "250g" },
            { producto: "Azúcar", cantidad: "100g" },
            { producto: "Sal", cantidad: "10g" },
            { producto: "Levadura", cantidad: "1 sobre" }
        ],
        pasos: [
            "Mezclar harina, sal y azúcar.",
            "Incorporar la manteca y la levadura disuelta en agua tibia.",
            "Amasar hasta obtener una masa homogénea.",
            "Dejar reposar hasta que la masa duplique su tamaño.",
            "Hornear a 200°C por 20 minutos."
        ],
        img: "../img/recetas/pan-manteca.webp"
    },
    {
        idReceta: "2",
        nombre: "Pizza",
        ingredientes: [
            { producto: "Harina", cantidad: "500g" },
            { producto: "Agua", cantidad: "300ml" },
            { producto: "Sal", cantidad: "10g" },
            { producto: "Levadura", cantidad: "1 sobre" },
            { producto: "Puré de tomate", cantidad: "Al gusto" },
            { producto: "Mozzarella", cantidad: "Al gusto" }
        ],
        pasos: [
            "Mezclar la harina con la sal y la levadura disuelta en agua tibia.",
            "Amasar hasta obtener una masa elástica.",
            "Dejar reposar 1 hora.",
            "Estirar la masa, agregar salsa de tomate y queso.",
            "Hornear a 220°C por 15 minutos."
        ],
        img: "../img/recetas/pizza.webp"
    },
    {
        idReceta: "3",
        nombre: "Fideos con Tuco",
        ingredientes: [
            { producto: "Fideos", cantidad: "500g" },
            { producto: "Carne picada", cantidad: "500g" },
            { producto: "Cebolla", cantidad: "1 unidad" },
            { producto: "Puré de tomate", cantidad: "500ml" },
            { producto: "Aceite de oliva", cantidad: "Al gusto" }
        ],
        pasos: [
            "Cocinar los fideos en agua con sal.",
            "Sofreír la cebolla picada en aceite.",
            "Añadir la carne y cocinar hasta dorar.",
            "Incorporar el puré de tomate y cocinar 10 minutos.",
            "Servir los fideos con el tuco por encima."
        ],
        img: "../img/recetas/fideos-tuco.webp"
    },
    {
        idReceta: "4",
        nombre: "Tacos",
        ingredientes: [
            { producto: "Tortillas de maíz", cantidad: "Al gusto" },
            { producto: "Carne (pollo, res o cerdo)", cantidad: "500g" },
            { producto: "Lechuga", cantidad: "Al gusto" },
            { producto: "Tomate", cantidad: "Al gusto" },
            { producto: "Queso rallado", cantidad: "Al gusto" },
            { producto: "Salsa", cantidad: "Al gusto" }
        ],
        pasos: [
            "Cocinar la carne con especias al gusto.",
            "Calentar las tortillas en una sartén.",
            "Colocar la carne en las tortillas.",
            "Agregar lechuga, tomate, queso y salsa al gusto.",
            "Doblar y servir."
        ],
        img: "../img/recetas/tacos.webp"
    },
    {
        idReceta: "5",
        nombre: "Empanadas",
        ingredientes: [
            { producto: "Tapas para empanadas", cantidad: "Al gusto" },
            { producto: "Carne picada", cantidad: "500g" },
            { producto: "Cebolla", cantidad: "1 unidad" },
            { producto: "Aceitunas verdes", cantidad: "Al gusto" },
            { producto: "Huevos", cantidad: "2 unidades" },
            { producto: "Especias", cantidad: "Al gusto" }
        ],
        pasos: [
            "Sofreír la cebolla y añadir la carne.",
            "Cocinar hasta que la carne esté dorada.",
            "Agregar las aceitunas picadas y los huevos duros.",
            "Colocar el relleno en las tapas y cerrar.",
            "Hornear a 200°C por 15 minutos."
        ],
        img: "../img/recetas/empanadas.webp"
    }
];


const ImportarRecetas = async () => {
    try {
      for (let receta of recetas) {
        const recetaRef = doc(db, "recetas", receta.idReceta);
        await setDoc(recetaRef, receta);
        console.log(`Receta ${receta.nombre} subida correctamente.`);
      }
      console.log("Todas las recetas fueron subidas correctamente.");
    } catch (error) {
      console.error("Error subiendo recetas:", error);
    }
  };
  
  export default ImportarRecetas;
