class cliente {
    constructor(name, saldo){
        this.name = name;
        this.saldo = saldo;
    }
}

const user = new cliente('Oliver', 100000);
console.log(user);


const cliente2 = class{
    constructor(name, saldo){
        this.name = name;
        this.saldo = saldo;
    }
}
const user2 = new cliente('Leonel', 200000);
console.log(user2);