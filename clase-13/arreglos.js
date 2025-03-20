// CREACION DE UN ARREGLO

let arregloVacio = []
let peliculas = ["Sueño de Libertad", "Volver al Futuro", "Terminator", "Harry Potter", "Avatar"]


// Acceso a un elemento de arreglo
// console.log(peliculas[3])

// MODIFICACION DE UN ELEMENTO DE UN ARREGLO
let frutas = ["Banana", "Pera", "Sandia"]

// console.log("FRUTAS:", frutas)

frutas[0]  = "Mandarina"

// console.log("FRUTAS:", frutas)

// ITERAR SOBRE UN ARREGLO

for(let i = 0; i < peliculas.length; i++){
    let pelicula = peliculas[i]
    // console.log(pelicula)
}

let numeros = [1, 2]

// push => Agrega un elemnto al final de un arreglo
numeros.push(3)

// unshift => Agrega un elemento al principio de un arreglo
numeros.unshift(0)

// pop => Borra el ultimo elemento de un arreglo
numeros.pop()

// shift => Borra el primero elemento de un arreglo
numeros.shift()

let alumnos = ["victor", "jason", "tony", "ezequiel"]

// indexOf => Devuelve indice del elemento. Si es -1 no existe en el arreglo.
let nombreAlumno = "EZEQUIEL".toLowerCase()
let iAlumno = alumnos.indexOf(nombreAlumno)

if(iAlumno === -1){
    // console.log("El alumno " + nombreAlumno + " no esta")
}else{
    // console.log("El alumno " + alumnos[iAlumno] + " esta presente")
}

// OBSERVACION
// Valores que son interpretados como False= undefined, null, NaN, 0, ""


let marcaDeAutos = ["Toyota", "Chevrolet", "Fiat", "Hyundai", "Peugeot"]

// forEach => Recorre el arreglo elemento por elemento
marcaDeAutos.forEach((marca) => {
    // console.log(marca)
})

let comidas = ["Sandwich", "Milanesa", "Pancho", "Lomito", "Pizzas", "Guiso"]

let inicialesDeComidas = comidas.map((comida) => comida[0])

console.log(inicialesDeComidas)




