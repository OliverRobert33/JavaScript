
//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //cuando agregas un cursp presionando'agregar CArrito'
    listaCursos.addEventListener('click', agregarCarrito)
    
    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

      //muetra los cursos de LocalStorage
    document.addEventListener('DOMContentLoaded', ()=> {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        carritoHTML();
    });

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click',()=>{
        articulosCarrito = []; //reseteamos el arreglo
        carritoHTML();
        limpiarHTML(); //Eliminamos todo el HTML
    });

};


//FUNCIONES
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        
        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML(); // llamo la funcion para actualizar valores
    }
    }
function agregarCarrito(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoS = e.target.parentElement.parentElement;
        leerDatosCurso(cursoS);
    }
}

//Lee y extrae contenido del HTML
function leerDatosCurso(curso) {
    // console.log(curso);

    //crear un objeto con el curso 
    const infoCurso = {
        Imagen: curso.querySelector('img').src,
        Titulo: curso.querySelector('h4').textContent,
        Precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        Cantidad: 1,
    }
    //revisa si un elemento ya existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        //si esxiste crea un arreglo de todos los elementos del objeto
        const apoyo = articulosCarrito.map(curso => {
            //comprueba otra vez pero cada arreglo
            if (curso.id === infoCurso.id) {
                curso.Cantidad++;
                //lo devuelve al arreglo actualizado
                return curso;
            } else {
                //lo devuelve al arreglo sin actualizar
                return curso;
            }
        });
        articulosCarrito = [...apoyo];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);
    carritoHTML();
}

//muestra el carrito y genera HTML
function carritoHTML() {

    //Limoiar HTML
    limpiarHTML();
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')

        row.innerHTML = `
        <td> <img src = '${curso.Imagen}' width = '100'> </td>
        <td> ${curso.Titulo} </td>
        <td> ${curso.Precio} </td>
        <td> ${curso.Cantidad} </td>
        <td> <a href='#' class='borrar-curso' data-id='${curso.id}'> X</a> </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    //agregar el carrito de compras al HTML
    enviarLocalStorage();
};
    
function enviarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
};


function limpiarHTML() {
    //forma lenta 
    // contenedorCarrito.innerHTML = '';

    //forma rapida y mas eficaz
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}
