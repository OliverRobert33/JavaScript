
//iniciar la App
function iniciarApp() {

    const selectCategorias = document.querySelector('#categorias')
    const resultado = document.querySelector('#resultado')


    if (selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria)
        obtenerCategorias();

    }

    const favoritosDiv = document.querySelector('.favoritos')
    if (favoritosDiv) {
        obtenerFavoritos();
    }


    const modal = new bootstrap.Modal('#modal', {})

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categories = []) {
        categories.forEach(categoria => {
            const option = document.createElement('OPTION');
            option.value = categoria.strCategory
            option.textContent = categoria.strCategory
            selectCategorias.appendChild(option)
        })
    }

    function seleccionarCategoria(e) {
        e.preventDefault();
        const categoria = e.target.value
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals))


    }

    function mostrarRecetas(recetas = []) {

        limpiatHTML(resultado)
        const heading = document.createElement('H2')
        heading.classList.add('text-center', 'text-black', 'my-5')
        heading.textContent = recetas.length ? 'Resultados' : 'NO hay Resultados;'
        resultado.appendChild(heading)

        recetas.forEach(receta => {

            const { idMeal, strMeal, strMealThumb } = receta

            const recetaContenedor = document.createElement('DIV')
            recetaContenedor.classList.add('col-md-4')

            const recetaCard = document.createElement('DIV')
            recetaCard.classList.add('card', 'mb-4')

            const recetaImagen = document.createElement('IMG')
            recetaImagen.classList.add('card-img-top')
            recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`
            recetaImagen.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('DIV')
            recetaCardBody.classList.add('card-body')

            const recetaHeading = document.createElement('h3')
            recetaHeading.classList.add('card-tittle', 'mb-3')
            recetaHeading.textContent = strMeal ?? receta.titulo

            const recetaButton = document.createElement('button')
            recetaButton.classList.add('btn', 'btn-danger', 'w-100')
            recetaButton.textContent = 'Ver Receta'
            // recetaButton.dataset.bsTarget = '#modal'
            // recetaButton.dataset.bsToggle = 'modal'
            recetaButton.onclick = function () {
                seleccionarReceta(idMeal ?? receta.id)
            }


            //Inyectar en el codigo HTML
            recetaCardBody.appendChild(recetaHeading)
            recetaCardBody.appendChild(recetaButton)

            recetaCard.appendChild(recetaImagen)
            recetaCard.appendChild(recetaCardBody)

            recetaContenedor.appendChild(recetaCard)

            resultado.appendChild(recetaContenedor)

        })
    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarInformacionReceta(resultado.meals[0]))
    }


    function mostrarInformacionReceta(receta) {

        const { idMeal, strInstructions, strMeal, strMealThumb } = receta

        //ANADR CONTENIDO AL MODAL
        const modalTitle = document.querySelector('.modal .modal-title')
        const modalBody = document.querySelector('.modal .modal-body')

        modalTitle.textContent = strMeal;
        modalBody.innerHTML =
            `
        <img class="img-fluid" src="${strMealThumb}" alt = "receta ${strMeal}" />
        <h3 class="my-3"> Instrucciones </h3>
        <p>${strInstructions}</p>
        <h3 class="my-3"> Ingrdientes y Cantidades </h3>
        `;


        const listGroup = document.createElement('UL')
        listGroup.classList.add('list-group')

        //Mostrar cantidades e Ingredientes
        for (let i = 1; i <= 20; i++) {
            if (receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`]
                const cantidad = receta[`strMeasure${i}`]

                const ingredienteLi = document.createElement('LI')
                ingredienteLi.classList.add('list-group-item')
                ingredienteLi.textContent = `${ingrediente} --> ${cantidad}`
                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup)


        const modalFooter = document.querySelector('.modal-footer')

        limpiatHTML(modalFooter)
        //Botones de cerrar y favoritos
        const btnFavorito = document.createElement('button')
        btnFavorito.classList.add('btn', 'btn-danger', 'col')
        btnFavorito.textContent = existeStorage(idMeal) ? "Eliminar de Favoritos" : "Guardar Favorito";

        //Guardar en Locale Storage
        btnFavorito.onclick = function () {
            if (existeStorage(idMeal)) { //si existe en el local storage va a retornar y no lo guardar nuevamente
                eliminarFavorito(idMeal)
                btnFavorito.textContent = 'Guardar Favoritos'
                mostrarToast('Eliminado Correctamente :)')
                return;
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb,
            });
            btnFavorito.textContent = 'Eliminar Favoritos'
            mostrarToast('Añadido Correctamente :)')


        }

        const btnCerrar = document.createElement('button')
        btnCerrar.classList.add('btn', 'btn-secondary', 'col')
        btnCerrar.textContent = 'Cerrar'
        btnCerrar.onclick = function () {
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito)
        modalFooter.appendChild(btnCerrar)



        //Muestra el modal
        modal.show()
    }


    function agregarFavorito(receta) {
        // console.log(receta)

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]))
    }

    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritos.some(favorito => favorito.id === id)
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast')
        const toastBody = document.querySelector('.toast-body')
        const toast = new bootstrap.Toast(toastDiv)
        toastBody.textContent = mensaje
        toast.show()
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        if (favoritos.length) {
            mostrarRecetas(favoritos)
            return

        }

        const noFavoritos = document.createElement('P')
        noFavoritos.textContent = 'No existen Favoritos :/'
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5')
        resultado.appendChild(noFavoritos)
    }

    function limpiatHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild)
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)