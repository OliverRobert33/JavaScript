//NAMESPACE

const restauranteApp = {}

restauranteApp.platos = [
    {
        nombre: 'Pizza',
        precio: 30
    },
    {
        nombre: 'Hamburguesa',
        precio: 25
    },
    {
        nombre: 'Hot Dog',
        precio: 25
    },
    {
        nombre: 'Alitas',
        precio: 20
    }
]

restauranteApp.funciones = {
    mostrarMenu: platos => {
        console.log('Bienvenido al Menu.')

        platos.forEach((plato, index) => {
            console.log(`${index}: ${plato.nombre} -> $${plato.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu orden: ${restauranteApp.platos[id].nombre} se esta preparando.`)
    },
    agregarPlatillo:(plato, precio) => {
        const nuevo = {
            nombre: plato,
            precio
        };

        restauranteApp.platos.push(nuevo)
    }
}



restauranteApp.funciones.agregarPlatillo('Taco de Carne', 30)

const {platos} = restauranteApp;

restauranteApp.funciones.mostrarMenu(platos)

restauranteApp.funciones.ordenar(3)

