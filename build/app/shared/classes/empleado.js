export class Empleado {
    constructor(id, nombre, sueldobase, comisionventa, ventas) {
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
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set sueldobase(sueldo) {
        this._sueldobase = sueldo;
    }
    set comisionventa(comisionventa) {
        this._comisionventa = comisionventa;
    }
    set ventas(ventas) {
        this._ventas = ventas;
    }
    sueldo() {
        let sueldo = this._sueldobase + this.ventas.length * this._comisionventa;
        return sueldo;
    }
}
//# sourceMappingURL=empleado.js.map