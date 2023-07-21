
function constructorObjeto(name, saldo){
    this.name = name;
    this.saldo = saldo;
};

const union = new constructorObjeto('Roberto Sarguro', 1500);

function formatearCLiente(usuario){
    const {name, saldo} = usuario;
    return `El Usuario ${name} tiene un saldo de ${saldo}`
}

console.log(formatearCLiente(union));

////////////////////////////////////////////////////////////////////

function constructorObjeto2(nombre, year, motor){
    this.nombre = nombre;
    this.year = year;
    this.motor = motor;
};

const union2 = new constructorObjeto2('Toyota SR', 2023, 'Gasolina');

function formatearCamioneta(camioneta){
    const {nombre, year, motor} = camioneta
    return `la Camioneta ${nombre} del año ${year} cuenta con un motor ${motor}`;
}

console.log(formatearCamioneta(union2));