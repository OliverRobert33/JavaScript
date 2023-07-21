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


//Unir dos funciones para no tener codigo repetitivo
function Personal(nombre, localidad, cuenta){
    cliente.call(this, nombre, localidad);
    this.cuenta = cuenta;

}

//se le hereda el prototype de cliente a personal
Personal.prototype = Object.create(cliente.prototype);
//para contructor la funcion CLIENTE
Personal.prototype.constructor = cliente;


//intanciarlo
const usuario = new Personal ('Ing. Saraguro', 'Catamayo', 15000);
console.log(usuario);

//ejm de heredar funcione de clinte
console.log(usuario.saldoCliente());