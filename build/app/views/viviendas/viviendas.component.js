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
exports.ViviendasComponent = void 0;
var core_1 = require("@angular/core");
var casa_1 = require("src/app/shared/classes/casa");
var vivienda_service_1 = require("src/app/shared/services/vivienda.service");
var ViviendasComponent = /** @class */ (function () {
    function ViviendasComponent(viviendaService) {
        this.viviendaService = viviendaService;
    }
    ViviendasComponent.prototype.ngOnInit = function () {
        this.getVivi();
    };
    ViviendasComponent.prototype.getVivi = function () {
        var _this = this;
        this.viviendaService.getVivi().subscribe(function (arrayEnt) {
            _this.Oviviendas = arrayEnt.map(function (x) {
                return new casa_1.Casa(x.idVivienda, x.largo, x.ancho, x.ubicacion, x.caracteristicas, x.estado, x.cochera);
            });
        });
    };
    ViviendasComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-viviendas',
            templateUrl: './viviendas.component.html',
            styleUrls: ['./viviendas.component.css']
        }),
        __metadata("design:paramtypes", [vivienda_service_1.ViviendaService])
    ], ViviendasComponent);
    return ViviendasComponent;
}());
exports.ViviendasComponent = ViviendasComponent;
//# sourceMappingURL=viviendas.component.js.map