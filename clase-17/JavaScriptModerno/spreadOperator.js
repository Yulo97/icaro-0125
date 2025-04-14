// SPREAD OPERATOR => ARREGLOS

const numeros = [1, 2, 3]

const numerosClon = [...numeros]

const nuevosNumeros = [...numeros, 4 , 5 , 6 ]

// SPREAD OPERATOR => OBJETOS

const persona = {
    nombre: "Jose",
    edad: 25
}

const personaClon = { ...persona }

const empleado = {
    ...persona,
    antiguedad: "5 años"
}

// Desestructuracion con Spread Operator ARRAY
const colores = ["Rojo", "Azul", "Violeta", "Amarillo"]

const [primero, ...resto]  = colores

console.log(resto)

// Desestructuracion con Spread Operator OBJETOS
const superheroe = {
    nombre: "Spiderman",
    superpoder: ["super fuerza", "lanzar telarañas", "trepar paredes"],
    identidad: "Peter Parker",
    edad: 20,
    actor: "Tobey Maguire"
}

const {nombre, superpoder, ...restoSuperheroe} = superheroe

// console.log(restoSuperheroe)

