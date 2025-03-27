let sexo = "masculino";

// Creacion de un objeto
const persona = {
    nombre: "Pepe",
    apellido: "Argento",
    edad: 45,
    peso: "80kg",
    altura: 1.65,
    sexo: sexo,
    descansado: false,
    saludar: function () {
        console.log("Hola, soy " + persona.nombre)
    },
    dormir: function () {
        console.log("Durmiendo...")
        this.descansado = true
    },
    trabajar: function () {
        if(this.descansado){
            console.log("Yendo a trabajar")
            this.descansado = false
        }else{
            console.log("Estoy muy cansado para trabajar")
        }
            
    }
}

// Acceder a una propiedad del objeto
// console.log("La persona se llama " + persona["nombre"])
// console.log("La persona se llama " + persona.nombre)

// Ejecucion del metodo de un objeto
// persona.dormir()
// persona.trabajar()

// Template Strings
let nombre = "Pepe"
let apellido = "Argento"

// console.log('Hola ' + nombre + ", como estas? Mi apellido es " + apellido)
// console.log(`Hola ${persona.nombre}, como estas? Mi apellido es ${persona.apellido}`)

// Modificacion de un parametro del objeto
persona.edad = 46

// Agregar propiedad al objeto
persona.nacionalidad = "Argentina"

// Iteracion de claves de un objeto
for (let key in persona) {
    // console.log(`${key}: ${persona[key]}`)
}

// Obtener array de claves del objeto
let clavesPersona = Object.keys(persona)
// console.log(clavesPersona)

// Obtener array de los valores del objeto
let valoresPersona = Object.values(persona)
// console.log(valoresPersona)

// Devuelve un arreglo de pares clave-valor
let clavesYValoresPersona = Object.entries(persona)
// console.log(clavesYValoresPersona)

const marcaAuto = {
    nombre: 'Peugeot',
    anioFundado: 1832,
    modelos: ["208", "207", "206"],
    lineas: {
        comfortline: "Esta es la linea mas confortable de autos para viajes",
        city: "Especial para ciudades",
        viajera: "Especial para viajes largos"
    }
}

console.log(marcaAuto.lineas.city)