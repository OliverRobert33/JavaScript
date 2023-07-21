

const numero1 = 40
const numero2 = '40'

console.log(numero1 + numero2) //4040  Implicita

console.log(numero1 + Number(numero2)) // 80 Explicito

console.log(numero1.toString()); //Lo convierte a tipo cadena 

const numeroPares = [2, 4, 6, 8, 10]
console.log(numeroPares.toString()) //Convierte a cadena al arreglo 
console.log(JSON.stringify(numeroPares)) //Convierte a cadena al arreglo 
