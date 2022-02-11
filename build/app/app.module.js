import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './views/empleados/empleados.component';
import { InfoEmpleadosComponent } from './views/info-empleados/info-empleados.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ViviendasComponent } from './views/viviendas/viviendas.component';
import { InfoViviendasComponent } from './views/info-viviendas/info-viviendas.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            EmpleadosComponent,
            InfoEmpleadosComponent,
            AboutMeComponent,
            DashboardComponent,
            ViviendasComponent,
            InfoViviendasComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map