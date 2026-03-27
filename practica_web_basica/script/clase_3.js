const nombreCurso = "Web Media";
let totalEstudiantes = 28;

totalEstudiantes = totalEstudiantes + 1

console.log(nombreCurso, totalEstudiantes)

//no solamente hay que entender que let es para un valor que cambia y const no debe cambiar sino que const es la estabilidad para marcar una refernecia y let se usa para variaciones controladas. esto sirve para que el codigo sea mas predecible.


// funciones flecha avanzadas

// ahora debe entenderse que las funciones de tipo flecha son una herramienta de control mucho mejor para callbacks, transformaciones y logica breve


const sumar = (a, b) => a + b

const formatearUsuario = (nombre, rol) => {
  return `Usuario ${nombre} | Rol: ${rol}`
}

console.log(sumar(4, 6))
console.log(formatearUsuario("Laura", "Estudiante"))

// se pueden leer desde 3 puntos de vista:

// funcion flecha compacta como retorno implicito

// funcion flecha con bloque



// template literals.

// resuelven un problema clasico de js, las concatenaciones largas y poco legibles...

const estudiante = "Santiago Gulloso"
const nota = 2.9

const mensaje = `El estudiante ${estudiante} obtuvo una nota final de ${nota}`

console.log(mensaje)

// la utilidad real es amplia porque luego sirve para:

// mensajes dinamicos
// construir html
// trazas de depuracion
// presentacion de resultados.

// desestructuracion

// desestructuracion permite extraer objetos y arreglos de forma mas amplia

const usuario = {
  id: 15,
  nombre: "Leidy Alexandra",
  correo: "canciondealexisyfidoconz@z.com"
}
console.log(usuario)

const { nombre, correo } = usuario
console.log(nombre)
console.log(correo)


const notas = [3.8, 4.1, 4.9]
const [primera, segunda, tercera] = notas
console.log(primera, segunda, tercera)
console.log(notas[0], notas[1], notas[2])


// Este tema es muy importante porque cuando se empieza a consumir JSON, la destructuración vuelve mucho más clara la lectura de respuestas remotas.


// Rest y Spread

// REST
// agrupa valores restantes

const registrarNotas = (...notas) => {
  return notas.reduce((acum, nota) => acum + nota, 0)
}

console.log(registrarNotas(4.0, 3.5, 4.8))

// Spread
//expande las estructuras

const grupoA = ["ana", "luis"]
const grupoB = ["Eva", "Mateo"]
const cursoCompleto = [...grupoA, ...grupoB]

console.log(cursoCompleto)
