export class Empleado {
  idEmpleado: number;
  nombre: string;
  email: string;
  telefono: string;
  sueldobase: number;
  comisionventa: number;
  numeroVentas: number
  constructor(
    idEmpleado: number,
    nombre: string,
    email: string,
    telefono: string,
    sueldobase: number,
    comisionventa: number,
    numeroVentas: number

  ) {
    this.idEmpleado = idEmpleado;
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.sueldobase = sueldobase;
    this.comisionventa = comisionventa;
    this.numeroVentas = numeroVentas
  }

  get _sueldobase() {
    return this.sueldobase;
  }
  get _comisionventa() {
    return this.comisionventa;
  }
  get _numeroVentas() {
    return this.numeroVentas;
  }
  get salario() {
    return Math.round(this.sueldobase + (this.numeroVentas * this.comisionventa))
  }
}
