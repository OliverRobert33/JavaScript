
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

describe('Comprobar qu elas funciones esten bien', () => {
    test('Comprobar la suma', () => {
        expect(suma(20,30)).toBe(50)
    });

    test('Comprobar la resta', () => {
        expect(resta(30,20)).toBe(10)
    });

    test('Comprobar la suma', () => {
        expect(suma(20,30)).not.toBe(40)
    });

    test('Comprobar la resta', () => {
        expect(resta(20,30)).not.toBe(20)
    });
})