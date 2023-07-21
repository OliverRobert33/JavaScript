
export function mostrarAlerta(msj) {
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        const divAlerta = document.createElement('P')
        divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'rounded', 'px-4', 'py-3',
            'max-w-lg', 'mx-auto', 'mt-6', 'text-center')

        divAlerta.innerHTML =
            `
        <strong class="font-bold">Error! </strong>
        <span class="block sm:inline"> ${msj}</span>
        `;

        const formulario = document.querySelector('#formulario')
        formulario.appendChild(divAlerta)

        setTimeout(() => {
            divAlerta.remove()
        }, 3000);
    }
}

export function validar(obj) {
    return !Object.values(obj).every(input => input !== '')

}


