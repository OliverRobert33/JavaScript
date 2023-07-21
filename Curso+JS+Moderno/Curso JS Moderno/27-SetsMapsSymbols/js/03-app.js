
//IMPORTANTE: MAP admite datos de todo tipo
const info = new Map();

//Anadir al MAP de nombre info
info.set('Nombre:', 'Oliver Saraguro');
info.set('Year:', 18);
info.set('Sueno:', 'Camioneta 4x4 Toyota');




console.log(info);
console.log(info.size); //saber el tamano
console.log(info.has('Sueno:')); // Buscar en el arreglo
console.log(info.get('Sueno:')); // devolver el valor de la variable

info.delete('nombre');

// info.clear(); //limpiar todo el map

//IMPORTANTE SI HAY COMO ITERAR
info.forEach ((datos)=>{
    console.log(datos)
})
