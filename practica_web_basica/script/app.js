const titulo = document.getElementById("titulo");
const mensajePrincipal = document.getElementById("mensajePrincipal");
const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const btnCambiarClase = document.getElementById("btnCambiarClase");
const btnCrearElemento = document.getElementById("btnCrearElemento");
const btnEliminarUltimo = document.getElementById("btnEliminarUltimo");
const listaTareas = document.getElementById("listaTareas");
const formularioRegistro = document.getElementById("formularioRegistro")
const nombreInput = document.getElementById("nombre")
const salidaFormulario = document.getElementById("salidaFormulario")

const mensajes = document.getElementsByClassName("mensaje")
// no devuelve un nodo unico, devuelve una coleccion de nodos que comparten la misma clase, no debemos usarlo de la misma manera en la que usamos el getElementById

// querySelector
// const titulo = document.querySelector("#titulo")
// const mensaje = document.querySelectorAll(".mensaje")
// const primerBoton = document.querySelectorAll("button")

btnCambiarTexto.addEventListener("click", () => {
  titulo.textContent = "El DOM ha sido manipulado correctamente";
  mensajePrincipal.textContent = "Hola, Mundo";
  mensajePrincipal.innerHTML = "<strong>Holiiiiiiiii.</strong>"
});

titulo.style.color = "teal"
titulo.style.padding = "40px"

btnCambiarClase.addEventListener("click", () => {
  mensajePrincipal.classList.toggle("resaltado")
  mensajePrincipal.classList.toggle("activo")
})

btnCrearElemento.addEventListener("click", () => {
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = "nueva tarea creada de forma dinamica"
  listaTareas.appendChild(nuevoItem)
})

btnEliminarUltimo.addEventListener("click", () => {
  const ultimoElemento = listaTareas.lastElementChild;

  if (ultimoElemento) {
    ultimoElemento.remove();
  }
});

formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim()

  if (nombre === "") {
    salidaFormulario.textContet
  }
})
