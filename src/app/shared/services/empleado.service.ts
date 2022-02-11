import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 //EL SERVICIO PERMITE DEFINIR METODOS QUE PUEDEN SER REUTILIZADOS EN TODA LA APLICACION
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
 

  constructor(
    private httpClient: HttpClient
  ) { }


  getEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>("https://idealistav21.herokuapp.com/empleados");
  }


}
