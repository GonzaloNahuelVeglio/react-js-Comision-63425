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


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoBuscado = productos.find(item => item.idItem === id);
            resolve(productoBuscado);
        }, 100)
    })
}

export const getCategoria = (categoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosFiltrados = productos.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
            resolve(productosFiltrados);
        }, 100);
    });
};


// RECETARIO

const recetas = [ 
    {
        "idReceta": "3",
        "nombre": "Pan de Manteca",
        "ingredientes": [
            "500g de harina",
            "250g de manteca",
            "100g de azúcar",
            "10g de sal",
            "Levadura fresca"
        ],
        "pasos": [
            "Mezclar harina, sal y azúcar.",
            "Incorporar la manteca y la levadura disuelta en agua tibia.",
            "Amasar hasta obtener una masa homogénea.",
            "Dejar reposar hasta que la masa duplique su tamaño.",
            "Hornear a 200°C por 20 minutos."
        ],
        "img": "../img/recetas/pan-manteca.webp"
    },
    {
        idReceta: "4",
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
        idReceta: "5",
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
        idReceta: "6",
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
        idReceta: "7",
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


export const getRecetas = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(recetas);
        }, 100);
    });
};

export const getReceta = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const recetaBuscada = recetas.find(receta => receta.idReceta === id);
            resolve(recetaBuscada);
        }, 100);
    });
};

