//CLOSURES 

const obtenerCliente = () => {

    const nombre = 'OLiver Saraguro'

    function  muestraNombre() {
        console.log(nombre)
    }

    return muestraNombre
}

const cliente = obtenerCliente();

cliente();