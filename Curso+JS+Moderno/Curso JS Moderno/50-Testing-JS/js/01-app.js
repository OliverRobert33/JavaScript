//CREANDO UN MINI FRAMEWORK PARA TESTING 

function suma(a, b) {
    return a + b
}

let numeros = suma(2,2)
let resultado = 5;

if (resultado !== numeros) {
    console.error(`El ${resultado} no es el resultado esperado en al suma `)
} else {
    console.log('El resultado es el correcto')
}

function resta(a, b) {
    return a - b
}

let numeros1 = resta(10,2)
let resultado1 = 8;

if (resultado1 !== numeros1) {
    console.error(`El ${resultado1} no es el resultado esperado en la resta`)
} else {
    console.log('El resultado es el correcto')
}
