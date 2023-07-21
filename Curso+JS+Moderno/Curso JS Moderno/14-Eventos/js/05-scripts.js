

//Eventos Scroll cuandos e desliza  el mause
window.addEventListener('scroll', ()=>{
    // console.log('Scrolling');

// window.addEventListener('scroll', ()=>{
//     //para saber cuantos pixeles se les da
//     const scrollPX = window.scrollY;
//     console.log(scrollPX);
// })

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aun no da mas scroll');
    }
})
