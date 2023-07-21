//INDEXED DB
/*
API en js para almacenar grandes cantidades de datos estructurados.

A diferencia de LocaleStorage puede almacenar strings, booleans, incluso archivos
    ,cualquier tipo de dato soportado por JavaScripts

No tiene LIMITES conocidos aunque los archivos de mas de 50mb va a preguntar por permisos.

Soportada en todos los navegadores

LocaleStorgae es una buena solucion para almacenar poca informacuon (como un carritp de compras 
    abandonado o un JSON Web token)

IndexdDB es una base dedatos compleja, pero ten en cuenta que estos datos siguen siendo visibles para cualquiera
    por lo que no es recomendable almacenar password o tarjetas de credito.

*/

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crmDB() {
    //crear una base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1)

    //si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error a la hora de crear la BD')
    }

    //SI SE CREO BIEN 
    crmDB.onsuccess = function () {
        console.log('La base de datos CREADA...');
        DB = crmDB.result;

    }


    //CONFIGURACION DE LA BASE DE DATOS
    crmDB.onupgradeneeded = function (e) {
        // console.log('Este metodo se ejecuta una sola vez..')
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        //definir las columnas 
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email ', 'email', { unique: true });
        objectStore.createIndex('telefono ', 'telefono', { unique: true });

        console.log('COLUMNAS CREADAS.....')


    }
}


function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function () {
        console.log('Transaccion Completada')
    }

    transaction.onerror = function () {
        console.log('Hubo un Error en el procesos')
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        nombre: 'Oliver',
        telefono: 0991249995,
        email: 'oliverremache@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
};