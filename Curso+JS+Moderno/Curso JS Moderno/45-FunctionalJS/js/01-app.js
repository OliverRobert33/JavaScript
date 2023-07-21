
//FUNCIONAL JS

/*
Crea tu codigo utilizando funciones 

Pero hay ciertas reglas, basicamente las funciones deben tener una entrada y tener una salida de datos 

No se permite la modificacion de los datos

Tiene una sintaxis mas de matematicas

INMUTABILIDAD: Los datos no deben modificarse (utilizar const para siempre)
En la programcion funcional no puedes cambiar el valor a una veriable no es recomendado.

SEPARAR FUNCIONES DE DATOS
*Se utilizan mucho funciones que retorne un dato o un ArrayMethod, de esa forma tendremos funciones que
entregen un resultado nuevo pero nunca modifican datos 

FIRST-CLASS FUNCTIONS
*Es poder crear funciones que parezcan cualquier variable como lo es funcion expression
EJM:
const suma = function(a,b){
    return a + b
}

const resultado = suma  

*/


//FIRST CLASS FUNCTION

const suma = function (a, b) {
    return a + b
}

const resultado = suma

console.log(resultado(10,20 ))
