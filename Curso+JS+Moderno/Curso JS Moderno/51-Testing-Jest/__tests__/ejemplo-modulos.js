

import { suma } from '../js/funciones.js' //Jest no soporta nativamente el import 
                                    // se lo puede utilizar con babel

describe('Verificar la funcion suma', () => {
    test('La suma de 20 y 20', () => {
        expect(suma(20,20)).toBe(40)
    });
});
