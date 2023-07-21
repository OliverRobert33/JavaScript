//CREANDO UN MINI FRAMEWORK PARA TESTING 

function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}

async function sumaAsync(a,b) {
    return Promise.resolve(suma(a,b))
}


let resultado = suma(2,2)
let esperado = 5;
expected(esperado).tobe(resultado);

resultado = resta(10,2)
esperado = 8;
expected(esperado).tobe(resultado);
expected(esperado).toEqual(resultado);

test('La suma de 20 + 20 el resultado debe ser 40', async ()=>{
    const resultado = await sumaAsync(20, 20);
    const esperado = 40;
    expected(esperado).tobe(resultado)
})

async function test (mensaje, callback) {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecuto correctamente.`);
    } catch (error) {
        console.error('Error:')
        console.error(error)
    }
}

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