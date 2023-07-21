//PARTIALS Y CURRYING 

const suma = (a,b,c) => a + b + c;
console.log(suma(5,10,15))


const parcial = a => (b,c) => suma(a,b,c)
const primerNumero = parcial(5)
const resultado = primerNumero(10,15)
console.log(resultado)



const parcial2 = a => b => c => suma(a,b,c)
const numero1 = parcial2(10)
const numero2 = numero1 (20)
const resultado2 = numero2(30)
console.log(resultado2)


const parcial3 = a => b => c => suma(a,b,c)
const numero = parcial3(10)(100)(1000)
console.log(numero)