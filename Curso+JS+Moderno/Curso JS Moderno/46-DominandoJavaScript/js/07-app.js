//Loop de eventos

console.log('primero') //1

setTimeout(() => { // 3
    console.log('Segundo')
}, 0);

console.log('Tercero') //1
 
setTimeout(() => { // 3
    console.log('Cuarto')
}, 0);

new Promise(function(resolve){ //2
    resolve('Desconocido...')
}).then(console.log)

console.log('ultimo') //1

function hola() { // antes del promise
    console.log('Hola')    
}
hola()