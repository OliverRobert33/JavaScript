
// evento submit a un formulario

const formulario = document.querySelector('#formulario');
// formulario.addEventListener('submit', (e) => {
//     //no enviar automaticamente si no uno se le dice
//     e.preventDefault();
//     console.log('Buscando...');
//     console.log(e.target);
//     console.log(e.target.action);
// });
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log('Buscando...');
    console.log(e.target);
    console.log(e.target.action);
}