import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EmpleadosComponent = class EmpleadosComponent {
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
    }
    ngOnInit() {
        this.getEmpleados();
    }
    mostrarNombre(nombre) {
        alert(`Has seleccionado a ${nombre}`);
    }
    onSelect(empleado) {
        this.selectedEmpleado = empleado;
    }
    getEmpleados() {
        this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados);
    }
};
EmpleadosComponent = __decorate([
    Component({
        selector: 'app-empleados',
        templateUrl: './empleados.component.html',
        styleUrls: ['./empleados.component.css']
    })
], EmpleadosComponent);
export { EmpleadosComponent };
//# sourceMappingURL=empleados.component.js.map