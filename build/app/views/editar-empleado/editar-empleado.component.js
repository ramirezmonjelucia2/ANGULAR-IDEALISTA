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
exports.EditarEmpleadoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var empleado_service_1 = require("src/app/shared/services/empleado.service");
var EditarEmpleadoComponent = /** @class */ (function () {
    function EditarEmpleadoComponent(fb, empleadoService, activeRoute) {
        this.fb = fb;
        this.empleadoService = empleadoService;
        this.activeRoute = activeRoute;
        this.submitted = false;
        this.titulo = 'EDITAR EMPLEADO';
        this.editarEmpleado = this.fb.group({
            idEmpleado: [this.activeRoute.snapshot.paramMap.get("idEmpleado"), forms_1.Validators.required],
            nombre: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            telefono: ['', forms_1.Validators.required],
            sueldobase: ['', forms_1.Validators.required],
            comisionventa: ['', forms_1.Validators.required]
        });
    }
    EditarEmpleadoComponent.prototype.ngOnInit = function () {
        this.getEmpleado();
    };
    EditarEmpleadoComponent.prototype.getEmpleado = function () {
        var _this = this;
        var idEmpleado = parseInt(this.activeRoute.snapshot.paramMap.get("idEmpleado"));
        this.empleadoService.getEmpleado(idEmpleado).subscribe(function (empleado) {
            _this.empleado = empleado;
        });
    };
    EditarEmpleadoComponent.prototype.modificarEmpleado = function () {
        var empleado = {
            idEmpleado: this.editarEmpleado.value.idEmpleado,
            nombre: this.editarEmpleado.value.nombre,
            email: this.editarEmpleado.value.email,
            telefono: this.editarEmpleado.value.telefono,
            sueldobase: this.editarEmpleado.value.sueldobase,
            comisionventa: this.editarEmpleado.value.comisionventa
        };
        this.empleadoService.modificarEmpleado(parseInt(this.activeRoute.snapshot.paramMap.get("idEmpleado")), empleado);
    };
    EditarEmpleadoComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-editar-empleado',
            templateUrl: './editar-empleado.component.html',
            styleUrls: ['./editar-empleado.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            empleado_service_1.EmpleadoService,
            router_1.ActivatedRoute])
    ], EditarEmpleadoComponent);
    return EditarEmpleadoComponent;
}());
exports.EditarEmpleadoComponent = EditarEmpleadoComponent;
//# sourceMappingURL=editar-empleado.component.js.map