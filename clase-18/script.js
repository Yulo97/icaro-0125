// getElementById => Obtener elemento por ID
const tituloPrincipal = document.getElementById("titulo")

// querySelector => Selector de elemento dinamico
const span = document.querySelector("span") // capturamos por etiqueta
const primerParrafo = document.querySelector(".primerParrafo") // capturamos por clase
const h2 = document.querySelector("#subtitulo") // capturamos por ID


function cambiarColor() {
    const parrafoLenguaje = document.getElementById("parrafoLenguaje")
    
    if(parrafoLenguaje.textContent === "Esto es JavaScript !"){
        parrafoLenguaje.textContent = "Esto es HTML!"
    }else{
        parrafoLenguaje.textContent = "Esto es JavaScript !"
    }
}

// Capturamos una lista de elementos que cumplan con el parametro
const parrafos = document.querySelectorAll(".primerParrafo") 
// console.log(parrafos[1].textContent)

// Capturamos una lista por el atributo name
const inputUsuario = document.getElementsByName("usuario") 
// inputUsuario[0].value = "Usuario"
// console.log(inputUsuario[0])

// Capturamos una lista de elementos por su etiqueta name
const etiquetasParrafos = document.getElementsByTagName("p") 
// console.log(etiquetasParrafos[2].textContent)

// Cambiar el HTML interno de la etiqueta
span.innerHTML = "<b>Hola!</b>"


let imagenActual = 1;

function cambiarImagen() {
    const img = document.getElementById("imagen");

    if (imagenActual === 1) {
        img.setAttribute("src", "./images/2.webp")
        imagenActual = 2;
    } else {
        img.setAttribute("src", "./images/1.jpg")
        imagenActual = 1;
    }
  }


