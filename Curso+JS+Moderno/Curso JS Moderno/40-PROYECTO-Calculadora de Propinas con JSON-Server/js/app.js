
const formulario = document.querySelector('#formulario')
let cliente = {
    mesa: '',
    hora: '',
    pedido: [],
};

const categorias = {
    1: "Comida",
    2: "Bebidas",
    3: "Postres"
}


const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente(e) {
    e.preventDefault();
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVAcios = [mesa, hora].some(campo => campo === "")

    if (camposVAcios) {
        const existeAlerta = document.querySelector('.invalid-feedback')

        if (!existeAlerta) {
            const alertaDIv = document.createElement('DIV')
            alertaDIv.classList.add("invalid-feedback", "d-block", "text-center")
            alertaDIv.textContent = "Ambos campos son Obligatorios"

            document.querySelector(".modal-body form").appendChild(alertaDIv)

            setTimeout(() => {
                alertaDIv.remove()
            }, 2500);
        }

        return;
    }

    //Asignarle datos al formulario de cliente
    cliente = { ...cliente, mesa, hora }
    // console.log(cliente)
    //Ocultar Modal
    const modalFormulario = document.querySelector('#formulario')
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario)
    modalBootstrap.hide();

    //Mostrar las Secciones
    mostrarSecciones()

    //Obterner Platillos de la API json-server
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll(".d-none")
    seccionesOcultas.forEach(seccion => seccion.classList.remove("d-none"))

}

function obtenerPlatillos() {
    const url = `http://localhost:4000/platillos`

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerInfoPlatillos(resultado))
        .catch(error => console.log(error))
}


