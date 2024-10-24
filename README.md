# TravelTales

TravelTales es una aplicación web que permite a los usuarios explorar diversos destinos turísticos, hoteles y restaurantes. Los usuarios pueden crear cuentas, iniciar sesión y guardar sus lugares favoritos.

## Características

- Explorar destinos, hoteles y restaurantes
- Autenticación de usuarios (registro e inicio de sesión)
- Guardar lugares favoritos
- Panel de administración para agregar nuevos elementos
- Diseño responsivo

## Estructura del Proyecto

El proyecto consta de tres archivos principales:

1. `index.html`: La estructura HTML principal de la aplicación
2. `js/main.js`: Contiene toda la funcionalidad JavaScript
3. `css/styles.css`: Proporciona el estilo para la aplicación

### Detalles de los archivos

#### index.html

Este archivo contiene la estructura básica de la página web, incluyendo:

- Header con logo y botones de registro/inicio de sesión
- Barra de navegación con pestañas para destinos, hoteles, restaurantes y favoritos
- Barra de búsqueda
- Contenedor principal para mostrar el contenido dinámico
- Modales para registro, inicio de sesión y detalles de elementos
- Footer con enlace al repositorio de GitHub

#### js/main.js

Este archivo JavaScript contiene toda la lógica de la aplicación, incluyendo:

- Arrays de destinos, hoteles, restaurantes y usuarios
- Funciones para mostrar diferentes secciones de contenido
- Funcionalidad de búsqueda y filtrado
- Sistema de autenticación (registro e inicio de sesión)
- Gestión de favoritos
- Panel de administración para agregar nuevos elementos
- Funciones para mostrar detalles de elementos en un modal

Características principales:
- Carga dinámica de contenido basada en la sección seleccionada
- Filtrado de favoritos por tipo y destino
- Validación de formularios de registro e inicio de sesión
- Persistencia de sesión del usuario actual

#### css/styles.css

Este archivo contiene todos los estilos de la aplicación, incluyendo:

- Diseño responsivo
- Estilos para el header, nav, y footer
- Diseño de tarjetas para mostrar destinos, hoteles y restaurantes
- Estilos para modales y formularios
- Animaciones para botones y elementos interactivos

Características destacadas:
- Uso de flexbox para layouts responsivos
- Animaciones en hover para mejorar la interactividad
- Estilos personalizados para botones y elementos de formulario

## Configuración

1. Clona el repositorio o descarga los archivos del proyecto.
2. Abre el archivo `index.html` en un navegador web para ejecutar la aplicación localmente.

## Uso

### Para Usuarios

1. Navega por destinos, hoteles y restaurantes usando el menú de navegación.
2. Utiliza la barra de búsqueda para encontrar elementos específicos.
3. Regístrate para obtener una cuenta o inicia sesión para guardar favoritos.
4. Haz clic en los elementos para ver más detalles.
5. En la sección de favoritos, puedes filtrar por tipo de elemento y destino.

### Para Administradores

1. Inicia sesión con credenciales de administrador.
2. Accede al panel de administración para agregar nuevos destinos, hoteles o restaurantes.
3. Completa el formulario con la información del nuevo elemento para agregarlo a la base de datos.

## Desarrollo

Este proyecto utiliza JavaScript vanilla, HTML y CSS. Para modificar o extender la aplicación:

1. Edita `index.html` para cambiar la estructura de la página.
2. Modifica `js/main.js` para alterar la funcionalidad de la aplicación.
3. Actualiza `css/styles.css` para cambiar el estilo y el diseño.

### Áreas de Mejora Potencial

- Implementar una base de datos real para almacenar usuarios y contenido.
- Añadir más funcionalidades como reseñas de usuarios o un sistema de reservas.
- Mejorar la seguridad de la autenticación de usuarios.
- Implementar un sistema de caché para mejorar el rendimiento.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).