const promesa = new Promise((resolve, reject) => {
    let exito = true;

    if(exito){
        resolve("Operacion Exitosa!")
    }else{
        reject("Error en la Operacion")
    }
})

promesa
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Datos obtenidos"), 2000)
    })
}

async function ejecutar () {
    console.log("Esperando datos")

    const resultado = await obtenerDatos()

    console.log(resultado)

    console.log("Termino la funcion principal")
}

ejecutar()