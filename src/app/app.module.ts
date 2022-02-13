import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';


import { AppComponent } from './app.component';
import { EmpleadosComponent } from './views/empleados/empleados.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InfoViviendasComponent } from './views/info-viviendas/info-viviendas.component';
import { CrearEmpleadoComponent } from './views/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './views/editar-empleado/editar-empleado.component';
import { ChaletsComponent } from './views/chalets/chalets.component';
import { CasasComponent } from './views/casas/casas.component';
import { BubblechartComponent } from './views/bubblechart/bubblechart.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    AboutMeComponent,
    DashboardComponent,
    InfoViviendasComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    ChaletsComponent,
    CasasComponent,
    BubblechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
