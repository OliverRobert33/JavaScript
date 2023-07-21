function cliente(name, saldo){
    this.name = name;
    this.saldo = saldo;
};


cliente.prototype.tipoCliente = function(){
    // console.log(this.saldo)
    let tipo;
    if(this.saldo >= 10000){
        tipo = 'Gold'
    }else if(this.saldo < 10000){
        tipo = 'Platinium'
    }else{
        tipo = 'Bronce'
    }
    return tipo;
}

cliente.prototype.saldoCliente = function(){
return `EL usuario ${this.name} tiene un saldo de ${this.saldo} tipo de Cliente ${this.tipoCliente()}`
}

cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}


//instanciarlo
const union = new cliente('Oliver Saraguro', 6000);
// union.tipoCliente();
// console.log(union);

console.log(union.tipoCliente());
console.log(union.saldoCliente());
union.retiraSaldo(1000)
console.log(union.saldoCliente());

console.log(union);
