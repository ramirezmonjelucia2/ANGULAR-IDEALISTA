import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Empleado } from 'src/app/shared/classes/empleado';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  editarEmpleado: FormGroup;
  submitted = false;
  empleado: Empleado
  titulo = 'EDITAR EMPLEADO'


  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private activeRoute: ActivatedRoute) {
    this.editarEmpleado = this.fb.group({
      idEmpleado: [this.activeRoute.snapshot.paramMap.get("idEmpleado"), Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      sueldobase: ['', Validators.required],
      comisionventa: ['', Validators.required]
    })

  }



  ngOnInit() {
    this.getEmpleado()
  }

  getEmpleado() {
    const idEmpleado = parseInt(this.activeRoute.snapshot.paramMap.get("idEmpleado"))
    this.empleadoService.getEmpleado(idEmpleado).subscribe(
      empleado => {
        this.empleado = empleado
      }
    )
  }

  modificarEmpleado() {

    const empleado: any = {
      idEmpleado: this.editarEmpleado.value.idEmpleado,
      nombre: this.editarEmpleado.value.nombre,
      email: this.editarEmpleado.value.email,
      telefono: this.editarEmpleado.value.telefono,
      sueldobase: this.editarEmpleado.value.sueldobase,
      comisionventa: this.editarEmpleado.value.comisionventa
    }
    this.empleadoService.modificarEmpleado(parseInt(this.activeRoute.snapshot.paramMap.get("idEmpleado")), empleado)
  }

}
