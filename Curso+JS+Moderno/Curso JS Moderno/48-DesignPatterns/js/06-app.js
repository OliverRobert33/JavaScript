// console.log(modulo1.nombre) //APP.05

//MIXIN PATTERNS
class Persona{
    constructor(nombre, email){
        this.nombre = nombre,
        this.email = email
    }
}

class Jefe{
    constructor(nombre, email){
        this.nombre = nombre,
        this.email = email
    }
}

const funcionPersona = {
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre} Correo: ${this.email}`)
    },
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`)
    }
}

//Anadir FuncionPersona al prototype de Persona
//class Persona
Object.assign(Persona.prototype,funcionPersona)

const persona = new Persona('Oliver', 'correo.correo.com')
console.log(persona)



//class Jefe
Object.assign(Jefe.prototype,funcionPersona);

const jefe2 = new Jefe('Roberto Saraguro', 'correo.correo.com')
console.log(jefe2)




persona.mostrarInformacion()
persona.mostrarNombre()

jefe2.mostrarInformacion();
jefe2.mostrarNombre();
