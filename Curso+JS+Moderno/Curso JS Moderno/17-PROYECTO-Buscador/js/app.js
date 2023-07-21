
//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max - 13;

//COntenedor para los resultados
const resultado = document.querySelector('#resultado');


//generar un objeto con la busqueda
const busqueda = {
    Marca: '',
    Year: '',
    Minimo: '',
    Maximo: '',
    Puertas: '',
    Transmision: '',
    Color: '',
};

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    //Llena las opciones del año
    selectYear();
});

//Event listeners para los selects de busqueda
marca.addEventListener('change', e => {
    busqueda.Marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    busqueda.Year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    busqueda.Minimo = e.target.value;
    filtrarAuto(); 
});
maximo.addEventListener('change', e => {
    busqueda.Maximo = e.target.value;
    filtrarAuto(); 
});
puertas.addEventListener('change', e => {
    busqueda.Puertas = parseInt(e.target.value);
    filtrarAuto(); 
});
transmision.addEventListener('change', e => {
    busqueda.Transmision = e.target.value;
    filtrarAuto(); 
});
color.addEventListener('change', e => {
    busqueda.Color = e.target.value;
    filtrarAuto(); 
});

function mostrarAutos(autos) {
    limpiarHTML(); //elimina el Html
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;

        const autoHTML = document.createElement('P');
        autoHTML.textContent = `${marca}, ${modelo}, ${year}, ${precio}, Puertas:${puertas}
        , Color:${color}, Transmision:${transmision}`;

        //insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function selectYear() {
    for (let i = max; i >= min; i--) {
        // console.log(i);
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    // console.log(resultado);
    if (resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultados();
    }
}

function noResultados(){
    limpiarHTML();
    const noResultado= document.createElement('div')
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = ' No hay resultados'
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
    const { Marca} = busqueda;
    if (Marca) {
        return auto.marca === Marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { Year } = busqueda;
    if (Year) {
        return auto.year === Year;
    }
    return auto;
}


function filtrarMinimo(auto) {
    const { Minimo } = busqueda;
    if (Minimo) {
        return auto.precio >= Minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { Maximo } = busqueda;
    if (Maximo) {
        return auto.precio <= Maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { Puertas } = busqueda;
    if (Puertas) {
        return auto.puertas === Puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const { Transmision } = busqueda;
    if (Transmision) {
        return auto.transmision === Transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { Color } = busqueda;
    if (Color) {
        return auto.color === Color;
    }
    return auto;
}
