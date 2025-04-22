// Repaso de Callbacks
const saludar = () => {
    console.log("Hola, esto es un CB!")
}

const miFuncion = (callback) => {
    console.log("Comienza la Funcion principal")

    callback()
    
    console.log("Termina la Funcion principal")
}


miFuncion(saludar)
