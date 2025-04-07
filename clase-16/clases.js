// Creacion de una clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }

    despedirse() {
        // Backticks 
        // ALT + 92 => teclado numerico
        console.log(`Tengo ${this.edad} y me voy a retirar. Me llamo ${this.nombre}`)
    }
}

// Creacion del objeto partiendo de la Clase (molde)
const persona1 = new Persona("Ramiro", 32)

/////////////////////////////////////////////////////////
// Clases Padres y Clases Hijas (extends)
class Animal {
    constructor(nombre, especie, color) {
        this.nombre = nombre
        this.especie = especie
        this.color = color
    }
    
    expresar() {
        console.log(`${this.nombre}: Emitiendo un sonido...`)
    }
}


class Perro extends Animal {
    expresar() {
        console.log(`${this.nombre}: Gua gua!`)
    }
}

class Gato extends Animal {
    expresar() {
        console.log(`${this.nombre}: Miaauuu!`)
    }
}

const mascota1 = new Perro("Bartolo", "Perro", "Marron")
const mascota2 = new Gato("Garfield", "Gato", "Naranja")


/////////////////////////////////////////////////////////
// Metodo super()
class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad) // Llama al constructor de la clase padre
        this.curso = curso
    }
    
    mostrarCurso() {
        console.log(`${this.nombre}: Estoy estudiando ${this.curso}`)
    }
}

const persona2 = new Alumno("Jose", 42, "JavaScript") 

/////////////////////////////////////////////////////////
// GET y SET
class Usuario {
    constructor(user, pass, name){
        this._user = user
        this._pass = pass
        this.name = name
    }
    
    get user() {
        return this._user
    }
    
    set user(nuevoUsuario) {
        this._user = nuevoUsuario
    }
    
    set pass(nuevaPass) {
        this._pass = nuevaPass
    }
}

const usuario1 = new Usuario("asd", "123", "Juan")

usuario1.user = "asd123"
usuario1.pass = "123456"

/////////////////////////////////////////////////////////
// Propiedades Privadas

class CuentaBancaria {
    #saldo // Propiedad privada

    constructor(saldoInicial, cbu) {
        this.#saldo = saldoInicial
        this.cbu = cbu
    }
    
    get saldo() {
        return this.#saldo
    }

    depositar(monto) {
        this.#saldo += monto
        console.log(`Nuevo Saldo: ${this.saldo}`)
    }
}

const cuenta = new CuentaBancaria(5000, "456321789")

cuenta.depositar(3000)
console.log(cuenta.saldo)