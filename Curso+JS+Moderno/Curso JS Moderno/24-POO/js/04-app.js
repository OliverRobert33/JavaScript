class Cliente {
    #name //privado
    constructor(name, saldo) {
        this.#name = name;
        this.saldo = saldo;
    }
    info() {
        return `El usuario ${this.#name} tiene un saldo de ${this.saldo}`
    };

    static welcome() {
        return `WELCOMEEEE.....`
    };
};

const user = new Cliente('Oliver', 50000);
// console.log(user.#name) //no se puede acceder asi a un elemento privadoo
console.log(user.info()) //mediante una clase se accede a un elemento privado

class Cliente2{
    #nombre

    setNombre(nombre){
        this.#nombre = nombre
    };

    getNombre(){
        return this.#nombre
    }
}

const user2 = new Cliente2();
user2.setNombre('Leonel')
console.log(user2.getNombre());