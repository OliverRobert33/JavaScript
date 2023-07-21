

//Funcion Mediator

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (camioneta, precio) => {
        console.log(`Tenemos la siguiente camioneta ${camioneta}, iniciamos con un precio de $${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a: ${comprador}`);
    }
}



function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}



function Subasta(precio) {
    let compradores = {}
    
    return {
        reguistrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this
        }
    }
}


//Crear Objetos
const comprador1 = new Comprador('Oliver');
const comprador2 = new Comprador('Roberto');
const vendedor1 = new Vendedor('Vendedor de Autos');
const subasta1 = new Subasta();

//Tienes que reguistrarlos
subasta1.reguistrar('Oliver')
subasta1.reguistrar('Roberto')
subasta1.reguistrar(vendedor1)



vendedor1.oferta('Mona Lisa', 1000);
comprador1.oferta(2500, comprador1)
comprador2.oferta(3000, comprador2)
comprador2.oferta(4000, comprador1)
comprador2.oferta(5500, comprador2)


vendedor1.vendido('Roberto');



