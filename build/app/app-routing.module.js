"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_me_component_1 = require("./views/about-me/about-me.component");
var crear_empleado_component_1 = require("./views/crear-empleado/crear-empleado.component");
var dashboard_component_1 = require("./views/dashboard/dashboard.component");
var editar_empleado_component_1 = require("./views/editar-empleado/editar-empleado.component");
var empleados_component_1 = require("./views/empleados/empleados.component");
var viviendas_component_1 = require("./views/viviendas/viviendas.component");
var routes = [
    { path: 'listado', component: viviendas_component_1.ViviendasComponent },
    { path: 'aboutME', component: about_me_component_1.AboutMeComponent },
    { path: 'empleados', component: empleados_component_1.EmpleadosComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'crear-empleado', component: crear_empleado_component_1.CrearEmpleadoComponent },
    { path: 'editar-empleado/:idEmpleado', component: editar_empleado_component_1.EditarEmpleadoComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        (0, core_1.NgModule)({
            exports: [router_1.RouterModule],
            imports: [router_1.RouterModule.forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map