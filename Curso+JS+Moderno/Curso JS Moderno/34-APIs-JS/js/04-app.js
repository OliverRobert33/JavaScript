

const abrioBtn = document.querySelector('#abrir-pantalla-completa')
const salirBtn = document.querySelector('#salir-pantalla-completa')

abrioBtn.addEventListener('click', pantallaCompleta)
salirBtn.addEventListener('click', cerrarPantallaCompleta)

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();

}
