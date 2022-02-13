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
exports.ChaletsComponent = void 0;
var core_1 = require("@angular/core");
var chalet_1 = require("src/app/shared/classes/chalet");
var vivienda_service_1 = require("src/app/shared/services/vivienda.service");
var ChaletsComponent = /** @class */ (function () {
    function ChaletsComponent(viviendaService) {
        this.viviendaService = viviendaService;
    }
    ChaletsComponent.prototype.ngOnInit = function () {
        this.Chalet();
    };
    ChaletsComponent.prototype.Chalet = function () {
        var _this = this;
        this.viviendaService.getChalet().subscribe(function (chalet) {
            _this.viviendas = chalet.map(function (x) {
                return new chalet_1.Chalet(x.idVivienda, x.largo, x.ancho, x.ubicacion, x.caracteristicas, x.estado, x.piscina, x.largojardin, x.anchojardin);
            });
        });
    };
    ChaletsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-chalets',
            templateUrl: './chalets.component.html',
            styleUrls: ['./chalets.component.css']
        }),
        __metadata("design:paramtypes", [vivienda_service_1.ViviendaService])
    ], ChaletsComponent);
    return ChaletsComponent;
}());
exports.ChaletsComponent = ChaletsComponent;
//# sourceMappingURL=chalets.component.js.map