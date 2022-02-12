export class Empleado {
  idEmpleado: number;
  nombre: string;
  email: string;
  telefono: string;
  sueldobase: number;
  comisionventa: number;
  numeroVentas: number
  constructor(
    idEmpleado: 0,
    nombre: '',
    email: '',
    telefono: '',
    sueldobase: 950,
    comisionventa: 100,
    numeroVentas: 0

  ) {
    this.idEmpleado = idEmpleado;
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.sueldobase = sueldobase;
    this.comisionventa = comisionventa;
    this.numeroVentas = numeroVentas
  }


  sueldo() {
    let sueldo = this.sueldobase + this.numeroVentas * this.comisionventa;
    return sueldo;
  }
}
