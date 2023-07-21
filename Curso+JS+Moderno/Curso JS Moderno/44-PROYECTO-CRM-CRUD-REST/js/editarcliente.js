import {editarCliente, reescribirCliente} from './API.js';
import { mostrarAlerta ,validar } from "./funciones.js";


(function(){

    //campos del formulario 
    const nombreImput = document.querySelector('#nombre');
    const empresaImput = document.querySelector('#empresa');
    const emailImput = document.querySelector('#email');
    const telefonoImput = document.querySelector('#telefono');
    const idImput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {

        const parametroURL = new URLSearchParams(window.location.search)

        const idCliente = parseInt(parametroURL.get('id'))
        const cliente = await editarCliente(idCliente)

        mostrarCliente(cliente)


        //submit al formulario
        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    });

    function mostrarCliente (cliente) {
        const {nombre, empresa, email, telefono, id } = cliente;

        nombreImput.value = nombre;
        empresaImput.value = empresa;
        emailImput.value = email;
        telefonoImput.value = telefono;
        idImput.value = id;
    };

    function validarCliente(e) {
        e.preventDefault()

        const cliente = {
            nombre: nombreImput.value,
            email: emailImput.value,
            telefono: emailImput.value,
            empresa: empresaImput.value,
            id: parseInt(idImput.value)
        }

        if (validar(cliente)) {
            mostrarAlerta('TODOS LOS CAMPOS SON OBLIGATORIOS');
            return;
        }

        //rescribe el objeto
        reescribirCliente(cliente)
    }


})();