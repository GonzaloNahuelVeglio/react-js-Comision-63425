import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/config"; 

const recetas = [ 
    {
        idReceta: "1",
        nombre: "Pan de Manteca",
        ingredientes: [
            "500g de harina",
            "250g de manteca",
            "100g de azúcar",
            "10g de sal",
            "Levadura fresca"
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
            "500g de harina",
            "300ml de agua",
            "10g de sal",
            "10g de levadura",
            "Salsa de tomate",
            "Mozzarella"
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
            "500g de fideos",
            "500g de carne picada",
            "1 cebolla",
            "500ml de puré de tomate",
            "Aceite de oliva"
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
            "Tortillas de maíz",
            "500g de carne (pollo, res o cerdo)",
            "Lechuga",
            "Tomate",
            "Queso rallado",
            "Salsa al gusto"
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
            "Tapas para empanadas",
            "500g de carne picada",
            "1 cebolla",
            "Aceitunas verdes",
            "Huevos duros",
            "Especias al gusto"
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
      const recetaRef = doc(collection(db, "recetas"), receta.idReceta);
      await setDoc(recetaRef, receta);
      console.log(`Receta ${receta.nombre} subida correctamente.`);
    }
    console.log("Recetas subidas correctamente.");
  } catch (error) {
    console.error("Error subiendo recetas:", error);
  }
};

export default ImportarRecetas;
