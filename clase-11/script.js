// Verdadero = true
// False = false

// typeof nos sirve para ver/obtener el tipo de dato

// console.log(typeof true)
// console.log(typeof "cadena de texto")
// console.log(typeof 2)

// Condicionales
if (false) {
    console.log("La condicion es verdadera")
}

// Else de un condicional
let estaLloviendo = false;

// if (estaLloviendo) {
//     console.log("Esta lloviendo, voy a llevar un paraguas.")
// } else {
//     console.log("No esta lloviendo. Puedo irme sin paraguas.")
// }

// Operadores de Comparacion
/*
console.log(2 == "2") // Igualdad
console.log(2 === "2") // Igualdad estricta
console.log(2 != "2") // Desigualdad
console.log(2 !== "2") // Desigualdad estricta
console.log(2 > 5) // Mayor que
console.log(2 < 5) // Mayor que
console.log(5 <= 5) // Menor o igual
console.log(4 >= 5) // Mayor o igual
*/

let edad = 85;
let sexo = "mujer"
const dni = "40123456"

/*
if (edad >= 21) {
    console.log("Eres mayor. Puedes pasar")

    if(sexo === "mujer"){
        console.log("Pasas graterola")
    }else{
        console.log("La entrada cuesta $5.00")
    }
} else if (edad < 10) {
    console.log("Eres un niño! Voy a llamar a tu mama.")
} else if (edad > 80) {
    console.log("Eres muy viejo para entrar!")
} else {
    console.log("Eres menor. No puedes pasar")
}
*/

// Operadores Logicos
const validacion = 5 === 6
const validacion2 = 12 < 20

// console.log(validacion && validacion2) // AND
// console.log(validacion || validacion2) // OR

let costoEntrada = 20
let plataEnBilletera = 10
let hijoDelDuenio = true

/*
if (costoEntrada <= plataEnBilletera || hijoDelDuenio) {
    console.log("Pagaste la entrada. Puedes entrar")
}else{
    console.log("No te alcanza el dinero para entrar")
}
*/

// Switch
const dia = "Martes"

switch (dia) {
    case "Lunes":
        console.log("Comienzo de semana")
        break;
    case "Domingo":
        console.log("Final de la semana")
        break;
    default:
        console.log("Estas en otro dia")
        break;
}

// parseInt
const numero = "55"
const numero2 = 5

console.log(parseInt(numero) + numero2)








