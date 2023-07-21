class Cliente {
    constructor(name, saldo) {
        this.name = name;
        this.saldo = saldo;
    }
    info() {
        return `El usuario ${this.name} tiene un saldo de ${this.saldo}`
    };

    static welcome() {
        return `WELCOMEEEE.....`
    };
};

//heredar
class Empresa extends Cliente{
    constructor(name, saldo, tlf, cgt){
        super(name, saldo);
        this.tlf = tlf;
        this.cgt = cgt;
    };
    static welcome(){ //Reescribir un metodo
        return  `Welcome a la Empresa`;
    }
};

const user = new Cliente('Oliver', 100000);
const empresa = new Empresa('Roberto', 100000, 0991249995, 'Aprendizaje en Linea');
console.log(empresa);
console.log(empresa.info())

console.log(Cliente.welcome());
console.log(Empresa.welcome());

