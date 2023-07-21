
//prevenir Event Blubing con delegacion
const cardDiv = document.querySelector('.card');

// cardDiv.addEventListener('click', e =>{
//     console.log(e.target.classList);
// })

cardDiv.addEventListener('click', e =>{
    if(e.target.classList.contains('titulo')){
        console.log('Seleccionado Titulo');
    } else if(e.target.classList.contains('precio')){
        console.log('Seleccionado Precio');
    } else if(e.target.classList.contains('card')){
        console.log('Seleccionado Card');
    } 
})
