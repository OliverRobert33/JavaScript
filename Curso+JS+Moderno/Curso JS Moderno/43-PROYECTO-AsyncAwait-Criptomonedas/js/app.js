
const criptomonedaSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')



const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};


//Se crea un promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', () => {
    cotizarCriptomoneda()

    formulario.addEventListener('submit', submitFormulario);

    criptomonedaSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);

})

async function cotizarCriptomoneda() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => obtenerCriptomonedas(resultado.Data)) //CReamos un promise
    //     .then(criptomonedas => selectCriptomodenas(criptomonedas))

    try {
        const respuesta = await fetch (url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomodenas(criptomonedas)

    } catch (error) {
        console.log(error)
    }
}

function selectCriptomodenas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo
        const option = document.createElement('OPTION')
        option.value = Name;
        option.textContent = FullName;

        criptomonedaSelect.appendChild(option)

    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value
    console.log(objBusqueda)
}

function submitFormulario(e) {
    e.preventDefault();

    //validar
    const { moneda, criptomoneda } = objBusqueda

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son Obligatorios')
        return;
    }

    //Consultar la API con los resultados
    consultarAPI();
}

function mostrarAlerta(msj) {

    const existeError = document.querySelector('.error')
    if (!existeError) {
        const alertaDiv = document.createElement('DIV')
        alertaDiv.classList.add('error')
        alertaDiv.textContent = msj

        formulario.appendChild(alertaDiv)

        setTimeout(() => {
            alertaDiv.remove();
        }, 2000);
    }

}

async function consultarAPI() {

    const { moneda, criptomoneda } = objBusqueda
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpinner();

 

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        mostrarCotizacion(resultado.DISPLAY[criptomoneda][moneda])
        
    } catch (error) {
        console.log(error)
    }
}

function mostrarCotizacion(cotizacion) {

    limpiarHTML();

    const { CHANGEPCT24HOUR, HIGHDAY, LOWDAY, PRICE, LASTUPDATE } = cotizacion

    const precio = document.createElement('P');
    precio.classList.add('precio')
    precio.innerHTML = `EL precio es: <span>${PRICE}</span>`

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>EL precio mas alto del Dia es: <span>${HIGHDAY}</span>`

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>EL precio mas bajo del Dia es: <span>${LOWDAY}</span>`

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `<p>Variacion ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`

    const ultimaActualizacio = document.createElement('P');
    ultimaActualizacio.innerHTML = `<p>Ultima Actualizacion:<span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio)
    resultado.appendChild(precioAlto)
    resultado.appendChild(precioBajo)
    resultado.appendChild(ultimasHoras)
    resultado.appendChild(ultimaActualizacio)

}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML()

    const spinner = document.createElement('DIV')
    spinner.classList.add('spinner')
    spinner.innerHTML =
    `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    `

    resultado.appendChild(spinner);
}