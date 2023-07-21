
const formulaeio = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
const paginacion = document.querySelector('#paginacion')


const reguistroPagina = 40; 
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulaeio.addEventListener('submit', validarFormulario)
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;


    if (terminoBusqueda === "") {
        muestraAlerta('El campo es Obligatorio')
        return
    }

    buscarImagenes();
}

function muestraAlerta(msj) {
    const existeAlerta = document.querySelector('.bg-red-100')

    if (!existeAlerta) {
        const alertaDiv = document.createElement('DIV')

        alertaDiv.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4,', 'py-3', 'text-center', 'rounded', 'max-w-lg'
            , 'mx-auto', 'mt-6')
        alertaDiv.innerHTML =
            `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${msj}</span>
        `

        formulaeio.appendChild(alertaDiv)

        setTimeout(() => {
            alertaDiv.remove()
        }, 2000);

    }

}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value;

    const key = '34737216-1ea096d512f85c7d8c4a2cf68';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${reguistroPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuest => respuest.json())
        .then(resultado => {
            totalPaginas = calcularPagina(resultado.totalHits);
            mostrarImagenes(resultado.hits)
        })

}

//Generador que va a reguistrar la cantidad de elementos  de acuerdo a las paginas 
function *crearPaginador(total) {

    for (let i = 1; i <= total; i++) {
        yield i;
    }
    
}

function calcularPagina(total) {
    return parseInt(Math.ceil(total / reguistroPagina))
}

function mostrarImagenes(imagenes) {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }

    //iterar sobre el arreglo de imagenes y construir el HTML
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen

        resultado.innerHTML +=
            `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">    
                    <p class="font-bold"> ${likes} <span class="font-light"> Me gusta </span></p>
                    <p class="font- bold"> ${views} <span class="font-light"> Vista </span></p>

                    <a 
                        class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                        href="${largeImageURL}" target="_blank" > Ver Imagen 
                    </a>
                    </div>
                </div>
            </div>

        `

        // console.log(previewURL)
    });

    //LImpiar el paginador previo
    while (paginacion.firstChild) {
        paginacion.removeChild(paginacion.firstChild)
    }

    //Generamos el nuevo HTML
    imprimirPaginador();

}

function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas)

    while (true) {
        const {value, done} = iterador.next()
        if (done) return;

        //Caso contrario, genera un boton por cada elemento en el generador 
        const botonGenerador = document.createElement('a')
        botonGenerador.href = '#'
        botonGenerador.dataset.pagina = value
        botonGenerador.textContent = value
        botonGenerador.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'rounded', 'font-bold', 'mb-3', 'uppercase')

        botonGenerador.onclick = () => {
            paginaActual = value
            buscarImagenes();
            console.log(paginaActual)
        }
        paginacion.appendChild(botonGenerador)
    }
}