function obtenerInfoPlatillos(informacion) {
    const contenido = document.querySelector("#platillos .contenido")

    informacion.forEach(info => {
        //destructuring
        const { nombre, precio, categoria, id } = info

        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre1 = document.createElement('DIV')
        nombre1.classList.add('col-md-4')
        nombre1.textContent = nombre

        const precio1 = document.createElement('DIV')
        precio1.classList.add('col-md-3', 'fw-bold')
        precio1.textContent = `$${precio}`

        const categoria1 = document.createElement('DIV')
        categoria1.classList.add('col-md-3')
        categoria1.textContent = categorias[categoria]

        const inputCantidad = document.createElement('INPUT')
        inputCantidad.type = "number"
        inputCantidad.min = 0
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`
        inputCantidad.classList.add('form-control')

        //Funcion que detecta la cantidad y el platillo que se esta agregando  
        inputCantidad.onchange = () => {

            const cantidad = parseInt(inputCantidad.value)

            contadorPlatillo({ ...info, cantidad })
        };

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-2')
        agregar.appendChild(inputCantidad)


        row.appendChild(nombre1)
        row.appendChild(precio1)
        row.appendChild(categoria1)
        row.appendChild(agregar)
        contenido.appendChild(row)

    })
}

function contadorPlatillo(info) {

    //extraer el pedido actual
    let { pedido } = cliente

    if (info.cantidad > 0) {
        //Comprueba si el elemento ya existe en el Arraty 
        if (pedido.some(plato => plato.id === info.id)) {
            const pedidoActualizado = pedido.map(plato => {
                if (plato.id === info.id) {
                    plato.cantidad = info.cantidad
                }
                return plato;
            });
            //Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado]
        } else {
            //El articulo no existe lo Agregamos 
            cliente.pedido = [...pedido, info]
        }
    } else {
        const eliminarPedido = pedido.filter(plato => plato.id !== info.id)
        cliente.pedido = [...eliminarPedido]
    }

    //limpiar el HTML
    limpiarHTML();

    if (cliente.pedido.length) {
        //Mostrar el resumen
        resumenConsumo(cliente.pedido)
    } else {
        mensajeVacio()
    }
}

function resumenConsumo() {
    const contenido = document.querySelector('#resumen .contenido')
    const resumen = document.createElement('DIV')
    resumen.classList.add('col-md-6', 'card', 'py-3', 'px-3', 'shadow')

    //Info de la MESA
    const mesa = document.createElement('P')
    mesa.classList.add('fw-bold')
    mesa.textContent = 'Mesa:'

    const mesaSpan = document.createElement('SPAN')
    mesaSpan.classList.add('fw-normal')
    mesaSpan.textContent = (cliente.mesa)

    //Info de la HORA
    const hora = document.createElement('P')
    hora.classList.add('fw-bold')
    hora.textContent = 'Hora:'

    const horaSpan = document.createElement('SPAN')
    horaSpan.classList.add('fw-normal')
    horaSpan.textContent = (cliente.hora)

    //Titulo de la Secciom
    const heading = document.createElement('H3')
    heading.classList.add('my-4', 'text-center')
    heading.textContent = "Platillos consumidos";

    //iterar sobre el Array de pedidos 
    const grupo = document.createElement('UL')
    grupo.classList.add('list-group');

    const { pedido } = cliente
    pedido.forEach(plato => {
        const { nombre, cantidad, precio, id } = plato

        const lista = document.createElement('LI')
        lista.classList.add('list-group-item')

        const nombre1 = document.createElement('H4')
        nombre1.classList.add('my-4')
        nombre1.textContent = nombre

        const cantidad1 = document.createElement('P')
        cantidad1.classList.add('fw-bold');
        cantidad1.textContent = 'Cantidad: '

        const cantidad2 = document.createElement('SPAN')
        cantidad2.classList.add('fw-normal')
        cantidad2.textContent = cantidad


        const precio1 = document.createElement('P')
        precio1.classList.add('fw-bold');
        precio1.textContent = 'Precio: '

        const precio2 = document.createElement('SPAN')
        precio2.classList.add('fw-normal')
        precio2.textContent = `$${precio}`

        const subtototal1 = document.createElement('P')
        subtototal1.classList.add('fw-bold');
        subtototal1.textContent = 'Subtotal: '

        const subtototal2 = document.createElement('SPAN')
        subtototal2.classList.add('fw-normal')
        subtototal2.textContent = calcularSubtotal(precio, cantidad)

        //Bton de Eliminar
        const btnEliminar = document.createElement('button')
        btnEliminar.classList.add('btn', 'btn-danger', 'rounded', 'text-center');
        btnEliminar.textContent = 'Eliminar del pedido'

        btnEliminar.onclick = function () {
            eliminarPedido(id)
        }


        //Agregar valores a sus contenedores
        cantidad1.appendChild(cantidad2)
        precio1.appendChild(precio2)
        subtototal1.appendChild(subtototal2)



        //agregar elementos al LI
        lista.appendChild(nombre1)
        lista.appendChild(cantidad1)
        lista.appendChild(precio1)
        lista.appendChild(subtototal1)
        lista.appendChild(btnEliminar)



        //Agregar elementos al Grupo Principal UL
        grupo.appendChild(lista);




    });


    mesa.appendChild(mesaSpan)
    hora.appendChild(horaSpan)

    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);


    contenido.appendChild(resumen)

    //Mostrar formulario de propinas
    formularioPropinas()

}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido')

    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild)
    }
}

function calcularSubtotal(precio, cantidad) {
    return `$ ${precio * cantidad}`
}

function eliminarPedido(id) {
    const { pedido } = cliente
    const eliminar = pedido.filter(plato => plato.id != id)

    cliente.pedido = [...eliminar]

    limpiarHTML()

    if (cliente.pedido.length) {
        resumenConsumo()
    } else {
        mensajeVacio()
    }

    //El producto se elimino por lo tanto regresamos la cantidad a 0
    const platoEliminado = `#producto-${id}`
    const inputEliminado = document.querySelector(platoEliminado)

    inputEliminado.value = 0;
}

function mensajeVacio() {
    const contenido = document.querySelector('#resumen .contenido')

    const texto = document.createElement('P')
    texto.classList.add('text-center')
    texto.textContent = 'Añade los elementos del pedido'

    contenido.appendChild(texto);
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido')

    const formulario = document.createElement('DIV')
    formulario.classList.add('col-md-6', 'formulario')

    const divFormulario = document.createElement('DIV')
    divFormulario.classList.add('card', 'py-3', 'px-3', 'shadow')
    //Titulo de la Secciom
    const heading = document.createElement('H3')
    heading.classList.add('my-4', 'text-center')
    heading.textContent = "Propinas";

    //Radio bottom 5
    const radio5 = document.createElement('INPUT')
    radio5.type = 'radio'
    radio5.name = 'propina'
    radio5.value = '5'
    radio5.classList.add('form-check-input')
    radio5.onclick = calcularPropina

    const radio5Label = document.createElement('LABEL')
    radio5Label.textContent = '5%'
    radio5Label.classList.add('form-check-label')

    const radio5Div = document.createElement('DIV')
    radio5Div.classList.add('form-check')

    //Radio bottom 10
    const radio10 = document.createElement('INPUT')
    radio10.type = 'radio'
    radio10.name = 'propina'
    radio10.value = '10'
    radio10.classList.add('form-check-input')
    radio10.onclick = calcularPropina


    const radio10Label = document.createElement('LABEL')
    radio10Label.textContent = "10%"
    radio10Label.classList.add('form-check-label')

    const radio10Div = document.createElement('DIV')
    radio10Div.classList.add('form-check')

    //Radio bottom 15
    const radio15 = document.createElement('INPUT')
    radio15.type = 'radio'
    radio15.name = 'propina'
    radio15.value = '15'
    radio15.classList.add('form-check-input')
    radio15.onclick = calcularPropina


    const radio15Label = document.createElement('LABEL')
    radio15Label.textContent = '15%'
    radio15Label.classList.add('form-check-label')

    const radio15Div = document.createElement('DIV')
    radio15Div.classList.add('form-check')

    //Radio bottom 25
    const radio25 = document.createElement('INPUT')
    radio25.type = 'radio'
    radio25.name = 'propina'
    radio25.value = '25'
    radio25.classList.add('form-check-input')
    radio25.onclick = calcularPropina


    const radio25Label = document.createElement('LABEL')
    radio25Label.textContent = '25%'
    radio25Label.classList.add('form-check-label')

    const radio25Div = document.createElement('DIV')
    radio25Div.classList.add('form-check')

    //Radio bottom 50
    const radio50 = document.createElement('INPUT')
    radio50.type = 'radio'
    radio50.name = 'propina'
    radio50.value = '50'
    radio50.classList.add('form-check-input')
    radio50.onclick = calcularPropina


    const radio50Label = document.createElement('LABEL')
    radio50Label.textContent = '50%'
    radio50Label.classList.add('form-check-label')

    const radio50Div = document.createElement('DIV')
    radio50Div.classList.add('form-check')


    radio5Div.appendChild(radio5)
    radio5Div.appendChild(radio5Label)

    radio10Div.appendChild(radio10)
    radio10Div.appendChild(radio10Label)

    radio15Div.appendChild(radio15)
    radio15Div.appendChild(radio15Label)

    radio25Div.appendChild(radio25)
    radio25Div.appendChild(radio25Label)

    radio50Div.appendChild(radio50)
    radio50Div.appendChild(radio50Label)


    //agrgando al div principal
    divFormulario.appendChild(heading)
    divFormulario.appendChild(radio5Div)
    divFormulario.appendChild(radio10Div)
    divFormulario.appendChild(radio15Div)
    divFormulario.appendChild(radio25Div)
    divFormulario.appendChild(radio50Div)



    formulario.appendChild(divFormulario)
    contenido.appendChild(formulario)
}

function calcularPropina() {
    const { pedido } = cliente
    let subtotal = 0;

    pedido.forEach(plato => {
        subtotal += plato.cantidad * plato.precio
    })

    //Saber que radio select SELECCIONO 
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value

    //Calcular Propina
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    //calcular el total
    const total = subtotal + propina;

    mostrarInfoHTML(subtotal, propina, total)
}

function mostrarInfoHTML(subtotal, propina, total) {
    const divTotal = document.createElement('DIV')
    divTotal.classList.add("total-pagar", "my-5")

    //subtotal
    const subtotalParrafo = document.createElement('P')
    subtotalParrafo.classList.add('fs-3', 'fw-bold', 'mt-2')
    subtotalParrafo.textContent = 'Subtotal: '

    const subtotalConsumo = document.createElement('span')
    subtotalConsumo.classList.add('fw-normal')
    subtotalConsumo.textContent = `$${subtotal}`

    //propina
    const propina1 = document.createElement('P')
    propina1.classList.add('fs-3', 'fw-bold', 'mt-2')
    propina1.textContent = 'Propina: '

    const propina2 = document.createElement('span')
    propina2.classList.add('fw-normal')
    propina2.textContent = `$${propina}`

    //propina
    const total1 = document.createElement('P')
    total1.classList.add('fs-3', 'fw-bold', 'mt-2')
    total1.textContent = 'Total a pagar: '

    const total2 = document.createElement('span')
    total2.classList.add('fw-normal')
    total2.textContent = `$${total}`

    //Eliminar el ultimo resultado
    const eliminarResultado = document.querySelector('.total-pagar')
    if (eliminarResultado){
        eliminarResultado.remove()
    }



    subtotalParrafo.appendChild(subtotalConsumo);
    propina1.appendChild(propina2)
    total1.appendChild(total2)

    divTotal.appendChild(subtotalParrafo)
    divTotal.appendChild(propina1)
    divTotal.appendChild(total1)

    const formulario = document.querySelector('.formulario > div')
    formulario.appendChild(divTotal)

}
