const carrito = ['producto1', 'producto2', 'producto3'];

describe('Grupo de Pruebas', ()=>{

    test("Comprobar que el array tenga 3 elementos",() => {
        expect(carrito).toHaveLength(3)
    });

    test("Verificar que el array no este vacio",() => {
        expect(carrito).not.toHaveLength(0)
    });
});