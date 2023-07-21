
/*
un generados es un funcion que retorna un iterador 
*/

function* crearGenerador() {
    yield 10;
    yield 'OLiver Saraguro';
    yield 'Camioneta 4*4';
    yield 9 + 9;
}

// const iterador = crearGenerador()

// console.log(iterador) //suspended
// console.log(iterador.next()) //10
// console.log(iterador.next()) //OLiver Saraguro
// console.log(iterador.next()) // Camioneta 4*4
// console.log(iterador.next()) //18
// console.log(iterador) //suspended


function* crearGenerador2(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i]
    }
}

const carrito = ['Toyota', 'Ford', 'Mazda', 'Colorado']

const iterador2 = crearGenerador2(carrito);

console.log(iterador2.next()); //{value: 'Toyota', done: false}
console.log(iterador2.next()); //{value: 'Ford', done: false}
console.log(iterador2.next()); //{value: 'Mazda', done: false}
console.log(iterador2.next()); //{value: 'Colorado', done: false}
console.log(iterador2.next()); //{value: 'undefined', done: true}
