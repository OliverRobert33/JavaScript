
const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado ${pais}`)

    callback();
}

function mostrarPaises() {
    console.log(paises)
}

function iniciarCallBackhell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises)
            setTimeout(() => {
                nuevoPais('España', mostrarPaises)

            }, 3000);
        }, 3000);
    }, 3000);
}


iniciarCallBackhell()