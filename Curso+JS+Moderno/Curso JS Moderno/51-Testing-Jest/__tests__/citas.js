import Citas from '../js/classes/Citas'

describe('Probar la clase de citas', () => {
    const id = Date.now();
    const citas = new Citas();
    test('Agregar a una nueva cita', () => {

        const citaObj = {
            id,
            mascota: 'Pepe',
            propietario: 'OLiver',
            telefono: '0999',
            fecha: '30 abril',
            hora: '13:32',
            sintomas: 'Dolor de cabeza'
        }

        citas.agregarCita(citaObj);


        //Prueba
        expect(citas).toMatchSnapshot()

    });

    test('Actualizar cita', () => {
        const citaObj = {
            id,
            mascota: 'Panchita',
            propietario: 'Roberto',
            telefono: '099249995',
            fecha: '30 abril, 2023',
            hora: '13:34',
            sintomas: 'Dolor de estomago'
        }  

        citas.agregarCita(citaObj)

        //Prueba
        expect(citas).toMatchSnapshot();
    });

    test('EliminaR Cita', () => {
        citas.eliminarCita(id);

        //Prueba
        expect(citas).toMatchSnapshot();
    })
});