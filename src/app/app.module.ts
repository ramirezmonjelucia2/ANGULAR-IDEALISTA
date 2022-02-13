import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';

import { EmpleadosComponent } from './views/empleados/empleados.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ViviendasComponent } from './views/viviendas/viviendas.component';
import { InfoViviendasComponent } from './views/info-viviendas/info-viviendas.component';
import { CrearEmpleadoComponent } from './views/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './views/editar-empleado/editar-empleado.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    AboutMeComponent,
    DashboardComponent,
    InfoViviendasComponent,
    ViviendasComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
