const consecionario = [
    {marcas: 'Toyota', precio: 34.999},
    {marcas: 'Mazada', precio: 33.999},
    {marcas: 'Chevrolet', precio: 36.999},
    {marcas: 'Ford', precio: 44.999},
    {marcas: 'Great Wall', precio: 34.222},
    {marcas: 'Colorado', precio: 45.999},
]
//eliminar el ultimo objeto del arreglo
consecionario.pop();
//.map crea un nuevo areglo
const nuevoArreglo = consecionario.map(function(objetos) {    
    return`Marca: ${objetos.marcas} - Precio: ${objetos.precio}`;
})

//.forEach no crea otro arreglo
consecionario.forEach(function(objetos) {    
    console.log(`Marca: ${objetos.marcas} - Precio: ${objetos.precio}`);
})

console.log(nuevoArreglo);

