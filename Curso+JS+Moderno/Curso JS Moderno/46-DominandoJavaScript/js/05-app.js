
//Explicit Biding 

function persona(eli1, eli2) {
    console.log(`El nombre es ${this.nombre}, escucha ${eli1} y ${eli2}`)
}

const informacion = {
    nombre: 'Oliver Roberto',
}

const musicaFavorita = ['Salsa', 'Reguetton']

persona.call(informacion, musicaFavorita[0], musicaFavorita[1])
persona.apply(informacion, musicaFavorita)
const fn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
fn()
