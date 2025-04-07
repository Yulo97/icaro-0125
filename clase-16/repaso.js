const celular = {
    // Propiedades
    color: "negro",
    resolucion: "1920x1080",
    marca: "Nokia",
    encendido: false,

    // Metodos = Funciones
    apagar: function() {
        if(!this.encendido){
            this.encendido = false
        }
    },
    encender: function() {
        if(this.encendido){
            this.encendido = true
        }
    },
    grabar: function(){
        console.log("Grabando...")
    }
}

const celular2 = {
    marcaa: "Nokia",
    modelo: "S20"
}

celular.grabar()