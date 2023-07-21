class cliente {
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


}

const user = new cliente('Oliver', 100000);
console.log(user);
console.log(user.info());
console.log(cliente.welcome());

