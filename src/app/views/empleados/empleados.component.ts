import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/shared/interfaces/interfaces';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  //!   -> Este valor no puede ser undefined o nul
  empleados!: Empleado[];
  selectedEmpleado!: Empleado;
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados()
  }
  public mostrarNombre(nombre: string): void {
    alert(`Has seleccionado a ${nombre}`);
  }
  public onSelect(empleado: Empleado) {
    this.selectedEmpleado = empleado
  }
  public getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados)
  }


}
