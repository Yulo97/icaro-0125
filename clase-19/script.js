const titular = document.querySelector("#titular")

titular.textContent = "Nuevo Titulo"

// mouseover: Este evento ocurre cuando se entra con el puntero al elemento
titular.addEventListener("mouseover", () => {
    console.log("Entraste al elemento")
})

// mouseout: Este evento ocurre cuando se sale con el puntero del elemento
titular.addEventListener("mouseout", (event) => {
    console.log("Saliste del elemento")
    // event.type: El tipo de evento que ocurrió
    console.log(event.type)

    // event.type: El elemento que activó el evento
    console.log(event.target)
})

// keydown: Este evento ocurre cuando presiona una tecla
document.addEventListener("keydown", (event) => {
    console.log("Presionaste:" , event.key)
})

// keydown: Este evento ocurre cuando se suelta una tecla
document.addEventListener("keyup", (event) => {
    console.log("Levantaste:" , event.key)
})

const linkYoutube = document.querySelector('a')


function manejarClick (event) {
    // preventDefault: Metodo que previene el comportamiento por defecto del elemento
    event.preventDefault()
    console.log("Se hizo click")
}

linkYoutube.addEventListener("click", manejarClick)

// removeEventListener: Borra un evento listener
linkYoutube.removeEventListener("click", manejarClick)

/////////////////////////////

// Formulario //
const form = document.getElementById("miFormulario")

const usuario = {
    user: "pepe",
    pass: "123"
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // const user = event.target[0]
    // const pass = event.target[1]
    const user = event.target.username
    const pass = event.target.password

    if(user.value === usuario.user ){
        if(pass.value === usuario.pass){
            alert("Login Correcto")
        }else{
            pass.style.border = "2px solid red"
        }
    }else{
        user.style.border = "2px solid red"
    }
})