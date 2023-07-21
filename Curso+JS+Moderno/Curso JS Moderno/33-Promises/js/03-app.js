
const aplicarDescuento = new Promise((resolve, reject) => {

    const descuente = true
    if (descuente) {
        resolve('Descuento Aplicado')
    } else {
        reject('No se puedo aplicar el Descuento')
    }
});


// console.log(aplicarDescuento)

aplicarDescuento

    //cuando cumple
    .then(resultadp => {
        console.log(resultadp)
    })
    //cuando no cumple
    .catch(error =>{
        console.log(error)
    })




/*
HAY TRES VALORES POSIBLES
fulfilled = El promise se cumplio
reject = El promise no se cumplio
PENDING = nO SE HA CUMPLIDO Y TAMPOCO FUE RECHAZADO

*/