// Consulta de FETCH con .then
const consultarPersonaje = (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    
    fetch(url)
        .then((response) => response.json()) // Transformar a JSON
        .then(data => console.log(data))
        .catch(error => console.log("Ocurrio un error:" , error.message))
}

// Consulta de Fetch con Asyc y Await
const obtenerPersonaje = async (id) => {
    try {
        const url = `https://rickandmortyapi.comm/api/character/${id}`

        const respuesta = await fetch(url)
        const personaje = await respuesta.json()
    
        console.log(personaje)
    } catch (error) {
        console.log("Ocurrio un error:" , error.message)
    }
}

obtenerPersonaje(1)
