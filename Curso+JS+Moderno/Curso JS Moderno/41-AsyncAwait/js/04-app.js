function descargarNuevosClientes() {
    return new Promise (resolve => {
        console.log('Descargar Clientes...')

        setTimeout(() => {
            resolve('Los clientes fueron descargados. :)')
        }, 5000);
    })
}

function descargarNuevosPedidos() {
    return new Promise (resolve => {
        console.log('Descargar Pedidos...')

        setTimeout(() => {
            resolve('Los Pedidoos fueron descargados. :)')
        }, 3000);
    })
}

const app = async () => {
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()])
        console.log(resultado[0])
        console.log(resultado[1])

        
    } catch (error) {
        console.log(error)
    }
}

app()