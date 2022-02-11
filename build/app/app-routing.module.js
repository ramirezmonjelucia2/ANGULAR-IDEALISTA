import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmpleadosComponent } from './views/empleados/empleados.component';
import { ViviendasComponent } from './views/viviendas/viviendas.component';
const routes = [
    { path: 'listado', component: ViviendasComponent },
    { path: 'aboutME', component: AboutMeComponent },
    //{ path: 'empleados', component: EmpleadosComponent },
    { path: 'empleadoslist', component: EmpleadosComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        exports: [RouterModule],
        imports: [RouterModule.forRoot(routes)],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map