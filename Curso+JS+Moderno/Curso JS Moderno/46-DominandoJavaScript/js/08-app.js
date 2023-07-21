
self.onload = () => {
    console.log('Ventana Lista')
}

const producto = {
    nombre: 'Monitor',
    precio: 300,
    categoria: 'estandar',
    informacion: function () {
        return `El monitor ${this.nombre} tiene un precio de ${this.precio} en categoria ${this.categoria}` 
    }
}

console.log(producto.informacion())