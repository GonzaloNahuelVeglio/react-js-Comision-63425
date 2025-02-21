import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/config"; 

const productos = [
    {
        idItem: "1",
        nombre: "Arroz",
        idCat: "1",
        destacado: false,
        precio: 350,
        img: "arroz.webp",
        stock: 204,
        descripcion: "Perfecto para complementar tus comidas."
    },
    {
        idItem: "2",
        nombre: "Lentejas",
        idCat: "1",
        destacado: false,
        precio: 200,
        img: "lentejas.webp",
        stock: 10,
        descripcion: "Un producto esencial para la cocina."
    },
    {
        idItem: "3",
        nombre: "Aceite",
        idCat: "1",
        destacado: false,
        precio: 900,
        img: "aceite.webp",
        stock: 237,
        descripcion: "Calidad garantizada para tu hogar."
    },
    {
        idItem: "4",
        nombre: "Azúcar",
        idCat: "1",
        destacado: false,
        precio: 1020,
        img: "azucar.webp",
        stock: 231,
        descripcion: "El aliado ideal para tus recetas."
    },
    {
        idItem: "5",
        nombre: "Pan Molde",
        idCat: "2",
        destacado: false,
        precio: 850,
        img: "pan_molde.webp",
        stock: 232,
        descripcion: "Fresco y delicioso en cada uso."
    },
    {
        idItem: "6",
        nombre: "Croissants",
        idCat: "2",
        destacado: false,
        precio: 500,
        img: "croissants.webp",
        stock: 188,
        descripcion: "Diseñado para facilitar tu día a día."
    },
    {
        idItem: "7",
        nombre: "Donuts",
        idCat: "2",
        destacado: false,
        precio: 600,
        img: "donuts.webp",
        stock: 188,
        descripcion: "Un clásico indispensable en tu despensa."
    },
    {
        idItem: "8",
        nombre: "Pan",
        idCat: "2",
        destacado: false,
        precio: 680,
        img: "pan.webp",
        stock: 225,
        descripcion: "El equilibrio perfecto entre calidad y precio."
    },
    {
        idItem: "9",
        nombre: "Papel Higiénico",
        idCat: "3",
        destacado: false,
        precio: 450,
        img: "papel_higienico.webp",
        stock: 215,
        descripcion: "Ideal para satisfacer tus necesidades diarias."
    },
    {
        idItem: "10",
        nombre: "Jabón Liquido",
        idCat: "3",
        destacado: false,
        precio: 2100,
        img: "jabon_liquido.webp",
        stock: 248,
        descripcion: "Excelente opción para el cuidado personal."
    },
    {
        idItem: "11",
        nombre: "Detergente",
        idCat: "3",
        destacado: false,
        precio: 600,
        img: "detergente.webp",
        stock: 226,
        descripcion: "Práctico y eficiente en cada tarea."
    },
    {
        idItem: "12",
        nombre: "Esponjas",
        idCat: "3",
        destacado: false,
        precio: 1000,
        img: "esponjas.webp",
        stock: 208,
        descripcion: "El sabor y la calidad que mereces."
    },
    {
        idItem: "13",
        nombre: "Shampoo",
        idCat: "4",
        destacado: false,
        precio: 2500,
        img: "shampoo.webp",
        stock: 197,
        descripcion: "Un básico que no puede faltar en casa."
    },
    {
        idItem: "14",
        nombre: "Crema Dental",
        idCat: "4",
        destacado: false,
        precio: 950,
        img: "crema_dental.webp",
        stock: 160,
        descripcion: "Aporta el toque justo de frescura."
    },
    {
        idItem: "15",
        nombre: "Jabón",
        idCat: "4",
        destacado: false,
        precio: 600,
        img: "jabon.webp",
        stock: 195,
        descripcion: "Diseñado pensando en tu comodidad."
    },
    {
        idItem: "16",
        nombre: "Cuchillas de Afeitar",
        idCat: "4",
        destacado: false,
        precio: 650,
        img: "cuchillas_afeitar.webp",
        stock: 201,
        descripcion: "Versátil y funcional para todo momento."
    },
    {
        idItem: "17",
        nombre: "Leche Entera",
        idCat: "5",
        destacado: false,
        precio: 1100,
        img: "leche_entera.webp",
        stock: 172,
        descripcion: "Un producto confiable y de confianza."
    },
    {
        idItem: "18",
        nombre: "Yogur Natural",
        idCat: "5",
        destacado: false,
        precio: 490,
        img: "yogur_natural.webp",
        stock: 165,
        descripcion: "Lleno de beneficios para tu familia."
    },
    {
        idItem: "19",
        nombre: "Manteca",
        idCat: "5",
        destacado: false,
        precio: 350,
        img: "manteca.webp",
        stock: 247,
        descripcion: "La mejor elección para tu bienestar."
    },
    {
        idItem: "20",
        nombre: "Queso cremoso",
        idCat: "5",
        destacado: false,
        precio: 2500,
        img: "queso_cremoso.webp",
        stock: 225,
        descripcion: "Práctico y de fácil uso en cualquier ocasión."
    },
    {
        idItem: "21",
        nombre: "Papa",
        idCat: "6",
        destacado: false,
        precio: 1000,
        img: "papa.webp",
        stock: 225,
        descripcion: "Tuberculo ideal para unas fritangas."
    },
    {
        idItem: "22",
        nombre: "Cebolla",
        idCat: "6",
        destacado: false,
        precio: 900,
        img: "cebolla.webp",
        stock: 225,
        descripcion: "Cebolla que no te hace llorar."
    },
    {
        idItem: "23",
        nombre: "Manzana",
        idCat: "6",
        destacado: false,
        precio: 1500,
        img: "manzana.webp",
        stock: 225,
        descripcion: "Práctico y de fácil uso en cualquier ocasión."
    },
    {
        idItem: "24",
        nombre: "Morron",
        idCat: "6",
        destacado: false,
        precio: 2500,
        img: "morron.webp",
        stock: 225,
        descripcion: "Práctico y de fácil uso en cualquier ocasión."
    },{
        idItem: "25",
        nombre: "Harina",
        idCat: "1",
        destacado: false,
        precio: 3609,
        img: "harina.webp",
        stock: 223,
        descripcion: "Harina, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "26",
        nombre: "Sal",
        idCat: "1",
        destacado: false,
        precio: 2226,
        img: "sal.webp",
        stock: 400,
        descripcion: "Sal, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "27",
        nombre: "Levadura",
        idCat: "1",
        destacado: false,
        precio: 2778,
        img: "levadura.webp",
        stock: 87,
        descripcion: "Levadura, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "28",
        nombre: "Puré de tomate",
        idCat: "1",
        destacado: false,
        precio: 4679,
        img: "pure_de_tomate.webp",
        stock: 132,
        descripcion: "Puré de tomate, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "29",
        nombre: "Fideos",
        idCat: "1",
        destacado: false,
        precio: 624,
        img: "fideos.webp",
        stock: 282,
        descripcion: "Fideos, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "30",
        nombre: "Lechuga",
        idCat: "1",
        destacado: false,
        precio: 1345,
        img: "lechuga.webp",
        stock: 176,
        descripcion: "Lechuga, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "31",
        nombre: "Tomate",
        idCat: "1",
        destacado: false,
        precio: 2438,
        img: "tomate.webp",
        stock: 321,
        descripcion: "Tomate, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "32",
        nombre: "Tapas para empanadas",
        idCat: "1",
        destacado: false,
        precio: 3102,
        img: "tapas_para_empanadas.webp",
        stock: 211,
        descripcion: "Tapas para empanadas, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "33",
        nombre: "Huevos",
        idCat: "6",
        destacado: false,
        precio: 1700,
        img: "huevos.webp",
        stock: 259,
        descripcion: "Huevos, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "34",
        nombre: "Carne picada",
        idCat: "1",
        destacado: false,
        precio: 3999,
        img: "carne_picada.webp",
        stock: 102,
        descripcion: "Carne picada, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "35",
        nombre: "Mozzarella",
        idCat: "1",
        destacado: false,
        precio: 4200,
        img: "mozzarella.webp",
        stock: 312,
        descripcion: "Mozzarella, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "36",
        nombre: "Aceite de oliva",
        idCat: "1",
        destacado: false,
        precio: 3890,
        img: "aceite_de_oliva.webp",
        stock: 145,
        descripcion: "Aceite de oliva, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "37",
        nombre: "Queso rallado",
        idCat: "1",
        destacado: false,
        precio: 2895,
        img: "queso_rallado.webp",
        stock: 290,
        descripcion: "Queso rallado, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "38",
        nombre: "Tortillas de maíz",
        idCat: "1",
        destacado: false,
        precio: 1650,
        img: "tortillas_de_maiz.webp",
        stock: 210,
        descripcion: "Tortillas de maíz, ideal para múltiples preparaciones culinarias."
    },
    {
        idItem: "39",
        nombre: "Aceitunas verdes",
        idCat: "1",
        destacado: false,
        precio: 2700,
        img: "aceitunas_verdes.webp",
        stock: 180,
        descripcion: "Aceitunas verdes, ideal para múltiples preparaciones culinarias."
    }
    
];

 

const ImportarProductos = async () => {
    try {
        const promesas = productos.map(async (producto) => {
            const productoRef = doc(db, "inventario", producto.idItem); // ID correcto
            await setDoc(productoRef, producto);
            console.log(`Producto ${producto.nombre} subido correctamente.`);
        });

        await Promise.all(promesas); // Espera a que todas las promesas terminen
        console.log("Todos los productos fueron subidos correctamente.");
    } catch (error) {
        console.error("Error subiendo productos:", error);
    }
}

export default ImportarProductos;