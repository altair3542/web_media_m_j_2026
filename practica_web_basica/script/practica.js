console.log("hola, mundo... esto no me gusta.");

// variables

// dato que puede cambiar... una variable es un espacio en memoria donde puedo almacenar la referencia a un valor.

// es una cajita donde puedes guardar algo.

let nombre = "Santiago"

let x = "NN Exotico"

// let me dice que estamos declarando una. variable

// nombre, me esta diciendo que asi se llama la variable

// "santiago" = valor asignado.

// Como declarar una variable en js...

// en JS hay tres formas de definir una variable

// let: para declarar variables cuyo valor puede cambiar posteriormente...

let edad = 20;
console.log(edad)

edad = 21
console.log(edad)


// const: se usa para declarar variables cuyo identificador de memoria no sera reasignado.

const pais = "Colombia"
console.log(pais)

// pais = "mechico"
// console.log(pais)

// var
// existe por razones historicas, pero en formacion moderna de js conviene entenderla sin convertirla en una herramienta principal... tiene comportamientos de alcance y elevacion mas problematicos que sus hermanos let y const.

var ciudad = "medellin"
console.log(ciudad)

// puede aparecer en codigo legado, pero en la practica moderna no se usa

// usar const por defecto

// usar let cuando los datos deben cambiar

// todo esto sirve para escribir codigo mantenible, predecible y seguro...

// Reglas de estilo de JS

// puede tener numeros y letras

// no pueden usar numeros al principio

// no debe usar palabras reservadas del lenguaje

// debe ser semantico el nombre de la variable...

let nombreUsuario = "Ana"
let totalCompra = 150000
let esActivo = true

// convencion de nombrado se llama camelCase

// tipos de datos basicos...

// number: para numeros, pero tambien abarca decimales

let age = 25
let precio = 19.99

// string: cadena de texto
let name = "Valeria"
let mensaje = "Alejate de mi."

// boolean: verdadero o falso

let esMayorDeEdad = true
let tienePermiso = false


// undefined

//representa una variable declarada pero sin valor asignado

let direccion

console.log(direccion)

// objeto
// representa estructuras complejas agrupando datos relacionados, un equivalente en python serian los diccionarios.

const estudiante = {
  nombre: "carlos",
  edad: 19,
  activo: true
}

// verificacion del tipo de dato...
console.log(typeof age)

console.log(typeof name)

console.log(typeof esActivo)

console.log(typeof estudiante)



