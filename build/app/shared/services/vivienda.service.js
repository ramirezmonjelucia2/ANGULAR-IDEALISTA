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
exports.ViviendaService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ViviendaService = /** @class */ (function () {
    function ViviendaService(httpClient) {
        this.httpClient = httpClient;
        this.url = "https://idealista-api.herokuapp.com";
    }
    ViviendaService.prototype.getCasa = function () {
        var url = this.url + "/viviendas/Casa";
        return this.httpClient.get(url);
    };
    ViviendaService.prototype.getChalet = function () {
        var url = this.url + "/viviendas/Chalet";
        return this.httpClient.get(url);
    };
    ViviendaService.prototype.venta = function (idVivienda, idEmpleado) {
        var url = this.url + "/venta/" + idVivienda + "/" + idEmpleado;
        return this.httpClient.put(url, null);
    };
    ViviendaService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ViviendaService);
    return ViviendaService;
}());
exports.ViviendaService = ViviendaService;
//# sourceMappingURL=vivienda.service.js.map