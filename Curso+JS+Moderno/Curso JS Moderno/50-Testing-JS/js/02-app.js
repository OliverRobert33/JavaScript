//CREANDO UN MINI FRAMEWORK PARA TESTING 

function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}


let resultado = suma(2,2)
let esperado = 5;
expected(esperado).tobe(resultado);

resultado = resta(10,2)
esperado = 8;
expected(esperado).tobe(resultado);
expected(esperado).toEqual(resultado);






function expected (esperado) {
    return{
        tobe(resultado){
            if (resultado !== esperado) {
                console.error(`El ${resultado} no es el resultado esperado en al suma `)
            } else {
                console.log('El resultado es el correcto')
            }
        },
        toEqual(resultado){
            if (resultado !== esperado) {
                console.error(`El ${resultado} no es igual, no paso la prueb `)
            } else {
                console.log('Paso la prueba')
            }
        }
    }
}