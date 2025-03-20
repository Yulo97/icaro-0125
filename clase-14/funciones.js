// CREACION DE UNA FUNCION
function saludar() {
    console.log("Hola desde una Funcion")
}

// LLAMADA A UNA FUNCION
// saludar()

// VARIABLE CON SCOPE LOCAL
function despedir(){
    let nombre = "Pepe" // <= Esta variable no podra utilizarse fuera de la funcion
    console.log("Adios", nombre)
}

// PARAMETROS DE UNA FUNCION
function suma(num1, num2 = 5) {
    if(typeof num1 === "string" || typeof num2 === "string") { // Valida que el numero sea correcto
        return "Debes ingresar un numero valido"
    }

    return num1 + num2
}

let resultado = suma(3, 3)
// console.log(resultado)

function mostrarResultado(num1, num2) {
    const sumaTotal = suma(num1, num2)
    console.log("La suma total es", sumaTotal)
}

// mostrarResultado(3, 25)


// FUNCION NORMAL
function funcionNormal(parametro) {
    return parametro
}

// ARROW FUNCTIONS
const funcionFlecha = (parametro) => parametro

const valorNormal = funcionNormal("5")
const valorFlecha = funcionFlecha(5)

console.log(valorNormal)
console.log(valorFlecha)

///////////////////////////////////////




