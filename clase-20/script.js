const listaTareas = document.getElementById("contenedorTareas")
const spanDelete = document.getElementById("spanDelete")
const parrafo = document.getElementById("parrafo")

// createElement: Crea un elemento
const nuevaTarea = document.createElement("li")
nuevaTarea.textContent = "Sacar a pasear al perro"

// appendChild: Agrega un elemento al HTML
listaTareas.appendChild(nuevaTarea)

const nuevaTarea2 = document.createElement("li")
nuevaTarea2.textContent = "Lavar los platos"

// insertBefore: Inserta un nodo antes de un nodo específico
listaTareas.insertBefore(nuevaTarea2, nuevaTarea)

// cloneNode: Clona un nodo
const tareaClonada = nuevaTarea.cloneNode(true)
listaTareas.appendChild(tareaClonada)

// removeChild: Remover un Nodo hijo
listaTareas.removeChild(tareaClonada)

// remove: Borra el nodo en cuestion
spanDelete.remove()

// innerHTML: Modifica el HTML directamente como una cadena de texto
parrafo.innerHTML = "Este es el nuevo  <strong>Parrafo</strong>"

