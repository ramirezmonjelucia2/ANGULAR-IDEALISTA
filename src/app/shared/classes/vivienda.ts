import { Caracteristicas, Ubicacion } from '../interfaces/interfaces';

export abstract class Vivienda {
  private _idVivienda: number;
  private _largo: number;
  private _ancho: number;
  private _ubicacion: Ubicacion;
  private _caracteristicas: Caracteristicas;
  private _estado: {
    vendido: boolean;
    fecha: Date | null;
    empleado: string;
  };

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
      empleado: string;
    }
  ) {
    this._idVivienda = idVivienda;
    this._largo = largo;
    this._ancho = ancho;
    this._ubicacion = ubicacion;
    this._caracteristicas = caracteristicas;
    this._estado = estado;
  }

  get idVivienda() {
    return this._idVivienda;
  }
  get largo() {
    return this._largo;
  }
  get ancho() {
    return this._ancho;
  }
  get ubicacion() {
    return this._ubicacion;
  }
  get caracteristicas() {
    return this._caracteristicas;
  }
  get estado() {
    return this._estado;
  }
  set largo(largo: number) {
    this._largo = largo;
  }
  set ancho(ancho: number) {
    this._ancho = ancho;
  }
  set ubicacion(ubicacion: Ubicacion) {
    this._ubicacion = ubicacion;
  }
  set caracteristicas(caracteristicas: Caracteristicas) {
    this._caracteristicas = caracteristicas;
  }
  
  ubi() {
    return (
      'Municipio: ' +
      this._ubicacion.municipio +
      ', Ciudad: ' +
      this._ubicacion.ciudad +
      ', Codigo postal: ' +
      this._ubicacion.codpost
    );
  }
  est() {
    return (
      'Vendido: ' + this._estado.vendido + ', Fecha: ' + this._estado.fecha
    );
  }

  carac() {
    return (
      '\nHabitaciones: ' +
      this._caracteristicas.habitaciones +
      ', Baños: ' +
      this._caracteristicas.baños +
      ', ¿Tiene ascensor?: ' +
      this._caracteristicas.ascensor +
      '\nEquipamiento: ' +
      this._caracteristicas.equipamiento
    );
  }

  //Calcular el precio de la vivienda, según la ubicación el precio del m2 varía.
  preciom2() {
    let preciom2: any;
    if (this.ubicacion.ciudad == 'sevilla') {
      preciom2 = 1386 * this.superficie();
    } else if (this.ubicacion.ciudad == 'almeria') {
      preciom2 = 1088 * this.superficie();
    } else if (this.ubicacion.ciudad == 'jaen') {
      preciom2 = 823 * this.superficie();
    } else if (this.ubicacion.ciudad == 'malaga') {
      preciom2 = 2442 * this.superficie();
    } else if (this.ubicacion.ciudad == 'granada') {
      preciom2 = 1375 * this.superficie();
    } else if (this.ubicacion.ciudad == 'cadiz') {
      preciom2 = 1555 * this.superficie();
    } else if (this.ubicacion.ciudad == 'cordoba') {
      preciom2 = 1220 * this.superficie();
    } else if (this.ubicacion.ciudad == 'huelva') {
      preciom2 = 1253 * this.superficie();
    }
    return Math.round(preciom2);
  }

  superficie(): number {
    let superficie: number;
    superficie = this._ancho * this.largo;
    return superficie;
  }

  todo() {
    return `Superficie: ${this.superficie()}, 
      Precio: ${this.preciom2()}, 
      Ubicación: [ ${this.ubi()} ], 
      Caracteristicas: [ ${this.carac()} ], 
      Estado: [ ${this.est()} ]`;
  }
}
