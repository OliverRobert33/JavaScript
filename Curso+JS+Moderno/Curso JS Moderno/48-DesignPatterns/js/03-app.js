//SINGLETON

let instacia = null;

class Usuario {
    constructor(nombre, email){
        if (!instacia) {
            this.nombre = nombre,
            this.email = email
            instacia = this
        } else {
            return instacia
        }        
    }
}
const usuario1 = new Usuario('Oliver', 'correo@correo.com')
const usuario2 = new Usuario('Roberto', 'correo@correo.com')

console.log(usuario1);
console.log(usuario2)