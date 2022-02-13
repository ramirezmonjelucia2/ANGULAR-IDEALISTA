import { Vivienda } from './vivienda';

export class Chalet extends Vivienda {
  private _piscina: boolean;
  private _largojardin: number;
  private _anchojardin: number;
  constructor(
    idVivienda: number,
    largo: number,
    ancho: number,
    ubicacion: {
      municipio: string;
      ciudad: string;
      codpost: number;
    },
    caracteristicas: {
      habitaciones: number;
      baños: number;
      ascensor: boolean;
      equipamiento: Array<string>;
    },
    estado: {
      vendido: boolean;
      fecha: Date | null;
      empleado: number;
    },
    piscina: boolean,
    largojardin: number,
    anchojardin: number
  ) {
    super(idVivienda, largo, ancho, ubicacion, caracteristicas, estado);
    this._piscina = piscina;
    this._largojardin = largojardin;
    this._anchojardin = anchojardin;
  }
  get piscina() {
    return this._piscina;
  }
  get largojardin() {
    return this._largojardin;
  }
  get anchojardin() {
    return this._anchojardin;
  }
 

  preciom2() {
    let preciom2 = super.preciom2();
    let preciojardin = this.m2jardin();
    preciom2 = preciom2 + preciojardin;
    if (this._piscina == true) {
      preciom2 += 200;
    }
    return Math.round(preciom2);
  }


  m2jardin() {
    let preciom2jardin: number;
    if (this.ubicacion.ciudad == 'sevilla') {
      preciom2jardin = this.sjardin() * 1386;
    } else if (this.ubicacion.ciudad == 'almeria') {
      preciom2jardin = this.sjardin() * 1088;
    } else if (this.ubicacion.ciudad == 'jaen') {
      preciom2jardin = this.sjardin() * 823;
    } else if (this.ubicacion.ciudad == 'malaga') {
      preciom2jardin = this.sjardin() * 2442;
    } else if (this.ubicacion.ciudad == 'granada') {
      preciom2jardin = this.sjardin() * 1375;
    } else if (this.ubicacion.ciudad == 'cadiz') {
      preciom2jardin = this.sjardin() * 1555;
    } else if (this.ubicacion.ciudad == 'cordoba') {
      preciom2jardin = this.sjardin() * 1220;
    } else if (this.ubicacion.ciudad == 'huelva') {
      preciom2jardin = this.sjardin() * 1253;
    }
    return preciom2jardin
  }

  sjardin(): number {
    return this._anchojardin * this._largojardin;
  }

  todo() {
    let resultado: string;
    resultado = `${super.todo()}, ¿Tiene piscina?: ${this._piscina
      }, Superficie del jardin(m2): ${this.sjardin()}, `;
    return resultado;
  }
}
