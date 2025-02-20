import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/config"; 

const productos = [
    {
        "idItem": "1",
        "nombre": "Arroz",
        "categoria": "Almacen", //1
        "precio": 350,
        "img": "../img/arroz.webp",
        "stock": 204,
        "descripcion": "Perfecto para complementar tus comidas."
    },
    {
        "idItem": "2",
        "nombre": "Lentejas",
        "categoria": "Almacen", //1
        "precio": 200,
        "img": "../img/lentejas.webp",
        "stock": 10,
        "descripcion": "Un producto esencial para la cocina."
    },
    {
        "idItem": "3",
        "nombre": "Aceite",
        "categoria": "Almacen", //1
        "precio": 900,
        "img": "../img/aceite.webp",
        "stock": 237,
        "descripcion": "Calidad garantizada para tu hogar."
    },
    {
        "idItem": "4",
        "nombre": "Azúcar",
        "categoria": "Almacen", //1
        "precio": 1020,
        "img": "../img/azucar.webp",
        "stock": 231,
        "descripcion": "El aliado ideal para tus recetas."
    },
    {
        "idItem": "5",
        "nombre": "Pan Molde",
        "categoria": "Panaderia", //2
        "precio": 850,
        "img": "../img/pan_molde.webp",
        "stock": 232,
        "descripcion": "Fresco y delicioso en cada uso."
    },
    {
        "idItem": "6",
        "nombre": "Croissants",
        "categoria": "Panaderia", //2
        "precio": 500,
        "img": "../img/croissants.webp",
        "stock": 188,
        "descripcion": "Diseñado para facilitar tu día a día."
    },
    {
        "idItem": "7",
        "nombre": "Donuts",
        "categoria": "Panaderia", //2
        "precio": 600,
        "img": "../img/donuts.webp",
        "stock": 188,
        "descripcion": "Un clásico indispensable en tu despensa."
    },
    {
        "idItem": "8",
        "nombre": "Pan",
        "categoria": "Panaderia", //2
        "precio": 680,
        "img": "../img/pan.webp",
        "stock": 225,
        "descripcion": "El equilibrio perfecto entre calidad y precio."
    },
    {
        "idItem": "9",
        "nombre": "Papel Higiénico",
        "categoria": "Limpieza", //3
        "precio": 450,
        "img": "../img/papel_higienico.webp",
        "stock": 215,
        "descripcion": "Ideal para satisfacer tus necesidades diarias."
    },
    {
        "idItem": "10",
        "nombre": "Jabón Liquido",
        "categoria": "Limpieza", //3
        "precio": 2100,
        "img": "../img/jabon_liquido.webp",
        "stock": 248,
        "descripcion": "Excelente opción para el cuidado personal."
    },
    {
        "idItem": "11",
        "nombre": "Detergente",
        "categoria": "Limpieza", //3
        "precio": 600,
        "img": "../img/detergente.webp",
        "stock": 226,
        "descripcion": "Práctico y eficiente en cada tarea."
    },
    {
        "idItem": "12",
        "nombre": "Esponjas",
        "categoria": "Limpieza", //3
        "precio": 1000,
        "img": "../img/esponjas.webp",
        "stock": 208,
        "descripcion": "El sabor y la calidad que mereces."
    },
    {
        "idItem": "13",
        "nombre": "Shampoo",
        "categoria": "cuidado-personal", //4
        "precio": 2500,
        "img": "../img/shampoo.webp",
        "stock": 197,
        "descripcion": "Un básico que no puede faltar en casa."
    },
    {
        "idItem": "14",
        "nombre": "Crema Dental",
        "categoria": "cuidado-personal", //4
        "precio": 950,
        "img": "../img/crema_dental.webp",
        "stock": 160,
        "descripcion": "Aporta el toque justo de frescura."
    },
    {
        "idItem": "15",
        "nombre": "Jabón",
        "categoria": "cuidado-personal", //4
        "precio": 600,
        "img": "../img/jabon.webp",
        "stock": 195,
        "descripcion": "Diseñado pensando en tu comodidad."
    },
    {
        "idItem": "16",
        "nombre": "Cuchillas de Afeitar",
        "categoria": "cuidado-personal", //4
        "precio": 650,
        "img": "../img/cuchillas_afeitar.webp",
        "stock": 201,
        "descripcion": "Versátil y funcional para todo momento."
    },
    {
        "idItem": "17",
        "nombre": "Leche Entera",
        "categoria": "lacteos", //5
        "precio": 1100,
        "img": "../img/leche_entera.webp",
        "stock": 172,
        "descripcion": "Un producto confiable y de confianza."
    },
    {
        "idItem": "18",
        "nombre": "Yogur Natural",
        "categoria": "lacteos", //5
        "precio": 490,
        "img": "../img/yogur_natural.webp",
        "stock": 165,
        "descripcion": "Lleno de beneficios para tu familia."
    },
    {
        "idItem": "19",
        "nombre": "Manteca",
        "categoria": "lacteos", //5
        "precio": 350,
        "img": "../img/manteca.webp",
        "stock": 247,
        "descripcion": "La mejor elección para tu bienestar."
    },
    {
        "idItem": "20",
        "nombre": "Queso cremoso",
        "categoria": "lacteos", //5
        "precio": 2500,
        "img": "../img/queso_cremoso.webp",
        "stock": 225,
        "descripcion": "Práctico y de fácil uso en cualquier ocasión."
    }
];


import React from 'react'

const ImportarProductos = async () => {
 try {
     for (let producto of productos) {
       const productoRef = doc(collection(db, "inventario"), producto.idProducto);
       await setDoc(productoRef, producto);
       console.log(`Producto ${producto.nombre} subida correctamente.`);
     }
     console.log("Productos subidas correctamente.");
   } catch (error) {
     console.error("Error subiendo productos:", error);
   }
}

export default ImportarProductos