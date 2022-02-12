import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';
import { Empleado } from 'src/app/shared/classes/empleado';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  empleados!: Empleado[];

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }
  
  public getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados)
  }

}
