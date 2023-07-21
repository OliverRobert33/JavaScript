
const password = '123456';

describe('Valida que el password no este vacio, y tenga una extension de 6 caraacteres', () => {
    test('Verifica que tennga 6 caracteres', () => {
        expect(password).toHaveLength(6)
    });

    test('Verifica que no este vacio', () => {
        expect(password).not.toHaveLength(0)
    });
});
