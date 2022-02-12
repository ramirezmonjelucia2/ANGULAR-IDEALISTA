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
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var empleado_service_1 = require("src/app/shared/services/empleado.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(empleadoService) {
        this.empleadoService = empleadoService;
        this.empleados = [];
    }
    /*El constructor espera que Angular inyecte el HeroService en una propiedad privada de heroService.
    El método del ciclo de vida ngOnInit() llama a getHeroes(). */
    DashboardComponent.prototype.ngOnInit = function () {
        this.getEmpleados();
    };
    DashboardComponent.prototype.getEmpleados = function () {
        var _this = this;
        this.empleadoService.getEmpleados()
            .subscribe(function (empleados) { return _this.empleados = empleados; });
    };
    DashboardComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map