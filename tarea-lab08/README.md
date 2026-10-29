# Laboratorio 08 - DOM, eventos y objetos

## 1. Descripción

Esta tarea consiste en mejorar la página del Laboratorio 08 aplicando cambios de diseño, usabilidad y accesibilidad. Se mantienen los ejercicios originales y se mejora la forma en que el usuario interactúa con la página.

## 2. Cinco heurísticas de usabilidad

| Heurística                                        | Problema encontrado en la página original                                                                                        | Mejora realmente aplicada                                                                                                                                                                              |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Visibilidad del estado del sistema**            | No se mostraban mensajes claros al realizar acciones como agregar o retirar productos.                                           | Se añadieron mensajes de confirmación para el contador y para agregar o retirar productos del carrito.                                                                                                 |
| **Coincidencia entre el sistema y el mundo real** | Los campos de entrada solo tenían textos de ejemplo dentro de ellos.                                                             | Se agregaron etiquetas visibles como «Nombre», «Correo electrónico» y «Nombre del producto» para identificar los campos.                                                                               |
| **Control y libertad del usuario**                | No existía una opción para retirar productos del carrito después de agregarlos.                                                  | Se agregó un botón «Retirar» para eliminar productos del carrito, con una confirmación antes de hacerlo.                                                                                               |
| **Consistencia y estándares**                     | La página tenía estilos básicos y los campos no contaban con etiquetas visibles.                                                 | Se unificaron los estilos de los botones y campos, se organizaron los ejercicios en secciones y se agregaron etiquetas a los campos.                                                                   |
| **Prevención de errores**                         | Los campos del formulario no tenían etiquetas visibles y el formulario de productos no controlaba los datos antes de agregarlos. | Se añadieron los atributos `required`, `min="0.01"` y `step="0.01"` en los campos del producto, además de una validación en JavaScript para impedir nombres vacíos y precios menores o iguales a cero. |

## 3. Leyes de diseño aplicadas

- **Ley de Fitts:** se aumentó el tamaño de los botones para facilitar su selección.
- **Ley de Hick:** se organizaron las funciones en secciones para que sea más fácil encontrarlas.
- **Ley de Miller:** se agruparon los campos, los productos y el total para presentar la información de forma ordenada.

## 4. Mejoras de diseño y accesibilidad

- Se organizó el contenido en tarjetas.
- Se agregó una imagen relacionada con la programación web.
- Se definieron variables de colores en CSS mediante `:root`.
- Se mantuvo un solo título principal `h1`.
- Se agregaron etiquetas visibles a los campos.
- Se incluyó texto alternativo para la imagen.
- Se agregó un indicador de foco visible al navegar con el teclado.
- Se utilizaron colores de texto y fondo con contraste adecuado.
- Se estableció una altura mínima de 44 px para los botones.
- Se agregaron mensajes para informar al usuario sobre las acciones realizadas.
- Se validan los datos antes de agregar productos al carrito.

## 5. Archivos del proyecto

- `index.html`: contiene la estructura de la página.
- `estilos.css`: contiene los estilos y el diseño.
- `app.js`: contiene las funciones, los eventos y la lógica del carrito.
- `docs/AUDITORIA-UX.md`: contiene la auditoría de usabilidad.
- `img/programacion.png`: contiene la imagen principal.

## 6. Cómo ejecutar el proyecto

Abrir el archivo `index.html` en un navegador web para visualizar la página y probar sus funciones.
