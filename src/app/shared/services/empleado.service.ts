import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
