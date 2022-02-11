import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/classes/usuario';
let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.usuario = new Usuario();
    }
    ngOnInit() {
    }
    submit() {
        this.loginService.login(this.usuario).subscribe(() => {
            this.router.navigate(['/venta']);
        }, (error) => {
            console.error("Error al realizar el acceso");
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map