import { Vivienda } from './vivienda';

export class Empleado {
  private _id: number;
  private _nombre: string;
  private _sueldobase: number;
  private _comisionventa: number;
  private _ventas: Array<Vivienda>;
  constructor(
    id: number,
    nombre: string,
    sueldobase: number,
    comisionventa: number,
    ventas: Array<Vivienda>
  ) {
    this._id = id;
    this._nombre = nombre;
    this._sueldobase = sueldobase;
    this._comisionventa = comisionventa;
    this._ventas = ventas;
  }

  get id() {
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }
  get sueldobase() {
    return this._sueldobase;
  }
  get comisionventa() {
    return this._comisionventa;
  }
  get ventas() {
    return this._ventas;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  set sueldobase(sueldo: number) {
    this._sueldobase = sueldo;
  }
  set comisionventa(comisionventa: number) {
    this._comisionventa = comisionventa;
  }
  set ventas(ventas: Vivienda[]) {
    this._ventas = ventas;
  }

  sueldo() {
    let sueldo = this._sueldobase + this.ventas.length * this._comisionventa;
    return sueldo;
  }
}
