import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutMeComponent } from './views/about-me/about-me.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmpleadosComponent } from './views/empleados/empleados.component';
import { LoginComponent } from './views/login/login.component';
import { ViviendasComponent } from './views/viviendas/viviendas.component';

const routes: Routes = [
 { path: 'listado', component:ViviendasComponent },
  { path: 'aboutME', component: AboutMeComponent },
  //{ path: 'empleados', component: EmpleadosComponent },
  { path: 'empleadoslist', component: EmpleadosComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
