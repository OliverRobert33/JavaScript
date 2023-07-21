
//Implicit binding

const usuario = {
    nombre: 'Oliver Saraguro',
    edad: 18,
    informacion(){
        console.log(`El usuario ${this.nombre} tiene ${this.edad} años`)
    },

    mascota:{
        nombre: 'Roberto Remache',
        edad: 18,
        informacion(){
            console.log(`El usuario ${this.nombre} tiene ${this.edad} años`)
        }
    }
}

usuario.informacion()

usuario.mascota.informacion()