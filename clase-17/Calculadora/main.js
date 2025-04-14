const suma = require('./operaciones/suma.js')
const resta = require("./operaciones/resta.js")
const { dividir, multiplicar } = require("./operaciones/operacionesComplejas.js")
const { alumnos, peliculas } = require("./lista.js")

const calculadora = (operacion, num1, num2) => {
    if(operacion === "suma"){
        return suma(num1, num2)
    }
    if(operacion === "resta"){
        return resta(num1, num2)
    }
    if(operacion === "multiplicar"){
        return multiplicar(num1, num2)
    }
    if(operacion === "dividir"){
        return dividir(num1, num2)
    }
}

const resultado = calculadora("multiplicar", 10, 2)

console.log(resultado)