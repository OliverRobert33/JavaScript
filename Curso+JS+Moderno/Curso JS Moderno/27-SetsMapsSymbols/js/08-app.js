
const ciudades = ['Madrid', 'Ecuador:/', 'New York', 'California'];
const ordenes = new Set([123, 122, 121, 124]);
const datos = new Map();

datos.set('Name: ', 'OLiver Saraguro')
datos.set('Universidad: ', 'Ingenieria en sistemas')



// //entrie Iterador
// for(let entry of ciudades.entries()){
//     console.log(entry);
// }
// for(let entry of ordenes.entries()){
//     console.log(entry);
// }
// for(let entry of datos.entries()){
//     console.log(entry);
// }


// // values iterador 
// for(let value of ciudades.values()){
//     console.log(value);
// }
// for(let value of ordenes.values()){
//     console.log(value);
// }
// for(let value of datos.values()){
//     console.log(value);
// }


// //keys iterador
// for(let keys of ciudades.keys()){
//     console.log(keys);
// }
// for(let keys of ordenes.keys()){
//     console.log(keys);
// }
// for(let keys of datos.keys()){
//     console.log(keys);
// }


//Default iterador
for(let ciudad of ciudades){
    console.log(ciudad);
}
for(let orden of ordenes){
    console.log(orden);
}
for(let dat of datos){
    console.log(dat);
}