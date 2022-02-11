import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
        this.empleados = [];
    }
    /*El constructor espera que Angular inyecte el HeroService en una propiedad privada de heroService.
    El método del ciclo de vida ngOnInit() llama a getHeroes(). */
    ngOnInit() {
        this.getEmpleados();
    }
    getEmpleados() {
        this.empleadoService.getEmpleados()
            .subscribe(empleados => this.empleados = empleados.slice(0, 3));
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map