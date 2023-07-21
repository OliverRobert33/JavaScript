

const container = document.querySelector('.container')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')


window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})





function buscarClima(e) {
    e.preventDefault();

    //VALIDAR
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

    if (ciudad === '' || pais === '') {
        //HUbo un error
        mostrarError('Ambos campos son Obligatorios')
        return
    }

    //CONSULTARIAMOS LA API
    consultarAPI(ciudad, pais);
}






function mostrarError(msj) {

    const alertaClass = document.querySelector('.alerta')

    if (!alertaClass) {
        //crear alerta
        const alerta = document.createElement('DIV')

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md',
            'mx-auto', 'mt-6', 'text-center', 'alerta')

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block"> ${msj}</span>
    `;
        container.appendChild(alerta);

        //eliminar la alerta despues de 3 segundos
        setTimeout(() => {
            alerta.remove();
            formulario.reset();
        }, 3000);
    }

}





function consultarAPI(ciudad, pais) {
    const appId = 'b63e08324e1fcdc9c45cff469d39713d'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;


    //llamar al spinner
    spinner()

    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            limpiarHTML();
            if (datos.cod === '404') {
                mostrarError('Ciudad no Encontrada :(')
                return;
            }

            //imprime la respuesta en el HTML
            mostrarClima(datos)
        })
}





function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p')
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl')

    const actual = document.createElement('p')
    actual.innerHTML = `${centigrados} &#8451;`
    actual.classList.add('font-bold', 'text-6xl')

    const tempMax = document.createElement('p')
    tempMax.innerHTML = `Maxima: ${max} &#8451;`
    tempMax.classList.add('text-xl')

    const tempMin = document.createElement('p')
    tempMin.innerHTML = `Minima: ${min} &#8451;`
    tempMin.classList.add('text-xl')

    const resultadoDIv = document.createElement('div');
    resultadoDIv.classList.add('text-center', 'text-white')
    resultadoDIv.appendChild(nombreCiudad)
    resultadoDIv.appendChild(actual)
    resultadoDIv.appendChild(tempMax)
    resultadoDIv.appendChild(tempMin)




    //anadirlo al HTML
    resultado.appendChild(resultadoDIv);
}





// function kelvinACentigrados(grados) {
//     return parseInt(grados -273.15)
// }
const kelvinACentigrados = grados => parseInt(grados - 273.15) //Mejorar el Codigo. Funciones help




function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function spinner() {

    limpiarHTML()

    const divSpiner = document.createElement('DIV')
    divSpiner.classList.add('sk-chase', 'text-align')
    divSpiner.innerHTML = `
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    `;

    resultado.appendChild(divSpiner);

    
}