

const busqueda = document.querySelector('.busqueda');
// Cuando se esta escribiendo
busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
})

// Cuando se suelta de escribir
busqueda.addEventListener('keyup', () => {
    console.log('Escribiendo...');
})

// Cuando se sale de la busqueda despues de escribir o solo dar click
busqueda.addEventListener('blur', () => {
    console.log('Escribiendo...');
})

busqueda.addEventListener('copy', () => {
    console.log('Copiado...');
})
busqueda.addEventListener('paste', () => {
    console.log('Pegado...');
})
busqueda.addEventListener('cut', () => {
    console.log('Cortado...');
})

busqueda.addEventListener('input', (e) => {
    if(e.target.value === " "){
        console.log("Fallo la validacion")
    }else {
        console.log('La validacion fue correcta');
    }
})
busqueda.addEventListener('input', (e) => {
    console.log(e.type);
})