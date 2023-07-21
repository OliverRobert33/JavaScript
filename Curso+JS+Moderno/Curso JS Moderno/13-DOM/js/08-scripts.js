

// const navegacion = document.querySelector('.navegacion')
// console.log(navegacion.firstElementChild); //primer elemento
// console.log(navegacion.lastElementChild); //ultimo elemento

// console.log(navegacion.childNodes); //Los espacios en blanco los convierte em textos
// console.log(navegacion.children); //Solo coje el texto HTML

// console.log(navegacion.children[1].nodeName); // nodeName es la etiqueta
// console.log(navegacion.children[1].nodeType); // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType


// const card = document.querySelector('.card')
// console.log(card.children[1].children[1].textContent); // acceder a la informacion de cada iterador

// card.children[1].children[1].textContent = 'Cambiando texto' //Cambiar el contenidoo de texto
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);


// // Traversting the hijo a padre
// console.log(card.parentNode); //verifica espacios en blanco
// console.log(card.parentElement); //verifica solo texto es mejor y segura
// console.log(card.parentElement.parentElement); // para seguir recorriendo a los padres


// console.log(card); //entrar al primero 
// console.log(card.nextElementSibling); //segundo
// console.log(card.nextElementSibling.nextElementSibling); //tercero
// console.log(card.nextSibling.nextSibling.nextSibling.nextSibling); //cuarto



// const selector = document.querySelector('.card:nth-child(4)') //Te trae el child que tu nescecites
// console.log(selector);