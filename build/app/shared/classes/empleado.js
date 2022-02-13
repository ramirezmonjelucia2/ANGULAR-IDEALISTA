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
    Object.defineProperty(Empleado.prototype, "_sueldobase", {
        get: function () {
            return this.sueldobase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "_comisionventa", {
        get: function () {
            return this.comisionventa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "_numeroVentas", {
        get: function () {
            return this.numeroVentas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "salario", {
        get: function () {
            return Math.round(this.sueldobase + (this.numeroVentas * this.comisionventa));
        },
        enumerable: false,
        configurable: true
    });
    return Empleado;
}());
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.js.map