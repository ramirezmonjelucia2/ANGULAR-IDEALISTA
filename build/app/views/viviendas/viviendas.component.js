import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ViviendasComponent = class ViviendasComponent {
    constructor(viviendaService) {
        this.viviendaService = viviendaService;
    }
    ngOnInit() {
        this.getViviendas();
    }
    onSelect(vivienda) {
        this.selectedVivienda = vivienda;
    }
    getViviendas() {
        this.viviendaService.getViviendas().subscribe(viviendas => this.viviendas = viviendas);
    }
};
ViviendasComponent = __decorate([
    Component({
        selector: 'app-viviendas',
        templateUrl: './viviendas.component.html',
        styleUrls: ['./viviendas.component.css']
    })
], ViviendasComponent);
export { ViviendasComponent };
//# sourceMappingURL=viviendas.component.js.map