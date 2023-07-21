

//weakMap = permite solo objetos

const producto={
    id: 30
}

const weakmap = new WeakMap()

weakmap.set(producto, 'Monitor')


console.log(weakmap)
console.log(weakmap.has(producto))
console.log(weakmap.get(producto))
console.log(weakmap.delete(producto))


//IMPORTANTE
/*
no se pude saber el tamano
no se puede iterar
*/
