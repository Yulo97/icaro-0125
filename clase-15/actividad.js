const mascota = {
    nombre: "Firulais",
    edad: 2,
    energia: 5, // La energia va del 1 al 10
    crecer: function () {
        this.edad++
    },
    descansar: function() {
        if(this.energia < 10){
            this.energia++
        }
    },
    comer: function (cantidadComida) {
        // cantidadComida = gramos que coma el animal
        while(cantidadComida >= 200){
            if(this.energia < 10){
                console.log("Comiendo...")
                this.energia++
            }
            cantidadComida -= 200
        }
    },
    adoptar: function (nombre) {
        this.nombre = nombre
    },
    pasear: function (horas) {
        while(horas >= 1){
            this.energia--
            horas--
        }
        
        // Otra alternativa
        // if(this.energia < horas) return this.energia = 0
        // this.energia -= horas
    }
}


mascota.pasear(200)

console.log("Energia: ", mascota.energia)