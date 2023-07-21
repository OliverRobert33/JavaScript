const paises = ['Francia', 'Espana', 'Iaglaterra', 'Australia', 'Colombia'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback();
    }, 2000);
}


function mostraPaises() { 
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 1000);
}
mostraPaises();


nuevoPais('NewYork', mostraPaises)