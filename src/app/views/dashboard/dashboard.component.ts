import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/shared/classes/empleado';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empleados: Empleado[] = []
  constructor(private empleadoService: EmpleadoService) { }
  /*El constructor espera que Angular inyecte el HeroService en una propiedad privada de heroService.
  El método del ciclo de vida ngOnInit() llama a getHeroes(). */
  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados);
  }
}