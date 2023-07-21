
(function (){ //esto te permite que tus variables funciones y todo solo sirvan en este dcmto
    console.log('DESDE EL IIFE')
    const name = 'OLiver Saraguro' // de esta manera NO PUEDES mandarla a llamar desde otro documento
    window.nombre = 'OLiver Saraguro' // de esta manera lo pones en la pantalla global y
                                      //PUEDES madarla a llamar desde otro documento

}) ();

//exportar variables
//Para exportar ahy que cambiar el type module en el HTML
//EJM:  <script src="js/cliente.js" type="module"></script>
export const camioneta = 'Toyota'
export const precio = 35.999
export const localidad = 'De Casa'




// EXPORTAR FUNCIONES
export function info (camioneta, precio, localidad){
    return `La camioneta ${camioneta} - Precio: $ ${precio} - Localida: ${localidad}`
}

export function tieneSaldo (precio){
    if (precio > 0) {
        console.log('Tiene Saldoo...')
    }else {
        console.log('No tiene Saldo...')
    }
}


// EXPORTAR CLASES
export class Cliente{
    constructor(camioneta, precio, localidad) {
        this.camioneta = camioneta;
        this.precio = precio;
        this.localidad = localidad;

    }
    info(){
        return `La camioneta ${this.camioneta} - Precio: $ ${this.precio} - Localidad: ${this.localidad}`
    }
}


//export defaul
//IMPORTANTE: SOLO PUEDE HABER UNA
export default function funcionDefault(){
    return ('Desde la funcion Default')
}