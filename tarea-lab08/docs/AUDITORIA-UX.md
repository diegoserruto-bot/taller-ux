# Auditoría UX – Lab 08 DOM

## 1. Cinco heurísticas

| Heurística                     | Problema                                             | Solución                                   |
| ------------------------------ | ---------------------------------------------------- | ------------------------------------------ |
| Visibilidad del estado         | No aparece un mensaje al agregar un producto.        | Mostrar un mensaje de confirmación.        |
| Coincidencia con el mundo real | Los títulos dicen «Ejercicio 2», «Ejercicio 3», etc. | Usar títulos que expliquen cada función.   |
| Control y libertad             | No se pueden retirar productos del carrito.          | Agregar una opción para retirar productos. |
| Consistencia y estándares      | Los campos no tienen etiquetas visibles.             | Añadir etiquetas a cada campo.             |
| Prevención de errores          | Se pueden agregar productos sin datos válidos.       | Validar los campos antes de agregar.       |

## 2. Leyes de diseño

- **Fitts:** aumentar el tamaño de los botones para facilitar su uso.
- **Hick:** separar las funciones en secciones para encontrarlas más rápido.
- **Miller:** agrupar los campos, los productos y el total para organizar mejor la información.

## 3. Accesibilidad

- Puntaje de Lighthouse de 90 o más.
- Etiquetas en todos los campos.
- Texto alternativo en las imágenes.
- Foco visible al usar el teclado.
- Contraste mínimo de 4.5:1.
- Botones de al menos 44 px de alto.
