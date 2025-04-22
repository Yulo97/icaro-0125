const url = "https://hp-api.onrender.com/api/character/3db6dc51-b461-4fa4-a6e4-b1ff352221c5"

const obtenerPersonaje = async () => {
    const respuesta = await fetch(url)
    const personajes = await respuesta.json()

    console.log(`Nombre: ${personajes[0].name}`)
    console.log(`Casa: ${personajes[0].house}`)

    if(personajes[0].gender === "female"){
        console.log(`Actriz: ${personajes[0].actor}`)
    }else{
        console.log(`Actor: ${personajes[0].actor}`)
    }
}

obtenerPersonaje()