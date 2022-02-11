import { __decorate } from "tslib";
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
let LoginService = class LoginService {
    constructor() { }
    login(usuario) {
        return of(Math.random() * (1000 - 0));
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map