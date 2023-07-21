
obtenerCliente('Oliver Roberto Saraguro Remache'); 
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`)
}



const obtenerCliente2 = function (nombre) { //esta funcion no se puede llamar antes de nombrarla porque js la reconoce como variable
    console.log(`El nombre del cliente es ${nombre}`)   
}
obtenerCliente2('Oliver Roberto Saraguro Remache'); 




