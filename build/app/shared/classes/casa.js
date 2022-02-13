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
exports.Casa = void 0;
var vivienda_1 = require("./vivienda");
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(idVivienda, largo, ancho, ubicacion, caracteristicas, estado, cochera) {
        var _this = _super.call(this, idVivienda, largo, ancho, ubicacion, caracteristicas, estado) || this;
        _this._cochera = cochera;
        return _this;
    }
    Casa.prototype.preciom2 = function () {
        var preciom2 = _super.prototype.preciom2.call(this);
        if (this._cochera == true) {
            preciom2 += 1.000;
        }
        return Math.round(preciom2);
    };
    Object.defineProperty(Casa.prototype, "cochera", {
        get: function () {
            return this._cochera;
        },
        enumerable: false,
        configurable: true
    });
    Casa.prototype.todo = function () {
        return _super.prototype.todo.call(this) + "Dispone de cochera: " + this._cochera;
    };
    return Casa;
}(vivienda_1.Vivienda));
exports.Casa = Casa;
//# sourceMappingURL=casa.js.map