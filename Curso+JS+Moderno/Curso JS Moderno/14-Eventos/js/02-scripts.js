
// EVENTOS
const nav = document.querySelector('.navegacion');

// reguistrar un evento
nav.addEventListener('click', () =>{
    console.log('Click en NAVEGACION');
})

nav.addEventListener('mouseenter', () =>{
    console.log('Entrando a la NAVEGACION');
    nav.style.backgroundColor = 'black';
})

nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la NAVEGACION');
    nav.style.backgroundColor = 'transparent';
})
//Para entrar ahy que hacer doble click
nav.addEventListener('dblclick', () =>{
    console.log('Entrando a la NAVEGACION');
    nav.style.backgroundColor = 'black';
})

// mousedown - similar a click
// click
// dblclick - doble click
// mouseup - cuando sueltas el mause
