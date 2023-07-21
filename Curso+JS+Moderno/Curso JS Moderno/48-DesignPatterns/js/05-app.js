//MODULE PATTERN

const modulo1 = (function () {
    const nombre = 'Oliver'

    function hola() {
        console.log('HOLA')
    }

    return{
        nombre,
        hola
    }
})();

//Para leer en otra pestana se pone asi
console.log(modulo1.nombre)


