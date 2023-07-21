
const usuario = {
    nombre: 'Oliver Saraguro Remache',
    saldo: 1000,
    carrera: 'Ingeniero en Informatica'
}

describe('Testisng al usuario', () => {
    test('Es Oliver Saraguro', () => {
        expect(usuario).toMatchSnapshot()
    })
})