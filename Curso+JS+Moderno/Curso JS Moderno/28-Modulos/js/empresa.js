
import { Cliente } from "./cliente.js";

//Heredar un clase que esta siendo importada
export class Empresa extends Cliente {
    constructor(camioneta, precio,localidad , categoria) {
        super(camioneta, precio, localidad);
        this.categoria = categoria;
    };

    info(){
        return `La camioneta ${this.camioneta} - Precio: $ ${this.precio} - Localida: ${this.localidad} - Categoria: ${this.categoria}`
    }
};
