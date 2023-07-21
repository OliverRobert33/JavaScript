document.addEventListener('DOMContentLoaded', function () {
    const todo = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    //seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCc = document.querySelector('#cc');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type = "submit"]');
    const btnResetear = document.querySelector('#formulario button[type = "reset"]');
    const btnSpinner = document.querySelector('#spinner');



    // console.log(inputMensaje);
    //Asignar Eventos
    // inputEmail.addEventListener('blur', function(e){
    //     console.log(e.target.value);
    // })
    // inputAsunto.addEventListener('blur', function(e){
    //     console.log(e.target.value);
    // })
    // inputMensaje.addEventListener('blur', function(e){
    //     console.log(e.target.value);
    // })
    //A;adir eventos
    inputEmail.addEventListener('input', valuar);
    inputAsunto.addEventListener('input', valuar);
    inputMensaje.addEventListener('input', valuar);
    inputCc.addEventListener('input', (e)=>{
        if(e.target.value.trim() === ''){
            camposLlenos();
            return;
        }
        if (e.target.id === 'cc' && !validarEmail(e.target.value)) {
            mensajeAlerta(` El Email CC no es valido`, e.target.parentElement);
            todo[e.target.name] = '';
            camposLlenos();
            return;
        }
    });
    formulario.addEventListener('submit', activarSpinner);
    btnResetear.addEventListener('click', (e) => {
        e.preventDefault();
        resetear();
    });

    //trim() = elimina espacios en blanco
    function valuar(e) {
        if (e.target.value.trim() === '') {
            //e.target.id = para mandar por el Id el mesaje de alerta
            mensajeAlerta(`El campo ${e.target.id} es Obligatorio`, e.target.parentElement);
            todo[e.target.name] = '';
            camposLlenos();
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mensajeAlerta(` El Email no es valido`, e.target.parentElement);
            todo[e.target.name] = '';
            camposLlenos();
            return;
        }

        limiparAlerta(e.target.parentElement);
        todo[e.target.name] = e.target.value.trim().toLowerCase();
        //Comprobar si el objeto Todo esta lleno
        camposLlenos();
    }

    function mensajeAlerta(msj, reference) {
        limiparAlerta(reference);

        const error = document.createElement('P');
        error.textContent = msj;
        // console.log(error);
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        reference.appendChild(error);

    }

    function limiparAlerta(reference) {
        // Mensaje Alerta
        const alerta = reference.querySelector('.bg-red-600')
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        //esto es un expresion regular = es un codigo de este tipo que va a buscar un patron
        // en un texto o una serie de numeros
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
        return resultado;
    }

    function camposLlenos() {
        if (Object.values(todo).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;

    }

    function activarSpinner(e) {
        e.preventDefault();

        btnSpinner.classList.add('flex');
        btnSpinner.classList.remove('hidden');

        setTimeout(() => {
            btnSpinner.classList.remove('flex');
            btnSpinner.classList.add('hidden');

            resetear();

            //crear un alerta
            const alertaExito = document.createElement('P')
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'enviado correctamente';

            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove();
            }, 2500);

        }, 2500);


    }

    function resetear() {
        todo.email = '';
        todo.asunto = '';
        todo.mensaje = '';
        formulario.reset();
        camposLlenos();
    }

});