"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//EL SERVICIO PERMITE DEFINIR METODOS QUE PUEDEN SER REUTILIZADOS EN TODA LA APLICACION
var EmpleadoService = /** @class */ (function () {
    function EmpleadoService(httpClient) {
        this.httpClient = httpClient;
        this.url = "http://localhost:3000";
    }
    EmpleadoService.prototype.getEmpleados = function () {
        return this.httpClient.get(this.url + "/empleados");
    };
    EmpleadoService.prototype.agregarEmpleado = function (empleado) {
        var url = this.url + "/empleados";
        return this.httpClient.post(url, empleado);
    };
    EmpleadoService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmpleadoService);
    return EmpleadoService;
}());
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=empleado.service.js.map