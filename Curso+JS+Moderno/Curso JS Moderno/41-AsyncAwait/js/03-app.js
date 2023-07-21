function descargarClientes() {
    return new Promise((resolve, reject)=>{
        const error = true

        setTimeout(() => {
            if (error) {
                resolve('El listado se descargo correctamente')
            } else {
                reject('No se descargo el listado')
            }
        }, 3000);
    })
}


//async await
const ejecutar = async () => {
    try {
        console.log(1 + 1)
        const respuesta = await descargarClientes()

        console.log(2 + 2)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}


ejecutar()