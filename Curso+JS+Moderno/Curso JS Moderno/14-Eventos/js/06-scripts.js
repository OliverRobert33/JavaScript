
// Event Bubling
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


// //Asi  no detiene la propagacion
// cardDiv.addEventListener('click', () => {
//     console.log('CLick en card');
// });
// infoDiv.addEventListener('click', () => {
//     console.log('CLick en info');
// });
// titulo.addEventListener('click', () => {
//     console.log('CLick en titulo');
// });

// El .stopPropagation Detiene la propagacion
cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('CLick en card');
});
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('CLick en info');
});
titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('CLick en titulo');
});
