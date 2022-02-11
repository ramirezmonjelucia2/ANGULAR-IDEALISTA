import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let EmpleadoService = class EmpleadoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getEmpleados() {
        return this.httpClient.get("https://idealistav21.herokuapp.com/empleados");
    }
};
EmpleadoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EmpleadoService);
export { EmpleadoService };
//# sourceMappingURL=empleado.service.js.map