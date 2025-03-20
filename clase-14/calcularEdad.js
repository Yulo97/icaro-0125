function verificarEdad(edad) {
    if(edad <= 18) return "Niño"
    if(edad > 18 && edad < 40) return "Joven"
    return "Mayor"
}

const pasarCheboli = () => {
    const persona = verificarEdad()

    if(persona === "Niño"){
        return console.log("No puedes pasar")
    }

    console.log("Puedes pasar")
} 


pasarCheboli()
