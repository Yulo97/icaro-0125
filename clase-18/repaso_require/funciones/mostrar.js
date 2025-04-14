function mostrar (array) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        
        console.log(item.dni)
    }
}

module.exports = mostrar