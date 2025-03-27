// Funcion flecha
const saludar = (nombre) => {
    return "Hola " + nombre // Retorna el saludo
}

// Funcion clasica
function saludar2 (nombre) {
    console.log("Hola", nombre) // Muestra por consola
    // No retorna nada
}

const saludo = saludar("Pepe")

console.log(saludo)