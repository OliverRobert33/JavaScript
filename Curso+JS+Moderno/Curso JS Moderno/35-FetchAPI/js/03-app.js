const cargarJSONArray = document.querySelector('#cargarJSONArray')
cargarJSONArray.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'data/empleados.json'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obteneInformacion(resultado));
}

function obteneInformacion(empleado) {
    const contenido = document.querySelector('.contenido')
    let html = '';


    empleado.forEach(info => {
        const { id, nombre, empresa, trabajo } = info

        html += `
        <p> Empleado: ${nombre} </p>
        <p> Id: ${id} </p>
        <p> Empresa: ${empresa} </p>
        <p> Trabajo: ${trabajo} </p>

        `
    });

    contenido.innerHTML = html;
}