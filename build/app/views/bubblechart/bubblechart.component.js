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
exports.BubblechartComponent = void 0;
var core_1 = require("@angular/core");
var Highcharts = require("highcharts");
var highcharts_more_1 = require("highcharts/highcharts-more");
var empleado_1 = require("src/app/shared/classes/empleado");
var empleado_service_1 = require("src/app/shared/services/empleado.service");
(0, highcharts_more_1.default)(Highcharts);
var BubblechartComponent = /** @class */ (function () {
    function BubblechartComponent(empleadoService) {
        this.empleadoService = empleadoService;
        this.Highcharts = Highcharts;
        this.chartOptions = {
            chart: {
                renderTo: "container",
                type: "packedbubble",
                height: "100%"
            },
            title: {
                text: "Ventas"
            },
            tooltip: {
                useHTML: true,
                pointFormat: "{point.value}"
            },
            plotOptions: {
                packedbubble: {
                    minSize: "20%",
                    maxSize: "100%",
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true
                    },
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}",
                        style: {
                            color: "black",
                            textOutline: "none",
                            fontWeight: "normal"
                        }
                    }
                }
            },
            series: [
                {
                    type: "packedbubble",
                    name: "Ventas",
                    data: []
                }
            ]
        };
    }
    BubblechartComponent.prototype.ngOnInit = function () {
        this.getMisDatos();
    };
    BubblechartComponent.prototype.getMisDatos = function () {
        var _this = this;
        this.empleadoService.getEmpleados()
            .subscribe(function (result) {
            _this.OEmpleado = result.map(function (empleado) {
                return new empleado_1.Empleado(empleado.idEmpleado, empleado.nombre, empleado.email, empleado.telefono, empleado.suelbase, empleado.comisionventa, empleado.numeroVentas);
            });
            // Creamos los objetos y usamos un método para representar el valor devuelto
            var dataSeries = _this.OEmpleado.map(function (x) { return x.numeroVentas; });
            _this.chartOptions.series[0]["data"] = dataSeries;
            Highcharts.chart("grafventas", _this.chartOptions);
        }, function (error) { return console.log(error); });
    };
    BubblechartComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-bubblechart',
            templateUrl: './bubblechart.component.html',
            styleUrls: ['./bubblechart.component.css']
        }),
        __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
    ], BubblechartComponent);
    return BubblechartComponent;
}());
exports.BubblechartComponent = BubblechartComponent;
//# sourceMappingURL=bubblechart.component.js.map