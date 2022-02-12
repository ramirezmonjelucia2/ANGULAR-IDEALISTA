"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(idEmpleado, nombre, email, telefono, sueldobase, comisionventa, numeroVentas) {
        this.idEmpleado = idEmpleado;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.sueldobase = sueldobase;
        this.comisionventa = comisionventa;
        this.numeroVentas = numeroVentas;
    }
    Empleado.prototype.sueldo = function () {
        var sueldo = this.sueldobase + this.numeroVentas * this.comisionventa;
        return sueldo;
    };
    return Empleado;
}());
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.js.map