
//importar variables desde otro dcmto
import funcionDefault, { camioneta, precio, localidad, info, tieneSaldo, Cliente } from './cliente.js'
import {Empresa} from './empresa.js';

//MOstra funcion default
console.log(funcionDefault())



//mostrar variables em pantalla
console.log(nombre)
console.log(camioneta)
console.log(precio)
console.log(localidad)


// mostrar funcion en pantalla
console.log(info(camioneta, precio, localidad))


//mostra funcion en pnatalla
tieneSaldo(precio) //Tiene Saldo...


//Mostrar clases em pantalla
const helpCliente = new Cliente(camioneta, precio, localidad)
console.log(helpCliente)
console.log(helpCliente.info())



//importar empresa
const helpEmpresa = new Empresa ('Codigo con Oliver', 500, 'De Patio    ', 'En linea')
console.log(helpEmpresa)






