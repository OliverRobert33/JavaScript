
class Persona{
    constructor(nombre, email){
        this.nombre = nombre,
        this.email = email
    };
};

class Empresa extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email)
        this.empresa = empresa
    };
};

const usuario = new Persona('Roberto', 'hola@hola.com');
console.log(usuario);

const empleado = new Empresa('Oliver', 'correo@correo.com', 'Fashion SR');
console.log(empleado);