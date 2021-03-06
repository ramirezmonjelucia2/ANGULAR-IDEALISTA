import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  crearEmpleado: FormGroup;
  submitted = false;
  id: string | null
  titulo = 'CREAR EMPLEADO'
  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private activeRoute: ActivatedRoute) {
    this.crearEmpleado = this.fb.group({
      idEmpleado: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      sueldobase: ['', Validators.required],
      comisionventa: ['', Validators.required]
    })
    this.id = this.activeRoute.snapshot.paramMap.get("idEmpleado")
  }


  ngOnInit(): void {
   
  }


  agregarEmpleado() {
    this.submitted = true
    if (this.crearEmpleado.invalid) {
      return;
    }
    const empleado: any = {
      idEmpleado: this.crearEmpleado.value.idEmpleado,
      nombre: this.crearEmpleado.value.nombre,
      email: this.crearEmpleado.value.email,
      telefono: this.crearEmpleado.value.telefono,
      sueldobase: this.crearEmpleado.value.sueldobase,
      comisionventa: this.crearEmpleado.value.comisionventa
    }
    this.empleadoService.agregarEmpleado(empleado).subscribe(
      () => {
        console.log("Usuario guardado")
      }

    ), (error) => {
      console.log(error);


    }
  }

  
 
}