

const suma = (a, b) => a + b
const multiplicar = (a, b) => a * b

const obtenerResultado = fn => fn(20, 20)

console.log(obtenerResultado(suma))
console.log(obtenerResultado(multiplicar))



