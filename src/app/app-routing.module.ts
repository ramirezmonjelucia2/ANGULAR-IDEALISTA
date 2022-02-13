import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutMeComponent } from './views/about-me/about-me.component';
import { BubblechartComponent } from './views/bubblechart/bubblechart.component';
import { CasasComponent } from './views/casas/casas.component';
import { ChaletsComponent } from './views/chalets/chalets.component';
import { CrearEmpleadoComponent } from './views/crear-empleado/crear-empleado.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditarEmpleadoComponent } from './views/editar-empleado/editar-empleado.component';
import { EmpleadosComponent } from './views/empleados/empleados.component';

const routes: Routes = [
  { path: 'listadocasa', component: CasasComponent},
  { path: 'aboutME', component: AboutMeComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listadochalet', component: ChaletsComponent },
  { path: 'grafico', component: BubblechartComponent },

  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'editar-empleado/:idEmpleado', component: EditarEmpleadoComponent },


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
