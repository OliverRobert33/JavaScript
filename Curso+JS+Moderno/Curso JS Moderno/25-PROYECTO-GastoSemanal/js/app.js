//variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
    formulario.addEventListener('submit', agregarGasto);
    // gastosListado.addEventListener('click', eliminarGasto);
}
//clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto)
        this.gastos = [];
    };

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
    }
    
    eliminarGasto(id){
        this.gastos = this.gastos.filter((gasto)=>gasto.id !== id);
        this.calcularRestante();
    }
};

class UI {
    insertarPresupuesto(cantidad) {
        //extrayendo los valores
        const { presupuesto, restante } = cantidad

        //agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        const divAlerta = document.createElement('div')
        divAlerta.classList.add('text-center', 'alert')

        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        } else {
            divAlerta.classList.add('alert-success');
        };

        //mensaje de error
        divAlerta.textContent = mensaje;

        //insertar en el HTML
        document.querySelector('.primario').insertBefore(divAlerta, formulario);

        //quitar la alerta
        setTimeout(() => {
            divAlerta.remove();
        }, 2500);
    }

    agregarGastosListado(gastos) {

        this.limpiarHTML();//limpia el Html

        //iterar sobre los gastos
        gastos.forEach(gasto => {
            const { nombre, cantidad, id } = gasto;

            //crear un Li
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'
            // nuevoGasto.setAttribute('data-id', id); //Forma antigua
            nuevoGasto.dataset.id = id; //forma Actual

            //Agregar el Html de el gasto;
            nuevoGasto.innerHTML = `
            ${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            // btnBorrar.textContent = 'x' //una forma
            btnBorrar.innerHTML = 'Borrar &times'
            btnBorrar.onclick = () => { // cuando des click llama a la funcion 
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar aL HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }
    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    };

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    };

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        //comprobar el 25%
        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');   
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger');   
        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');  
        }

        //si el total es 0 o menor 
        if (restante <= 0) {
            ui.imprimirAlerta('El presopuesto se ha agotado', 'error')
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
};

//INSTANCIAR
const ui = new UI();
let presupuesto;


//FUNCIONES
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    console.log(presupuesto);

    // Agregarlo en el HTML
    ui.insertarPresupuesto(presupuesto)
}


//agregar gastos
function agregarGasto(e) {
    e.preventDefault();

    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number (document.querySelector('#cantidad').value);

    //validar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son Obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida Error', 'error');
        return;
    } else {
        const gasto = { nombre, cantidad, id: Date.now() };


        //Anade un nuevo Gasto
        presupuesto.nuevoGasto(gasto)

        //mensaje de todo bien
        ui.imprimirAlerta('Gasto agregado Correctamente')

        //imprimir los gastos
        const { gastos, restante } = presupuesto; //destructuring para no pasar el objeto ocmpleto
        ui.agregarGastosListado(gastos); 
        ui.actualizarRestante(restante);

        ui.comprobarPresupuesto(presupuesto);

        //resetear formulario
        formulario.reset();
    };
}

function eliminarGasto(id){
    //elimina del objeto
    presupuesto.eliminarGasto(id);

    //elimina los gasto del HTML
    const {gastos,restante} = presupuesto;
    ui.agregarGastosListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}

