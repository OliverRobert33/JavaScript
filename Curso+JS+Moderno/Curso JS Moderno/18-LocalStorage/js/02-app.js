
const nombre = localStorage.getItem('Nombre')
console.log(nombre)

//JSON.parse = lo convierte de string a objeto o arreglo
const camioneta = localStorage.getItem('Camioneta');
console.log(JSON.parse(camioneta));

const auto = localStorage.getItem('Auto');
console.log(JSON.parse(auto));