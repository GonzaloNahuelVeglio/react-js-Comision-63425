# 🛒 Coderhouse - ReactJs - Comisión 63425

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-11.3.1-orange?logo=firebase)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-blueviolet?logo=bootstrap)

Este proyecto es una **tienda online** donde los usuarios pueden comprar distintos artículos de supermercado. Además, incluye una sección de recetas donde, al elegir una receta, pueden adquirir automáticamente todos los productos necesarios para prepararla.

También cuenta con un **panel administrador** al que se accede con las siguientes credenciales:

- **Usuario:** `admin`
- **Contraseña:** `Coder63425`

---

## 🚀 Características Principales

- **Tienda Online:** Compra de artículos de supermercado.
- **Sección de Recetas:** Adquiere automáticamente los ingredientes necesarios para preparar recetas.
- **Panel de Administración:** Gestión de productos y recetas.
- **Carga Masiva en Firebase:** Script para cargar productos y recetas en Firebase.

---

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1:** Biblioteca para la construcción de interfaces de usuario.
- **Vite:** Herramienta de desarrollo rápido y optimización para aplicaciones web modernas.
- **React Router DOM 7.1.3:** Gestión de rutas para la navegación entre páginas.
- **Bootstrap & React-Bootstrap:** Framework para un diseño responsivo y estético.
- **Firebase 11.3.1:** Base de datos en la nube utilizada para almacenar productos y órdenes de compra.
- **SweetAlert2:** Biblioteca para mostrar alertas interactivas y mejorar la experiencia del usuario.
- **Swiper:** Componente para carruseles y slides en la UI.
- **EmailJS:** Servicio para el envío de correos electrónicos sin necesidad de backend propio.

---

## 🎯 Objetivos del Proyecto

- Crear una experiencia intuitiva de compra online con una interfaz fluida y moderna.
- Implementar una sección de recetas que facilite la compra de ingredientes.
- Garantizar una navegación sencilla y eficiente mediante el uso de React Router.
- Gestión de carrito de compras con Context API para mantener el estado global.
- Guardar las órdenes de compra en Firebase, permitiendo a los usuarios recibir su número de orden.

---
 

## 📦 Instalación y Uso

1. **Clonar el repositorio:** 
   git clone https://github.com/GonzaloNahuelVeglio/react-js-Comision-63425

   cd react-js-Comision-63425
2. **Instalar dependencias:**
    npm install
3. **Configurar Firebase:**
    Crear un archivo .env en la raíz con las credenciales de Firebase.
    
    Ejemplo del archivo .env:
      
    VITE_API_KEY=tu_api_key

    VITE_AUTH_DOMAIN=tu_auth_domain
    
    VITE_PROJECT_ID=tu_project_id
    
    VITE_STORAGE_BUCKET=tu_storage_bucket
    
    VITE_MESSAGING_SENDER_ID=tu_sender_id
    
    VITE_APP_ID=tu_app_id

4. **Ejecutar el entorno de desarrollo:**
    npm run dev


📝 **Notas Adicionales**
    El carrito de compras se gestiona con Context API para facilitar la administración global del estado.
    Se utiliza Firebase como base de datos para almacenar productos y órdenes.
    El proyecto sigue convenciones de linting con ESLint, asegurando un código limpio y mantenible.
    Para futuras versiones, se evaluará la implementación de autenticación con Firebase y la persistencia del carrito en localStorage.

🌟 **Próximas Actualizaciones**
    Autenticación con Firebase: Permitir compras autenticadas con usuarios registrados.
    Persistencia del Carrito: Guardar la sesión del carrito en localStorage.

*¡Gracias por tu interés en este proyecto! 🚀*