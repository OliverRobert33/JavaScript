const paises = [];


const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado ${pais}`)
    }, 3000);
})

nuevoPais('Alemania')

    //cuando cumple
    .then(resultadp => {
        console.log(resultadp)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultadp => {
        console.log(resultadp)
        console.log(paises)
    })