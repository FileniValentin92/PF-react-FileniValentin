# E-commerce de Electrónica

Este proyecto es un sitio web de comercio electrónico de productos de electrónica, desarrollado con React y utilizando Firebase como base de datos.

## Funcionalidades

- Los usuarios pueden ver una lista de productos disponibles.
- Cada producto muestra su nombre, imagen, precio y disponibilidad de stock.
- Los usuarios pueden ver los detalles de un producto específico.
- Los usuarios pueden agregar productos al carrito de compras.
- Los usuarios pueden realizar el proceso de compra y finalizar la orden.
- Los usuarios pueden ver su historial de compras.

## Tecnologías utilizadas

- React: Biblioteca de JavaScript utilizada para construir la interfaz de usuario del sitio web.
- Firebase: Plataforma de desarrollo de aplicaciones móviles y web que proporciona una base de datos en tiempo real y servicios de autenticación.
- Bootstrap: Framework CSS utilizado para el diseño y la maquetación de los componentes visuales.
- React Router: Biblioteca utilizada para la gestión de las rutas y la navegación dentro del sitio web.
- Toastify: Biblioteca utilizada para mostrar notificaciones de forma elegante.
- Otras bibliotecas y herramientas adicionales utilizadas según sea necesario.

## Estructura del proyecto

El proyecto sigue una estructura de directorios común utilizada en aplicaciones React. A continuación, se muestra una descripción básica de los principales directorios y archivos:

- `src/`: Contiene el código fuente del proyecto.
  - `components/`: Contiene los componentes React utilizados en el sitio web.
  - `context/`: Contiene los contextos React utilizados para el manejo del carrito de compras y otros estados globales.
  - `firebase/`: Contiene la configuración y utilidades relacionadas con Firebase.
  - `pages/`: Contiene las páginas principales del sitio web.
  - `App.jsx`: Componente principal que contiene la estructura de la aplicación y las rutas.
  - Otros archivos y directorios según sea necesario.

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio o descarga los archivos del proyecto.

2. Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [https://nodejs.org](https://nodejs.org).

3. Abre una terminal en la carpeta raíz del proyecto.

4. Ejecuta los siguientes comandos para instalar las dependencias de React, Bootstrap, Toastify y Firebase:

   ```bash
   npm install react react-dom react-bootstrap bootstrap react-toastify firebase
