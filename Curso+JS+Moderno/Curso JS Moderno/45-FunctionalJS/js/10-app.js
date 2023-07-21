
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`)
    }
})

function Empleado(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(info, obtenerNombre(info));

}



function Clienta(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(info, obtenerNombre(info));

}


const empleado = Empleado('Oliver', 'correo@correo.com', 'Saraguro')
empleado.mostrarNombre();

const cliente = Clienta('Oliver', 'correo@correo.com', 'Desarrollador')
cliente.mostrarNombre();
