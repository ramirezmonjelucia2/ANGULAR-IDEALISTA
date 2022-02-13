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
var Highcharts = require("highcharts");
var empleado_1 = require("src/app/shared/classes/empleado");
var empleado_service_1 = require("src/app/shared/services/empleado.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(empleadoService) {
        this.empleadoService = empleadoService;
        this.Highcharts = Highcharts;
        this.chartOptions = {
            chart: {
                type: "column"
            },
            title: {
                text: 'Salarios de los empleados según sus ventas'
            },
            xAxis: {
                categories: []
            },
            yAxis: {
                title: {
                    text: 'Salario'
                }
            },
            series: [
                {
                    type: "column",
                    name: "Salario",
                    data: []
                }
            ],
            noData: {
                style: {
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#303030"
                }
            }
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMisDatos();
    };
    DashboardComponent.prototype.getMisDatos = function () {
        var _this = this;
        this.empleadoService.getEmpleados()
            .subscribe(function (result) {
            _this.OEmpleado = result.map(function (empleado) {
                return new empleado_1.Empleado(empleado.idEmpleado, empleado.nombre, empleado.email, empleado.telefono, empleado.suelbase, empleado.comisionventa, empleado.numeroVentas);
            });
            // Creamos los objetos y usamos un método para representar el valor devuelto
            var dataSeries = _this.OEmpleado.map(function (x) { return x.salario; });
            var dataCategorias = _this.OEmpleado.map(function (x) { return x.nombre; });
            _this.chartOptions.series[0]["data"] = dataSeries;
            _this.chartOptions.xAxis["categories"] = dataCategorias;
            Highcharts.chart("grafsalarios", _this.chartOptions);
        }, function (error) { return console.log(error); });
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