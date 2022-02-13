"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vivienda = void 0;
var Vivienda = /** @class */ (function () {
    function Vivienda(idVivienda, largo, ancho, ubicacion, caracteristicas, estado) {
        this._idVivienda = idVivienda;
        this._largo = largo;
        this._ancho = ancho;
        this._ubicacion = ubicacion;
        this._caracteristicas = caracteristicas;
        this._estado = estado;
    }
    Object.defineProperty(Vivienda.prototype, "idVivienda", {
        get: function () {
            return this._idVivienda;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vivienda.prototype, "largo", {
        get: function () {
            return this._largo;
        },
        set: function (largo) {
            this._largo = largo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vivienda.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (ancho) {
            this._ancho = ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vivienda.prototype, "ubicacion", {
        get: function () {
            return this._ubicacion;
        },
        set: function (ubicacion) {
            this._ubicacion = ubicacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vivienda.prototype, "caracteristicas", {
        get: function () {
            return this._caracteristicas;
        },
        set: function (caracteristicas) {
            this._caracteristicas = caracteristicas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vivienda.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        enumerable: false,
        configurable: true
    });
    Vivienda.prototype.ubi = function () {
        return ('Municipio: ' +
            this._ubicacion.municipio +
            ', Ciudad: ' +
            this._ubicacion.ciudad +
            ', Codigo postal: ' +
            this._ubicacion.codpost);
    };
    Vivienda.prototype.est = function () {
        return ('Vendido: ' + this._estado.vendido +
            ', Fecha: ' + this._estado.fecha +
            ', Empleado: ' + this._estado.empleado);
    };
    Vivienda.prototype.carac = function () {
        return ('\nHabitaciones: ' +
            this._caracteristicas.habitaciones +
            ', Baños: ' +
            this._caracteristicas.baños +
            ', ¿Tiene ascensor?: ' +
            this._caracteristicas.ascensor +
            '\nEquipamiento: ' +
            this._caracteristicas.equipamiento);
    };
    //Calcular el precio de la vivienda, según la ubicación el precio del m2 varía.
    Vivienda.prototype.preciom2 = function () {
        var preciom2;
        if (this.ubicacion.ciudad == 'sevilla') {
            preciom2 = 1386 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'almeria') {
            preciom2 = 1088 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'jaen') {
            preciom2 = 823 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'malaga') {
            preciom2 = 2442 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'granada') {
            preciom2 = 1375 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'cadiz') {
            preciom2 = 1555 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'cordoba') {
            preciom2 = 1220 * this.superficie();
        }
        else if (this.ubicacion.ciudad == 'huelva') {
            preciom2 = 1253 * this.superficie();
        }
        return Math.round(preciom2);
    };
    Vivienda.prototype.superficie = function () {
        var superficie;
        superficie = this._ancho * this.largo;
        return superficie;
    };
    Vivienda.prototype.todo = function () {
        return "Superficie: " + this.superficie() + ", \n      Precio: " + this.preciom2() + ", \n      Ubicaci\u00F3n: [ " + this.ubi() + " ], \n      Caracteristicas: [ " + this.carac() + " ], \n      Estado: [ " + this.est() + " ]";
    };
    return Vivienda;
}());
exports.Vivienda = Vivienda;
//# sourceMappingURL=vivienda.js.map