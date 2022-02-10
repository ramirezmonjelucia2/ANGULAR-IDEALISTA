import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/shared/interfaces/interfaces';
@Component({
  selector: 'app-info-empleados',
  templateUrl: './info-empleados.component.html',
  styleUrls: ['./info-empleados.component.css']
})
export class InfoEmpleadosComponent implements OnInit {
  @Input()
  //!   -> Este valor no puede ser undefined o nul
  empleado!: Empleado
  constructor() { }

  ngOnInit(): void {
  }

}
