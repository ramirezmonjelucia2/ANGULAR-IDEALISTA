import { Vivienda } from './vivienda';
export class Casa extends Vivienda {
    private _cochera: boolean
    constructor(idVivienda: number,
        largo: number,
        ancho: number,
        ubicacion: {
            municipio: string,
            ciudad: string,
            codpost: number
        },
        caracteristicas: {
            habitaciones: number,
            baños: number,
            ascensor: boolean,
            equipamiento: Array<string>
        },
        estado: {
            vendido: boolean,
            fecha: Date | null,
            empleado: number
        },
        cochera: boolean
    ) {
        super(idVivienda, largo, ancho, ubicacion, caracteristicas, estado)
        this._cochera = cochera;
    }

    preciom2() {
        let preciom2 = super.preciom2();
        if (this._cochera == true) {
            preciom2 += 1.000;
        }
        return Math.round(preciom2)
    }

    get cochera(): boolean {
        return this._cochera
    }
    todo() {
        return super.todo() + "Dispone de cochera: " + this._cochera
    }

}