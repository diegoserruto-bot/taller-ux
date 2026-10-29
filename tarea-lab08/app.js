// Laboratorio 08: DOM, eventos y objetos

console.log("app.js cargado");

// Ejercicio 2: seleccionar y modificar el DOM

const titulo = document.querySelector("#titulo");
titulo.textContent = "Hola TECSUP";
titulo.style.color = "blue";

const mensaje = document.querySelector(".mensaje");
mensaje.classList.add("destacado");

const lista = document.querySelector("#lista");
const nuevo = document.createElement("li");
nuevo.textContent = "JavaScript";
lista.appendChild(nuevo);

// Ejercicio 3: evento click

const btnSumar = document.querySelector("#btnSumar");
const btnReiniciar = document.querySelector("#btnReiniciar");
const contador = document.querySelector("#contador");
const mensajeContador = document.querySelector("#mensajeContador");

let clics = 0;

btnSumar.addEventListener("click", () => {
  clics = clics + 1;
  contador.textContent = clics;
  mensajeContador.textContent = "Contador actualizado.";
});

btnReiniciar.addEventListener("click", () => {
  clics = 0;
  contador.textContent = clics;
  mensajeContador.textContent = "Contador reiniciado.";
});

// Ejercicio 4: input y submit

const nombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");
const formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const resultado = document.querySelector("#resultado");

nombre.addEventListener("input", () => {
  if (nombre.value.trim() === "") {
    saludo.textContent = "Hola, ...";
  } else {
    saludo.textContent = "Hola, " + nombre.value;
  }
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (correo.value.trim() === "") {
    resultado.textContent = "Escribe tu correo.";
    resultado.className = "mensaje error";
    return;
  }

  resultado.textContent = "Correo válido: " + correo.value;
  resultado.className = "mensaje exito";
  formulario.reset();
});

// Ejercicio 5: clases y objetos

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  conDescuento(pct) {
    return this.precio * (1 - pct);
  }

  descripcion() {
    return this.nombre + " - S/ " + this.precio.toFixed(2);
  }
}

const laptop = new Producto("Laptop", 2500);
const mouse = new Producto("Mouse", 45);
const teclado = new Producto("Teclado", 120);
const monitor = new Producto("Monitor", 680);
const productos = [laptop, mouse, teclado, monitor];

const listaProductos = document.querySelector("#productos");

productos.forEach((producto) => {
  const elemento = document.createElement("li");
  elemento.textContent = producto.descripcion();
  listaProductos.appendChild(elemento);
});

// Ejercicio 6: DOM, eventos y objetos juntos

class Carrito {
  constructor() {
    this.items = [];
  }

  agregar(producto) {
    this.items.push(producto);
  }

  retirar(indice) {
    this.items.splice(indice, 1);
  }

  total() {
    let suma = 0;

    this.items.forEach((producto) => {
      suma = suma + producto.precio;
    });

    return suma;
  }
}

const carrito = new Carrito();
const formProducto = document.querySelector("#formProducto");
const prodNombre = document.querySelector("#prodNombre");
const prodPrecio = document.querySelector("#prodPrecio");
const listaCarrito = document.querySelector("#carrito");
const total = document.querySelector("#total");
const mensajeCarrito = document.querySelector("#mensajeCarrito");

function mostrarCarrito() {
  listaCarrito.innerHTML = "";

  carrito.items.forEach((producto, indice) => {
    const elemento = document.createElement("li");
    elemento.textContent = producto.descripcion() + " ";

    const botonRetirar = document.createElement("button");
    botonRetirar.type = "button";
    botonRetirar.textContent = "Retirar";

    botonRetirar.addEventListener("click", () => {
      if (confirm("¿Quieres retirar este producto?")) {
        carrito.retirar(indice);
        mostrarCarrito();
        mensajeCarrito.textContent = "Producto retirado.";
        mensajeCarrito.className = "mensaje exito";
      }
    });

    elemento.appendChild(botonRetirar);
    listaCarrito.appendChild(elemento);
  });

  total.textContent = carrito.total().toFixed(2);
}

formProducto.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreProducto = prodNombre.value.trim();
  const precioProducto = Number(prodPrecio.value);

  if (
    nombreProducto === "" ||
    prodPrecio.value === "" ||
    !Number.isFinite(precioProducto) ||
    precioProducto <= 0
  ) {
    mensajeCarrito.textContent =
      "Ingresa un nombre y un precio mayor que cero.";
    mensajeCarrito.className = "mensaje error";
    return;
  }

  const producto = new Producto(nombreProducto, precioProducto);
  carrito.agregar(producto);

  mostrarCarrito();
  mensajeCarrito.textContent = "Producto agregado al carrito.";
  mensajeCarrito.className = "mensaje exito";

  formProducto.reset();
});
