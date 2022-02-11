import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
//EL SERVICIO PERMITE DEFINIR METODOS QUE PUEDEN SER REUTILIZADOS EN TODA LA APLICACION
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