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
exports.EmpleadosComponent = void 0;
var core_1 = require("@angular/core");
var empleado_service_1 = require("src/app/shared/services/empleado.service");
var EmpleadosComponent = /** @class */ (function () {
    function EmpleadosComponent(empleadoService) {
        this.empleadoService = empleadoService;
    }
    EmpleadosComponent.prototype.ngOnInit = function () {
        this.getEmpleados();
    };
    EmpleadosComponent.prototype.getEmpleados = function () {
        var _this = this;
        this.empleadoService.getEmpleados().subscribe(function (empleados) { _this.empleados = empleados; });
    };
    EmpleadosComponent.prototype.eliminarEmpleado = function (id) {
        this.empleadoService.eliminarEmpleado(id).subscribe(function () {
            console.log('Eliminado');
        });
    };
    EmpleadosComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-empleados',
            templateUrl: './empleados.component.html',
            styleUrls: ['./empleados.component.css'],
            providers: [empleado_service_1.EmpleadoService]
        }),
        __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
    ], EmpleadosComponent);
    return EmpleadosComponent;
}());
exports.EmpleadosComponent = EmpleadosComponent;
//# sourceMappingURL=empleados.component.js.map