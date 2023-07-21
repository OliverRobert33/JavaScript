function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

Seguro.prototype.cotizarSeguro = function () {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1,35
    */
    let iva;
    const cantidad = 2000;

    switch (this.marca) {
        case '1':
            iva = cantidad * 1.15
            break;
        case '2':
            iva = cantidad * 1.05
            break;
        case '3':
            iva = cantidad * 1.35
        default:
            break;

    }
    //leer el year 
    const diferencia = new Date().getFullYear() - this.year;

    // cada year que la diferencia es mayor, el costo se reducir aun 3%
    iva -= ((diferencia * 3) * iva) / 100;


    /*
    si el tipo de segurp del carro es el basico multiplicar por 25%
    si es completo por 50%
    */
    if (this.tipo === 'basico') {
        iva *= 1.30;
    } else {
        iva *= 1.50;
    }
    return iva;
};


function Interfaz() { };

//llena las opciones de años
Interfaz.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const year = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    };
};

//Muestra alertas en Pantalla
Interfaz.prototype.Alertas = (mensaje, tipo) => {
    const div = document.createElement('DIV');
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = (mensaje);

    //insertar em el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}

Interfaz.prototype.resultado = (total, seguro) => {

    const {marca, year, tipo} = seguro;
    let cMarca;
    switch(seguro.marca) {
         case '1':
            cMarca = 'Americano';
              break;
         case '2':
            cMarca = 'Asiatico';
              break;
         case '3':
            cMarca = 'Europeo';
              break;
         default:
            break; 
    };
    //crear resultado
    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header"> Tu Resumen </p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${cMarca} </span> </p>
        <p class="font-bold"> Año: <span class="font-normal"> ${year} </span> </p>
        <p class="font-bold"> Tipo: <span class="font-normal capitalize"> ${tipo} </span> </p>
        <p class="font-bold"> Total: <span class="font-normal"> $ ${total} </span> </p>

            `
    const resultadoDiv = document.querySelector('#resultado');

    //mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';//se borra el spinner
        resultadoDiv.appendChild(div); //se muestra el resultado
    }, 3000);

}

//Instanciar INterfaz
const ui = new Interfaz();

document, addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

eventListener();

function eventListener() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
};

function cotizarSeguro(e) {
    e.preventDefault();
    //lee la marca
    const marca = document.querySelector('#marca').value;

    //lee el year
    const year = document.querySelector('#year').value;

    //lee la cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.Alertas('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.Alertas('Cotizando....', 'correcto');


    //ocultar la salida del mensaje de resultado
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    };

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    seguro.cotizarSeguro();

    //cotizar seguro
    const total = seguro.cotizarSeguro();
    //Utilixar el prototype que va a cotizar 
    ui.resultado(total, seguro);
};