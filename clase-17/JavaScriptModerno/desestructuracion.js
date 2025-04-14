// Desestructuracion de Objetos

const superheroe = {
    nombre: "Spiderman",
    superpoder: ["super fuerza", "lanzar telarañas", "trepar paredes"],
    identidad: "Peter Parker",
    edad: 20,
    actor: "Tobey Maguire"
}

const { nombre, actor, superpoder } = superheroe

const [ primerSuperpoder ] = superheroe.superpoder

console.log(primerSuperpoder)

// console.log(`El super heroe ${nombre} es ${actor}`)

// Desestructuracion de un Arreglo
const colores = ["Rojo", "Azul", "Violeta", "Amarillo"]

const [ primero,,, cuarto ] = colores

console.log(cuarto)

