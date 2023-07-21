
const usuario = {
    nombre: 'Oliver Saraguro',
    saldo: 500
};

describe('Verificar el saldo', () => {
    test('Saldo mayor a 400', () => {
        expect(usuario.saldo).toBeGreaterThan(400);
    });

    test('Es igual el nombre', () => {
        expect(usuario.nombre).toBe('Oliver Saraguro');
    });

    test('No es igual el nombre', () => {
        expect(usuario.nombre).not.toBe('Roberto Remache');

    });

    test('Saldo es igual', () => {
        expect(usuario.saldo).not.toBe(400);
    });

})