
//eliminar documentos del localStorage
localStorage.removeItem('Camioneta');


const estraer = JSON.parse(localStorage.getItem('Auto'));
console.log(estraer);
estraer.push("Gasolina")
console.log(estraer)
localStorage.setItem('Auto2', JSON.stringify(estraer)); //a;adir al locale storage

localStorage.clear();//limpiar todo el locale satorage