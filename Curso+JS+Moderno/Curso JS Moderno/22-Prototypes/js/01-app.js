
const cliente = {
    nombre: 'Oliver Saraguro',
    saldo: 1000
}

console.log(cliente);
console.log(typeof cliente); // para saber de que tipo es

function constructorObjeto(name, saldo){
    this.name = name;
    this.saldo = saldo;
};

const union = new constructorObjeto('Roberto Sarguro', 1500);

console.log(union);

