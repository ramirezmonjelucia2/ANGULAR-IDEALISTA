import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ViviendaService = class ViviendaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getViviendas() {
        return this.httpClient.get("https://idealistav21.herokuapp.com/viviendas");
    }
};
ViviendaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ViviendaService);
export { ViviendaService };
//# sourceMappingURL=vivienda.service.js.map