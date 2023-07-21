
//crear un nuevo enlacce
const enlace = document.createElement('a');
// Agregando texto
enlace.textContent = 'New Enlace';

//Anadiendo href
enlace.href = '/new-enlace';

console.log(enlace);

enlace.target = '_blank';

enlace.setAttribute('sata-enlace', 'new-enlace');

enlace.classList.add('Alguna-Clase');
enlace.onclick = miFunciom;

//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion')
navegacion.insertBefore(enlace, navegacion.children[2]); //Insertar despues de la primera posccion

function miFunciom(){
    alert('HOla BIENVENIDOO');
}


// //CREAR UN CARD DINAMICO

const parrafo1 = document.createElement('p');
parrafo1.textContent = ('Concierto');
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = ('Concierto de Rock');
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = ('1000 por persona');
parrafo3.classList.add('precio');

//crear div con la clase de INFO
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//CREAR LA IMAGEN
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

// imge.classList.add('img-fluid');
// imge.alt = 'Texto Alternativo';

//Crear el card
const card = document.createElement('div')
card.classList.add('card');

//asiganr la imagen
card.appendChild(imagen);

//asignar Info
card.appendChild(info);

//INsertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[1]);




