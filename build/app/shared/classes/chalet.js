"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalet = void 0;
var vivienda_1 = require("./vivienda");
var Chalet = /** @class */ (function (_super) {
    __extends(Chalet, _super);
    function Chalet(idVivienda, largo, ancho, ubicacion, caracteristicas, estado, piscina, largojardin, anchojardin) {
        var _this = _super.call(this, idVivienda, largo, ancho, ubicacion, caracteristicas, estado) || this;
        _this._piscina = piscina;
        _this._largojardin = largojardin;
        _this._anchojardin = anchojardin;
        return _this;
    }
    Object.defineProperty(Chalet.prototype, "piscina", {
        get: function () {
            return this._piscina;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chalet.prototype, "largojardin", {
        get: function () {
            return this._largojardin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chalet.prototype, "anchojardin", {
        get: function () {
            return this._anchojardin;
        },
        enumerable: false,
        configurable: true
    });
    Chalet.prototype.preciom2 = function () {
        var preciom2 = _super.prototype.preciom2.call(this);
        var preciojardin = this.m2jardin();
        preciom2 = preciom2 + preciojardin;
        if (this._piscina == true) {
            preciom2 += 200;
        }
        return Math.round(preciom2);
    };
    Chalet.prototype.m2jardin = function () {
        var preciom2jardin;
        if (this.ubicacion.ciudad == 'sevilla') {
            preciom2jardin = this.sjardin() * 1386;
        }
        else if (this.ubicacion.ciudad == 'almeria') {
            preciom2jardin = this.sjardin() * 1088;
        }
        else if (this.ubicacion.ciudad == 'jaen') {
            preciom2jardin = this.sjardin() * 823;
        }
        else if (this.ubicacion.ciudad == 'malaga') {
            preciom2jardin = this.sjardin() * 2442;
        }
        else if (this.ubicacion.ciudad == 'granada') {
            preciom2jardin = this.sjardin() * 1375;
        }
        else if (this.ubicacion.ciudad == 'cadiz') {
            preciom2jardin = this.sjardin() * 1555;
        }
        else if (this.ubicacion.ciudad == 'cordoba') {
            preciom2jardin = this.sjardin() * 1220;
        }
        else if (this.ubicacion.ciudad == 'huelva') {
            preciom2jardin = this.sjardin() * 1253;
        }
        return preciom2jardin;
    };
    Chalet.prototype.sjardin = function () {
        return this._anchojardin * this._largojardin;
    };
    Chalet.prototype.todo = function () {
        var resultado;
        resultado = _super.prototype.todo.call(this) + ", \u00BFTiene piscina?: " + this._piscina + ", Superficie del jardin(m2): " + this.sjardin() + ", ";
        return resultado;
    };
    return Chalet;
}(vivienda_1.Vivienda));
exports.Chalet = Chalet;
//# sourceMappingURL=chalet.js.map