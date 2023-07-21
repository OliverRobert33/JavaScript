
//Symbols

const sym = Symbol();
const sym2 = Symbol();


//Los symbols nunca son iguales
if (sym === sym2) {
    console.log('SOn iguales')
} else {
    console.log('SOn diferentes')
}






const nombre = Symbol();
const apellido = Symbol();

const persona ={};

//agregar nombre y aepllido como llave del objeto
persona[nombre] = 'Oliver Sarguro'
persona[apellido]= 'Remache'
persona.tipo = 'Meztizo'
persona.sueno = 'Toyota 4x4'

console.log(persona)
// console.log(persona[nombre]);//para acceder se hace con corchetes
// console.log(persona.tipo)//se accede con punto


//las propiedades que utiliza symbol no son iterables
for (let i in persona){
    console.log(i)
}





//definir una descripcion del symbol
const nameCliente = Symbol('Nombre:')
const cliente = {}

cliente[nameCliente] = 'OLIVER ROBERTO'

console.log(cliente) //nombre:OLIVER ROBERTO
console.log(cliente[nameCliente]) //OLIVER ROBERTO
console.log(nameCliente) //nombre:

