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
exports.CrearEmpleadoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var empleado_service_1 = require("src/app/shared/services/empleado.service");
var CrearEmpleadoComponent = /** @class */ (function () {
    function CrearEmpleadoComponent(fb, empleadoService) {
        this.fb = fb;
        this.empleadoService = empleadoService;
        this.submitted = false;
        this.crearEmpleado = this.fb.group({
            idEmpleado: ['', forms_1.Validators.required],
            nombre: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            telefono: ['', forms_1.Validators.required],
            sueldobase: ['', forms_1.Validators.required],
            comisionventa: ['', forms_1.Validators.required],
        });
    }
    CrearEmpleadoComponent.prototype.ngOnInit = function () {
    };
    CrearEmpleadoComponent.prototype.agregarEmpleado = function () {
        this.submitted = true;
        if (this.crearEmpleado.invalid) {
            return;
        }
        var empleado = {
            idEmpleado: this.crearEmpleado.value.idEmpleado,
            nombre: this.crearEmpleado.value.nombre,
            email: this.crearEmpleado.value.email,
            telefono: this.crearEmpleado.value.telefono,
            sueldobase: this.crearEmpleado.value.sueldobase,
            comisionventa: this.crearEmpleado.value.comisionventa
        };
        this.empleadoService.agregarEmpleado(empleado);
    };
    CrearEmpleadoComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-crear-empleado',
            templateUrl: './crear-empleado.component.html',
            styleUrls: ['./crear-empleado.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            empleado_service_1.EmpleadoService])
    ], CrearEmpleadoComponent);
    return CrearEmpleadoComponent;
}());
exports.CrearEmpleadoComponent = CrearEmpleadoComponent;
//# sourceMappingURL=crear-empleado.component.js.map