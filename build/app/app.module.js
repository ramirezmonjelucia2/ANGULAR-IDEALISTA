"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var highcharts_angular_1 = require("highcharts-angular");
var app_component_1 = require("./app.component");
var empleados_component_1 = require("./views/empleados/empleados.component");
var about_me_component_1 = require("./views/about-me/about-me.component");
var dashboard_component_1 = require("./views/dashboard/dashboard.component");
var info_viviendas_component_1 = require("./views/info-viviendas/info-viviendas.component");
var crear_empleado_component_1 = require("./views/crear-empleado/crear-empleado.component");
var editar_empleado_component_1 = require("./views/editar-empleado/editar-empleado.component");
var chalets_component_1 = require("./views/chalets/chalets.component");
var casas_component_1 = require("./views/casas/casas.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                empleados_component_1.EmpleadosComponent,
                about_me_component_1.AboutMeComponent,
                dashboard_component_1.DashboardComponent,
                info_viviendas_component_1.InfoViviendasComponent,
                crear_empleado_component_1.CrearEmpleadoComponent,
                editar_empleado_component_1.EditarEmpleadoComponent,
                chalets_component_1.ChaletsComponent,
                casas_component_1.CasasComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                highcharts_angular_1.HighchartsChartModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map