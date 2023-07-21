localStorage.setItem('Nombre', 'Oliver Saraguro');

const camioneta = {
    Marca: 'Toyota',
    Año: 2023,
    Transmicion: 'Manual'
}
//convierte un objeto a String
const camionetaString = JSON.stringify(camioneta);
localStorage.setItem('Camioneta', camionetaString);

const auto = ['Mazda','Negro', 'Full Equipo'];
localStorage.setItem('Auto', JSON.stringify(auto));
