// BUCLE FOR

// 1) Declaracion de variable: Este es el contador
// 2) Condicion: Para que siga o no ejecutandose (mientras sea true se va a ejecutar)
// 3) Incremental: Aumenta la variable

for (let i = 1 ; i <= 5 ; i++) {
    // console.log("Esta es la vuelta " + i)
}

for (let i = 5; i > 0; i--){
    // console.log("Esta es la vuelta " + i)
}

// var => Variable con scope global
// let => Variable con scope controlado
// const => Variable constante

// BUCLE WHILE
let i1 = 0;
while (i1 < 3) {
    // console.log("Iteracion n°", i1)
    i1++
}

// BUCLE DO WHILE
let i2 = 0;
do {
    // console.log("Iteracion n°", i2)
    i2++
} while (i2 > 3)

// INTERRUPCION DE UN BUCLE
for (let i = 1; i <= 5; i++){
    if(i === 3) {
        break;
    }
    // console.log("Vuelta numero:", i)
}

// SALTAR UNA ITERACION
for (let i = 1; i <= 5; i++){
    if(i === 3) {
        continue;
    }
    console.log("Vuelta numero:", i)
}

// 1 => impar
// 2 => par
// 3 => impar
// 4 => par